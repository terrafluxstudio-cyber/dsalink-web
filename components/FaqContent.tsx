"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { FAQ_ITEMS, FAQ_UI } from "@/lib/faq-content";

export function FaqContent() {
  const { locale } = useLanguage();
  const ui = FAQ_UI[locale];

  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
        <nav
          className="mb-10 rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card"
          aria-label="FAQ sections"
        >
          <p className="mb-3 text-[10px] font-bold tracking-[0.14em] text-slate-400">
            {ui.jumpTo}
          </p>
          <ol className="list-none space-y-1.5">
            {FAQ_ITEMS.map(({ id, q }, i) => (
              <li key={id} className="flex gap-2.5">
                <span className="w-5 shrink-0 text-[0.8125rem] font-semibold text-slate-300">
                  {i + 1}.
                </span>
                <a
                  href={`#${id}`}
                  className="text-[0.8125rem] leading-snug text-intellectual hover:underline"
                >
                  {q[locale]}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="space-y-6">
          {FAQ_ITEMS.map(({ id, q, a }, i) => (
            <article
              key={id}
              id={id}
              className="scroll-mt-20 rounded-xl border border-[#e3ded5] bg-white p-6 shadow-card sm:p-7"
            >
              <h2 className="flex gap-3 font-display text-[1rem] font-semibold leading-snug text-slate-900 sm:text-[1.0625rem]">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-intellectual text-[0.6875rem] font-bold text-white">
                  {i + 1}
                </span>
                {q[locale]}
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate-600">
                {a[locale]}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <p className="mb-4 text-[10px] font-bold tracking-[0.15em] text-slate-400">
            {ui.nextSteps}
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <Link
              href="/dsa-finder"
              className="flex flex-col rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card transition hover:border-intellectual/30 hover:shadow-card-hover"
            >
              <span className="mb-1 text-[10px] font-bold tracking-wide text-champagne-dark">
                {ui.step1Label}
              </span>
              <span className="font-display text-[0.9375rem] font-semibold text-slate-900">
                {ui.step1Title}
              </span>
              <span className="mt-1 text-[0.8125rem] leading-relaxed text-slate-500">
                {ui.step1Desc}
              </span>
            </Link>
            <Link
              href="/open-house-guide"
              className="flex flex-col rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card transition hover:border-intellectual/30 hover:shadow-card-hover"
            >
              <span className="mb-1 text-[10px] font-bold tracking-wide text-champagne-dark">
                {ui.step2Label}
              </span>
              <span className="font-display text-[0.9375rem] font-semibold text-slate-900">
                {ui.step2Title}
              </span>
              <span className="mt-1 text-[0.8125rem] leading-relaxed text-slate-500">
                {ui.step2Desc}
              </span>
            </Link>
            <Link
              href="/dsa-interview"
              className="flex flex-col rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card transition hover:border-intellectual/30 hover:shadow-card-hover"
            >
              <span className="mb-1 text-[10px] font-bold tracking-wide text-champagne-dark">
                {ui.step3Label}
              </span>
              <span className="font-display text-[0.9375rem] font-semibold text-slate-900">
                {ui.step3Title}
              </span>
              <span className="mt-1 text-[0.8125rem] leading-relaxed text-slate-500">
                {ui.step3Desc}
              </span>
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              { href: "/what-is-dsa", label: ui.link1 },
              { href: "/psle-cop", label: ui.link2 },
              { href: "/open-houses", label: ui.link3 },
              {
                href: "/dsa-experience",
                label:
                  locale === "zh"
                    ? "真实 DSA 申请经历"
                    : locale === "ms"
                    ? "Pengalaman DSA Sebenar"
                    : locale === "ta"
                    ? "உண்மையான DSA அனுபவங்கள்"
                    : "Real DSA Experiences",
              },
              {
                href: "/apply",
                label:
                  locale === "zh"
                    ? "申请清单"
                    : locale === "ms"
                    ? "Senarai Semak Permohonan"
                    : locale === "ta"
                    ? "விண்ணப்ப சரிபார்ப்பு பட்டியல்"
                    : "Application Checklist",
              },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg border border-intellectual/15 bg-white px-3.5 py-1.5 text-[0.8125rem] text-slate-600 transition hover:border-intellectual/30 hover:text-intellectual"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
