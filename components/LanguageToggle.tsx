"use client";

import { ChevronDown } from "lucide-react";
import { isLocale, localeLabels, locales } from "@/lib/i18n";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle({ id = "language-select" }: { id?: string }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className="relative min-w-[10.5rem] sm:min-w-[12rem]">
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
        className="block w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white py-2.5 pl-3 pr-10 text-sm font-medium text-slate-700 shadow-sm outline-none transition hover:border-slate-300 focus-visible:border-slate-400 focus-visible:ring-2 focus-visible:ring-slate-400/25"
        aria-label={t.a11yLanguageSelector}
      >
        {locales.map((code) => (
          <option key={code} value={code}>
            {localeLabels[code]}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
        aria-hidden
      />
    </div>
  );
}
