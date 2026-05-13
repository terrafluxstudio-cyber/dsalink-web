"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function OpenHouseFieldGuide() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-5xl px-4 pb-10 pt-4 sm:px-6">
      <Link
        href="/open-house-guide"
        className="group flex items-center gap-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-slate-100">
          <BookOpen className="h-6 w-6 text-slate-700" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold tracking-[0.15em] text-slate-500 normal-case">
            {t.fieldGuide_kicker}
          </p>
          <h2 className="mt-1 text-base font-semibold text-slate-900">
            {t.fieldGuide_title}
          </h2>
          <p className="mt-1 line-clamp-2 text-sm text-slate-600">
            {t.fieldGuide_subtitle}
          </p>
        </div>
        <div className="shrink-0">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 group-hover:text-slate-900">
            {t.fieldGuide_read_more}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </section>
  );
}
