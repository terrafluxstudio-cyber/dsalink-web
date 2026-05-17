# Cursor Task: Email drip sequence via Resend + Vercel Cron

Replace Brevo with Resend. Send 3 emails automatically:
- Email 1: immediately when user submits email
- Email 2: 3 days after signup
- Email 3: 7 days after signup

**Pre-requisite (already done by human):**
- `RESEND_API_KEY` is set in Vercel environment variables and `.env.local`

---

## Change 1 — Create `lib/resend.ts`

Create a new file at `lib/resend.ts`:

```ts
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM = "DSALink <hello@dsalink.sg>";

async function sendEmail(to: string, subject: string, text: string): Promise<void> {
  if (!RESEND_API_KEY) {
    console.warn("[resend] RESEND_API_KEY not set — skipping email");
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: FROM, to, subject, text }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("[resend] Failed to send email:", res.status, body);
  }
}

export async function sendWelcomeEmail(to: string): Promise<void> {
  await sendEmail(
    to,
    "You just found the DSA resource most P6 parents discover too late",
    `Hi there,

Most parents find out about DSA in August — after the June deadline has passed.

You're not one of them.

Here are the 3 things to do right now on DSALink:

1. Find schools that match your child's talent
Use the DSA Finder — filter by talent area, region, and school type. Takes 2 minutes.
→ https://dsalink.sg/dsa-finder

2. Check the Open House calendar
Schools hold trials and auditions before the June 2 deadline. Some are happening this month.
→ https://dsalink.sg/open-houses

3. Understand the timeline
If this is your first time hearing about DSA, start here. Clear, step-by-step, no jargon.
→ https://dsalink.sg/dsa-guide

DSALink is free and independent — no school affiliations, no sponsored content. Just the facts.

Good luck,
The DSALink Team

Not affiliated with MOE. All information based on official MOE guidelines.
Unsubscribe: reply to this email with "unsubscribe".`
  );
}

export async function sendOpenHouseEmail(to: string): Promise<void> {
  await sendEmail(
    to,
    "Most parents go to DSA open houses wrong. Here's what actually works.",
    `Hi there,

You've probably heard: attend the school's open house, look around, ask questions.

That's not wrong. But it misses the point.

DSA open houses are the one chance for your child to be seen by the school's talent selectors — before any formal application. The parents who understand this show up differently.

A few things that actually matter:

- Bring evidence of your child's talent (photos, certificates, recordings — whatever is relevant)
- Let your child lead the conversation with teachers, not you
- Ask specific questions about the trial or audition process, not generic ones about school life
- Follow up after — a short thank-you email to the DSA coordinator is rare enough to be remembered

The full Open House field guide is here:
→ https://dsalink.sg/open-house-guide

And the full calendar of upcoming open houses (with dates and registration links):
→ https://dsalink.sg/open-houses

The application window closes June 2. Most open houses happen in May.

The DSALink Team

Not affiliated with MOE. All information based on official MOE guidelines.
Unsubscribe: reply to this email with "unsubscribe".`
  );
}

export async function sendDeadlineEmail(to: string): Promise<void> {
  await sendEmail(
    to,
    "DSA closes June 2 — 3 questions to answer before then",
    `Hi there,

The DSA-Sec application window closes June 2, 4:30pm.

Before then, three questions worth answering:

1. Have you identified your child's talent area?
DSA covers 21 talent domains — from sports and performing arts to robotics, languages, and leadership. If you haven't matched your child to specific schools yet:
→ https://dsalink.sg/dsa-finder

2. Do you know which 3 schools to apply to?
You get exactly 3 choices. Most families either under-apply (only 1–2 schools) or waste a pick on a school that's a poor fit. A simple rule: one reach, one match, one safe.

3. Does your child know what happens after a DSA offer?
Accepting a Confirmed Offer is binding — your child cannot participate in the PSLE posting exercise. Make sure this is a deliberate choice, not a surprise.

Everything you need is at dsalink.sg. Free, no sign-up required, no upsells.

You've got this.

The DSALink Team

Accepting a DSA Confirmed Offer is binding under MOE regulations. Not affiliated with MOE.
Unsubscribe: reply to this email with "unsubscribe".`
  );
}
```

---

## Change 2 — Update `lib/db.ts`

Add `utm_source`, `utm_medium`, `utm_campaign`, `email2_sent`, `email3_sent` to the `RecommendRecord` interface:

```ts
export interface RecommendRecord {
  id: string;
  timestamp: string;
  alScore: number;
  talents: Array<{
    category: string;
    specificArea: string;
    tier: string;
  }>;
  recommendedSchools: Array<{
    name: string;
    tier: "safe" | "reach" | "dream" | "special";
  }>;
  region?: string;
  town?: string;
  email?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  email2_sent?: boolean;
  email3_sent?: boolean;
}
```

---

## Change 3 — Update `app/api/recommend/route.ts`

Replace the Brevo call with Resend. The final file should look like:

```ts
import { NextRequest, NextResponse } from "next/server";
import { saveRecommendRecord } from "@/lib/db";
import { sendWelcomeEmail } from "@/lib/resend";
import { nanoid } from "nanoid";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const record = {
    id: nanoid(),
    timestamp: new Date().toISOString(),
    alScore: body.alScore,
    talents: body.talents,
    recommendedSchools: body.recommendedSchools,
    region: body.region,
    town: body.town,
    ...(body.email ? { email: body.email } : {}),
    ...(body.utm_source ? { utm_source: body.utm_source } : {}),
    ...(body.utm_medium ? { utm_medium: body.utm_medium } : {}),
    ...(body.utm_campaign ? { utm_campaign: body.utm_campaign } : {}),
  };

  await saveRecommendRecord(record);

  if (record.email) {
    await sendWelcomeEmail(record.email);
  }

  return NextResponse.json({ ok: true });
}
```

---

## Change 4 — Create `app/api/cron/drip/route.ts`

Create the cron endpoint that runs daily and sends emails 2 and 3:

```ts
import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { getRecentRecords } from "@/lib/db";
import { sendOpenHouseEmail, sendDeadlineEmail } from "@/lib/resend";

const CRON_SECRET = process.env.CRON_SECRET;

export async function GET(req: NextRequest) {
  // Verify the request is from Vercel Cron
  const authHeader = req.headers.get("authorization");
  if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const records = await getRecentRecords(500);
  const now = Date.now();
  let sent2 = 0;
  let sent3 = 0;

  for (const record of records) {
    if (!record.email) continue;

    const signupTime = new Date(record.timestamp).getTime();
    const daysSince = (now - signupTime) / (1000 * 60 * 60 * 24);

    // Email 2: between day 3 and day 4
    if (daysSince >= 3 && daysSince < 4 && !record.email2_sent) {
      await sendOpenHouseEmail(record.email);
      await kv.hset(`recommend:${record.id}`, { email2_sent: true });
      sent2++;
    }

    // Email 3: between day 7 and day 8
    if (daysSince >= 7 && daysSince < 8 && !record.email3_sent) {
      await sendDeadlineEmail(record.email);
      await kv.hset(`recommend:${record.id}`, { email3_sent: true });
      sent3++;
    }
  }

  return NextResponse.json({ ok: true, sent2, sent3 });
}
```

---

## Change 5 — Update `vercel.json`

Add the cron job to run daily at 1am UTC (9am Singapore time):

```json
{
  "framework": "nextjs",
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "www.dsalink.sg" }],
      "destination": "https://dsalink.sg/:path*",
      "permanent": true
    }
  ],
  "crons": [
    {
      "path": "/api/cron/drip",
      "schedule": "0 1 * * *"
    }
  ]
}
```

Also add `CRON_SECRET` to the environment: generate a random string (e.g. `openssl rand -hex 16` in terminal) and add it as `CRON_SECRET` in Vercel environment variables and `.env.local`.

---

## Change 6 — Delete `lib/brevo.ts`

Remove the file `lib/brevo.ts` as it's no longer needed.

---

## After changes

Run:
```
npx tsc --noEmit
```

Fix any TypeScript errors. Then commit and push. After deployment, verify by:
1. Completing the DSA Finder flow with a real email address
2. Confirming the welcome email arrives within 1–2 minutes
3. In Vercel dashboard → your project → Cron Jobs, confirm the drip cron is listed
