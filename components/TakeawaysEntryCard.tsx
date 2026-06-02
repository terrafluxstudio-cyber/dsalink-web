"use client";

import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const STAT_LABEL = {
  en: "schools recapped",
  zh: "所学校的深度记录",
  ms: "sekolah dirangkum",
  ta: "பள்ளிகள் சுருக்கப்பட்டது",
} as const;

export function TakeawaysEntryCard() {
  const { t, locale } = useLanguage();

  return (
    <Link
      href="/open-house-takeaways"
      aria-labelledby="takeaways-entry-heading"
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
          19
        </span>
        <span className="text-[12.5px] font-semibold leading-snug text-intellectual-muted">
          {STAT_LABEL[locale]}
        </span>
      </div>

      {/* Icon + title */}
      <div className="relative mt-5 flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-surface-warm bg-surface text-intellectual">
          <Newspaper className="h-4 w-4" aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <h3
            id="takeaways-entry-heading"
            style={{ textTransform: "none" }}
            className="font-display text-[1.0625rem] font-bold text-intellectual"
          >
            {t.ohMissedCardTitle}
          </h3>
          <p className="mt-1 text-[13px] leading-relaxed text-intellectual-muted">
            {t.ohMissedCardBody}
          </p>
        </div>
      </div>

      <div className="relative mt-5 inline-flex items-center gap-1.5 self-start rounded-lg bg-intellectual px-4 py-2.5 text-[13px] font-semibold text-white transition group-hover:bg-intellectual-light">
        {t.ohMissedCardCta}
        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </div>
    </Link>
  );
}
