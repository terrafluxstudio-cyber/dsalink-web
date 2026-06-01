"use client";

import { useState } from "react";
import Link from "next/link";
import {
  getDsaExperienceChecklist,
  getDsaExperienceSections,
  getDsaExperienceTimeline,
  getDsaExperienceToc,
  type DsaExperienceCallout,
  type DsaExperienceCaseStudy,
  type DsaExperienceQuestionSet,
} from "@/content/dsa-experience";
import { AlertCircle, BookMarked, GraduationCap, Lightbulb, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { EmailCapture } from "@/components/EmailCapture";
import { PageHeader } from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type DsaExperienceStat = {
  value: string;
  label: string;
};

type DsaExperienceExample = {
  label?: string;
  body: string;
};

type DsaExperienceSection = ReturnType<typeof getDsaExperienceSections>[number];

function isDsaExperienceStat(value: unknown): value is DsaExperienceStat {
  if (!value || typeof value !== "object") {
    return false;
  }

  const stat = value as Record<string, unknown>;
  return typeof stat.value === "string" && typeof stat.label === "string";
}

function getSectionStats(section: DsaExperienceSection): DsaExperienceStat[] | undefined {
  if (!("stats" in section) || !Array.isArray(section.stats)) {
    return undefined;
  }

  return section.stats.every(isDsaExperienceStat) ? section.stats : undefined;
}

function isDsaExperienceExample(value: unknown): value is DsaExperienceExample {
  if (!value || typeof value !== "object") {
    return false;
  }

  const example = value as Record<string, unknown>;
  return (
    typeof example.body === "string" &&
    (example.label === undefined || typeof example.label === "string")
  );
}

function getSectionExamples(section: DsaExperienceSection): DsaExperienceExample[] | undefined {
  if (!("examples" in section) || !Array.isArray(section.examples)) {
    return undefined;
  }

  return section.examples.every(isDsaExperienceExample) ? section.examples : undefined;
}

export function DsaExperiencePageBody() {
  const { t, locale } = useLanguage();
  const sections = getDsaExperienceSections(locale);
  const timeline = getDsaExperienceTimeline(locale);
  const checklist = getDsaExperienceChecklist(locale);
  const toc = getDsaExperienceToc(locale);
  const [emailSkipped, setEmailSkipped] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          crumbLabel={t.dsaExpPageCrumb}
          kicker={t.dsaExpPageKicker}
          title={t.dsaExpPageTitle}
          subtitle={t.dsaExpPageSubtitle}
        />

        <div className="bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <div className="lg:grid lg:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]">
              <nav
                aria-label="Table of contents"
                className="mb-10 lg:sticky lg:top-24 lg:mb-0 lg:self-start"
              >
                <p className="mb-3 text-xs font-semibold tracking-wide text-slate-500">
                  {t.dsaExpTocLabel}
                </p>
                <ol className="space-y-2 border-l border-slate-200 pl-4">
                  {toc.map(({ href, label, shortTitle }) => (
                    <li key={href}>
                      <a
                        href={href}
                        className="group block text-sm leading-snug text-slate-600 transition hover:text-intellectual"
                      >
                        <span className="font-semibold text-intellectual group-hover:text-intellectual-light">
                          {label}
                        </span>
                        <span className="mt-0.5 block text-xs leading-snug text-slate-500 group-hover:text-slate-700">
                          {shortTitle}
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <article className="mx-auto w-full max-w-3xl min-w-0">
                {sections.map((section, index) => {
                  const stats = getSectionStats(section);
                  const examples = getSectionExamples(section);

                  return (
                    <section
                      key={section.id}
                      id={section.id}
                      className={
                        index > 0
                          ? "scroll-mt-24 border-t border-slate-200/80 pt-10 mt-10"
                          : "scroll-mt-24"
                      }
                      aria-labelledby={`${section.id}-heading`}
                    >
                      <h2
                        id={`${section.id}-heading`}
                        className="break-words text-xl font-semibold text-slate-900 [overflow-wrap:anywhere]"
                      >
                        {section.title}
                      </h2>

                      <div className="mt-5 space-y-4 text-[0.9375rem] leading-relaxed text-slate-600 sm:text-base">
                        {section.paragraphs.map((p) => (
                          <p key={p.slice(0, 48)}>{p}</p>
                        ))}

                        {stats ? (
                          <div
                            className={`grid gap-4 rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card ${
                              stats.length === 1
                                ? "max-w-[14rem] grid-cols-1"
                                : stats.length === 2
                                  ? "grid-cols-2"
                                  : "grid-cols-3"
                            }`}
                          >
                            {stats.map((stat) => (
                              <div
                                key={`${stat.value}-${stat.label}`}
                                className="flex flex-col items-center py-2 text-center"
                              >
                                <span className="font-display text-3xl font-extrabold tabular-nums text-intellectual">
                                  {stat.value}
                                </span>
                                <span className="mt-1 text-xs leading-snug text-slate-500">
                                  {stat.label}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : null}

                        {section.callouts?.map((callout: DsaExperienceCallout, i: number) => (
                          <div
                            key={i}
                            className={`flex gap-3 rounded-r-xl border-l-4 p-4 ${
                              callout.type === "warning"
                                ? "border-red-400 bg-red-50"
                                : "border-champagne bg-champagne-subtle"
                            }`}
                          >
                            <div className="mt-0.5 shrink-0">
                              {callout.type === "warning" ? (
                                <AlertCircle
                                  className="h-4 w-4 text-red-500"
                                  aria-hidden
                                />
                              ) : (
                                <Lightbulb
                                  className="h-4 w-4 text-champagne-dark"
                                  aria-hidden
                                />
                              )}
                            </div>
                            <div>
                              <p
                                className={`text-sm font-semibold ${
                                  callout.type === "warning"
                                    ? "text-red-700"
                                    : "text-intellectual"
                                }`}
                              >
                                {callout.heading}
                              </p>
                              <p
                                className={`mt-1 text-sm leading-relaxed ${
                                  callout.type === "warning"
                                    ? "text-red-900/75"
                                    : "text-slate-600"
                                }`}
                              >
                                {callout.body}
                              </p>
                            </div>
                          </div>
                        ))}

                        {section.id === "section-6" ? (
                          <>
                            <div className="hidden overflow-x-auto md:block">
                              <div className="relative flex min-w-max gap-0">
                                {timeline.map((row, i) => (
                                  <div
                                    key={row.date}
                                    className="relative flex min-w-[9rem] flex-1 flex-col items-center px-2"
                                  >
                                    {i < timeline.length - 1 && (
                                      <div className="absolute left-1/2 top-[1.375rem] z-0 h-0.5 w-full bg-slate-200" />
                                    )}
                                    <div
                                      className={`relative z-10 mb-3 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
                                        i === 0
                                          ? "border-champagne bg-champagne text-intellectual"
                                          : "border-intellectual bg-intellectual text-white"
                                      }`}
                                    >
                                      {i + 1}
                                    </div>
                                    <p className="mb-1 text-center text-[0.6875rem] font-semibold tabular-nums text-intellectual">
                                      {row.date}
                                    </p>
                                    <p className="text-center text-xs leading-snug text-slate-600">
                                      {row.milestone}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-0 md:hidden">
                              {timeline.map((row, i) => (
                                <div key={row.date} className="flex gap-4">
                                  <div className="flex flex-col items-center">
                                    <div
                                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${
                                        i === 0
                                          ? "border-champagne bg-champagne text-intellectual"
                                          : "border-intellectual bg-intellectual text-white"
                                      }`}
                                    >
                                      {i + 1}
                                    </div>
                                    {i < timeline.length - 1 && (
                                      <div className="my-1 w-0.5 flex-1 bg-slate-200" />
                                    )}
                                  </div>
                                  <div className="min-w-0 pb-6 pt-0.5">
                                    <p className="text-xs font-semibold tabular-nums text-intellectual">
                                      {row.date}
                                    </p>
                                    <p className="mt-0.5 text-[0.9375rem] leading-relaxed text-slate-600">
                                      {row.milestone}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        ) : null}

                        {section.orderedList && !section.tierChart ? (
                          <ol className="list-decimal space-y-3 pl-5 marker:font-semibold marker:text-intellectual">
                            {section.orderedList.map((item) => (
                              <li key={item.slice(0, 48)}>{item}</li>
                            ))}
                          </ol>
                        ) : null}

                        {section.bullets ? (
                          <ul className="list-disc space-y-2 pl-5 marker:text-champagne-dark">
                            {section.bullets.map((item) => (
                              <li key={item.slice(0, 48)}>{item}</li>
                            ))}
                          </ul>
                        ) : null}

                        {examples?.map((ex, i) => (
                          <div
                            key={`${ex.label ?? "example"}-${i}`}
                            className="rounded-xl border border-champagne/30 bg-surface-warm px-5 py-4"
                          >
                            <p className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-wide text-champagne-dark">
                              <BookMarked className="h-3.5 w-3.5 shrink-0" aria-hidden />
                              {ex.label ?? "Real-world example"}
                            </p>
                            <p className="text-[0.9375rem] italic leading-relaxed text-slate-700">
                              {ex.body}
                            </p>
                          </div>
                        ))}

                        {section.caseStudies ? (
                          <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {section.caseStudies.map((caseStudy: DsaExperienceCaseStudy, i) => (
                              <CaseStudyCard
                                key={`${caseStudy.talentArea}-${i}`}
                                talentArea={caseStudy.talentArea}
                                icon={caseStudy.icon}
                                illustration={caseStudy.illustration}
                                scenario={caseStudy.scenario}
                                outcome={caseStudy.outcome}
                                lesson={caseStudy.lesson}
                              />
                            ))}
                          </div>
                        ) : null}

                        {section.comparison ? (
                          <div className="overflow-x-auto rounded-xl border border-[#e3ded5] bg-white shadow-card">
                            <div className="grid min-w-[30rem] grid-cols-2 divide-x divide-[#e3ded5]">
                              <div className="border-t-4 border-slate-300 bg-surface-warm p-3 text-center text-sm font-semibold text-slate-700">
                                {section.comparison.weakLabel}
                              </div>
                              <div className="border-t-4 border-champagne bg-intellectual p-3 text-center text-sm font-semibold text-white">
                                {section.comparison.strongLabel}
                              </div>
                            </div>
                            {section.comparison.rows.map((row) => (
                              <div
                                key={`${row.weak}-${row.strong}`}
                                className="grid min-w-[30rem] grid-cols-2 divide-x divide-[#e3ded5] border-t border-[#e3ded5]"
                              >
                                <div className="bg-surface-warm/60 p-3 text-sm leading-snug text-slate-600">
                                  {row.weak}
                                </div>
                                <div className="bg-champagne-subtle/60 p-3 text-sm leading-snug text-slate-700">
                                  {row.strong}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : null}

                        {section.tierChart ? (
                          <div className="space-y-1.5">
                            {section.tierChart.map((item, i) => {
                              const widths = [
                                "max-w-[44%]",
                                "max-w-[58%]",
                                "max-w-[72%]",
                                "max-w-[86%]",
                                "max-w-full",
                              ];
                              const styles = [
                                "bg-intellectual text-white",
                                "bg-intellectual/80 text-white",
                                "bg-intellectual/60 text-white",
                                "bg-slate-200 text-slate-700",
                                "bg-slate-100 text-slate-500",
                              ];
                              const labelStyles = [
                                "text-white",
                                "text-white",
                                "text-white",
                                "text-slate-700",
                                "text-slate-500",
                              ];
                              const exampleStyles = [
                                "text-white/65",
                                "text-white/65",
                                "text-white/65",
                                "text-slate-500",
                                "text-slate-400",
                              ];

                              return (
                                <div
                                  key={item.label}
                                  className={`mx-auto rounded-lg px-4 py-2.5 text-center transition-all ${widths[i]} ${styles[i]}`}
                                >
                                  <p className={`text-sm font-semibold ${labelStyles[i]}`}>
                                    {item.label}
                                  </p>
                                  <p className={`mt-0.5 text-xs leading-snug ${exampleStyles[i]}`}>
                                    {item.examples}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        ) : null}

                      {section.questionSets ? (
                        <div className="grid gap-4 sm:grid-cols-2">
                          {section.questionSets.map((set: DsaExperienceQuestionSet) => (
                            <div
                              key={set.label}
                              className="rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card"
                            >
                              <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
                                {set.icon === "teacher" ? (
                                  <GraduationCap
                                    className="h-4 w-4 shrink-0 text-intellectual"
                                    aria-hidden
                                  />
                                ) : (
                                  <Users
                                    className="h-4 w-4 shrink-0 text-champagne-dark"
                                    aria-hidden
                                  />
                                )}
                                {set.label}
                              </p>
                              <ol className="list-decimal space-y-2 pl-4">
                                {set.questions.map((q) => (
                                  <li
                                    key={q}
                                    className="text-sm leading-snug text-slate-600"
                                  >
                                    {q}
                                  </li>
                                ))}
                              </ol>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {section.id === "section-10" ? (
                        <ul className="mt-2 space-y-3 rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
                          {checklist.map((item) => (
                            <li key={item} className="flex gap-3">
                              <input
                                type="checkbox"
                                className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-intellectual focus:ring-intellectual"
                                aria-label={item}
                              />
                              <span className="text-[0.9375rem] leading-relaxed text-slate-700">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      </div>
                    </section>
                  );
                })}

                {/* WhatsApp share strip */}
                <div className="mb-6 flex flex-wrap items-center gap-3 rounded-xl border border-champagne/30 bg-champagne/8 px-4 py-3">
                  <span className="text-sm text-slate-600">
                    {locale === "zh"
                      ? "觉得有用？转发给还不知道 DSA 的家长朋友"
                      : "Found this helpful? Share with a parent who hasn't heard of DSA"}
                  </span>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      locale === "zh"
                        ? "推荐这个 DSA 申请指南，免费又全面：https://dsalink.sg/dsa-experience"
                        : "This free DSA guide is really comprehensive: https://dsalink.sg/dsa-experience"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto shrink-0 rounded-lg bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#1ebe5d]"
                  >
                    {locale === "zh" ? "WhatsApp 分享" : "Share on WhatsApp"}
                  </a>
                </div>

                {/* Email capture */}
                {!emailSkipped && !emailSubmitted && (
                  <div className="mb-6">
                    <EmailCapture
                      heading="Save this guide to your inbox"
                      description="We'll send you this Playbook plus deadline reminders and open house alerts as DSA season progresses."
                      submitLabel="Send me the guide"
                      successTitle="Guide sent!"
                      successDescription="Check your inbox. We'll follow up with deadline reminders and open house alerts throughout DSA season."
                      onSubmit={async (email) => {
                        await fetch("/api/subscribe", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ email, source: "playbook" }),
                        });
                        setEmailSubmitted(true);
                      }}
                      onSkip={() => setEmailSkipped(true)}
                    />
                  </div>
                )}

                <div className="mt-14 rounded-2xl border border-intellectual/15 bg-gradient-to-br from-intellectual to-intellectual-dark p-6 text-white shadow-soft sm:p-8">
                  <p className="font-display text-lg font-semibold sm:text-xl">
                    {t.dsaExpBodyCtaTitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
                    {t.dsaExpBodyCtaDesc}
                  </p>
                  <Link
                    href="/dsa-finder"
                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual-dark transition hover:bg-champagne-light"
                  >
                    {t.dsaExpBodyCtaBtn}
                    <span aria-hidden>→</span>
                  </Link>
                </div>

                {/* Related guides */}
                <div className="mt-10">
                  <p className="mb-3 text-[10px] font-bold tracking-[0.14em] text-slate-400">
                    {locale === "zh"
                      ? "读完之后"
                      : locale === "ms"
                      ? "SELEPAS MEMBACA INI"
                      : locale === "ta"
                      ? "படித்த பிறகு"
                      : "WHAT TO DO NEXT"}
                  </p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <Link
                      href="/what-is-dsa"
                      className="flex flex-col rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card transition hover:border-intellectual/30 hover:shadow-card-hover"
                    >
                      <span className="mb-1 text-[10px] font-bold tracking-wide text-champagne-dark">
                        {locale === "zh" ? "了解机制" : locale === "ms" ? "FAHAMI PROSESNYA" : locale === "ta" ? "விதிமுறைகளை புரிந்துகொள்ளுங்கள்" : "UNDERSTAND THE PROCESS"}
                      </span>
                      <span className="font-display text-[0.9375rem] font-semibold text-slate-900">
                        {locale === "zh" ? "DSA 完整解析" : locale === "ms" ? "Panduan DSA Lengkap" : locale === "ta" ? "DSA முழுமையான வழிகாட்டி" : "The Complete DSA Guide"}
                      </span>
                      <span className="mt-1 text-[0.8125rem] leading-relaxed text-slate-500">
                        {locale === "zh"
                          ? "申请时间线、才能领域、Commitment Rule 的完整解释"
                          : locale === "ms"
                          ? "Garis masa permohonan, bidang bakat, dan Peraturan Komitmen dijelaskan sepenuhnya"
                          : locale === "ta"
                          ? "விண்ணப்ப காலவரிசை, திறன் பகுதிகள், மற்றும் Commitment Rule முழு விளக்கம்"
                          : "Application timeline, talent areas, and the Commitment Rule — fully explained"}
                      </span>
                    </Link>
                    <Link
                      href="/dsa-interview"
                      className="flex flex-col rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card transition hover:border-intellectual/30 hover:shadow-card-hover"
                    >
                      <span className="mb-1 text-[10px] font-bold tracking-wide text-champagne-dark">
                        {locale === "zh" ? "准备选拔" : locale === "ms" ? "BERSEDIA UNTUK TEMUDUGA" : locale === "ta" ? "தேர்வுக்கு தயாராகுங்கள்" : "PREPARE FOR SELECTION"}
                      </span>
                      <span className="font-display text-[0.9375rem] font-semibold text-slate-900">
                        {locale === "zh" ? "面试与选拔准备" : locale === "ms" ? "Persediaan Temuduga & Pemilihan" : locale === "ta" ? "நேர்காணல் & தேர்வு தயாரிப்பு" : "Interview & Selection Prep"}
                      </span>
                      <span className="mt-1 text-[0.8125rem] leading-relaxed text-slate-500">
                        {locale === "zh"
                          ? "自我介绍范文、面试题库、肢体语言与四周练习计划"
                          : locale === "ms"
                          ? "Templat pengenalan diri, bank soalan temuduga, bahasa badan dan pelan latihan 4 minggu"
                          : locale === "ta"
                          ? "சுய அறிமுக வார்ப்புருக்கள், கேள்வி வங்கி, உடல் மொழி மற்றும் 4 வார பயிற்சி திட்டம்"
                          : "Self-introduction templates, question bank, body language, and a 4-week practice plan"}
                      </span>
                    </Link>
                    <Link
                      href="/open-houses"
                      className="flex flex-col rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card transition hover:border-intellectual/30 hover:shadow-card-hover"
                    >
                      <span className="mb-1 text-[10px] font-bold tracking-wide text-champagne-dark">
                        {locale === "zh" ? "安排参访" : locale === "ms" ? "DAFTARKAN LAWATAN" : locale === "ta" ? "வருகை திட்டமிடுங்கள்" : "PLAN YOUR VISITS"}
                      </span>
                      <span className="font-display text-[0.9375rem] font-semibold text-slate-900">
                        {locale === "zh" ? "开放日日历" : locale === "ms" ? "Kalendar Hari Terbuka" : locale === "ta" ? "திறந்த நாள் அட்டவணை" : "Open House Calendar"}
                      </span>
                      <span className="mt-1 text-[0.8125rem] leading-relaxed text-slate-500">
                        {locale === "zh"
                          ? "查看各中学 2026 年开放日日期与报名方式"
                          : locale === "ms"
                          ? "Semak tarikh Hari Terbuka 2026 dan cara mendaftar untuk setiap sekolah menengah"
                          : locale === "ta"
                          ? "2026 ஆண்டு ஒவ்வொரு இடைநிலைப் பள்ளியின் திறந்த நாள் தேதிகள் மற்றும் பதிவு முறையை சரிபார்க்கவும்"
                          : "Check 2026 open house dates and registration links for each secondary school"}
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
