import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { getSiteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute:
      "DSA Interview Preparation 2026 — How to Ace Singapore Secondary School Selection | DSALink",
  },
  description:
    "Complete guide to DSA-Sec 2026 selection exercises: what interviewers look for, how to prepare your child's portfolio, interview questions, sports trials, auditions, and specialised coaching tips for Singapore parents.",
  keywords: [
    "DSA interview preparation Singapore 2026",
    "DSA selection exercise Singapore",
    "DSA secondary school interview tips",
    "DSA portfolio preparation Singapore",
    "DSA sports trial preparation",
    "DSA performing arts audition",
    "DSA specialised coaching Singapore",
    "how to prepare for DSA interview",
    "DSA interview questions Singapore",
    "DSA talent portfolio Primary 6",
  ],
  alternates: { canonical: "/dsa-interview" },
  openGraph: {
    title:
      "DSA Interview Preparation 2026 — How to Ace Singapore Secondary School Selection",
    description:
      "What interviewers look for, portfolio requirements, specialised coaching options, and step-by-step preparation tips for DSA-Sec 2026 selection exercises.",
    type: "article",
    url: "/dsa-interview",
    siteName: "DSALink",
  },
};

/* ── JSON-LD ──────────────────────────────────────────────────────── */

function buildInterviewStructuredData() {
  const base = getSiteUrl();
  const pageUrl = `${base}/dsa-interview`;

  const howToSteps = [
    {
      "@type": "HowToStep",
      name: "Start Building Your Portfolio in Primary 4 or 5",
      text: "Compile competition results, grading certificates, and coach/teacher endorsements over two or more years. Panels want to see sustained commitment — not a last-minute rush.",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "Research Each School's Selection Criteria",
      text: "Visit school open houses in May 2026 and read the school's DSA page carefully. Each school specifies the talent areas it accepts, minimum competition levels, and what documents to submit. Match your child's strengths to schools that actively recruit in that domain.",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "Prepare a Clear, Honest Talent Statement",
      text: "Write a concise paragraph (100–150 words) explaining what your child loves about their talent, their best achievement, and why they want to pursue it at that school. Authenticity matters — interviewers ask follow-up questions.",
      position: 3,
    },
    {
      "@type": "HowToStep",
      name: "Practise the Interview Format",
      text: "Run two or three mock interviews at home. Use open-ended questions: 'Tell me about a time you had to push through a difficult training session.' Focus on listening and genuine reflection, not scripted answers.",
      position: 4,
    },
    {
      "@type": "HowToStep",
      name: "Prepare All Documentary Evidence",
      text: "Scan and organise: competition certificates, result slips, graded examination results (ABRSM/Trinity/NAFA), and photos of trophies or performances. Schools typically accept PDFs submitted through the MOE DSA-Sec Portal or directly at the trial/audition.",
      position: 5,
    },
    {
      "@type": "HowToStep",
      name: "Attend Trials or Auditions in Peak Physical / Artistic Condition",
      text: "For sports: maintain regular training leading up to the trial date, get adequate rest in the 48 hours before, and bring required equipment (rackets, shin guards, etc.). For performing arts: know your pieces thoroughly so nerves don't interfere with execution.",
      position: 6,
    },
  ];

  const faqs = [
    {
      q: "What do DSA interviewers look for in Primary 6 students?",
      a: "Panels look for three things above all: authentic passion (can the student talk spontaneously and knowledgeably about their talent?), evidence of consistent effort (training logs, competition history over multiple years), and character fit (does the student display resilience, teamwork, and coachability?). Academic results are not the primary criterion for DSA.",
    },
    {
      q: "How early should my child start preparing for a DSA interview?",
      a: "Ideally Primary 4 or 5. This gives time to build a genuine track record — zonal competition results, graded examination passes, or science competition participation — before the DSA exercise opens in May of the Primary 6 year. Preparation started in Primary 6 Term 1 is still useful for polishing presentation skills, but cannot manufacture the years of documented achievement panels want to see.",
    },
    {
      q: "What are common DSA interview questions in Singapore secondary schools?",
      a: "Common questions include: 'What is your proudest achievement in [talent area] and what did you learn from it?', 'Describe a time you failed or faced a setback in training/competition — how did you respond?', 'Why do you want to join this school specifically?', 'What do you hope to contribute to the school's CCA programme?', and 'If you could change one thing about how you have trained so far, what would it be?' Schools in science and technology may add subject-knowledge questions or present a short problem to solve on the spot.",
    },
    {
      q: "What is a DSA talent portfolio and what should it include?",
      a: "A DSA talent portfolio is a collection of evidence supporting your child's claim to a talent domain. It typically includes: competition certificates or results (ranked, not just participation), graded examination results (ABRSM/Trinity Guildhall/NAFA for performing arts; national competition standing for sports and science), a brief personal statement, coach or teacher endorsement letters, and photographs or video links showing performance or competition participation. Keep it to 8–12 pages maximum — panels review many portfolios and value clarity.",
    },
    {
      q: "What specialised coaching programmes help build a DSA-worthy portfolio?",
      a: "For sports: national sports association development squads (e.g., Singapore Athletics Association, Swimming Singapore) and reputable academy programmes provide structured competition exposure. For performing arts: ABRSM, Trinity Guildhall, and NAFA graded examinations are universally recognised benchmarks. For science and technology: the Singapore Science and Engineering Fair (SSEF), NUS Physics Olympiad, National Olympiad in Informatics, and MOE Science Mentorship Programme all carry strong recognition with school panels. For leadership and humanities: National Schools Debate Championships and National Youth Council youth leadership certifications are well regarded.",
    },
    {
      q: "How many DSA applications should my child submit?",
      a: "There is no cap on the number of schools you can apply to through the MOE DSA-Sec Portal. Most families apply to between three and six schools. Apply strategically: include two or three 'target' schools where your child's talent level genuinely fits, one or two aspirational schools, and one 'safety' school with a lower competition threshold in that talent domain. Spread applications across different schools rather than concentrating on one school's multiple talent domains.",
    },
    {
      q: "What happens at a DSA sports trial in Singapore?",
      a: "A sports trial is a practical assessment conducted by the school's physical education or CCA teachers, often accompanied by a subject head or sports coordinator. Students perform skills relevant to the sport (e.g., dribbling and shooting drills for football; stroke technique for swimming), play in a short game or relay, and may undergo a brief group fitness assessment. Panels note technical skill, game intelligence, coachability under on-the-spot feedback, and attitude. Most trials last 60–90 minutes and are conducted on the school campus.",
    },
    {
      q: "What happens at a DSA performing arts audition in Singapore?",
      a: "A performing arts audition typically involves performing a prepared piece or pieces (school specifies genre and duration), sight-reading or improvisation, and a short interview. For orchestra and band: prepare two contrasting pieces demonstrating technical range; bring your own instrument and music. For choir: prepare one song and expect a short ear-training component. For dance: wear appropriate attire; schools may teach an eight-count phrase on the spot to test learning speed. For drama: prepare a short monologue and be ready for a workshop-style improvisation exercise.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "DSA Interview Preparation 2026 — How to Ace Singapore Secondary School Selection",
        description:
          "Complete guide to DSA-Sec 2026 selection exercises: portfolio building, interview preparation, sports trials, performing arts auditions, and specialised coaching for Singapore parents.",
        url: pageUrl,
        datePublished: "2026-05-14",
        dateModified: "2026-05-14",
        author: {
          "@type": "Organization",
          name: "DSALink",
          url: base,
        },
        publisher: {
          "@type": "Organization",
          name: "DSALink",
          url: base,
        },
        mainEntityOfPage: { "@id": pageUrl },
      },
      {
        "@type": "HowTo",
        "@id": `${pageUrl}#howto`,
        name: "How to Prepare Your Child for a DSA-Sec 2026 Selection Exercise",
        description:
          "A step-by-step preparation guide for Singapore parents: building a talent portfolio, researching school criteria, practising for interviews, and attending trials or auditions.",
        totalTime: "P18M",
        step: howToSteps,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };
}

/* ── page sections ────────────────────────────────────────────────── */

const selectionTypes = [
  {
    icon: "🎤",
    title: "Panel Interview",
    who: "All talent domains",
    what: "2–3 teachers assess passion, character, and fit. Questions about achievements, setbacks, and motivation.",
    tip: "Prepare real stories, not scripted answers. Panels probe for authenticity.",
  },
  {
    icon: "⚽",
    title: "Sports Trial",
    who: "All sports domains",
    what: "60–90-min skills assessment and mini-game. Coaches evaluate technique, game IQ, and coachability.",
    tip: "Train consistently in the weeks before. Bring the right gear. Attitude counts as much as skill.",
  },
  {
    icon: "🎵",
    title: "Performing Arts Audition",
    who: "Music, Dance, Drama",
    what: "Prepared pieces plus sight-reading or improvisation. Panels assess technical standard and artistic expression.",
    tip: "For music: know your pieces without a stand. For dance: show willingness to try new choreography on the spot.",
  },
  {
    icon: "🔬",
    title: "Aptitude Test / Project Showcase",
    who: "Science, Technology, Humanities",
    what: "Written problem-solving or portfolio review. Some schools ask students to present a project or experiment.",
    tip: "Participate in recognised competitions (SSEF, NOI, Olympiads). A record of independent projects is compelling.",
  },
  {
    icon: "🏅",
    title: "Leadership Assessment",
    who: "Leadership & Community domains",
    what: "Group activity or discussion observed by a panel, followed by individual reflection interview.",
    tip: "Demonstrate listening and synthesis, not just speaking. Show you can move a group forward, not dominate it.",
  },
];

const coachingTable = [
  {
    domain: "Sports",
    recognised: [
      "National sports association development squads",
      "SSC-affiliated academy programmes",
      "Zonal / national competition results",
    ],
    benchmark: "Zonal finalist or above",
  },
  {
    domain: "Music",
    recognised: [
      "ABRSM Grade 6+ (Distinction/Merit preferred)",
      "Trinity Guildhall Grade 6+",
      "NAFA / Yong Siew Toh examinations",
      "SYF Central Judging participation",
    ],
    benchmark: "Grade 6 Merit or higher",
  },
  {
    domain: "Dance / Drama",
    recognised: [
      "RAD / CSTD ballet examinations",
      "SYF Arts Presentation",
      "National Schools Drama Competition",
      "NAFA Performing Arts courses",
    ],
    benchmark: "SYF participation or competition placement",
  },
  {
    domain: "Science & Tech",
    recognised: [
      "Singapore Science & Engineering Fair (SSEF)",
      "National Olympiad in Informatics (NOI)",
      "Singapore Mathematical Olympiad (SMO)",
      "NUS Physics / Chemistry Olympiad",
      "MOE Science Mentorship Programme",
    ],
    benchmark: "Certificate of Distinction or above",
  },
  {
    domain: "Humanities / Debate",
    recognised: [
      "National Schools Debate Championships",
      "Singapore Secondary History Bee",
      "National Schools Literary Arts Festival",
      "Model United Nations conferences",
    ],
    benchmark: "Competition placement or adjudicator nomination",
  },
  {
    domain: "Bilingualism / Language",
    recognised: [
      "Singapore Chinese Cultural Foundation programmes",
      "Malay Language Learning and Promotion Committee programmes",
      "Tamil Language Learning and Promotion Committee programmes",
      "MOE Mother Tongue Language elective programmes",
    ],
    benchmark: "Programme participation + higher-level examination",
  },
];

const interviewQs = [
  {
    q: "Tell me about your proudest achievement in [talent area].",
    why: "Tests genuine pride, not a rehearsed highlight reel. Follow-ups probe specifics.",
  },
  {
    q: "Describe a time you failed or hit a setback. How did you respond?",
    why: "Resilience and self-awareness are key character traits DSA panels screen for.",
  },
  {
    q: "Why do you want to join this school specifically — not just any school?",
    why: "Tests whether your child has done real research. Vague answers stand out.",
  },
  {
    q: "What would you contribute to this school's [CCA / programme]?",
    why: "Shifts focus from taking to giving. Panels want future contributors, not only high achievers.",
  },
  {
    q: "If you could change one thing about your training so far, what would it be?",
    why: "Tests self-reflection and growth mindset without a 'right' answer.",
  },
  {
    q: "What will you do if your PSLE score is good enough to enter a higher-ranked school?",
    why: "The commitment rule makes this question important. Honest, committed answers are appreciated.",
  },
];

/* ── component ────────────────────────────────────────────────────── */

export default function DsaInterviewPage() {
  const jsonLd = buildInterviewStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <PageHeader
          crumbLabel="DSA Interview Prep"
          kicker="DSA-Sec 2026 · Selection Exercises"
          title="DSA Interview & Selection Preparation"
          subtitle="Everything Singapore parents need to know: what interviewers look for, how to build a strong portfolio, specialised coaching benchmarks, and how to prepare for trials and auditions."
        />

        <div className="bg-surface">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">

            {/* Alert banner */}
            <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
              <p className="text-[0.875rem] font-semibold text-amber-800">
                📅 DSA-Sec 2026 applications open <strong>6 May 2026</strong> and close <strong>2 June 2026</strong> at 16:30 SGT.
                School open houses are happening <strong>now through late May</strong> — attend to get school-specific selection criteria directly from teachers.
              </p>
            </div>

            {/* ── 1. Selection types ─────────────────────────────── */}
            <section className="mb-10">
              <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                Types of DSA Selection Exercises
              </h2>
              <p className="mb-5 text-[0.9375rem] text-slate-600">
                Schools run different selection formats depending on the talent domain. Your child may face one or a combination of these.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {selectionTypes.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card"
                  >
                    <div className="mb-2 text-2xl">{s.icon}</div>
                    <h3 className="mb-0.5 font-display text-[0.9375rem] font-semibold text-slate-900">
                      {s.title}
                    </h3>
                    <p className="mb-1 text-[0.75rem] font-semibold uppercase tracking-wide text-intellectual">
                      {s.who}
                    </p>
                    <p className="mb-2 text-[0.8125rem] leading-snug text-slate-600">{s.what}</p>
                    <p className="rounded-lg bg-champagne-subtle px-3 py-2 text-[0.8125rem] leading-snug text-slate-700">
                      <span className="font-semibold text-champagne-dark">Tip:</span> {s.tip}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 2. Step-by-step prep ───────────────────────────── */}
            <section className="mb-10">
              <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                Step-by-Step Preparation Guide
              </h2>
              <p className="mb-5 text-[0.9375rem] text-slate-600">
                Preparation that starts in Primary 4–5 produces the strongest outcomes. Here is the framework parents and students should follow.
              </p>
              <ol className="space-y-4">
                {[
                  {
                    n: 1,
                    title: "Build a genuine track record (Primary 4–5)",
                    body: "Consistent training, competition entries, graded examinations, and teacher endorsements over two or more years. Document everything: dates, results, rankings. Panels can spot a last-minute portfolio instantly.",
                  },
                  {
                    n: 2,
                    title: "Research schools at open houses (May 2026)",
                    body: "Visit open houses — or attend virtual sessions — to ask teachers directly: 'What achievement level do you typically accept?' and 'What does a successful applicant look like?' DSALink's open house calendar lists all 147 schools with confirmed dates.",
                  },
                  {
                    n: 3,
                    title: "Select schools strategically (before applications open, 6 May)",
                    body: "Apply to schools where your child's talent level genuinely fits. Include a mix of aspirational, realistic, and conservative choices. Three to six applications is a healthy range.",
                  },
                  {
                    n: 4,
                    title: "Submit your MOE Portal application (6 May – 2 June, 16:30)",
                    body: "All applications go through go.gov.sg/dsa-sec-portal. You will need the primary school's Corppass login. Upload supporting documents as requested.",
                  },
                  {
                    n: 5,
                    title: "Prepare for selection exercises (June–September)",
                    body: "Schools invite shortlisted students to trials, auditions, or interviews between June and September. For interviews: practise with open-ended questions, not scripts. For trials: maintain your training routine. For auditions: know your prepared pieces cold.",
                  },
                  {
                    n: 6,
                    title: "Receive and evaluate offers (by 12 September)",
                    body: "If your child receives multiple offers, compare carefully: programmes, culture, distance, IP vs O-Level track. The commitment rule means once you accept, PSLE results cannot change the posting. Review every school's ALP, LLP, and CCA strength in the DSALink school directory before deciding.",
                  },
                ].map(({ n, title, body }) => (
                  <li
                    key={n}
                    className="flex gap-4 rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-intellectual text-sm font-bold text-white">
                      {n}
                    </span>
                    <div>
                      <h3 className="mb-1 font-display text-[0.9375rem] font-semibold text-slate-900">
                        {title}
                      </h3>
                      <p className="text-[0.875rem] leading-relaxed text-slate-600">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* ── 3. Common interview questions ─────────────────── */}
            <section className="mb-10">
              <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                Common DSA Interview Questions (and Why Schools Ask Them)
              </h2>
              <p className="mb-5 text-[0.9375rem] text-slate-600">
                These questions appear consistently across schools. Understanding the intent helps your child answer authentically.
              </p>
              <div className="space-y-3">
                {interviewQs.map(({ q, why }) => (
                  <div
                    key={q}
                    className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card"
                  >
                    <p className="mb-1.5 font-semibold text-slate-900 text-[0.9375rem]">&ldquo;{q}&rdquo;</p>
                    <p className="text-[0.875rem] text-slate-500">
                      <span className="font-semibold text-intellectual">Why asked:</span> {why}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 4. Specialised coaching benchmarks ────────────── */}
            <section className="mb-10">
              <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                Specialised Coaching: What Schools Recognise
              </h2>
              <p className="mb-5 text-[0.9375rem] text-slate-600">
                Not all coaching programmes carry equal weight with school panels. These are the credentials and competition pathways that are broadly recognised across Singapore secondary schools for each talent domain.
              </p>
              <div className="overflow-x-auto rounded-xl border border-[#e3ded5] shadow-card">
                <table className="w-full text-left text-[0.8125rem]">
                  <thead>
                    <tr className="border-b border-[#e3ded5] bg-[#f7f4ef]">
                      <th className="px-4 py-3 font-semibold text-slate-700">Talent Domain</th>
                      <th className="px-4 py-3 font-semibold text-slate-700">Recognised Programmes & Credentials</th>
                      <th className="px-4 py-3 font-semibold text-slate-700 whitespace-nowrap">Typical Benchmark</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coachingTable.map((row, i) => (
                      <tr
                        key={row.domain}
                        className={i % 2 === 0 ? "bg-white" : "bg-[#faf9f7]"}
                      >
                        <td className="px-4 py-3 font-semibold text-intellectual align-top whitespace-nowrap">
                          {row.domain}
                        </td>
                        <td className="px-4 py-3 text-slate-600 align-top">
                          <ul className="list-disc list-inside space-y-0.5">
                            {row.recognised.map((r) => (
                              <li key={r}>{r}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="px-4 py-3 text-slate-600 align-top whitespace-nowrap">
                          {row.benchmark}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-[0.8125rem] text-slate-500">
                * Benchmarks are indicative and vary by school. Competitive schools (IP / Independent) typically set higher thresholds. Always confirm with the school at their open house.
              </p>
            </section>

            {/* ── 5. Portfolio checklist ─────────────────────────── */}
            <section className="mb-10">
              <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                DSA Portfolio Checklist
              </h2>
              <p className="mb-4 text-[0.9375rem] text-slate-600">
                A well-organised portfolio is your child&rsquo;s first impression. Keep it focused &mdash; 8 to 12 pages maximum.
              </p>
              <div className="rounded-xl border border-[#e3ded5] bg-white p-6 shadow-card">
                <ul className="space-y-2.5">
                  {[
                    ["Personal statement", "100–150 words on talent, proudest achievement, and why this school. Written by the student."],
                    ["Competition certificates", "All ranked results (zonal, national, international). Include participation certificates only if the event is prestigious."],
                    ["Graded examination results", "ABRSM, Trinity, NAFA, RAD, or equivalent. Include certificate front and result slip."],
                    ["Coach / teacher endorsement", "One letter per key mentor. Should confirm years of training, competition history, and an honest assessment of potential."],
                    ["Training log summary", "A table showing training frequency and duration over the past 12–24 months."],
                    ["Photographs or video links", "2–4 images of performance, competition, or training. Video links (YouTube unlisted or Google Drive) are preferable to printed screenshots."],
                    ["School research notes", "Brief notes on why this specific school — ALP, LLP, CCA programme, coaching staff. Shows genuine research, not opportunistic application."],
                  ].map(([item, desc]) => (
                    <li key={item as string} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-intellectual/30 text-intellectual text-[0.6875rem] font-bold">✓</span>
                      <div>
                        <p className="font-semibold text-slate-900 text-[0.875rem]">{item}</p>
                        <p className="text-[0.8125rem] text-slate-500">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* ── 6. FAQ ────────────────────────────────────────────── */}
            <section className="mb-10">
              <h2 className="mb-5 font-display text-[1.125rem] font-semibold text-slate-900">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "What do DSA interviewers look for in Primary 6 students?",
                    a: "Panels look for three things: authentic passion (can the student talk spontaneously and knowledgeably about their talent?), evidence of consistent effort (training logs, competition history over multiple years), and character fit — resilience, teamwork, and coachability. Academic results are not the primary criterion for DSA.",
                  },
                  {
                    q: "How early should my child start preparing?",
                    a: "Ideally Primary 4 or 5. Two or more years of documented achievement — competition results, graded exams, coach endorsements — is what panels want to see. Preparation started in P6 Term 1 is still useful for polishing presentation, but cannot substitute for years of track record.",
                  },
                  {
                    q: "What specialised coaching programmes help build a DSA-worthy portfolio?",
                    a: "For sports: national sports association development squads and SSC-affiliated academies. For music: ABRSM or Trinity Grade 6+ (Distinction or Merit). For science: SSEF, National Olympiad in Informatics, Singapore Mathematical Olympiad, MOE Science Mentorship Programme. For debate/humanities: National Schools Debate Championships. Always check with the target school what level of achievement they consider competitive.",
                  },
                  {
                    q: "How many schools should my child apply to?",
                    a: "Three to six is a healthy range. Apply across a mix of aspirational, realistic, and conservative choices — and only to schools where the talent domain genuinely matches. Applying to a school simply because it is prestigious, without a matching talent area, is unlikely to succeed and wastes an application slot.",
                  },
                  {
                    q: "What happens if my child gets multiple DSA offers?",
                    a: "They must accept only one. If they receive multiple offers simultaneously, compare carefully before accepting — the commitment rule is binding. Once an offer is accepted, the student will be posted to that school regardless of PSLE results and cannot participate in the S1 Posting Exercise.",
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
                    <h3 className="mb-2 font-display text-[0.9375rem] font-semibold text-slate-900">{q}</h3>
                    <p className="text-[0.875rem] leading-relaxed text-slate-600">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Related links ─────────────────────────────────────── */}
            <div className="rounded-xl border border-champagne/30 bg-champagne-subtle p-6">
              <h2 className="mb-1 font-display text-base font-semibold text-slate-900">
                Continue Your DSA Research
              </h2>
              <p className="mb-4 text-[0.875rem] text-slate-600">
                Use DSALink&rsquo;s tools to find the right school and plan your application.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { href: "/open-houses", label: "Open house calendar →" },
                  { href: "/schools", label: "School directory →" },
                  { href: "/dsa-guide", label: "DSA 2026 timeline →" },
                  { href: "/faq", label: "DSA FAQ →" },
                  { href: "/psle-cop", label: "PSLE COP data →" },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-lg border border-intellectual/20 bg-white px-4 py-2 text-[0.8125rem] font-semibold text-intellectual transition hover:border-intellectual/40 hover:bg-intellectual hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
