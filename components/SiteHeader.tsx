"use client";

import Link from "next/link";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export function SiteHeader() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/faq", label: t.navFaq },
    { href: "/dsa-guide", label: t.navDsaGuide },
    { href: "/dsa-finder", label: t.navDsaFinder },
    { href: "/open-houses", label: t.navOpenHouses },
    { href: "/schools", label: t.navSchools },
    { href: "/psle-cop", label: t.navScores },
    { href: "/dsa-interview", label: t.navDsaInterview },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.10] bg-intellectual/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-4 sm:px-6">
        {/* Brand */}
        <Link
          href="/"
          className="group flex min-w-0 shrink-0 items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-champagne/30 bg-champagne/15 text-champagne-light">
            <GraduationCap className="h-4 w-4" aria-hidden />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-sm font-semibold tracking-tight text-white normal-case sm:text-[0.9375rem]">
              {t.navBrand}
            </span>
            <span className="hidden text-[10px] font-medium tracking-wide text-white/45 normal-case sm:inline">
              {t.navTagline}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden min-w-0 shrink-0 flex-nowrap items-center justify-end gap-0.5 md:flex"
          aria-label={t.a11yNavPrimary}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 hover:text-white ${
                pathname === link.href ? "bg-white/10 text-white" : "text-white/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2">
            <LanguageToggle id="language-select-desktop" />
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/[0.10] px-2.5 py-1.5 text-[0.8125rem] font-medium text-white/80 transition hover:border-white/30 hover:bg-white/15 md:hidden"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-drawer"
        >
          {mobileMenuOpen ? (
            <X className="h-4 w-4" aria-hidden />
          ) : (
            <Menu className="h-4 w-4" aria-hidden />
          )}
          <span className="normal-case">{mobileMenuOpen ? t.navClose : t.navMenu}</span>
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen ? (
        <div
          id="mobile-nav-drawer"
          className="border-t border-white/10 bg-intellectual shadow-lg md:hidden"
        >
          <nav className="mx-auto max-w-5xl px-4 py-3" aria-label={t.a11yNavMobilePrimary}>
            <div className="grid gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium normal-case transition hover:bg-white/10 hover:text-white ${
                    pathname === link.href ? "bg-white/10 text-white" : "text-white/75"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-white/10 pt-3">
                <LanguageToggle id="language-select-mobile" />
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
