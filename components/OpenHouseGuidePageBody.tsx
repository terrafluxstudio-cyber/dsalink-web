"use client";

import {
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Eye,
  ListChecks,
  XCircle,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Copy } from "@/lib/i18n";

type TKey = keyof Copy;

const PREP_STEPS: Array<{ num: string; titleKey: TKey; bodyKey: TKey }> = [
  { num: "01", titleKey: "ohGuide_prep1_title", bodyKey: "ohGuide_prep1_body" },
  { num: "02", titleKey: "ohGuide_prep2_title", bodyKey: "ohGuide_prep2_body" },
  { num: "03", titleKey: "ohGuide_prep3_title", bodyKey: "ohGuide_prep3_body" },
  { num: "04", titleKey: "ohGuide_prep4_title", bodyKey: "ohGuide_prep4_body" },
];

const SCHOOL_TYPES: Array<{
  badgeKey: TKey;
  titleKey: TKey;
  bodyKey: TKey;
}> = [
  {
    badgeKey: "ohGuide_typeIP_badge",
    titleKey: "ohGuide_typeIP_title",
    bodyKey: "ohGuide_typeIP_body",
  },
  {
    badgeKey: "ohGuide_typeSAP_badge",
    titleKey: "ohGuide_typeSAP_title",
    bodyKey: "ohGuide_typeSAP_body",
  },
  {
    badgeKey: "ohGuide_typeOLevel_badge",
    titleKey: "ohGuide_typeOLevel_title",
    bodyKey: "ohGuide_typeOLevel_body",
  },
];

const CHECKLISTS: Array<{
  icon: typeof Eye;
  titleKey: TKey;
  bodyKey: TKey;
  tipKey: TKey;
}> = [
  {
    icon: Eye,
    titleKey: "fieldGuide_card1_title",
    bodyKey: "fieldGuide_card1_body",
    tipKey: "fieldGuide_card1_tip",
  },
  {
    icon: ListChecks,
    titleKey: "fieldGuide_card2_title",
    bodyKey: "fieldGuide_card2_body",
    tipKey: "fieldGuide_card2_tip",
  },
  {
    icon: AlertCircle,
    titleKey: "fieldGuide_card3_title",
    bodyKey: "fieldGuide_card3_body",
    tipKey: "fieldGuide_card3_tip",
  },
];

const CAT1_QUESTIONS: TKey[] = [
  "ohGuide_q1",
  "ohGuide_q2",
  "ohGuide_q3",
  "ohGuide_q4",
  "ohGuide_q5",
];

const CAT2_QUESTIONS: TKey[] = [
  "ohGuide_q6",
  "ohGuide_q7",
  "ohGuide_q8",
  "ohGuide_q9",
  "ohGuide_q10",
];

const GREEN_FLAGS: TKey[] = [
  "ohGuide_green1",
  "ohGuide_green2",
  "ohGuide_green3",
  "ohGuide_green4",
];

const RED_FLAGS: TKey[] = [
  "ohGuide_red1",
  "ohGuide_red2",
  "ohGuide_red3",
  "ohGuide_red4",
];

const AFTER_STEPS: Array<{ titleKey: TKey; bodyKey: TKey }> = [
  { titleKey: "ohGuide_after1_title", bodyKey: "ohGuide_after1_body" },
  { titleKey: "ohGuide_after2_title", bodyKey: "ohGuide_after2_body" },
  { titleKey: "ohGuide_after3_title", bodyKey: "ohGuide_after3_body" },
];

type FeaturedSchool = {
  nameEn: string;
  nameZh: string;
  badge: string;
  dateEn: string;
  dateZh: string;
  confirmed: boolean;
  url: string;
};

const FEATURED_SCHOOLS: FeaturedSchool[] = [
  {
    nameEn: "Hwa Chong Institution",
    nameZh: "华侨中学",
    badge: "IP · Independent",
    dateEn: "Sat 23 May 2026 · 08:00–13:00",
    dateZh: "2026年5月23日（周六）· 08:00–13:00",
    confirmed: true,
    url: "https://www.hci.edu.sg/",
  },
  {
    nameEn: "Raffles Girls' School",
    nameZh: "莱佛士女子中学",
    badge: "IP · Independent",
    dateEn: "Sat 23 May 2026 · 08:30–13:30",
    dateZh: "2026年5月23日（周六）· 08:30–13:30",
    confirmed: true,
    url: "https://openhouse.rgs.edu.sg/",
  },
  {
    nameEn: "Victoria School",
    nameZh: "维多利亚学校",
    badge: "IP · Autonomous",
    dateEn: "Sat 23 May 2026 · 08:00–12:00",
    dateZh: "2026年5月23日（周六）· 08:00–12:00",
    confirmed: true,
    url: "https://www.victoria.moe.edu.sg/prospective-students/openhouse-2026/",
  },
  {
    nameEn: "Nan Hua High School",
    nameZh: "南华中学",
    badge: "SAP · Government-aided",
    dateEn: "May 2026 (TBC)",
    dateZh: "2026年5月（待定）",
    confirmed: false,
    url: "https://www.nanhuahigh.moe.edu.sg/",
  },
  {
    nameEn: "Crescent Girls' School",
    nameZh: "克信女子中学",
    badge: "Government",
    dateEn: "May 2026 (TBC)",
    dateZh: "2026年5月（待定）",
    confirmed: false,
    url: "https://www.crescent.edu.sg/about-cgs/admission/",
  },
];

export function OpenHouseGuidePageBody() {
  const { t, locale } = useLanguage();

  return (
    <>
      <SiteHeader />
      <main className="border-t border-intellectual/5 bg-hero-mesh">
        <PageHeader
          crumbLabel="Open House Guide"
          kicker={t.ohGuide_kicker}
          title={t.ohGuide_heroTitle}
          subtitle={t.ohGuide_heroSubtitle}
        />

        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">

          {/* ── Section 1: Before You Go ── */}
          <section aria-labelledby="prep-heading">
            <h2
              id="prep-heading"
              className="font-display text-lg font-semibold text-intellectual sm:text-xl"
            >
              {t.ohGuide_prep_heading}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.ohGuide_prep_lead}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {PREP_STEPS.map(({ num, titleKey, bodyKey }) => (
                <div
                  key={num}
                  className="rounded-2xl border border-intellectual/12 bg-white/95 p-5 shadow-soft ring-1 ring-champagne/15 sm:p-6"
                >
                  <span className="font-mono text-[11px] font-bold tracking-[0.12em] text-champagne-dark">
                    {num}
                  </span>
                  <h3 className="mt-2 font-display text-base font-semibold text-intellectual">
                    {t[titleKey]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-intellectual-muted">
                    {t[bodyKey]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 2: What Schools Show ── */}
          <section
            aria-labelledby="types-heading"
            className="mt-20 border-t border-intellectual/[0.06] pt-14 sm:mt-24 sm:pt-16"
          >
            <h2
              id="types-heading"
              className="font-display text-lg font-semibold text-intellectual sm:text-xl"
            >
              {t.ohGuide_types_heading}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.ohGuide_types_lead}
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {SCHOOL_TYPES.map(({ badgeKey, titleKey, bodyKey }) => (
                <article
                  key={String(titleKey)}
                  className="rounded-2xl border border-champagne/35 bg-gradient-to-br from-white to-champagne-subtle/50 p-5 shadow-sm ring-1 ring-intellectual/8 sm:p-6"
                >
                  <span className="inline-block rounded-full border border-champagne/40 bg-champagne-subtle/70 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-champagne-dark">
                    {t[badgeKey]}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold text-intellectual">
                    {t[titleKey]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-intellectual-muted">
                    {t[bodyKey]}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* ── Section 3: On-Campus Checklists ── */}
          <section
            aria-labelledby="checklists-heading"
            className="mt-20 border-t border-intellectual/[0.06] pt-14 sm:mt-24 sm:pt-16"
          >
            <h2
              id="checklists-heading"
              className="font-display text-lg font-semibold text-intellectual sm:text-xl"
            >
              {t.ohGuide_checklists_heading}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.ohGuide_checklists_lead}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {CHECKLISTS.map(({ icon: Icon, titleKey, bodyKey, tipKey }) => (
                <div
                  key={String(titleKey)}
                  className="flex flex-col rounded-2xl border border-intellectual/12 bg-white/95 p-5 shadow-soft ring-1 ring-champagne/15 sm:p-6"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-champagne/30 bg-champagne-subtle/70">
                    <Icon className="h-5 w-5 text-champagne-dark" aria-hidden />
                  </div>
                  <h3 className="font-display text-base font-semibold text-intellectual">
                    {t[titleKey]}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-intellectual-muted">
                    {t[bodyKey]}
                  </p>
                  <div className="mt-4 rounded-lg border border-champagne/25 bg-champagne-subtle/40 px-4 py-3">
                    <span className="mb-1 inline-block text-[10px] font-bold uppercase tracking-wider text-champagne-dark">
                      {t.fieldGuide_insider_label}
                    </span>
                    <p className="text-xs leading-relaxed text-intellectual-muted">
                      {t[tipKey]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 4: 10 Questions ── */}
          <section
            aria-labelledby="questions-heading"
            className="mt-20 border-t border-intellectual/[0.06] pt-14 sm:mt-24 sm:pt-16"
          >
            <h2
              id="questions-heading"
              className="font-display text-lg font-semibold text-intellectual sm:text-xl"
            >
              {t.ohGuide_questions_heading}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.ohGuide_questions_lead}
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-intellectual/12 bg-white/95 p-5 shadow-soft ring-1 ring-champagne/15 sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-champagne-dark">
                  {t.ohGuide_q_cat1_label}
                </p>
                <ol className="mt-4 space-y-3.5">
                  {CAT1_QUESTIONS.map((key, i) => (
                    <li key={String(key)} className="flex gap-3 text-sm">
                      <span className="mt-px shrink-0 font-mono text-[11px] font-bold tabular-nums text-champagne-dark">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-relaxed text-intellectual-muted">
                        {t[key]}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-2xl border border-champagne/35 bg-gradient-to-br from-white to-champagne-subtle/50 p-5 shadow-sm ring-1 ring-intellectual/8 sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-champagne-dark">
                  {t.ohGuide_q_cat2_label}
                </p>
                <ol className="mt-4 space-y-3.5">
                  {CAT2_QUESTIONS.map((key, i) => (
                    <li key={String(key)} className="flex gap-3 text-sm">
                      <span className="mt-px shrink-0 font-mono text-[11px] font-bold tabular-nums text-champagne-dark">
                        {String(i + 6).padStart(2, "0")}
                      </span>
                      <span className="leading-relaxed text-intellectual-muted">
                        {t[key]}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          {/* ── Section 5: Featured Schools ── */}
          <section
            aria-labelledby="featured-heading"
            className="mt-20 border-t border-intellectual/[0.06] pt-14 sm:mt-24 sm:pt-16"
          >
            <h2
              id="featured-heading"
              className="font-display text-lg font-semibold normal-case text-intellectual sm:text-xl"
            >
              {t.ohGuide_featured_heading}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.ohGuide_featured_lead}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURED_SCHOOLS.map(({ nameEn, nameZh, badge, dateEn, dateZh, confirmed, url }) => (
                <div
                  key={nameEn}
                  className="flex flex-col rounded-2xl border border-intellectual/12 bg-white/95 p-5 shadow-soft ring-1 ring-champagne/15 sm:p-6"
                >
                  <span className="inline-block self-start rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-semibold normal-case tracking-wide text-slate-600">
                    {badge}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold normal-case text-intellectual">
                    {locale === "zh" ? nameZh : nameEn}
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-500 normal-case">
                    {locale === "zh" ? nameEn : nameZh}
                  </p>
                  <p className={`mt-3 text-sm font-medium normal-case ${confirmed ? "text-intellectual" : "text-slate-500"}`}>
                    {locale === "zh" ? dateZh : dateEn}
                  </p>
                  <div className="mt-auto pt-5">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold normal-case text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
                    >
                      {confirmed ? t.ohGuide_btnViewDetails : t.ohGuide_btnVisitAdmissions}
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 6: Green / Red Flags ── */}
          <section
            aria-labelledby="flags-heading"
            className="mt-20 border-t border-intellectual/[0.06] pt-14 sm:mt-24 sm:pt-16"
          >
            <h2
              id="flags-heading"
              className="font-display text-lg font-semibold text-intellectual sm:text-xl"
            >
              {t.ohGuide_flags_heading}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.ohGuide_flags_lead}
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-green-200/80 bg-green-50/40 p-5 shadow-sm ring-1 ring-green-100/80 sm:p-6">
                <div className="mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" aria-hidden />
                  <h3 className="font-display text-base font-semibold text-slate-800">
                    {t.ohGuide_greenFlags_title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {GREEN_FLAGS.map((key) => (
                    <li key={String(key)} className="flex gap-2.5 text-sm">
                      <CheckCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-green-500"
                        aria-hidden
                      />
                      <span className="leading-relaxed text-slate-700">
                        {t[key]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-rose-200/80 bg-rose-50/40 p-5 shadow-sm ring-1 ring-rose-100/80 sm:p-6">
                <div className="mb-4 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-rose-600" aria-hidden />
                  <h3 className="font-display text-base font-semibold text-slate-800">
                    {t.ohGuide_redFlags_title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {RED_FLAGS.map((key) => (
                    <li key={String(key)} className="flex gap-2.5 text-sm">
                      <XCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-rose-500"
                        aria-hidden
                      />
                      <span className="leading-relaxed text-slate-700">
                        {t[key]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── Section 7: After the Visit ── */}
          <section
            aria-labelledby="after-heading"
            className="mt-20 border-t border-intellectual/[0.06] pt-14 sm:mt-24 sm:pt-16"
          >
            <h2
              id="after-heading"
              className="font-display text-lg font-semibold text-intellectual sm:text-xl"
            >
              {t.ohGuide_after_heading}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.ohGuide_after_lead}
            </p>
            <div className="relative mt-10">
              <div
                className="absolute bottom-2 left-[6px] top-2 w-px bg-gradient-to-b from-champagne/70 via-champagne/35 to-champagne/15 sm:left-[9px]"
                aria-hidden
              />
              <ol className="relative space-y-10 sm:space-y-12">
                {AFTER_STEPS.map(({ titleKey, bodyKey }, i) => (
                  <li key={String(titleKey)} className="relative">
                    <span
                      className="absolute left-0 top-[0.4rem] flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-champagne bg-white shadow-[0_0_0_3px_rgba(198,162,74,0.2)] sm:top-2 sm:h-[18px] sm:w-[18px]"
                      aria-hidden
                    />
                    <div className="grid w-full min-w-0 gap-4 pl-8 sm:grid-cols-[minmax(0,6rem)_minmax(0,1fr)] sm:gap-10 sm:pl-11">
                      <div className="min-w-0 sm:pt-0.5 sm:text-right">
                        <span className="font-mono text-xs font-bold tracking-[0.12em] text-champagne-dark">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="w-full min-w-0 rounded-2xl border border-intellectual/12 bg-white/95 p-5 shadow-soft ring-1 ring-champagne/15 sm:p-6">
                        <h3 className="font-display text-base font-semibold text-intellectual">
                          {t[titleKey]}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-intellectual-muted sm:text-base">
                          {t[bodyKey]}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

        </div>
      </main>
      <SiteFooter scheduleNote={t.ohGuide_footerNote} />
    </>
  );
}
