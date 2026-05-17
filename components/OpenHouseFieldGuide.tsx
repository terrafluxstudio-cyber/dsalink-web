"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function OpenHouseFieldGuide() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-champagne/20 bg-champagne-subtle">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="sm:flex sm:items-center sm:justify-between sm:gap-8">

          {/* Left: icon + copy */}
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-champagne/25 text-champagne-dark">
              <BookOpen className="h-6 w-6" aria-hidden />
            </div>
            <div>
              <p className="text-[10px] font-bold normal-case tracking-[0.18em] text-champagne-dark">
                {t.fieldGuide_kicker}
              </p>
              <h2 className="mt-1 font-display text-[1.25rem] font-extrabold leading-tight text-slate-900 sm:text-[1.5rem]">
                {t.fieldGuide_title}
                <span className="ml-1 text-champagne animate-sparkle" aria-hidden>★</span>
              </h2>
              <p className="mt-2 max-w-lg text-[0.9375rem] leading-relaxed text-slate-600">
                {t.fieldGuide_subtitle}
              </p>
            </div>
          </div>

          {/* Right: CTA button */}
          <div className="mt-6 shrink-0 sm:mt-0">
            <Link
              href="/open-house-guide"
              className="inline-flex items-center gap-2 rounded-xl bg-intellectual px-6 py-3 text-[0.9375rem] font-semibold text-white shadow-soft transition hover:bg-intellectual-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-intellectual"
            >
              {t.fieldGuide_read_more}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
