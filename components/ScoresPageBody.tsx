"use client";

import { ExternalLink } from "lucide-react";
import { ScoreBoard } from "@/components/ScoreBoard";
import { useLanguage } from "@/contexts/LanguageContext";
import { EXTERNAL } from "@/lib/constants";

export function ScoresPageBody() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10">
      <header className="border-b border-intellectual/10 pb-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="min-w-0 max-w-3xl flex-1">
            <h1 className="font-display text-2xl font-semibold tracking-tight text-intellectual sm:text-3xl">
              {t.scoresPageH1}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-intellectual-muted sm:text-lg">
              {t.scoresPageLead}
            </p>
          </div>
          <div className="shrink-0 lg:max-w-[min(100%,18rem)] lg:pt-1">
            <a
              href={EXTERNAL.schoolFinder}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-intellectual/20 bg-white px-4 py-3 text-sm font-semibold text-intellectual shadow-sm transition hover:border-champagne/55 hover:bg-champagne-subtle/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:w-auto"
            >
              <ExternalLink className="h-4 w-4 shrink-0 text-champagne-dark" aria-hidden />
              {t.scoresMoeSchoolFinderCta}
              <span className="sr-only">{t.extHint}</span>
            </a>
          </div>
        </div>
      </header>
      <div className="mt-8 sm:mt-10">
        <ScoreBoard omitHeading />
      </div>
    </div>
  );
}
