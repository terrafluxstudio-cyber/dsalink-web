"use client";

import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import { useLanguage } from "@/contexts/LanguageContext";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10">
      <LegalDisclaimer />
      <div className="border-t border-white/10 bg-intellectual-dark text-slate-400">
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
          <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
            {t.footerRights}
          </p>
        </div>
      </div>
    </footer>
  );
}
