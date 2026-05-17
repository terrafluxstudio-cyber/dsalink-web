"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Clock, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function DsaExperienceCallout() {
  const { t } = useLanguage();

  const PREVIEW_ITEMS = [
    t.dsaExpCalloutItem1,
    t.dsaExpCalloutItem2,
    t.dsaExpCalloutItem3,
    t.dsaExpCalloutItem4,
    t.dsaExpCalloutItem5,
  ];

  return (
    <section className="bg-intellectual py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_240px] lg:items-center lg:gap-10">
          {/* Left: text content */}
          <div>
            <p className="mb-3 text-[10px] font-bold tracking-[0.18em] text-champagne normal-case">
              {t.dsaExpCalloutKicker}{" "}
              <span aria-hidden className="animate-sparkle">★</span>
            </p>
            <h2 className="max-w-lg font-display text-2xl font-extrabold text-white sm:text-[1.75rem] sm:leading-[1.15]">
              {t.dsaExpCalloutTitle}
            </h2>
            <ul className="mt-5 space-y-3">
              {PREVIEW_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[0.9375rem] leading-relaxed text-white/75"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-champagne"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/dsa-experience"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual-dark transition hover:bg-champagne-light"
            >
              {t.dsaExpCalloutCta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          {/* Right: guide stats card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="mb-5 text-[10px] font-bold tracking-[0.18em] text-white/30 normal-case">
              ABOUT THIS GUIDE
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-champagne/15">
                  <BookOpen className="h-4 w-4 text-champagne" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-xl font-extrabold tabular-nums text-white">
                    11
                  </p>
                  <p className="text-xs text-white/45">chapters</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-champagne/15">
                  <Clock className="h-4 w-4 text-champagne" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-xl font-extrabold text-white">
                    ~35 min
                  </p>
                  <p className="text-xs text-white/45">read time</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-champagne/15">
                  <Globe className="h-4 w-4 text-champagne" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-xl font-extrabold text-white">
                    4
                  </p>
                  <p className="text-xs text-white/45">languages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
