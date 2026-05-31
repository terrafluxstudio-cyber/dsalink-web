"use client";

import { HeroSearchBox } from "@/components/HeroSearchBox";
import { HomeCtaBlock } from "@/components/HomeCtaBlock";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ReactNode } from "react";
import { ShieldCheck } from "lucide-react";

export function HeroSection({ children }: { children?: ReactNode }) {
  const { t, locale } = useLanguage();
  const hasSideSlot = Boolean(children);

  return (
    <section className="relative overflow-hidden bg-hero-mesh">
      <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 sm:pb-14 sm:pt-10">
        <div
          className={`grid grid-cols-1 gap-8 ${
            hasSideSlot
              ? "lg:grid-cols-[1fr_420px] lg:items-center lg:gap-14"
              : ""
          }`}
        >

          {/* ── Left column ── */}
          <div className="flex flex-col">
            {/* Kicker badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-intellectual px-3 py-1 text-xs font-semibold text-white">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span className="normal-case">{t.heroBadge}</span>
            </div>

            {/* H1 */}
            <h1
              style={{ textTransform: "none" }}
              className={`max-w-[min(100%,46rem)] ${locale === "zh" ? "break-keep" : locale === "ta" ? "break-words" : "text-balance"} font-display text-[2rem] font-extrabold leading-[1.13] tracking-tight text-slate-900 sm:text-[2.75rem] sm:leading-[1.08] lg:text-[3.25rem] lg:leading-[1.05]`}
            >
              {t.heroTitle}
            </h1>

            <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-slate-500 sm:mt-4 sm:text-base">
              {t.heroSubtitle}
            </p>

            {/* Primary CTA block — the main action */}
            <div className="mt-5">
              <HomeCtaBlock />
            </div>
          </div>

          {/* ── Right column: dynamic cards only ── */}
          {hasSideSlot ? (
            <div className="flex flex-col gap-4 lg:pt-2">{children}</div>
          ) : null}

        </div>

        {/* ── Full-width search bar below both columns ── */}
        <div className="mt-6 sm:mt-8">
          <HeroSearchBox />
        </div>
      </div>
    </section>
  );
}
