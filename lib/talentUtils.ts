import { getAllTalentPages } from "@/lib/talentPages";

/**
 * Normalize a talent-area name so school/finder labels can be matched against
 * the 54 prep-page slugs. Strips parenthetical qualifiers (Boys/Girls/CLE…),
 * normalizes "&"→"and", and collapses punctuation to single spaces.
 *   "Basketball (Boys)"  → "basketball"
 *   "Track & Field"      → "track and field"
 */
function normalizeTalentArea(name: string): string {
  return name
    .toLowerCase()
    .replace(/\([^)]*\)/g, " ")
    .replace(/&/g, "and")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Hand-verified aliases for common finder/school names whose wording doesn't
 * normalize to a prep-page label. Each value MUST be a real TALENT_SLUGS slug.
 */
const ALIASES: Record<string, string> = {
  "concert band": "symphonic-band",
  "symphonic band": "symphonic-band",
  "debating and public speaking": "debate",
  debating: "debate",
  "public speaking": "debate",
  "chinese language": "chinese",
  "higher chinese": "chinese",
  "art elective programme": "aep",
  "music elective programme": "mep",
};

let areaMap: Map<string, string> | null = null;
function buildMap(): Map<string, string> {
  const m = new Map<string, string>();
  for (const p of getAllTalentPages()) {
    m.set(normalizeTalentArea(p.navLabel.en), p.slug);
    m.set(normalizeTalentArea(p.slug.replace(/-/g, " ")), p.slug);
  }
  const valid = new Set(m.values());
  for (const [alias, slug] of Object.entries(ALIASES)) {
    if (valid.has(slug)) m.set(alias, slug);
  }
  return m;
}

/**
 * Conservatively map a raw talent-area name to a prep-page slug.
 * Exact normalized match only — returns null when there is no confident match
 * (callers should then render plain text, not a broken link).
 */
export function resolveTalentSlug(area: string | null | undefined): string | null {
  if (!area) return null;
  const n = normalizeTalentArea(area);
  if (n.length < 3) return null;
  if (!areaMap) areaMap = buildMap();
  return areaMap.get(n) ?? null;
}
