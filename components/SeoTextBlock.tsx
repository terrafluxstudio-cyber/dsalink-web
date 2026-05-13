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

        {/* What is DSA-Sec */}
        <div className="rounded-xl border border-slate-200 bg-white px-7 py-8 shadow-sm sm:px-9">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-indigo-600">
            {t.dsa_scheme_overline}
          </p>
          <h2 className="text-base font-semibold text-slate-800">
            {t.dsa_what_is_title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            {t.dsa_what_is_body}
          </p>
        </div>

        {/* Commitment Rules */}
        <div className="rounded-xl border border-slate-200 bg-white px-7 py-8 shadow-sm sm:px-9">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-indigo-600">
            {t.dsa_rules_overline}
          </p>
          <h2 className="text-base font-semibold text-slate-800">
            {t.dsa_rules_title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            {t.dsa_rules_intro}
          </p>
          <div className="mt-4 flex flex-col gap-3">
            <div className="rounded-lg border-l-2 border-indigo-400 bg-slate-50 px-5 py-4">
              <p className="text-[13px] font-semibold text-slate-800">
                {t.dsa_commitment_title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {t.dsa_commitment_body}
              </p>
            </div>
            <div className="rounded-lg border-l-2 border-indigo-400 bg-slate-50 px-5 py-4">
              <p className="text-[13px] font-semibold text-slate-800">
                {t.dsa_limits_title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {t.dsa_limits_body}
              </p>
            </div>
            <div className="rounded-lg border-l-2 border-indigo-400 bg-slate-50 px-5 py-4">
              <p className="text-[13px] font-semibold text-slate-800">
                {t.dsa_assessment_title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {t.dsa_assessment_body}
              </p>
            </div>
          </div>
        </div>

        {/* DSALink Advantage — stat grid */}
        <div className="rounded-xl border border-slate-200 bg-white px-7 py-8 shadow-sm sm:px-9">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-indigo-600">
            {t.dsa_advantage_overline}
          </p>
          <h2 className="text-base font-semibold text-slate-800">
            {t.dsa_advantage_title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            {t.dsa_advantage_lead}
          </p>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-5 text-center">
              <p className="text-2xl font-bold tracking-tight text-slate-900">
                {t.dsa_stat1_num}
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {t.dsa_stat1_label}
              </p>
              <p className="mt-1.5 text-[11px] text-slate-400">{t.dsa_stat1_sub}</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-5 text-center">
              <p className="text-2xl font-bold tracking-tight text-slate-900">
                {t.dsa_stat2_num}
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {t.dsa_stat2_label}
              </p>
              <p className="mt-1.5 text-[11px] text-slate-400">{t.dsa_stat2_sub}</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-5 text-center">
              <p className="text-2xl font-bold tracking-tight text-slate-900">
                {t.dsa_stat3_num}
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {t.dsa_stat3_label}
              </p>
              <p className="mt-1.5 text-[11px] text-slate-400">{t.dsa_stat3_sub}</p>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="rounded-xl border border-slate-200 bg-white px-7 py-7 shadow-sm sm:px-9">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-indigo-600">
            {t.dsa_about_overline}
          </p>
          <h2 className="text-base font-semibold text-slate-800">
            {t.dsa_about_title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            {t.dsa_about_body}
          </p>
        </div>

      </div>
    </section>
  );
}
