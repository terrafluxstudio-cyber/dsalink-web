"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { EmailCapture } from "@/components/EmailCapture";
import { LocationPicker } from "@/components/LocationPicker";
import { RecommendResultCard } from "@/components/RecommendResultCard";
import { TalentSection } from "@/components/TalentSection";
import { getAreasForCategory, MOE_TALENT_CATEGORIES } from "@/lib/recommend-catalog";
import { recommend, type RecommendResult, type RecommendedSchool } from "@/lib/recommend";
import { assessTalent, type TalentAssessmentInput, type TalentCategory } from "@/lib/talent-assessment";

type SelectedTalent = {
  category: TalentCategory;
  specificArea: string;
  categoryLabel: string;
};

function hasNonIpSchools(result: RecommendResult): boolean {
  return [...result.safe, ...result.reach, ...result.dream].some((s) => !s.isIp);
}

function toAssessmentInputs(
  selected: SelectedTalent[],
  values: Partial<TalentAssessmentInput>[],
): TalentAssessmentInput[] {
  return selected.map((item, index) => {
    const partial = values[index] ?? {};
    return {
      category: item.category,
      specificArea: item.specificArea,
      ...partial,
    } as TalentAssessmentInput;
  });
}

async function postRecommendRecord(payload: {
  alScore: number;
  talents: Array<{ category: string; specificArea: string; tier: string }>;
  recommendedSchools: Array<{ name: string; tier: string }>;
  region?: string;
  town?: string;
  email?: string;
}) {
  await fetch("/api/recommend", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

function buildApiPayload(
  alScore: number,
  talents: TalentAssessmentInput[],
  result: RecommendResult,
  location: { region: string; town: string },
  email?: string,
) {
  const recommendedSchools = [
    ...result.safe,
    ...result.reach,
    ...result.dream,
    ...result.special,
  ].map((s) => ({ name: s.name, tier: s.tier }));

  return {
    alScore,
    talents: talents.map((t) => ({
      category: t.category,
      specificArea: t.specificArea,
      tier: assessTalent(t).tier,
    })),
    recommendedSchools,
    ...(location.region ? { region: location.region } : {}),
    ...(location.town ? { town: location.town } : {}),
    ...(email ? { email } : {}),
  };
}

function WizardNav({
  onBack,
  onNext,
  nextLabel = "Next →",
  nextDisabled = false,
  showBack = true,
}: {
  onBack?: () => void;
  onNext: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
  showBack?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      {showBack && onBack && (
        <button
          type="button"
          onClick={onBack}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
        >
          ← Back
        </button>
      )}
      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {nextLabel}
      </button>
    </div>
  );
}

function ResultsView({
  result,
  alScore,
  onEmailSubmit,
  onEmailSkip,
}: {
  result: RecommendResult;
  alScore: number;
  onEmailSubmit: (email: string) => void;
  onEmailSkip: () => void;
}) {
  const renderSchool = (school: RecommendedSchool, tier: "safe" | "reach" | "dream" | "special") => (
    <RecommendResultCard
      key={`${school.slug}-${tier}`}
      school={{
        name: school.name,
        slug: school.slug,
        type: school.type,
        isIp: school.isIp,
        recentCop: school.recentCop,
        matchedArea: school.matchedArea,
        reasons: school.reasons,
        competitionPoolNote: school.competitionPoolNote,
        isSpecialSchool: tier === "special",
      }}
      tier={tier}
    />
  );

  return (
    <div className="space-y-10">
      {result.warnings.map((warning) => (
        <div
          key={warning}
          className="rounded-lg border border-amber-400 bg-amber-50 p-4 text-sm text-amber-800"
        >
          {warning}
        </div>
      ))}

      {result.special.length > 0 && (
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">
              Specialised Schools (DSA Only)
            </h2>
            <p className="text-sm text-slate-500">
              These schools admit students exclusively through DSA and offer specialised programmes
              not available at mainstream secondary schools.
            </p>
          </div>
          <div className="grid gap-4">
            {result.special.map((school) => renderSchool(school, "special"))}
          </div>
        </section>
      )}

      {result.safe.length > 0 && (
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">
              A good match — and a secured option
            </h2>
            <p className="text-sm text-slate-500">
              These schools&apos; recent admission AL scores (≈ AL {alScore}–{alScore + 2})
              suggest your child may qualify via S1 posting too. Applying via DSA secures a spot
              earlier.
            </p>
          </div>
          <div className="grid gap-4">
            {result.safe.map((school) => renderSchool(school, "safe"))}
          </div>
        </section>
      )}

      {result.reach.length > 0 && (
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">
              Stretch for these — DSA is your main pathway
            </h2>
            <p className="text-sm text-slate-500">
              Your child&apos;s PSLE score alone would not qualify for these schools. DSA gives you
              access based on talent.
            </p>
          </div>
          <div className="grid gap-4">
            {result.reach.map((school) => renderSchool(school, "reach"))}
          </div>
        </section>
      )}

      {result.dream.length > 0 && (
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-slate-900">
              Aspirational — your child&apos;s talent is the key
            </h2>
            <p className="text-sm text-slate-500">
              These are highly selective schools. Only apply if your child&apos;s talent level is
              genuinely competitive. Check their DSA intake directly.
            </p>
          </div>
          <div className="grid gap-4">
            {result.dream.map((school) => renderSchool(school, "dream"))}
          </div>
        </section>
      )}

      <EmailCapture onSubmit={onEmailSubmit} onSkip={onEmailSkip} />
    </div>
  );
}

export interface SchoolFinderWizardProps {
  inModal?: boolean;
  onClose?: () => void;
}

export function SchoolFinderWizard({ inModal = false, onClose }: SchoolFinderWizardProps = {}) {
  const [step, setStep] = useState(1);
  const [phase, setPhase] = useState<"wizard" | "results">("wizard");
  const [alScore, setAlScore] = useState<number | undefined>();
  const [expandedCategory, setExpandedCategory] = useState<TalentCategory | null>(null);
  const [areaByCategory, setAreaByCategory] = useState<Partial<Record<TalentCategory, string>>>({});
  const [selectedTalents, setSelectedTalents] = useState<SelectedTalent[]>([]);
  const [currentTalentIndex, setCurrentTalentIndex] = useState(0);
  const [talentValues, setTalentValues] = useState<Partial<TalentAssessmentInput>[]>([]);
  const [location, setLocation] = useState({ region: "", town: "" });
  const [result, setResult] = useState<RecommendResult | null>(null);
  const postedRef = useRef(false);

  const alBlocked = alScore !== undefined && alScore >= 23;
  const alValid = alScore !== undefined && alScore >= 4 && alScore <= 32 && alScore < 23;

  const completedTalents = useMemo(
    () => toAssessmentInputs(selectedTalents, talentValues),
    [selectedTalents, talentValues],
  );

  const runRecommend = useCallback(
    (region?: string) =>
      recommend({
        alScore: alScore!,
        talents: completedTalents,
        ...(region ? { region } : {}),
      }),
    [alScore, completedTalents],
  );

  const goToResults = useCallback((nextResult: RecommendResult) => {
    setResult(nextResult);
    setPhase("results");
    setStep(0);
  }, []);

  const finishWizard = useCallback(() => {
    const preview = runRecommend();
    if (hasNonIpSchools(preview) && !preview.eliteMode) {
      setStep(4);
      return;
    }
    goToResults(preview);
  }, [goToResults, runRecommend]);

  const finishLocation = useCallback(() => {
    const final = runRecommend(location.region || undefined);
    goToResults(final);
  }, [goToResults, location.region, runRecommend]);

  const selectedAreaCount = Object.values(areaByCategory).filter(Boolean).length;

  const beginTalentAssessment = () => {
    const next: SelectedTalent[] = MOE_TALENT_CATEGORIES.filter((c) => areaByCategory[c.id]).map(
      (c) => ({
        category: c.id,
        specificArea: areaByCategory[c.id]!,
        categoryLabel: c.label,
      }),
    );
    setSelectedTalents(next);
    setTalentValues(
      next.map((item) => ({
        category: item.category,
        specificArea: item.specificArea,
      })),
    );
    setCurrentTalentIndex(0);
    setStep(3);
  };

  useEffect(() => {
    if (phase !== "results" || !result || alScore === undefined || postedRef.current) return;
    postedRef.current = true;
    void postRecommendRecord(buildApiPayload(alScore, completedTalents, result, location));
  }, [phase, result, alScore, completedTalents, location]);

  const handleEmailSubmit = (email: string) => {
    if (!result || alScore === undefined) return;
    void postRecommendRecord(
      buildApiPayload(alScore, completedTalents, result, location, email),
    );
  };

  if (phase === "results" && result && alScore !== undefined) {
    return (
      <>
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold text-slate-900">Your DSA recommendations</h1>
          <p className="text-sm text-slate-500">
            Based on AL {alScore} and your child&apos;s assessed talent profile.
          </p>
        </header>
        <ResultsView
          result={result}
          alScore={alScore}
          onEmailSubmit={handleEmailSubmit}
          onEmailSkip={() => {}}
        />
        <div className="flex flex-wrap items-center gap-4 pb-4">
          {inModal ? (
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Close
            </button>
          ) : (
            <Link
              href="/"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              ← Back to homepage
            </Link>
          )}
          <button
            type="button"
            onClick={() => {
              postedRef.current = false;
              setPhase("wizard");
              setStep(1);
              setResult(null);
              setCurrentTalentIndex(0);
            }}
            className="text-sm text-slate-400 underline hover:text-slate-600"
          >
            Start over
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900">DSA school recommender</h1>
        <p className="text-sm text-slate-500">
          Step {step} of {step === 4 ? 4 : 3}
        </p>
      </header>

      {step === 1 && (
        <section className="space-y-6 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">
              What is your child&apos;s estimated PSLE AL score?
            </h2>
            <p className="text-sm text-slate-500">
              Use your P5 end-of-year results as a reference.
            </p>
          </div>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-700">PSLE AL score</span>
            <input
              type="number"
              min={4}
              max={32}
              value={alScore ?? ""}
              onChange={(e) => {
                const v = e.target.value === "" ? undefined : Number(e.target.value);
                setAlScore(v);
              }}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <span className="block text-xs text-slate-500">
              Lower is better. AL 4 = top score (all AL1), AL 32 = lowest
            </span>
          </label>

          {alBlocked && (
            <div className="space-y-3 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-700">
              <p>
                DSA is designed for students entering Express or IP schools, which require AL ≤ 22.
                If your child&apos;s projected PSLE score is ≥ 23, we recommend focusing on the S1
                posting process instead.
              </p>
              <Link
                href="/psle-cop"
                className="inline-block font-medium text-red-600 underline hover:text-red-800"
              >
                View PSLE COP information →
              </Link>
            </div>
          )}

          <WizardNav
            showBack={false}
            onNext={() => setStep(2)}
            nextDisabled={!alValid}
          />
        </section>
      )}

      {step === 2 && (
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">
              What are your child&apos;s talents or special strengths?
            </h2>
            <p className="text-sm text-slate-500">
              You can add multiple. Each will be assessed separately.
            </p>
          </div>

          <div className="space-y-3">
            {MOE_TALENT_CATEGORIES.map((cat) => {
              const areas = getAreasForCategory(cat.id);
              const isExpanded = expandedCategory === cat.id;
              const selectedArea = areaByCategory[cat.id];

              return (
                <div key={cat.id} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedCategory(isExpanded ? null : cat.id)
                    }
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-slate-800 hover:bg-slate-50"
                  >
                    <span>{cat.label}</span>
                    <span className="text-slate-500">
                      {selectedArea ? `✓ ${selectedArea}` : isExpanded ? "−" : "+"}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="max-h-64 space-y-2 overflow-y-auto border-t border-slate-200 px-4 py-3">
                      {areas.length === 0 ? (
                        <p className="text-sm text-slate-400">No areas listed for this category.</p>
                      ) : (
                        areas.map((area) => (
                          <label
                            key={area}
                            className="flex cursor-pointer items-start gap-2 text-sm text-slate-700"
                          >
                            <input
                              type="radio"
                              name={`area-${cat.id}`}
                              checked={selectedArea === area}
                              onChange={() =>
                                setAreaByCategory((prev) => ({
                                  ...prev,
                                  [cat.id]: area,
                                }))
                              }
                              className="mt-1"
                            />
                            <span>{area}</span>
                          </label>
                        ))
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <WizardNav
            onBack={() => setStep(1)}
            onNext={beginTalentAssessment}
            nextDisabled={selectedAreaCount === 0}
          />
        </section>
      )}

      {step === 3 && selectedTalents.length > 0 && (
        <section className="space-y-6">
          <p className="text-sm text-slate-500">
            Assessing talent {currentTalentIndex + 1} of {selectedTalents.length}:{" "}
            <span className="font-medium text-slate-700">
              {selectedTalents[currentTalentIndex].specificArea} (
              {selectedTalents[currentTalentIndex].categoryLabel})
            </span>
          </p>

          <TalentSection
            category={selectedTalents[currentTalentIndex].category}
            specificArea={selectedTalents[currentTalentIndex].specificArea}
            value={talentValues[currentTalentIndex] ?? {}}
            onChange={(input) => {
              setTalentValues((prev) => {
                const next = [...prev];
                next[currentTalentIndex] = input;
                return next;
              });
            }}
          />

          <WizardNav
            onBack={() => {
              if (currentTalentIndex > 0) {
                setCurrentTalentIndex((i) => i - 1);
              } else {
                setStep(2);
              }
            }}
            onNext={() => {
              if (currentTalentIndex < selectedTalents.length - 1) {
                setCurrentTalentIndex((i) => i + 1);
              } else {
                finishWizard();
              }
            }}
          />
        </section>
      )}

      {step === 4 && (
        <section className="space-y-6">
          <LocationPicker
            visible
            value={location}
            onChange={(region, town) => setLocation({ region, town })}
          />
          <WizardNav
            onBack={() => {
              setStep(3);
              setCurrentTalentIndex(selectedTalents.length - 1);
            }}
            onNext={finishLocation}
            nextLabel="See Recommendations →"
            nextDisabled={!location.region}
          />
        </section>
      )}
    </>
  );
}
