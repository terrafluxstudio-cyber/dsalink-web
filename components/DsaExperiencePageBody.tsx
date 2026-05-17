"use client";

import Link from "next/link";
import {
  getDsaExperienceChecklist,
  getDsaExperienceSections,
  getDsaExperienceTimeline,
  getDsaExperienceToc,
  type DsaExperienceCallout,
} from "@/content/dsa-experience";
import { AlertCircle, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageHeader } from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function DsaExperiencePageBody() {
  const { t, locale } = useLanguage();
  const sections = getDsaExperienceSections(locale);
  const timeline = getDsaExperienceTimeline(locale);
  const checklist = getDsaExperienceChecklist(locale);
  const toc = getDsaExperienceToc(locale);

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
                {sections.map((section, index) => (
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
                      className="text-xl font-semibold text-slate-900"
                      style={{ textTransform: "none" }}
                    >
                      {section.title}
                    </h2>

                    <div className="mt-5 space-y-4 text-[0.9375rem] leading-relaxed text-slate-600 sm:text-base">
                      {section.paragraphs.map((p) => (
                        <p key={p.slice(0, 48)}>{p}</p>
                      ))}

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
                        <div className="overflow-x-auto rounded-xl border border-[#e3ded5] bg-white shadow-card">
                          <table className="w-full min-w-[28rem] text-left text-sm">
                            <thead>
                              <tr className="border-b border-slate-200 bg-slate-50/80">
                                <th
                                  scope="col"
                                  className="px-4 py-3 font-semibold text-slate-900"
                                >
                                  Date
                                </th>
                                <th
                                  scope="col"
                                  className="px-4 py-3 font-semibold text-slate-900"
                                >
                                  Milestone
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {timeline.map((row) => (
                                <tr
                                  key={row.date}
                                  className="border-b border-slate-100 last:border-0"
                                >
                                  <td className="whitespace-nowrap px-4 py-3 font-medium text-intellectual">
                                    {row.date}
                                  </td>
                                  <td className="px-4 py-3 text-slate-600">
                                    {row.milestone}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : null}

                      {section.orderedList ? (
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

                      {section.id === "section-8" ? (
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
                ))}

                <div className="mt-14 rounded-2xl border border-intellectual/15 bg-gradient-to-br from-intellectual to-intellectual-dark p-6 text-white shadow-soft sm:p-8">
                  <p className="font-display text-lg font-semibold sm:text-xl">
                    {t.dsaExpBodyCtaTitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
                    {t.dsaExpBodyCtaDesc}
                  </p>
                  <Link
                    href="/recommend"
                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual-dark transition hover:bg-champagne-light"
                  >
                    {t.dsaExpBodyCtaBtn}
                    <span aria-hidden>→</span>
                  </Link>
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
