"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import { useLanguage } from "@/contexts/LanguageContext";

type SiteFooterProps = {
  scheduleNote?: string;
};

export function SiteFooter({ scheduleNote }: SiteFooterProps) {
  const { t, locale } = useLanguage();

  return (
    <footer className="border-t border-white/[0.08] bg-intellectual-dark">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* Navigation grid */}
        <div className="grid grid-cols-1 gap-8 border-b border-white/[0.08] py-10 sm:grid-cols-4 sm:gap-6">

          {/* Brand column */}
          <div className="sm:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 transition-opacity hover:opacity-80">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-champagne/30 bg-champagne/15 text-champagne-light">
                <GraduationCap className="h-4 w-4" aria-hidden />
              </span>
              <span className="font-display text-[0.9375rem] font-semibold text-white normal-case">
                {t.navBrand}
              </span>
            </Link>
            <p className="mt-3 max-w-[220px] text-[0.8125rem] leading-relaxed text-white/40 normal-case">
              {t.navTagline}
            </p>
            <div className="mt-4 flex items-center gap-3.5">
              <a
                href="https://www.facebook.com/profile.php?id=61590026554613"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DSALink on Facebook"
                className="text-champagne transition hover:text-champagne-light"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/dsalink.sg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DSALink on Instagram"
                className="text-champagne transition hover:text-champagne-light"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://t.me/dsa_link_sg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DSALink on Telegram"
                className="text-champagne transition hover:text-champagne-light"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Learn column */}
          <div>
            <p className="mb-3 text-[10px] font-bold tracking-[0.15em] text-white/30">
              {t.footerLearnHeading}
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/what-is-dsa" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.navWhatIsDsa}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.footerFaq}
                </Link>
              </li>
              <li>
                <Link href="/dsa-experience" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.navParentStories}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.footerBlog}
                </Link>
              </li>
            </ul>
          </div>

          {/* Apply column */}
          <div>
            <p className="mb-3 text-[10px] font-bold tracking-[0.15em] text-white/30">
              {t.footerApplyHeading}
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/apply" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.footerApply}
                </Link>
              </li>
              <li>
                <Link href="/dsa-interview" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.navDsaInterview}
                </Link>
              </li>
              <li>
                <Link href="/dsa-coaches" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.navFindCoach}
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore column */}
          <div>
            <p className="mb-3 text-[10px] font-bold tracking-[0.15em] text-white/30">
              {t.footerExploreHeading}
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/dsa-finder" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.navSearchSchools}
                </Link>
              </li>
              <li>
                <Link href="/schools" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.navAllSchools}
                </Link>
              </li>
              <li>
                <Link href="/open-houses" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.footerOpenHouseCalendar}
                </Link>
              </li>
              <li>
                <Link href="/open-house-takeaways" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.footerMissedOpenHouse}
                </Link>
              </li>
              <li>
                <Link href="/psle-cop" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.navPsleCutoffs}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom: legal disclaimer */}
        <div className="py-5">
          <LegalDisclaimer
            locale={locale}
            scheduleNote={scheduleNote}
            rightsLine={t.footerRights}
            disclaimerBody={t.legalDisclaimerBody}
            lastUpdated={t.legalDisclaimerLastUpdated}
            reportErrorLabel={t.legalDisclaimerReportError}
            ariaLabel={t.legalDisclaimerAriaLabel}
          />
          <p className="mt-1 text-[11px] text-slate-400">
            {t.footerScopeNote}
          </p>
        </div>

      </div>
    </footer>
  );
}
