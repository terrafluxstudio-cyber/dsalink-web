"use client";

import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/contexts/LanguageContext";

function splitPipe(s: string) {
  return s.split("|");
}

export function DsaInterviewPageBody() {
  const { t, locale } = useLanguage();

  const selectionTypes = [
    {
      icon: "🎤",
      title: t.dsaInterviewSel1Title,
      who: t.dsaInterviewSel1Who,
      what: t.dsaInterviewSel1What,
      tip: t.dsaInterviewSel1Tip,
    },
    {
      icon: "⚽",
      title: t.dsaInterviewSel2Title,
      who: t.dsaInterviewSel2Who,
      what: t.dsaInterviewSel2What,
      tip: t.dsaInterviewSel2Tip,
    },
    {
      icon: "🎵",
      title: t.dsaInterviewSel3Title,
      who: t.dsaInterviewSel3Who,
      what: t.dsaInterviewSel3What,
      tip: t.dsaInterviewSel3Tip,
    },
    {
      icon: "🔬",
      title: t.dsaInterviewSel4Title,
      who: t.dsaInterviewSel4Who,
      what: t.dsaInterviewSel4What,
      tip: t.dsaInterviewSel4Tip,
    },
    {
      icon: "🏅",
      title: t.dsaInterviewSel5Title,
      who: t.dsaInterviewSel5Who,
      what: t.dsaInterviewSel5What,
      tip: t.dsaInterviewSel5Tip,
    },
  ];

  const prepSteps = [
    { n: 1, title: t.dsaInterviewPrep1Title, body: t.dsaInterviewPrep1Body },
    { n: 2, title: t.dsaInterviewPrep2Title, body: t.dsaInterviewPrep2Body },
    { n: 3, title: t.dsaInterviewPrep3Title, body: t.dsaInterviewPrep3Body },
    { n: 4, title: t.dsaInterviewPrep4Title, body: t.dsaInterviewPrep4Body },
    { n: 5, title: t.dsaInterviewPrep5Title, body: t.dsaInterviewPrep5Body },
    { n: 6, title: t.dsaInterviewPrep6Title, body: t.dsaInterviewPrep6Body },
  ];

  const interviewQs = [
    { q: t.dsaInterviewIv1Q, why: t.dsaInterviewIv1Why },
    { q: t.dsaInterviewIv2Q, why: t.dsaInterviewIv2Why },
    { q: t.dsaInterviewIv3Q, why: t.dsaInterviewIv3Why },
    { q: t.dsaInterviewIv4Q, why: t.dsaInterviewIv4Why },
    { q: t.dsaInterviewIv5Q, why: t.dsaInterviewIv5Why },
    { q: t.dsaInterviewIv6Q, why: t.dsaInterviewIv6Why },
  ];

  const coachingRows = [
    {
      domain: t.dsaInterviewCoachSportsDomain,
      recognised: splitPipe(t.dsaInterviewCoachSportsRecognised),
      benchmark: t.dsaInterviewCoachSportsBenchmark,
    },
    {
      domain: t.dsaInterviewCoachMusicDomain,
      recognised: splitPipe(t.dsaInterviewCoachMusicRecognised),
      benchmark: t.dsaInterviewCoachMusicBenchmark,
    },
    {
      domain: t.dsaInterviewCoachDanceDomain,
      recognised: splitPipe(t.dsaInterviewCoachDanceRecognised),
      benchmark: t.dsaInterviewCoachDanceBenchmark,
    },
    {
      domain: t.dsaInterviewCoachSciDomain,
      recognised: splitPipe(t.dsaInterviewCoachSciRecognised),
      benchmark: t.dsaInterviewCoachSciBenchmark,
    },
    {
      domain: t.dsaInterviewCoachHumDomain,
      recognised: splitPipe(t.dsaInterviewCoachHumRecognised),
      benchmark: t.dsaInterviewCoachHumBenchmark,
    },
    {
      domain: t.dsaInterviewCoachLangDomain,
      recognised: splitPipe(t.dsaInterviewCoachLangRecognised),
      benchmark: t.dsaInterviewCoachLangBenchmark,
    },
  ];

  const portfolioItems = [
    { item: t.dsaInterviewPf1Title, desc: t.dsaInterviewPf1Desc },
    { item: t.dsaInterviewPf2Title, desc: t.dsaInterviewPf2Desc },
    { item: t.dsaInterviewPf3Title, desc: t.dsaInterviewPf3Desc },
    { item: t.dsaInterviewPf4Title, desc: t.dsaInterviewPf4Desc },
    { item: t.dsaInterviewPf5Title, desc: t.dsaInterviewPf5Desc },
    { item: t.dsaInterviewPf6Title, desc: t.dsaInterviewPf6Desc },
    { item: t.dsaInterviewPf7Title, desc: t.dsaInterviewPf7Desc },
  ];

  const pageFaqs = [
    { q: t.dsaInterviewUiFaq1Q, a: t.dsaInterviewUiFaq1A },
    { q: t.dsaInterviewUiFaq2Q, a: t.dsaInterviewUiFaq2A },
    { q: t.dsaInterviewUiFaq3Q, a: t.dsaInterviewUiFaq3A },
    { q: t.dsaInterviewUiFaq4Q, a: t.dsaInterviewUiFaq4A },
    { q: t.dsaInterviewUiFaq5Q, a: t.dsaInterviewUiFaq5A },
  ];

  const timelineRows = [
    { date: t.dsaInterviewTimelineRow1Date, event: t.dsaInterviewTimelineRow1Event, detail: t.dsaInterviewTimelineRow1Detail },
    { date: t.dsaInterviewTimelineRow2Date, event: t.dsaInterviewTimelineRow2Event, detail: t.dsaInterviewTimelineRow2Detail },
    { date: t.dsaInterviewTimelineRow3Date, event: t.dsaInterviewTimelineRow3Event, detail: t.dsaInterviewTimelineRow3Detail },
    { date: t.dsaInterviewTimelineRow4Date, event: t.dsaInterviewTimelineRow4Event, detail: t.dsaInterviewTimelineRow4Detail },
    { date: t.dsaInterviewTimelineRow5Date, event: t.dsaInterviewTimelineRow5Event, detail: t.dsaInterviewTimelineRow5Detail },
  ];

  const introSteps = [
    { label: t.dsaInterviewIntroStep1Label, body: t.dsaInterviewIntroStep1Body },
    { label: t.dsaInterviewIntroStep2Label, body: t.dsaInterviewIntroStep2Body },
    { label: t.dsaInterviewIntroStep3Label, body: t.dsaInterviewIntroStep3Body },
    { label: t.dsaInterviewIntroStep4Label, body: t.dsaInterviewIntroStep4Body },
  ];

  const introParentTips = [
    { title: t.dsaInterviewIntroParent1Title, body: t.dsaInterviewIntroParent1Body },
    { title: t.dsaInterviewIntroParent2Title, body: t.dsaInterviewIntroParent2Body },
    { title: t.dsaInterviewIntroParent3Title, body: t.dsaInterviewIntroParent3Body },
    { title: t.dsaInterviewIntroParent4Title, body: t.dsaInterviewIntroParent4Body },
  ];

  const introMistakes = [
    t.dsaInterviewIntroMistake1,
    t.dsaInterviewIntroMistake2,
    t.dsaInterviewIntroMistake3,
    t.dsaInterviewIntroMistake4,
  ];

  const mistakeItems = [
    { title: t.dsaInterviewMistake01Title, body: t.dsaInterviewMistake01Body },
    { title: t.dsaInterviewMistake02Title, body: t.dsaInterviewMistake02Body },
    { title: t.dsaInterviewMistake03Title, body: t.dsaInterviewMistake03Body },
    { title: t.dsaInterviewMistake04Title, body: t.dsaInterviewMistake04Body },
    { title: t.dsaInterviewMistake05Title, body: t.dsaInterviewMistake05Body },
    { title: t.dsaInterviewMistake06Title, body: t.dsaInterviewMistake06Body },
    { title: t.dsaInterviewMistake07Title, body: t.dsaInterviewMistake07Body },
    { title: t.dsaInterviewMistake08Title, body: t.dsaInterviewMistake08Body },
    { title: t.dsaInterviewMistake09Title, body: t.dsaInterviewMistake09Body },
    { title: t.dsaInterviewMistake10Title, body: t.dsaInterviewMistake10Body },
  ];

  const dayOfSections = [
    {
      heading: t.dsaInterviewDayOfSection1,
      items: [
        t.dsaInterviewDayOfNight1,
        t.dsaInterviewDayOfNight2,
        t.dsaInterviewDayOfNight3,
        t.dsaInterviewDayOfNight4,
        t.dsaInterviewDayOfNight5,
      ],
    },
    {
      heading: t.dsaInterviewDayOfSection2,
      items: [
        t.dsaInterviewDayOfMorn1,
        t.dsaInterviewDayOfMorn2,
        t.dsaInterviewDayOfMorn3,
        t.dsaInterviewDayOfMorn4,
      ],
    },
    {
      heading: t.dsaInterviewDayOfSection3,
      items: [
        t.dsaInterviewDayOfRoom1,
        t.dsaInterviewDayOfRoom2,
        t.dsaInterviewDayOfRoom3,
        t.dsaInterviewDayOfRoom4,
        t.dsaInterviewDayOfRoom5,
      ],
    },
    {
      heading: t.dsaInterviewDayOfSection4,
      items: [
        t.dsaInterviewDayOfAfter1,
        t.dsaInterviewDayOfAfter2,
        t.dsaInterviewDayOfAfter3,
      ],
    },
  ];

  const qBankCategories = [
    {
      cat: t.dsaInterviewQBankCat1,
      questions: [
        { q: t.dsaInterviewQBankSelf1Q, why: t.dsaInterviewQBankSelf1Why },
        { q: t.dsaInterviewQBankSelf2Q, why: t.dsaInterviewQBankSelf2Why },
        { q: t.dsaInterviewQBankSelf3Q, why: t.dsaInterviewQBankSelf3Why },
      ],
    },
    {
      cat: t.dsaInterviewQBankCat2,
      questions: [
        { q: t.dsaInterviewQBankWhy1Q, why: t.dsaInterviewQBankWhy1Why },
        { q: t.dsaInterviewQBankWhy2Q, why: t.dsaInterviewQBankWhy2Why },
        { q: t.dsaInterviewQBankWhy3Q, why: t.dsaInterviewQBankWhy3Why },
        { q: t.dsaInterviewQBankWhy4Q, why: t.dsaInterviewQBankWhy4Why },
        { q: t.dsaInterviewQBankWhy5Q, why: t.dsaInterviewQBankWhy5Why },
      ],
    },
    {
      cat: t.dsaInterviewQBankCat3,
      questions: [
        { q: t.dsaInterviewQBankTalent1Q, why: t.dsaInterviewQBankTalent1Why },
        { q: t.dsaInterviewQBankTalent2Q, why: t.dsaInterviewQBankTalent2Why },
        { q: t.dsaInterviewQBankTalent3Q, why: t.dsaInterviewQBankTalent3Why },
        { q: t.dsaInterviewQBankTalent4Q, why: t.dsaInterviewQBankTalent4Why },
        { q: t.dsaInterviewQBankTalent5Q, why: t.dsaInterviewQBankTalent5Why },
      ],
    },
    {
      cat: t.dsaInterviewQBankCat4,
      questions: [
        { q: t.dsaInterviewQBankChar1Q, why: t.dsaInterviewQBankChar1Why },
        { q: t.dsaInterviewQBankChar2Q, why: t.dsaInterviewQBankChar2Why },
        { q: t.dsaInterviewQBankChar3Q, why: t.dsaInterviewQBankChar3Why },
        { q: t.dsaInterviewQBankChar4Q, why: t.dsaInterviewQBankChar4Why },
        { q: t.dsaInterviewQBankChar5Q, why: t.dsaInterviewQBankChar5Why },
      ],
    },
    {
      cat: t.dsaInterviewQBankCat5,
      questions: [
        { q: t.dsaInterviewQBankThink1Q, why: t.dsaInterviewQBankThink1Why },
        { q: t.dsaInterviewQBankThink2Q, why: t.dsaInterviewQBankThink2Why },
        { q: t.dsaInterviewQBankThink3Q, why: t.dsaInterviewQBankThink3Why },
        { q: t.dsaInterviewQBankThink4Q, why: t.dsaInterviewQBankThink4Why },
        { q: t.dsaInterviewQBankThink5Q, why: t.dsaInterviewQBankThink5Why },
      ],
    },
  ];

  const relatedLinks = [
    { href: "/dsa-coaches", label: t.dsaInterviewLinkCoaches },
    { href: "/open-houses", label: t.dsaInterviewLinkOpenHouses },
    { href: "/schools", label: t.dsaInterviewLinkSchools },
    { href: "/dsa-guide", label: t.dsaInterviewLinkDsaGuide },
    { href: "/faq", label: t.dsaInterviewLinkFaq },
    { href: "/psle-cop", label: t.dsaInterviewLinkPsleCop },
  ];

  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          crumbLabel={t.dsaInterviewCrumb}
          kicker={t.dsaInterviewKicker}
          title={t.dsaInterviewHeroTitle}
          subtitle={t.dsaInterviewHeroSubtitle}
        />

        <div className="bg-surface">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
            <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
              <p className="text-[0.875rem] font-semibold text-amber-800">
                📅 {t.dsaInterviewAlertIntro}{" "}
                <strong>{t.dsaInterviewAlertOpen}</strong> {t.dsaInterviewAlertMid}{" "}
                <strong>{t.dsaInterviewAlertClose}</strong> {t.dsaInterviewAlertTime}{" "}
                {t.dsaInterviewAlertOhLead} <strong>{t.dsaInterviewAlertOhSpan}</strong>{" "}
                {t.dsaInterviewAlertEnd}
              </p>
            </div>

            {/* ── Coach directory crosslink ── */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#e3ded5] bg-white px-5 py-3.5 shadow-card">
              <p className="text-[0.875rem] text-slate-600">
                {locale === "zh"
                  ? "正在寻找DSA辅导机构或个人老师？"
                  : locale === "ms"
                  ? "Mencari jurulatih atau pusat latihan DSA?"
                  : locale === "ta"
                  ? "DSA பயிற்சியாளரை தேடுகிறீர்களா?"
                  : "Looking for a DSA coaching provider?"}
              </p>
              <Link
                href="/dsa-coaches"
                className="shrink-0 rounded-lg border border-intellectual/20 bg-intellectual/5 px-3 py-1.5 text-[0.8125rem] font-semibold text-intellectual transition hover:bg-intellectual hover:text-white"
              >
                {t.dsaInterviewLinkCoaches}
              </Link>
            </div>

            <section className="mb-10">
              <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                {t.dsaInterviewTypesHeading}
              </h2>
              <p className="mb-5 text-[0.9375rem] text-slate-600">{t.dsaInterviewTypesLead}</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {selectionTypes.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card"
                  >
                    <div className="mb-2 text-2xl">{s.icon}</div>
                    <h3 className="mb-0.5 font-display text-[0.9375rem] font-semibold text-slate-900">
                      {s.title}
                    </h3>
                    <p className="mb-1 text-[0.75rem] font-semibold tracking-wide text-intellectual">
                      {s.who}
                    </p>
                    <p className="mb-2 text-[0.8125rem] leading-snug text-slate-600">{s.what}</p>
                    <p className="rounded-lg bg-champagne-subtle px-3 py-2 text-[0.8125rem] leading-snug text-slate-700">
                      <span className="font-semibold text-champagne-dark">{t.dsaStrategyTipLabel}</span>{" "}
                      {s.tip}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                {t.dsaInterviewPrepHeading}
              </h2>
              <p className="mb-5 text-[0.9375rem] text-slate-600">{t.dsaInterviewPrepLead}</p>
              <ol className="space-y-4">
                {prepSteps.map(({ n, title, body }) => (
                  <li
                    key={n}
                    className="flex gap-4 rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-intellectual text-sm font-bold text-white">
                      {n}
                    </span>
                    <div>
                      <h3 className="mb-1 font-display text-[0.9375rem] font-semibold text-slate-900">
                        {title}
                      </h3>
                      <p className="text-[0.875rem] leading-relaxed text-slate-600">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mb-10">
              <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                {t.dsaInterviewQBankHeading}
              </h2>
              <p className="mb-5 text-[0.9375rem] text-slate-600">{t.dsaInterviewQBankLead}</p>
              <div className="space-y-6">
                {qBankCategories.map(({ cat, questions }) => (
                  <div key={cat}>
                    <h3 className="mb-3 text-[0.75rem] font-bold tracking-widest text-slate-400">
                      {cat}
                    </h3>
                    <div className="space-y-2.5">
                      {questions.map(({ q, why }) => (
                        <div key={q} className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
                          <p className="mb-1.5 font-display text-[0.9375rem] font-semibold text-slate-900">{q}</p>
                          <p className="text-[0.8125rem] leading-relaxed text-slate-500">{why}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 rounded-lg border border-[#e3ded5] bg-surface-warm px-4 py-3 text-[0.8125rem] leading-relaxed text-slate-500">
                {t.dsaInterviewQBankNote}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                {t.dsaInterviewCoachingHeading}
              </h2>
              <p className="mb-5 text-[0.9375rem] text-slate-600">{t.dsaInterviewCoachingLead}</p>
              <div className="overflow-x-auto rounded-xl border border-[#e3ded5] shadow-card">
                <table className="w-full text-left text-[0.8125rem]">
                  <thead>
                    <tr className="border-b border-[#e3ded5] bg-[#f7f4ef]">
                      <th className="px-4 py-3 font-semibold text-slate-700">
                        {t.dsaInterviewTableTalentDomain}
                      </th>
                      <th className="px-4 py-3 font-semibold text-slate-700">
                        {t.dsaInterviewTableRecognised}
                      </th>
                      <th className="px-4 py-3 font-semibold text-slate-700 whitespace-nowrap">
                        {t.dsaInterviewTableBenchmark}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {coachingRows.map((row, i) => (
                      <tr
                        key={row.domain}
                        className={i % 2 === 0 ? "bg-white" : "bg-[#faf9f7]"}
                      >
                        <td className="px-4 py-3 font-semibold text-intellectual align-top whitespace-nowrap">
                          {row.domain}
                        </td>
                        <td className="px-4 py-3 text-slate-600 align-top">
                          <ul className="list-disc list-inside space-y-0.5">
                            {row.recognised.map((r) => (
                              <li key={r}>{r}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="px-4 py-3 text-slate-600 align-top whitespace-nowrap">
                          {row.benchmark}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-[0.8125rem] text-slate-500">{t.dsaInterviewCoachingFootnote}</p>
            </section>

            <section className="mb-10">
              <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                {t.dsaInterviewPortfolioHeading}
              </h2>
              <p className="mb-4 text-[0.9375rem] text-slate-600">{t.dsaInterviewPortfolioLead}</p>
              <div className="rounded-xl border border-[#e3ded5] bg-white p-6 shadow-card">
                <ul className="space-y-2.5">
                  {portfolioItems.map(({ item, desc }) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-intellectual/30 text-intellectual text-[0.6875rem] font-bold">
                        ✓
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900 text-[0.875rem]">{item}</p>
                        <p className="text-[0.8125rem] text-slate-500">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="mb-5 font-display text-[1.125rem] font-semibold text-slate-900">
                {t.dsaInterviewFaqHeading}
              </h2>
              <div className="space-y-4">
                {pageFaqs.map(({ q, a }) => (
                  <div key={q} className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
                    <h3 className="mb-2 font-display text-[0.9375rem] font-semibold text-slate-900">{q}</h3>
                    <p className="text-[0.875rem] leading-relaxed text-slate-600">{a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                {t.dsaInterviewTimelineHeading}
              </h2>
              <p className="mb-4 text-[0.9375rem] text-slate-600">{t.dsaInterviewTimelineLead}</p>
              <div className="mb-3 overflow-hidden rounded-xl border border-[#e3ded5] bg-white shadow-card">
                {timelineRows.map(({ date, event, detail }, i) => (
                  <div
                    key={date}
                    className={`grid grid-cols-1 gap-0.5 px-5 py-4 sm:grid-cols-[160px_1fr] sm:gap-3 ${i < timelineRows.length - 1 ? "border-b border-[#e3ded5]" : ""}`}
                  >
                    <p className="text-[0.8125rem] font-bold text-intellectual">{date}</p>
                    <div>
                      <p className="text-[0.875rem] font-semibold text-slate-900">{event}</p>
                      <p className="mt-0.5 text-[0.8125rem] leading-relaxed text-slate-500">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="rounded-lg border border-intellectual/15 bg-intellectual/5 px-4 py-3 text-[0.8125rem] leading-relaxed text-slate-700">
                {t.dsaInterviewTimelineNote}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                {t.dsaInterviewIntroHeading}
              </h2>
              <p className="mb-6 text-[0.9375rem] text-slate-600">{t.dsaInterviewIntroLead}</p>

              <div className="mb-8">
                <h3 className="mb-3 font-display text-[0.875rem] font-semibold tracking-wide text-slate-700">
                  {t.dsaInterviewIntroParentHeading}
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {introParentTips.map(({ title, body }) => (
                    <div key={title} className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
                      <p className="mb-1.5 font-display text-[0.875rem] font-semibold text-slate-900">{title}</p>
                      <p className="text-[0.8125rem] leading-relaxed text-slate-500">{body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="mb-3 font-display text-[0.875rem] font-semibold tracking-wide text-slate-700">
                  {t.dsaInterviewIntroKidHeading}
                </h3>
                <p className="mb-4 text-[0.875rem] text-slate-600">{t.dsaInterviewIntroKidLead}</p>
                <div className="space-y-3">
                  {introSteps.map(({ label, body }, i) => (
                    <div key={label} className="flex gap-4 rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-intellectual text-[0.8125rem] font-bold text-white">
                        {i + 1}
                      </div>
                      <div>
                        <p className="mb-1 font-display text-[0.875rem] font-semibold text-slate-900">{label}</p>
                        <p className="text-[0.8125rem] leading-relaxed text-slate-500">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6 rounded-xl border border-intellectual/20 bg-intellectual/5 p-5">
                <p className="mb-2 text-[0.75rem] font-bold tracking-wide text-intellectual">
                  {t.dsaInterviewIntroTemplateHeading}
                </p>
                <p className="mb-2 text-[0.9375rem] italic leading-relaxed text-slate-700">
                  {t.dsaInterviewIntroTemplateBody}
                </p>
                <p className="text-[0.75rem] text-slate-400">{t.dsaInterviewIntroTemplateNote}</p>
              </div>

              <div>
                <h3 className="mb-3 font-display text-[0.875rem] font-semibold tracking-wide text-slate-700">
                  {t.dsaInterviewIntroMistakesHeading}
                </h3>
                <div className="space-y-2">
                  {introMistakes.map((mistake, i) => (
                    <div key={mistake} className="flex gap-3 rounded-lg border border-champagne/30 bg-champagne-subtle px-4 py-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-intellectual/10 text-[0.75rem] font-bold text-intellectual">
                        {i + 1}
                      </span>
                      <p className="text-[0.8125rem] leading-relaxed text-slate-700">{mistake}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section className="mb-10">
              <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                {t.dsaInterviewMistakesHeading}
              </h2>
              <p className="mb-5 text-[0.9375rem] text-slate-600">{t.dsaInterviewMistakesLead}</p>
              <div className="space-y-3">
                {mistakeItems.map(({ title, body }, i) => (
                  <div key={title} className="flex gap-4 rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-champagne/50 bg-champagne-subtle text-[0.75rem] font-bold text-intellectual">
                      {i + 1}
                    </div>
                    <div>
                      <p className="mb-1 font-display text-[0.875rem] font-semibold text-slate-900">{title}</p>
                      <p className="text-[0.8125rem] leading-relaxed text-slate-500">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Day-Of Checklist */}
            <section className="mb-10">
              <h2 className="mb-1 font-display text-[1.125rem] font-semibold text-slate-900">
                {t.dsaInterviewDayOfHeading}
              </h2>
              <p className="mb-5 text-[0.9375rem] text-slate-600">{t.dsaInterviewDayOfLead}</p>
              <div className="space-y-5">
                {dayOfSections.map(({ heading, items }) => (
                  <div key={heading} className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card">
                    <h3 className="mb-3 font-display text-[0.9375rem] font-semibold text-slate-900">
                      {heading}
                    </h3>
                    <ol className="space-y-2.5">
                      {items.map((item, i) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-intellectual/25 bg-intellectual/5 text-[0.6875rem] font-bold text-intellectual">
                            {i + 1}
                          </span>
                          <p className="text-[0.8125rem] leading-relaxed text-slate-600">{item}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <div className="rounded-xl border border-champagne/40 bg-champagne-subtle p-6">
                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                  <span className="w-fit rounded-full bg-champagne/30 px-3 py-1 text-[0.7rem] font-bold tracking-wide text-champagne-dark">
                    {t.dsaInterviewOfferComingSoon}
                  </span>
                  <h2 className="font-display text-[1.125rem] font-semibold text-slate-900">
                    {t.dsaInterviewOfferHeading}
                  </h2>
                </div>
                <p className="text-[0.9375rem] leading-relaxed text-slate-600">
                  {t.dsaInterviewOfferLead}
                </p>
                <p className="mt-3 text-[0.8125rem] leading-relaxed text-slate-500">
                  {t.dsaInterviewOfferComingSoonBody}
                </p>
              </div>
            </section>

            <div className="rounded-xl border border-champagne/30 bg-champagne-subtle p-6">
              <h2 className="mb-1 font-display text-base font-semibold text-slate-900">
                {t.dsaInterviewRelatedHeading}
              </h2>
              <p className="mb-4 text-[0.875rem] text-slate-600">{t.dsaInterviewRelatedLead}</p>
              <div className="flex flex-wrap gap-3">
                {relatedLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="rounded-lg border border-intellectual/20 bg-white px-4 py-2 text-[0.8125rem] font-semibold text-intellectual transition hover:border-intellectual/40 hover:bg-intellectual hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
