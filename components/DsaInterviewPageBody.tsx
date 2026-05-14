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
  const { t } = useLanguage();

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

  const relatedLinks = [
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
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
            <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
              <p className="text-[0.875rem] font-semibold text-amber-800">
                📅 {t.dsaInterviewAlertIntro}{" "}
                <strong>{t.dsaInterviewAlertOpen}</strong> {t.dsaInterviewAlertMid}{" "}
                <strong>{t.dsaInterviewAlertClose}</strong> {t.dsaInterviewAlertTime}{" "}
                {t.dsaInterviewAlertOhLead} <strong>{t.dsaInterviewAlertOhSpan}</strong>{" "}
                {t.dsaInterviewAlertEnd}
              </p>
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
                {t.dsaInterviewQuestionsHeading}
              </h2>
              <p className="mb-5 text-[0.9375rem] text-slate-600">{t.dsaInterviewQuestionsLead}</p>
              <div className="space-y-3">
                {interviewQs.map(({ q, why }) => (
                  <div
                    key={q}
                    className="rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card"
                  >
                    <p className="mb-1.5 font-semibold text-slate-900 text-[0.9375rem]">&ldquo;{q}&rdquo;</p>
                    <p className="text-[0.875rem] text-slate-500">
                      <span className="font-semibold text-intellectual">{t.dsaInterviewWhyAsked}</span>{" "}
                      {why}
                    </p>
                  </div>
                ))}
              </div>
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
