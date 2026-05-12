"use client";

import { ChevronDown, HelpCircle, Search, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { useDeferredValue, useMemo, useRef, useState } from "react";
import {
  getDsaCategoryLabel,
  getDsaCategorySearchTerms,
  getDsaTalentLabel,
  getDsaTalentSearchTerms,
  type DsaCategory as Category,
} from "@/constants/dsa_translations";
import { useLanguage } from "@/contexts/LanguageContext";
import dsaMasterRaw from "@/data/dsa_master_list.json";
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
  psleLabel: string;
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
const SCHOOLS = dsaMasterRaw as DsaSchool[];
const DEFAULT_VISIBLE_TALENT_SCHOOLS = 8;

const CATEGORY_STYLES: Record<Category, string> = {
  Sports: "border-emerald-200 bg-emerald-50 text-emerald-800 hover:border-emerald-300",
  Arts: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-800 hover:border-fuchsia-300",
  STEM: "border-sky-200 bg-sky-50 text-sky-800 hover:border-sky-300",
  Leadership: "border-amber-200 bg-amber-50 text-amber-800 hover:border-amber-300",
  Languages: "border-violet-200 bg-violet-50 text-violet-800 hover:border-violet-300",
};

const VAGUE_TALENT_AREAS = new Set(["academic", "stem"]);

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

function getCopLabel(school: DsaSchool): string {
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

  return "PSLE estimate: check school profile";
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

export function DsaSearchCenter() {
  const { locale } = useLanguage();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category | "All">("All");
  const [mode, setMode] = useState<ViewMode>("school");
  const [selectedTalent, setSelectedTalent] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<Category>>(() => new Set());
  const [expandedSchoolLists, setExpandedSchoolLists] = useState<Set<string>>(() => new Set());
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
    return indexedSchools.filter((school) => {
      const categoryMatch =
        category === "All" || school.dsaTalents.some((talent) => talent.category === category);
      return categoryMatch && matchesQuery(school.searchText, deferredQuery);
    });
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
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12">
      <header className="rounded-[2rem] border border-intellectual/10 bg-white/85 p-5 shadow-soft backdrop-blur sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne-dark">
          Official MOE SchoolFinder DSA data · 2026
        </p>
        <div className="mt-3 grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-intellectual sm:text-5xl">
              DSA 2026 talent search center
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-intellectual-muted sm:text-base">
              Search 147 secondary schools and 1,315 official DSA talent entries. Start by school,
              then tap any talent tag to compare every school offering that route.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 rounded-2xl border border-champagne/20 bg-champagne-subtle/50 p-3 text-center">
            <Stat label="Schools" value="147" />
            <Stat label="Talent entries" value="1,315" />
            <Stat label="Categories" value="5" />
          </div>
        </div>

        <label className="relative mt-6 block">
          <span className="sr-only">Search schools or DSA talent areas</span>
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-champagne-dark"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Search "Raffles", "Wushu", "Robotics", "Chinese Orchestra"...'
            autoComplete="off"
            className="w-full rounded-2xl border-2 border-intellectual/10 bg-white py-4 pl-12 pr-4 text-base font-semibold text-intellectual shadow-sm outline-none ring-champagne/30 transition placeholder:text-intellectual-muted/60 focus:border-champagne/60 focus:ring-2 sm:text-lg"
          />
        </label>
        <p className="mt-3 text-[11px] leading-relaxed text-intellectual-muted sm:text-xs">
          Note: Data synced with official MOE sources as of May 2026. While we strive for
          100% accuracy, please always cross-reference with the{" "}
          <a
            href="https://www.dsa-is.moe.gov.sg/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-intellectual underline decoration-champagne/60 decoration-2 underline-offset-2 transition hover:text-champagne-dark"
          >
            MOE DSA Portal
          </a>{" "}
          for final application details.
        </p>
      </header>

      <div className="sticky top-[65px] z-30 mt-5 rounded-2xl border border-intellectual/10 bg-white/90 p-3 shadow-soft backdrop-blur">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="inline-flex rounded-xl bg-slate-100 p-1">
            <ModeButton active={mode === "school"} onClick={() => setMode("school")}>
              By School
            </ModeButton>
            <ModeButton active={mode === "talent"} onClick={clearTalent}>
              By Talent
            </ModeButton>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <FilterButton active={category === "All"} onClick={() => setCategory("All")}>
              All
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
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-xl font-semibold text-intellectual sm:text-2xl">{value}</p>
      <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-intellectual-muted">
        {label}
      </p>
    </div>
  );
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
}: {
  schools: IndexedSchool[];
  total: number;
  onTalentClick: (talent: DsaTalent) => void;
  locale: Parameters<typeof getDsaTalentLabel>[1];
}) {
  return (
    <div className="mt-6">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-intellectual">
          Showing {schools.length} of {total} schools
        </p>
        <p className="hidden text-xs text-intellectual-muted sm:block">
          Tap a talent tag to compare schools by that talent.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {schools.map((school) => (
          <SchoolCard key={school.id} school={school} onTalentClick={onTalentClick} locale={locale} />
        ))}
      </div>
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
  return (
    <article className="rounded-2xl border border-intellectual/10 bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:border-champagne/40 sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-lg font-semibold leading-tight text-intellectual">
            {school.schoolName}
          </h2>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-champagne-dark">
            {school.psleLabel}
          </p>
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
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold transition ${CATEGORY_STYLES[talent.category]}`}
      title={
        vague
          ? "This school uses a broad official label. Please check the school website for details."
          : `Compare schools offering ${talent.area}`
      }
    >
      {label}
      {vague ? (
        <HelpCircle
          className="h-3 w-3 opacity-70"
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
          <h3 className="mt-1 font-display text-xl font-semibold text-intellectual">
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
            className="rounded-xl border border-intellectual/8 bg-slate-50/80 px-3 py-2 transition-all duration-300 hover:border-champagne/30 hover:bg-white hover:shadow-sm"
          >
            <p className="text-sm font-semibold text-intellectual">{school.schoolName}</p>
            <p className="mt-0.5 text-xs text-intellectual-muted">{school.psleLabel}</p>
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
          {expanded ? "Show fewer schools" : `Show all ${group.schools.length} schools`}
        </button>
      ) : null}
    </article>
  );
}

function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-intellectual/15 bg-white p-8 text-center text-intellectual-muted">
      No matches yet. Try a school name, CCA, or broader category.
    </div>
  );
}
