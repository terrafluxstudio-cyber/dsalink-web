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

        {/* Three-column navigation grid */}
        <div className="grid grid-cols-2 gap-8 border-b border-white/[0.08] py-10 sm:grid-cols-3 sm:gap-6">

          {/* Column 1: Brand + tagline */}
          <div className="col-span-2 sm:col-span-1">
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
          </div>

          {/* Column 2: Resources */}
          <div>
            <p className="mb-3 text-[10px] font-bold tracking-[0.15em] text-white/30">
              {t.footerNavResourcesHeading}
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/dsa-guide" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.navDsaGuide}
                </Link>
              </li>
              <li>
                <Link href="/dsa-interview" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.navDsaInterview}
                </Link>
              </li>
              <li>
                <Link href="/open-house-guide" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.navOpenHouseGuide}
                </Link>
              </li>
              <li>
                <Link href="/dsa-finder" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.navDsaFinder}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Data */}
          <div>
            <p className="mb-3 text-[10px] font-bold tracking-[0.15em] text-white/30">
              {t.footerNavDataHeading}
            </p>
            <ul className="space-y-2.5">
              <li>
                <Link href="/schools" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.navSchools}
                </Link>
              </li>
              <li>
                <Link href="/psle-cop" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.navScores}
                </Link>
              </li>
              <li>
                <Link href="/open-houses" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.navOpenHouses}
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
            logoAttribution={t.legalDisclaimerLogoAttribution}
            lastUpdated={t.legalDisclaimerLastUpdated}
            reportErrorLabel={t.legalDisclaimerReportError}
            ariaLabel={t.legalDisclaimerAriaLabel}
          />
        </div>

      </div>
    </footer>
  );
}
