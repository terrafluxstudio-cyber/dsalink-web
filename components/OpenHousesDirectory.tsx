"use client";

import { Calendar, Clock, ExternalLink, MapPin, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { OpenHouseInlineCta } from "@/components/OpenHouseInlineCta";
import { PageHeader } from "@/components/PageHeader";
import { SchoolDisplayName } from "@/components/SchoolDisplayName";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Copy, Locale } from "@/lib/i18n";
import {
  resolveOpenHouseStatus,
  SCHOOL_OPEN_HOUSES,
  type OpenHouseRegion,
  type OpenHouseStatus,
  type SchoolOpenHouse,
} from "@/lib/data";
import { SchoolLogo } from "@/components/SchoolLogo";

const REGIONS: OpenHouseRegion[] = [
  "North",
  "South",
  "East",
  "West",
  "Central",
];

type ProgramKey = "IP" | "SAP" | "OLEVEL";

const INITIAL_VISIBLE = 16;
const LOAD_MORE_STEP = 36;
const TBC_RANK = 2;
const PAST_RANK = 1;

const TAKEAWAYS_MAP: Record<string, string> = {
  "singapore-chinese-girls-school": "scgs",
  "nus-high-school-of-mathematics-and-science": "nushigh",
  "catholic-high-school": "chs",
  "st-andrews-school": "sas",
  "paya-lebar-methodist-girls-school": "plmgs",
  "national-junior-college": "njc",
  "chij-st-nicholas-girls-school": "sngs",
  "anglican-high-school": "ahs",
};

/** Returns an i18n key for the urgency tag, or null if no urgency applies.
 *  Uses SGT (UTC+8) calendar-day comparison so "Today/Tomorrow" always
 *  matches the Singapore date, not a rolling 24/48-hour window. */
function getUrgencyTagKey(ev: SchoolOpenHouse): keyof Copy | null {
  const now = Date.now();
  const start = Date.parse(ev.startsAt);
  const end = Date.parse(ev.endsAt);
  if (end <= now) return null; // past
  if (start <= now) return "openHouseStatusOngoing";

  // Shift to SGT (UTC+8) for calendar-day arithmetic
  const SGT = 8 * 60 * 60 * 1000;
  const todaySGT = new Date(now + SGT);
  const startSGT = new Date(start + SGT);

  // Truncate to midnight UTC (= midnight SGT after the shift above)
  const todayMidnight = Date.UTC(todaySGT.getUTCFullYear(), todaySGT.getUTCMonth(), todaySGT.getUTCDate());
  const startMidnight = Date.UTC(startSGT.getUTCFullYear(), startSGT.getUTCMonth(), startSGT.getUTCDate());
  const diffDays = Math.round((startMidnight - todayMidnight) / 86_400_000);

  if (diffDays === 0) return "openHouseUrgencyToday";
  if (diffDays === 1) return "openHouseUrgencyTomorrow";
  const dow = startSGT.getUTCDay(); // 0=Sun, 6=Sat
  if (diffDays <= 7 && dow === 6) return "openHouseUrgencyThisSat";
  if (diffDays <= 7 && dow === 0) return "openHouseUrgencyThisSun";
  if (diffDays <= 7) return "openHouseUrgencyThisWeek";
  return null;
}

function regionLabel(region: OpenHouseRegion, t: Copy): string {
  switch (region) {
    case "North":
      return t.openHouseRegionNorth;
    case "South":
      return t.openHouseRegionSouth;
    case "East":
      return t.openHouseRegionEast;
    case "West":
      return t.openHouseRegionWest;
    default:
      return t.openHouseRegionCentral;
  }
}

function isOLevelTrack(ev: SchoolOpenHouse): boolean {
  return (
    ev.schoolType === "Government" ||
    ev.schoolType === "Government-aided" ||
    ev.schoolType === "Independent"
  );
}

function matchesProgram(ev: SchoolOpenHouse, selected: Set<ProgramKey>): boolean {
  if (selected.size === 0) return true;
  if (selected.has("IP") && ev.schoolType === "IP") return true;
  if (selected.has("SAP") && ev.schoolType === "SAP") return true;
  if (selected.has("OLEVEL") && isOLevelTrack(ev)) return true;
  return false;
}

function matchesRegion(ev: SchoolOpenHouse, selected: Set<OpenHouseRegion>): boolean {
  if (selected.size === 0) return true;
  return selected.has(ev.region);
}

function normalize(s: string): string {
  return s.trim().toLowerCase();
}

function matchesSearch(ev: SchoolOpenHouse, q: string): boolean {
  if (!q) return true;
  const n = normalize(q);
  return (
    normalize(ev.nameEn).includes(n) || normalize(ev.nameZh).includes(n)
  );
}

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

function pickTime(ev: SchoolOpenHouse, locale: Locale): string {
  if (locale === "zh") return ev.timeZh;
  return ev.timeEn;
}

function formatResultsSummary(t: Copy, shown: number, total: number): string {
  return t.openHouseResultsSummary
    .replace("{{shown}}", String(shown))
    .replace("{{total}}", String(total));
}

function isTbcOpenHouse(ev: SchoolOpenHouse): boolean {
  return Boolean(
    ev.dateDisplayEn?.toLowerCase().includes("tbc") ||
      ev.dateDisplayZh?.includes("待定") ||
      ev.timeEn.toLowerCase().includes("tbc") ||
      ev.timeZh.includes("待定"),
  );
}

function sortOpenHousesByDate(
  rows: SchoolOpenHouse[],
  reference: Date = new Date(),
): SchoolOpenHouse[] {
  const now = reference.getTime();

  return [...rows].sort((a, b) => {
    const aTbc = isTbcOpenHouse(a);
    const bTbc = isTbcOpenHouse(b);
    const aStart = Date.parse(a.startsAt);
    const bStart = Date.parse(b.startsAt);
    const aEnd = Date.parse(a.endsAt);
    const bEnd = Date.parse(b.endsAt);
    const aPast = !aTbc && aEnd < now;
    const bPast = !bTbc && bEnd < now;
    const aRank = aPast ? PAST_RANK : aTbc ? TBC_RANK : 0;
    const bRank = bPast ? PAST_RANK : bTbc ? TBC_RANK : 0;

    if (aRank !== bRank) return aRank - bRank;
    if (aRank === 0 && aStart !== bStart) return aStart - bStart;
    if (aRank === PAST_RANK && aStart !== bStart) return bStart - aStart;
    if (a.isPopular !== b.isPopular) return a.isPopular ? -1 : 1;
    return a.nameEn.localeCompare(b.nameEn, "en");
  });
}

function formatDateBadge(ev: SchoolOpenHouse, locale: Locale): string {
  if (isTbcOpenHouse(ev)) {
    if (locale === "zh") return ev.dateDisplayZh ?? "2026年5月（待定）";
    return ev.dateDisplayEn ?? "May 2026 (TBC)";
  }

  const instant = new Date(`${ev.date}T12:00:00+08:00`);
  return new Intl.DateTimeFormat(locale === "zh" ? "zh-Hans-SG" : "en-SG", {
    day: "numeric",
    month: "short",
  }).format(instant);
}

export function OpenHousesDirectory() {
  const { locale, t } = useLanguage();
  const [search, setSearch] = useState("");
  const [regions, setRegions] = useState<Set<OpenHouseRegion>>(() => new Set());
  const [programs, setPrograms] = useState<Set<ProgramKey>>(() => new Set());
  const [visible, setVisible] = useState(INITIAL_VISIBLE);

  const openHouses = useMemo(() => sortOpenHousesByDate(SCHOOL_OPEN_HOUSES), []);

  const filteredSorted = useMemo(() => {
    return sortOpenHousesByDate(
      openHouses.filter(
        (ev) =>
          matchesSearch(ev, search) &&
          matchesRegion(ev, regions) &&
          matchesProgram(ev, programs),
      ),
    );
  }, [search, regions, programs, openHouses]);

  useEffect(() => {
    setVisible(INITIAL_VISIBLE);
  }, [search, regions, programs]);

  const shown = filteredSorted.slice(0, visible);
  const hasMore = visible < filteredSorted.length;

  function toggleRegion(r: OpenHouseRegion) {
    setRegions((prev) => {
      const next = new Set(prev);
      if (next.has(r)) next.delete(r);
      else next.add(r);
      return next;
    });
  }

  function toggleProgram(p: ProgramKey) {
    setPrograms((prev) => {
      const next = new Set(prev);
      if (next.has(p)) next.delete(p);
      else next.add(p);
      return next;
    });
  }

  return (
    <section
      id="open-houses"
      className="w-full scroll-mt-24"
      aria-labelledby="open-houses-heading"
    >
      <PageHeader
        headingId="open-houses-heading"
        crumbLabel="Open Houses"
        kicker={t.openHouseKicker}
        title={t.sectionOpenHouseTitle}
        subtitle={t.sectionOpenHouseDesc}
      />
      <div className="border-b border-intellectual/20 bg-intellectual px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-[1.625rem] font-extrabold leading-none text-champagne">147</span>
            <span className="text-[0.8125rem] text-white/70">
              {locale === "zh" ? "所中学" : "secondary schools"}
            </span>
          </div>
          <div className="hidden h-4 w-px bg-white/20 sm:block" />
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-[1.625rem] font-extrabold leading-none text-champagne">
              {locale === "zh" ? "2026年5月" : "May 2026"}
            </span>
            <span className="text-[0.8125rem] text-white/70">
              {locale === "zh" ? "· 全岛开放日" : "· island-wide open houses"}
            </span>
          </div>
          <div className="hidden h-4 w-px bg-white/20 sm:block" />
          <div className="flex items-baseline gap-1.5">
            <span className="text-[0.8125rem] text-white/70">
              {locale === "zh" ? "DSA & 招生直链" : "DSA & admissions links"}
            </span>
          </div>
          <Link
            href="https://www.moe.gov.sg/secondary/schools"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 transition hover:border-white/40 hover:bg-white/20"
          >
            <span className="text-[0.6875rem] font-semibold tracking-wide text-white/80">MOE Directory · 2026 ↗</span>
          </Link>
        </div>
      </div>
      {/* Takeaways banner */}
      <div className="border-b border-champagne/40 bg-champagne/10 px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
          <p className="text-sm font-semibold text-champagne-dark">✦ {t.ohBannerText}</p>
          <Link
            href="/open-house-takeaways"
            className="shrink-0 rounded-lg bg-champagne px-4 py-2 text-sm font-bold text-intellectual shadow-gold transition hover:bg-champagne-light"
          >
            {t.ohBannerCta}
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 sm:pb-20">
      <div className="mt-4 space-y-3 sm:mt-6 sm:space-y-4">
        <label className="relative block">
          <span className="sr-only">{t.openHouseSearchAria}</span>
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-champagne-dark opacity-80 sm:left-4 sm:h-6 sm:w-6"
            aria-hidden
          />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.openHouseSearchPlaceholder}
            autoComplete="off"
            className="w-full rounded-2xl border-2 border-intellectual/12 bg-white py-3 pl-11 pr-4 text-base font-medium text-intellectual shadow-sm outline-none ring-champagne/30 transition placeholder:text-intellectual-muted/70 focus:border-champagne/50 focus:ring-2 sm:py-4 sm:pl-14 sm:text-lg"
          />
        </label>

        <div className="rounded-xl border border-intellectual/10 bg-slate-50/90 p-2.5 sm:p-4 flex items-start gap-4 sm:gap-8">
          <div>
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-champagne-dark sm:mb-2 sm:text-xs">
            {t.openHouseFiltersRegion}
          </p>
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {REGIONS.map((r) => {
              const on = regions.has(r);
              return (
                <button
                  key={r}
                  type="button"
                  onClick={() => toggleRegion(r)}
                  className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition sm:px-3 sm:py-1.5 sm:text-sm ${
                    on
                      ? "bg-intellectual text-white shadow-sm"
                      : "border border-intellectual/12 bg-white text-intellectual-muted hover:border-champagne/40"
                  }`}
                >
                  {regionLabel(r, t)}
                </button>
              );
            })}
          </div>
          </div>

          <div className="border-l border-intellectual/10 pl-4 sm:pl-8">
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-champagne-dark sm:mb-2 sm:text-xs">
            {t.openHouseFiltersProgram}
          </p>
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {(
              [
                ["IP", t.openHouseProgramIP],
                ["SAP", t.openHouseProgramSAP],
                ["OLEVEL", t.openHouseProgramOLevel],
              ] as const
            ).map(([key, label]) => {
              const on = programs.has(key);
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => toggleProgram(key)}
                  className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold transition sm:px-3 sm:py-1.5 sm:text-sm ${
                    on
                      ? "bg-intellectual text-white shadow-sm"
                      : "border border-intellectual/12 bg-white text-intellectual-muted hover:border-champagne/40"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          </div>
        </div>
      </div>

      {openHouses.length === 0 ? (
        <p className="mt-3 text-[11px] text-intellectual-muted sm:mt-4 sm:text-sm">{t.openHouseStayTuned}</p>
      ) : filteredSorted.length === 0 ? (
        <p className="mt-3 text-[11px] text-intellectual-muted sm:mt-4 sm:text-sm">{t.openHouseNoResults}</p>
      ) : null}

      {filteredSorted.length > 0 ? (
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-champagne/30 bg-champagne-subtle/45 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-champagne-dark sm:mt-4 sm:text-xs">
          <Calendar className="h-3.5 w-3.5" aria-hidden />
          {t.openHouseSortedByDate}
        </div>
      ) : null}

      {/* ── Email capture CTA ── */}
      <OpenHouseInlineCta />

      <ul className="mt-2 divide-y divide-intellectual/8 border-t border-intellectual/8 sm:mt-3">
        {shown.map((ev) => {
          const status = resolveOpenHouseStatus(ev);
          const dateBadge = formatDateBadge(ev, locale);
          const urgencyKey = getUrgencyTagKey(ev);
          return (
            <li key={ev.id} className="list-none py-2.5 sm:py-4">
              <article
                id={`open-house-${ev.id}`}
                className="flex gap-2 sm:gap-4"
              >
                <div className="min-w-0 flex-1 space-y-1 sm:space-y-1.5">
                  <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
                    <span className="inline-flex items-center gap-1 rounded-xl border border-champagne/35 bg-champagne-subtle/55 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-champagne-dark shadow-sm sm:text-xs">
                      <Calendar className="h-3 w-3" aria-hidden />
                      {dateBadge}
                    </span>
                    {urgencyKey && (
                      <span className="inline-flex items-center rounded-full bg-red-500 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white sm:text-[10px]">
                        {t[urgencyKey]}
                      </span>
                    )}
                    <SchoolLogo schoolId={ev.id} nameEn={ev.nameEn} size={28} />
                    <h2 className="break-words font-display text-sm font-semibold leading-snug text-intellectual sm:text-base">
                      <SchoolDisplayName
                        locale={locale}
                        nameEn={ev.nameEn}
                        nameZh={ev.nameZh}
                      />
                    </h2>
                    {ev.isPopular ? (
                      <span className="rounded-full border border-champagne/55 bg-champagne-subtle/80 px-1.5 py-px text-[9px] font-semibold text-champagne-dark sm:text-[10px]">
                        {t.openHouseBadgePopular}
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[10px] text-intellectual-muted sm:text-xs">
                    <span className="rounded bg-white/80 px-1 py-px ring-1 ring-intellectual/10">
                      {regionLabel(ev.region, t)}
                    </span>
                    <span className="rounded bg-white/80 px-1 py-px ring-1 ring-intellectual/10">
                      {ev.schoolType}
                    </span>
                    <span
                      className={
                        ev.mode === "online"
                          ? "rounded bg-white/80 px-1 py-px ring-1 ring-intellectual/10"
                          : "rounded bg-champagne-subtle/40 px-1 py-px ring-1 ring-champagne/25"
                      }
                    >
                      {ev.mode === "online"
                        ? t.openHouseOnline
                        : t.openHouseOnsite}
                    </span>
                    <span
                      className={
                        status === "Ongoing"
                          ? "font-semibold text-champagne-dark"
                          : ""
                      }
                    >
                      {statusLabel(status, t)}
                    </span>
                  </div>
                  <p className="flex items-start gap-1 text-[10px] text-intellectual sm:text-xs">
                    <Clock
                      className="mt-0.5 h-3 w-3 shrink-0 text-champagne-dark"
                      aria-hidden
                    />
                    <span className="line-clamp-2 sm:line-clamp-none">
                      {pickTime(ev, locale)}
                    </span>
                  </p>
                  <p className="flex items-start gap-1 text-[10px] text-intellectual-muted sm:text-xs">
                    <MapPin
                      className="mt-0.5 h-3 w-3 shrink-0 text-champagne-dark"
                      aria-hidden
                    />
                    <span className="line-clamp-1">{ev.address}</span>
                  </p>
                </div>
                <div className="flex shrink-0 flex-col items-end justify-center gap-1.5">
                  {(() => {
                    const takeawaysId = TAKEAWAYS_MAP[ev.id];
                    const isPast = Date.parse(ev.endsAt) < Date.now();
                    if (!isPast || !takeawaysId) return null;
                    return (
                      <Link
                        href={`/open-house-takeaways#school-${takeawaysId}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-champagne/50 bg-champagne/15 text-champagne-dark shadow-sm transition hover:bg-champagne/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:h-auto sm:w-auto sm:gap-2 sm:px-3 sm:py-2"
                      >
                        <span className="hidden text-xs font-semibold leading-tight sm:inline">
                          {t.ohMissedTakeawaysBtn}
                        </span>
                        <span className="text-[10px] font-bold sm:hidden">?</span>
                      </Link>
                    );
                  })()}
                  {ev.openHouseUrl && Date.parse(ev.endsAt) >= Date.now() && (
                    <a
                      href={ev.openHouseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open House"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-champagne/20 text-champagne-light border border-champagne/30 shadow-sm transition hover:bg-champagne/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2"
                    >
                      <ExternalLink className="h-4 w-4 sm:h-4 sm:w-4" aria-hidden />
                      <span className="hidden max-w-[6.5rem] text-center text-xs font-semibold leading-tight sm:inline">
                        Open House
                      </span>
                    </a>
                  )}
                  {(() => {
                    const label = ev.isHomepageOnly ? t.openHouseSchoolLink : t.openHouseOfficialBooking;
                    return (
                      <a
                        href={ev.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={label}
                        aria-label={label}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-intellectual text-white shadow-sm transition hover:bg-intellectual-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2.5"
                      >
                        <ExternalLink className="h-4 w-4 sm:h-4 sm:w-4" aria-hidden />
                        <span className="hidden max-w-[6.5rem] text-center text-xs font-semibold leading-tight sm:inline">
                          {label}
                        </span>
                      </a>
                    );
                  })()}
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      {filteredSorted.length > 0 && hasMore ? (
        <div className="mt-4 flex justify-center sm:mt-6">
          <button
            type="button"
            onClick={() => setVisible((v) => v + LOAD_MORE_STEP)}
            className="rounded-xl border-2 border-champagne/45 bg-gradient-to-b from-white to-champagne-subtle/40 px-6 py-2.5 text-sm font-semibold text-intellectual shadow-sm transition hover:border-champagne"
          >
            {t.openHouseLoadMore}
          </button>
        </div>
      ) : null}

      {filteredSorted.length > 0 && !hasMore && filteredSorted.length > INITIAL_VISIBLE ? (
        <p className="mt-3 text-center text-[11px] text-intellectual-muted sm:text-sm">
          {t.openHouseListComplete}
        </p>
      ) : null}
      </div>
    </section>
  );
}
