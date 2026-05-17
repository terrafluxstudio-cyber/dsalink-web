"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function FeaturedGuideStrip() {
  const { t } = useLanguage();

  return (
    <div className="border-y border-champagne/20 bg-champagne/8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-5 sm:flex-nowrap sm:px-6 sm:py-6">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-champagne/20 text-champagne-dark">
            <BookOpen className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="mb-0.5 text-[10px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
              {t.featuredGuideKicker}{" "}
              <span aria-hidden className="animate-sparkle">★</span>
            </p>
            <p className="truncate text-[0.9375rem] font-semibold text-slate-800">
              {t.featuredGuideTitle}
            </p>
            <p className="mt-0.5 text-xs text-slate-500 normal-case">
              The complete DSA guide for Singapore P6 families
            </p>
          </div>
        </div>

        <Link
          href="/dsa-experience"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-champagne/40 bg-white px-5 py-2 text-sm font-semibold text-intellectual transition hover:border-champagne hover:bg-champagne/10"
        >
          {t.featuredGuideCta}
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
