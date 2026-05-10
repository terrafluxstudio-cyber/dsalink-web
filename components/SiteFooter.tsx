"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-intellectual/10 bg-intellectual-dark text-white">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
        <p className="text-sm leading-relaxed text-white/85">{t.footerDisclaimer}</p>
        <p className="mt-6 text-xs text-champagne-light/90">{t.footerRights}</p>
      </div>
    </footer>
  );
}
