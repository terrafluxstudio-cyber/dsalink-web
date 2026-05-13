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
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-indigo-600">
            <LineChart className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <h2
              id="scores-entry-heading"
              className="font-display text-base font-semibold text-slate-900 sm:text-lg"
            >
              {t.homeScoresCardTitle}
            </h2>
          </div>
        </div>
        <div className="mt-5">
          <Link
            href="/scores"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:w-auto sm:min-w-[220px]"
          >
            {t.homeScoresCardCta}
            <ArrowRight className="h-4 w-4 text-indigo-600" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
