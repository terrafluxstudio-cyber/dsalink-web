import type { Metadata } from "next";
import en from "@/locales/en.json";
import { DsaInterviewPageBody } from "@/components/DsaInterviewPageBody";
import { getSiteUrl } from "@/lib/seo";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — DSA interview and selection preparation",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: en.dsaInterviewMetaTitle },
    description: en.dsaInterviewMetaDescription,
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
      "DSA self introduction Singapore",
      "DSA interview common mistakes Singapore",
      "DSA trial timeline 2026",
      "DSA interview day checklist Singapore",
      "what to expect DSA trial Singapore",
      "DSA interview question bank Singapore",
    ],
    alternates: { canonical: "/dsa-interview" },
    openGraph: {
      title: en.dsaInterviewOgTitle,
      description: en.dsaInterviewOgDescription,
      type: "article",
      url: "/dsa-interview",
      siteName: "DSALink",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: en.dsaInterviewOgTitle,
      description: en.dsaInterviewOgDescription,
      images: [ogImage.url],
    },
  };
}

/* ── JSON-LD (English; machine-readable SEO) ───────────────────── */

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
    {
      q: "What are the most common mistakes in DSA interviews and trials?",
      a: "The most frequently cited failures are: scripted, memorised answers that break down when interviewers probe; applying for sports DSA without genuine competitive experience (coaches identify recreational players quickly during trials); portfolios for visual arts that don't hold up during on-the-spot drawing tests; and children who cannot explain specifically why they chose that particular school. Most mistakes are avoidable with genuine preparation rather than coached responses.",
    },
    {
      q: "How should my child prepare a self-introduction for a DSA interview?",
      a: "A strong DSA self-introduction covers four parts in 60–90 seconds: who you are (name, school, CCA), what you do (years of experience, training frequency, level), one specific moment (a real story from training or competition — not a generic achievement), and why this school (specific to the programme, not 'it's a good school'). The goal is a clear framework your child can speak from naturally, not a script to memorise. Experienced interviewers identify rehearsed introductions within two minutes.",
    },
    {
      q: "What is the DSA trial and interview timeline after the application closes?",
      a: "After the application window closes on 2 June 2026: schools notify shortlisted applicants by 10 July 2026; trials and auditions run from 6 July to 4 August 2026; interviews run from 13 July to 14 August 2026; all applicants receive final outcomes (Confirmed Offer, Waitlist, or Unsuccessful) by 28 August 2026; parents with Confirmed Offers submit school preference rankings by 23 October 2026 (4.30pm). Schools notify directly by email — watch spam folders from 1 July onwards.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: en.dsaInterviewOgTitle,
        description: en.dsaInterviewOgDescription,
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

export default function DsaInterviewPage() {
  const jsonLd = buildInterviewStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DsaInterviewPageBody />
    </>
  );
}
