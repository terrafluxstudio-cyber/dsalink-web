"use client";

import { ArrowRight, ChevronDown, HelpCircle, Info, Search, Sparkles } from "lucide-react";
import { NextStepCta } from "@/components/NextStepCta";
import { PageHeader } from "@/components/PageHeader";
import { SchoolFinderModal } from "@/components/SchoolFinderModal";
import type { ReactNode } from "react";
import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import {
  getDsaCategoryLabel,
  getDsaCategorySearchTerms,
  getDsaTalentLabel,
  getDsaTalentSearchTerms,
  getDsaUiLabel,
  type DsaCategory as Category,
  type DsaUiKey,
} from "@/constants/dsa_translations";
import {
  UI_TRANSLATIONS,
} from "@/constants/ui_translations";
import { SchoolDisplayName } from "@/components/SchoolDisplayName";
import { SchoolLogo } from "@/components/SchoolLogo";
import { useLanguage } from "@/contexts/LanguageContext";
import dsaMasterRaw from "@/data/dsa_master_list.json";
import mockRaw from "@/data/dsa_mock_schools.json";
import { SCHOOL_COP_HISTORY_DATA } from "@/lib/school-cop-history-data";

type ViewMode = "school" | "talent";

type DsaTalent = {
  category: Category;
  area: string;
  description: string;
};

type DsaSchool = {
  id: string;
  schoolName: string;
  slug: string;
  psleCop: {
    pg1: string | null;
    pg2: string | null;
    pg3: string | null;
    affiliated: {
      pg1: string | null;
      pg2: string | null;
      pg3: string | null;
    };
  };
  openHouse: {
    date: string | null;
    link: string;
  };
  dsaTalents: DsaTalent[];
};

type IndexedSchool = DsaSchool & {
  searchText: string;
  psleLabel: string | null;
};

type TalentGroup = {
  area: string;
  category: Category;
  schools: IndexedSchool[];
  searchText: string;
};

type TalentCategoryGroup = {
  category: Category;
  groups: TalentGroup[];
  schoolMatches: number;
};

const CATEGORIES: Category[] = ["Sports", "Arts", "STEM", "Leadership", "Languages"];
const USE_MOCK = process.env.NEXT_PUBLIC_DSA_MOCK === "true";
// Exclude specialised schools that use non-DSA admission pathways and have no MOE-listed talent areas
const SCHOOLS = ((USE_MOCK ? mockRaw : dsaMasterRaw) as DsaSchool[]).filter(
  (s) => s.dsaTalents.length > 0,
);
const DEFAULT_VISIBLE_TALENT_SCHOOLS = 8;
const DEFAULT_VISIBLE_SCHOOLS = 20;

const CATEGORY_STYLES: Record<Category, string> = {
  Sports: "border-emerald-200 bg-emerald-50 text-emerald-800 hover:border-emerald-300",
  Arts: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-800 hover:border-fuchsia-300",
  STEM: "border-sky-200 bg-sky-50 text-sky-800 hover:border-sky-300",
  Leadership: "border-slate-200 bg-slate-100 text-slate-700 hover:border-slate-300",
  Languages: "border-violet-200 bg-violet-50 text-violet-800 hover:border-violet-300",
};

const VAGUE_TALENT_AREAS = new Set(["academic", "stem"]);

const GRAIN_BG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='180' height='180' filter='url(%23n)' opacity='0.15'/></svg>\")";

function normalize(value: string): string {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/\(secondary\)/g, "")
    .replace(/secondary school/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function matchesQuery(searchText: string, query: string): boolean {
  const q = normalize(query);
  if (!q) return true;
  return q.split(/\s+/).every((token) => searchText.includes(token));
}

function isVagueTalentArea(area: string): boolean {
  return VAGUE_TALENT_AREAS.has(normalize(area));
}

function copLookupKey(value: string): string {
  return normalize(value).replace(/\bschool\b/g, "").replace(/\s+/g, " ").trim();
}

const COP_BY_SLUG = new Map(SCHOOL_COP_HISTORY_DATA.map((row) => [row.id, row]));
const COP_BY_NAME = new Map(
  SCHOOL_COP_HISTORY_DATA.map((row) => [copLookupKey(row.nameEn), row]),
);

function getCopLabel(school: DsaSchool): string | null {
  const psleParts = [
    school.psleCop.pg3 ? `PG3: ${school.psleCop.pg3}` : null,
    school.psleCop.pg2 ? `PG2: ${school.psleCop.pg2}` : null,
    school.psleCop.pg1 ? `PG1: ${school.psleCop.pg1}` : null,
  ].filter(Boolean);
  const affiliatedParts = [
    school.psleCop.affiliated.pg3 ? `PG3 ${school.psleCop.affiliated.pg3}` : null,
    school.psleCop.affiliated.pg2 ? `PG2 ${school.psleCop.affiliated.pg2}` : null,
    school.psleCop.affiliated.pg1 ? `PG1 ${school.psleCop.affiliated.pg1}` : null,
  ].filter(Boolean);

  if (psleParts.length > 0) {
    return affiliatedParts.length > 0
      ? `${psleParts.join(" | ")} | Affiliated: ${affiliatedParts.join(", ")}`
      : psleParts.join(" | ");
  }

  const history = COP_BY_SLUG.get(school.slug) ?? COP_BY_NAME.get(copLookupKey(school.schoolName));
  const latest = history?.byYear["2025"];
  const fallbackParts = [
    latest?.g3NonAffiliated ? `PG3: ${latest.g3NonAffiliated}` : null,
    latest?.g2 ? `PG2: ${latest.g2}` : null,
    latest?.g1 ? `PG1: ${latest.g1}` : null,
  ].filter(Boolean);
  if (fallbackParts.length > 0) return fallbackParts.join(" | ");

  return null;
}

function minScoreFromRange(value: string | null | undefined): number | null {
  if (!value) return null;
  const matches = value.match(/\d+/g);
  if (!matches?.length) return null;
  return Math.min(...matches.map(Number));
}

function schoolSortScore(school: DsaSchool): number {
  const candidates = [
    minScoreFromRange(school.psleCop.pg3),
    minScoreFromRange(school.psleCop.pg2),
    minScoreFromRange(school.psleCop.pg1),
    minScoreFromRange(school.psleCop.affiliated.pg3),
    minScoreFromRange(school.psleCop.affiliated.pg2),
    minScoreFromRange(school.psleCop.affiliated.pg1),
  ].filter((score): score is number => typeof score === "number");
  return candidates.length > 0 ? Math.min(...candidates) : Number.POSITIVE_INFINITY;
}

function sortSchoolsByCop(schools: IndexedSchool[]): IndexedSchool[] {
  return [...schools].sort((a, b) => {
    const scoreDiff = schoolSortScore(a) - schoolSortScore(b);
    if (scoreDiff !== 0) return scoreDiff;
    return a.schoolName.localeCompare(b.schoolName, "en");
  });
}

function buildTalentGroups(schools: IndexedSchool[]): TalentGroup[] {
  const map = new Map<string, TalentGroup>();
  for (const school of schools) {
    for (const talent of school.dsaTalents) {
      const key = `${talent.category}::${talent.area.toLowerCase()}`;
      const searchTerms = [
        ...getDsaTalentSearchTerms(talent.area),
        ...getDsaCategorySearchTerms(talent.category),
      ];
      const existing =
        map.get(key) ??
        ({
          area: talent.area,
          category: talent.category,
          schools: [],
          searchText: normalize(searchTerms.join(" ")),
        } satisfies TalentGroup);
      existing.schools.push(school);
      map.set(key, existing);
    }
  }
  return [...map.values()].sort((a, b) => {
    if (b.schools.length !== a.schools.length) return b.schools.length - a.schools.length;
    return a.area.localeCompare(b.area, "en");
  });
}

function categoryCounts(schools: DsaSchool[]): Record<Category, number> {
  const counts = Object.fromEntries(CATEGORIES.map((c) => [c, 0])) as Record<Category, number>;
  for (const school of schools) {
    for (const talent of school.dsaTalents) counts[talent.category] += 1;
  }
  return counts;
}

function groupTalentsByCategory(groups: TalentGroup[]): TalentCategoryGroup[] {
  return CATEGORIES.map((cat) => {
    const categoryGroups = groups.filter((group) => group.category === cat);
    return {
      category: cat,
      groups: categoryGroups,
      schoolMatches: categoryGroups.reduce((total, group) => total + group.schools.length, 0),
    };
  }).filter((group) => group.groups.length > 0);
}

function talentGroupKey(group: TalentGroup): string {
  return `${group.category}::${normalize(group.area)}`;
}

export function DsaSearchCenter({ initialQuery = "" }: { initialQuery?: string }) {
  const { locale, t: copy } = useLanguage();
  const ui = UI_TRANSLATIONS[locale];
  const t = (key: DsaUiKey) => getDsaUiLabel(key, locale);
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState<Category | "All">("All");
  const [mode, setMode] = useState<ViewMode>("school");
  const [selectedTalent, setSelectedTalent] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<Category>>(() => new Set());
  const [expandedSchoolLists, setExpandedSchoolLists] = useState<Set<string>>(() => new Set());
  const [showAllSchools, setShowAllSchools] = useState(false);
  const [finderModalOpen, setFinderModalOpen] = useState(false);
  const deferredQuery = useDeferredValue(query);
  const resultsRef = useRef<HTMLDivElement | null>(null);

  const indexedSchools = useMemo<IndexedSchool[]>(
    () =>
      SCHOOLS.map((school) => ({
        ...school,
        psleLabel: getCopLabel(school),
        searchText: normalize(
          `${school.schoolName} ${school.slug} ${school.dsaTalents
            .flatMap((t) => [
              ...getDsaTalentSearchTerms(t.area),
              ...getDsaCategorySearchTerms(t.category),
            ])
            .join(" ")}`,
        ),
      })),
    [],
  );

  const talentGroups = useMemo(() => buildTalentGroups(indexedSchools), [indexedSchools]);
  const counts = useMemo(() => categoryCounts(SCHOOLS), []);

  const filteredSchools = useMemo(() => {
    const matches = indexedSchools.filter((school) => {
      const categoryMatch =
        category === "All" || school.dsaTalents.some((talent) => talent.category === category);
      return categoryMatch && matchesQuery(school.searchText, deferredQuery);
    });
    return sortSchoolsByCop(matches);
  }, [category, deferredQuery, indexedSchools]);

  const selectedTalentGroup = useMemo(() => {
    if (!selectedTalent) return null;
    return talentGroups.find((group) => group.area.toLowerCase() === selectedTalent.toLowerCase()) ?? null;
  }, [selectedTalent, talentGroups]);

  const filteredTalentGroups = useMemo(() => {
    const source = selectedTalentGroup ? [selectedTalentGroup] : talentGroups;
    return source.filter((group) => {
      const categoryMatch = category === "All" || group.category === category;
      const queryMatch =
        !deferredQuery ||
        matchesQuery(group.searchText, deferredQuery) ||
        group.schools.some((school) => matchesQuery(school.searchText, deferredQuery));
      return categoryMatch && queryMatch;
    });
  }, [category, deferredQuery, selectedTalentGroup, talentGroups]);

  function openTalent(talent: DsaTalent) {
    setMode("talent");
    setSelectedTalent(talent.area);
    setCategory(talent.category);
    setExpandedCategories((current) => new Set(current).add(talent.category));
    window.requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function clearTalent() {
    setSelectedTalent(null);
    setMode("talent");
  }

  useEffect(() => {
    setShowAllSchools(false);
  }, [category, deferredQuery, mode]);

  function toggleCategory(categoryToToggle: Category) {
    setExpandedCategories((current) => {
      const next = new Set(current);
      if (next.has(categoryToToggle)) {
        next.delete(categoryToToggle);
      } else {
        next.add(categoryToToggle);
      }
      return next;
    });
  }

  function toggleSchoolList(key: string) {
    setExpandedSchoolLists((current) => {
      const next = new Set(current);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }

  return (
    <>
      <SchoolFinderModal open={finderModalOpen} onOpenChange={setFinderModalOpen} />
      <PageHeader
        crumbLabel={copy.dsaFinderCrumb}
        kicker={copy.dsaFinderKicker}
        title={t("ui_hero_title")}
        subtitle={t("ui_hero_subtitle")}
      />
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-6 sm:px-6 sm:pb-20">
        <style>{`
          @keyframes twinkle {
            0%,100% { opacity:1; transform:scale(1) rotate(0deg); filter:drop-shadow(0 0 3px rgba(198,162,74,0.9)); }
            30%      { opacity:0.5; transform:scale(0.85) rotate(-12deg); filter:drop-shadow(0 0 1px rgba(198,162,74,0.3)); }
            60%      { opacity:1; transform:scale(1.3) rotate(8deg); filter:drop-shadow(0 0 6px rgba(198,162,74,1)); }
            80%      { opacity:0.7; transform:scale(1.1) rotate(-4deg); filter:drop-shadow(0 0 4px rgba(198,162,74,0.7)); }
          }
          .sparkle-twinkle { animation: twinkle 2.4s ease-in-out infinite; }
        `}</style>

        {/* Two-column hero: left = stats + search  |  right = CTA card */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-stretch sm:gap-5">

          {/* LEFT — stats on top, search below */}
          <div className="flex flex-col gap-4 sm:flex-[0.95]">
            {/* Stats */}
            <div className="flex flex-wrap items-center justify-around gap-y-2 rounded-2xl border border-slate-200 bg-slate-50/80 px-3 py-4 text-center text-slate-500 shadow-sm sm:flex-nowrap sm:px-5">
              <Stat label={t("ui_stat_schools")} value="147" />
              <VerticalDivider className="hidden sm:block" />
              <Stat label={t("ui_stat_talents")} value="1,315" />
              <VerticalDivider className="hidden sm:block" />
              <Stat label={t("ui_stat_categories")} value="5" />
            </div>

            {/* Search bar */}
            <label className="relative block">
              <span className="sr-only">{t("ui_search_placeholder")}</span>
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-600"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t("ui_search_placeholder")}
                autoComplete="off"
                className="w-full rounded-2xl border-2 border-blue-500/20 bg-white py-4 pl-12 pr-4 text-base font-semibold text-intellectual shadow-xl outline-none transition placeholder:text-intellectual-muted/60 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:text-lg"
              />
            </label>
          </div>

          {/* RIGHT — CTA card, full height */}
          <div className="relative overflow-hidden rounded-2xl sm:flex-[1.05]">
            <div aria-hidden className="absolute inset-0" style={{ backgroundColor: "#0d3f5f" }} />
            <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: GRAIN_BG, backgroundSize: "180px 180px" }} />
            <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 65% at 95% -5%, rgba(198,162,74,0.30), transparent 60%)" }} />
            <div className="relative z-10 flex h-full flex-col justify-between px-6 py-5 sm:py-6">
              <div>
                {/* Eyebrow badge — brighter */}
                <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-champagne/60 bg-champagne/20 px-3 py-1 text-[11px] font-bold tracking-[0.12em] text-champagne-light">
                  <Sparkles className="sparkle-twinkle h-4 w-4 shrink-0" aria-hidden />
                  {copy.ctaFreePersonalisedTool}
                </p>
                <p className="font-display text-[1.1rem] font-extrabold leading-snug text-white sm:text-[1.2rem]" style={{ textTransform: "none" }}>
                  {copy.homeCtaTitle}
                </p>
                <p className="mt-2 text-[0.8125rem] leading-relaxed text-white/65" style={{ textTransform: "none" }}>
                  {copy.homeCtaSubtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setFinderModalOpen(true)}
                className="mt-4 inline-flex items-center gap-2 self-start rounded-xl border border-champagne/50 bg-champagne px-5 py-2.5 text-sm font-semibold text-intellectual shadow-gold transition hover:bg-champagne-light animate-gold-breathe"
              >
                <span style={{ textTransform: "none" }}>{copy.homeCtaPrimary}</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </button>
            </div>
          </div>
        </div>

      {/* Filter hint — just above the sticky tag bar */}
      <p className="mt-4 text-xs font-medium text-slate-500">
        {t("ui_search_hint")}
      </p>

      <div className="sticky top-[65px] z-30 mt-2 rounded-2xl border border-intellectual/10 bg-white/90 p-3 shadow-soft backdrop-blur">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="inline-flex rounded-xl bg-slate-100 p-1">
            <ModeButton active={mode === "school"} onClick={() => setMode("school")}>
              {copy.dsaFinderBySchool}
            </ModeButton>
            <ModeButton active={mode === "talent"} onClick={clearTalent}>
              {copy.dsaFinderByTalent}
            </ModeButton>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <FilterButton active={category === "All"} onClick={() => setCategory("All")}>
              {copy.scoreboardAll}
            </FilterButton>
            {CATEGORIES.map((cat) => (
              <FilterButton key={cat} active={category === cat} onClick={() => setCategory(cat)}>
                {getDsaCategoryLabel(cat, locale)} <span className="opacity-60">{counts[cat]}</span>
              </FilterButton>
            ))}
          </div>
        </div>
      </div>

      <div ref={resultsRef} className="scroll-mt-32">
        {mode === "school" ? (
          <SchoolResults
            schools={filteredSchools}
            total={indexedSchools.length}
            onTalentClick={openTalent}
            locale={locale}
            showAll={showAllSchools}
            onShowAll={() => setShowAllSchools(true)}
          />
        ) : (
          <TalentResults
            groups={filteredTalentGroups}
            selectedTalent={selectedTalent}
            onTalentClear={clearTalent}
            expandedCategories={expandedCategories}
            expandedSchoolLists={expandedSchoolLists}
            onCategoryToggle={toggleCategory}
            onSchoolListToggle={toggleSchoolList}
            shouldAutoExpand={Boolean(deferredQuery.trim()) || Boolean(selectedTalent)}
            locale={locale}
          />
        )}
      </div>

      <NextStepCta
        title={copy.nextStepApplyTitle}
        body={copy.nextStepApplyBody}
        links={[
          { href: "/apply", label: copy.nextStepApplyBtn, primary: true },
          { href: "/open-house-takeaways", label: copy.nextStepTakeawaysBtn },
        ]}
      />

      {/* Data note — bottom of page */}
      <div className="mt-6 flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-xs leading-5 text-slate-600 sm:px-4">
        <Info className="h-4 w-4 shrink-0 text-blue-500" aria-hidden />
        <p className="min-w-0">
          {ui.dsaDataNotePrefix}{" "}
          <a
            href="https://www.dsa-is.moe.gov.sg/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slate-800 underline decoration-blue-300 decoration-2 underline-offset-2 transition hover:text-blue-700"
          >
            {ui.dsaDataNotePortal}
          </a>{" "}
          {ui.dsaDataNoteSuffix}
        </p>
      </div>
      </div>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-[5.5rem] flex-1 px-1 py-1">
      <p className="font-display text-lg font-bold leading-none text-intellectual/80 sm:text-xl">{value}</p>
      <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-slate-500 sm:text-[10px]">
        {label}
      </p>
    </div>
  );
}

function VerticalDivider({ className = "" }: { className?: string }) {
  return <span className={`h-8 w-px shrink-0 bg-slate-200 ${className}`} aria-hidden />;
}

function ModeButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
        active ? "bg-intellectual text-white shadow-sm" : "text-intellectual-muted hover:text-intellectual"
      }`}
    >
      {children}
    </button>
  );
}

function FilterButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-3 py-1.5 text-xs font-semibold transition sm:text-sm ${
        active
          ? "border-champagne/70 bg-champagne text-white shadow-sm"
          : "border-intellectual/10 bg-white text-intellectual-muted hover:border-champagne/50 hover:text-intellectual"
      }`}
    >
      {children}
    </button>
  );
}

function SchoolResults({
  schools,
  total,
  onTalentClick,
  locale,
  showAll,
  onShowAll,
}: {
  schools: IndexedSchool[];
  total: number;
  onTalentClick: (talent: DsaTalent) => void;
  locale: Parameters<typeof getDsaTalentLabel>[1];
  showAll: boolean;
  onShowAll: () => void;
}) {
  const { t: copy } = useLanguage();
  const visibleSchools = showAll ? schools : schools.slice(0, DEFAULT_VISIBLE_SCHOOLS);
  const remainingCount = Math.max(schools.length - visibleSchools.length, 0);

  return (
    <div className="mt-6">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-intellectual">
          Showing {visibleSchools.length} of {schools.length} schools
          {schools.length !== total ? ` (${total} total)` : ""}
        </p>
        <p className="hidden text-xs text-intellectual-muted sm:block">
          {copy.dsaFinderModeTip}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {visibleSchools.map((school) => (
          <SchoolCard key={school.id} school={school} onTalentClick={onTalentClick} locale={locale} />
        ))}
      </div>
      {remainingCount > 0 ? (
        <button
          type="button"
          onClick={onShowAll}
          className="mt-5 w-full rounded-2xl border border-intellectual/10 bg-white px-4 py-3 text-sm font-semibold text-intellectual-muted transition hover:border-champagne/50 hover:bg-champagne-subtle/30 hover:text-intellectual"
        >
          {copy.dsaFinderShowAll.replace("{{n}}", String(remainingCount))}
        </button>
      ) : null}
      {schools.length === 0 ? <EmptyState /> : null}
    </div>
  );
}

function SchoolCard({
  school,
  onTalentClick,
  locale,
}: {
  school: IndexedSchool;
  onTalentClick: (talent: DsaTalent) => void;
  locale: Parameters<typeof getDsaTalentLabel>[1];
}) {
  const { t: copy } = useLanguage();
  return (
    <article className="rounded-2xl border border-intellectual/10 bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:border-champagne/40 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-2.5">
          <SchoolLogo schoolId={school.slug} nameEn={school.schoolName} size={36} />
          <div className="min-w-0">
            <h2 className="break-words font-display text-lg font-semibold leading-tight text-intellectual">
              <SchoolDisplayName locale={locale} nameEn={school.schoolName} />
            </h2>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-champagne-dark">
              {school.psleLabel ?? copy.dsaFinderPsleEstimate}
            </p>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-intellectual/5 px-2.5 py-1 text-xs font-semibold text-intellectual-muted">
          {school.dsaTalents.length} tags
        </span>
      </div>
      {school.dsaTalents.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {school.dsaTalents.map((talent) => (
            <TalentTag
              key={`${school.id}-${talent.category}-${talent.area}`}
              talent={talent}
              onClick={onTalentClick}
              locale={locale}
            />
          ))}
        </div>
      ) : (
        <p className="mt-4 rounded-xl border border-dashed border-intellectual/15 bg-slate-50 px-3 py-2 text-sm text-intellectual-muted">
          No MOE SchoolFinder DSA talent areas listed. Check the school site for school-based admission.
        </p>
      )}
    </article>
  );
}

function TalentTag({
  talent,
  onClick,
  locale,
}: {
  talent: DsaTalent;
  onClick: (talent: DsaTalent) => void;
  locale: Parameters<typeof getDsaTalentLabel>[1];
}) {
  const vague = isVagueTalentArea(talent.area);
  const label = getDsaTalentLabel(talent.area, locale);

  return (
    <button
      type="button"
      onClick={() => onClick(talent)}
      className={`inline-flex max-w-full items-center gap-1 rounded-full border px-2.5 py-1 text-left text-xs font-semibold leading-snug transition ${CATEGORY_STYLES[talent.category]}`}
      title={
        vague
          ? "This school uses a broad official label. Please check the school website for details."
          : `Compare schools offering ${talent.area}`
      }
    >
      <span className="min-w-0 whitespace-normal break-words">{label}</span>
      {vague ? (
        <HelpCircle
          className="h-3 w-3 shrink-0 opacity-70"
          aria-label="This school may have broader programme details; check official site."
        />
      ) : null}
    </button>
  );
}

function TalentResults({
  groups,
  selectedTalent,
  onTalentClear,
  expandedCategories,
  expandedSchoolLists,
  onCategoryToggle,
  onSchoolListToggle,
  shouldAutoExpand,
  locale,
}: {
  groups: TalentGroup[];
  selectedTalent: string | null;
  onTalentClear: () => void;
  expandedCategories: Set<Category>;
  expandedSchoolLists: Set<string>;
  onCategoryToggle: (category: Category) => void;
  onSchoolListToggle: (key: string) => void;
  shouldAutoExpand: boolean;
  locale: Parameters<typeof getDsaTalentLabel>[1];
}) {
  const categoryGroups = groupTalentsByCategory(groups);

  return (
    <div className="mt-6">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-intellectual">
          {selectedTalent
            ? `Comparing: ${getDsaTalentLabel(selectedTalent, locale)}`
            : `Showing ${categoryGroups.length} categories and ${groups.length} talent groups`}
        </p>
        {selectedTalent ? (
          <button
            type="button"
            onClick={onTalentClear}
            className="rounded-lg border border-intellectual/10 bg-white px-3 py-1.5 text-xs font-semibold text-intellectual-muted transition hover:border-champagne/50 hover:text-intellectual"
          >
            View all talents
          </button>
        ) : null}
      </div>
      <div className="space-y-3">
        {categoryGroups.map((categoryGroup) => {
          const open = shouldAutoExpand || expandedCategories.has(categoryGroup.category);
          return (
            <TalentCategoryAccordion
              key={categoryGroup.category}
              categoryGroup={categoryGroup}
              open={open}
              expandedSchoolLists={expandedSchoolLists}
              onCategoryToggle={onCategoryToggle}
              onSchoolListToggle={onSchoolListToggle}
              locale={locale}
            />
          );
        })}
      </div>
      {categoryGroups.length === 0 ? <EmptyState /> : null}
    </div>
  );
}

function TalentCategoryAccordion({
  categoryGroup,
  open,
  expandedSchoolLists,
  onCategoryToggle,
  onSchoolListToggle,
  locale,
}: {
  categoryGroup: TalentCategoryGroup;
  open: boolean;
  expandedSchoolLists: Set<string>;
  onCategoryToggle: (category: Category) => void;
  onSchoolListToggle: (key: string) => void;
  locale: Parameters<typeof getDsaTalentLabel>[1];
}) {
  const categoryLabel = getDsaCategoryLabel(categoryGroup.category, locale);

  return (
    <section className="overflow-hidden rounded-2xl border border-intellectual/10 bg-white shadow-soft transition hover:border-champagne/30">
      <button
        type="button"
        onClick={() => onCategoryToggle(categoryGroup.category)}
        className="flex w-full flex-wrap items-center justify-between gap-3 px-4 py-4 text-left sm:px-5"
        aria-expanded={open}
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-champagne-dark">
            DSA category
          </p>
          <h2 className="mt-1 flex items-center gap-2 font-display text-2xl font-semibold text-intellectual">
            <Sparkles className="h-4 w-4 text-champagne" aria-hidden />
            {categoryLabel}
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-intellectual/5 px-3 py-1 text-xs font-semibold text-intellectual-muted">
            {categoryGroup.groups.length} talents · {categoryGroup.schoolMatches} school matches
          </span>
          <ChevronDown
            className={`h-5 w-5 text-intellectual-muted transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden
          />
        </div>
      </button>
      {open ? (
        <div className="grid grid-rows-[1fr] opacity-100 transition-[grid-template-rows,opacity] duration-300 ease-out">
          <div className="overflow-hidden">
            <div className="space-y-3 border-t border-intellectual/8 bg-slate-50/70 p-3 sm:p-4">
              {categoryGroup.groups.map((group) => (
                <TalentGroupAccordion
                  key={talentGroupKey(group)}
                  group={group}
                  expanded={expandedSchoolLists.has(talentGroupKey(group))}
                  onSchoolListToggle={onSchoolListToggle}
                  locale={locale}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function TalentGroupAccordion({
  group,
  expanded,
  onSchoolListToggle,
  locale,
}: {
  group: TalentGroup;
  expanded: boolean;
  onSchoolListToggle: (key: string) => void;
  locale: Parameters<typeof getDsaTalentLabel>[1];
}) {
  const { t: copy } = useLanguage();
  const groupKey = talentGroupKey(group);
  const shouldLimit = group.schools.length > 10;
  const visibleSchools = shouldLimit && !expanded
    ? group.schools.slice(0, DEFAULT_VISIBLE_TALENT_SCHOOLS)
    : group.schools;
  const groupLabel = getDsaTalentLabel(group.area, locale);

  return (
    <article className="rounded-2xl border border-intellectual/10 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-champagne/40">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-intellectual/8 pb-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-champagne-dark">
            {getDsaCategoryLabel(group.category, locale)}
          </p>
          <h3 className="mt-1 break-words font-display text-xl font-semibold text-intellectual">
            {groupLabel}
          </h3>
        </div>
        <span className="rounded-full bg-intellectual px-3 py-1 text-xs font-semibold text-white">
          {group.schools.length} schools
        </span>
      </div>
      <div className="mt-3 grid gap-2 transition-all duration-300 sm:grid-cols-2 lg:grid-cols-3">
        {visibleSchools.map((school) => (
          <div
            key={`${group.area}-${school.id}`}
            className="flex items-start gap-2 rounded-xl border border-intellectual/8 bg-slate-50/80 px-3 py-2 transition-all duration-300 hover:border-champagne/30 hover:bg-white hover:shadow-sm"
          >
            <SchoolLogo schoolId={school.slug} nameEn={school.schoolName} size={24} />
            <div className="min-w-0">
              <p className="break-words text-sm font-semibold text-intellectual">
                <SchoolDisplayName locale={locale} nameEn={school.schoolName} />
              </p>
              <p className="mt-0.5 text-xs text-intellectual-muted">{school.psleLabel ?? copy.dsaFinderPsleEstimate}</p>
            </div>
          </div>
        ))}
      </div>
      {shouldLimit ? (
        <button
          type="button"
          onClick={() => onSchoolListToggle(groupKey)}
          className="mt-3 rounded-xl border border-champagne/40 bg-champagne-subtle px-3 py-2 text-xs font-semibold text-intellectual transition hover:border-champagne hover:bg-champagne/15"
          aria-expanded={expanded}
        >
          {expanded ? copy.dsaFinderShowFewer : copy.dsaFinderShowAll.replace("{{n}}", String(group.schools.length))}
        </button>
      ) : null}
    </article>
  );
}

function EmptyState() {
  const { t: copy } = useLanguage();
  return (
    <div className="rounded-2xl border border-dashed border-intellectual/15 bg-white p-8 text-center text-intellectual-muted">
      {copy.dsaFinderNoMatches}
    </div>
  );
}
