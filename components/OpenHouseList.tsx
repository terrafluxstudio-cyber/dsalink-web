"use client";

import { Clock, ExternalLink, MapPin, Monitor } from "lucide-react";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Copy, Locale } from "@/lib/i18n";
import {
  openHouseEventsByDate,
  resolveOpenHouseStatus,
  toSingaporeDateKey,
  type OpenHouseStatus,
  type SchoolOpenHouse,
} from "@/lib/data";

const localeDateOptions: Record<Locale, string> = {
  en: "en-SG",
  zh: "zh-Hans-SG",
  ms: "ms-SG",
  ta: "ta-SG",
};

function formatDateHeading(isoDate: string, locale: Locale): string {
  const instant = new Date(`${isoDate}T12:00:00+08:00`);
  return new Intl.DateTimeFormat(localeDateOptions[locale], {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(instant);
}

function formatDateColumn(isoDate: string, locale: Locale) {
  const instant = new Date(`${isoDate}T12:00:00+08:00`);
  const day = new Intl.DateTimeFormat(localeDateOptions[locale], {
    day: "numeric",
  }).format(instant);
  const month = new Intl.DateTimeFormat(localeDateOptions[locale], {
    month: "short",
  }).format(instant);
  const weekday = new Intl.DateTimeFormat(localeDateOptions[locale], {
    weekday: "short",
  }).format(instant);
  return { day, month, weekday };
}

function pickTime(ev: SchoolOpenHouse, locale: Locale): string {
  if (locale === "zh") return ev.timeZh;
  return ev.timeEn;
}

export type OpenHouseListVariant = "embedded" | "page";

function statusLabel(
  status: OpenHouseStatus,
  t: Pick<
    Copy,
    | "openHouseStatusUpcoming"
    | "openHouseStatusOngoing"
    | "openHouseStatusFinished"
  >,
): string {
  switch (status) {
    case "Upcoming":
      return t.openHouseStatusUpcoming;
    case "Ongoing":
      return t.openHouseStatusOngoing;
    default:
      return t.openHouseStatusFinished;
  }
}

export function OpenHouseList({
  variant = "embedded",
}: {
  variant?: OpenHouseListVariant;
}) {
  const { locale, t } = useLanguage();
  const HeadingTag = variant === "page" ? "h1" : "h2";
  const RowHeadingTag = variant === "page" ? "h3" : "h4";

  const groups = useMemo(() => {
    const map = openHouseEventsByDate();
    const todayKey = toSingaporeDateKey(new Date());
    return Array.from(map.entries()).map(([date, events]) => ({
      date,
      events,
      dateLabel: formatDateColumn(date, locale),
      headingLong: formatDateHeading(date, locale),
      isPastDay: date < todayKey,
    }));
  }, [locale]);

  return (
    <section
      id="open-houses"
      className={`w-full scroll-mt-24 ${variant === "embedded" ? "mt-10" : "mt-0"}`}
      aria-labelledby="open-houses-heading"
    >
      <div className="max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-intellectual/10 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-champagne-dark">
              {t.openHouseKicker}
            </p>
            <HeadingTag
              id="open-houses-heading"
              className={`font-display font-semibold text-intellectual ${
                variant === "page"
                  ? "text-2xl sm:text-3xl"
                  : "text-xl sm:text-2xl"
              }`}
            >
              {t.sectionOpenHouseTitle}
            </HeadingTag>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.sectionOpenHouseDesc}
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {groups.map(
            ({ date, events, dateLabel, headingLong, isPastDay }) => (
              <article
                key={date}
                className={
                  isPastDay
                    ? "rounded-2xl border border-intellectual/10 bg-slate-200/50 opacity-[0.68] saturate-[0.72] transition"
                    : "motion-safe:animate-gold-breathe rounded-2xl border-2 border-champagne/45 bg-slate-100/95 shadow-sm"
                }
                aria-label={headingLong}
              >
                <span className="sr-only">{headingLong}</span>
                <div className="flex flex-col gap-5 p-4 sm:gap-6 sm:p-5 md:flex-row md:items-stretch md:gap-8">
                  {/* Left: prominent calendar date */}
                  <div className="flex shrink-0 flex-row items-end gap-3 border-b border-intellectual/10 pb-4 md:flex-col md:items-start md:border-b-0 md:border-r md:pb-0 md:pr-6 md:pt-1">
                    <span className="font-display text-4xl font-semibold tabular-nums leading-none text-intellectual sm:text-5xl">
                      {dateLabel.day}
                    </span>
                    <div className="flex flex-col pb-0.5 md:pb-0">
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-champagne-dark sm:text-sm">
                        {dateLabel.month}
                      </span>
                      <span className="text-[11px] font-medium text-intellectual-muted sm:text-xs">
                        {dateLabel.weekday}
                      </span>
                    </div>
                  </div>

                  {/* Rows: school / address / CTA */}
                  <ul className="min-w-0 flex-1 divide-y divide-intellectual/10">
                    {events.map((ev) => {
                      const status = resolveOpenHouseStatus(ev);
                      return (
                        <li key={ev.id}>
                          <div className="flex flex-col gap-3 py-4 first:pt-0 last:pb-0 sm:gap-4 sm:py-5">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                              <div className="min-w-0 flex-1 space-y-2">
                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                  <RowHeadingTag className="font-display text-base font-semibold leading-snug text-intellectual sm:text-lg">
                                    {ev.nameEn}
                                  </RowHeadingTag>
                                  <span
                                    className={
                                      status === "Ongoing"
                                        ? "inline-flex items-center rounded-full border border-champagne/55 bg-champagne-subtle/80 px-2 py-0.5 text-[10px] font-semibold text-champagne-dark sm:text-[11px]"
                                        : status === "Finished"
                                          ? "inline-flex items-center rounded-full border border-intellectual/10 bg-white/60 px-2 py-0.5 text-[10px] font-semibold text-intellectual-muted sm:text-[11px]"
                                          : "inline-flex items-center rounded-full border border-intellectual/12 bg-white/80 px-2 py-0.5 text-[10px] font-semibold text-intellectual sm:text-[11px]"
                                    }
                                  >
                                    {statusLabel(status, t)}
                                  </span>
                                  <span
                                    className={
                                      ev.mode === "online"
                                        ? "inline-flex items-center gap-0.5 rounded-full border border-intellectual/12 bg-white/70 px-2 py-0.5 text-[10px] font-semibold text-intellectual sm:text-[11px]"
                                        : "inline-flex items-center gap-0.5 rounded-full border border-champagne/35 bg-champagne-subtle/50 px-2 py-0.5 text-[10px] font-semibold text-champagne-dark sm:text-[11px]"
                                    }
                                  >
                                    {ev.mode === "online" ? (
                                      <Monitor
                                        className="h-3 w-3 shrink-0"
                                        aria-hidden
                                      />
                                    ) : null}
                                    {ev.mode === "online"
                                      ? t.openHouseOnline
                                      : t.openHouseOnsite}
                                  </span>
                                </div>
                                <p className="text-sm font-medium text-intellectual-muted">
                                  {ev.nameZh}
                                </p>
                                <p className="flex items-center gap-1.5 text-xs text-intellectual sm:text-sm">
                                  <Clock
                                    className="h-3.5 w-3.5 shrink-0 text-champagne-dark sm:h-4 sm:w-4"
                                    aria-hidden
                                  />
                                  <span>{pickTime(ev, locale)}</span>
                                </p>
                                <div className="flex items-start gap-1.5 text-intellectual-muted">
                                  <MapPin
                                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-champagne-dark sm:mt-0.5 sm:h-4 sm:w-4"
                                    aria-hidden
                                  />
                                  <div className="min-w-0 flex-1">
                                    <p className="hidden text-sm leading-relaxed sm:block">
                                      {ev.address}
                                    </p>
                                    <p
                                      className="sm:hidden text-[11px] leading-snug tracking-tight text-intellectual-muted/95"
                                      title={ev.address}
                                    >
                                      <span className="line-clamp-2">
                                        {ev.address}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Thumb-friendly CTA: full-width on mobile, right column on desktop */}
                              <div className="flex w-full shrink-0 flex-col items-stretch sm:w-auto sm:max-w-[11rem] sm:items-end sm:self-center sm:pl-2">
                                <a
                                  href={ev.sourceUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-intellectual px-4 py-3 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-intellectual-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne active:scale-[0.99] sm:min-h-0 sm:min-w-[9.5rem] sm:py-2.5"
                                >
                                  {t.openHouseOfficialBooking}
                                  <ExternalLink
                                    className="h-4 w-4 shrink-0 opacity-90"
                                    aria-hidden
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
