"use client";

import { PageHeader } from "@/components/PageHeader";
import { ScoreBoard } from "@/components/ScoreBoard";
import { ScoresPageFaq } from "@/components/ScoresPageFaq";
import { useLanguage } from "@/contexts/LanguageContext";

export function ScoresPageBody() {
  const { locale, t } = useLanguage();

  return (
    <>
      <PageHeader
        crumbLabel="PSLE COP"
        kicker={t.scoresPageKicker}
        title={t.scoresPageH1}
        subtitle={t.scoresPageLead}
      />
      <div className="border-b border-intellectual/20 bg-intellectual px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-[1.625rem] font-extrabold leading-none text-champagne">147</span>
            <span className="text-[0.8125rem] text-white/70">
              {locale === "zh" ? "所中学" : "schools tracked"}
            </span>
          </div>
          <div className="hidden h-4 w-px bg-white/20 sm:block" />
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-[1.625rem] font-extrabold leading-none text-champagne">3</span>
            <span className="text-[0.8125rem] text-white/70">
              {locale === "zh" ? "年数据（2023–2025）" : "years of data (2023–2025)"}
            </span>
          </div>
          <div className="hidden h-4 w-px bg-white/20 sm:block" />
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-[1.625rem] font-extrabold leading-none text-champagne">AL</span>
            <span className="text-[0.8125rem] text-white/70">
              {locale === "zh" ? "分组截分 · 年度对比" : "posting bands · YoY delta"}
            </span>
          </div>
          <div className="ml-auto flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1">
            <span className="text-[0.6875rem] font-semibold tracking-wide text-white/80">MOE Data · 2023–2025</span>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10">
        <ScoreBoard omitHeading />
        <ScoresPageFaq />
      </div>
    </>
  );
}
