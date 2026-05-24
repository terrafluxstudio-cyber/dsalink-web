"use client";

import Link from "next/link";
import { ChevronDown, GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export function SiteHeader() {
  // TODO: t.navFeatured is no longer used in SiteHeader — check i18n.ts and remove if unused elsewhere
  const { t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dataMenuOpen, setDataMenuOpen] = useState(false);
  const [openHouseMenuOpen, setOpenHouseMenuOpen] = useState(false);

  const mainLinks = [
    { href: "/faq", label: t.navFaq },
    { href: "/dsa-guide", label: t.navDsaGuide },
  ] as const;

  const featuredLinks = [
    { href: "/dsa-experience", label: t.navDsaExperience },
  ] as const;

  const openHouseLinks = [
    { href: "/open-houses", label: t.navOpenHouseDates },
    { href: "/open-house-guide", label: t.navOpenHouseGuide },
    { href: "/open-house-takeaways", label: t.navOpenHouseMissed },
  ] as const;

  const dataLinks = [
    { href: "/dsa-finder", label: t.navDsaFinder },
    { href: "/open-houses", label: t.navOpenHouses },
    { href: "/schools", label: t.navSchools },
    { href: "/psle-cop", label: t.navScores },
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
          {mainLinks.map((link) => (
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
          {featuredLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 hover:text-white ${
                pathname === link.href ? "bg-white/10 text-white" : "text-white/70"
              }`}
            >
              <span className="inline-flex items-center gap-[0.2em]">
                <span>{link.label}</span>
                <span className="text-champagne-light animate-sparkle" aria-hidden>★</span>
              </span>
            </Link>
          ))}
          {/* Open House dropdown */}
          <div
            className="relative"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setOpenHouseMenuOpen(false);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") setOpenHouseMenuOpen(false);
            }}
          >
            <button
              type="button"
              aria-controls="desktop-openhouse-menu"
              aria-expanded={openHouseMenuOpen}
              aria-haspopup="true"
              onClick={() => setOpenHouseMenuOpen((open) => !open)}
              className={`flex items-center gap-0.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 hover:text-white ${
                openHouseLinks.some((link) => link.href === pathname)
                  ? "bg-white/10 text-white"
                  : "text-white/70"
              }`}
            >
              <span className="inline-flex items-center gap-[0.2em]">
                <span>{t.navOpenHouse}</span>
                <span className="text-champagne-light animate-sparkle" aria-hidden>★</span>
              </span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${openHouseMenuOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {openHouseMenuOpen ? (
              <div
                id="desktop-openhouse-menu"
                className="absolute right-0 top-full z-50 mt-1 min-w-[180px] rounded-xl border border-white/10 bg-intellectual/95 py-1 shadow-lg backdrop-blur-md"
              >
                {openHouseLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpenHouseMenuOpen(false)}
                    className={`block px-4 py-2 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 ${
                      link.href === "/open-house-takeaways"
                        ? pathname === link.href
                          ? "text-champagne"
                          : "text-champagne/80 hover:text-champagne"
                        : pathname === link.href
                          ? "text-white"
                          : "text-white/75 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <Link
            href="/dsa-interview"
            className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 hover:text-white ${
              pathname === "/dsa-interview" ? "bg-white/10 text-white" : "text-white/70"
            }`}
          >
            {t.navDsaInterview}
          </Link>
          <Link
            href="/dsa-coaches"
            className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 hover:text-white ${
              pathname === "/dsa-coaches" ? "bg-white/10 text-white" : "text-white/70"
            }`}
          >
            {t.navDsaCoaches}
          </Link>
          {/* Blog — gold label style */}
          <Link
            href="/blog"
            className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-champagne/40 bg-champagne/15 px-3 py-1.5 text-[0.8125rem] font-medium normal-case text-champagne-light transition hover:bg-champagne/25 hover:text-white ${
              pathname === "/blog" ? "bg-champagne/30 text-white" : ""
            }`}
          >
            {t.navBlog}
            <span className="rounded bg-champagne px-1.5 py-px text-[9px] font-bold uppercase tracking-wide text-intellectual animate-pulse">
              New
            </span>
          </Link>
          <div
            className="relative"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setDataMenuOpen(false);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                setDataMenuOpen(false);
              }
            }}
          >
            <button
              type="button"
              aria-controls="desktop-explore-menu"
              aria-expanded={dataMenuOpen}
              aria-haspopup="true"
              onClick={() => setDataMenuOpen((open) => !open)}
              className={`flex items-center gap-0.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 hover:text-white ${
                dataLinks.some((link) => link.href === pathname)
                  ? "bg-white/10 text-white"
                  : "text-white/70"
              }`}
            >
              <span>{t.navExplore}</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${dataMenuOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {dataMenuOpen ? (
              <div
                id="desktop-explore-menu"
                className="absolute right-0 top-full z-50 mt-1 min-w-[160px] rounded-xl border border-white/10 bg-intellectual/95 py-1 shadow-lg backdrop-blur-md"
              >
                {dataLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setDataMenuOpen(false)}
                    className={`block px-4 py-2 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 hover:text-white ${
                      pathname === link.href ? "text-white" : "text-white/75"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
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
              {mainLinks.map((link) => (
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
              {featuredLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-medium normal-case transition hover:bg-white/10 hover:text-white ${
                    pathname === link.href ? "bg-white/10 text-white" : "text-white/75"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="inline-flex items-center gap-[0.2em]">
                    <span>{link.label}</span>
                    <span className="text-champagne-light animate-sparkle" aria-hidden>★</span>
                  </span>
                </Link>
              ))}
              <Link
                href="/dsa-interview"
                className={`rounded-lg px-3 py-2 text-sm font-medium normal-case transition hover:bg-white/10 hover:text-white ${
                  pathname === "/dsa-interview" ? "bg-white/10 text-white" : "text-white/75"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.navDsaInterview}
              </Link>
              <Link
                href="/dsa-coaches"
                className={`rounded-lg px-3 py-2 text-sm font-medium normal-case transition hover:bg-white/10 hover:text-white ${
                  pathname === "/dsa-coaches" ? "bg-white/10 text-white" : "text-white/75"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.navDsaCoaches}
              </Link>
              <Link
                href="/blog"
                className={`flex items-center gap-2 rounded-lg border border-champagne/40 bg-champagne/15 px-3 py-2 text-sm font-medium normal-case text-champagne-light transition hover:bg-champagne/25 ${
                  pathname === "/blog" ? "bg-champagne/30 text-white" : ""
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.navBlog}
                <span className="rounded bg-champagne px-1.5 py-px text-[9px] font-bold uppercase tracking-wide text-intellectual animate-pulse">
                  New
                </span>
              </Link>
              <div className="mt-1 border-t border-white/10 pt-2">
                <p className="px-3 py-1 text-[10px] font-semibold normal-case text-white/45">
                  {t.navOpenHouse} ★
                </p>
                {openHouseLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium normal-case transition hover:bg-white/10 hover:text-white ${
                      pathname === link.href ? "bg-white/10 text-white" : "text-white/75"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-1 border-t border-white/10 pt-2">
                <p className="px-3 py-1 text-[10px] font-semibold normal-case text-white/45">
                  {t.navExplore}
                </p>
                {dataLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium normal-case transition hover:bg-white/10 hover:text-white ${
                      pathname === link.href ? "bg-white/10 text-white" : "text-white/75"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
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
