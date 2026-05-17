const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM = "DSALink <hello@dsalink.sg>";

async function sendEmail(
  to: string,
  subject: string,
  text: string,
): Promise<boolean> {
  if (!RESEND_API_KEY) {
    console.warn("[resend] RESEND_API_KEY not set - skipping email");
    return false;
  }

  try {
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
      return false;
    }

    return true;
  } catch (error) {
    console.error("[resend] Failed to send email:", error);
    return false;
  }
}

export async function sendWelcomeEmail(to: string): Promise<boolean> {
  return sendEmail(
    to,
    "You just found the DSA resource most P6 parents discover too late",
    `Hi there,

Most parents find out about DSA in August - after the June deadline has passed.

You're not one of them.

Here are the 3 things to do right now on DSALink:

1. Find schools that match your child's talent
Use the DSA Finder - filter by talent area, region, and school type. Takes 2 minutes.
https://dsalink.sg/dsa-finder

2. Check the Open House calendar
Schools hold trials and auditions before the June 2 deadline. Some are happening this month.
https://dsalink.sg/open-houses

3. Understand the timeline
If this is your first time hearing about DSA, start here. Clear, step-by-step, no jargon.
https://dsalink.sg/dsa-guide

DSALink is free and independent - no school affiliations, no sponsored content. Just the facts.

Good luck,
The DSALink Team

Not affiliated with MOE. All information based on official MOE guidelines.
Unsubscribe: reply to this email with "unsubscribe".`,
  );
}

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
DSALink · dsalink.sg`,
  );
}

export async function sendOpenHouseEmail(to: string): Promise<boolean> {
  return sendEmail(
    to,
    "Most parents go to DSA open houses wrong. Here's what actually works.",
    `Hi there,

You've probably heard: attend the school's open house, look around, ask questions.

That's not wrong. But it misses the point.

DSA open houses are the one chance for your child to be seen by the school's talent selectors - before any formal application. The parents who understand this show up differently.

A few things that actually matter:

- Bring evidence of your child's talent (photos, certificates, recordings - whatever is relevant)
- Let your child lead the conversation with teachers, not you
- Ask specific questions about the trial or audition process, not generic ones about school life
- Follow up after - a short thank-you email to the DSA coordinator is rare enough to be remembered

The full Open House field guide is here:
https://dsalink.sg/open-house-guide

And the full calendar of upcoming open houses (with dates and registration links):
https://dsalink.sg/open-houses

The application window closes June 2. Most open houses happen in May.

The DSALink Team

Not affiliated with MOE. All information based on official MOE guidelines.
Unsubscribe: reply to this email with "unsubscribe".`,
  );
}

export async function sendDeadlineReminderEmail(to: string): Promise<boolean> {
  return sendEmail(
    to,
    "DSA closes June 2 - 3 questions to answer before then",
    `Hi there,

The DSA-Sec application window closes June 2, 4:30pm.

Before then, three questions worth answering:

1. Have you identified your child's talent area?
DSA covers 21 talent domains - from sports and performing arts to robotics, languages, and leadership.
https://dsalink.sg/dsa-finder

2. Do you know which 3 schools to apply to?
You get exactly 3 choices. A simple rule: one reach, one match, one safe.

3. Does your child know what happens after a DSA offer?
Accepting a Confirmed Offer is binding - your child cannot participate in the PSLE posting exercise.

Everything you need is at dsalink.sg.

The DSALink Team

Not affiliated with MOE. All information based on official MOE guidelines.
Unsubscribe: reply to this email with "unsubscribe".`,
  );
}

export async function sendPostApplicationEmail(to: string): Promise<boolean> {
  return sendEmail(
    to,
    "You've applied for DSA. Here's what happens next.",
    `Hi there,

The DSA application window has closed.

If your child applied, here's what to expect over the coming weeks:

- Schools will reach out directly to invite shortlisted students for trials, auditions, or interviews
- This typically happens between July and September
- You don't need to do anything now - just wait for the school's contact

If your child wasn't ready this year, the experience of going through the process is valuable. DSA 2027 applications open in May next year.

In the meantime, we're building a detailed interview preparation guide at:
https://dsalink.sg/dsa-interview

The DSALink Team

Not affiliated with MOE. All information based on official MOE guidelines.
Unsubscribe: reply to this email with "unsubscribe".`,
  );
}

export async function sendInterviewPrepEmail(to: string): Promise<boolean> {
  return sendEmail(
    to,
    "DSA interviews are starting. Here's how to prepare.",
    `Hi there,

Schools are now reaching out to shortlisted DSA applicants for trials and interviews.

A few things that matter at this stage:

1. Know your child's talent story
Interviewers want to understand the journey, not just the results. Help your child articulate: when did they start, what drives them, what's a challenge they overcame?

2. Do your homework on the school
Know the school's DSA programme specifically - not just the school in general. What makes their programme different? Why is it the right fit?

3. Manage expectations on both sides
A DSA interview is a two-way assessment. It's okay for your child to ask questions too.

Our full interview preparation guide:
https://dsalink.sg/dsa-interview

The DSALink Team

Not affiliated with MOE. All information based on official MOE guidelines.
Unsubscribe: reply to this email with "unsubscribe".`,
  );
}

export async function sendResultsEmail(to: string): Promise<boolean> {
  return sendEmail(
    to,
    "DSA results are coming. Here's how to think about the decision.",
    `Hi there,

DSA results are being released this month.

If your child receives a Confirmed Offer:
- Accepting is binding - they will not go through the S1 Posting exercise
- The offer is conditional on meeting the minimum PSLE score (AL <= 22 for Express/IP schools)
- Think carefully: is this the right school and programme for the next 4-6 years?

If your child receives a Wait List or no offer:
- They will go through normal PSLE posting in October
- This is not a reflection of your child's ability - DSA selection is highly competitive and programme-specific

Whatever the outcome, you navigated this process. That takes effort.

The DSALink Team

Not affiliated with MOE. All information based on official MOE guidelines.
Unsubscribe: reply to this email with "unsubscribe".`,
  );
}

export async function sendRecommendResultsEmail(
  to: string,
  alScore: number,
  recommendedSchools: Array<{ name: string; tier: string }>,
): Promise<boolean> {
  const tierLabels: Record<string, string> = {
    special: "Specialised Schools (DSA Only)",
    safe: "Good matches - secured options",
    reach: "Stretch schools - DSA is your main pathway",
    dream: "Aspirational - talent is the key",
  };

  const grouped: Record<string, string[]> = {};
  for (const school of recommendedSchools) {
    if (!grouped[school.tier]) grouped[school.tier] = [];
    grouped[school.tier].push(school.name);
  }

  const schoolLines = (["special", "safe", "reach", "dream"] as const)
    .filter((tier) => grouped[tier]?.length)
    .map(
      (tier) =>
        `${tierLabels[tier]}:\n${grouped[tier]
          .map((name) => `  - ${name}`)
          .join("\n")}`,
    )
    .join("\n\n");

  return sendEmail(
    to,
    `Your DSA school recommendations (AL ${alScore})`,
    `Hi there,

Here are your personalised DSA school recommendations based on an estimated AL score of ${alScore}:

${schoolLines}

A few things to do next:

1. Check open house dates
Most schools hold trials and auditions before the June 2 application deadline.
https://dsalink.sg/open-houses

2. Read the DSA Parent Playbook
Everything about the process - from choosing the right school to what happens after an offer.
https://dsalink.sg/dsa-experience

3. Prepare for DSA interviews and trials
Schools shortlist students based on talent. Here's what selectors actually look for.
https://dsalink.sg/dsa-interview

We'll send you relevant follow-ups as the DSA calendar unfolds - open house reminders, deadline alerts, and what to expect at each stage.

The DSALink Team

Not affiliated with MOE. All information based on official MOE guidelines.
Unsubscribe: reply to this email with "unsubscribe".`,
  );
}
