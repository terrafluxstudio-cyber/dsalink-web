"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ParentJourneyStrip() {
  const { t } = useLanguage();

  const JOURNEY_STEPS = [
    {
      number: "1",
      title: t.journeyStep1Title,
      description: t.journeyStep1Desc,
      href: "/faq",
      external: false,
    },
    {
      number: "2",
      title: t.journeyStep2Title,
      description: t.journeyStep2Desc,
      href: "/dsa-finder",
      external: false,
    },
    {
      number: "3",
      title: t.journeyStep3Title,
      description: t.journeyStep3Desc,
      href: "/open-house-guide",
      external: false,
    },
    {
      number: "4",
      title: t.journeyStep4Title,
      description: t.journeyStep4Desc,
      href: "https://www.moe.gov.sg/secondary/dsa",
      external: true,
    },
  ];

  return (
    <section className="border-t border-surface-warm bg-surface-subtle py-6 sm:py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-5 text-[10px] font-bold tracking-[0.16em] text-slate-400">
          {t.journeyTitle}
        </p>

        {/* Desktop: horizontal connected timeline */}
        <div className="hidden sm:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-[calc(12.5%)] right-[calc(12.5%)] top-[22px] h-0.5 bg-gradient-to-r from-intellectual via-intellectual/50 to-champagne" />

            <div className="grid grid-cols-4 gap-3">
              {JOURNEY_STEPS.map((step) => (
                <div key={step.number} className="flex flex-col items-center">
                  {/* Node circle */}
                  <div
                    className={`relative z-10 mb-3 flex h-11 w-11 items-center justify-center rounded-full border-2 text-sm font-bold shadow-sm ${
                      step.external
                        ? "border-champagne bg-champagne text-intellectual"
                        : "border-intellectual bg-intellectual text-white"
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Card */}
                  <Link
                    href={step.href}
                    target={step.external ? "_blank" : undefined}
                    rel={step.external ? "noopener noreferrer" : undefined}
                    className={`w-full rounded-xl border p-3 text-center shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover ${
                      step.external
                        ? "border-champagne/40 bg-champagne-subtle"
                        : "border-[#e3ded5] bg-white"
                    }`}
                  >
                    <span className="flex items-center justify-center gap-1 font-display text-[0.875rem] font-semibold text-slate-900">
                      {step.title}
                      {step.external && (
                        <ExternalLink
                          className="h-3 w-3 text-champagne-dark"
                          aria-hidden
                        />
                      )}
                    </span>
                    <span className="mt-0.5 block text-[0.75rem] leading-snug text-slate-500">
                      {step.description}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="space-y-3 sm:hidden">
          {JOURNEY_STEPS.map((step, index) => (
            <div key={step.number} className="flex gap-3">
              {/* Left: number + vertical line */}
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
                    step.external
                      ? "border-champagne bg-champagne text-intellectual"
                      : "border-intellectual bg-intellectual text-white"
                  }`}
                >
                  {step.number}
                </div>
                {index < JOURNEY_STEPS.length - 1 && (
                  <div className="mt-1 w-0.5 flex-1 bg-gradient-to-b from-intellectual/40 to-transparent" />
                )}
              </div>

              {/* Right: card */}
              <Link
                href={step.href}
                target={step.external ? "_blank" : undefined}
                rel={step.external ? "noopener noreferrer" : undefined}
                className={`mb-1 flex-1 rounded-xl border p-3 shadow-card transition-all duration-200 hover:shadow-card-hover ${
                  step.external
                    ? "border-champagne/40 bg-champagne-subtle"
                    : "border-[#e3ded5] bg-white"
                }`}
              >
                <span className="flex items-center gap-1 font-display text-[0.875rem] font-semibold text-slate-900">
                  {step.title}
                  {step.external && (
                    <ExternalLink
                      className="h-3 w-3 text-champagne-dark"
                      aria-hidden
                    />
                  )}
                </span>
                <span className="mt-0.5 block text-[0.75rem] leading-snug text-slate-500">
                  {step.description}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
