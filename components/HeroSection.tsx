"use client";

import { ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { CountdownBoard } from "@/components/CountdownBoard";
import { HeroIllustration } from "@/components/HeroIllustration";
import { HeroSearchBox } from "@/components/HeroSearchBox";
import { MOE_PRIMARY_CTA_URL } from "@/lib/constants";
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
                <p className="font-display text-[1.375rem] font-extrabold tracking-tight text-intellectual">147</p>
                <p className="mt-0.5 text-[11px] text-slate-500 normal-case">Secondary schools</p>
              </div>
              <div className="border-x border-surface-warm px-4 py-3 text-center">
                <p className="font-display text-[1.375rem] font-extrabold tracking-tight text-intellectual">1,300<span className="text-base">+</span></p>
                <p className="mt-0.5 text-[11px] text-slate-500 normal-case">DSA talent areas</p>
              </div>
              <div className="px-4 py-3 text-center">
                <p className="font-display text-[1.375rem] font-extrabold tracking-tight text-champagne-dark">Free</p>
                <p className="mt-0.5 text-[11px] text-slate-500 normal-case">Always, for P6 families</p>
              </div>
            </div>

            {/* Search */}
            <div className="mt-5">
              <HeroSearchBox />
            </div>

            {/* Countdown */}
            <div className="mt-4">
              <CountdownBoard />
            </div>

            {/* CTAs */}
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <a
                href={MOE_PRIMARY_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-intellectual px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-intellectual-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-intellectual"
              >
                {t.ctaPrimary}
                <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden />
              </a>
              <a
                href="#resources"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-surface-warm bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-surface-subtle hover:bg-surface"
              >
                {t.ctaSecondary}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </a>
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
