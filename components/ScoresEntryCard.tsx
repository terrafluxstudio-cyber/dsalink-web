"use client";

import Link from "next/link";
import { ArrowRight, LineChart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SCORES_BODY = {
  en: "2023–2025 cut-off points, year-on-year deltas, and stream comparisons in one filterable table.",
  zh: "2023–2025 历年 COP、同比变化、流派对比，一张可筛选表格。",
  ms: "Mata henti 2023–2025, perubahan tahunan dan perbandingan aliran dalam satu jadual.",
  ta: "2023–2025 COP, ஆண்டு வேறுபாடுகள், ஸ்ட்ரீம் ஒப்பீடுகள் — ஒரே வடிகட்டக்கூடிய அட்டவணை.",
} as const;

export function ScoresEntryCard() {
  const { t, locale } = useLanguage();

  return (
    <section
      className="w-full"
      aria-labelledby="scores-entry-heading"
    >
      <div className="rounded-xl border border-surface-warm bg-white p-4 shadow-card sm:p-5">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-surface-warm bg-surface text-intellectual">
            <LineChart className="h-4 w-4" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <h2
              id="scores-entry-heading"
              className="font-display text-[0.9375rem] font-semibold text-slate-900"
            >
              {t.homeScoresCardTitle}
            </h2>
            <p className="mt-1 text-[12.5px] leading-relaxed text-intellectual-muted">
              {SCORES_BODY[locale]}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <Link
            href="/psle-cop"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-surface-warm bg-surface px-4 py-2 text-[0.8125rem] font-semibold text-intellectual transition hover:border-surface-subtle hover:bg-surface-subtle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-intellectual sm:w-auto sm:min-w-[200px]"
          >
            {t.homeScoresCardCta}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
