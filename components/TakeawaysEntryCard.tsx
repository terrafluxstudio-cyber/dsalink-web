"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function TakeawaysEntryCard() {
  const { t } = useLanguage();
  return (
    <div className="relative pt-4">
      <div
        aria-hidden
        className="absolute -top-1.5 left-4 rounded-sm bg-amber-300 px-3 py-1 shadow-sm"
      >
        <span className="text-[9px] font-bold uppercase tracking-widest text-amber-900">
          Open House Recap
        </span>
      </div>
      <div className="rounded-2xl border border-champagne/25 bg-champagne/8 p-4 shadow-sm ring-1 ring-champagne/10">
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-champagne-dark">
        Open House Recap
      </p>
      <p className="font-display text-[0.9375rem] font-semibold leading-snug text-intellectual">
        {t.ohMissedCardTitle}
      </p>
      <p className="mt-1.5 text-xs leading-relaxed text-intellectual-muted">
        {t.ohMissedCardBody}
      </p>
      <Link
        href="/open-house-takeaways"
        className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-intellectual px-3 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-intellectual-light"
      >
        {t.ohMissedCardCta}
        <ChevronRight className="h-3.5 w-3.5" aria-hidden />
      </Link>
      </div>
    </div>
  );
}
