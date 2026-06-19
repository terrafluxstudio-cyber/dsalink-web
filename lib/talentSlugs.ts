/**
 * Lightweight talent identifiers — slug union, slug list, adjacency map, count.
 *
 * Kept SEPARATE from lib/talentPages.ts (which holds the ~17k-line multilingual
 * TALENT_DATA). Client components that only need the count/slugs/adjacency import
 * from HERE so a single `TALENT_COUNT` import doesn't drag the entire TALENT_DATA
 * into the client bundle. talentPages.ts re-exports these for backward compat.
 */

export type TalentSlug =
  | "basketball"
  | "football"
  | "swimming"
  | "track-field"
  | "badminton"
  | "martial-arts"
  | "music"
  | "math"
  | "robotics"
  | "chinese"
  | "dance"
  | "drama"
  | "art"
  | "hockey"
  | "squash"
  | "leadership"
  | "volleyball"
  | "table-tennis"
  | "netball"
  | "floorball"
  | "choir"
  | "chinese-orchestra"
  | "tennis"
  | "wushu"
  | "water-polo"
  | "sailing"
  | "rugby"
  | "symphonic-band"
  | "mep"
  | "aep"
  | "bicultural"
  | "humanities"
  | "softball"
  | "shooting"
  | "bowling"
  | "cross-country"
  | "canoeing"
  | "tchoukball"
  | "uniformed-groups"
  | "science"
  | "debate"
  | "malay-language"
  | "guzheng"
  | "instrumental-ensembles"
  | "tamil-language"
  | "media-arts"
  | "computing"
  | "gymnastics"
  | "chinese-brush-arts"
  | "chess-mind"
  | "golf"
  | "climbing"
  | "outdoor-adventure"
  | "cricket";

export const TALENT_SLUGS: TalentSlug[] = [
  "basketball",
  "football",
  "swimming",
  "track-field",
  "badminton",
  "martial-arts",
  "music",
  "math",
  "robotics",
  "chinese",
  "dance",
  "drama",
  "art",
  "hockey",
  "squash",
  "leadership",
  "volleyball",
  "table-tennis",
  "netball",
  "floorball",
  "choir",
  "chinese-orchestra",
  "tennis",
  "wushu",
  "water-polo",
  "sailing",
  "rugby",
  "symphonic-band",
  "mep",
  "aep",
  "bicultural",
  "humanities",
  "softball",
  "shooting",
  "bowling",
  "cross-country",
  "canoeing",
  "tchoukball",
  "uniformed-groups",
  "science",
  "debate",
  "malay-language",
  "guzheng",
  "instrumental-ensembles",
  "tamil-language",
  "media-arts",
  "computing",
  "gymnastics",
  "chinese-brush-arts",
  "chess-mind",
  "golf",
  "climbing",
  "outdoor-adventure",
  "cricket",
];

/**
 * Total number of talent rich-content prep pages.
 * Auto-updates whenever a talent is added to TALENT_SLUGS.
 */
export const TALENT_COUNT: number = TALENT_SLUGS.length;

/**
 * Adjacency map for related-talent cards. Each talent recommends 2 nearest
 * neighbours by trial type / training-pattern overlap, plus a cross-cluster bridge.
 */
export const ADJACENT_TALENTS: Record<TalentSlug, [TalentSlug, TalentSlug]> = {
  basketball: ["football", "track-field"],
  football: ["basketball", "track-field"],
  swimming: ["track-field", "badminton"],
  "track-field": ["swimming", "football"],
  badminton: ["martial-arts", "swimming"],
  "martial-arts": ["badminton", "basketball"],
  music: ["math", "martial-arts"],
  math: ["chinese", "robotics"],
  robotics: ["math", "music"],
  chinese: ["math", "music"],
  dance: ["music", "drama"],
  drama: ["dance", "music"],
  art: ["drama", "dance"],
  hockey: ["football", "track-field"],
  squash: ["badminton", "martial-arts"],
  leadership: ["chinese", "drama"],
  volleyball: ["basketball", "badminton"],
  "table-tennis": ["badminton", "chinese"],
  netball: ["basketball", "volleyball"],
  floorball: ["hockey", "basketball"],
  choir: ["music", "drama"],
  "chinese-orchestra": ["music", "chinese"],
  tennis: ["badminton", "table-tennis"],
  wushu: ["martial-arts", "chinese"],
  "water-polo": ["swimming", "basketball"],
  sailing: ["swimming", "track-field"],
  rugby: ["football", "track-field"],
  "symphonic-band": ["music", "chinese-orchestra"],
  mep: ["music", "symphonic-band"],
  aep: ["art", "drama"],
  bicultural: ["chinese", "chinese-orchestra"],
  humanities: ["bicultural", "drama"],
  softball: ["basketball", "track-field"],
  shooting: ["martial-arts", "math"],
  bowling: ["shooting", "table-tennis"],
  "cross-country": ["track-field", "swimming"],
  canoeing: ["sailing", "swimming"],
  tchoukball: ["netball", "floorball"],
  "uniformed-groups": ["leadership", "humanities"],
  science: ["math", "robotics"],
  debate: ["humanities", "drama"],
  "malay-language": ["chinese", "humanities"],
  guzheng: ["chinese-orchestra", "chinese"],
  "instrumental-ensembles": ["symphonic-band", "music"],
  "tamil-language": ["malay-language", "chinese"],
  "media-arts": ["art", "drama"],
  computing: ["robotics", "math"],
  gymnastics: ["dance", "track-field"],
  "chinese-brush-arts": ["art", "chinese"],
  "chess-mind": ["math", "chinese"],
  golf: ["tennis", "bowling"],
  climbing: ["wushu", "track-field"],
  "outdoor-adventure": ["uniformed-groups", "leadership"],
  cricket: ["softball", "basketball"],
};
