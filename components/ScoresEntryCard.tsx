"use client";

import Link from "next/link";
import { ArrowRight, LineChart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function ScoresEntryCard() {
  const { t } = useLanguage();

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
          </div>
        </div>
        <div className="mt-4">
          <Link
            href="/scores"
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
