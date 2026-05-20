"use client";

import { Info } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { localeHtmlLang, type Locale } from "@/lib/i18n";

export type LocaleNoteCopy = Record<Locale, string>;

type ChineseNoteProps = {
  title: LocaleNoteCopy;
  body: LocaleNoteCopy;
  className?: string;
};

/** Inline note card with correct `lang` per locale (zh-Hans-SG, etc.). */
export function ChineseNote({ title, body, className = "" }: ChineseNoteProps) {
  const { locale } = useLanguage();
  const lang = localeHtmlLang[locale];

  return (
    <div
      className={`rounded-xl border border-[#e3ded5] bg-white px-4 py-3.5 ${className}`.trim()}
    >
      <p
        lang={lang}
        className="flex items-center gap-1.5 text-[10px] font-bold normal-case tracking-widest text-champagne-dark"
      >
        <Info className="h-3.5 w-3.5 shrink-0" aria-hidden />
        {title[locale]}
      </p>
      <p lang={lang} className="mt-1.5 text-sm leading-relaxed text-intellectual-muted">
        {body[locale]}
      </p>
    </div>
  );
}
