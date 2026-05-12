import { EXTERNAL } from "@/lib/constants";
import { UI_TRANSLATIONS } from "@/constants/ui_translations";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Visible FAQ block on /scores (pairs with FAQPage JSON-LD in page).
 */
export function ScoresPageFaq() {
  const { locale } = useLanguage();
  const ui = UI_TRANSLATIONS[locale];

  return (
    <section
      id="scores-faq"
      className="border-t border-intellectual/10 bg-champagne-subtle/25"
      aria-labelledby="scores-faq-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
        <h2
          id="scores-faq-heading"
          className="font-display text-lg font-semibold tracking-tight text-intellectual sm:text-xl"
        >
          {ui.scoresFaqTitle}
        </h2>
        <div className="mt-5 space-y-3">
          <details className="group rounded-xl border border-intellectual/12 bg-white/90 px-4 py-3 shadow-sm open:ring-1 open:ring-champagne/30">
            <summary className="cursor-pointer list-none font-medium text-intellectual outline-none marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-2">
                {ui.scoresFaqOfficialQuestion}
                <span className="text-xs font-normal text-intellectual-muted group-open:hidden">
                  {ui.faqShow}
                </span>
                <span className="hidden text-xs font-normal text-intellectual-muted group-open:inline">
                  {ui.faqHide}
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-intellectual-muted">
              {ui.scoresFaqOfficialAnswerPrefix}{" "}
              <a
                href={EXTERNAL.schoolFinder}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-intellectual underline decoration-intellectual/25 underline-offset-2 hover:decoration-champagne/60"
              >
                {ui.scoresFaqOfficialLink}
              </a>
              {ui.scoresFaqOfficialAnswerSuffix}
            </p>
          </details>
          <details className="group rounded-xl border border-intellectual/12 bg-white/90 px-4 py-3 shadow-sm open:ring-1 open:ring-champagne/30">
            <summary className="cursor-pointer list-none font-medium text-intellectual outline-none marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-2">
                {ui.scoresFaqTrendQuestion}
                <span className="text-xs font-normal text-intellectual-muted group-open:hidden">
                  {ui.faqShow}
                </span>
                <span className="hidden text-xs font-normal text-intellectual-muted group-open:inline">
                  {ui.faqHide}
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-intellectual-muted">
              {ui.scoresFaqTrendAnswer}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
