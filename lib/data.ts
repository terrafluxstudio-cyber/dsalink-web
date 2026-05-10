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
  SchoolCopProgramType,
  SchoolCopRegion,
  SchoolCopYearKey,
  SchoolCopYearScores,
} from "./school-cop-types";

import type {
  OpenHouseStatus,
  SchoolOpenHouse,
} from "./open-house-types";
import { SCHOOL_COP_HISTORY_DATA } from "./school-cop-history-data";
import { SCHOOL_OPEN_HOUSES } from "./school-open-houses";

/** 150+ secondary schools with five-year AL-style COP rows (2021–2025). */
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

/**
 * Next sessions that are not finished yet, up to `limit`.
 * If every session has ended, returns the last `limit` rows (most recent).
 */
export function getPreviewOpenHouseEvents(
  limit = 3,
  reference: Date = new Date(),
): SchoolOpenHouse[] {
  const sorted = [...SCHOOL_OPEN_HOUSES].sort((a, b) =>
    a.startsAt.localeCompare(b.startsAt),
  );
  const active = sorted.filter(
    (ev) => resolveOpenHouseStatus(ev, reference) !== "Finished",
  );
  if (active.length >= limit) return active.slice(0, limit);
  if (active.length > 0) return active;
  return sorted.slice(-Math.min(limit, sorted.length));
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

/** All rows flagged as popular (名校). */
export function popularOpenHouses(): SchoolOpenHouse[] {
  return SCHOOL_OPEN_HOUSES.filter((ev) => ev.isPopular);
}
