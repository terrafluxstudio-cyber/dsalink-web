const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM = "DSALink <hello@dsalink.sg>";
const LOGO_URL = "https://dsalink.sg/logo.png";
const BRAND_BLUE = "#0d3f5f";
const BRAND_GOLD = "#c6a24a";
const SURFACE = "#f8f6f1";
const TEXT = "#1f2937";
const MUTED = "#6b7280";

// ─── HTML wrapper ────────────────────────────────────────────────────────────
function wrapHtml(bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body style="margin:0;padding:0;background:${SURFACE};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:${TEXT};line-height:1.6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:${SURFACE};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="560" cellspacing="0" cellpadding="0" border="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 4px rgba(13,63,95,0.08);">
          <tr>
            <td align="center" style="padding:28px 28px 20px;background:#ffffff;border-bottom:1px solid #ece8de;">
              <img src="${LOGO_URL}" width="64" height="64" alt="DSALink" style="display:block;border-radius:12px;border:0;outline:none;text-decoration:none;">
              <div style="margin-top:10px;font-size:13px;letter-spacing:0.4px;color:${BRAND_BLUE};font-weight:600;">DSALink</div>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 28px 24px;font-size:15px;color:${TEXT};">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px 24px;font-size:11px;color:${MUTED};line-height:1.5;border-top:1px solid #ece8de;background:#fbfaf6;">
              <p style="margin:0 0 4px;">Not affiliated with MOE. All information based on official MOE guidelines.</p>
              <p style="margin:0;">To unsubscribe, reply with "unsubscribe".</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function p(text: string): string {
  return `<p style="margin:0 0 14px;">${text}</p>`;
}

function h2(text: string): string {
  return `<h2 style="margin:24px 0 10px;font-size:16px;font-weight:600;color:${BRAND_BLUE};">${text}</h2>`;
}

function btn(href: string, label: string): string {
  return `<p style="margin:0 0 14px;"><a href="${href}" style="display:inline-block;padding:10px 18px;background:${BRAND_BLUE};color:#ffffff;text-decoration:none;border-radius:8px;font-size:14px;font-weight:600;">${label}</a></p>`;
}

function link(href: string, label: string): string {
  return `<a href="${href}" style="color:${BRAND_BLUE};text-decoration:underline;">${label}</a>`;
}

function signature(): string {
  return `<p style="margin:24px 0 0;color:${MUTED};font-size:14px;">— The DSALink Team</p>`;
}

// ─── Core sender ─────────────────────────────────────────────────────────────
async function sendEmail(
  to: string,
  subject: string,
  text: string,
  html: string,
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
      body: JSON.stringify({ from: FROM, to, subject, text, html }),
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

// ─── Email 1: Welcome (instant, generic source) ──────────────────────────────
export async function sendWelcomeEmail(to: string): Promise<boolean> {
  const subject = "You just found the DSA resource most P6 parents discover too late";
  const text = `Hi there,

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

— The DSALink Team

Not affiliated with MOE. All information based on official MOE guidelines.
Unsubscribe: reply to this email with "unsubscribe".`;

  const html = wrapHtml(
    p("Hi there,") +
      p("Most parents find out about DSA in August — after the June deadline has passed.") +
      p("<strong>You're not one of them.</strong>") +
      p("Here are the 3 things to do right now on DSALink:") +
      h2("1. Find schools that match your child's talent") +
      p(`Use the DSA Finder — filter by talent area, region, and school type. Takes 2 minutes.`) +
      btn("https://dsalink.sg/dsa-finder", "Open the DSA Finder →") +
      h2("2. Check the Open House calendar") +
      p("Schools hold trials and auditions before the June 2 deadline. Some are happening this month.") +
      btn("https://dsalink.sg/open-houses", "View Open House calendar →") +
      h2("3. Understand the timeline") +
      p("If this is your first time hearing about DSA, start here. Clear, step-by-step, no jargon.") +
      btn("https://dsalink.sg/dsa-guide", "Read the DSA guide →") +
      p(`DSALink is free and independent — no school affiliations, no sponsored content. Just the facts.`) +
      signature(),
  );

  return sendEmail(to, subject, text, html);
}

// ─── Email 2: Playbook welcome (instant, source=playbook) ────────────────────
export async function sendPlaybookWelcomeEmail(to: string): Promise<boolean> {
  const subject = "Your DSA Parent Playbook — saved to your inbox";
  const chapters = [
    ["Chapter 1 — What is DSA and who it's really for", "Most families misunderstand the eligibility rules. DSA is open to any P6 student — not just top scorers."],
    ["Chapter 2 — The talent areas schools accept", "Sports, performing arts, academic subjects, leadership. Each school has its own list — and some surprises."],
    ["Chapter 3 — How schools actually select", "Portfolios, trials, interviews, and auditions. What each stage looks like from the inside."],
    ["Chapter 4 — The DSA timeline (and when most families act too late)", "The application window opens in May. Most parents only hear about it in August."],
    ["Chapter 5 — Open house season: what to look for", "How to use open house visits to assess culture fit — not just facilities."],
    ["Chapter 6 — Preparing your child without pressure", "What coaches and parents of successful DSA applicants do differently."],
    ["Chapter 7 — The portfolio and how to build it", "What counts as evidence, and how to present it without overpacking."],
    ["Chapter 8 — Common mistakes that sink applications", "The avoidable ones: wrong talent area, wrong school fit, late timing."],
    ["Chapter 9 — After selection: what happens next", "Acceptance, posting, and what the first term looks like."],
    ["Chapter 10 — Open house questions to ask", "A shortlist of questions that reveal what a school is really like."],
    ["Chapter 11 — Your DSA checklist", "A practical week-by-week checklist for the next 90 days."],
  ];

  const text = `Hi there,

Here's the DSA Parent Playbook you saved: https://dsalink.sg/dsa-experience

It covers everything P6 families need to know about DSA — from understanding what schools actually look for, to timing your application, to what happens on trial day.

Here's what's inside:

${chapters.map(([title, desc]) => `${title}\n${desc}`).join("\n\n")}

Read the full Playbook here: https://dsalink.sg/dsa-experience

---
We'll also send you open house alerts and deadline reminders as DSA season progresses.

— The DSALink Team

Not affiliated with MOE. Unsubscribe anytime — just reply to this email.`;

  const html = wrapHtml(
    p("Hi there,") +
      p(`Here's the DSA Parent Playbook you saved: ${link("https://dsalink.sg/dsa-experience", "dsalink.sg/dsa-experience")}`) +
      p("It covers everything P6 families need to know about DSA — from understanding what schools actually look for, to timing your application, to what happens on trial day.") +
      p("<strong>Here's what's inside:</strong>") +
      chapters
        .map(
          ([title, desc]) =>
            `<p style="margin:0 0 12px;"><strong style="color:${BRAND_BLUE};">${title}</strong><br><span style="color:${MUTED};font-size:14px;">${desc}</span></p>`,
        )
        .join("") +
      btn("https://dsalink.sg/dsa-experience", "Read the full Playbook →") +
      p(`<span style="color:${MUTED};font-size:13px;">We'll also send open house alerts and deadline reminders as DSA season progresses.</span>`) +
      signature(),
  );

  return sendEmail(to, subject, text, html);
}

// ─── Email 3: Open House (drip, until 5/23) ──────────────────────────────────
export async function sendOpenHouseEmail(to: string): Promise<boolean> {
  const subject = "Most parents go to DSA open houses wrong. Here's what actually works.";
  const text = `Hi there,

You've probably heard: attend the school's open house, look around, ask questions.

That's not wrong. But it misses the point.

DSA open houses are the one chance for your child to be seen by the school's talent selectors - before any formal application. The parents who understand this show up differently.

A few things that actually matter:

- Bring evidence of your child's talent (photos, certificates, recordings)
- Let your child lead the conversation with teachers, not you
- Ask specific questions about the trial or audition process
- Follow up after - a short thank-you email to the DSA coordinator is rare enough to be remembered

The full Open House field guide is here:
https://dsalink.sg/open-house-guide

And the full calendar of upcoming open houses:
https://dsalink.sg/open-houses

The application window closes June 2. Most open houses happen in May.

— The DSALink Team

Not affiliated with MOE. Unsubscribe: reply with "unsubscribe".`;

  const html = wrapHtml(
    p("Hi there,") +
      p("You've probably heard: attend the school's open house, look around, ask questions.") +
      p("<strong>That's not wrong. But it misses the point.</strong>") +
      p("DSA open houses are the one chance for your child to be seen by the school's talent selectors — before any formal application. The parents who understand this show up differently.") +
      h2("A few things that actually matter:") +
      `<ul style="margin:0 0 14px;padding-left:20px;color:${TEXT};">
        <li style="margin-bottom:6px;">Bring evidence of your child's talent (photos, certificates, recordings)</li>
        <li style="margin-bottom:6px;">Let your child lead the conversation with teachers, not you</li>
        <li style="margin-bottom:6px;">Ask specific questions about the trial or audition process</li>
        <li>Follow up after — a short thank-you email to the DSA coordinator is rare enough to be remembered</li>
      </ul>` +
      btn("https://dsalink.sg/open-house-guide", "Open House field guide →") +
      btn("https://dsalink.sg/open-houses", "Open House calendar →") +
      p(`<span style="color:${MUTED};font-size:13px;">The application window closes June 2. Most open houses happen in May.</span>`) +
      signature(),
  );

  return sendEmail(to, subject, text, html);
}

// ─── Email 4: Deadline reminder (drip, 5/24-5/31) ────────────────────────────
export async function sendDeadlineReminderEmail(to: string): Promise<boolean> {
  const subject = "DSA closes June 2 — 3 questions to answer before then";
  const text = `Hi there,

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

— The DSALink Team

Not affiliated with MOE. Unsubscribe: reply with "unsubscribe".`;

  const html = wrapHtml(
    p("Hi there,") +
      p(`The DSA-Sec application window closes <strong>June 2, 4:30pm</strong>.`) +
      p("Before then, three questions worth answering:") +
      h2("1. Have you identified your child's talent area?") +
      p("DSA covers 21 talent domains — from sports and performing arts to robotics, languages, and leadership.") +
      btn("https://dsalink.sg/dsa-finder", "Use the DSA Finder →") +
      h2("2. Do you know which 3 schools to apply to?") +
      p("You get exactly 3 choices. A simple rule: <strong>one reach, one match, one safe.</strong>") +
      h2("3. Does your child know what happens after a DSA offer?") +
      p("Accepting a Confirmed Offer is <strong>binding</strong> — your child cannot participate in the PSLE posting exercise.") +
      p(`Everything you need is at ${link("https://dsalink.sg", "dsalink.sg")}.`) +
      signature(),
  );

  return sendEmail(to, subject, text, html);
}

// ─── Email 5 (NEW): Final 24h (drip, 6/1 only, evening) ──────────────────────
export async function sendFinal24hEmail(to: string): Promise<boolean> {
  const subject = "DSA deadline is tomorrow — 3 checks before you submit";
  const text = `Hi there,

DSA-Sec applications close tomorrow, June 2, at 4:30pm SGT.

If you're still deciding, these 3 quick checks will tell you whether to submit:

1. Can you name your top school AND a real reason it fits your child?
"Good reputation" doesn't count. If you can't name something specific - a coach, a CCA achievement, a programme - your child can't either in their interview. Better to skip this school than to apply weakly.

2. Have you talked through what "Confirmed Offer" actually means as a family?
If your child gets a Confirmed Offer and you accept, they cannot enter PSLE posting. That's locked. Make sure your child understands this is a 4-6 year decision, not just "another school option."

3. Is your portfolio ready to attach?
Photos, certificates, recordings, screenshots of achievements. If you're scrambling tonight, do one school well rather than three schools poorly.

Submit through MOE eService:
https://www.moe.gov.sg/secondary/dsa

If you still need to check the timeline or refine your school choice:
https://dsalink.sg/dsa-finder

You've done the work. Tomorrow is just the click.

— The DSALink Team

Not affiliated with MOE. Unsubscribe: reply with "unsubscribe".`;

  const html = wrapHtml(
    p("Hi there,") +
      p(`DSA-Sec applications close <strong style="color:${BRAND_BLUE};">tomorrow, June 2, at 4:30pm SGT</strong>.`) +
      p("If you're still deciding, these 3 quick checks will tell you whether to submit:") +
      h2("1. Can you name your top school AND a real reason it fits your child?") +
      p(`"Good reputation" doesn't count. If you can't name something specific — a coach, a CCA achievement, a programme — your child can't either in their interview. <strong>Better to skip this school than to apply weakly.</strong>`) +
      h2("2. Have you talked through what \"Confirmed Offer\" actually means?") +
      p("If your child gets a Confirmed Offer and you accept, they cannot enter PSLE posting. That's locked. Make sure they understand this is a 4–6 year decision, not just another school option.") +
      h2("3. Is your portfolio ready to attach?") +
      p("Photos, certificates, recordings, screenshots of achievements. If you're scrambling tonight, <strong>do one school well rather than three schools poorly.</strong>") +
      btn("https://www.moe.gov.sg/secondary/dsa", "Submit on MOE eService →") +
      p(`Still refining your school choice? ${link("https://dsalink.sg/dsa-finder", "DSA Finder")}`) +
      p(`<strong>You've done the work. Tomorrow is just the click.</strong>`) +
      signature(),
  );

  return sendEmail(to, subject, text, html);
}

// ─── Email 6 (NEW): Post-application D1 (drip, 6/6 only) ─────────────────────
export async function sendPostApplicationDayOneEmail(to: string): Promise<boolean> {
  const subject = "You submitted. Here's the 3-week map for what happens next.";
  const text = `Hi there,

The application window closed last week. If you submitted - good. Now comes the part most families don't plan for: the wait.

Here's a 3-week map.

WEEK 1 (now) — Reset, don't refresh

The first week after submission is the most useless one to spend checking email every hour. Schools haven't started reviewing yet. Use this week to step back. Your child has been training for months; let them rest properly before the next phase.

WEEK 2 — Open the interview prep early

Most parents wait until the school calls before thinking about interview prep. The students who do best start mentally rehearsing now, not in July. We just expanded our DSA interview question bank to 33 real questions, with the psychology behind each one and answer templates:
https://dsalink.sg/dsa-interview

The earlier your child sees these, the more naturally they answer when it matters.

WEEK 3 — Build the "why this school" story

The hardest interview question is "why did you choose us?" Generic answers fail. Use this week to research each of your 3 schools in depth - the coach's philosophy, recent results, the team culture. Two specific details beat ten generic compliments.

What to expect in July-August:
Schools typically reach out to shortlisted students between mid-July and September for trials, auditions, and interviews. You don't need to do anything until they contact you.

— The DSALink Team

Not affiliated with MOE. Unsubscribe: reply with "unsubscribe".`;

  const html = wrapHtml(
    p("Hi there,") +
      p("The application window closed last week. If you submitted — good. Now comes the part most families don't plan for: <strong>the wait</strong>.") +
      p("Here's a 3-week map.") +
      h2("Week 1 (now) — Reset, don't refresh") +
      p("The first week after submission is the most useless one to spend checking email every hour. Schools haven't started reviewing yet. Use this week to step back. Your child has been training for months; let them rest properly before the next phase.") +
      h2("Week 2 — Open the interview prep early") +
      p("Most parents wait until the school calls before thinking about interview prep. The students who do best start mentally rehearsing now, not in July. We just expanded our DSA interview question bank to <strong>33 real questions</strong>, with the psychology behind each one and answer templates.") +
      btn("https://dsalink.sg/dsa-interview", "Open the Q Bank →") +
      p("The earlier your child sees these, the more naturally they answer when it matters.") +
      h2("Week 3 — Build the \"why this school\" story") +
      p(`The hardest interview question is "why did you choose us?" Generic answers fail. Use this week to research each of your 3 schools in depth — the coach's philosophy, recent results, the team culture. <strong>Two specific details beat ten generic compliments.</strong>`) +
      h2("What to expect in July–August") +
      p("Schools typically reach out to shortlisted students between <strong>mid-July and September</strong> for trials, auditions, and interviews. You don't need to do anything until they contact you.") +
      signature(),
  );

  return sendEmail(to, subject, text, html);
}

// ─── Email 7: Post-application (drip, 6/20-6/30 复盘) ────────────────────────
export async function sendPostApplicationEmail(to: string): Promise<boolean> {
  const subject = "Halfway through the wait — what to do with these next two weeks";
  const text = `Hi there,

You're about three weeks past the DSA application deadline. If you've been following our advice, you've already opened the interview question bank and started building your "why this school" story.

This middle stretch is where most families lose focus. The deadline pressure is gone, the school calls haven't come yet, and it's easy to drift.

Two things worth doing in the next 14 days:

1. Pick the 5 hardest questions and practice them out loud
Not in your head - out loud, ideally with someone else asking. The shift from silent thinking to spoken answers exposes everything that's still vague. Top of our list:
- Tell me about yourself (the self-intro framework we wrote covers this)
- Why do you want to come to this school specifically?
- Tell me about a time you failed.
https://dsalink.sg/dsa-interview

2. Map your child's talent story onto each of the 3 schools
Same child, three different versions of "why this school is right." If you can't articulate three distinct stories, you may be applying to schools that overlap too much - in which case you'll learn something useful for the interview itself.

Schools typically begin contacting shortlisted students from mid-July. You still have time.

— The DSALink Team

Not affiliated with MOE. Unsubscribe: reply with "unsubscribe".`;

  const html = wrapHtml(
    p("Hi there,") +
      p(`You're about three weeks past the DSA application deadline. If you've been following our advice, you've already opened the interview question bank and started building your "why this school" story.`) +
      p("This middle stretch is where most families lose focus. The deadline pressure is gone, the school calls haven't come yet, and it's easy to drift.") +
      p("<strong>Two things worth doing in the next 14 days:</strong>") +
      h2("1. Pick the 5 hardest questions and practice them out loud") +
      p("Not in your head — out loud, ideally with someone else asking. The shift from silent thinking to spoken answers exposes everything that's still vague.") +
      `<ul style="margin:0 0 14px;padding-left:20px;color:${TEXT};">
        <li style="margin-bottom:6px;">Tell me about yourself</li>
        <li style="margin-bottom:6px;">Why do you want to come to this school specifically?</li>
        <li>Tell me about a time you failed.</li>
      </ul>` +
      btn("https://dsalink.sg/dsa-interview", "Open the Q Bank →") +
      h2("2. Map your child's talent story onto each of the 3 schools") +
      p(`Same child, three different versions of "why this school is right." If you can't articulate three distinct stories, you may be applying to schools that overlap too much — in which case you'll learn something useful for the interview itself.`) +
      p(`<span style="color:${MUTED};font-size:13px;">Schools typically begin contacting shortlisted students from mid-July. You still have time.</span>`) +
      signature(),
  );

  return sendEmail(to, subject, text, html);
}

// ─── Email 8: Interview prep (drip, 7/1-9/19) ────────────────────────────────
export async function sendInterviewPrepEmail(to: string): Promise<boolean> {
  const subject = "DSA interviews are starting. Here's how to prepare.";
  const text = `Hi there,

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

— The DSALink Team

Not affiliated with MOE. Unsubscribe: reply with "unsubscribe".`;

  const html = wrapHtml(
    p("Hi there,") +
      p("Schools are now reaching out to shortlisted DSA applicants for trials and interviews.") +
      p("<strong>A few things that matter at this stage:</strong>") +
      h2("1. Know your child's talent story") +
      p("Interviewers want to understand the journey, not just the results. Help your child articulate: when did they start, what drives them, what's a challenge they overcame?") +
      h2("2. Do your homework on the school") +
      p("Know the school's DSA programme specifically — not just the school in general. What makes their programme different? Why is it the right fit?") +
      h2("3. Manage expectations on both sides") +
      p("A DSA interview is a two-way assessment. It's okay for your child to ask questions too.") +
      btn("https://dsalink.sg/dsa-interview", "Open the full prep guide →") +
      signature(),
  );

  return sendEmail(to, subject, text, html);
}

// ─── Email 9: Results (drip, 9/20-10/31) ─────────────────────────────────────
export async function sendResultsEmail(to: string): Promise<boolean> {
  const subject = "DSA results are coming. Here's how to think about the decision.";
  const text = `Hi there,

DSA results are being released this month.

If your child receives a Confirmed Offer:
- Accepting is binding - they will not go through the S1 Posting exercise
- The offer is conditional on meeting the minimum PSLE score (AL <= 22 for Express/IP schools)
- Think carefully: is this the right school and programme for the next 4-6 years?

If your child receives a Wait List or no offer:
- They will go through normal PSLE posting in October
- This is not a reflection of your child's ability - DSA selection is highly competitive and programme-specific

Whatever the outcome, you navigated this process. That takes effort.

— The DSALink Team

Not affiliated with MOE. Unsubscribe: reply with "unsubscribe".`;

  const html = wrapHtml(
    p("Hi there,") +
      p("DSA results are being released this month.") +
      h2("If your child receives a Confirmed Offer") +
      `<ul style="margin:0 0 14px;padding-left:20px;color:${TEXT};">
        <li style="margin-bottom:6px;">Accepting is <strong>binding</strong> — they will not go through the S1 Posting exercise</li>
        <li style="margin-bottom:6px;">The offer is conditional on meeting the minimum PSLE score (AL ≤ 22 for Express/IP schools)</li>
        <li>Think carefully: is this the right school and programme for the next 4–6 years?</li>
      </ul>` +
      h2("If your child receives a Wait List or no offer") +
      `<ul style="margin:0 0 14px;padding-left:20px;color:${TEXT};">
        <li style="margin-bottom:6px;">They will go through normal PSLE posting in October</li>
        <li>This is not a reflection of your child's ability — DSA selection is highly competitive and programme-specific</li>
      </ul>` +
      p("Whatever the outcome, you navigated this process. That takes effort.") +
      signature(),
  );

  return sendEmail(to, subject, text, html);
}

// ─── Email 10: Personalised recommendation results (from /api/recommend) ─────
export async function sendRecommendResultsEmail(
  to: string,
  alScore: number,
  recommendedSchools: Array<{ name: string; tier: string }>,
): Promise<boolean> {
  const tierLabels: Record<string, string> = {
    special: "Specialised Schools (DSA Only)",
    safe: "Good matches — secured options",
    reach: "Stretch schools — DSA is your main pathway",
    dream: "Aspirational — talent is the key",
  };

  const grouped: Record<string, string[]> = {};
  for (const school of recommendedSchools) {
    if (!grouped[school.tier]) grouped[school.tier] = [];
    grouped[school.tier].push(school.name);
  }

  const orderedTiers = (["special", "safe", "reach", "dream"] as const).filter(
    (tier) => grouped[tier]?.length,
  );

  const schoolLinesText = orderedTiers
    .map(
      (tier) =>
        `${tierLabels[tier]}:\n${grouped[tier]
          .map((name) => `  - ${name}`)
          .join("\n")}`,
    )
    .join("\n\n");

  const schoolLinesHtml = orderedTiers
    .map(
      (tier) =>
        `<h2 style="margin:20px 0 8px;font-size:15px;font-weight:600;color:${BRAND_BLUE};">${tierLabels[tier]}</h2>
         <ul style="margin:0 0 14px;padding-left:20px;color:${TEXT};">
           ${grouped[tier].map((name) => `<li style="margin-bottom:4px;">${name}</li>`).join("")}
         </ul>`,
    )
    .join("");

  const subject = `Your DSA school recommendations (AL ${alScore})`;
  const text = `Hi there,

Here are your personalised DSA school recommendations based on an estimated AL score of ${alScore}:

${schoolLinesText}

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

We'll send you relevant follow-ups as the DSA calendar unfolds.

— The DSALink Team

Not affiliated with MOE. Unsubscribe: reply with "unsubscribe".`;

  const html = wrapHtml(
    p("Hi there,") +
      p(`Here are your personalised DSA school recommendations based on an estimated AL score of <strong>${alScore}</strong>:`) +
      schoolLinesHtml +
      h2("A few things to do next:") +
      p("<strong>1. Check open house dates</strong><br>Most schools hold trials and auditions before the June 2 application deadline.") +
      btn("https://dsalink.sg/open-houses", "Open House calendar →") +
      p("<strong>2. Read the DSA Parent Playbook</strong><br>Everything about the process — from choosing the right school to what happens after an offer.") +
      btn("https://dsalink.sg/dsa-experience", "Read the Playbook →") +
      p("<strong>3. Prepare for DSA interviews and trials</strong><br>Schools shortlist students based on talent. Here's what selectors actually look for.") +
      btn("https://dsalink.sg/dsa-interview", "Open the interview guide →") +
      p(`<span style="color:${MUTED};font-size:13px;">We'll send you relevant follow-ups as the DSA calendar unfolds.</span>`) +
      signature(),
  );

  return sendEmail(to, subject, text, html);
}
