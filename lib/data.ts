/**
 * Curated secondary open-house rows for the DSA season (calendar + official deep links).
 * Prefer school DSA or open-house paths over bare homepages; confirm dates on each site.
 */

export type {
  OpenHouseMode,
  OpenHouseRegion,
  OpenHouseSchoolType,
  OpenHouseStatus,
  SchoolOpenHouse,
} from "./open-house-types";

export type {
  SchoolCopHistoryEntry,
  SchoolCopRegion,
  SchoolCopYearKey,
  SchoolCopYearMatrix,
  SchoolGender,
} from "./school-cop-types";

import type {
  OpenHouseStatus,
  SchoolOpenHouse,
} from "./open-house-types";
import { SCHOOL_COP_HISTORY_DATA } from "./school-cop-history-data";
import { SCHOOL_OPEN_HOUSES } from "./school-open-houses";

/** Secondary schools with AL-era COP rows (2023–2025), aligned to public reference tables. */
export const SCHOOL_COP_HISTORY = SCHOOL_COP_HISTORY_DATA;

export { SCHOOL_OPEN_HOUSES };

export function resolveOpenHouseStatus(
  ev: Pick<SchoolOpenHouse, "startsAt" | "endsAt">,
  reference: Date = new Date(),
): OpenHouseStatus {
  const start = Date.parse(ev.startsAt);
  const end = Date.parse(ev.endsAt);
  const t = reference.getTime();
  if (t < start) return "Upcoming";
  if (t <= end) return "Ongoing";
  return "Finished";
}

/** Row with computed `status` for components that prefer a flat field. */
export type SchoolOpenHouseHydrated = SchoolOpenHouse & {
  status: OpenHouseStatus;
};

export function withOpenHouseStatus(
  ev: SchoolOpenHouse,
  reference: Date = new Date(),
): SchoolOpenHouseHydrated {
  return { ...ev, status: resolveOpenHouseStatus(ev, reference) };
}

/** Calendar date in Asia/Singapore as `YYYY-MM-DD` (for comparisons with `SchoolOpenHouse.date`). */
export function toSingaporeDateKey(date: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Singapore",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

/** Next sessions whose Singapore calendar date is today or later, up to `limit`. */
export function getPreviewOpenHouseEvents(
  limit = 3,
  reference: Date = new Date(),
): SchoolOpenHouse[] {
  return upcomingOpenHouses(reference).slice(0, limit);
}

export function isOpenHouseDateCurrentOrFuture(
  ev: Pick<SchoolOpenHouse, "date">,
  reference: Date = new Date(),
): boolean {
  return ev.date >= toSingaporeDateKey(reference);
}

/** Rows whose Singapore calendar date is today or later. */
export function upcomingOpenHouses(
  reference: Date = new Date(),
): SchoolOpenHouse[] {
  return SCHOOL_OPEN_HOUSES.filter((ev) =>
    isOpenHouseDateCurrentOrFuture(ev, reference),
  ).sort((a, b) =>
    a.startsAt.localeCompare(b.startsAt),
  );
}

/** Group arbitrary open-house rows by calendar `date` (Singapore grouping key). */
export function openHouseEventsByDateFrom(
  rows: SchoolOpenHouse[],
): Map<string, SchoolOpenHouse[]> {
  const sorted = [...rows].sort((a, b) => {
    if (a.date !== b.date) return a.date.localeCompare(b.date);
    return a.startsAt.localeCompare(b.startsAt);
  });
  const map = new Map<string, SchoolOpenHouse[]>();
  for (const ev of sorted) {
    const list = map.get(ev.date) ?? [];
    list.push(ev);
    map.set(ev.date, list);
  }
  return map;
}

export function openHouseEventsByDate(): Map<string, SchoolOpenHouse[]> {
  return openHouseEventsByDateFrom(SCHOOL_OPEN_HOUSES);
}

export function upcomingOpenHouseEventsByDate(
  reference: Date = new Date(),
): Map<string, SchoolOpenHouse[]> {
  return openHouseEventsByDateFrom(upcomingOpenHouses(reference));
}

/**
 * Open houses with a confirmed past date (excludes TBC placeholders).
 * Returns events where date < today AND timeEn does not contain 'TBC'.
 * Sorted most-recent-first.
 */
export function recentlyCompletedOpenHouses(
  reference: Date = new Date(),
): SchoolOpenHouse[] {
  const todayKey = toSingaporeDateKey(reference);
  return SCHOOL_OPEN_HOUSES.filter(
    (ev) => ev.date < todayKey && !ev.timeEn.includes("TBC"),
  ).sort((a, b) => b.date.localeCompare(a.date));
}

/** All rows flagged as popular (名校). */
export function popularOpenHouses(): SchoolOpenHouse[] {
  return SCHOOL_OPEN_HOUSES.filter((ev) => ev.isPopular);
}
