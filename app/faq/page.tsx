import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHeader } from "@/components/PageHeader";
import { buildFaqStructuredData } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute:
      "DSA-Sec 2026 FAQ — Singapore Secondary School Admission Questions | DSALink",
  },
  description:
    "Complete answers to DSA-Sec 2026 questions: application dates, eligibility, Commitment Rule, talent areas, PSLE COP, IP, SAP, ALP and LLP — for Singapore parents.",
  keywords: [
    "DSA-Sec 2026 FAQ Singapore",
    "what is DSA secondary school Singapore",
    "DSA application period 2026",
    "DSA commitment rule Singapore",
    "DSA talent areas Singapore",
    "PSLE COP DSA Singapore",
    "integrated programme IP schools Singapore",
    "SAP school Singapore",
    "ALP LLP secondary school",
    "DSA interview preparation Singapore",
  ],
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "DSA-Sec 2026 FAQ — Singapore Secondary School Admission Questions",
    description:
      "14 expert answers to the most common parent questions about DSA-Sec 2026 in Singapore — eligibility, dates, commitment, talent areas, PSLE COP, IP and SAP schools.",
    type: "article",
    url: "/faq",
    siteName: "DSALink",
  },
};

const faqs: { q: string; a: string; id: string }[] = [
  {
    id: "what-is-dsa",
    q: "What is DSA-Sec (Direct School Admission) in Singapore?",
    a: "DSA-Sec is the Direct School Admission exercise for Secondary One entry in Singapore. It allows Primary 6 students to gain admission to a secondary school based on their talents and achievements — before PSLE results are released. Talent areas include sports, performing arts, science, technology, language, humanities, and leadership. MOE runs the annual exercise, with applications opening in May and closing in early June.",
  },
  {
    id: "who-is-eligible",
    q: "Who is eligible to apply for DSA-Sec 2026?",
    a: "All Primary 6 students in Singapore mainstream schools are eligible, including those in Integrated Programme (IP) schools and Special Assistance Plan (SAP) schools. International students enrolled in Singapore schools may also apply, subject to each school's admission criteria. Students must be applying for Secondary One intake (starting January 2027).",
  },
  {
    id: "application-period",
    q: "When is the DSA-Sec 2026 application period?",
    a: "Applications open on 6 May 2026 and close at 16:30 SGT on 2 June 2026. All applications must be submitted through the official MOE DSA-Sec Portal at go.gov.sg/dsa-sec-portal. Selection exercises — including interviews, sports trials, auditions, and tests — are conducted by individual schools from June through September 2026. Results are released by 12 September 2026.",
  },
  {
    id: "how-many-schools",
    q: "How many schools can my child apply to under DSA-Sec?",
    a: "There is no fixed cap on the number of schools a student may apply to. However, a student may hold only one confirmed DSA offer at any time — if your child receives multiple offers, they must choose one. Students can apply across different talent domains at different schools. Plan strategically: apply to schools that genuinely fit your child's talent area and values, not just prestigious names.",
  },
  {
    id: "commitment-rule",
    q: "What is the Commitment Rule in DSA-Sec?",
    a: "If your child accepts a DSA-Sec offer, they are committed to attending that school. They will be posted there regardless of PSLE results and cannot participate in the S1 Posting Exercise. They also cannot transfer to another school using their PSLE results. This is a binding commitment — research each school's programmes, culture, and location thoroughly before your child accepts any offer.",
  },
  {
    id: "talent-areas",
    q: "What talent areas are accepted for DSA-Sec 2026?",
    a: "Schools accept talent submissions across a wide range: Sports (badminton, basketball, football, swimming, athletics, hockey, volleyball, gymnastics, martial arts, shooting, sailing, and 20+ more), Performing Arts (orchestra, band, choir, dance, drama), Visual Arts, Science & Technology (robotics, coding, biomedical science, environmental science), Humanities (debate, journalism, social studies), Language & Bilingualism, and Leadership. Each school publishes its own talent domains — check DSALink's school directory or the school's official DSA page for the specific list.",
  },
  {
    id: "psle-cop-and-dsa",
    q: "What is PSLE COP and how does it relate to DSA?",
    a: "PSLE COP (Cut-Off Point) is the indicative posting score of the last student admitted to a secondary school through the S1 Posting Exercise. For DSA students, PSLE COP is not directly relevant — they are posted to their confirmed school regardless of PSLE results. However, COP data helps parents understand a school's academic competitiveness. DSALink publishes 2023–2025 PSLE COP data in AL notation for all 147 MOE secondary schools at dsalink.sg/psle-cop.",
  },
  {
    id: "psle-after-dsa",
    q: "Does my child still have to sit PSLE after accepting a DSA offer?",
    a: "Yes. Accepting a DSA offer does not exempt your child from sitting the PSLE. However, their PSLE score will not affect their school posting — they will be posted to their confirmed DSA school regardless of PSLE results. They should still aim to perform well in PSLE, as it reflects their academic readiness for secondary school.",
  },
  {
    id: "what-is-ip",
    q: "What is the Integrated Programme (IP) and which Singapore schools offer it?",
    a: "The Integrated Programme (IP) allows students to bypass the O-Level examination and proceed directly to a pre-university qualification after six years of secondary school — either the Singapore A-Levels, the International Baccalaureate (IB), or the NUS High Diploma. IP schools in Singapore include Raffles Institution, Raffles Girls' School, Hwa Chong Institution, Nanyang Girls' High School, NUS High School of Mathematics and Science, Cedar Girls' Secondary School, Anglo-Chinese School (Independent), Singapore Chinese Girls' School, St Joseph's Institution, Methodist Girls' School, River Valley High School, and Dunman High School. Most IP schools accept DSA applications.",
  },
  {
    id: "what-is-sap",
    q: "What is a SAP (Special Assistance Plan) school in Singapore?",
    a: "SAP (Special Assistance Plan) schools offer a bilingual education environment where both English and Mandarin Chinese are used as primary media, with a focus on Chinese language, literature, and culture. There are 13 SAP schools in Singapore, including Hwa Chong Institution, Nanyang Girls' High School, Catholic High School, Maris Stella High School, Nan Hua High School, Nan Chiau High School, Anglican High School, and Chung Cheng High School (Main). SAP schools use Higher Chinese Language (HCL) examination grades (Distinction/Merit) in their PSLE COP notation instead of pure AL scores.",
  },
  {
    id: "what-is-alp",
    q: "What is an Applied Learning Programme (ALP)?",
    a: "Every MOE secondary school has one Applied Learning Programme (ALP) — a school-distinctive programme that connects academic subjects to authentic, real-world applications. Examples include STEM innovation (robotics, environmental science), journalism and media literacy, biomedical science, and entrepreneurship. ALPs are listed on MOE SchoolFinder and in the DSALink school directory. When assessing a school, the ALP is an important indicator of the school's distinctive pedagogical identity.",
  },
  {
    id: "what-is-llp",
    q: "What is a Lifelong Learning Programme (LLP)?",
    a: "Every MOE secondary school also has one Lifelong Learning Programme (LLP) — focused on sports, performing arts, outdoor education, or community youth leadership. LLPs develop character, resilience, and values alongside skills. Examples include programmes anchored on specific sports (e.g., hockey, basketball, water sports), musical instruments, or community service. LLP details are listed on MOE SchoolFinder and in the DSALink school directory at dsalink.sg/schools.",
  },
  {
    id: "dsa-preparation",
    q: "How should I prepare my child for DSA-Sec selection exercises?",
    a: "Start early — ideally in Primary 4 or 5 — to build a genuine, documented record of talent. For sports: consistent training attendance, competition results at zonal or national level, and coaches' endorsements. For performing arts: graded examination results (ABRSM, Trinity, NAFA), competition trophies, and recital or performance records. For science and technology: participation in competitions (SSEF, NUS Physics Olympiad, coding competitions) and project portfolios. For all areas: attend open houses in May 2026 to hear directly from teachers about what schools look for, and ensure your child's interest is genuine — selection panels can tell the difference.",
  },
  {
    id: "open-house-dates",
    q: "Where can I find the full list of secondary school open house dates for May 2026?",
    a: "DSALink's open house calendar at dsalink.sg/open-houses lists all 147 MOE secondary schools with confirmed May 2026 open house dates, on-site vs. online mode, and direct links to each school's official DSA or admissions page. The calendar is updated as schools release their dates — check regularly and always verify with the school's official website.",
  },
];

export default function FaqPage() {
  const jsonLd = buildFaqStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <PageHeader
          crumbLabel="DSA FAQ"
          kicker="DSA-Sec 2026 · Singapore"
          title="Frequently Asked Questions"
          subtitle="Accurate, up-to-date answers to the most common questions Singapore parents have about DSA-Sec 2026 — eligibility, dates, commitment rules, talent areas, PSLE COP, IP, SAP, ALP and LLP."
        />

        <div className="bg-surface">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
            {/* Jump-nav */}
            <nav
              className="mb-10 rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card"
              aria-label="FAQ sections"
            >
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                Jump to question
              </p>
              <ol className="list-none space-y-1.5">
                {faqs.map(({ id, q }, i) => (
                  <li key={id} className="flex gap-2.5">
                    <span className="w-5 shrink-0 text-[0.8125rem] font-semibold text-slate-300">
                      {i + 1}.
                    </span>
                    <a
                      href={`#${id}`}
                      className="text-[0.8125rem] leading-snug text-intellectual hover:underline"
                    >
                      {q}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Q&A */}
            <div className="space-y-6">
              {faqs.map(({ id, q, a }, i) => (
                <article
                  key={id}
                  id={id}
                  className="scroll-mt-20 rounded-xl border border-[#e3ded5] bg-white p-6 shadow-card sm:p-7"
                >
                  <h2 className="flex gap-3 font-display text-[1rem] font-semibold leading-snug text-slate-900 sm:text-[1.0625rem]">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-intellectual text-[0.6875rem] font-bold text-white">
                      {i + 1}
                    </span>
                    {q}
                  </h2>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate-600">{a}</p>
                </article>
              ))}
            </div>

            {/* Related links */}
            <div className="mt-12 rounded-xl border border-champagne/30 bg-champagne-subtle p-6">
              <h2 className="mb-1 font-display text-base font-semibold text-slate-900">
                Explore DSALink
              </h2>
              <p className="mb-4 text-[0.875rem] text-slate-600">
                Use our tools to research schools and plan your DSA strategy.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { href: "/open-houses", label: "Open house calendar →" },
                  { href: "/schools", label: "School directory →" },
                  { href: "/psle-cop", label: "PSLE COP 2025 →" },
                  { href: "/dsa-guide", label: "DSA timeline guide →" },
                  { href: "/dsa-finder", label: "DSA school finder →" },
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
