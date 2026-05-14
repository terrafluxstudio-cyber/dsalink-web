import { REPORT_ERROR_MAILTO } from "@/lib/report-error-mailto";
import { localeHtmlLang, type Locale } from "@/lib/i18n";

type LegalDisclaimerProps = {
  locale: Locale;
  scheduleNote?: string;
  rightsLine: string;
  disclaimerBody: string;
  logoAttribution: string;
  lastUpdated: string;
  reportErrorLabel: string;
  ariaLabel: string;
};

export function LegalDisclaimer({
  locale,
  scheduleNote,
  rightsLine,
  disclaimerBody,
  logoAttribution,
  lastUpdated,
  reportErrorLabel,
  ariaLabel,
}: LegalDisclaimerProps) {
  const lang = localeHtmlLang[locale];

  return (
    <div id="site-disclaimer" className="text-left" aria-label={ariaLabel}>
      <p lang={lang} className="max-w-3xl text-[11px] leading-snug text-white/30">
        {disclaimerBody}
      </p>
      <p lang={lang} className="mt-1.5 max-w-3xl text-[10px] leading-snug text-white/20">
        {logoAttribution}
      </p>
      <p lang={lang} className="mt-1.5 text-[11px] leading-snug text-white/25">
        <span className="tabular-nums">{lastUpdated}</span>
        <span className="mx-2 text-white/15" aria-hidden>
          |
        </span>
        <a
          href={REPORT_ERROR_MAILTO}
          className="text-white/25 underline decoration-white/10 underline-offset-2 transition hover:text-white/55 hover:decoration-champagne/30"
        >
          {reportErrorLabel}
        </a>
      </p>
      {scheduleNote ? (
        <p lang={lang} className="mt-1.5 max-w-3xl text-[11px] leading-snug text-gray-500">
          {scheduleNote}
        </p>
      ) : null}
      <p className="mt-2 border-t border-white/[0.06] pt-1.5 text-[10px] leading-snug text-white/20">
        {rightsLine}
      </p>
    </div>
  );
}
