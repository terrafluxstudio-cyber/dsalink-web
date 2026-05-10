"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export function SiteHeader() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-intellectual/5 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-intellectual transition-opacity hover:opacity-90"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-intellectual text-white shadow-soft ring-1 ring-champagne/30">
            <GraduationCap className="h-5 w-5" aria-hidden />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
              {t.navBrand}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-champagne-dark sm:text-xs">
              {t.navTagline}
            </span>
          </span>
        </Link>
        <LanguageToggle />
      </div>
    </header>
  );
}
