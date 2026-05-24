"use client";

import Link from "next/link";
import { ChevronDown, GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

type NavLink = { href: string; label: string; gold?: boolean };

function NavDropdown({
  label,
  isOpen,
  onToggle,
  onClose,
  id,
  links,
  pathname,
  starSticker = false,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  id: string;
  links: readonly NavLink[];
  pathname: string;
  starSticker?: boolean;
}) {
  const isActive = links.some((l) => l.href === pathname);
  return (
    <div
      className="relative"
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
    >
      <button
        type="button"
        aria-controls={id}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={onToggle}
        className={`flex items-center gap-0.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 hover:text-white ${
          isActive ? "bg-white/10 text-white" : "text-white/70"
        }`}
      >
        {starSticker ? (
          <span className="relative pr-3">
            {label}
            <span
              className="pointer-events-none absolute -right-0.5 -top-2.5 rotate-12 text-base leading-none"
              style={{
                filter: "drop-shadow(0 0 5px #c6a24a) drop-shadow(0 0 12px #c6a24a)",
              }}
              aria-hidden
            >
              ⭐
            </span>
          </span>
        ) : (
          <span>{label}</span>
        )}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {isOpen ? (
        <div
          id={id}
          className="absolute right-0 top-full z-50 mt-1 min-w-[200px] rounded-xl border border-white/10 bg-intellectual/95 py-1 shadow-lg backdrop-blur-md"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`block px-4 py-2 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 ${
                link.gold
                  ? pathname === link.href
                    ? "text-champagne"
                    : "text-champagne hover:text-champagne-light"
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
  );
}

export function SiteHeader() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dsaGuideMenuOpen, setDsaGuideMenuOpen] = useState(false);
  const [openHouseMenuOpen, setOpenHouseMenuOpen] = useState(false);
  const [applyMenuOpen, setApplyMenuOpen] = useState(false);
  const [schoolFinderMenuOpen, setSchoolFinderMenuOpen] = useState(false);

  const dsaGuideLinks: readonly NavLink[] = [
    { href: "/dsa-guide", label: t.navWhatIsDsa },
    { href: "/faq", label: t.navFaq },
    { href: "/dsa-experience", label: t.navParentStories },
  ];

  const openHouseLinks: readonly NavLink[] = [
    { href: "/open-houses", label: t.navOpenHouseDates },
    { href: "/open-house-guide", label: t.navHowToVisit },
    { href: "/open-house-takeaways", label: t.navOpenHouseMissed, gold: true },
  ];

  const applyLinks: readonly NavLink[] = [
    { href: "/apply", label: t.navApplyChecklist },
    { href: "/dsa-interview", label: t.navDsaInterview },
    { href: "/dsa-coaches", label: t.navFindCoach, gold: true },
  ];

  const schoolFinderLinks: readonly NavLink[] = [
    { href: "/dsa-finder", label: t.navSearchSchools },
    { href: "/schools", label: t.navAllSchools },
    { href: "/psle-cop", label: t.navPsleCutoffs },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.10] bg-intellectual/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-4 sm:px-6">
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

        <nav
          className="hidden min-w-0 shrink-0 flex-nowrap items-center justify-end gap-0.5 md:flex"
          aria-label={t.a11yNavPrimary}
        >
          <NavDropdown
            label={t.navDsaGuideGroup}
            isOpen={dsaGuideMenuOpen}
            onToggle={() => setDsaGuideMenuOpen((o) => !o)}
            onClose={() => setDsaGuideMenuOpen(false)}
            id="desktop-dsa-guide-menu"
            links={dsaGuideLinks}
            pathname={pathname}
          />
          <NavDropdown
            label={t.navOpenHouse}
            isOpen={openHouseMenuOpen}
            onToggle={() => setOpenHouseMenuOpen((o) => !o)}
            onClose={() => setOpenHouseMenuOpen(false)}
            id="desktop-openhouse-menu"
            links={openHouseLinks}
            pathname={pathname}
          />
          <NavDropdown
            label={t.navApplyGroup}
            isOpen={applyMenuOpen}
            onToggle={() => setApplyMenuOpen((o) => !o)}
            onClose={() => setApplyMenuOpen(false)}
            id="desktop-apply-menu"
            links={applyLinks}
            pathname={pathname}
            starSticker
          />
          <NavDropdown
            label={t.navSchoolFinderGroup}
            isOpen={schoolFinderMenuOpen}
            onToggle={() => setSchoolFinderMenuOpen((o) => !o)}
            onClose={() => setSchoolFinderMenuOpen(false)}
            id="desktop-school-finder-menu"
            links={schoolFinderLinks}
            pathname={pathname}
          />
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
          <div className="ml-2">
            <LanguageToggle id="language-select-desktop" />
          </div>
        </nav>

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

      {mobileMenuOpen ? (
        <div
          id="mobile-nav-drawer"
          className="border-t border-white/10 bg-intellectual shadow-lg md:hidden"
        >
          <nav className="mx-auto max-w-5xl px-4 py-3" aria-label={t.a11yNavMobilePrimary}>
            <div className="grid gap-0.5">
              <p className="px-3 py-1 text-[10px] font-semibold normal-case text-white/45">
                {t.navDsaGuideGroup}
              </p>
              {dsaGuideLinks.map((link) => (
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
              <div className="mt-1 border-t border-white/10 pt-2">
                <p className="px-3 py-1 text-[10px] font-semibold normal-case text-white/45">
                  {t.navOpenHouse}
                </p>
                {openHouseLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium normal-case transition hover:bg-white/10 ${
                      link.gold
                        ? "text-champagne hover:text-champagne-light"
                        : pathname === link.href
                          ? "bg-white/10 text-white"
                          : "text-white/75 hover:text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-1 border-t border-white/10 pt-2">
                <p className="relative inline-flex items-center px-3 py-1 text-[10px] font-semibold normal-case text-white/45">
                  <span className="relative pr-4">
                    {t.navApplyGroup}
                    <span
                      className="pointer-events-none absolute -right-0.5 -top-2 rotate-12 text-sm leading-none"
                      style={{
                        filter:
                          "drop-shadow(0 0 5px #c6a24a) drop-shadow(0 0 10px #c6a24a)",
                      }}
                      aria-hidden
                    >
                      ⭐
                    </span>
                  </span>
                </p>
                {applyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium normal-case transition hover:bg-white/10 ${
                      link.gold
                        ? "text-champagne hover:text-champagne-light"
                        : pathname === link.href
                          ? "bg-white/10 text-white"
                          : "text-white/75 hover:text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-1 border-t border-white/10 pt-2">
                <p className="px-3 py-1 text-[10px] font-semibold normal-case text-white/45">
                  {t.navSchoolFinderGroup}
                </p>
                {schoolFinderLinks.map((link) => (
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
