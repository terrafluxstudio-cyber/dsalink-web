"use client";

import {
  Calendar,
  Clock,
  ExternalLink,
  GraduationCap,
  MapPin,
  Monitor,
} from "lucide-react";
import { useMemo } from "react";
import { SchoolDisplayName } from "@/components/SchoolDisplayName";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/i18n";
import {
  upcomingOpenHouseEventsByDate,
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

function pickTime(ev: SchoolOpenHouse, locale: Locale): string {
  if (locale === "zh") return ev.timeZh;
  return ev.timeEn;
}

export type OpenHouseListVariant = "embedded" | "page";

export function OpenHouseList({
  variant = "embedded",
}: {
  variant?: OpenHouseListVariant;
}) {
  const { locale, t } = useLanguage();
  const HeadingTag = variant === "page" ? "h1" : "h2";
  const DateHeadingTag = variant === "page" ? "h2" : "h3";
  const CardHeadingTag = variant === "page" ? "h3" : "h4";

  const groups = useMemo(() => {
    const map = upcomingOpenHouseEventsByDate();
    return Array.from(map.entries()).map(([date, events]) => ({
      date,
      events,
      heading: formatDateHeading(date, locale),
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

        {groups.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-intellectual/10 bg-card-shine p-6 text-sm font-medium text-intellectual-muted shadow-sm ring-1 ring-champagne/15 sm:text-base">
            {t.openHouseStayTuned}
          </div>
        ) : (
        <div className="mt-8 space-y-12">
          {groups.map(({ date, events, heading }) => (
            <div key={date}>
              <div className="mb-4 flex items-center gap-2 text-intellectual">
                <Calendar
                  className="h-4 w-4 shrink-0 text-champagne-dark"
                  aria-hidden
                />
                <DateHeadingTag className="text-sm font-semibold sm:text-base">
                  {heading}
                </DateHeadingTag>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {events.map((ev) => (
                  <li key={ev.id}>
                    <article className="group flex h-full flex-col rounded-2xl border border-intellectual/10 bg-card-shine p-5 shadow-sm ring-1 ring-champagne/15 transition hover:border-champagne/35 hover:shadow-soft sm:p-6">
                      <div className="flex items-start gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-intellectual/5 text-intellectual ring-1 ring-champagne/25 transition group-hover:bg-intellectual/[0.08]">
                          <GraduationCap className="h-5 w-5" aria-hidden />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2 gap-y-1">
                            <CardHeadingTag className="break-words font-display text-base font-semibold leading-snug text-intellectual sm:text-lg">
                              <SchoolDisplayName
                                locale={locale}
                                nameEn={ev.nameEn}
                                nameZh={ev.nameZh}
                              />
                            </CardHeadingTag>
                            <span
                              className={
                                ev.mode === "online"
                                  ? "inline-flex items-center gap-1 rounded-full border border-intellectual/15 bg-white/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-intellectual sm:text-xs"
                                  : "inline-flex items-center gap-1 rounded-full border border-champagne/40 bg-champagne-subtle/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-champagne-dark sm:text-xs"
                              }
                            >
                              {ev.mode === "online" ? (
                                <Monitor className="h-3 w-3" aria-hidden />
                              ) : null}
                              {ev.mode === "online"
                                ? t.openHouseOnline
                                : t.openHouseOnsite}
                            </span>
                          </div>
                        </div>
                      </div>

                      <dl className="mt-4 space-y-2 text-sm text-intellectual-muted">
                        <div className="flex gap-2">
                          <dt className="flex shrink-0 items-center gap-1.5 font-medium text-intellectual">
                            <Clock
                              className="h-4 w-4 text-champagne-dark"
                              aria-hidden
                            />
                            {t.openHouseTime}
                          </dt>
                          <dd className="leading-relaxed">
                            {pickTime(ev, locale)}
                          </dd>
                        </div>
                        <div className="flex gap-2">
                          <dt className="flex shrink-0 items-center gap-1.5 font-medium text-intellectual">
                            <MapPin
                              className="h-4 w-4 text-champagne-dark"
                              aria-hidden
                            />
                            {t.openHouseAddress}
                          </dt>
                          <dd className="leading-relaxed">{ev.address}</dd>
                        </div>
                      </dl>

                      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-intellectual/8 pt-4">
                        {ev.openHouseUrl && (
                          <a
                            href={ev.openHouseUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-champagne/20 px-4 py-2.5 text-center text-sm font-semibold text-champagne-light shadow-soft transition hover:bg-champagne/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:flex-initial sm:justify-start border border-champagne/30"
                          >
                            Open House
                            <ExternalLink className="h-4 w-4 opacity-90" aria-hidden />
                          </a>
                        )}
                        <a
                          href={ev.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-intellectual px-4 py-2.5 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-intellectual-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:flex-initial sm:justify-start"
                        >
                          {t.openHouseOfficialLink}
                          <ExternalLink className="h-4 w-4 opacity-90" aria-hidden />
                        </a>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
