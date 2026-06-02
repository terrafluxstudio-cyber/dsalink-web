"use client";

import Link from "next/link";
import { ArrowRight, LineChart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const STAT_LABEL = {
  en: "schools · 3 years of cut-offs",
  zh: "所学校 · 3 年分数线",
  ms: "sekolah · COP 3 tahun",
  ta: "பள்ளிகள் · 3 ஆண்டு வெட்டுப்புள்ளி",
} as const;

const BODY = {
  en: "2023–2025 cut-off points, year-on-year deltas, and stream comparisons in one filterable table.",
  zh: "2023–2025 历年 COP、同比变化、流派对比，一张可筛选表格。",
  ms: "Mata henti 2023–2025, perubahan tahunan dan perbandingan aliran dalam satu jadual.",
  ta: "2023–2025 COP, ஆண்டு வேறுபாடுகள், ஸ்ட்ரீம் ஒப்பீடுகள் — ஒரே வடிகட்டக்கூடிய அட்டவணை.",
} as const;

export function ScoresEntryCard() {
  const { t, locale } = useLanguage();

  return (
    <Link
      href="/psle-cop"
      aria-labelledby="scores-entry-heading"
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-champagne/30 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-champagne/60 hover:shadow-card sm:p-7"
    >
      {/* Subtle champagne wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-champagne/15 blur-3xl"
      />

      {/* Stat hook */}
      <div className="relative flex items-baseline gap-3">
        <span className="font-display text-[3.5rem] font-extrabold leading-none tracking-tight text-champagne-dark sm:text-[4rem]">
          146
        </span>
        <span className="text-[12.5px] font-semibold leading-snug text-intellectual-muted">
          {STAT_LABEL[locale]}
        </span>
      </div>

      {/* Icon + title */}
      <div className="relative mt-5 flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-surface-warm bg-surface text-intellectual">
          <LineChart className="h-4 w-4" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <h3
            id="scores-entry-heading"
            style={{ textTransform: "none" }}
            className="font-display text-[1.0625rem] font-bold text-intellectual"
          >
            {t.homeScoresCardTitle}
          </h3>
          <p className="mt-1 text-[13px] leading-relaxed text-intellectual-muted">
            {BODY[locale]}
          </p>
        </div>
      </div>

      <div className="relative mt-5 inline-flex items-center gap-1.5 self-start rounded-lg bg-intellectual px-4 py-2.5 text-[13px] font-semibold text-white transition group-hover:bg-intellectual-light">
        {t.homeScoresCardCta}
        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </div>
    </Link>
  );
}
