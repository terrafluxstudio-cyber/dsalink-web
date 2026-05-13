"use client";

import { ArrowRight, ExternalLink, ShieldCheck } from "lucide-react";
import { CountdownBoard } from "@/components/CountdownBoard";
import { HeroSearchBox } from "@/components/HeroSearchBox";
import { MOE_PRIMARY_CTA_URL } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ReactNode } from "react";

export function HeroSection({ children }: { children?: ReactNode }) {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-14">
        <div className="mb-10 sm:mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm sm:text-sm">
            <ShieldCheck className="h-4 w-4 shrink-0 text-slate-700" aria-hidden />
            <span className="normal-case">{t.heroBadge}</span>
          </div>
          <h1
            style={{ textTransform: "none" }}
            className="max-w-[min(100%,46rem)] text-balance font-display text-[1.65rem] font-extrabold leading-[1.18] tracking-tight text-slate-900 sm:text-[2.125rem] sm:leading-[1.12] lg:text-4xl lg:leading-tight"
          >
            {t.heroTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg">
            {t.heroSubtitle}
          </p>
        </div>

        <div className="mt-8">
          <HeroSearchBox />
        </div>

        <div className="mt-6 flex max-w-xl flex-col gap-4">
          <CountdownBoard />
        </div>
        {children}
        <div className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={MOE_PRIMARY_CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            {t.ctaPrimary}
            <ExternalLink className="h-4 w-4 opacity-90" aria-hidden />
          </a>
          <a
            href="#resources"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
          >
            {t.ctaSecondary}
            <ArrowRight className="h-4 w-4 text-slate-700" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
