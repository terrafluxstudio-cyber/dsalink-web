export type SchoolCopRegion = "North" | "South" | "East" | "West" | "Central";

/** Posting years under full AL (Achievement Level) regime — no T-score era. */
export type SchoolCopYearKey = "2023" | "2024" | "2025";

export type SchoolGender = "boys" | "girls" | "coed";

/**
 * One academic year’s COP slices: headline indicative, IP (if any), and posting-group bands.
 * G3 ≈ Express posting group, G2 / G1 per MOE posting groups (N/A & N/T pathways).
 */
export type SchoolCopYearMatrix = {
  /** Headline non-IP indicative COP cell (may include M/P/D merit bands) */
  indicativeNonIp?: string;
  /** Integrated Programme COP when the school offers IP */
  ip?: string;
  g3NonAffiliated?: string;
  g3Affiliated?: string;
  g2?: string;
  g1?: string;
};

export type SchoolCopHistoryEntry = {
  id: string;
  nameEn: string;
  nameCn: string;
  region: SchoolCopRegion;
  gender: SchoolGender;
  offersIp: boolean;
  isSap: boolean;
  isAutonomous: boolean;
  /** 仅 2023–2025；数据主要对齐 indigo.com.sg AL 表 */
  byYear: Record<SchoolCopYearKey, SchoolCopYearMatrix>;
};
