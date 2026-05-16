import dsaMasterList from "@/data/dsa_master_list.json";
import { SCHOOL_COP_HISTORY_DATA } from "@/lib/school-cop-history-data";
import primaryCcaPool from "@/data/primary-cca-pool.json";
import {
  assessTalent,
  type TalentAssessmentInput,
  type TalentAssessmentResult,
  type TalentTier,
  type TalentCategory,
} from "@/lib/talent-assessment";
import type { SchoolCopHistoryEntry } from "@/lib/school-cop-types";

// ── Local types for JSON casting ─────────────────────────────────────────────

interface DsaTalent {
  category: "Sports" | "Arts" | "STEM" | "Leadership" | "Languages";
  area: string;
  description: string;
}

interface DsaMasterSchool {
  id: string;
  schoolName: string;
  slug: string;
  dsaTalents: DsaTalent[];
}

interface CcaPoolEntry {
  genericName: string;
  category: string;
  schoolCount: number;
  competitionLevel: string;
}

const MASTER_LIST = dsaMasterList as DsaMasterSchool[];
const CCA_POOL = (primaryCcaPool as { cca_pool: CcaPoolEntry[] }).cca_pool;

// ── Exported types ────────────────────────────────────────────────────────────

export type SchoolTier = "safe" | "reach" | "dream" | "special";

export interface RecommendRequest {
  alScore: number;
  talents: TalentAssessmentInput[];
  region?: string;
  town?: string;
}

export interface RecommendedSchool {
  name: string;
  slug: string;
  type: string;
  isIp: boolean;
  gender: string;
  recentCop: string;
  matchedArea: string;
  matchedCategory: string;
  talentTier: TalentTier;
  reasons: string[];
  competitionPoolNote?: "niche" | "moderate" | "popular";
  tier: SchoolTier;
}

export interface RecommendResult {
  safe: RecommendedSchool[];
  reach: RecommendedSchool[];
  dream: RecommendedSchool[];
  special: RecommendedSchool[];
  eliteMode: boolean;
  warnings: string[];
}

// ── Constants ─────────────────────────────────────────────────────────────────

const TIER_ORDER: TalentTier[] = ["elite", "strong", "solid", "developing"];

const CATEGORY_MAP: Record<TalentCategory, string> = {
  sports: "Sports",
  arts: "Arts",
  stem: "STEM",
  languages: "Languages",
  debate: "Languages",
  uniformed: "Leadership",
  leadership: "Leadership",
};

const ADJACENT_REGIONS: Record<string, string[]> = {
  Central: ["North", "North-East", "East", "West"],
  North: ["Central", "North-East"],
  "North-East": ["Central", "North", "East"],
  East: ["Central", "North-East"],
  West: ["Central"],
  South: ["Central"],
};

interface SpecialSchoolDef {
  slug: string;
  name: string;
  region: string;
  gender: string;
  type: string;
  triggerCategories: TalentCategory[];
  requiresElite: boolean;
  reasons: string[];
}

const SPECIAL_SCHOOLS: SpecialSchoolDef[] = [
  {
    slug: "school-of-the-arts-singapore",
    name: "School of the Arts, Singapore",
    region: "Central",
    gender: "coed",
    type: "Specialised School",
    triggerCategories: ["arts"],
    requiresElite: false,
    reasons: [
      "SOTA is Singapore's only specialised arts school — it offers a six-year integrated programme combining rigorous arts training with academic study.",
      "DSA is the primary and most direct admission route into SOTA, making your child's arts talent directly relevant to their application.",
      "We recommend attending SOTA's Open House and contacting their admissions team to understand their 2026 portfolio requirements for your child's specific art form.",
    ],
  },
  {
    slug: "nus-high-school-of-mathematics-and-science",
    name: "NUS High School of Mathematics and Science",
    region: "Central",
    gender: "coed",
    type: "Specialised School",
    triggerCategories: ["stem"],
    requiresElite: true,
    reasons: [
      "NUS High offers a six-year specialised programme in Mathematics and Science — admission is highly competitive and reserved for top STEM students.",
      "DSA is the primary pathway into NUS High, and your child's elite-level STEM achievement places them in the relevant applicant pool.",
      "Contact NUS High directly to understand their 2026 DSA selection process, which typically involves aptitude tests and interviews.",
    ],
  },
  {
    slug: "school-of-science-and-technology-singapore",
    name: "School of Science and Technology, Singapore",
    region: "West",
    gender: "coed",
    type: "Specialised School",
    triggerCategories: ["stem"],
    requiresElite: false,
    reasons: [
      "SST is a specialised school focused on applied learning in Science and Technology — it admits students primarily through DSA.",
      "Your child's STEM background is directly relevant to SST's interdisciplinary engineering and technology curriculum.",
      "SST holds regular information sessions; we recommend attending to understand their 2026 DSA selection criteria and portfolio expectations.",
    ],
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function tierRank(t: TalentTier): number {
  return TIER_ORDER.indexOf(t);
}

function parseCopAvg(raw: string | undefined | null): number | null {
  if (!raw) return null;
  const nums = [...raw.matchAll(/\d+/g)].map((m) => parseInt(m[0], 10));
  if (!nums.length) return null;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

function computeMedianCop(entry: SchoolCopHistoryEntry): number | null {
  const years = ["2023", "2024", "2025"] as const;
  const values: number[] = [];
  for (const year of years) {
    const matrix = entry.byYear[year];
    if (!matrix) continue;
    const raw = entry.offersIp
      ? (matrix.ip ?? matrix.indicativeNonIp)
      : matrix.indicativeNonIp;
    const n = parseCopAvg(raw);
    if (n !== null) values.push(n);
  }
  if (values.length === 0) return null;
  values.sort((a, b) => a - b);
  const mid = Math.floor(values.length / 2);
  return values.length % 2 === 1 ? values[mid] : values[mid - 1];
}

function deriveSchoolType(entry: SchoolCopHistoryEntry): string {
  if (entry.offersIp) return "IP School";
  if (entry.isAutonomous) return "Autonomous";
  if (entry.isSap) return "SAP School";
  return "Government";
}

function getSchoolRequiredTier(medianCop: number): TalentTier {
  if (medianCop <= 10) return "elite";
  if (medianCop <= 16) return "strong";
  if (medianCop <= 20) return "solid";
  return "developing";
}

function tierGap(userTier: TalentTier, schoolRequired: TalentTier): number {
  return tierRank(userTier) - tierRank(schoolRequired);
}

function formatCopDisplay(entry: SchoolCopHistoryEntry): string {
  const matrix2025 = entry.byYear["2025"];
  const raw = entry.offersIp
    ? (matrix2025?.ip ?? matrix2025?.indicativeNonIp)
    : matrix2025?.indicativeNonIp;
  if (!raw) return "N/A";
  const nums = [...raw.matchAll(/\d+/g)].map((m) => parseInt(m[0], 10));
  if (nums.length === 0) return "N/A";
  if (nums.length === 1) return `AL ${nums[0]}`;
  return `AL ${nums[0]}–${nums[nums.length - 1]}`;
}

interface TalentMatchResult {
  exactMatch: boolean;
  matchedArea: string;
  matchedCategory: string;
  talentResult: TalentAssessmentResult;
}

function findBestTalentMatch(
  school: DsaMasterSchool,
  results: TalentAssessmentResult[],
): TalentMatchResult | null {
  let bestExact: TalentMatchResult | null = null;
  let bestCategory: TalentMatchResult | null = null;

  for (const result of results) {
    const mappedCategory = CATEGORY_MAP[result.category];
    const normalizedArea = result.specificArea.trim().toLowerCase();

    for (const dsaTalent of school.dsaTalents) {
      if (dsaTalent.category !== mappedCategory) continue;
      const dsaArea = dsaTalent.area.trim().toLowerCase();
      const isExact =
        dsaArea === normalizedArea ||
        dsaArea.includes(normalizedArea) ||
        normalizedArea.includes(dsaArea);

      const candidate: TalentMatchResult = {
        exactMatch: isExact,
        matchedArea: dsaTalent.area,
        matchedCategory: dsaTalent.category,
        talentResult: result,
      };

      if (isExact) {
        if (!bestExact || tierRank(result.tier) < tierRank(bestExact.talentResult.tier)) {
          bestExact = candidate;
        }
      } else {
        if (!bestCategory || tierRank(result.tier) < tierRank(bestCategory.talentResult.tier)) {
          bestCategory = candidate;
        }
      }
    }
  }

  return bestExact ?? bestCategory ?? null;
}

function lookupCompetitionLevel(
  area: string,
): "niche" | "moderate" | "popular" | undefined {
  const n = area.trim().toLowerCase();
  const exact = CCA_POOL.find((e) => e.genericName.toLowerCase() === n);
  if (exact) return exact.competitionLevel as "niche" | "moderate" | "popular";
  const sub1 = CCA_POOL.find((e) => n.includes(e.genericName.toLowerCase()));
  if (sub1) return sub1.competitionLevel as "niche" | "moderate" | "popular";
  const sub2 = CCA_POOL.find((e) => e.genericName.toLowerCase().includes(n));
  if (sub2) return sub2.competitionLevel as "niche" | "moderate" | "popular";
  return undefined;
}

function computeGeoWeight(
  schoolRegion: string,
  userRegion: string | undefined,
  isIp: boolean,
): number {
  if (isIp) return 1.0;
  if (!userRegion) return 1.0;
  if (schoolRegion === userRegion) return 1.0;
  if (ADJACENT_REGIONS[userRegion]?.includes(schoolRegion)) return 0.8;
  return 0.5;
}

function assignTier(
  alScore: number,
  medianCop: number,
): "safe" | "reach" | "dream" {
  if (medianCop >= alScore && medianCop <= alScore + 3) return "safe";
  if (medianCop >= alScore - 5 && medianCop <= alScore - 1) return "reach";
  return "dream";
}

interface ReasonContext {
  schoolName: string;
  area: string;
  category: string;
  tier: TalentTier;
  schoolTier: "safe" | "reach" | "dream";
  copRange: string;
  gap: number;
  competitionLevel?: "niche" | "moderate" | "popular";
}

function buildReasons(isExact: boolean, ctx: ReasonContext): string[] {
  const { schoolName, area, category, tier, schoolTier, copRange, gap, competitionLevel } = ctx;

  const reason1 = isExact
    ? `${schoolName} offers DSA in ${area} — a direct match for your child's focus.`
    : `${schoolName}'s ${category} DSA programme aligns with your child's background in ${area}.`;

  let reason2: string;
  if (gap >= 1) {
    reason2 = `${schoolName} is highly selective in ${area} — this is an aspirational choice, worth trying given your child's talent.`;
  } else if (tier === "elite" || tier === "strong") {
    reason2 = `With a ${tier} achievement level, your child is well-positioned for ${schoolName}'s competitive ${area} programme.`;
  } else {
    reason2 = `${schoolName} actively recruits for ${area} and your child's level is relevant to their selection criteria.`;
  }

  let reason3: string;
  if (competitionLevel === "niche") {
    reason3 = `${area} is offered by relatively few primary schools in Singapore, meaning a smaller but dedicated talent pool at national competitions.`;
  } else if (competitionLevel === "popular") {
    reason3 = `${area} is widely popular, so competition for DSA slots is higher — your child's achievement level will need to stand out.`;
  } else if (schoolTier === "safe") {
    reason3 = `Based on recent admission data (${copRange}), your child may also qualify via S1 posting — DSA provides an earlier, secured offer.`;
  } else if (schoolTier === "reach") {
    reason3 = `${schoolName}'s recent AL admission range is ${copRange} — your child would likely only access this school through DSA.`;
  } else {
    reason3 = `${schoolName} is among Singapore's most academically selective schools (recent ${copRange}) — DSA in ${area} is your child's primary pathway here.`;
  }

  return [reason1, reason2, reason3];
}

// ── Main export ───────────────────────────────────────────────────────────────

export function recommend(req: RecommendRequest): RecommendResult {
  const { alScore, talents, region } = req;
  const warnings: string[] = [];

  // Step 0a: Assess all talents
  const talentResults = talents.map((t) => assessTalent(t));

  // Step 0b: AL ≥ 23 — DSA not applicable
  if (alScore >= 23) {
    return {
      safe: [],
      reach: [],
      dream: [],
      special: [],
      eliteMode: false,
      warnings: [
        `DSA only applies to Express/IP secondary schools (AL ≤ 22). With an AL of ${alScore}, your child will be posted via S1 to neighbourhood schools. DSA is not applicable for this score range.`,
      ],
    };
  }

  if (talentResults.length === 0) {
    warnings.push("Please provide at least one talent area to generate recommendations.");
  }

  // Step 0c: Strong PSLE but weak talent — advisory
  const sortedByTier = [...talentResults].sort(
    (a, b) => tierRank(a.tier) - tierRank(b.tier),
  );
  const best: TalentTier =
    sortedByTier.length > 0 ? sortedByTier[0].tier : "developing";

  if ((best === "solid" || best === "developing") && alScore <= 8) {
    warnings.push(
      `With a strong PSLE score of AL ${alScore}, S1 posting may give your child access to better schools than DSA at this talent level. Consider whether DSA is the most strategic route.`,
    );
  }

  // Step 0d: Elite mode
  const eliteMode =
    talentResults.length > 0 && talentResults.every((r) => r.tier === "elite");

  // Step 1: Build COP index
  const copIndex = new Map<string, SchoolCopHistoryEntry>();
  for (const entry of SCHOOL_COP_HISTORY_DATA) {
    copIndex.set(entry.id, entry);
  }

  // Steps 2–5: Process each school
  interface Candidate {
    school: RecommendedSchool;
    medianCop: number;
    weight: number;
    isAspirational: boolean;
    isExactMatch: boolean;
  }

  const candidates: Candidate[] = [];

  for (const masterSchool of MASTER_LIST) {
    const copEntry = copIndex.get(masterSchool.slug);
    if (!copEntry) continue;

    const medianCop = computeMedianCop(copEntry);
    if (medianCop === null) continue;

    // Step 2: Talent match
    const match = findBestTalentMatch(masterSchool, talentResults);
    if (!match) continue;

    // Step 3: Tier gap
    const schoolRequired = getSchoolRequiredTier(medianCop);
    const gap = tierGap(match.talentResult.tier, schoolRequired);
    if (gap >= 2) continue;

    // Step 6a: Assign COP tier, skip schools that are too easy unless eliteMode
    const copTier = assignTier(alScore, medianCop);
    if (!eliteMode && medianCop > alScore + 3) continue;

    // Step 4: Competition pool
    const competitionLevel = lookupCompetitionLevel(match.talentResult.specificArea);

    // Step 5: Geographic weight
    const weight = computeGeoWeight(copEntry.region, region, copEntry.offersIp);

    const copDisplay = formatCopDisplay(copEntry);

    const reasons = buildReasons(match.exactMatch, {
      schoolName: masterSchool.schoolName,
      area: match.matchedArea,
      category: match.matchedCategory,
      tier: match.talentResult.tier,
      schoolTier: copTier,
      copRange: copDisplay,
      gap,
      competitionLevel,
    });

    candidates.push({
      school: {
        name: masterSchool.schoolName,
        slug: masterSchool.slug,
        type: deriveSchoolType(copEntry),
        isIp: copEntry.offersIp,
        gender: copEntry.gender,
        recentCop: copDisplay,
        matchedArea: match.matchedArea,
        matchedCategory: match.matchedCategory,
        talentTier: match.talentResult.tier,
        reasons,
        competitionPoolNote: competitionLevel,
        tier: copTier,
      },
      medianCop,
      weight,
      isAspirational: gap === 1,
      isExactMatch: match.exactMatch,
    });
  }

  // Step 6b: Tier assignment and selection
  let safe: RecommendedSchool[];
  let reach: RecommendedSchool[];
  let dream: RecommendedSchool[];

  if (eliteMode) {
    // Most selective schools first: exact talent match > category match, then lowest COP, then geo weight
    const sorted = [...candidates].sort((a, b) => {
      if (a.medianCop !== b.medianCop) return a.medianCop - b.medianCop;
      if (a.isExactMatch !== b.isExactMatch) return a.isExactMatch ? -1 : 1;
      return b.weight - a.weight;
    });
    const top6 = sorted.slice(0, 6);
    dream = top6.slice(0, 2).map((c) => ({ ...c.school, tier: "dream" as SchoolTier }));
    reach = top6.slice(2, 4).map((c) => ({ ...c.school, tier: "reach" as SchoolTier }));
    safe = top6.slice(4, 6).map((c) => ({ ...c.school, tier: "safe" as SchoolTier }));
  } else {
    const sortSafeReach = (arr: Candidate[]) =>
      [...arr].sort((a, b) => {
        if (a.isAspirational !== b.isAspirational) return a.isAspirational ? 1 : -1;
        if (b.weight !== a.weight) return b.weight - a.weight;
        return a.medianCop - b.medianCop;
      });

    // Dream: show the most prestigious schools (lowest COP) regardless of aspirational status
    const sortDream = (arr: Candidate[]) =>
      [...arr].sort((a, b) => {
        if (b.weight !== a.weight) return b.weight - a.weight;
        return a.medianCop - b.medianCop;
      });

    safe = sortSafeReach(candidates.filter((c) => c.school.tier === "safe"))
      .slice(0, 2)
      .map((c) => c.school);
    reach = sortSafeReach(candidates.filter((c) => c.school.tier === "reach"))
      .slice(0, 2)
      .map((c) => c.school);
    dream = sortDream(candidates.filter((c) => c.school.tier === "dream"))
      .slice(0, 2)
      .map((c) => c.school);
  }

  // Step 6c: Special schools
  const special: RecommendedSchool[] = [];
  for (const def of SPECIAL_SCHOOLS) {
    const matchingTalent = talentResults.find(
      (r) =>
        def.triggerCategories.includes(r.category) &&
        (!def.requiresElite || r.tier === "elite"),
    );
    if (!matchingTalent) continue;
    special.push({
      name: def.name,
      slug: def.slug,
      type: def.type,
      isIp: true,
      gender: def.gender,
      recentCop: "N/A (Specialised)",
      matchedArea: matchingTalent.specificArea,
      matchedCategory: CATEGORY_MAP[matchingTalent.category],
      talentTier: matchingTalent.tier,
      reasons: def.reasons,
      tier: "special",
    });
  }

  return { safe, reach, dream, special, eliteMode, warnings };
}

// ── Test harness ──────────────────────────────────────────────────────────────

export function __testRecommend(): void {
  console.log("=== DSA Recommend Engine — Test Suite ===\n");

  const print = (label: string, r: RecommendResult) => {
    console.log(`── ${label}`);
    if (r.warnings.length) console.log("  warnings:", r.warnings);
    console.log("  eliteMode:", r.eliteMode);
    console.log("  safe :", r.safe.map((s) => `${s.name} [${s.talentTier}]`));
    console.log("  reach:", r.reach.map((s) => `${s.name} [${s.talentTier}]`));
    console.log("  dream:", r.dream.map((s) => `${s.name} [${s.talentTier}]`));
    console.log("  special:", r.special.map((s) => s.name));
    console.log();
  };

  // Test 1: AL=18, softball, national champion individual → RI + Nanyang in dream
  // A national champion knows they are top-10 island-wide → elite → eliteMode=true
  print("1 — AL=18 softball national champion (top10→elite, eliteMode=true)", recommend({
    alScore: 18,
    region: "Central",
    talents: [{
      category: "sports",
      specificArea: "Softball",
      hasExternalCoaching: true,
      trainingFrequency: "thrice_plus",
      knownIslandRanking: "top10",
    }],
  }));

  // Test 2: AL=12, softball, international representative → RI as Dream, Nanyang as Reach
  // International representative = top-10 island-wide → elite → eliteMode=true
  print("2 — AL=12 softball international rep (top10→elite, eliteMode=true)", recommend({
    alScore: 12,
    talents: [{
      category: "sports",
      specificArea: "Softball",
      hasExternalCoaching: true,
      trainingFrequency: "thrice_plus",
      knownIslandRanking: "top10",
    }],
  }));

  // Test 3: AL=20, dance, zonal top3 team key player → reach has mid-tier IP/autonomous
  // tier: ccaScore=(18+15)*0.85=28.05 → solid
  print("3 — AL=20 dance zonal top3 team key (solid)", recommend({
    alScore: 20,
    talents: [{
      category: "arts",
      specificArea: "Dance",
      ccaCompLevel: "zonal",
      ccaBestResult: "top3",
      ccaParticipationType: "team_key",
    }],
  }));

  // Test 4: AL=16, softball, national top3 individual → Nanyang in dream, B-tier in reach
  // National top-3 individual = top-50 island-wide → strong
  print("4 — AL=16 softball national top3 individual (top50→strong)", recommend({
    alScore: 16,
    talents: [{
      category: "sports",
      specificArea: "Softball",
      hasExternalCoaching: true,
      trainingFrequency: "thrice_plus",
      knownIslandRanking: "top50",
    }],
  }));

  // Test 5: AL=23 → warnings only, no recommendations
  print("5 — AL=23 (early return)", recommend({
    alScore: 23,
    talents: [{
      category: "sports",
      specificArea: "Basketball",
      ccaCompLevel: "school",
      ccaBestResult: "participation",
    }],
  }));

  // Test 6: AL=10, stem, international olympiad gold → eliteMode=true, dream has NUS High / RI
  print("6 — AL=10 STEM international olympiad gold (elite, eliteMode=true)", recommend({
    alScore: 10,
    region: "Central",
    talents: [{
      category: "stem",
      specificArea: "Mathematics",
      stemCompLevel: "international_olympiad",
      stemBestResult: "gold",
      stemCompCount: "four_plus",
    }],
  }));

  // Test 7: AL=14, leadership, head student council + international + 2yr → elite
  // → reach/dream should be selective IP schools
  print("7 — AL=14 head student council international 2yr+ (elite)", recommend({
    alScore: 14,
    talents: [{
      category: "leadership",
      specificArea: "Leadership and Character",
      leadershipPosition: "head_student_council",
      leadershipExternal: "international",
      leadershipDuration: "2yr_plus",
    }],
  }));

  console.log("=== Test suite complete ===");
}
