"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/i18n";
import {
  getPreviewOpenHouseEvents,
  resolveOpenHouseStatus,
  type SchoolOpenHouse,
} from "@/lib/data";

const localeDateOptions: Record<Locale, string> = {
  en: "en-SG",
  zh: "zh-Hans-SG",
  ms: "ms-SG",
  ta: "ta-SG",
};

function formatCompactDate(ev: SchoolOpenHouse, locale: Locale): string {
  if (locale === "zh" && ev.dateDisplayZh) return ev.dateDisplayZh;
  if (ev.dateDisplayEn) return ev.dateDisplayEn;
  const instant = new Date(`${ev.date}T12:00:00+08:00`);
  return new Intl.DateTimeFormat(localeDateOptions[locale], {
    month: "short",
    day: "numeric",
  }).format(instant);
}

function pickName(ev: SchoolOpenHouse, locale: Locale): string {
  if (locale === "zh") return ev.nameZh;
  return ev.nameEn;
}

function pickTime(ev: SchoolOpenHouse, locale: Locale): string {
  if (locale === "zh") return ev.timeZh;
  return ev.timeEn;
}

export function OpenHousePreview() {
  const { locale, t } = useLanguage();

  const events = useMemo(() => getPreviewOpenHouseEvents(3), []);

  return (
    <section
      className="mt-10 w-full max-w-xl"
      aria-labelledby="open-house-preview-heading"
    >
      <div className="rounded-2xl border border-intellectual/10 bg-card-shine p-5 shadow-sm ring-1 ring-champagne/20 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-intellectual/5 text-champagne-dark ring-1 ring-champagne/25">
            <CalendarDays className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <h2
              id="open-house-preview-heading"
              className="font-display text-base font-semibold text-intellectual sm:text-lg"
            >
              {t.openHousePreviewTitle}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-intellectual-muted">
              {t.openHousePreviewDesc}
            </p>
          </div>
        </div>

        <ol className="mt-5 space-y-3 border-t border-intellectual/8 pt-4">
          {events.map((ev, index) => {
            const status = resolveOpenHouseStatus(ev);
            const statusText =
              status === "Upcoming"
                ? t.openHouseStatusUpcoming
                : status === "Ongoing"
                  ? t.openHouseStatusOngoing
                  : t.openHouseStatusFinished;
            return (
              <li key={ev.id}>
                <div className="flex gap-3 text-sm">
                  <span
                    className="w-7 shrink-0 pt-0.5 text-xs font-semibold tabular-nums text-champagne-dark"
                    aria-hidden
                  >
                    {index + 1}.
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-intellectual">
                      <span className="text-intellectual-muted">
                        {formatCompactDate(ev, locale)}
                      </span>
                      <span
                        className="mx-1.5 text-intellectual-muted/60"
                        aria-hidden
                      >
                        ·
                      </span>
                      <span>{pickName(ev, locale)}</span>
                    </p>
                    <p className="mt-0.5 text-xs text-intellectual-muted">
                      {pickTime(ev, locale)}
                      <span className="mx-1.5 text-intellectual-muted/50">·</span>
                      {ev.mode === "online"
                        ? t.openHouseOnline
                        : t.openHouseOnsite}
                      <span className="mx-1.5 text-intellectual-muted/50">·</span>
                      <span
                        className={
                          status === "Ongoing"
                            ? "font-semibold text-champagne-dark"
                            : ""
                        }
                      >
                        {statusText}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-5">
          <Link
            href="/open-houses"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-champagne/45 bg-gradient-to-b from-white to-champagne-subtle/50 px-4 py-3 text-sm font-semibold text-intellectual shadow-gold transition hover:border-champagne hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:w-auto sm:min-w-[220px]"
          >
            {t.openHouseViewFullCalendar}
            <ArrowRight className="h-4 w-4 text-champagne-dark" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
