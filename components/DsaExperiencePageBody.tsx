"use client";

import Link from "next/link";
import {
  DSA_EXPERIENCE_CHECKLIST,
  DSA_EXPERIENCE_SECTIONS,
  DSA_EXPERIENCE_TIMELINE,
  DSA_EXPERIENCE_TOC,
} from "@/content/dsa-experience";
import { PageHeader } from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const HERO = {
  crumb: "DSA Experience Guide",
  kicker: "Parent playbook",
  title: "DSA Experience Guide",
  subtitle:
    "What actually works in Singapore DSA — school selectivity, talent bars, timelines, and mistakes to avoid. Synthesised from parent forums, MOE rules, and real case patterns.",
} as const;

export function DsaExperiencePageBody() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          crumbLabel={HERO.crumb}
          kicker={HERO.kicker}
          title={HERO.title}
          subtitle={HERO.subtitle}
        />

        <div className="bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
            <div className="lg:grid lg:grid-cols-[minmax(0,11rem)_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]">
              <nav
                aria-label="Table of contents"
                className="mb-10 lg:sticky lg:top-24 lg:mb-0 lg:self-start"
              >
                <p className="mb-3 text-xs font-semibold tracking-wide text-slate-500">
                  On this page
                </p>
                <ol className="space-y-2 border-l border-slate-200 pl-4">
                  {DSA_EXPERIENCE_TOC.map(({ href, label, shortTitle }) => (
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
                {DSA_EXPERIENCE_SECTIONS.map((section, index) => (
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
                              {DSA_EXPERIENCE_TIMELINE.map((row) => (
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
                          {DSA_EXPERIENCE_CHECKLIST.map((item) => (
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
                    Ready to find the right school?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
                    Use our School Recommender to shortlist Safe, Reach, and Dream
                    options based on your child&apos;s talent tier and PSLE projection.
                  </p>
                  <Link
                    href="/recommend"
                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual-dark transition hover:bg-champagne-light"
                  >
                    Try our School Recommender
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
