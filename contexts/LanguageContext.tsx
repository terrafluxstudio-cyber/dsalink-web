"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  copy,
  isLocale,
  localeHtmlLang,
  type Copy,
  type Locale,
} from "@/lib/i18n";
import { DSALINK_LOCALE_KEY } from "@/lib/constants";

function readCookieLocale(): Locale | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${DSALINK_LOCALE_KEY}=([^;]*)`),
  );
  const raw = match?.[1];
  if (!raw) return null;
  try {
    const decoded = decodeURIComponent(raw);
    return isLocale(decoded) ? decoded : null;
  } catch {
    return null;
  }
}

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Copy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  const fromStorage = window.localStorage.getItem(DSALINK_LOCALE_KEY);
  if (fromStorage && isLocale(fromStorage)) return fromStorage;
  const fromCookie = readCookieLocale();
  if (fromCookie) return fromCookie;
  if (typeof navigator !== "undefined") {
    const languages = [
      navigator.language,
      ...(navigator.languages ?? []),
    ].map((l) => l?.toLowerCase() ?? "");
    for (const lang of languages) {
      if (lang.startsWith("zh")) return "zh";
      if (lang.startsWith("ms")) return "ms";
      if (lang.startsWith("ta")) return "ta";
    }
  }
  return null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = readStoredLocale();
    if (stored) setLocaleState(stored);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(DSALINK_LOCALE_KEY, next);
      document.cookie = `${DSALINK_LOCALE_KEY}=${encodeURIComponent(next)}; Path=/; Max-Age=31536000; SameSite=Lax`;
    } catch {
      /* ignore quota / private mode */
    }
    document.documentElement.lang = localeHtmlLang[next];
    document.body.setAttribute('data-locale', next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = localeHtmlLang[locale];
    document.body.setAttribute('data-locale', locale);
  }, [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: copy[locale],
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
