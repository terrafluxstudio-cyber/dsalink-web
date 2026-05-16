"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { useMemo } from "react";
import { SchoolDisplayName } from "@/components/SchoolDisplayName";
import { SchoolLogo } from "@/components/SchoolLogo";
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

  const events = useMemo(() => {
    return getPreviewOpenHouseEvents(6)
      .filter((ev) => resolveOpenHouseStatus(ev) !== "Finished")
      .slice(0, 3);
  }, []);

  if (events.length === 0) return null;

  return (
    <section
      className="mt-10 w-full max-w-xl"
      aria-labelledby="open-house-preview-heading"
    >
      <div className="rounded-xl border border-surface-warm bg-white p-4 shadow-card sm:p-5">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-surface-warm bg-surface text-intellectual">
            <CalendarDays className="h-4 w-4" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <h2
              id="open-house-preview-heading"
              className="font-display text-[0.9375rem] font-semibold text-slate-900"
            >
              {t.openHousePreviewTitle}
            </h2>
            <p className="mt-0.5 text-[0.8125rem] leading-relaxed text-slate-500">{t.openHousePreviewDesc}</p>
          </div>
        </div>

        <ol className="mt-4 space-y-2.5 border-t border-surface-warm pt-3.5">
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
                <div className="flex gap-2.5 text-sm">
                  <SchoolLogo schoolId={ev.id} nameEn={ev.nameEn} size={28} />
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
                      <span className={status === "Ongoing" ? "font-semibold text-slate-700" : ""}>
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
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-surface-warm bg-surface px-4 py-2 text-[0.8125rem] font-semibold text-intellectual transition hover:border-surface-subtle hover:bg-surface-subtle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-intellectual sm:w-auto sm:min-w-[200px]"
          >
            {t.openHouseViewFullCalendar}
            <ArrowRight className="h-4 w-4 text-slate-700" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
