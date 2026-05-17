# Cursor Task: Playbook Welcome Email + Subscribe API Wiring

## Background

`/api/subscribe` currently just logs the email (TODO state). The drip cron reads from `recommend:index` in KV. Subscribers need to be stored in the same KV structure so the drip sequence automatically covers them.

When source is `"playbook"`: send a Playbook summary email immediately, then store in KV for drip.
All other sources: send the existing welcome email, then store in KV for drip.

---

## Step 1: Add `sendPlaybookWelcomeEmail` to `lib/resend.ts`

Add this function after `sendWelcomeEmail`:

```typescript
export async function sendPlaybookWelcomeEmail(to: string): Promise<boolean> {
  return sendEmail(
    to,
    "Your DSA Parent Playbook — saved to your inbox",
    `Hi there,

Here's the DSA Parent Playbook you saved: https://dsalink.sg/dsa-experience

It covers everything P6 families need to know about DSA — from understanding what schools actually look for, to timing your application, to what happens on trial day.

Here's what's inside:

Chapter 1 — What is DSA and who it's really for
Most families misunderstand the eligibility rules. DSA is open to any P6 student — not just top scorers.

Chapter 2 — The talent areas schools accept
Sports, performing arts, academic subjects, leadership. Each school has its own list — and some surprises.

Chapter 3 — How schools actually select
Portfolios, trials, interviews, and auditions. What each stage looks like from the inside.

Chapter 4 — The DSA timeline (and when most families act too late)
The application window opens in May. Most parents only hear about it in August.

Chapter 5 — Open house season: what to look for
How to use open house visits to assess culture fit — not just facilities.

Chapter 6 — Preparing your child without pressure
What coaches and parents of successful DSA applicants do differently.

Chapter 7 — The portfolio and how to build it
What counts as evidence, and how to present it without overpacking.

Chapter 8 — Common mistakes that sink applications
The avoidable ones: wrong talent area, wrong school fit, late timing.

Chapter 9 — After selection: what happens next
Acceptance, posting, and what the first term looks like.

Chapter 10 — Open house questions to ask
A shortlist of questions that reveal what a school is really like.

Chapter 11 — Your DSA checklist
A practical week-by-week checklist for the next 90 days.

Read the full Playbook here: https://dsalink.sg/dsa-experience

---
We'll also send you open house alerts and deadline reminders as DSA season progresses.

Not affiliated with MOE. Unsubscribe anytime — just reply to this email.
DSALink · dsalink.sg`
  );
}
```

---

## Step 2: Update `app/api/subscribe/route.ts`

Replace the entire file with:

```typescript
import { NextRequest, NextResponse } from "next/server";
import { saveRecommendRecord } from "@/lib/db";
import { sendWelcomeEmail, sendPlaybookWelcomeEmail } from "@/lib/resend";
import { nanoid } from "nanoid";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const source = typeof body?.source === "string" ? body.source : "unknown";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Store in KV using the same schema as DSA Finder records
    // so the drip cron automatically covers these subscribers
    await saveRecommendRecord({
      id: nanoid(),
      timestamp: new Date().toISOString(),
      alScore: 0,
      talents: [],
      recommendedSchools: [],
      email,
      utm_source: source,
    });

    // Send source-specific welcome email
    if (source === "playbook") {
      await sendPlaybookWelcomeEmail(email);
    } else {
      await sendWelcomeEmail(email);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[subscribe]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
```

---

## Step 3: Check if `nanoid` is already installed

Run:
```
grep "nanoid" package.json
```

If not present, install it:
```
npm install nanoid
```

If `nanoid` is already used elsewhere in the codebase (likely in `lib/db.ts` or the recommend route), no install needed — just import from the same package.

---

## Verification

1. `npm run build` — no TypeScript errors
2. POST to `/api/subscribe` with `{ "email": "test@example.com", "source": "playbook" }` → returns `{ success: true }`
3. Check Vercel logs (or local console) — no errors
4. If RESEND_API_KEY is set in local `.env.local`, verify a Playbook email arrives at the test address
5. If RESEND_API_KEY not set — build still passes, email is skipped with a warning log

---

## Git commit

```
git add lib/resend.ts app/api/subscribe/route.ts
git commit -m "feat: wire subscribe API to KV and send Playbook welcome email"
```
