"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import {
  memo,
  useCallback,
  useMemo,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { SchoolDisplayName } from "@/components/SchoolDisplayName";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/i18n";
import type {
  SchoolCopHistoryEntry,
  SchoolCopRegion,
  SchoolCopYearKey,
} from "@/lib/data";
import { SCHOOL_COP_HISTORY } from "@/lib/data";

const YEARS: SchoolCopYearKey[] = ["2023", "2024", "2025"];

type SortMode = "name" | "score-asc" | "score-desc";
type GenderFilter = "all" | "boys" | "girls";

function interpolateTemplate(s: string, vars: Record<string, string | number>) {
  return s.replace(/\{\{(\w+)\}\}/g, (_, k: string) =>
    String(vars[k] ?? ""),
  );
}

function alSortNumber(s: string): number {
  if (!s || s === "—") return 999;
  const m = s.match(/\d+/g);
  if (!m?.length) return 999;
  return Math.min(...m.map(Number));
}

type DisplayMode = "g3" | "nonip" | "ip";

function primaryDisplay(row: SchoolCopHistoryEntry): {
  label: string;
  mode: DisplayMode;
} {
  const y = row.byYear["2025"];
  if (y.g3NonAffiliated) return { label: y.g3NonAffiliated, mode: "g3" };
  if (y.indicativeNonIp) return { label: y.indicativeNonIp, mode: "nonip" };
  if (y.ip) return { label: y.ip, mode: "ip" };
  return { label: "—", mode: "nonip" };
}

type RowProps = {
  row: SchoolCopHistoryEntry;
  locale: Locale;
  expanded: boolean;
  onToggle: (id: string) => void;
};

const CopSchoolRow = memo(function CopSchoolRow({
  row,
  locale,
  expanded,
  onToggle,
}: RowProps) {
  const { t } = useLanguage();
  const disp = primaryDisplay(row);
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle(row.id);
    }
  };

  return (
    <li className="list-none">
      <article
        id={`school-${row.id}`}
        className="overflow-hidden rounded-xl border border-intellectual/10 bg-white/80 shadow-sm ring-1 ring-champagne/15 transition-shadow hover:shadow-soft"
      >
        <div
          role="button"
          tabIndex={0}
          aria-expanded={expanded}
          onClick={() => onToggle(row.id)}
          onKeyDown={onKey}
          className="flex w-full cursor-pointer flex-col gap-2 p-3 text-left transition hover:bg-champagne-subtle/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:flex-row sm:items-center sm:gap-3 sm:p-3.5"
        >
          <div className="min-w-0 flex-1">
            <p className="break-words font-medium leading-snug text-intellectual">
              <SchoolDisplayName
                locale={locale}
                nameEn={row.nameEn}
                nameZh={row.nameCn}
              />
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
                <span className="rounded-md bg-intellectual/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-intellectual-muted">
                  {row.region}
                </span>
                {row.gender !== "coed" ? (
                  <span className="rounded-md bg-intellectual/5 px-2 py-0.5 text-[10px] font-semibold text-intellectual-muted">
                    {row.gender === "boys"
                      ? t.scoreboardGenderBoys
                      : t.scoreboardGenderGirls}
                  </span>
                ) : null}
                {row.isSap ? (
                  <span className="rounded-md border border-champagne/40 px-2 py-0.5 text-[10px] font-semibold text-champagne-dark">
                    {t.scoreboardBadgeSap}
                  </span>
                ) : null}
                {row.offersIp ? (
                  <span className="rounded-md border border-intellectual/20 px-2 py-0.5 text-[10px] font-semibold text-intellectual">
                    {t.scoreboardBadgeIp}
                  </span>
                ) : null}
                {row.isAutonomous ? (
                  <span className="rounded-md border border-intellectual/15 px-2 py-0.5 text-[10px] font-semibold text-intellectual-muted">
                    {t.scoreboardBadgeAuto}
                  </span>
                ) : null}
            </div>
          </div>

          <div className="flex shrink-0 flex-col items-stretch gap-1 sm:items-end">
            <div className="rounded-lg border border-champagne/35 bg-gradient-to-br from-white to-champagne-subtle/40 px-3 py-1.5 text-right shadow-gold sm:min-w-[9.5rem]">
              <p className="text-[10px] font-semibold uppercase tracking-wide text-intellectual-muted">
                {t.scoreboardColG3NonAff}
              </p>
              <p className="mt-0.5 font-display text-lg font-semibold tabular-nums leading-tight text-intellectual">
                {disp.mode === "ip" ? `IP ${disp.label}` : disp.label}
              </p>
            </div>
            <span className="flex items-center justify-end gap-1 text-xs font-semibold text-champagne-dark">
              {expanded ? (
                <>
                  {t.scoreboardCollapseDetails}
                  <ChevronUp className="h-4 w-4" aria-hidden />
                </>
              ) : (
                <>
                  {t.scoreboardExpandDetails}
                  <ChevronDown className="h-4 w-4" aria-hidden />
                </>
              )}
            </span>
          </div>
        </div>

        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-intellectual/8 bg-intellectual/[0.02] px-3 py-3 sm:px-4 sm:py-3.5">
              <p className="mb-2 text-xs font-semibold text-intellectual">
                {t.scoreboardDetailMatrix}
              </p>
              <div className="overflow-x-auto rounded-lg border border-intellectual/10 bg-white/90">
                <table className="w-full min-w-[520px] text-sm">
                  <thead>
                    <tr className="border-b border-intellectual/10 bg-champagne-subtle/40 text-left text-[10px] font-semibold uppercase tracking-wide text-intellectual-muted sm:text-xs">
                      <th className="px-2 py-2 sm:px-3">{t.scoreboardColYear}</th>
                      <th className="px-2 py-2 sm:px-3">
                        {t.scoreboardTrackNonIp}
                      </th>
                      <th className="px-2 py-2 sm:px-3">{t.scoreboardTrackIp}</th>
                      <th className="px-2 py-2 sm:px-3">{t.scoreboardTypeG3}</th>
                      <th className="px-2 py-2 sm:px-3">
                        {t.scoreboardBadgeAffiliated} G3
                      </th>
                      <th className="px-2 py-2 sm:px-3">{t.scoreboardTypeG2}</th>
                      <th className="px-2 py-2 sm:px-3">{t.scoreboardTypeG1}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {YEARS.map((y) => {
                      const h = row.byYear[y];
                      return (
                        <tr
                          key={y}
                          className="border-b border-intellectual/5 last:border-0"
                        >
                          <td className="px-2 py-2 font-semibold tabular-nums text-intellectual sm:px-3">
                            {y}
                          </td>
                          <td className="px-2 py-2 tabular-nums text-intellectual-muted sm:px-3">
                            {h.indicativeNonIp ?? "—"}
                          </td>
                          <td className="px-2 py-2 tabular-nums text-intellectual-muted sm:px-3">
                            {h.ip ?? "—"}
                          </td>
                          <td className="px-2 py-2 tabular-nums text-intellectual-muted sm:px-3">
                            {h.g3NonAffiliated ?? "—"}
                          </td>
                          <td className="px-2 py-2 tabular-nums text-intellectual-muted sm:px-3">
                            {h.g3Affiliated ?? "—"}
                          </td>
                          <td className="px-2 py-2 tabular-nums text-intellectual-muted sm:px-3">
                            {h.g2 ?? "—"}
                          </td>
                          <td className="px-2 py-2 tabular-nums text-intellectual-muted sm:px-3">
                            {h.g1 ?? "—"}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </article>
    </li>
  );
});

function ToggleChip({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`rounded-lg border px-3 py-2 text-xs font-semibold transition sm:text-sm ${
        pressed
          ? "border-champagne/60 bg-champagne-subtle/60 text-intellectual"
          : "border-intellectual/12 bg-white text-intellectual-muted hover:border-champagne/35"
      }`}
    >
      {children}
    </button>
  );
}

export function ScoreBoard({ omitHeading = false }: { omitHeading?: boolean } = {}) {
  const { locale, t } = useLanguage();
  const [q, setQ] = useState("");
  const [region, setRegion] = useState<SchoolCopRegion | "all">("all");
  const [sapOnly, setSapOnly] = useState(false);
  const [ipOnly, setIpOnly] = useState(false);
  const [genderFilter, setGenderFilter] = useState<GenderFilter>("all");
  const [sort, setSort] = useState<SortMode>("score-asc");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const regions: SchoolCopRegion[] = [
    "North",
    "South",
    "East",
    "West",
    "Central",
  ];

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return SCHOOL_COP_HISTORY.filter((row) => {
      if (region !== "all" && row.region !== region) return false;
      if (sapOnly && !row.isSap) return false;
      if (ipOnly && !row.offersIp) return false;
      if (genderFilter === "boys" && row.gender !== "boys") return false;
      if (genderFilter === "girls" && row.gender !== "girls") return false;
      if (!qq) return true;
      return (
        row.nameEn.toLowerCase().includes(qq) ||
        row.nameCn.includes(q.trim()) ||
        row.id.includes(qq.replace(/\s+/g, "-"))
      );
    });
  }, [q, region, sapOnly, ipOnly, genderFilter]);

  const sorted = useMemo(() => {
    const out = [...filtered];
    if (sort === "name") {
      out.sort((a, b) => a.nameEn.localeCompare(b.nameEn));
      return out;
    }
    const m = sort === "score-asc" ? 1 : -1;
    out.sort((a, b) => {
      const ka = alSortNumber(primaryDisplay(a).label);
      const kb = alSortNumber(primaryDisplay(b).label);
      if (ka !== kb) return (ka - kb) * m;
      return a.nameEn.localeCompare(b.nameEn);
    });
    return out;
  }, [filtered, sort]);

  const toggle = useCallback((id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section
      className={omitHeading ? "w-full max-w-5xl" : "mt-10 w-full max-w-5xl"}
      aria-labelledby={omitHeading ? undefined : "scoreboard-heading"}
      aria-label={omitHeading ? t.scoresFilterToolbarAria : undefined}
    >
      <div className="rounded-2xl border border-intellectual/10 bg-card-shine p-5 shadow-sm ring-1 ring-champagne/20 sm:p-6">
        {omitHeading ? null : (
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="scoreboard-heading"
                className="font-display text-lg font-semibold tracking-tight text-intellectual sm:text-xl"
              >
                {t.scoreboardTitle}
              </h2>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-intellectual-muted">
                {t.scoreboardSubtitle}
              </p>
            </div>
          </div>
        )}

        <div
          id={omitHeading ? "scores-filters" : undefined}
          className={
            omitHeading
              ? "flex flex-col gap-4"
              : "mt-5 flex flex-col gap-4"
          }
        >
          <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-end">
            <label className="flex min-w-[12rem] flex-1 flex-col gap-1.5 text-xs font-semibold text-intellectual-muted">
              <span className="uppercase tracking-wide">
                {t.openHouseSearchAria}
              </span>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t.scoreboardSearchPlaceholder}
                className="rounded-xl border border-intellectual/12 bg-white px-3 py-2.5 text-sm text-intellectual shadow-sm outline-none transition placeholder:text-intellectual-muted/50 focus:border-champagne/50 focus:ring-2 focus:ring-champagne/25"
                autoComplete="off"
              />
            </label>
            <label className="flex min-w-[9rem] flex-col gap-1.5 text-xs font-semibold text-intellectual-muted">
              <span className="uppercase tracking-wide">
                {t.scoreboardFilterRegion}
              </span>
              <select
                value={region}
                onChange={(e) =>
                  setRegion(e.target.value as SchoolCopRegion | "all")
                }
                className="rounded-xl border border-intellectual/12 bg-white px-3 py-2.5 text-sm text-intellectual shadow-sm outline-none focus:border-champagne/50 focus:ring-2 focus:ring-champagne/25"
              >
                <option value="all">{t.scoreboardAll}</option>
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {r === "North"
                      ? t.openHouseRegionNorth
                      : r === "South"
                        ? t.openHouseRegionSouth
                        : r === "East"
                          ? t.openHouseRegionEast
                          : r === "West"
                            ? t.openHouseRegionWest
                            : t.openHouseRegionCentral}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex min-w-[10rem] flex-col gap-1.5 text-xs font-semibold text-intellectual-muted">
              <span className="uppercase tracking-wide">
                {t.scoreboardSortLabel}
              </span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortMode)}
                className="rounded-xl border border-intellectual/12 bg-white px-3 py-2.5 text-sm text-intellectual shadow-sm outline-none focus:border-champagne/50 focus:ring-2 focus:ring-champagne/25"
              >
                <option value="score-asc">{t.scoreboardSortScoreAsc}</option>
                <option value="score-desc">{t.scoreboardSortScoreDesc}</option>
                <option value="name">{t.scoreboardSortName}</option>
              </select>
            </label>
          </div>

          <div className="flex flex-wrap gap-2">
            <ToggleChip pressed={sapOnly} onClick={() => setSapOnly((s) => !s)}>
              {t.scoreboardFilterSapOnly}
            </ToggleChip>
            <ToggleChip pressed={ipOnly} onClick={() => setIpOnly((s) => !s)}>
              {t.scoreboardFilterIpOnly}
            </ToggleChip>
            <ToggleChip
              pressed={genderFilter === "boys"}
              onClick={() =>
                setGenderFilter((g) => (g === "boys" ? "all" : "boys"))
              }
            >
              {t.scoreboardFilterBoysSchool}
            </ToggleChip>
            <ToggleChip
              pressed={genderFilter === "girls"}
              onClick={() =>
                setGenderFilter((g) => (g === "girls" ? "all" : "girls"))
              }
            >
              {t.scoreboardFilterGirlsSchool}
            </ToggleChip>
          </div>
        </div>

        <p className="mt-3 text-xs text-intellectual-muted">
          {interpolateTemplate(t.scoreboardShowing, {
            shown: sorted.length,
            total: SCHOOL_COP_HISTORY.length,
          })}
        </p>

        {sorted.length === 0 ? (
          <p className="mt-6 text-center text-sm text-intellectual-muted">
            {t.scoreboardNoResults}
          </p>
        ) : (
          <ul className="mt-4 space-y-2">
            {sorted.map((row) => (
              <CopSchoolRow
                key={row.id}
                row={row}
                locale={locale}
                expanded={expandedId === row.id}
                onToggle={toggle}
              />
            ))}
          </ul>
        )}
      </div>
      <p className="text-[10px] text-gray-400 text-center mt-8 mb-4">
        Disclaimer: Data is aggregated from public education resources for
        reference only. For official school information, please refer to the
        respective school websites.
      </p>
    </section>
  );
}
