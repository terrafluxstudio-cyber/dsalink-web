"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function SeoTextBlock() {
  const { t } = useLanguage();

  return (
    <section
      className="mx-auto max-w-4xl px-4 pb-20 pt-12 sm:px-6"
      aria-label="About DSALink and DSA-Sec resources"
    >
      <div className="flex flex-col gap-4">

        {/* DSA-Sec Overview */}
        <div className="rounded-xl border border-slate-200 bg-white px-7 py-8 shadow-sm sm:px-9">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-indigo-600">
            {t.seoSchemeOverline}
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            {t.seoSchemeH2}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            {t.seoSchemePara}
          </p>
        </div>

        {/* Commitment Rules */}
        <div className="rounded-xl border border-slate-200 bg-white px-7 py-8 shadow-sm sm:px-9">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-indigo-600">
            {t.seoRulesOverline}
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            {t.seoRulesH2}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            {t.seoRulesIntro}
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <div className="rounded-lg border-l-2 border-indigo-400 bg-slate-50 px-5 py-4">
              <p className="text-[13px] font-semibold text-slate-900">
                {t.seoRule1Title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                {t.seoRule1Body}
              </p>
            </div>
            <div className="rounded-lg border-l-2 border-indigo-400 bg-slate-50 px-5 py-4">
              <p className="text-[13px] font-semibold text-slate-900">
                {t.seoRule2Title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                {t.seoRule2Body}
              </p>
            </div>
            <div className="rounded-lg border-l-2 border-indigo-400 bg-slate-50 px-5 py-4">
              <p className="text-[13px] font-semibold text-slate-900">
                {t.seoRule3Title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                {t.seoRule3Body}
              </p>
            </div>
          </div>
        </div>

        {/* DSALink Advantage — stat grid */}
        <div className="rounded-xl border border-slate-200 bg-white px-7 py-8 shadow-sm sm:px-9">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-indigo-600">
            {t.seoAdvOverline}
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            {t.seoAdvH2}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            {t.seoAdvLead}
          </p>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-5 text-center">
              <p className="text-2xl font-bold tracking-tight text-slate-900">
                {t.seoStat1Num}
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {t.seoStat1Label}
              </p>
              <p className="mt-1.5 text-[11px] text-slate-400">{t.seoStat1Sub}</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-5 text-center">
              <p className="text-2xl font-bold tracking-tight text-slate-900">
                {t.seoStat2Num}
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {t.seoStat2Label}
              </p>
              <p className="mt-1.5 text-[11px] text-slate-400">{t.seoStat2Sub}</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-5 text-center">
              <p className="text-2xl font-bold tracking-tight text-slate-900">
                {t.seoStat3Num}
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {t.seoStat3Label}
              </p>
              <p className="mt-1.5 text-[11px] text-slate-400">{t.seoStat3Sub}</p>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="rounded-xl border border-slate-200 bg-white px-7 py-7 shadow-sm sm:px-9">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-indigo-600">
            {t.seoAboutOverline}
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            {t.seoAboutH2}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500">
            {t.seoAboutPara}
          </p>
        </div>

      </div>
    </section>
  );
}
