"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { HeroIllustration } from "@/components/HeroIllustration";
import { HeroSearchBox } from "@/components/HeroSearchBox";
import { HomeCtaBlock } from "@/components/HomeCtaBlock";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ReactNode } from "react";

export function HeroSection({ children }: { children?: ReactNode }) {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-hero-mesh">
      <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_420px] lg:items-start lg:gap-14">

          {/* ── Left column: text + stats + search + CTAs ── */}
          <div className="flex flex-col">
            {/* Kicker badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-champagne/30 bg-champagne-subtle px-3 py-1 text-xs font-semibold text-champagne-dark">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="normal-case">{t.heroBadge}</span>
            </div>

            {/* H1 */}
            <h1
              style={{ textTransform: "none" }}
              className="max-w-[min(100%,46rem)] text-balance font-display text-[2rem] font-extrabold leading-[1.13] tracking-tight text-slate-900 sm:text-[2.75rem] sm:leading-[1.08] lg:text-[3.25rem] lg:leading-[1.05]"
            >
              {t.heroTitle}
            </h1>

            <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-slate-500 sm:mt-4 sm:text-base">
              {t.heroSubtitle}
            </p>

            {/* Key stats strip */}
            <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-xl border border-surface-warm bg-white/80 backdrop-blur-sm">
              <div className="px-4 py-3 text-center">
                <p className="font-display text-[1.375rem] font-extrabold tracking-tight text-intellectual">
                  {t.homeHeroStat1Value}
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500 normal-case">{t.homeHeroStat1Label}</p>
              </div>
              <div className="border-x border-surface-warm px-4 py-3 text-center">
                <p className="font-display text-[1.375rem] font-extrabold tracking-tight text-intellectual">
                  {t.homeHeroStat2Value.endsWith("+") ? (
                    <>
                      {t.homeHeroStat2Value.slice(0, -1)}
                      <span className="text-base">+</span>
                    </>
                  ) : (
                    t.homeHeroStat2Value
                  )}
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500 normal-case">{t.homeHeroStat2Label}</p>
              </div>
              <div className="px-4 py-3 text-center">
                <p className="font-display text-[1.375rem] font-extrabold tracking-tight text-champagne-dark">
                  {t.homeHeroStat3Value}
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500 normal-case">{t.homeHeroStat3Label}</p>
              </div>
            </div>

            {/* Search */}
            <div className="mt-5">
              <HeroSearchBox />
            </div>

            {/* Deadline banner (replaces full CountdownBoard) */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3.5 py-2 text-sm text-amber-800">
              <span className="shrink-0 text-base leading-none" aria-hidden>⚠️</span>
              <span>
                Applications close <strong>2 Jun 2026 · 4:30pm SGT</strong> — verify at{" "}
                <a
                  href="https://www.moe.gov.sg/secondary/dsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-amber-900"
                >
                  moe.gov.sg
                </a>
              </span>
            </div>

            <HomeCtaBlock />

            {/* CTAs */}
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <Link
                href="/dsa-finder"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-intellectual px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-intellectual-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-intellectual"
              >
                {t.ctaPrimary}
                <ArrowRight className="h-3.5 w-3.5 opacity-80" aria-hidden />
              </Link>
              <Link
                href="/dsa-guide"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-surface-warm bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-surface-subtle hover:bg-surface"
              >
                {t.ctaSecondary}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>

          {/* ── Right column: SVG illustration + dynamic cards ── */}
          {/* On mobile this column stacks below the left column */}
          <div className="flex flex-col gap-4 lg:pt-2">
            <HeroIllustration />
            {children}
          </div>

        </div>
      </div>
    </section>
  );
}
