"use client";

import { ScoreBoard } from "@/components/ScoreBoard";
import { useLanguage } from "@/contexts/LanguageContext";

export function ScoresPageBody() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10">
      <header className="border-b border-intellectual/10 pb-8">
        <div className="min-w-0 max-w-3xl">
          <h1 className="font-display text-2xl font-semibold tracking-tight text-intellectual sm:text-3xl">
            {t.scoresPageH1}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-intellectual-muted sm:text-lg">
            {t.scoresPageLead}
          </p>
        </div>
      </header>
      <div className="mt-8 sm:mt-10">
        <ScoreBoard omitHeading />
      </div>
      <p className="mt-10 text-center text-xs leading-relaxed text-gray-400 sm:text-right">
        Disclaimer: Data is aggregated from public education resources for
        reference only. For official school information, please refer to the
        respective school websites.
      </p>
    </div>
  );
}
