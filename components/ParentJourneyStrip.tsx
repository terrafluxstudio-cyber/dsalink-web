import { Fragment } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const JOURNEY_STEPS = [
  {
    number: "1",
    title: "Understand DSA",
    description: "What it is and if it's right for your child",
    href: "/faq",
  },
  {
    number: "2",
    title: "Find schools",
    description: "Search 1,300+ talent areas across 147 schools",
    href: "/dsa-finder",
  },
  {
    number: "3",
    title: "Visit open houses",
    description: "Know what to ask before you go",
    href: "/open-house-guide",
  },
  {
    number: "4",
    title: "Apply",
    description: "Submit by 2 Jun 2026 via MOE portal",
    href: "https://www.moe.gov.sg/secondary/dsa",
    external: true,
  },
];

export function ParentJourneyStrip() {
  return (
    <section className="bg-surface-subtle py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-4 text-[10px] font-bold tracking-[0.16em] text-slate-400">
          YOUR DSA JOURNEY
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-stretch">
          {JOURNEY_STEPS.map((step, index) => (
            <Fragment key={step.number}>
              <Link
                href={step.href}
                target={step.external ? "_blank" : undefined}
                rel={step.external ? "noopener noreferrer" : undefined}
                aria-label={
                  step.external
                    ? `${step.title}: ${step.description}, external website`
                    : undefined
                }
                className={`group rounded-xl border p-4 shadow-card transition hover:shadow-card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-intellectual ${
                  step.external
                    ? "border-champagne/30 bg-champagne-subtle"
                    : "border-[#e3ded5] bg-white"
                }`}
              >
                <span className="mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-intellectual text-[0.8125rem] font-bold text-white">
                  {step.number}
                </span>
                <span className="flex items-center gap-1.5 font-display text-[0.9375rem] font-semibold text-slate-900">
                  {step.title}
                  {step.external ? (
                    <ExternalLink
                      className="h-3.5 w-3.5 text-champagne-dark"
                      aria-hidden
                    />
                  ) : null}
                </span>
                <span className="mt-1 block text-[0.8125rem] leading-snug text-slate-500">
                  {step.description}
                </span>
              </Link>
              {index < JOURNEY_STEPS.length - 1 ? (
                <div className="hidden items-center text-xl text-slate-300 sm:flex">
                  →
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
