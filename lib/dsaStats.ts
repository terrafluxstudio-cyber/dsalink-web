import dsaMasterRaw from "@/data/dsa_master_list.json";
import type { DsaCategory } from "@/constants/dsa_translations";

/**
 * Server-only aggregate stats over the MOE DSA SchoolFinder master list.
 * Computed at build from data/dsa_master_list.json. Keep this module out of any
 * client component — it pulls in the ~300KB master JSON.
 */

type RawTalent = { category: DsaCategory; area: string };
type RawSchool = { dsaTalents?: RawTalent[] };

export type DsaStats = {
  schools: number;
  /** total school × talent-area pairs */
  offerings: number;
  /** distinct talent-area names across all schools */
  distinctTalents: number;
  categories: { key: DsaCategory; schools: number; offerings: number }[];
  topTalents: { area: string; schools: number }[];
};

export function computeDsaStats(topN = 20): DsaStats {
  const data = dsaMasterRaw as RawSchool[];

  let offerings = 0;
  const distinct = new Set<string>();
  const areaSchools = new Map<string, number>();
  const catSchools = new Map<DsaCategory, number>();
  const catOfferings = new Map<DsaCategory, number>();

  for (const s of data) {
    const seenArea = new Set<string>();
    const seenCat = new Set<DsaCategory>();
    for (const t of s.dsaTalents ?? []) {
      offerings++;
      distinct.add(t.area);
      catOfferings.set(t.category, (catOfferings.get(t.category) ?? 0) + 1);
      if (!seenArea.has(t.area)) {
        areaSchools.set(t.area, (areaSchools.get(t.area) ?? 0) + 1);
        seenArea.add(t.area);
      }
      seenCat.add(t.category);
    }
    for (const c of seenCat) catSchools.set(c, (catSchools.get(c) ?? 0) + 1);
  }

  const categories = [...catSchools.entries()]
    .map(([key, schools]) => ({ key, schools, offerings: catOfferings.get(key) ?? 0 }))
    .sort((a, b) => b.schools - a.schools);

  const topTalents = [...areaSchools.entries()]
    .map(([area, schools]) => ({ area, schools }))
    .sort((a, b) => b.schools - a.schools || a.area.localeCompare(b.area))
    .slice(0, topN);

  return {
    schools: data.length,
    offerings,
    distinctTalents: distinct.size,
    categories,
    topTalents,
  };
}
