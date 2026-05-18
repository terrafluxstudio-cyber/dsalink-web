# Cursor Task: Rewrite email drip to DSA calendar-based phases

Replace the current day-count drip logic with a calendar-phase system.
Every user gets the welcome email immediately. After that, emails are triggered
by DSA calendar milestones — the cron job checks today's date, determines the
current phase, and sends the phase email to all users who haven't received it yet.

---

## Phase definitions

| Phase key | Send window | Content |
|-----------|-------------|---------|
| `open_house` | now → May 23 2026 | Open House guide + upcoming dates |
| `deadline_reminder` | May 24 → June 1 2026 | Application deadline checklist |
| `post_application` | June 2 → June 30 2026 | What happens next after applying |
| `interview_prep` | July 1 → Sept 19 2026 | Interview tips + preparation checklist |
| `results` | Sept 20 → Oct 31 2026 | Offer received — how to decide |

---

## Change 1 — Update `lib/db.ts`

Replace `email2_sent` and `email3_sent` with phase-based flags:

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
  // Phase email tracking — true once sent
  phase_open_house_sent?: boolean;
  phase_deadline_reminder_sent?: boolean;
  phase_post_application_sent?: boolean;
  phase_interview_prep_sent?: boolean;
  phase_results_sent?: boolean;
}
```

---

## Change 2 — Add phase email content to `lib/resend.ts`

Add these 5 new functions after `sendWelcomeEmail`:

```ts
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
Unsubscribe: reply with "unsubscribe".`
  );
}

export async function sendDeadlineReminderEmail(to: string): Promise<void> {
  await sendEmail(
    to,
    "DSA closes June 2 — 3 questions to answer before then",
    `Hi there,

The DSA-Sec application window closes June 2, 4:30pm.

Before then, three questions worth answering:

1. Have you identified your child's talent area?
DSA covers 21 talent domains — from sports and performing arts to robotics, languages, and leadership.
→ https://dsalink.sg/dsa-finder

2. Do you know which 3 schools to apply to?
You get exactly 3 choices. A simple rule: one reach, one match, one safe.

3. Does your child know what happens after a DSA offer?
Accepting a Confirmed Offer is binding — your child cannot participate in the PSLE posting exercise.

Everything you need is at dsalink.sg.

The DSALink Team

Not affiliated with MOE. All information based on official MOE guidelines.
Unsubscribe: reply with "unsubscribe".`
  );
}

export async function sendPostApplicationEmail(to: string): Promise<void> {
  await sendEmail(
    to,
    "You've applied for DSA. Here's what happens next.",
    `Hi there,

The DSA application window has closed.

If your child applied, here's what to expect over the coming weeks:

- Schools will reach out directly to invite shortlisted students for trials, auditions, or interviews
- This typically happens between July and September
- You don't need to do anything now — just wait for the school's contact

If your child wasn't ready this year, the experience of going through the process is valuable. DSA 2027 applications open in May next year.

In the meantime, we're building a detailed interview preparation guide at:
→ https://dsalink.sg/dsa-interview

The DSALink Team

Not affiliated with MOE. All information based on official MOE guidelines.
Unsubscribe: reply with "unsubscribe".`
  );
}

export async function sendInterviewPrepEmail(to: string): Promise<void> {
  await sendEmail(
    to,
    "DSA interviews are starting. Here's how to prepare.",
    `Hi there,

Schools are now reaching out to shortlisted DSA applicants for trials and interviews.

A few things that matter at this stage:

1. Know your child's talent story
Interviewers want to understand the journey, not just the results. Help your child articulate: when did they start, what drives them, what's a challenge they overcame?

2. Do your homework on the school
Know the school's DSA programme specifically — not just the school in general. What makes their programme different? Why is it the right fit?

3. Manage expectations on both sides
A DSA interview is a two-way assessment. It's okay for your child to ask questions too.

Our full interview preparation guide:
→ https://dsalink.sg/dsa-interview

The DSALink Team

Not affiliated with MOE. All information based on official MOE guidelines.
Unsubscribe: reply with "unsubscribe".`
  );
}

export async function sendResultsEmail(to: string): Promise<void> {
  await sendEmail(
    to,
    "DSA results are coming. Here's how to think about the decision.",
    `Hi there,

DSA results are being released this month.

If your child receives a Confirmed Offer:
- Accepting is binding — they will not go through the S1 Posting exercise
- The offer is conditional on meeting the minimum PSLE score (AL ≤ 22 for Express/IP schools)
- Think carefully: is this the right school and programme for the next 4–6 years?

If your child receives a Wait List or no offer:
- They will go through normal PSLE posting in October
- This is not a reflection of your child's ability — DSA selection is highly competitive and programme-specific

Whatever the outcome, you navigated this process. That takes effort.

The DSALink Team

Not affiliated with MOE. All information based on official MOE guidelines.
Unsubscribe: reply with "unsubscribe".`
  );
}
```

---

## Change 3 — Rewrite `app/api/cron/drip/route.ts`

Replace the entire file with this calendar-phase logic:

```ts
import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { getRecentRecords } from "@/lib/db";
import {
  sendOpenHouseEmail,
  sendDeadlineReminderEmail,
  sendPostApplicationEmail,
  sendInterviewPrepEmail,
  sendResultsEmail,
} from "@/lib/resend";

const CRON_SECRET = process.env.CRON_SECRET;

type Phase =
  | "open_house"
  | "deadline_reminder"
  | "post_application"
  | "interview_prep"
  | "results"
  | null;

function getCurrentPhase(now: Date): Phase {
  const y = now.getFullYear();
  const m = now.getMonth() + 1; // 1-based
  const d = now.getDate();

  // Encode as YYYYMMDD for easy comparison
  const today = y * 10000 + m * 100 + d;

  if (today <= 20260523) return "open_house";
  if (today <= 20260601) return "deadline_reminder";
  if (today <= 20260630) return "post_application";
  if (today <= 20260919) return "interview_prep";
  if (today <= 20261031) return "results";
  return null;
}

const PHASE_CONFIG: Record<
  NonNullable<Phase>,
  {
    flag: string;
    send: (email: string) => Promise<void>;
  }
> = {
  open_house: {
    flag: "phase_open_house_sent",
    send: sendOpenHouseEmail,
  },
  deadline_reminder: {
    flag: "phase_deadline_reminder_sent",
    send: sendDeadlineReminderEmail,
  },
  post_application: {
    flag: "phase_post_application_sent",
    send: sendPostApplicationEmail,
  },
  interview_prep: {
    flag: "phase_interview_prep_sent",
    send: sendInterviewPrepEmail,
  },
  results: {
    flag: "phase_results_sent",
    send: sendResultsEmail,
  },
};

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const phase = getCurrentPhase(new Date());
  if (!phase) {
    return NextResponse.json({ ok: true, phase: "none", sent: 0 });
  }

  const { flag, send } = PHASE_CONFIG[phase];
  const records = await getRecentRecords(500);
  let sent = 0;

  for (const record of records) {
    if (!record.email) continue;
    if ((record as Record<string, unknown>)[flag]) continue; // already sent

    await send(record.email);
    await kv.hset(`recommend:${record.id}`, { [flag]: true });
    sent++;
  }

  return NextResponse.json({ ok: true, phase, sent });
}
```

---

## After changes

Run:
```
npx tsc --noEmit
```

Fix any TypeScript errors. Then commit and push.

**To verify:** After deploying, call `/api/cron/drip` with the correct Authorization header and confirm it returns the current phase and sent count.
