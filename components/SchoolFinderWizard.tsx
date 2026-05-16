"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { EmailCapture } from "@/components/EmailCapture";
import { LocationPicker } from "@/components/LocationPicker";
import { RecommendResultCard } from "@/components/RecommendResultCard";
import { TalentSection } from "@/components/TalentSection";
import { getStoredUtm } from "@/hooks/useUtm";
import { trackEvent } from "@/lib/analytics";
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
    return { category: item.category, specificArea: item.specificArea, ...partial } as TalentAssessmentInput;
  });
}

/** Returns true when every visible question in the TalentSection has been answered. */
function isTalentSectionComplete(
  value: Partial<TalentAssessmentInput>,
  category: TalentCategory,
): boolean {
  if (category === "sports" || category === "arts") {
    const src = value.participationSource;
    if (!src) return false; // first question not answered yet

    // "Just personal interest" — warning shown, allow proceeding
    if (src === "personal_interest") return true;

    const ccaDone = !!(value.ccaCompLevel && value.ccaBestResult && value.ccaParticipationType);

    if (src === "school_cca") return ccaDone;

    if (src === "external") {
      if (!value.trainingFrequency) return false;
      const externalDone = value.knownIslandRanking
        ? true
        : !!(value.externalCompLevel && value.externalBestResult && value.externalParticipationType);
      return externalDone && ccaDone;
    }

    if (src === "both") {
      if (value.hasExternalCoaching === undefined) return false;
      if (value.hasExternalCoaching === false) return ccaDone;
      if (!value.trainingFrequency) return false;
      const externalDone = value.knownIslandRanking
        ? true
        : !!(value.externalCompLevel && value.externalBestResult && value.externalParticipationType);
      return externalDone && ccaDone;
    }

    return false;
  }

  if (category === "leadership") {
    return !!(value.leadershipPosition && value.leadershipExternal && value.leadershipDuration);
  }

  if (category === "uniformed") {
    return !!(value.uniformedRank && value.uniformedHighestActivity && value.uniformedYears);
  }

  if (category === "languages") {
    return !!(value.languageLevel && value.languageCompetition && value.languageYears);
  }

  if (category === "stem" || category === "debate") {
    return !!(value.stemCompLevel && value.stemBestResult && value.stemCompCount);
  }

  return false;
}

async function postRecommendRecord(payload: {
  alScore: number;
  talents: Array<{ category: string; specificArea: string; tier: string }>;
  recommendedSchools: Array<{ name: string; tier: string }>;
  region?: string;
  town?: string;
  email?: string;
}) {
  const response = await fetch("/api/recommend", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, ...getStoredUtm() }),
  });
  return response.ok;
}

function buildApiPayload(
  alScore: number,
  talents: TalentAssessmentInput[],
  result: RecommendResult,
  location: { region: string; town: string },
  email?: string,
) {
  const recommendedSchools = [
    ...result.safe, ...result.reach, ...result.dream, ...result.special,
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

/* ── Step progress dots ──────────────────────────────────────────── */

function StepDots({ current, total }: { current: number; total: number }) {
  return (
    <div className="mb-6 flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 rounded-full transition-all duration-300 ${
            i < current ? "bg-champagne" : "bg-slate-200"
          } ${i === current - 1 ? "w-8" : i < current ? "w-5" : "w-4"}`}
        />
      ))}
      <span className="ml-1 text-[11px] font-semibold tracking-[0.08em] text-slate-400">
        {current}/{total}
      </span>
    </div>
  );
}

/* ── Wizard navigation buttons ───────────────────────────────────── */

function WizardNav({
  onBack,
  onNext,
  nextLabel = "Continue →",
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
    <div className="mt-2 flex flex-wrap gap-3 border-t border-slate-100 pt-5">
      {showBack && onBack && (
        <button
          type="button"
          onClick={onBack}
          className="rounded-xl border border-intellectual/15 bg-white px-5 py-2.5 text-sm font-medium text-intellectual transition hover:border-intellectual/30 hover:bg-intellectual/5"
        >
          ← Back
        </button>
      )}
      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        className="rounded-xl bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual shadow-gold transition hover:bg-champagne-light disabled:cursor-not-allowed disabled:opacity-40"
      >
        {nextLabel}
      </button>
    </div>
  );
}

/* ── Results view ────────────────────────────────────────────────── */

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

  const tierConfig = {
    special: { label: "Specialised Schools (DSA Only)", desc: "These schools admit students exclusively through DSA and offer specialised programmes not available at mainstream secondary schools." },
    safe:    { label: "A good match — and a secured option", desc: `These schools' recent admission AL scores (≈ AL ${alScore}–${alScore + 2}) suggest your child may qualify via S1 posting too. Applying via DSA secures a spot earlier.` },
    reach:   { label: "Stretch for these — DSA is your main pathway", desc: "Your child's PSLE score alone would not qualify for these schools. DSA gives you access based on talent." },
    dream:   { label: "Aspirational — your child's talent is the key", desc: "These are highly selective schools. Only apply if your child's talent level is genuinely competitive. Check their DSA intake directly." },
  } as const;

  return (
    <div className="space-y-8">
      {result.warnings.map((warning) => (
        <div key={warning} className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">
          {warning}
        </div>
      ))}
      {(["special", "safe", "reach", "dream"] as const).map((tier) => {
        const schools = result[tier];
        if (!schools.length) return null;
        const { label, desc } = tierConfig[tier];
        return (
          <section key={tier} className="space-y-4">
            <div className="space-y-1.5">
              <h2 className="font-display text-[1rem] font-bold text-slate-900">{label}</h2>
              <p className="text-[0.8125rem] leading-relaxed text-slate-500">{desc}</p>
            </div>
            <div className="grid gap-3">
              {schools.map((school) => renderSchool(school, tier))}
            </div>
          </section>
        );
      })}
      <EmailCapture onSubmit={onEmailSubmit} onSkip={onEmailSkip} />
    </div>
  );
}

/* ── Main wizard ─────────────────────────────────────────────────── */

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
  const totalSteps = step === 4 ? 4 : 3;

  const completedTalents = useMemo(
    () => toAssessmentInputs(selectedTalents, talentValues),
    [selectedTalents, talentValues],
  );

  const runRecommend = useCallback(
    (region?: string) => recommend({ alScore: alScore!, talents: completedTalents, ...(region ? { region } : {}) }),
    [alScore, completedTalents],
  );

  const getRecommendedSchoolCount = useCallback((nextResult: RecommendResult) => (
    nextResult.safe.length + nextResult.reach.length + nextResult.dream.length + nextResult.special.length
  ), []);

  const goToResults = useCallback((nextResult: RecommendResult) => {
    setResult(nextResult);
    setPhase("results");
    setStep(0);
  }, []);

  const finishWizard = useCallback(() => {
    const preview = runRecommend();
    if (hasNonIpSchools(preview) && !preview.eliteMode) { setStep(4); return; }
    goToResults(preview);
  }, [goToResults, runRecommend]);

  const finishLocation = useCallback(() => {
    goToResults(runRecommend(location.region || undefined));
  }, [goToResults, location.region, runRecommend]);

  const selectedAreaCount = Object.values(areaByCategory).filter(Boolean).length;

  const beginTalentAssessment = () => {
    const next: SelectedTalent[] = MOE_TALENT_CATEGORIES.filter((c) => areaByCategory[c.id]).map((c) => ({
      category: c.id, specificArea: areaByCategory[c.id]!, categoryLabel: c.label,
    }));
    setSelectedTalents(next);
    setTalentValues(next.map((item) => ({ category: item.category, specificArea: item.specificArea })));
    setCurrentTalentIndex(0);
    setStep(3);
  };

  useEffect(() => {
    if (phase !== "results" || !result || alScore === undefined || postedRef.current) return;
    postedRef.current = true;
    void postRecommendRecord(buildApiPayload(alScore, completedTalents, result, location)).then((success) => {
      if (success) {
        trackEvent("finder_completed", { school_count: getRecommendedSchoolCount(result) });
      }
    });
  }, [phase, result, alScore, completedTalents, location, getRecommendedSchoolCount]);

  const handleEmailSubmit = (email: string) => {
    if (!result || alScore === undefined) return;
    void postRecommendRecord(buildApiPayload(alScore, completedTalents, result, location, email));
  };

  /* ── Results phase ── */
  if (phase === "results" && result && alScore !== undefined) {
    return (
      <div className="space-y-6">
        <div className="mb-2 rounded-xl bg-gradient-to-br from-intellectual to-intellectual-light p-5 text-white">
          <div className="mb-1.5 flex items-center gap-2">
            <span className="text-champagne" aria-hidden>✦</span>
            <span className="text-[10px] font-bold tracking-[0.12em] text-white/50">YOUR RESULTS</span>
          </div>
          <h1 className="font-display text-[1.25rem] font-bold leading-snug text-white" style={{ textTransform: "none" }}>
            Your DSA recommendations
          </h1>
          <p className="mt-1.5 text-[0.8125rem] text-white/65">
            Based on AL {alScore} · {completedTalents.length} talent area{completedTalents.length !== 1 ? "s" : ""} assessed
          </p>
        </div>
        <ResultsView result={result} alScore={alScore} onEmailSubmit={handleEmailSubmit} onEmailSkip={() => {}} />
        <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4">
          {inModal ? (
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-intellectual/15 bg-white px-5 py-2.5 text-sm font-medium text-intellectual transition hover:border-intellectual/30 hover:bg-intellectual/5"
            >
              Close
            </button>
          ) : (
            <Link href="/" className="rounded-xl border border-intellectual/15 bg-white px-5 py-2.5 text-sm font-medium text-intellectual transition hover:border-intellectual/30 hover:bg-intellectual/5">
              ← Back to homepage
            </Link>
          )}
          <button
            type="button"
            onClick={() => { postedRef.current = false; setPhase("wizard"); setStep(1); setResult(null); setCurrentTalentIndex(0); }}
            className="text-sm text-slate-400 transition hover:text-slate-600"
          >
            Start over
          </button>
        </div>
      </div>
    );
  }

  /* ── Wizard phase ── */
  return (
    <div className="space-y-5">
      {/* Page title (only on standalone /recommend page) */}
      {!inModal && (
        <header className="space-y-1">
          <h1 className="font-display text-xl font-bold text-slate-900" style={{ textTransform: "none" }}>
            DSA school recommender
          </h1>
        </header>
      )}

      {/* Step progress dots */}
      {phase === "wizard" && step > 0 && (
        <StepDots current={step} total={totalSteps} />
      )}

      {/* ── Step 1: PSLE score ── */}
      {step === 1 && (
        <section className="space-y-5">
          <div className="space-y-1.5">
            <h2 className="font-display text-[1.0625rem] font-bold text-slate-900" style={{ textTransform: "none" }}>
              What is your child&apos;s estimated PSLE AL score?
            </h2>
            <p className="text-[0.8125rem] text-slate-500">
              Use P5 end-of-year results as a reference. Lower is better.
            </p>
          </div>

          <div className="space-y-1.5">
            <label className="text-[0.8125rem] font-semibold text-slate-700">PSLE AL score</label>
            <input
              type="number"
              min={4}
              max={32}
              value={alScore ?? ""}
              onChange={(e) => setAlScore(e.target.value === "" ? undefined : Number(e.target.value))}
              placeholder="e.g. 14"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-champagne focus:outline-none focus:ring-2 focus:ring-champagne/20"
            />
            <p className="text-[0.75rem] text-slate-400">AL 4 = all AL1 (top). AL 32 = all AL8 (lowest).</p>
          </div>

          {alBlocked && (
            <div className="space-y-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              <p>
                DSA is for students entering Express or IP schools (AL ≤ 22). With a projected score ≥ 23, the S1 posting exercise is the recommended pathway.
              </p>
              <Link href="/psle-cop" className="inline-block font-semibold text-red-600 underline underline-offset-2 hover:text-red-800">
                View PSLE COP information →
              </Link>
            </div>
          )}

          <WizardNav showBack={false} onNext={() => setStep(2)} nextDisabled={!alValid} />
        </section>
      )}

      {/* ── Step 2: Talent selection ── */}
      {step === 2 && (
        <section className="space-y-5">
          <div className="space-y-1.5">
            <h2 className="font-display text-[1.0625rem] font-bold text-slate-900" style={{ textTransform: "none" }}>
              What are your child&apos;s talents or special strengths?
            </h2>
            <p className="text-[0.8125rem] text-slate-500">
              You can add multiple. Each will be assessed separately.
            </p>
          </div>

          <div className="space-y-2">
            {MOE_TALENT_CATEGORIES.map((cat) => {
              const areas = getAreasForCategory(cat.id);
              const isExpanded = expandedCategory === cat.id;
              const selectedArea = areaByCategory[cat.id];

              return (
                <div
                  key={cat.id}
                  className={`overflow-hidden rounded-xl border transition-all duration-150 ${
                    selectedArea
                      ? "border-champagne/40 bg-champagne/5 shadow-gold"
                      : "border-[#e3ded5] bg-white shadow-card"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setExpandedCategory(isExpanded ? null : cat.id)}
                    className="flex w-full items-center justify-between px-4 py-3.5 text-left text-sm font-medium text-slate-800 transition hover:bg-black/[0.02]"
                  >
                    <span>{cat.label}</span>
                    {selectedArea ? (
                      <span className="rounded-full bg-champagne/15 px-2.5 py-0.5 text-[11px] font-semibold text-champagne-dark">
                        ✓ {selectedArea}
                      </span>
                    ) : (
                      <span className="text-slate-400 text-lg leading-none">{isExpanded ? "−" : "+"}</span>
                    )}
                  </button>

                  {isExpanded && (
                    <div className="max-h-56 space-y-1.5 overflow-y-auto border-t border-[#e3ded5] bg-surface/50 px-4 py-3">
                      {areas.length === 0 ? (
                        <p className="text-xs text-slate-400">No areas listed.</p>
                      ) : (
                        areas.map((area) => (
                          <label key={area} className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-1.5 text-sm text-slate-700 transition hover:bg-champagne/10">
                            <input
                              type="radio"
                              name={`area-${cat.id}`}
                              checked={selectedArea === area}
                              onChange={() => setAreaByCategory((prev) => ({ ...prev, [cat.id]: area }))}
                              className="accent-champagne-dark"
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

          <WizardNav onBack={() => setStep(1)} onNext={beginTalentAssessment} nextDisabled={selectedAreaCount === 0} />
        </section>
      )}

      {/* ── Step 3: Talent assessment ── */}
      {step === 3 && selectedTalents.length > 0 && (
        <section className="space-y-5">
          <div className="space-y-1">
            <div className="text-[0.75rem] font-semibold tracking-[0.08em] text-champagne-dark">
              TALENT {currentTalentIndex + 1} OF {selectedTalents.length}
            </div>
            <h2 className="font-display text-[1.0625rem] font-bold text-slate-900" style={{ textTransform: "none" }}>
              {selectedTalents[currentTalentIndex].specificArea}
            </h2>
            <p className="text-[0.8125rem] text-slate-500">
              {selectedTalents[currentTalentIndex].categoryLabel}
            </p>
          </div>

          <TalentSection
            category={selectedTalents[currentTalentIndex].category}
            specificArea={selectedTalents[currentTalentIndex].specificArea}
            value={talentValues[currentTalentIndex] ?? {}}
            onChange={(input) => {
              setTalentValues((prev) => { const next = [...prev]; next[currentTalentIndex] = input; return next; });
            }}
          />

          <WizardNav
            onBack={() => { currentTalentIndex > 0 ? setCurrentTalentIndex((i) => i - 1) : setStep(2); }}
            onNext={() => {
              if (currentTalentIndex < selectedTalents.length - 1) {
                setCurrentTalentIndex((i) => i + 1);
              } else {
                finishWizard();
              }
            }}
            nextDisabled={!isTalentSectionComplete(
              talentValues[currentTalentIndex] ?? {},
              selectedTalents[currentTalentIndex].category,
            )}
          />
        </section>
      )}

      {/* ── Step 4: Location ── */}
      {step === 4 && (
        <section className="space-y-5">
          <LocationPicker visible value={location} onChange={(region, town) => setLocation({ region, town })} />
          <WizardNav
            onBack={() => { setStep(3); setCurrentTalentIndex(selectedTalents.length - 1); }}
            onNext={finishLocation}
            nextLabel="See my recommendations →"
            nextDisabled={!location.region}
          />
        </section>
      )}
    </div>
  );
}
