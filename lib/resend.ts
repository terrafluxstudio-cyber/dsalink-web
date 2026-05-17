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

export async function sendDeadlineEmail(to: string): Promise<boolean> {
  return sendEmail(
    to,
    "DSA closes June 2 - 3 questions to answer before then",
    `Hi there,

The DSA-Sec application window closes June 2, 4:30pm.

Before then, three questions worth answering:

1. Have you identified your child's talent area?
DSA covers 21 talent domains - from sports and performing arts to robotics, languages, and leadership. If you haven't matched your child to specific schools yet:
https://dsalink.sg/dsa-finder

2. Do you know which 3 schools to apply to?
You get exactly 3 choices. Most families either under-apply (only 1-2 schools) or waste a pick on a school that's a poor fit. A simple rule: one reach, one match, one safe.

3. Does your child know what happens after a DSA offer?
Accepting a Confirmed Offer is binding - your child cannot participate in the PSLE posting exercise. Make sure this is a deliberate choice, not a surprise.

Everything you need is at dsalink.sg. Free, no sign-up required, no upsells.

You've got this.

The DSALink Team

Accepting a DSA Confirmed Offer is binding under MOE regulations. Not affiliated with MOE.
Unsubscribe: reply to this email with "unsubscribe".`,
  );
}
