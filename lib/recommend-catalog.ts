import dsaMasterList from "@/data/dsa_master_list.json";
import type { TalentCategory } from "@/lib/talent-assessment";

interface DsaTalent {
  category: string;
  area: string;
}

interface DsaMasterSchool {
  dsaTalents: DsaTalent[];
}

const MASTER = dsaMasterList as DsaMasterSchool[];

/**
 * Curated arts area list for the wizard — shows what students do,
 * not school-side combined labels. Matching logic handles the rest.
 */
const ARTS_AREAS_CURATED: string[] = [
  // Dance
  "Ballet",
  "Chinese Dance",
  "Modern Dance",
  "Indian Dance",
  "Malay Dance",
  "Jazz Dance",
  "Tap Dance",
  "Western Dance",
  "Lion and Dragon Dance",
  "Dance",
  // Music
  "Choir",
  "Concert Band",
  "Marching Band",
  "Military Band",
  "Chinese Orchestra",
  "Chinese Instrumental Ensemble",
  "Guzheng Ensemble",
  "Guitar Ensemble",
  "Handbell Ensemble",
  "Harmonica Ensemble",
  "Harp Ensemble",
  "Angklung/Kulintang Ensemble",
  "Percussion Ensemble",
  "String Ensemble",
  "Music",
  "Music Elective Programme",
  // Visual & Literary Arts
  "Art",
  "Art & Design",
  "Art Elective Programme",
  "Chinese Calligraphy",
  "Chinese Painting",
  "Digital Media",
  "Media",
  "Media Arts / Film / Photography",
  "Visual and Digital Arts",
  "Visual Arts",
  // Drama & Theatre
  "Chinese Drama",
  "English Drama",
  "Theatre",
  "Chinese Language, Drama and Debating",
];

const UNIFORMED_PATTERN =
  /\b(ncc|npcc|ncdcc|scouts|st john|boys brigade|girls brigade|red cross|cadet corps)\b/i;
const DEBATE_PATTERN = /\b(debate|oratory|public speaking|scrabble)\b/i;

export interface MoeTalentCategory {
  id: TalentCategory;
  label: string;
}

export const MOE_TALENT_CATEGORIES: MoeTalentCategory[] = [
  { id: "sports", label: "Sports & Games" },
  { id: "arts", label: "Visual, Literary & Performing Arts" },
  { id: "debate", label: "Debate & Public Speaking" },
  { id: "stem", label: "Science, Maths & Engineering" },
  { id: "languages", label: "Languages & Humanities" },
  { id: "uniformed", label: "Uniformed Groups" },
  { id: "leadership", label: "Leadership" },
];

function collectAreas(predicate: (talent: DsaTalent) => boolean): string[] {
  const areas = new Set<string>();
  for (const school of MASTER) {
    for (const talent of school.dsaTalents) {
      if (predicate(talent)) areas.add(talent.area);
    }
  }
  return [...areas].sort((a, b) => a.localeCompare(b));
}

export function getAreasForCategory(category: TalentCategory): string[] {
  switch (category) {
    case "sports":
      return collectAreas((t) => t.category === "Sports");
    case "arts":
      return ARTS_AREAS_CURATED;
    case "stem":
      return collectAreas((t) => t.category === "STEM");
    case "debate":
      return collectAreas((t) => DEBATE_PATTERN.test(t.area));
    case "languages":
      return collectAreas(
        (t) => t.category === "Languages" && !DEBATE_PATTERN.test(t.area),
      );
    case "uniformed":
      return collectAreas(
        (t) => t.category === "Leadership" && UNIFORMED_PATTERN.test(t.area),
      );
    case "leadership":
      return collectAreas(
        (t) => t.category === "Leadership" && !UNIFORMED_PATTERN.test(t.area),
      );
    default:
      return [];
  }
}

export function getCategoryLabel(category: TalentCategory): string {
  return MOE_TALENT_CATEGORIES.find((c) => c.id === category)?.label ?? category;
}
