/**
 * SchoolLangSwitcher — server component.
 *
 * Shows EN / ZH / MS / TA pill links for a school page.
 * Available translations are clickable; unavailable ones are dimmed.
 * Current language is highlighted.
 */

import Link from "next/link";
import type { TranslatedLang } from "@/lib/schoolPages";

type LangEntry = {
  code: "en" | TranslatedLang;
  label: string;
  href: string;
};

const LANG_LABELS: Record<"en" | TranslatedLang, string> = {
  en: "EN",
  zh: "中文",
  ms: "BM",
  ta: "தமிழ்",
};

type Props = {
  slug: string;
  currentLang: "en" | TranslatedLang;
  availableTranslations: TranslatedLang[]; // langs with translation files
};

export function SchoolLangSwitcher({
  slug,
  currentLang,
  availableTranslations,
}: Props) {
  const available = new Set<string>(["en", ...availableTranslations]);

  const entries: LangEntry[] = (["en", "zh", "ms", "ta"] as const).map((code) => ({
    code,
    label: LANG_LABELS[code],
    href: code === "en" ? `/schools/${slug}` : `/${code}/schools/${slug}`,
  }));

  return (
    <div className="flex items-center gap-1.5" aria-label="Language versions">
      {entries.map(({ code, label, href }) => {
        const isCurrent = code === currentLang;
        const isAvailable = available.has(code);

        if (isCurrent) {
          return (
            <span
              key={code}
              aria-current="true"
              className="rounded-md bg-champagne px-2.5 py-1 text-[11px] font-semibold text-white"
            >
              {label}
            </span>
          );
        }

        if (isAvailable) {
          return (
            <Link
              key={code}
              href={href}
              className="rounded-md border border-champagne/30 px-2.5 py-1 text-[11px] font-semibold text-champagne-dark transition hover:border-champagne/60 hover:bg-champagne/10"
            >
              {label}
            </Link>
          );
        }

        return (
          <span
            key={code}
            title="Translation coming soon"
            className="cursor-default rounded-md border border-intellectual/10 px-2.5 py-1 text-[11px] font-semibold text-intellectual-muted/40"
          >
            {label}
          </span>
        );
      })}
    </div>
  );
}
