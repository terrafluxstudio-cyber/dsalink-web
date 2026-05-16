# Cursor Task: Connect email capture to Brevo for automated welcome sequence

Goal: when a user submits their email in `EmailCapture`, also add them to a Brevo contact list so they receive an automated welcome email sequence.

**Pre-requisite (human step, do before running this task):**
1. Sign up at https://brevo.com (free, 300 emails/day)
2. Create a Contact List called "DSALink Leads" — note the List ID (a number, e.g. 3)
3. Get your Brevo API key from Settings → SMTP & API → API Keys
4. Add to Vercel environment variables (and `.env.local`):
   - `BREVO_API_KEY` = your API key
   - `BREVO_LIST_ID` = your list ID (numeric)

---

## Change 1 — Create `lib/brevo.ts`

Create a new file at `lib/brevo.ts`:

```ts
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = process.env.BREVO_LIST_ID
  ? Number(process.env.BREVO_LIST_ID)
  : null;

export async function addContactToBrevo(email: string): Promise<void> {
  if (!BREVO_API_KEY || !BREVO_LIST_ID) {
    console.warn("[brevo] BREVO_API_KEY or BREVO_LIST_ID not set — skipping");
    return;
  }

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": BREVO_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      listIds: [BREVO_LIST_ID],
      updateEnabled: true,
    }),
  });

  if (!res.ok && res.status !== 204) {
    const text = await res.text();
    console.error("[brevo] Failed to add contact:", res.status, text);
  }
}
```

Note: Brevo returns 201 for new contacts and 204 for existing ones (when `updateEnabled: true`). Both are success cases.

---

## Change 2 — Call `addContactToBrevo` in `app/api/recommend/route.ts`

In `app/api/recommend/route.ts`, after `saveRecommendRecord(record)`, add the Brevo call:

```ts
import { addContactToBrevo } from "@/lib/brevo";

// after saveRecommendRecord(record):
if (record.email) {
  await addContactToBrevo(record.email);
}
```

The final route.ts should look like:

```ts
import { NextRequest, NextResponse } from "next/server";
import { saveRecommendRecord } from "@/lib/db";
import { addContactToBrevo } from "@/lib/brevo";
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
    await addContactToBrevo(record.email);
  }

  return NextResponse.json({ ok: true });
}
```

(The UTM fields are from CURSOR_TASK_add_utm_tracking — run that task first, or merge both changes together.)

---

## After changes

Run:
```
npx tsc --noEmit
```

Fix any TypeScript errors.

**Verify:**
1. Set `BREVO_API_KEY` and `BREVO_LIST_ID` in `.env.local`
2. Run `npm run dev`
3. Complete the DSA Finder flow and submit a test email address
4. Log into Brevo → Contacts → check that the email appears in "DSALink Leads" list
5. If you've set up the welcome automation in Brevo already, confirm the first email arrives within a few minutes

**Note:** The Brevo call is fire-and-await but non-blocking to the user — if Brevo fails, the API still returns `{ ok: true }` and the email is already saved to Redis. The console.error in `lib/brevo.ts` will log failures in Vercel Function logs.
