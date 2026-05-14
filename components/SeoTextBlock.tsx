"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function SeoTextBlock() {
  const { t } = useLanguage();

  return (
    <section
      className="bg-surface-mesh"
      aria-label="About DSALink and DSA-Sec resources"
    >
      <div className="mx-auto max-w-4xl px-4 pb-20 pt-12 sm:px-6">
        <div className="flex flex-col gap-4">

          {/* 1 — What is DSA-Sec: left accent border, clean editorial */}
          <div className="rounded-xl border-l-4 border-l-intellectual bg-white px-7 py-8 sm:px-9">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-intellectual">
              {t.dsa_scheme_overline}
            </p>
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              {t.dsa_what_is_title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {t.dsa_what_is_body}
            </p>
          </div>

          {/* 2 — Commitment Rules: dark navy background for high-stakes content */}
          <div className="rounded-xl bg-intellectual px-7 py-8 sm:px-9">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-champagne">
              {t.dsa_rules_overline}
            </p>
            <h2 className="text-lg font-bold text-white sm:text-xl">
              {t.dsa_rules_title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {t.dsa_rules_intro}
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <div className="rounded-lg border-l-2 border-champagne/40 bg-white/10 px-5 py-4">
                <p className="text-[13px] font-semibold text-white">
                  {t.dsa_commitment_title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                  {t.dsa_commitment_body}
                </p>
              </div>
              <div className="rounded-lg border-l-2 border-champagne/40 bg-white/10 px-5 py-4">
                <p className="text-[13px] font-semibold text-white">
                  {t.dsa_limits_title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                  {t.dsa_limits_body}
                </p>
              </div>
              <div className="rounded-lg border-l-2 border-champagne/40 bg-white/10 px-5 py-4">
                <p className="text-[13px] font-semibold text-white">
                  {t.dsa_assessment_title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                  {t.dsa_assessment_body}
                </p>
              </div>
            </div>
          </div>

          {/* 3 — DSALink Advantage: champagne background, large display numbers */}
          <div className="rounded-xl border border-champagne/20 bg-champagne-subtle px-7 py-8 sm:px-9">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-champagne-dark">
              {t.dsa_advantage_overline}
            </p>
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              {t.dsa_advantage_title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {t.dsa_advantage_lead}
            </p>
            <div className="mt-6 grid grid-cols-1 divide-y divide-champagne/20 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="py-6 text-center sm:px-6 sm:py-0">
                <p className="font-display text-5xl font-extrabold tracking-tight text-champagne-dark">
                  {t.dsa_stat1_num}
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-slate-700">
                  {t.dsa_stat1_label}
                </p>
                <p className="mt-1 text-[11px] text-slate-500">{t.dsa_stat1_sub}</p>
              </div>
              <div className="py-6 text-center sm:px-6 sm:py-0">
                <p className="font-display text-5xl font-extrabold tracking-tight text-champagne-dark">
                  {t.dsa_stat2_num}
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-slate-700">
                  {t.dsa_stat2_label}
                </p>
                <p className="mt-1 text-[11px] text-slate-500">{t.dsa_stat2_sub}</p>
              </div>
              <div className="py-6 text-center sm:px-6 sm:py-0">
                <p className="font-display text-5xl font-extrabold tracking-tight text-champagne-dark">
                  {t.dsa_stat3_num}
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-slate-700">
                  {t.dsa_stat3_label}
                </p>
                <p className="mt-1 text-[11px] text-slate-500">{t.dsa_stat3_sub}</p>
              </div>
            </div>
          </div>

          {/* 4 — About DSALink: de-emphasised warm background */}
          <div className="rounded-xl bg-surface-warm px-7 py-7 sm:px-9">
            <p className="mb-2 text-[10px] font-semibold tracking-[0.15em] text-slate-500 normal-case">
              {t.dsa_about_overline}
            </p>
            <h2 className="text-base font-semibold text-slate-700">
              {t.dsa_about_title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              {t.dsa_about_body}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
