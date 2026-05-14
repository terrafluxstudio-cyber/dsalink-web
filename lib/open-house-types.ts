/**
 * Shared types for secondary open-house / DSA calendar rows.
 */

export type OpenHouseMode = "on-site" | "online";

/** Lifecycle label from {@link resolveOpenHouseStatus} (compute at render; do not store on rows). */
export type OpenHouseStatus = "Upcoming" | "Ongoing" | "Finished";

export type OpenHouseRegion = "North" | "South" | "East" | "West" | "Central";

export type OpenHouseSchoolType =
  | "Government"
  | "Government-aided"
  | "Independent"
  | "SAP"
  | "IP";

export type SchoolOpenHouse = {
  id: string;
  /** Calendar bucket for grouping (Singapore local date), e.g. 2026-05-23 */
  date: string;
  /** Inclusive start instant, SGT (ISO 8601 with +08:00). */
  startsAt: string;
  /** Inclusive end instant, SGT (ISO 8601 with +08:00). */
  endsAt: string;
  nameEn: string;
  nameZh: string;
  timeEn: string;
  timeZh: string;
  address: string;
  mode: OpenHouseMode;
  /**
   * Official deep link — DSA, admissions, or (if unavailable) MOE SchoolFinder profile.
   */
  sourceUrl: string;
  region: OpenHouseRegion;
  schoolType: OpenHouseSchoolType;
  /** Highlight for “popular / 名校” filters in the UI. */
  isPopular: boolean;
  /** Optional calendar heading override when the open-house date is not finalised. */
  dateDisplayEn?: string;
  dateDisplayZh?: string;
  /** True when sourceUrl is only the school homepage — no dedicated open house / DSA page found. */
  isHomepageOnly?: boolean;
};
