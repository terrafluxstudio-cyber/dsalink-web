"use client";

import { useEffect, useState, type ReactNode } from "react";
import type { TalentAssessmentInput, TalentCategory } from "@/lib/talent-assessment";

export interface TalentSectionProps {
  category: TalentCategory;
  specificArea: string;
  onChange: (input: Partial<TalentAssessmentInput>) => void;
  value: Partial<TalentAssessmentInput>;
}

type ParticipationSource = "school_cca" | "external" | "both" | "personal_interest";

type Option<T extends string> = { value: T; label: string };

function QuestionBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-slate-100">{title}</p>
      {children}
    </div>
  );
}

function OptionGroup<T extends string>({
  options,
  value,
  onChange,
}: {
  options: Option<T>[];
  value: T | undefined;
  onChange: (next: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
            value === opt.value
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-slate-700 text-slate-200 hover:bg-slate-600"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function WarningCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-amber-500/40 bg-amber-950/40 p-4 text-sm text-amber-100">
      {children}
    </div>
  );
}

const PARTICIPATION_OPTIONS: Option<ParticipationSource>[] = [
  { value: "school_cca", label: "School CCA only" },
  { value: "external", label: "External coaching" },
  { value: "both", label: "Both" },
  { value: "personal_interest", label: "Just personal interest" },
];

const FREQUENCY_OPTIONS: Option<NonNullable<TalentAssessmentInput["trainingFrequency"]>>[] = [
  { value: "once", label: "Once" },
  { value: "twice", label: "Twice" },
  { value: "thrice_plus", label: "3+ times" },
];

const RANKING_OPTIONS: Option<NonNullable<TalentAssessmentInput["knownIslandRanking"]>>[] = [
  { value: "top10", label: "Top 10 island-wide" },
  { value: "top50", label: "Top 50" },
  { value: "upper_middle", label: "Upper-middle" },
  { value: "middle", label: "Middle" },
];

const EXTERNAL_LEVEL_OPTIONS: Option<NonNullable<TalentAssessmentInput["externalCompLevel"]>>[] = [
  { value: "zonal", label: "Zonal" },
  { value: "national", label: "National" },
  { value: "international", label: "International" },
];

const EXTERNAL_RESULT_OPTIONS: Option<
  NonNullable<TalentAssessmentInput["externalBestResult"]>
>[] = [
  { value: "participation", label: "Participation" },
  { value: "placed", label: "Placed" },
  { value: "top3", label: "Top 3" },
  { value: "champion_rep", label: "Champion or Representative" },
];

const CCA_RESULT_OPTIONS: Option<NonNullable<TalentAssessmentInput["ccaBestResult"]>>[] = [
  { value: "participation", label: "Participation" },
  { value: "placed", label: "Placed" },
  { value: "top3", label: "Top 3" },
  { value: "champion", label: "Champion" },
];

const PARTICIPATION_TYPE_OPTIONS: Option<
  NonNullable<TalentAssessmentInput["externalParticipationType"]>
>[] = [
  { value: "individual", label: "Individual" },
  { value: "team_key", label: "Team – key player" },
  { value: "team_regular", label: "Team – regular member" },
];

const CCA_LEVEL_OPTIONS: Option<NonNullable<TalentAssessmentInput["ccaCompLevel"]>>[] = [
  { value: "school", label: "School-internal" },
  { value: "zonal", label: "Zonal" },
  { value: "national", label: "National" },
];

const LEADERSHIP_POSITION_OPTIONS: Option<
  NonNullable<TalentAssessmentInput["leadershipPosition"]>
>[] = [
  { value: "class_monitor", label: "Class Monitor" },
  { value: "cca_committee", label: "CCA Committee or Captain" },
  { value: "school_prefect", label: "School Prefect" },
  {
    value: "head_student_council",
    label: "Head/Deputy Prefect or Student Council",
  },
];

const LEADERSHIP_EXTERNAL_OPTIONS: Option<
  NonNullable<TalentAssessmentInput["leadershipExternal"]>
>[] = [
  { value: "none", label: "None" },
  { value: "school_prog", label: "School-organised programme" },
  { value: "moe_university", label: "MOE or University level" },
  { value: "international", label: "International (e.g. Model UN)" },
];

const DURATION_OPTIONS: Option<NonNullable<TalentAssessmentInput["leadershipDuration"]>>[] = [
  { value: "less1yr", label: "Less than 1 year" },
  { value: "1yr", label: "About 1 year" },
  { value: "2yr_plus", label: "2 years or more" },
];

const UNIFORMED_RANK_OPTIONS: Option<NonNullable<TalentAssessmentInput["uniformedRank"]>>[] = [
  { value: "regular", label: "Regular member" },
  { value: "nco_officer", label: "NCO or Officer" },
  { value: "commander", label: "Commander or highest position in school" },
];

const UNIFORMED_ACTIVITY_OPTIONS: Option<
  NonNullable<TalentAssessmentInput["uniformedHighestActivity"]>
>[] = [
  { value: "school", label: "School internal" },
  { value: "national", label: "National camp or competition" },
  { value: "international", label: "International exchange" },
];

const YEARS_OPTIONS: Option<"1yr" | "2yr" | "3yr_plus">[] = [
  { value: "1yr", label: "1 year" },
  { value: "2yr", label: "2 years" },
  { value: "3yr_plus", label: "3 years or more" },
];

const LANGUAGE_LEVEL_OPTIONS: Option<NonNullable<TalentAssessmentInput["languageLevel"]>>[] = [
  { value: "school_curriculum", label: "School curriculum level" },
  { value: "one_above", label: "One level above school" },
  { value: "two_above", label: "Two or more levels above school" },
];

const LANGUAGE_COMP_OPTIONS: Option<NonNullable<TalentAssessmentInput["languageCompetition"]>>[] =
  [
    { value: "none", label: "None" },
    { value: "school", label: "School-level event" },
    { value: "national", label: "National competition" },
  ];

const STEM_LEVEL_OPTIONS: Option<NonNullable<TalentAssessmentInput["stemCompLevel"]>>[] = [
  { value: "school", label: "School competition" },
  { value: "national_selection", label: "National selection (e.g. SASMO)" },
  { value: "nmos_smops", label: "NMOS / SMOPS level" },
  { value: "international_olympiad", label: "International Olympiad" },
];

const STEM_RESULT_OPTIONS: Option<NonNullable<TalentAssessmentInput["stemBestResult"]>>[] = [
  { value: "participation", label: "Participation" },
  { value: "bronze_silver", label: "Bronze or Silver" },
  { value: "gold", label: "Gold" },
  { value: "special_round_national", label: "Special Round or National Team" },
];

const STEM_COUNT_OPTIONS: Option<NonNullable<TalentAssessmentInput["stemCompCount"]>>[] = [
  { value: "one", label: "1" },
  { value: "two_three", label: "2–3" },
  { value: "four_plus", label: "4 or more" },
];

function YesNoGroup({
  value,
  onChange,
}: {
  value: boolean | undefined;
  onChange: (next: boolean) => void;
}) {
  return (
    <OptionGroup
      options={[
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ]}
      value={value === undefined ? undefined : value ? "yes" : "no"}
      onChange={(v) => onChange(v === "yes")}
    />
  );
}

function inferParticipation(value: Partial<TalentAssessmentInput>): ParticipationSource | null {
  if (value.participationSource) return value.participationSource;
  if (value.hasExternalCoaching === false) return "school_cca";
  if (value.hasExternalCoaching === true) return "both";
  return null;
}

export function TalentSection({
  category,
  specificArea,
  onChange,
  value,
}: TalentSectionProps) {
  const isSportsOrArts = category === "sports" || category === "arts";
  const [participation, setParticipation] = useState<ParticipationSource | null>(() =>
    inferParticipation(value),
  );
  const [knowsRanking, setKnowsRanking] = useState<boolean | undefined>(() =>
    value.knownIslandRanking !== undefined ? true : undefined,
  );

  useEffect(() => {
    onChange({ category, specificArea });
    setParticipation(inferParticipation(value));
    setKnowsRanking(value.knownIslandRanking !== undefined ? true : undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, specificArea]);

  const patch = (partial: Partial<TalentAssessmentInput>) => {
    onChange({ ...value, category, specificArea, ...partial });
  };

  const clearSportsArtsFields = (): Partial<TalentAssessmentInput> => ({
    hasExternalCoaching: undefined,
    trainingFrequency: undefined,
    knownIslandRanking: undefined,
    externalCompLevel: undefined,
    externalBestResult: undefined,
    externalParticipationType: undefined,
    ccaCompLevel: undefined,
    ccaBestResult: undefined,
    ccaParticipationType: undefined,
  });

  const handleParticipation = (source: ParticipationSource) => {
    setParticipation(source);
    if (source === "personal_interest") {
      setKnowsRanking(undefined);
      patch({ ...clearSportsArtsFields(), participationSource: "personal_interest" });
      return;
    }
    if (source === "school_cca") {
      patch({ hasExternalCoaching: false, participationSource: "school_cca" });
      return;
    }
    if (source === "external") {
      patch({ hasExternalCoaching: true, participationSource: "external" });
      return;
    }
    // "both"
    patch({ hasExternalCoaching: undefined, participationSource: "both" });
  };

  const showExternalYesNo =
    isSportsOrArts && participation === "both";

  const showExternalDetails =
    isSportsOrArts &&
    participation !== null &&
    participation !== "personal_interest" &&
    participation !== "school_cca" &&
    (participation === "external" || value.hasExternalCoaching === true);

  const hasExternalCoaching =
    participation === "external" || value.hasExternalCoaching === true;
  const showDimensionA =
    hasExternalCoaching && knowsRanking === false && !value.knownIslandRanking;

  const showCcaBlock =
    !isSportsOrArts || (participation !== null && participation !== "personal_interest");

  return (
    <section className="space-y-6 rounded-lg bg-slate-800 p-4">
      {isSportsOrArts && (
        <>
          <QuestionBlock
            title={`Has your child formally trained in ${specificArea}?`}
          >
            <OptionGroup
              options={PARTICIPATION_OPTIONS}
              value={participation ?? undefined}
              onChange={handleParticipation}
            />
          </QuestionBlock>

          {participation === "personal_interest" && (
            <WarningCard>
              DSA typically requires formal training and competition experience. Personal
              interest alone is unlikely to meet school selection criteria for {specificArea}.
              You may still continue, but recommendations may be limited.
            </WarningCard>
          )}
        </>
      )}

      {showExternalYesNo && (
        <QuestionBlock title="Does your child have external coaching outside school?">
          <YesNoGroup
            value={value.hasExternalCoaching}
            onChange={(yes) => {
              patch({ hasExternalCoaching: yes });
              if (!yes) {
                setKnowsRanking(undefined);
                patch({
                  trainingFrequency: undefined,
                  knownIslandRanking: undefined,
                  externalCompLevel: undefined,
                  externalBestResult: undefined,
                  externalParticipationType: undefined,
                });
              }
            }}
          />
        </QuestionBlock>
      )}

      {hasExternalCoaching && showExternalDetails && (
        <>
          <QuestionBlock title="How often per week?">
            <OptionGroup
              options={FREQUENCY_OPTIONS}
              value={value.trainingFrequency}
              onChange={(v) => patch({ trainingFrequency: v })}
            />
          </QuestionBlock>

          <QuestionBlock title="Do you know your child's approximate island-wide level?">
            <YesNoGroup
              value={knowsRanking}
              onChange={(yes) => {
                setKnowsRanking(yes);
                if (!yes) {
                  patch({ knownIslandRanking: undefined });
                }
              }}
            />
          </QuestionBlock>

          {knowsRanking === true && (
            <QuestionBlock title="Approximate island-wide level">
              <OptionGroup
                options={RANKING_OPTIONS}
                value={value.knownIslandRanking}
                onChange={(v) => patch({ knownIslandRanking: v })}
              />
            </QuestionBlock>
          )}

          {showDimensionA && (
            <>
              <QuestionBlock title="Highest external competition level">
                <OptionGroup
                  options={EXTERNAL_LEVEL_OPTIONS}
                  value={value.externalCompLevel}
                  onChange={(v) => patch({ externalCompLevel: v })}
                />
              </QuestionBlock>
              <QuestionBlock title="Best result at that level">
                <OptionGroup
                  options={EXTERNAL_RESULT_OPTIONS}
                  value={value.externalBestResult}
                  onChange={(v) => patch({ externalBestResult: v })}
                />
              </QuestionBlock>
              <QuestionBlock title="Participation type">
                <OptionGroup
                  options={PARTICIPATION_TYPE_OPTIONS}
                  value={value.externalParticipationType}
                  onChange={(v) => patch({ externalParticipationType: v })}
                />
              </QuestionBlock>
            </>
          )}
        </>
      )}

      {showCcaBlock && isSportsOrArts && (
        <>
          <QuestionBlock title="Highest school CCA competition level">
            <OptionGroup
              options={CCA_LEVEL_OPTIONS}
              value={value.ccaCompLevel}
              onChange={(v) => patch({ ccaCompLevel: v })}
            />
          </QuestionBlock>
          <QuestionBlock title="Best CCA result">
            <OptionGroup
              options={CCA_RESULT_OPTIONS}
              value={value.ccaBestResult}
              onChange={(v) => patch({ ccaBestResult: v })}
            />
          </QuestionBlock>
          <QuestionBlock title="CCA role">
            <OptionGroup
              options={PARTICIPATION_TYPE_OPTIONS}
              value={value.ccaParticipationType}
              onChange={(v) => patch({ ccaParticipationType: v })}
            />
          </QuestionBlock>
        </>
      )}

      {category === "leadership" && (
        <>
          <QuestionBlock title="Highest position held in school">
            <OptionGroup
              options={LEADERSHIP_POSITION_OPTIONS}
              value={value.leadershipPosition}
              onChange={(v) => patch({ leadershipPosition: v })}
            />
          </QuestionBlock>
          <QuestionBlock title="External leadership activities">
            <OptionGroup
              options={LEADERSHIP_EXTERNAL_OPTIONS}
              value={value.leadershipExternal}
              onChange={(v) => patch({ leadershipExternal: v })}
            />
          </QuestionBlock>
          <QuestionBlock title="Duration in leadership role">
            <OptionGroup
              options={DURATION_OPTIONS}
              value={value.leadershipDuration}
              onChange={(v) => patch({ leadershipDuration: v })}
            />
          </QuestionBlock>
        </>
      )}

      {category === "uniformed" && (
        <>
          <QuestionBlock title="Your rank/role in the group">
            <OptionGroup
              options={UNIFORMED_RANK_OPTIONS}
              value={value.uniformedRank}
              onChange={(v) => patch({ uniformedRank: v })}
            />
          </QuestionBlock>
          <QuestionBlock title="Highest level activity participated">
            <OptionGroup
              options={UNIFORMED_ACTIVITY_OPTIONS}
              value={value.uniformedHighestActivity}
              onChange={(v) => patch({ uniformedHighestActivity: v })}
            />
          </QuestionBlock>
          <QuestionBlock title="Years of participation">
            <OptionGroup
              options={YEARS_OPTIONS}
              value={value.uniformedYears}
              onChange={(v) => patch({ uniformedYears: v })}
            />
          </QuestionBlock>
        </>
      )}

      {category === "languages" && (
        <>
          <QuestionBlock title="Your child's level in this language/subject">
            <OptionGroup
              options={LANGUAGE_LEVEL_OPTIONS}
              value={value.languageLevel}
              onChange={(v) => patch({ languageLevel: v })}
            />
          </QuestionBlock>
          <QuestionBlock title="Competitions or activities participated">
            <OptionGroup
              options={LANGUAGE_COMP_OPTIONS}
              value={value.languageCompetition}
              onChange={(v) => patch({ languageCompetition: v })}
            />
          </QuestionBlock>
          <QuestionBlock title="Years of sustained involvement">
            <OptionGroup
              options={YEARS_OPTIONS}
              value={value.languageYears}
              onChange={(v) => patch({ languageYears: v })}
            />
          </QuestionBlock>
        </>
      )}

      {(category === "stem" || category === "debate") && (
        <>
          <QuestionBlock title="Most significant competition participated">
            <OptionGroup
              options={STEM_LEVEL_OPTIONS}
              value={value.stemCompLevel}
              onChange={(v) => patch({ stemCompLevel: v })}
            />
          </QuestionBlock>
          <QuestionBlock title="Best result">
            <OptionGroup
              options={STEM_RESULT_OPTIONS}
              value={value.stemBestResult}
              onChange={(v) => patch({ stemBestResult: v })}
            />
          </QuestionBlock>
          <QuestionBlock title="Number of competitions entered">
            <OptionGroup
              options={STEM_COUNT_OPTIONS}
              value={value.stemCompCount}
              onChange={(v) => patch({ stemCompCount: v })}
            />
          </QuestionBlock>
        </>
      )}
    </section>
  );
}
