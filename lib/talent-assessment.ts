export type TalentCategory =
  | "sports"
  | "arts"
  | "debate"
  | "stem"
  | "languages"
  | "uniformed"
  | "leadership";

export type TalentTier = "elite" | "strong" | "solid" | "developing";

export interface TalentAssessmentInput {
  category: TalentCategory;
  specificArea: string;

  /** Tracks which participation option was selected (sports/arts only). */
  participationSource?: "school_cca" | "external" | "both" | "personal_interest";

  hasExternalCoaching?: boolean;
  trainingFrequency?: "once" | "twice" | "thrice_plus";
  knownIslandRanking?: "top10" | "top50" | "upper_middle" | "middle";

  externalCompLevel?: "zonal" | "national" | "international";
  externalBestResult?: "participation" | "placed" | "top3" | "champion_rep";
  externalParticipationType?: "individual" | "team_key" | "team_regular";

  ccaCompLevel?: "school" | "zonal" | "national";
  ccaBestResult?: "participation" | "placed" | "top3" | "champion";
  ccaParticipationType?: "individual" | "team_key" | "team_regular";

  leadershipPosition?:
    | "class_monitor"
    | "cca_committee"
    | "school_prefect"
    | "head_student_council";
  leadershipExternal?: "none" | "school_prog" | "moe_university" | "international";
  leadershipDuration?: "less1yr" | "1yr" | "2yr_plus";

  uniformedRank?: "regular" | "nco_officer" | "commander";
  uniformedHighestActivity?: "school" | "national" | "international";
  uniformedYears?: "1yr" | "2yr" | "3yr_plus";

  languageLevel?: "school_curriculum" | "one_above" | "two_above";
  languageCompetition?: "none" | "school" | "national";
  languageYears?: "1yr" | "2yr" | "3yr_plus";

  stemCompLevel?:
    | "school"
    | "national_selection"
    | "nmos_smops"
    | "international_olympiad";
  stemBestResult?:
    | "participation"
    | "bronze_silver"
    | "gold"
    | "special_round_national";
  stemCompCount?: "one" | "two_three" | "four_plus";
  stemResearchProject?: "none" | "external_comp" | "published_recognised";
}

export interface TalentAssessmentResult {
  tier: TalentTier;
  category: TalentCategory;
  specificArea: string;
  competitionPoolNote?: "niche" | "moderate" | "popular";
}

const ISLAND_RANKING_TIER: Record<
  NonNullable<TalentAssessmentInput["knownIslandRanking"]>,
  TalentTier
> = {
  top10: "elite",
  top50: "strong",
  upper_middle: "solid",
  middle: "developing",
};

const EXTERNAL_LEVEL_SCORE: Record<
  NonNullable<TalentAssessmentInput["externalCompLevel"]>,
  number
> = {
  zonal: 25,
  national: 40,
  international: 55,
};

const EXTERNAL_RESULT_SCORE: Record<
  NonNullable<TalentAssessmentInput["externalBestResult"]>,
  number
> = {
  participation: 5,
  placed: 12,
  top3: 22,
  champion_rep: 35,
};

const CCA_LEVEL_SCORE: Record<
  NonNullable<TalentAssessmentInput["ccaCompLevel"]>,
  number
> = {
  school: 8,
  zonal: 18,
  national: 30,
};

const CCA_RESULT_SCORE: Record<
  NonNullable<TalentAssessmentInput["ccaBestResult"]>,
  number
> = {
  participation: 3,
  placed: 8,
  top3: 15,
  champion: 22,
};

const TYPE_MULTIPLIER: Record<
  NonNullable<TalentAssessmentInput["externalParticipationType"]>,
  number
> = {
  individual: 1.0,
  team_key: 0.85,
  team_regular: 0.6,
};

const FREQUENCY_MULTIPLIER: Record<
  NonNullable<TalentAssessmentInput["trainingFrequency"]>,
  number
> = {
  once: 0.7,
  twice: 0.85,
  thrice_plus: 1.0,
};

function tierFromSportsArtsScore(total: number): TalentTier {
  if (total >= 75) return "elite";
  if (total >= 50) return "strong";
  if (total >= 28) return "solid";
  return "developing";
}

function participationMultiplier(
  type: TalentAssessmentInput["externalParticipationType"],
): number {
  return TYPE_MULTIPLIER[type ?? "individual"];
}

function frequencyMultiplier(
  freq: TalentAssessmentInput["trainingFrequency"],
): number {
  return FREQUENCY_MULTIPLIER[freq ?? "once"];
}

function computeExternalScore(input: TalentAssessmentInput): number {
  if (!input.hasExternalCoaching) return 0;
  const level = input.externalCompLevel;
  const result = input.externalBestResult;
  if (!level || !result) return 0;

  const levelScore = EXTERNAL_LEVEL_SCORE[level];
  const resultScore = EXTERNAL_RESULT_SCORE[result];
  const typeMul = participationMultiplier(input.externalParticipationType);
  const freqMul = frequencyMultiplier(input.trainingFrequency);

  return (levelScore + resultScore) * typeMul * freqMul;
}

function computeCcaScore(input: TalentAssessmentInput): number {
  const level = input.ccaCompLevel;
  const result = input.ccaBestResult;
  if (!level || !result) return 0;

  const levelScore = CCA_LEVEL_SCORE[level];
  const resultScore = CCA_RESULT_SCORE[result];
  const typeMul = participationMultiplier(input.ccaParticipationType);

  return (levelScore + resultScore) * typeMul;
}

function assessSportsArts(input: TalentAssessmentInput): TalentTier {
  if (input.knownIslandRanking) {
    return ISLAND_RANKING_TIER[input.knownIslandRanking];
  }

  const externalScore = computeExternalScore(input);
  const ccaScore = computeCcaScore(input);
  const total = input.hasExternalCoaching
    ? externalScore * 0.7 + ccaScore * 0.3
    : ccaScore;

  return tierFromSportsArtsScore(total);
}

function assessLeadership(input: TalentAssessmentInput): TalentTier {
  const { leadershipPosition, leadershipExternal, leadershipDuration } = input;

  if (
    leadershipPosition === "head_student_council" &&
    (leadershipExternal === "moe_university" ||
      leadershipExternal === "international") &&
    leadershipDuration === "2yr_plus"
  ) {
    return "elite";
  }

  if (
    (leadershipPosition === "school_prefect" &&
      leadershipExternal !== undefined &&
      leadershipExternal !== "none") ||
    leadershipPosition === "head_student_council"
  ) {
    return "strong";
  }

  if (
    (leadershipPosition === "cca_committee" ||
      leadershipPosition === "school_prefect") &&
    (leadershipDuration === "1yr" || leadershipDuration === "2yr_plus")
  ) {
    return "solid";
  }

  return "developing";
}

function assessUniformed(input: TalentAssessmentInput): TalentTier {
  const { uniformedRank, uniformedHighestActivity, uniformedYears } = input;

  if (
    uniformedRank === "commander" &&
    uniformedHighestActivity === "international" &&
    uniformedYears === "3yr_plus"
  ) {
    return "elite";
  }

  if (
    (uniformedRank === "nco_officer" || uniformedRank === "commander") &&
    (uniformedHighestActivity === "national" ||
      uniformedHighestActivity === "international")
  ) {
    return "strong";
  }

  if (
    uniformedRank === "nco_officer" ||
    (uniformedRank === "regular" && uniformedHighestActivity === "national")
  ) {
    return "solid";
  }

  return "developing";
}

function assessLanguages(input: TalentAssessmentInput): TalentTier {
  const { languageLevel, languageCompetition } = input;

  if (languageLevel === "two_above" && languageCompetition === "national") {
    return "elite";
  }

  if (
    languageLevel === "two_above" ||
    (languageLevel === "one_above" && languageCompetition === "national")
  ) {
    return "strong";
  }

  if (
    languageLevel === "one_above" ||
    (languageLevel === "school_curriculum" &&
      languageCompetition === "national")
  ) {
    return "solid";
  }

  return "developing";
}

function assessStem(input: TalentAssessmentInput): TalentTier {
  const { stemCompLevel, stemBestResult, stemCompCount } = input;

  if (
    (stemCompLevel === "international_olympiad" ||
      stemCompLevel === "nmos_smops") &&
    (stemBestResult === "gold" || stemBestResult === "special_round_national")
  ) {
    return "elite";
  }

  if (
    (stemCompLevel === "national_selection" &&
      (stemBestResult === "gold" ||
        stemBestResult === "special_round_national")) ||
    (stemCompLevel === "nmos_smops" && stemBestResult === "bronze_silver")
  ) {
    return "strong";
  }

  if (
    stemCompLevel === "national_selection" &&
    stemBestResult === "bronze_silver" &&
    (stemCompCount === "two_three" || stemCompCount === "four_plus")
  ) {
    return "solid";
  }

  return "developing";
}

function assessDebate(input: TalentAssessmentInput): TalentTier {
  const { stemCompLevel, stemBestResult } = input;

  if (
    (stemCompLevel === "international_olympiad" &&
      (stemBestResult === "gold" ||
        stemBestResult === "special_round_national")) ||
    (stemCompLevel === "national_selection" && stemBestResult === "gold") ||
    (stemCompLevel === "nmos_smops" &&
      (stemBestResult === "gold" ||
        stemBestResult === "special_round_national"))
  ) {
    return "elite";
  }

  if (
    stemCompLevel === "national_selection" &&
    stemBestResult === "bronze_silver"
  ) {
    return "strong";
  }

  if (
    (stemCompLevel === "school" &&
      (stemBestResult === "gold" ||
        stemBestResult === "special_round_national")) ||
    (stemCompLevel === "school" && stemBestResult === "bronze_silver")
  ) {
    return "solid";
  }

  return "developing";
}

function assessByCategory(input: TalentAssessmentInput): TalentTier {
  switch (input.category) {
    case "sports":
    case "arts":
      return assessSportsArts(input);
    case "leadership":
      return assessLeadership(input);
    case "uniformed":
      return assessUniformed(input);
    case "languages":
      return assessLanguages(input);
    case "stem":
      return assessStem(input);
    case "debate":
      return assessDebate(input);
    default:
      return "developing";
  }
}

export function assessTalent(
  input: TalentAssessmentInput,
): TalentAssessmentResult {
  return {
    tier: assessByCategory(input),
    category: input.category,
    specificArea: input.specificArea,
  };
}
