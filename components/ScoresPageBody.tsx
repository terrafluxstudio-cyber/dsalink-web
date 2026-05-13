"use client";

import { PageHeader } from "@/components/PageHeader";
import { ScoreBoard } from "@/components/ScoreBoard";
import { ScoresPageFaq } from "@/components/ScoresPageFaq";
import { useLanguage } from "@/contexts/LanguageContext";

export function ScoresPageBody() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        crumbLabel="PSLE COP"
        kicker={t.scoresPageKicker}
        title={t.scoresPageH1}
        subtitle={t.scoresPageLead}
      />
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10">
        <ScoreBoard omitHeading />
        <ScoresPageFaq />
      </div>
    </>
  );
}
