"use client";

import Link from "next/link";
import { ChevronDown, GraduationCap, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";
import { getAllTalentPages } from "@/lib/talentPages";

type NavLink = { href: string; label: string; gold?: boolean };

/**
 * Star slot rules (Singapore time, annual cycle):
 *   May 5 – Jun 2     → Application (apply window)
 *   Jun 3 – Nov 30    → After You Apply (post-submission to S1 posting)
 *   Dec 1 – May 4     → Schools (next-year research phase)
 *
 * Returns null on first server render to avoid hydration mismatch;
 * a client useEffect fills it in.
 */
type StarSlot = "application" | "after-apply" | "schools" | null;

function computeStarSlot(now: Date): Exclude<StarSlot, null> {
  // Use Singapore time (UTC+8) by reading UTC date and shifting.
  const sgMs = now.getTime() + 8 * 60 * 60 * 1000;
  const sg = new Date(sgMs);
  const month = sg.getUTCMonth() + 1; // 1-12
  const day = sg.getUTCDate();

  // May 5 – Jun 2
  if ((month === 5 && day >= 5) || (month === 6 && day <= 2)) {
    return "application";
  }
  // Jun 3 – Nov 30
  if ((month === 6 && day >= 3) || (month > 6 && month <= 11)) {
    return "after-apply";
  }
  // Dec 1 – May 4 (default)
  return "schools";
}

function StarSticker() {
  return (
    <span
      className="pointer-events-none absolute -right-1 -top-2 rotate-12 text-base leading-none"
      style={{
        filter: "drop-shadow(0 0 5px #c6a24a) drop-shadow(0 0 12px #c6a24a)",
      }}
      aria-hidden
    >
      ⭐
    </span>
  );
}

function NavDropdown({
  label,
  isOpen,
  onToggle,
  onClose,
  id,
  links,
  pathname,
  starred = false,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  id: string;
  links: readonly NavLink[];
  pathname: string;
  starred?: boolean;
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
        className={`relative flex items-center gap-0.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 hover:text-white ${
          isActive ? "bg-white/10 text-white" : "text-white/70"
        }`}
      >
        <span className="relative">
          {label}
          {starred ? <StarSticker /> : null}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {isOpen ? (
        <div
          id={id}
          className="absolute right-0 top-full z-50 mt-1 min-w-[220px] rounded-xl border border-white/10 bg-intellectual/95 py-1 shadow-lg backdrop-blur-md"
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

function NavLinkButton({
  href,
  label,
  pathname,
  starred = false,
}: {
  href: string;
  label: string;
  pathname: string;
  starred?: boolean;
}) {
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={`relative flex items-center whitespace-nowrap rounded-lg px-3 py-1.5 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 hover:text-white ${
        active ? "bg-white/10 text-white" : "text-white/70"
      }`}
    >
      <span className="relative">
        {label}
        {starred ? <StarSticker /> : null}
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const { t, locale } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [basicsMenuOpen, setBasicsMenuOpen] = useState(false);
  const [schoolsMenuOpen, setSchoolsMenuOpen] = useState(false);
  const [applicationMenuOpen, setApplicationMenuOpen] = useState(false);
  const [afterApplyMenuOpen, setAfterApplyMenuOpen] = useState(false);

  // Star slot: null on SSR, real value after mount (avoids hydration mismatch).
  const [starSlot, setStarSlot] = useState<StarSlot>(null);
  useEffect(() => {
    setStarSlot(computeStarSlot(new Date()));
  }, []);

  // IA v2 (2026-06-01): DSA Basics trimmed to 2; Application + After You Apply now dropdowns.
  // URLs preserved — /faq stays as Application FAQ; /timeline + 8 talent pages added in Phase B.
  const basicsLinks: readonly NavLink[] = [
    { href: "/dsa-guide", label: t.navWhatIsDsa },
    { href: "/dsa-experience", label: t.navParentStories, gold: true },
  ];

  const schoolsLinks: readonly NavLink[] = [
    { href: "/dsa-finder", label: t.navSearchSchools, gold: true },
    { href: "/schools", label: t.navAllSchools },
    { href: "/psle-cop", label: t.navPsleCutoffs },
    { href: "/open-houses", label: t.navOpenHouseDates },
    { href: "/open-house-takeaways", label: t.navOpenHouseMissed, gold: true },
    { href: "/open-house-guide", label: t.navHowToVisit },
  ];

  const applicationLinks: readonly NavLink[] = [
    { href: "/timeline", label: t.navTimeline },
    { href: "/faq", label: t.navApplicationFaq },
    { href: "/apply", label: t.navApplyChecklist },
  ];

  const talentNavLinks: readonly NavLink[] = getAllTalentPages().map((p) => ({
    href: `/dsa-interview/${p.slug}`,
    label: p.navLabel[locale],
  }));

  const afterApplyLinks: readonly NavLink[] = [
    { href: "/after-apply", label: t.navAfterApplyHub },
    { href: "/dsa-interview", label: t.navDsaInterview, gold: true },
    ...talentNavLinks,
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
            label={t.navDsaBasicsGroup}
            isOpen={basicsMenuOpen}
            onToggle={() => setBasicsMenuOpen((o) => !o)}
            onClose={() => setBasicsMenuOpen(false)}
            id="desktop-basics-menu"
            links={basicsLinks}
            pathname={pathname}
          />
          <NavDropdown
            label={t.navSchoolsGroup}
            isOpen={schoolsMenuOpen}
            onToggle={() => setSchoolsMenuOpen((o) => !o)}
            onClose={() => setSchoolsMenuOpen(false)}
            id="desktop-schools-menu"
            links={schoolsLinks}
            pathname={pathname}
            starred={starSlot === "schools"}
          />
          <NavDropdown
            label={t.navApplication}
            isOpen={applicationMenuOpen}
            onToggle={() => setApplicationMenuOpen((o) => !o)}
            onClose={() => setApplicationMenuOpen(false)}
            id="desktop-application-menu"
            links={applicationLinks}
            pathname={pathname}
            starred={starSlot === "application"}
          />
          <NavDropdown
            label={t.navAfterApply}
            isOpen={afterApplyMenuOpen}
            onToggle={() => setAfterApplyMenuOpen((o) => !o)}
            onClose={() => setAfterApplyMenuOpen(false)}
            id="desktop-after-apply-menu"
            links={afterApplyLinks}
            pathname={pathname}
            starred={starSlot === "after-apply"}
          />
          <NavLinkButton
            href="/dsa-coaches"
            label={t.navCoach}
            pathname={pathname}
          />
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
              {/* DSA Basics */}
              <p className="px-3 py-1 text-[10px] font-semibold normal-case text-white/45">
                {t.navDsaBasicsGroup}
              </p>
              {basicsLinks.map((link) => (
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

              {/* Schools */}
              <div className="mt-1 border-t border-white/10 pt-2">
                <p className="relative inline-flex items-center px-3 py-1 text-[10px] font-semibold normal-case text-white/45">
                  <span className="relative pr-4">
                    {t.navSchoolsGroup}
                    {starSlot === "schools" ? <StarSticker /> : null}
                  </span>
                </p>
                {schoolsLinks.map((link) => (
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

              {/* Application */}
              <div className="mt-1 border-t border-white/10 pt-2">
                <p className="relative inline-flex items-center px-3 py-1 text-[10px] font-semibold normal-case text-white/45">
                  <span className="relative pr-4">
                    {t.navApplication}
                    {starSlot === "application" ? <StarSticker /> : null}
                  </span>
                </p>
                {applicationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium normal-case transition hover:bg-white/10 ${
                      pathname === link.href
                        ? "bg-white/10 text-white"
                        : "text-white/75 hover:text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* After You Apply */}
              <div className="mt-1 border-t border-white/10 pt-2">
                <p className="relative inline-flex items-center px-3 py-1 text-[10px] font-semibold normal-case text-white/45">
                  <span className="relative pr-4">
                    {t.navAfterApply}
                    {starSlot === "after-apply" ? <StarSticker /> : null}
                  </span>
                </p>
                {afterApplyLinks.map((link) => (
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

              {/* Coach */}
              <div className="mt-1 border-t border-white/10 pt-2">
                <Link
                  href="/dsa-coaches"
                  className={`block rounded-lg px-3 py-2 text-sm font-medium normal-case transition hover:bg-white/10 hover:text-white ${
                    pathname === "/dsa-coaches" ? "bg-white/10 text-white" : "text-white/75"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.navCoach}
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
