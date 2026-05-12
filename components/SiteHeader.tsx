"use client";

import Link from "next/link";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export function SiteHeader() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/dsa-guide", label: t.navDsaGuide },
    { href: "/dsa-finder", label: t.navDsaFinder },
    { href: "/open-houses", label: t.navOpenHouses },
    { href: "/psle-cop", label: t.navScores },
  ] as const;

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
          className="hidden min-w-0 shrink-0 flex-nowrap items-center justify-end gap-4 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-semibold text-intellectual underline decoration-champagne/50 decoration-2 underline-offset-4 transition hover:bg-champagne-subtle/40 hover:decoration-champagne"
            >
              {link.label}
            </Link>
          ))}
          <LanguageToggle id="language-select-desktop" />
        </nav>
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="inline-flex items-center gap-2 rounded-xl border border-intellectual/10 bg-white px-3 py-2 text-sm font-semibold text-intellectual shadow-sm transition hover:border-champagne/50 md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-drawer"
        >
          {mobileMenuOpen ? (
            <X className="h-4 w-4" aria-hidden />
          ) : (
            <Menu className="h-4 w-4" aria-hidden />
          )}
          <span>{mobileMenuOpen ? t.navClose : t.navMenu}</span>
        </button>
      </div>
      {mobileMenuOpen ? (
        <div
          id="mobile-nav-drawer"
          className="grid grid-rows-[1fr] border-t border-intellectual/5 bg-white/95 opacity-100 shadow-soft transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden"
        >
          <div className="overflow-hidden">
            <nav className="mx-auto max-w-5xl px-3 py-4" aria-label="Mobile primary">
              <div className="grid gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl border border-intellectual/8 bg-champagne-subtle/30 px-4 py-3 text-sm font-semibold text-intellectual transition hover:border-champagne/50 hover:bg-champagne-subtle"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 rounded-2xl border border-intellectual/8 bg-white p-3">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-intellectual-muted">
                  {t.a11yLanguageSelector}
                </p>
                <LanguageToggle id="language-select-mobile" />
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
