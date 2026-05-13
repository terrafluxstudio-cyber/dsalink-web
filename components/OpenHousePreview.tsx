"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { useMemo } from "react";
import { SchoolDisplayName } from "@/components/SchoolDisplayName";
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

function pickTime(ev: SchoolOpenHouse, locale: Locale): string {
  if (locale === "zh") return ev.timeZh;
  return ev.timeEn;
}

export function OpenHousePreview() {
  const { locale, t } = useLanguage();

  const events = useMemo(() => getPreviewOpenHouseEvents(3), []);

  if (events.length === 0) return null;

  return (
    <section
      className="mt-10 w-full max-w-xl"
      aria-labelledby="open-house-preview-heading"
    >
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-indigo-600">
            <CalendarDays className="h-5 w-5" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <h2
              id="open-house-preview-heading"
              className="font-display text-base font-semibold text-slate-900 sm:text-lg"
            >
              {t.openHousePreviewTitle}
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">{t.openHousePreviewDesc}</p>
          </div>
        </div>

        <ol className="mt-5 space-y-3 border-t border-slate-200 pt-4">
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
                    className="w-7 shrink-0 pt-0.5 text-xs font-semibold tabular-nums text-indigo-600"
                    aria-hidden
                  >
                    {index + 1}.
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-slate-900">
                      <span className="text-slate-600">{formatCompactDate(ev, locale)}</span>
                      <span className="mx-1.5 text-slate-400" aria-hidden>
                        ·
                      </span>
                      <span className="break-words">
                        <SchoolDisplayName
                          locale={locale}
                          nameEn={ev.nameEn}
                          nameZh={ev.nameZh}
                        />
                      </span>
                    </p>
                    <p className="mt-0.5 text-xs text-slate-600">
                      {pickTime(ev, locale)}
                      <span className="mx-1.5 text-slate-400">·</span>
                      {ev.mode === "online" ? t.openHouseOnline : t.openHouseOnsite}
                      <span className="mx-1.5 text-slate-400">·</span>
                      <span className={status === "Ongoing" ? "font-semibold text-indigo-600" : ""}>
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
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:w-auto sm:min-w-[220px]"
          >
            {t.openHouseViewFullCalendar}
            <ArrowRight className="h-4 w-4 text-indigo-600" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
