"use client";

import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { MOE_PRIMARY_CTA_URL } from "@/lib/constants";
import type { Copy } from "@/lib/i18n";
import type { ReactNode } from "react";

function linkClass() {
  return "font-semibold text-intellectual underline decoration-champagne/45 decoration-2 underline-offset-2 transition hover:text-intellectual-light";
}

function MoeExternalLink({ children, t }: { children: ReactNode; t: Copy }) {
  return (
    <a
      href={MOE_PRIMARY_CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass()}
    >
      {children}
      <span className="sr-only">{t.extHint}</span>
    </a>
  );
}

export function DsaGuidePageBody() {
  const { locale, t } = useLanguage();
  const dateLabelClass =
    locale === "en"
      ? "text-xs font-semibold uppercase leading-snug tracking-wide text-champagne-dark sm:text-sm"
      : "text-xs font-semibold leading-snug tracking-wide text-champagne-dark sm:text-sm";

  const phases: { id: string; date: string; title: string; body: ReactNode }[] =
    [
      {
        id: "prep",
        date: t.dsaGuidePhase1Date,
        title: t.dsaGuidePhase1Title,
        body: (
          <>
            {t.dsaGuidePhase1BeforeLink}{" "}
            <Link href="/open-houses" className={linkClass()}>
              {t.dsaGuidePhase1LinkText}
            </Link>{" "}
            {t.dsaGuidePhase1AfterLink}
          </>
        ),
      },
      {
        id: "apply",
        date: t.dsaGuidePhase2Date,
        title: t.dsaGuidePhase2Title,
        body: (
          <>
            {t.dsaGuidePhase2BeforeLink}{" "}
            <MoeExternalLink t={t}>{t.dsaGuidePhase2LinkText}</MoeExternalLink>
            {t.dsaGuidePhase2Mid}{" "}
            <strong className="text-intellectual">
              {t.dsaGuidePhase2Deadline}
            </strong>
            {t.dsaGuidePhase2AfterDeadline}{" "}
            <strong className="text-intellectual">
              {t.dsaGuidePhase2ChoicesStrong}
            </strong>{" "}
            {t.dsaGuidePhase2AfterChoices}
          </>
        ),
      },
      {
        id: "selection",
        date: t.dsaGuidePhase3Date,
        title: t.dsaGuidePhase3Title,
        body: t.dsaGuidePhase3Body,
      },
      {
        id: "preference",
        date: t.dsaGuidePhase4Date,
        title: t.dsaGuidePhase4Title,
        body: (
          <>
            {t.dsaGuidePhase4BeforeCo}{" "}
            <strong className="text-intellectual">{t.dsaGuidePhase4Co}</strong>{" "}
            {t.dsaGuidePhase4Between}{" "}
            <strong className="text-intellectual">{t.dsaGuidePhase4Wl}</strong>{" "}
            {t.dsaGuidePhase4AfterWl}{" "}
            <strong className="text-intellectual">
              {t.dsaGuidePhase4Deadline}
            </strong>
            {t.dsaGuidePhase4AfterDeadline}
          </>
        ),
      },
      {
        id: "results",
        date: t.dsaGuidePhase5Date,
        title: t.dsaGuidePhase5Title,
        body: (
          <>
            {t.dsaGuidePhase5BeforePsle}{" "}
            <strong className="text-intellectual">{t.dsaGuidePhase5Psle}</strong>
            {t.dsaGuidePhase5AfterPsle}
          </>
        ),
      },
    ];

  return (
    <>
      <SiteHeader />
      <main className="border-t border-intellectual/5 bg-hero-mesh">
        <PageHeader
          crumbLabel="DSA-Sec Guide"
          kicker={t.dsaGuideKicker}
          title={t.dsaGuideHeroTitle}
          subtitle={t.dsaGuideHeroSubtitle}
        />

        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <section aria-labelledby="timeline-heading">
            <h2
              id="timeline-heading"
              className="font-display text-lg font-semibold text-intellectual sm:text-xl"
            >
              {t.dsaGuideTimelineHeading}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.dsaGuideTimelineIntroBefore}{" "}
              <MoeExternalLink t={t}>
                {t.dsaGuideTimelineIntroLink}
              </MoeExternalLink>{" "}
              {t.dsaGuideTimelineIntroAfter}
            </p>

            <div className="relative mt-10">
              <div
                className="absolute left-[6px] top-2 bottom-2 w-px bg-gradient-to-b from-champagne/70 via-champagne/35 to-champagne/15 sm:left-[9px]"
                aria-hidden
              />
              <ol className="relative space-y-10 sm:space-y-12">
                {phases.map((phase) => (
                  <li key={phase.id} className="relative">
                    <span
                      className="absolute left-0 top-[0.4rem] flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-champagne bg-white shadow-[0_0_0_3px_rgba(198,162,74,0.2)] sm:top-2 sm:h-[18px] sm:w-[18px]"
                      aria-hidden
                    />
                    <div className="grid w-full min-w-0 gap-4 pl-8 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:gap-10 sm:pl-11">
                      <div className="min-w-0 sm:pt-0.5 sm:text-right">
                        <p className={dateLabelClass}>{phase.date}</p>
                      </div>
                      <div className="w-full min-w-0 rounded-2xl border border-intellectual/12 bg-white/95 p-5 shadow-soft ring-1 ring-champagne/15 sm:p-6">
                        <h3 className="font-display text-base font-semibold text-intellectual sm:text-lg">
                          {phase.title}
                        </h3>
                        <div className="mt-3 text-sm leading-relaxed text-intellectual-muted sm:text-base">
                          {phase.body}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section
            className="mt-20 border-t border-intellectual/[0.06] pt-14 sm:mt-24 sm:pt-16"
            aria-labelledby="facts-heading"
          >
            <h2
              id="facts-heading"
              className="font-display text-lg font-semibold text-intellectual sm:text-xl"
            >
              {t.dsaGuideFactsHeading}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.dsaGuideFactsLead}
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <article className="rounded-2xl border border-champagne/35 bg-gradient-to-br from-white to-champagne-subtle/50 p-5 shadow-sm ring-1 ring-intellectual/8 sm:p-6">
                <h3 className="font-display text-base font-semibold text-intellectual">
                  {t.dsaGuideFactCommitmentTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-intellectual-muted sm:text-[15px]">
                  {t.dsaGuideFactCommitmentBefore1}{" "}
                  <strong className="text-intellectual">
                    {t.dsaGuideFactCommitmentStrong1}
                  </strong>{" "}
                  {t.dsaGuideFactCommitmentMid}{" "}
                  <strong className="text-intellectual">
                    {t.dsaGuideFactCommitmentStrong2}
                  </strong>{" "}
                  {t.dsaGuideFactCommitmentAfter}
                </p>
              </article>
              <article className="rounded-2xl border border-intellectual/12 bg-white/95 p-5 shadow-sm ring-1 ring-champagne/20 sm:p-6">
                <h3 className="font-display text-base font-semibold text-intellectual">
                  {t.dsaGuideFactPsleTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-intellectual-muted sm:text-[15px]">
                  {t.dsaGuideFactPsleBefore}{" "}
                  <strong className="text-intellectual">
                    {t.dsaGuideFactPsleStrong1}
                  </strong>{" "}
                  {t.dsaGuideFactPsleMid}{" "}
                  <strong className="text-intellectual">
                    {t.dsaGuideFactPsleStrong2}
                  </strong>{" "}
                  {t.dsaGuideFactPsleAfter}
                </p>
              </article>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter scheduleNote={t.dsaGuideFooterScheduleNote} />
    </>
  );
}
