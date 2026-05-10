"use client";

import Link from "next/link";
import { ArrowRight, LineChart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ScoresEntryCard() {
  const { t } = useLanguage();

  return (
    <section
      className="mt-10 w-full max-w-xl"
      aria-labelledby="scores-entry-heading"
    >
      <div className="rounded-2xl border border-intellectual/10 bg-card-shine p-5 shadow-sm ring-1 ring-champagne/20 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-intellectual/5 text-champagne-dark ring-1 ring-champagne/25">
            <LineChart className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <h2
              id="scores-entry-heading"
              className="font-display text-base font-semibold text-intellectual sm:text-lg"
            >
              {t.homeScoresCardTitle}
            </h2>
          </div>
        </div>
        <div className="mt-5">
          <Link
            href="/scores"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-champagne/45 bg-gradient-to-b from-white to-champagne-subtle/50 px-4 py-3 text-sm font-semibold text-intellectual shadow-gold transition hover:border-champagne hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:w-auto sm:min-w-[220px]"
          >
            {t.homeScoresCardCta}
            <ArrowRight className="h-4 w-4 text-champagne-dark" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
