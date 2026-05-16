"use client";

import { useMemo, useState } from "react";
import { ExternalLink, GraduationCap, Search } from "lucide-react";
import { GlossaryTooltip } from "@/components/GlossaryTooltip";
import { GLOSSARY, type GlossaryTerm } from "@/src/data/glossary";
import { SchoolLogo } from "@/components/SchoolLogo";
import { useLanguage } from "@/contexts/LanguageContext";
import { SCHOOL_DIRECTORY, type SchoolDirectoryEntry } from "@/lib/school-directory-data";

/* ── helpers ─────────────────────────────────────────────────────── */

function primaryCop(entry: SchoolDirectoryEntry): string | null {
  const p = entry.psle2025;
  if (p.ip) return `IP: ${p.ip}`;
  if (p.sapAffiliated && !p.g3) return `SAP: ${p.sapAffiliated}`;
  if (p.g3) return `AL ${p.g3}`;
  if (p.note) {
    const snip = p.note.replace(/^(Does not participate|Admissions not via|Specialised school).*/, "—");
    return snip.length > 60 ? snip.slice(0, 57) + "…" : snip;
  }
  return null;
}

function isGlossaryTerm(label: string): label is GlossaryTerm {
  return Object.prototype.hasOwnProperty.call(GLOSSARY, label);
}

function CopDisplay({ cop }: { cop: string }) {
  if (cop.startsWith("IP: ")) {
    return (
      <>
        <GlossaryTooltip term="IP">IP</GlossaryTooltip>
        {cop.slice(3)}
      </>
    );
  }
  if (cop.startsWith("SAP: ")) {
    return (
      <>
        <GlossaryTooltip term="SAP">SAP</GlossaryTooltip>
        {cop.slice(5)}
      </>
    );
  }
  const alMatch = cop.match(/^AL (.+)$/);
  if (alMatch) {
    return (
      <>
        <GlossaryTooltip term="AL">AL</GlossaryTooltip> {alMatch[1]}
      </>
    );
  }
  return <>{cop}</>;
}

function hasSAP(entry: SchoolDirectoryEntry) {
  return entry.schoolTypes.some((t) => t.toLowerCase().includes("sap"));
}
function hasIP(entry: SchoolDirectoryEntry) {
  return entry.academicTracks.some((t) => t.toUpperCase().includes("IP"));
}
function isBoys(entry: SchoolDirectoryEntry) {
  return entry.schoolTypes.includes("Boys");
}
function isGirls(entry: SchoolDirectoryEntry) {
  return entry.schoolTypes.includes("Girls");
}

type FilterState = {
  query: string;
  region: string;
  type: string;
  track: string;
};

const INIT: FilterState = { query: "", region: "", type: "", track: "" };

function matches(entry: SchoolDirectoryEntry, f: FilterState): boolean {
  if (f.query) {
    const q = f.query.toLowerCase();
    if (!entry.nameEn.toLowerCase().includes(q) && !entry.nameZh.includes(f.query)) return false;
  }
  if (f.region && entry.region !== f.region) return false;
  if (f.type) {
    if (f.type === "sap" && !hasSAP(entry)) return false;
    else if (f.type === "boys" && !isBoys(entry)) return false;
    else if (f.type === "girls" && !isGirls(entry)) return false;
    else if (f.type === "independent" && !entry.schoolTypes.includes("Independent")) return false;
    else if (f.type === "autonomous" && !entry.schoolTypes.some((t) => t === "Autonomous")) return false;
    else if (f.type === "aided" && !entry.schoolTypes.some((t) => t.toLowerCase().includes("government-aided"))) return false;
    else if (f.type === "govt" && !entry.schoolTypes.includes("Government")) return false;
  }
  if (f.track) {
    if (f.track === "ip" && !hasIP(entry)) return false;
    else if (f.track === "o-level" && !entry.academicTracks.some((t) => t.toUpperCase().includes("O-LEVEL"))) return false;
    else if (f.track === "specialised" && !entry.schoolTypes.some((t) => t.toLowerCase().includes("specialised"))) return false;
  }
  return true;
}

const GLOSS_STRIP_TERMS: readonly GlossaryTerm[] = [
  "MOE",
  "LEP",
  "CCA",
  "HCL",
  "G1/G2/G3",
  "SBGE",
  "MEP",
  "AEP",
  "BSP",
  "JIP",
  "DSA-Sec",
  "S1 posting",
  "posting group",
  "non-affiliated",
  "talent area",
  "selection exercise",
  "Confirmed Offer",
  "Waiting List",
  "Critical Social Inquiry",
];

function SchoolsGlossaryStrip() {
  const { t } = useLanguage();
  return (
    <div className="mt-4 rounded-lg border border-[#e9e4dc] bg-white/80 px-3 py-2.5 text-[0.7rem] leading-relaxed text-slate-600">
      <span className="mr-1 font-medium text-slate-700">{t.schoolsGlossaryStripLabel}</span>
      {GLOSS_STRIP_TERMS.map((term, i) => (
        <span key={term} className="inline">
          {i > 0 && <span className="text-slate-300"> · </span>}
          <GlossaryTooltip term={term}>{term}</GlossaryTooltip>
        </span>
      ))}
    </div>
  );
}

/* ── badge component ─────────────────────────────────────────────── */

function Badge({ children, variant }: { children: React.ReactNode; variant: "gold" | "blue" | "pink" | "slate" | "teal" | "purple" }) {
  const cls = {
    gold: "bg-champagne/10 text-champagne-dark border-champagne/20",
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    pink: "bg-pink-50 text-pink-700 border-pink-200",
    slate: "bg-slate-100 text-slate-600 border-slate-200",
    teal: "bg-teal-50 text-teal-700 border-teal-200",
    purple: "bg-purple-50 text-purple-700 border-purple-200",
  }[variant];
  return (
    <span className={`inline-flex items-center rounded border px-1.5 py-0.5 text-[10px] font-semibold leading-none tracking-wide ${cls}`}>
      {children}
    </span>
  );
}

/* ── filter bar ──────────────────────────────────────────────────── */

function FilterBar({ filters, onChange, total, shown }: {
  filters: FilterState;
  onChange: (f: FilterState) => void;
  total: number;
  shown: number;
}) {
  const { t } = useLanguage();
  const update = (k: keyof FilterState) => (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) =>
    onChange({ ...filters, [k]: e.target.value });

  const selectCls = "rounded-lg border border-[#e3ded5] bg-white px-3 py-2 text-[0.8125rem] font-medium text-slate-700 outline-none cursor-pointer appearance-none transition focus:border-intellectual/40 focus:ring-2 focus:ring-intellectual/10 pr-7";

  const regions = ["North", "South", "East", "West", "Central"];
  const regionLabel: Record<string, string> = {
    North: t.openHouseRegionNorth,
    South: t.openHouseRegionSouth,
    East: t.openHouseRegionEast,
    West: t.openHouseRegionWest,
    Central: t.openHouseRegionCentral,
  };

  return (
    <div className="space-y-3">
      {/* Search */}
      <div className="relative">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
        <input
          type="search"
          value={filters.query}
          onChange={update("query")}
          placeholder={t.schoolsSearch}
          autoComplete="off"
          className="w-full rounded-xl border border-[#e3ded5] bg-white py-2.5 pl-10 pr-4 text-[0.9375rem] text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-intellectual/40 focus:ring-2 focus:ring-intellectual/10"
        />
      </div>

      {/* Filter row */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Region */}
        <div className="relative">
          <select value={filters.region} onChange={update("region")} className={selectCls} aria-label={t.schoolsFilterRegion}>
            <option value="">{t.schoolsFilterRegion}: {t.schoolsAll}</option>
            {regions.map((r) => (
              <option key={r} value={r}>{regionLabel[r]}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-[10px]">▾</span>
        </div>

        {/* Type */}
        <div className="relative">
          <select value={filters.type} onChange={update("type")} className={selectCls} aria-label={t.schoolsFilterType}>
            <option value="">{t.schoolsFilterType}: {t.schoolsAll}</option>
            <option value="govt">{t.schoolsTypeGovt}</option>
            <option value="aided">{t.schoolsTypeAided}</option>
            <option value="autonomous">{t.schoolsTypeAutonomous}</option>
            <option value="independent">{t.schoolsTypeIndependent}</option>
            <option value="sap">{t.schoolsBadgeSap}</option>
            <option value="boys">{t.scoreboardGenderBoys}</option>
            <option value="girls">{t.scoreboardGenderGirls}</option>
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-[10px]">▾</span>
        </div>

        {/* Track */}
        <div className="relative">
          <select value={filters.track} onChange={update("track")} className={selectCls} aria-label={t.schoolsFilterTrack}>
            <option value="">{t.schoolsFilterTrack}: {t.schoolsAll}</option>
            <option value="o-level">{t.schoolsTrackOLevel}</option>
            <option value="ip">{t.schoolsTrackIP}</option>
            <option value="specialised">{t.schoolsTrackSpecialised}</option>
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-[10px]">▾</span>
        </div>

        {/* Reset */}
        {(filters.query || filters.region || filters.type || filters.track) && (
          <button
            type="button"
            onClick={() => onChange(INIT)}
            className="rounded-lg border border-[#e3ded5] bg-white px-3 py-2 text-[0.8125rem] font-medium text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
          >
            {t.schoolsFilterReset}
          </button>
        )}

        <span className="ml-auto text-[0.8125rem] text-slate-500">
          {t.schoolsShowing.replace("{{shown}}", String(shown)).replace("{{total}}", String(total))}
        </span>
      </div>
    </div>
  );
}

/* ── school card ─────────────────────────────────────────────────── */

function SchoolCard({ entry }: { entry: SchoolDirectoryEntry }) {
  const { t } = useLanguage();
  const cop = primaryCop(entry);

  return (
    <article className="flex flex-col rounded-xl border border-[#e3ded5] bg-white shadow-card transition hover:border-[#d4cec4] hover:shadow-card-hover">
      {/* Header */}
      <div className="border-b border-[#f0ece5] px-4 pt-4 pb-3">
        {/* Badges row */}
        <div className="mb-2 flex flex-wrap gap-1">
          {entry.schoolTypes.includes("Independent") && (
            <Badge variant="gold">{t.schoolsBadgeIndependent}</Badge>
          )}
          {entry.schoolTypes.some((st) => st === "Autonomous") && (
            <Badge variant="teal">{t.schoolsBadgeAutonomous}</Badge>
          )}
          {hasSAP(entry) && (
            <Badge variant="gold">
              {isGlossaryTerm(t.schoolsBadgeSap) ? (
                <GlossaryTooltip term={t.schoolsBadgeSap}>{t.schoolsBadgeSap}</GlossaryTooltip>
              ) : (
                t.schoolsBadgeSap
              )}
            </Badge>
          )}
          {hasIP(entry) && (
            <Badge variant="purple">
              {isGlossaryTerm(t.schoolsBadgeIp) ? (
                <GlossaryTooltip term={t.schoolsBadgeIp}>{t.schoolsBadgeIp}</GlossaryTooltip>
              ) : (
                t.schoolsBadgeIp
              )}
            </Badge>
          )}
          {isBoys(entry) && <Badge variant="blue">{t.scoreboardGenderBoys}</Badge>}
          {isGirls(entry) && <Badge variant="pink">{t.scoreboardGenderGirls}</Badge>}
          {entry.region && (
            <Badge variant="slate">{entry.region}</Badge>
          )}
        </div>

        <div className="flex items-start gap-2.5">
          <SchoolLogo schoolId={entry.id} nameEn={entry.nameEn} officialWebsite={entry.officialWebsite} size={36} />
          <div className="min-w-0">
            <h2 className="font-display text-[0.9375rem] font-semibold leading-snug text-slate-900">
              {entry.nameEn}
            </h2>
            {entry.nameZh && (
              <p className="mt-0.5 text-[0.8125rem] text-slate-500">{entry.nameZh}</p>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 px-4 py-3">
        {/* COP */}
        {cop && (
          <div>
            <p className="mb-0.5 text-[10px] font-semibold tracking-[0.12em] text-slate-400">
              <GlossaryTooltip term="COP">{t.schoolsCop}</GlossaryTooltip>
            </p>
            <p className="text-[0.875rem] font-semibold text-intellectual">
              <CopDisplay cop={cop} />
            </p>
            {/* Show affiliated band if different from primary */}
            {entry.psle2025.g3Affiliated && entry.psle2025.g3 && (
              <p className="text-[0.75rem] text-slate-500">
                <GlossaryTooltip term="affiliated school">{t.scoreboardBadgeAffiliated}</GlossaryTooltip>
                {": "}
                <GlossaryTooltip term="AL">AL</GlossaryTooltip> {entry.psle2025.g3Affiliated}
              </p>
            )}
          </div>
        )}

        {/* ALP */}
        {entry.alp && (
          <div>
            <p className="mb-0.5 text-[10px] font-semibold tracking-[0.12em] text-slate-400">
              <GlossaryTooltip term="ALP">{t.schoolsAlp}</GlossaryTooltip>
            </p>
            <p className="text-[0.8125rem] leading-snug text-slate-700">{entry.alp}</p>
          </div>
        )}

        {/* LLP */}
        {entry.llp && (
          <div>
            <p className="mb-0.5 text-[10px] font-semibold tracking-[0.12em] text-slate-400">
              <GlossaryTooltip term="LLP">{t.schoolsLlp}</GlossaryTooltip>
            </p>
            <p className="text-[0.8125rem] leading-snug text-slate-700">{entry.llp}</p>
          </div>
        )}

        {/* Affiliated primaries */}
        {entry.affiliatedPrimarySchools.length > 0 && (
          <div>
            <p className="mb-0.5 text-[10px] font-semibold tracking-[0.12em] text-slate-400">
              <GlossaryTooltip term="affiliated school">{t.schoolsAffPri}</GlossaryTooltip>
            </p>
            <p className="text-[0.8125rem] text-slate-600">
              {entry.affiliatedPrimarySchools.join(" · ")}
            </p>
          </div>
        )}

        {/* Other programmes */}
        {entry.otherProgrammes.length > 0 && (
          <div>
            <p className="mb-1 text-[10px] font-semibold tracking-[0.12em] text-slate-400">
              {t.schoolsOtherProg}
            </p>
            <div className="flex flex-wrap gap-1">
              {entry.otherProgrammes.map((p) => (
                <Badge key={p} variant="slate">
                  {isGlossaryTerm(p) ? <GlossaryTooltip term={p}>{p}</GlossaryTooltip> : p}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer links */}
      <div className="mt-auto flex gap-2 border-t border-[#f0ece5] px-4 py-3">
        <a
          href={entry.dsaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-intellectual px-3 py-2 text-[0.8125rem] font-semibold text-white transition hover:bg-intellectual-light"
        >
          <GraduationCap className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {t.schoolsDsaLink}
          <ExternalLink className="h-3 w-3 shrink-0 opacity-60 transition group-hover:opacity-100" aria-hidden />
        </a>
        <a
          href={entry.officialWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[#e3ded5] bg-white px-3 py-2 text-[0.8125rem] font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-surface"
        >
          {t.schoolsWebsite}
          <ExternalLink className="h-3 w-3 shrink-0 opacity-40 transition group-hover:opacity-70" aria-hidden />
        </a>
      </div>
    </article>
  );
}

/* ── main export ─────────────────────────────────────────────────── */

export function SchoolsDirectory() {
  const { locale, t } = useLanguage();
  const [filters, setFilters] = useState<FilterState>(INIT);

  const filtered = useMemo(
    () => SCHOOL_DIRECTORY.filter((e) => matches(e, filters)),
    [filters],
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="border-b border-intellectual/20 bg-intellectual px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-[1.625rem] font-extrabold leading-none text-champagne">147</span>
            <span className="text-[0.8125rem] text-white/70">
              {locale === "zh" ? "所中学" : "secondary schools"}
            </span>
          </div>
          <div className="hidden h-4 w-px bg-white/20 sm:block" />
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-[1.625rem] font-extrabold leading-none text-champagne">2025</span>
            <span className="text-[0.8125rem] text-white/70">
              {locale === "zh" ? "年 PSLE COP 数据" : "PSLE COP data"}
            </span>
          </div>
          <div className="hidden h-4 w-px bg-white/20 sm:block" />
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-[1.625rem] font-extrabold leading-none text-champagne">1,300+</span>
            <span className="text-[0.8125rem] text-white/70">
              {locale === "zh" ? "个 DSA 才艺方向" : "DSA talent areas"}
            </span>
          </div>
          <div className="ml-auto flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1">
            <span className="text-[0.6875rem] font-semibold tracking-wide text-white/80">MOE Data · 2026</span>
          </div>
        </div>
      </div>

      <FilterBar
        filters={filters}
        onChange={setFilters}
        total={SCHOOL_DIRECTORY.length}
        shown={filtered.length}
      />

      <SchoolsGlossaryStrip />

      {filtered.length === 0 ? (
        <div className="mt-16 text-center text-slate-500">{t.schoolsNoResults}</div>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((entry) => (
            <SchoolCard key={`${entry.id}-${entry.nameEn}`} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
}
