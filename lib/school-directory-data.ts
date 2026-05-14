import { SCHOOL_PROFILES, type SchoolProfile } from "./school-profiles";
import { SCHOOL_OPEN_HOUSES } from "./school-open-houses";

export type { SchoolProfile };

export type SchoolDirectoryEntry = SchoolProfile & {
  dsaUrl: string;
  region: string;
};

const dsaUrlByName = new Map<string, string>();
const regionByName = new Map<string, string>();
for (const oh of SCHOOL_OPEN_HOUSES) {
  if (!dsaUrlByName.has(oh.nameEn)) dsaUrlByName.set(oh.nameEn, oh.sourceUrl);
  if (!regionByName.has(oh.nameEn)) regionByName.set(oh.nameEn, oh.region);
}

export const SCHOOL_DIRECTORY: SchoolDirectoryEntry[] = SCHOOL_PROFILES.map((p) => ({
  ...p,
  dsaUrl: dsaUrlByName.get(p.nameEn) ?? p.officialWebsite,
  region: regionByName.get(p.nameEn) ?? "",
})).sort((a, b) => a.nameEn.localeCompare(b.nameEn));
