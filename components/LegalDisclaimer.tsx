import { REPORT_ERROR_MAILTO } from "@/lib/report-error-mailto";

/**
 * English-only legal disclaimer (MOE non-affiliation).
 * Compact site-wide footer block — single column, minimal vertical space.
 */

const DISCLAIMER =
  "Disclaimer: The information provided on this site, including PSLE COP and Open House dates, is for informational purposes only. This website is not affiliated with the Ministry of Education (MOE) Singapore. Users should verify all details with the official MOE SchoolFinder or respective school websites. We assume no responsibility for any decisions made based on the data provided.";

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
      className="text-center"
      aria-label="Disclaimer"
    >
      <p
        lang="en"
        className="mx-auto max-w-3xl text-[11px] leading-snug text-gray-500"
      >
        {DISCLAIMER}
      </p>
      <p className="mt-1.5 text-[11px] leading-snug text-gray-500">
        <span className="tabular-nums">Last Updated: May 2026</span>
        <span className="mx-2 text-gray-600/80" aria-hidden>
          |
        </span>
        <a
          href={REPORT_ERROR_MAILTO}
          className="text-gray-400 underline decoration-white/15 underline-offset-2 transition hover:text-slate-200 hover:decoration-champagne-light/40"
        >
          Spotted an error? Report Error
        </a>
      </p>
      {scheduleNote ? (
        <p
          lang="en"
          className="mx-auto mt-1.5 max-w-3xl text-[11px] leading-snug text-gray-500"
        >
          {scheduleNote}
        </p>
      ) : null}
      <p className="mt-2 border-t border-white/[0.05] pt-1.5 text-[10px] leading-snug text-gray-500">
        {rightsLine}
      </p>
    </div>
  );
}
