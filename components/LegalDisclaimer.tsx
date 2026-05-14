import { REPORT_ERROR_MAILTO } from "@/lib/report-error-mailto";

/**
 * English-only legal disclaimer (MOE non-affiliation).
 * Compact site-wide footer block — single column, minimal vertical space.
 */

const DISCLAIMER =
  "Disclaimer: The information provided on this site, including PSLE COP and Open House dates, is for informational purposes only. This website is not affiliated with the Ministry of Education (MOE) Singapore. Users should verify all details with the official MOE SchoolFinder or respective school websites. We assume no responsibility for any decisions made based on the data provided.";

const LOGO_ATTRIBUTION =
  "DSALink is an independent platform. All school logos and crests displayed are the property of their respective schools and are sourced from the publicly accessible MOE SchoolFinder (moe.gov.sg). They are used solely for identification purposes. DSALink is not affiliated with, endorsed by, or in any way officially connected with the Ministry of Education (MOE) Singapore or any individual school.";

type LegalDisclaimerProps = {
  /** Optional attribution line (e.g. schedule source). */
  scheduleNote?: string;
  /** Localized copyright / tagline (bottom line). */
  rightsLine: string;
};

export function LegalDisclaimer({ scheduleNote, rightsLine }: LegalDisclaimerProps) {
  return (
    <div
      id="site-disclaimer"
      className="text-left"
      aria-label="Disclaimer"
    >
      <p
        lang="en"
        className="max-w-3xl text-[11px] leading-snug text-white/30"
      >
        {DISCLAIMER}
      </p>
      <p
        lang="en"
        className="mt-1.5 max-w-3xl text-[10px] leading-snug text-white/20"
      >
        {LOGO_ATTRIBUTION}
      </p>
      <p className="mt-1.5 text-[11px] leading-snug text-white/25">
        <span className="tabular-nums">Last Updated: May 2026</span>
        <span className="mx-2 text-white/15" aria-hidden>
          |
        </span>
        <a
          href={REPORT_ERROR_MAILTO}
          className="text-white/25 underline decoration-white/10 underline-offset-2 transition hover:text-white/55 hover:decoration-champagne/30"
        >
          Spotted an error? Report Error
        </a>
      </p>
      {scheduleNote ? (
        <p
          lang="en"
          className="mt-1.5 max-w-3xl text-[11px] leading-snug text-gray-500"
        >
          {scheduleNote}
        </p>
      ) : null}
      <p className="mt-2 border-t border-white/[0.06] pt-1.5 text-[10px] leading-snug text-white/20">
        {rightsLine}
      </p>
    </div>
  );
}
