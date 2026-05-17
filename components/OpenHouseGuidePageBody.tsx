"use client";

import { useEffect, useState } from "react";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  ExternalLink,
  Eye,
  ListChecks,
  MessageSquare,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { EmailCapture } from "@/components/EmailCapture";
import { PageHeader } from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import type { FeaturedSchool } from "@/lib/featured-schools";
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

const STAFF_QUESTIONS: TKey[] = [
  "ohGuide_staffQ1",
  "ohGuide_staffQ2",
  "ohGuide_staffQ3",
  "ohGuide_staffQ4",
  "ohGuide_staffQ5",
  "ohGuide_staffQ6",
  "ohGuide_staffQ7",
  "ohGuide_staffQ8",
];

const STUDENT_QUESTIONS: TKey[] = [
  "ohGuide_studentQ1",
  "ohGuide_studentQ2",
  "ohGuide_studentQ3",
  "ohGuide_studentQ4",
  "ohGuide_studentQ5",
  "ohGuide_studentQ6",
  "ohGuide_studentQ7",
];

const OBSERVE_ITEMS: Array<{ titleKey: TKey; bodyKey: TKey }> = [
  { titleKey: "ohGuide_observe1_title", bodyKey: "ohGuide_observe1_body" },
  { titleKey: "ohGuide_observe2_title", bodyKey: "ohGuide_observe2_body" },
  { titleKey: "ohGuide_observe3_title", bodyKey: "ohGuide_observe3_body" },
  { titleKey: "ohGuide_observe4_title", bodyKey: "ohGuide_observe4_body" },
];

const LOGISTICS_TIPS: TKey[] = [
  "ohGuide_logistics1",
  "ohGuide_logistics2",
  "ohGuide_logistics3",
  "ohGuide_logistics4",
];

export function OpenHouseGuidePageBody() {
  const { t, locale } = useLanguage();
  const [featuredSchools, setFeaturedSchools] = useState<FeaturedSchool[]>([]);
  const [emailSkipped, setEmailSkipped] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  useEffect(() => {
    fetch("/api/open-house/featured")
      .then((response) => response.json())
      .then((data: FeaturedSchool[]) => {
        const today = new Date().toISOString().slice(0, 10);
        setFeaturedSchools(
          data.filter((school) => school.confirmed && school.dateISO >= today)
        );
      })
      .catch(() => {});
  }, []);

  const upcomingSchools = featuredSchools;

  return (
    <>
      <SiteHeader />
      <main className="border-t border-intellectual/5 bg-surface">
        <PageHeader
          crumbLabel="Open House Guide"
          kicker={t.ohGuide_kicker}
          title={t.ohGuide_heroTitle}
          subtitle={t.ohGuide_heroSubtitle}
        />

        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-6xl">

          {/* ── Section 1: Before You Go ── */}
          <section aria-labelledby="prep-heading">
            <h2
              id="prep-heading"
              className="font-display text-lg font-semibold normal-case text-intellectual sm:text-xl"
            >
              {t.ohGuide_prep_heading}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.ohGuide_prep_lead}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {PREP_STEPS.map(({ num, titleKey, bodyKey }) => (
                <div
                  key={num}
                  className="rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card sm:p-5"
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

          <div className="-mx-4 mt-8 border-y border-champagne/15 bg-champagne/8 px-4 py-6 sm:-mx-6 sm:mt-10 sm:px-6">
            {/* ── Section 2: What Schools Show ── */}
            <section aria-labelledby="types-heading">
              <h2
                id="types-heading"
                className="font-display text-lg font-semibold normal-case text-intellectual sm:text-xl"
              >
                {t.ohGuide_types_heading}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
                {t.ohGuide_types_lead}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {SCHOOL_TYPES.map(({ badgeKey, titleKey, bodyKey }) => (
                  <article
                    key={String(titleKey)}
                    className="rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card sm:p-5"
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
          </div>

          {/* ── Section 3: On-Campus Checklists ── */}
          <section
            aria-labelledby="checklists-heading"
            className="mt-8 border-t border-intellectual/[0.06] pt-6 sm:mt-10 sm:pt-8"
          >
            <h2
              id="checklists-heading"
              className="font-display text-lg font-semibold normal-case text-intellectual sm:text-xl"
            >
              {t.ohGuide_checklists_heading}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.ohGuide_checklists_lead}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {CHECKLISTS.map(({ icon: Icon, titleKey, bodyKey, tipKey }) => (
                <div
                  key={String(titleKey)}
                  className="flex flex-col rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card sm:p-5"
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
                    <span className="mb-1 inline-block text-[10px] font-bold normal-case tracking-wide text-champagne-dark">
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

          <div className="-mx-4 mt-8 border-y border-champagne/15 bg-champagne/8 px-4 py-6 sm:-mx-6 sm:mt-10 sm:px-6">
            {/* ── Section 4: 10 Questions ── */}
            <section aria-labelledby="questions-heading">
              <h2
                id="questions-heading"
                className="font-display text-lg font-semibold normal-case text-intellectual sm:text-xl"
              >
                {t.ohGuide_questions_heading}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
                {t.ohGuide_questions_lead}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card sm:p-5">
                  <p className="text-[10px] font-bold normal-case tracking-wide text-champagne-dark">
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
                <div className="rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card sm:p-5">
                  <p className="text-[10px] font-bold normal-case tracking-wide text-champagne-dark">
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
          </div>

          {/* ── Intake Insight: The vacancy question ── */}
          <div className="mt-8 rounded-xl border border-[#e3ded5] bg-surface-warm p-4 shadow-card sm:mt-10 sm:p-5">
            <p className="text-[10px] font-bold normal-case tracking-widest text-champagne-dark">
              {locale === "zh" ? "开放日必问" : "Booth strategy"}
            </p>
            <h3 className="mt-2 font-display text-base font-semibold text-intellectual sm:text-lg">
              {locale === "zh"
                ? "没人告诉你的那个问题"
                : "The question nobody asks — but should"}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {locale === "zh"
                ? "DSA 录取不是统一排名后按分配——每所学校每年自行决定各才能领域录取几名学生。同一所学校可能在某个 CCA 录取 5 人，但另一个才能领域只录取 1 到 2 人。招生摊位的老师知道这个数字，但通常不会主动说。要在摊位直接问："
                : "DSA selection is not a single ranked list — each school decides independently how many students to accept per talent area each year. The same school may take 5 students in one CCA but only 1 or 2 in another talent area. Booth staff know this number but rarely volunteer it. Ask directly at the booth:"}
            </p>
            <blockquote className="mt-4 rounded-xl border-l-4 border-champagne bg-white px-5 py-3.5 text-sm font-semibold italic text-intellectual sm:text-base">
              {locale === "zh"
                ? "「2026年，贵校这个才能领域计划录取几位学生？」"
                : "“For this specific talent area, how many students are you planning to take in 2026?”"}
            </blockquote>
            <p className="mt-4 text-sm leading-relaxed text-intellectual-muted">
              {locale === "zh"
                ? "这个答案帮你判断这所学校对孩子来说是保底、冲刺还是梦想校——与才能无关，纯粹看名额。"
                : "The answer tells you whether this school is a Safe, Reach, or Dream choice for your child — independent of talent level, purely based on available spots."}
            </p>
            <div className="mt-4 rounded-xl border border-[#e3ded5] bg-white px-4 py-3.5">
              <p className="text-[10px] font-bold normal-case tracking-widest text-champagne-dark">
                {locale === "zh" ? "另外注意" : "Also note"}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-intellectual-muted">
                {locale === "zh"
                  ? "开放日不是正式选拔，但学校工作人员可能会留意孩子的表现和与人互动的方式。这不是威胁，而是机会——让孩子展示真实的热情，而不是刻意表演。"
                  : "The open house is not a formal selection event, but teachers and CCA staff sometimes take informal note of how students engage. Treat it as an opportunity — let your child show genuine interest naturally, not a coached performance."}
              </p>
            </div>
          </div>

          {/* ── Section A: Questions to Ask Staff & Teachers ── */}
          {/* ── Section B: Questions to Ask Current Students  ── */}
          <section
            aria-labelledby="staff-student-questions-heading"
            className="mt-8 border-t border-intellectual/[0.06] pt-6 sm:mt-10 sm:pt-8"
          >
            <h2
              id="staff-student-questions-heading"
              className="font-display text-lg font-semibold normal-case text-intellectual sm:text-xl"
            >
              {t.ohGuide_staffQ_heading}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.ohGuide_staffQ_lead}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card sm:p-5">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-champagne/30 bg-champagne-subtle/70">
                  <MessageSquare className="h-5 w-5 text-champagne-dark" aria-hidden />
                </div>
                <p className="text-[10px] font-bold normal-case tracking-wide text-champagne-dark">
                  {t.ohGuide_staffQ_cat_label}
                </p>
                <ol className="mt-4 space-y-3.5">
                  {STAFF_QUESTIONS.map((key, i) => (
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

              <div className="flex flex-col gap-4">
                <div className="rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card sm:p-5">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-champagne/30 bg-champagne-subtle/70">
                    <MessageSquare className="h-5 w-5 text-champagne-dark" aria-hidden />
                  </div>
                  <p className="text-[10px] font-bold normal-case tracking-wide text-champagne-dark">
                    {t.ohGuide_studentQ_cat_label}
                  </p>
                  <ol className="mt-4 space-y-3.5">
                    {STUDENT_QUESTIONS.map((key, i) => (
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

                <div className="rounded-xl border border-[#e3ded5] bg-surface-warm p-4 shadow-card sm:p-5">
                  <p className="text-[10px] font-bold normal-case tracking-wide text-champagne-dark">
                    {t.ohGuide_studentQ_insight}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-intellectual-muted">
                    {t.ohGuide_studentQ_insightBody}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ── Section C: What to Observe ── */}
          <section
            aria-labelledby="observe-heading"
            className="mt-8 border-t border-intellectual/[0.06] pt-6 sm:mt-10 sm:pt-8"
          >
            <h2
              id="observe-heading"
              className="font-display text-lg font-semibold normal-case text-intellectual sm:text-xl"
            >
              {t.ohGuide_observe_heading}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.ohGuide_observe_lead}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {OBSERVE_ITEMS.map(({ titleKey, bodyKey }) => (
                <div
                  key={String(titleKey)}
                  className="flex gap-4 rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card sm:p-5"
                >
                  <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-champagne/30 bg-champagne-subtle/70">
                    <Eye className="h-4 w-4 text-champagne-dark" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-intellectual">
                      {t[titleKey]}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-intellectual-muted">
                      {t[bodyKey]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section D: Practical Logistics ── */}
          <section
            aria-labelledby="logistics-heading"
            className="mt-8 border-t border-intellectual/[0.06] pt-6 sm:mt-10 sm:pt-8"
          >
            <h2
              id="logistics-heading"
              className="font-display text-lg font-semibold normal-case text-intellectual sm:text-xl"
            >
              {t.ohGuide_logistics_heading}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.ohGuide_logistics_lead}
            </p>
            <div className="mt-6 rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card sm:p-5">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-champagne/30 bg-champagne-subtle/70">
                <Clock className="h-5 w-5 text-champagne-dark" aria-hidden />
              </div>
              <ul className="space-y-4">
                {LOGISTICS_TIPS.map((key, i) => (
                  <li key={String(key)} className="flex gap-3 text-sm">
                    <span className="mt-px shrink-0 font-mono text-[11px] font-bold tabular-nums text-champagne-dark">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed text-intellectual-muted">
                      {t[key]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {upcomingSchools.length > 0 && (
            <div className="-mx-4 mt-8 border-y border-champagne/15 bg-champagne/8 px-4 py-6 sm:-mx-6 sm:mt-10 sm:px-6">
              {/* ── Section 5: Featured Schools ── */}
              <section aria-labelledby="featured-heading">
                <p className="mb-1.5 text-[10px] font-bold tracking-[0.16em] text-champagne-dark normal-case">
                  {locale === "zh" ? "已确认开放日" : "Confirmed open houses"}
                </p>
                <h2
                  id="featured-heading"
                  className="font-display text-lg font-semibold normal-case text-intellectual sm:text-xl"
                >
                  {t.ohGuide_featured_heading}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
                  {t.ohGuide_featured_lead}
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {upcomingSchools.map(({ nameEn, nameZh, badge, dateEn, dateZh, confirmed, url }) => (
                    <div
                      key={nameEn}
                      className="flex flex-col rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card sm:p-5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="inline-block rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-semibold normal-case tracking-wide text-slate-900">
                          {badge}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-base font-semibold normal-case text-intellectual">
                        {locale === "zh" ? nameZh : nameEn}
                      </h3>
                      <p className="mt-0.5 text-xs normal-case text-slate-500">
                        {locale === "zh" ? nameEn : nameZh}
                      </p>
                      <p className="mt-3 text-sm font-medium normal-case text-intellectual">
                        {locale === "zh" ? dateZh : dateEn}
                      </p>
                      <div className="mt-auto pt-4">
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
            </div>
          )}

          {/* ── Section 6: Green / Red Flags ── */}
          <section
            aria-labelledby="flags-heading"
            className="mt-8 border-t border-intellectual/[0.06] pt-6 sm:mt-10 sm:pt-8"
          >
            <h2
              id="flags-heading"
              className="font-display text-lg font-semibold normal-case text-intellectual sm:text-xl"
            >
              {t.ohGuide_flags_heading}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.ohGuide_flags_lead}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-green-200/80 bg-green-50/40 p-4 shadow-sm ring-1 ring-green-100/80 sm:p-6">
                <div className="mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" aria-hidden />
                  <h3 className="font-display text-base font-semibold text-slate-900">
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
              <div className="rounded-xl border border-rose-200/80 bg-rose-50/40 p-4 shadow-sm ring-1 ring-rose-100/80 sm:p-6">
                <div className="mb-4 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-rose-600" aria-hidden />
                  <h3 className="font-display text-base font-semibold text-slate-900">
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
            className="mt-8 border-t border-intellectual/[0.06] pt-6 sm:mt-10 sm:pt-8"
          >
            <h2
              id="after-heading"
              className="font-display text-lg font-semibold normal-case text-intellectual sm:text-xl"
            >
              {t.ohGuide_after_heading}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.ohGuide_after_lead}
            </p>
            <div className="relative mt-8">
              <div
                className="absolute bottom-2 left-[6px] top-2 w-px bg-gradient-to-b from-champagne/70 via-champagne/35 to-champagne/15 sm:left-[9px]"
                aria-hidden
              />
              <ol className="relative space-y-8 sm:space-y-10">
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
                      <div className="w-full min-w-0 rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card sm:p-5">
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

          {/* Email capture */}
          {!emailSkipped && !emailSubmitted && (
            <div className="mb-6 mt-8">
              <EmailCapture
                heading="Get open house reminders"
                description="We'll alert you when new open house dates are confirmed, and send a visit checklist before each school's open day."
                submitLabel="Send me alerts"
                successTitle="You're on the list"
                successDescription="We'll alert you when new open house dates are confirmed. Check your inbox for the school visit checklist."
                onSubmit={async (email) => {
                  await fetch("/api/subscribe", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, source: "open-house-guide" }),
                  });
                  setEmailSubmitted(true);
                }}
                onSkip={() => setEmailSkipped(true)}
              />
            </div>
          )}

          {/* ── Next Step CTA ── */}
          <div className="mt-8 border-t border-intellectual/[0.06] pt-6 sm:mt-10 sm:pt-8">
            <div className="flex flex-col items-start gap-4 rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div>
                <p className="text-[10px] font-bold normal-case tracking-widest text-champagne-dark">
                  {locale === "zh" ? "下一步" : "Next step"}
                </p>
                <h3 className="mt-1.5 font-display text-base font-semibold text-intellectual sm:text-lg">
                  {locale === "zh"
                    ? "学校短名单确认了？下一步：准备 DSA 选拔。"
                    : "Shortlist confirmed? Now prepare your child for selection."}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-intellectual-muted">
                  {locale === "zh"
                    ? "开放日是你评估学校的机会。DSA 选拔是学校评估你孩子的机会。准备不同，结果不同。"
                    : "The open house is where you evaluate the school. DSA selection is where the school evaluates your child. Being prepared makes the difference."}
                </p>
              </div>
              <Link
                href="/dsa-interview"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-champagne/40 bg-champagne-subtle/60 px-5 py-2.5 text-sm font-semibold normal-case text-champagne-dark transition hover:bg-champagne-subtle hover:border-champagne/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne-dark"
              >
                {locale === "zh" ? "查看选拔准备指南 →" : "Read the Selection Guide →"}
              </Link>
            </div>
          </div>

        </div>
      </main>
      <SiteFooter scheduleNote={t.ohGuide_footerNote} />
    </>
  );
}
