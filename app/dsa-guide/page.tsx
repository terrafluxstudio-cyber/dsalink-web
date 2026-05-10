import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { MOE_PRIMARY_CTA_URL } from "@/lib/constants";

const PAGE_TITLE =
  "2026 Singapore DSA-Sec Timeline | Step-by-Step Parent Guide | DSALink";
const PAGE_DESCRIPTION =
  "Follow the official MOE 2026 DSA-Sec calendar: research and open houses, application window (6 May–2 Jun), selection, school preference (19–23 Oct), and results with PSLE. Key rules on commitment and posting groups.";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — Singapore DSA-Sec 2026 application timeline",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    keywords: [
      "DSA-Sec 2026 Singapore",
      "MOE DSA application window",
      "DSA timeline",
      "Secondary 1 DSA",
      "school preference DSA",
      "DSA commitment rule",
    ],
    alternates: { canonical: "/dsa-guide" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      type: "website",
      url: "/dsa-guide",
      siteName: "DSALink",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      images: [ogImage.url],
    },
  };
}

const TIMELINE = [
  {
    dateLabel: "Jan – Apr 2026",
    title: "Research & Preparation",
    body: (
      <>
        Explore talent areas across 150+ secondary schools and shortlist
        programmes that fit your child. Attend{" "}
        <Link
          href="/open-houses"
          className="font-semibold text-intellectual underline decoration-champagne/45 decoration-2 underline-offset-2 hover:text-intellectual-light"
        >
          school open houses
        </Link>{" "}
        to learn about culture and DSA expectations. Begin assembling a clear
        portfolio: evidence of achievement, reflections, and supporting awards
        or certificates where relevant.
      </>
    ),
  },
  {
    dateLabel: "6 May – 2 Jun 2026",
    title: "Application Window",
    body: (
      <>
        Submit applications through the{" "}
        <a
          href={MOE_PRIMARY_CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-intellectual underline decoration-champagne/45 decoration-2 underline-offset-2 hover:text-intellectual-light"
        >
          official MOE DSA-Sec e-Service
        </a>
        . The portal closes on <strong>2 June 2026, 4:30 p.m. (SGT)</strong>.
        You may list up to <strong>three choices</strong> in order of
        preference.
      </>
    ),
  },
  {
    dateLabel: "22 Jun – 28 Aug 2026",
    title: "Selection Period",
    body: (
      <>
        Shortlisted students are invited to school-run selection activities —
        for example interviews, auditions, or trials — depending on the talent
        area. Each school runs its own schedule; check email and the portal
        regularly so you do not miss instructions or time slots.
      </>
    ),
  },
  {
    dateLabel: "19 – 23 Oct 2026",
    title: "School Preference Submission",
    body: (
      <>
        If you receive a <strong>Confirmed Offer (CO)</strong> or{" "}
        <strong>Waiting List (WL)</strong> outcome, you must rank schools in the
        portal before it closes on{" "}
        <strong>23 October 2026, 4:30 p.m. (SGT)</strong>. The order you submit
        determines how offers are considered in the allocation exercise.
      </>
    ),
  },
  {
    dateLabel: "24 – 25 Nov 2026",
    title: "Release of Results",
    body: (
      <>
        DSA-Sec outcomes are released together with the{" "}
        <strong>PSLE results</strong>, so families see posting and DSA outcomes
        in the same window. Follow MOE’s published instructions for next steps
        and any appeals process.
      </>
    ),
  },
];

export default function DsaGuidePage() {
  return (
    <>
      <SiteHeader />
      <main className="border-t border-intellectual/5 bg-hero-mesh">
        <header className="border-b border-intellectual/10 bg-white/60 backdrop-blur-sm">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-champagne-dark sm:text-xs">
              MOE 2026 · Direct School Admission (Secondary)
            </p>
            <h1 className="mt-3 font-display text-2xl font-semibold tracking-tight text-intellectual sm:text-4xl sm:leading-tight">
              2026 Singapore DSA-Sec Application Timeline
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-intellectual-muted sm:text-lg">
              A complete step-by-step guide from preparation to final allocation.
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
          <section aria-labelledby="timeline-heading">
            <h2
              id="timeline-heading"
              className="font-display text-lg font-semibold text-intellectual sm:text-xl"
            >
              Key dates
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-intellectual-muted sm:text-base">
              Dates follow the{" "}
              <a
                href={MOE_PRIMARY_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-intellectual underline decoration-champagne/40 underline-offset-2 hover:decoration-champagne"
              >
                MOE 2026 DSA-Sec schedule
              </a>
              . Always confirm critical deadlines on the official portal.
            </p>

            <div className="relative mt-10">
              <div
                className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-champagne/70 via-champagne/35 to-champagne/15 sm:left-[10px]"
                aria-hidden
              />
              <ol className="relative space-y-10 sm:space-y-12">
                {TIMELINE.map((phase) => (
                  <li key={phase.title} className="relative">
                    <span
                      className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-champagne bg-white shadow-[0_0_0_3px_rgba(198,162,74,0.2)] sm:top-2 sm:h-[18px] sm:w-[18px]"
                      aria-hidden
                    />
                    <div className="grid w-full gap-4 pl-8 sm:grid-cols-[minmax(0,11.5rem)_minmax(0,1fr)] sm:gap-10 sm:pl-11">
                      <div className="sm:pt-0.5 sm:text-right">
                        <p className="text-xs font-semibold uppercase tracking-wide text-champagne-dark sm:text-sm">
                          {phase.dateLabel}
                        </p>
                      </div>
                      <div className="w-full min-w-0 rounded-2xl border border-intellectual/12 bg-white/95 p-5 shadow-soft ring-1 ring-champagne/15 sm:p-6">
                        <h3 className="font-display text-base font-semibold text-intellectual sm:text-lg">
                          {phase.title}
                        </h3>
                        <div className="mt-3 text-sm leading-relaxed text-intellectual-muted sm:text-base">
                          {phase.body}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section
            className="mt-14 border-t border-intellectual/10 pt-12 sm:mt-16 sm:pt-16"
            aria-labelledby="facts-heading"
          >
            <h2
              id="facts-heading"
              className="font-display text-lg font-semibold text-intellectual sm:text-xl"
            >
              Crucial Facts to Know
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-intellectual-muted sm:text-base">
              Two policy points parents often overlook when weighing DSA against
              the mainstream posting exercise.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <article className="rounded-2xl border border-champagne/35 bg-gradient-to-br from-white to-champagne-subtle/50 p-5 shadow-sm ring-1 ring-intellectual/8 sm:p-6">
                <h3 className="font-display text-base font-semibold text-intellectual">
                  Commitment Rule
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-intellectual-muted sm:text-[15px]">
                  Once you accept a DSA offer and complete the preference
                  submission as required, your child is committed to that
                  pathway. They will{" "}
                  <strong className="text-intellectual">
                    not participate in the regular Secondary 1 (S1) posting
                    exercise
                  </strong>{" "}
                  for school choice, and{" "}
                  <strong className="text-intellectual">
                    transfers are generally not allowed
                  </strong>{" "}
                  except in exceptional circumstances defined by MOE.
                </p>
              </article>
              <article className="rounded-2xl border border-intellectual/12 bg-white/95 p-5 shadow-sm ring-1 ring-champagne/20 sm:p-6">
                <h3 className="font-display text-base font-semibold text-intellectual">
                  PSLE Requirement
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-intellectual-muted sm:text-[15px]">
                  DSA is an early allocation route, but it is{" "}
                  <strong className="text-intellectual">not a bypass</strong>{" "}
                  of PSLE standards. Your child’s PSLE score must still meet the
                  minimum requirement for the school’s{" "}
                  <strong className="text-intellectual">posting group</strong>{" "}
                  (and any course eligibility rules) set by MOE for the offer to
                  stand.
                </p>
              </article>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter scheduleNote="Information based on MOE 2026 schedule." />
    </>
  );
}
