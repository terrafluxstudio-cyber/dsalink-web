"use client";

import { ChevronDown } from "lucide-react";
import { isLocale, localeLabels, locales } from "@/lib/i18n";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle({ id = "language-select" }: { id?: string }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className="relative min-w-[5.5rem]">
      <label className="sr-only" htmlFor={id}>
        {t.a11yLanguageSelector}
      </label>
      <select
        id={id}
        value={locale}
        onChange={(e) => {
          const v = e.target.value;
          if (isLocale(v)) setLocale(v);
        }}
        className="block w-full cursor-pointer appearance-none rounded-lg border border-white/20 bg-white/[0.12] py-2 pl-3 pr-8 text-[0.8125rem] font-medium text-white/85 outline-none transition hover:border-white/30 hover:bg-white/[0.18] focus-visible:border-white/35 focus-visible:ring-1 focus-visible:ring-white/15"
        aria-label={t.a11yLanguageSelector}
      >
        {locales.map((code) => (
          <option key={code} value={code}>
            {localeLabels[code]}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
        aria-hidden
      />
    </div>
  );
}
