import { REPORT_ERROR_MAILTO } from "@/lib/report-error-mailto";

/**
 * English-only legal disclaimer (MOE non-affiliation).
 * Shown site-wide above the branded footer band.
 */

const DISCLAIMER =
  "Disclaimer: The information provided on this site, including PSLE COP and Open House dates, is for informational purposes only. This website is not affiliated with the Ministry of Education (MOE) Singapore. Users should verify all details with the official MOE SchoolFinder or respective school websites. We assume no responsibility for any decisions made based on the data provided.";

export function LegalDisclaimer() {
  return (
    <div
      className="border-t border-white/10 bg-intellectual-dark"
      aria-label="Disclaimer"
    >
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="space-y-4 text-xs leading-relaxed text-slate-400 sm:text-sm">
          <p lang="en">{DISCLAIMER}</p>
          <p>
            <a
              href={REPORT_ERROR_MAILTO}
              className="font-medium text-slate-300 underline decoration-white/20 decoration-1 underline-offset-2 transition hover:text-champagne-light hover:decoration-champagne-light/50"
            >
              Spotted an error? Tell us (Report Error)
            </a>
          </p>
          <p className="border-t border-white/10 pt-4 text-[11px] leading-snug text-slate-500 sm:text-xs">
            <span className="block tabular-nums">Last Updated: May 2026</span>
          </p>
        </div>
      </div>
    </div>
  );
}
