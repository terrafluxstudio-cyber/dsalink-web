"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Single Featured Guide banner — Parent Stories.
 * Field Guide and Coach Directory cards removed (Coach lives in HomeNavCardsRow;
 * Open House material is surfaced via TakeawaysEntryCard above).
 */
export function FeaturedGuidesSection() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-champagne/20 bg-champagne-subtle">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex flex-col gap-5 rounded-2xl border border-champagne/30 bg-white p-6 shadow-card sm:flex-row sm:items-center sm:gap-7 sm:p-7">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-champagne/20 text-champagne-dark">
            <BookOpen className="h-5 w-5" aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-bold tracking-[0.16em] text-champagne-dark normal-case">
              {t.featuredGuideKicker}{" "}
              <span aria-hidden className="animate-sparkle text-base">
                ★
              </span>
            </p>
            <h2 className="mt-1 font-display text-[1.25rem] font-extrabold leading-snug text-slate-900 sm:text-[1.375rem]">
              {t.featuredGuideTitle}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
              {t.dsaExpCalloutItem1}
            </p>
          </div>
          <Link
            href="/dsa-experience"
            className="inline-flex shrink-0 items-center justify-center gap-1.5 self-start rounded-lg bg-intellectual px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-intellectual-light sm:self-center"
          >
            {t.featuredGuideCta}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
