"use client";

import { LegalDisclaimer } from "@/components/LegalDisclaimer";
import { useLanguage } from "@/contexts/LanguageContext";

type SiteFooterProps = {
  scheduleNote?: string;
};

export function SiteFooter({ scheduleNote }: SiteFooterProps) {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/[0.05] bg-intellectual-dark">
      <div className="mx-auto max-w-5xl px-4 py-2.5 sm:px-6 sm:py-3">
        <LegalDisclaimer scheduleNote={scheduleNote} rightsLine={t.footerRights} />
      </div>
    </footer>
  );
}
