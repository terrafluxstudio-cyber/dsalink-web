"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export function SiteHeader() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-intellectual/5 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-6">
        <Link
          href="/"
          className="group flex min-w-0 shrink-0 items-center gap-2 text-intellectual transition-opacity hover:opacity-90 sm:gap-2.5"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-intellectual text-white shadow-soft ring-1 ring-champagne/30 sm:h-9 sm:w-9">
            <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-sm font-semibold tracking-tight sm:text-lg">
              {t.navBrand}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-champagne-dark sm:hidden">
              DSA 2026
            </span>
            <span className="hidden text-xs font-medium uppercase tracking-wider text-champagne-dark sm:inline">
              {t.navTagline}
            </span>
          </span>
        </Link>
        <nav
          className="flex min-w-0 shrink-0 flex-nowrap items-center justify-end gap-1.5 sm:gap-4"
          aria-label="Primary"
        >
          <Link
            href="/dsa-guide"
            className="hidden rounded-lg px-3 py-1.5 text-sm font-semibold text-intellectual underline decoration-champagne/50 decoration-2 underline-offset-4 transition hover:bg-champagne-subtle/40 hover:decoration-champagne sm:inline-flex"
          >
            {t.navDsaGuide}
          </Link>
          <Link
            href="/open-houses"
            className="whitespace-nowrap rounded-lg px-1.5 py-1.5 text-[14px] font-semibold leading-none text-intellectual underline decoration-champagne/50 decoration-2 underline-offset-4 transition hover:bg-champagne-subtle/40 hover:decoration-champagne sm:px-3 sm:text-sm sm:leading-normal"
          >
            {t.navOpenHouses}
          </Link>
          <Link
            href="/scores"
            className="whitespace-nowrap rounded-lg px-1.5 py-1.5 text-[14px] font-semibold leading-none text-intellectual underline decoration-champagne/50 decoration-2 underline-offset-4 transition hover:bg-champagne-subtle/40 hover:decoration-champagne sm:px-3 sm:text-sm sm:leading-normal"
          >
            {t.navScores}
          </Link>
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
