import { SCHOOL_PROFILES } from "@/lib/school-profiles";

/**
 * Normalize a school name string for fuzzy lookup.
 * Used to match talent-page school name variants ("Bedok View Secondary",
 * "Saint Joseph's Institution", "Hwa Chong Institution — Judo / Taekwondo")
 * to canonical SCHOOL_PROFILES.nameEn ("Bedok View Secondary School", etc.).
 */
function normalize(name: string): string {
  return name
    .toLowerCase()
    // strip trailing subtitle after em-dash, en-dash, hyphen, or middle dot (with surrounding spaces)
    .replace(/\s*[—–·-]\s+.*$/u, "")
    // drop "(Secondary)" parenthetical (e.g. "Methodist Girls' School (Secondary)")
    .replace(/\s*\(secondary\)\s*/g, " ")
    // "Saint" → "st"; "Government" → "govt"
    .replace(/\bsaint\b/g, "st")
    .replace(/\bgovernment\b/g, "govt")
    // strip trailing periods on abbreviations (e.g. "St." → "St", "Govt." → "Govt")
    .replace(/\.(\s|$)/g, "$1")
    // collapse whitespace
    .replace(/\s+/g, " ")
    .trim();
}

const NAME_TO_ID = new Map<string, string>();
for (const s of SCHOOL_PROFILES) {
  NAME_TO_ID.set(normalize(s.nameEn), s.id);
}

/**
 * Resolve a school name (possibly with variant spelling / suffix) to a
 * canonical SCHOOL_PROFILES.id. Returns undefined if no match.
 *
 * Tries (in order):
 *   1. exact normalized match
 *   2. with " school" suffix appended (for "Bedok View Secondary")
 *   3. with " school" suffix stripped (for "Methodist Girls' School Secondary")
 */
export function resolveSchoolId(name: string): string | undefined {
  const n = normalize(name);
  const direct = NAME_TO_ID.get(n);
  if (direct) return direct;

  // try + " school"
  const withSchool = NAME_TO_ID.get(`${n} school`);
  if (withSchool) return withSchool;

  // try strip trailing " school"
  const stripped = n.replace(/\s+school$/, "").trim();
  const noSchool = NAME_TO_ID.get(stripped);
  if (noSchool) return noSchool;

  return undefined;
}
