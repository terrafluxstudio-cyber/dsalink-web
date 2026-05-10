export type SchoolCopRegion = "North" | "South" | "East" | "West" | "Central";

export type SchoolCopProgramType = "IP" | "SAP" | "G3" | "G2" | "G1";

/** One academic year's posting COP in AL notation (ranges or merit bands like 9M). */
export type SchoolCopYearScores = {
  /** O-Level / non-IP / mainstream posting COP */
  nonIp?: string;
  /** Integrated Programme posting COP when applicable */
  ip?: string;
};

export type SchoolCopYearKey = "2021" | "2022" | "2023" | "2024" | "2025";

export type SchoolCopHistoryEntry = {
  id: string;
  nameEn: string;
  nameCn: string;
  region: SchoolCopRegion;
  type: SchoolCopProgramType;
  /** 特选 SAP（可与 type 冗余，便于筛选与徽标） */
  isSap: boolean;
  /** 附属学校 / 教会等同系加分档（展示用） */
  affiliatedCOP: boolean;
  history: Record<SchoolCopYearKey, SchoolCopYearScores>;
};
