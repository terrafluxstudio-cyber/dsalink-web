"use client";

import { Megaphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function AdPlaceholder() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-intellectual/5 bg-slate-50/80 py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-intellectual-muted">
          <Megaphone className="h-4 w-4 text-champagne-dark" aria-hidden />
          {t.adLabel}
        </div>
        <div className="mt-3 flex min-h-[120px] items-center justify-center rounded-2xl border border-dashed border-intellectual/15 bg-white/80 px-6 py-10 text-center text-sm text-intellectual-muted">
          {t.adPlaceholder}
        </div>
      </div>
    </section>
  );
}
