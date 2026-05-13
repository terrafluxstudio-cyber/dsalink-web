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
    <section className="relative overflow-hidden bg-hero-mesh">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230c3d5c%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-70" />
      <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-14">
        <div className="mb-8 sm:mb-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-champagne/35 bg-white/90 px-3 py-1.5 text-xs font-medium text-intellectual shadow-sm sm:text-sm">
            <ShieldCheck className="h-4 w-4 text-champagne-dark" aria-hidden />
            {t.heroBadge}
          </div>
          <h1 className="max-w-[min(100%,42rem)] text-balance font-display text-[1.7rem] font-black leading-[1.12] tracking-tight sm:text-4xl sm:leading-[1.1] lg:text-5xl lg:leading-tight">
            <span className="bg-gradient-to-b from-slate-900 via-slate-800 to-blue-800 bg-clip-text text-transparent">
              {t.heroTitle}
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-intellectual-muted sm:text-lg">
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
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-intellectual px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-intellectual-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
          >
            {t.ctaPrimary}
            <ExternalLink className="h-4 w-4 opacity-90" aria-hidden />
          </a>
          <a
            href="#resources"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-intellectual/15 bg-white px-5 py-3 text-sm font-semibold text-intellectual shadow-sm transition hover:border-champagne/50 hover:bg-champagne-subtle/50"
          >
            {t.ctaSecondary}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
