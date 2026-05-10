"use client";

import {
  ChevronDown,
  ChevronUp,
  Minus,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import {
  memo,
  useCallback,
  useMemo,
  useState,
  type KeyboardEvent,
} from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/i18n";
import type {
  SchoolCopHistoryEntry,
  SchoolCopProgramType,
  SchoolCopRegion,
  SchoolCopYearKey,
} from "@/lib/data";
import { SCHOOL_COP_HISTORY } from "@/lib/data";

const YEARS: SchoolCopYearKey[] = ["2021", "2022", "2023", "2024", "2025"];

function interpolateTemplate(s: string, vars: Record<string, string | number>) {
  return s.replace(/\{\{(\w+)\}\}/g, (_, k: string) =>
    String(vars[k] ?? ""),
  );
}

/** Midpoint AL for trend / sparkline (lower = harder to enter). */
function copMid(raw?: string): number | null {
  if (!raw?.trim()) return null;
  const t = raw.trim().toUpperCase();
  const m = t.match(/^(\d+(?:\.\d+)?)\s*M$/);
  if (m) return Number(m[1]);
  const range = t.match(/^(\d+)\s*-\s*(\d+)$/);
  if (range) return (Number(range[1]) + Number(range[2])) / 2;
  const single = t.match(/^(\d+)$/);
  if (single) return Number(single[1]);
  const loose = t.match(/(\d+)/);
  return loose ? Number(loose[1]) : null;
}

function primaryMidForYear(row: SchoolCopHistoryEntry, y: SchoolCopYearKey) {
  const h = row.history[y];
  const non = copMid(h?.nonIp);
  const ip = copMid(h?.ip);
  if (non != null && ip != null) return (non + ip) / 2;
  return non ?? ip ?? null;
}

type TrendKind = "stable" | "up" | "down";

function trendForSchool(row: SchoolCopHistoryEntry): TrendKind {
  const series = YEARS.map((y) => primaryMidForYear(row, y)).filter(
    (v): v is number => v != null,
  );
  if (series.length < 2) return "stable";
  const a = series[0]!;
  const b = series[series.length - 1]!;
  const d = b - a;
  if (Math.abs(d) < 0.75) return "stable";
  return d > 0 ? "up" : "down";
}

function MiniSpark({ row }: { row: SchoolCopHistoryEntry }) {
  const pts = YEARS.map((y) => primaryMidForYear(row, y));
  const valid = pts.filter((v): v is number => v != null);
  if (valid.length === 0) {
    return (
      <span className="inline-block h-5 w-12 shrink-0 rounded bg-intellectual/5" />
    );
  }
  const min = Math.min(...valid);
  const max = Math.max(...valid);
  const w = 44;
  const h = 18;
  const pad = 2;
  const denom = Math.max(pts.length - 1, 1);
  const coords = pts.map((v, i) => {
    if (v == null) return null;
    const x = pad + (i / denom) * (w - pad * 2);
    const span = Math.max(max - min, 1e-6);
    const y = pad + ((max - v) / span) * (h - pad * 2);
    return [x, y] as const;
  });
  const pathParts: string[] = [];
  let started = false;
  for (const c of coords) {
    if (!c) {
      started = false;
      continue;
    }
    const [x, y] = c;
    pathParts.push(started ? `L ${x} ${y}` : `M ${x} ${y}`);
    started = true;
  }
  const d = pathParts.join(" ");
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className="shrink-0 text-champagne-dark"
      aria-hidden
    >
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.35}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.9}
      />
    </svg>
  );
}

const typeLabels = (
  t: SchoolCopProgramType,
  locale: Locale,
  copy: {
    openHouseProgramIP: string;
    openHouseProgramSAP: string;
    scoreboardTypeG3: string;
    scoreboardTypeG2: string;
    scoreboardTypeG1: string;
  },
) => {
  switch (t) {
    case "IP":
      return copy.openHouseProgramIP;
    case "SAP":
      return copy.openHouseProgramSAP;
    case "G3":
      return copy.scoreboardTypeG3;
    case "G2":
      return copy.scoreboardTypeG2;
    case "G1":
      return copy.scoreboardTypeG1;
    default:
      return t;
  }
};

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
  const trend = trendForSchool(row);
  const y2025 = row.history["2025"];
  const primary2025 =
    y2025?.nonIp && y2025?.ip
      ? `${y2025.nonIp} · ${y2025.ip}`
      : y2025?.nonIp ?? y2025?.ip ?? "—";

  const TrendIcon =
    trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;
  const trendLabel =
    trend === "up"
      ? t.scoreboardTrendUp
      : trend === "down"
        ? t.scoreboardTrendDown
        : t.scoreboardTrendStable;

  const name = locale === "zh" ? row.nameCn : row.nameEn;
  const subName = locale === "zh" ? row.nameEn : row.nameCn;

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
        className="rounded-xl border border-intellectual/10 bg-white/80 shadow-sm ring-1 ring-champagne/15"
      >
      <div
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        onClick={() => onToggle(row.id)}
        onKeyDown={onKey}
        className="flex w-full cursor-pointer flex-col gap-3 p-4 text-left transition hover:bg-champagne-subtle/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:flex-row sm:items-center sm:gap-4"
      >
        <div className="flex min-w-0 flex-1 items-start gap-3">
          <div
            className="flex shrink-0 flex-col items-center gap-0.5"
            title={trendLabel}
          >
            <MiniSpark row={row} />
            <TrendIcon
              className="h-3.5 w-3.5 text-champagne-dark"
              strokeWidth={2.25}
              aria-hidden
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-medium text-intellectual">{name}</p>
            <p className="mt-0.5 truncate text-xs text-intellectual-muted">
              {subName}
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="rounded-md bg-intellectual/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-intellectual-muted">
                {row.region}
              </span>
              <span className="rounded-md bg-champagne-subtle/80 px-2 py-0.5 text-[10px] font-semibold text-intellectual">
                {typeLabels(row.type, locale, t)}
              </span>
              {row.isSap ? (
                <span className="rounded-md border border-champagne/40 px-2 py-0.5 text-[10px] font-semibold text-champagne-dark">
                  {t.scoreboardBadgeSap}
                </span>
              ) : null}
              {row.affiliatedCOP ? (
                <span className="rounded-md border border-intellectual/15 px-2 py-0.5 text-[10px] font-semibold text-intellectual-muted">
                  {t.scoreboardBadgeAffiliated}
                </span>
              ) : null}
            </div>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-stretch gap-2 sm:items-end">
          <div className="rounded-lg border border-champagne/35 bg-gradient-to-br from-white to-champagne-subtle/40 px-3 py-2 text-right shadow-gold sm:min-w-[9.5rem]">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-intellectual-muted">
              {t.scoreboardCol2025}
            </p>
            <p className="mt-0.5 font-display text-lg font-semibold tabular-nums text-intellectual">
              {primary2025}
            </p>
          </div>
          <div className="hidden items-center justify-end gap-2 text-[10px] text-intellectual-muted md:flex">
            {YEARS.slice(0, -1).map((y) => {
              const h = row.history[y];
              const v = h?.nonIp && h?.ip ? `${h.nonIp} / ${h.ip}` : h?.nonIp ?? h?.ip ?? "—";
              return (
                <span key={y} className="tabular-nums" title={y}>
                  <span className="font-semibold text-intellectual/70">{y}</span>{" "}
                  {v}
                </span>
              );
            })}
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

      {expanded ? (
        <div className="border-t border-intellectual/8 bg-intellectual/[0.02] px-4 py-4">
          <div className="overflow-x-auto rounded-lg border border-intellectual/10 bg-white/90">
            <table className="w-full min-w-[280px] text-sm">
              <thead>
                <tr className="border-b border-intellectual/10 bg-champagne-subtle/40 text-left text-xs font-semibold uppercase tracking-wide text-intellectual-muted">
                  <th className="px-3 py-2">{t.scoreboardColYear}</th>
                  <th className="px-3 py-2">{t.scoreboardTrackNonIp}</th>
                  <th className="px-3 py-2">{t.scoreboardTrackIp}</th>
                </tr>
              </thead>
              <tbody>
                {YEARS.map((y) => {
                  const h = row.history[y];
                  return (
                    <tr
                      key={y}
                      className="border-b border-intellectual/5 last:border-0"
                    >
                      <td className="px-3 py-2 font-semibold tabular-nums text-intellectual">
                        {y}
                      </td>
                      <td className="px-3 py-2 tabular-nums text-intellectual-muted">
                        {h?.nonIp ?? "—"}
                      </td>
                      <td className="px-3 py-2 tabular-nums text-intellectual-muted">
                        {h?.ip ?? "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-intellectual-muted">
            {locale === "zh"
              ? "注：AL 制下数字为示意性区间，请以教育部及各校当年公布为准。"
              : "Illustrative AL-style bands for UX — always verify against MOE and each school’s release."}
          </p>
        </div>
      ) : null}
      </article>
    </li>
  );
});

export function ScoreBoard({ omitHeading = false }: { omitHeading?: boolean } = {}) {
  const { locale, t } = useLanguage();
  const [q, setQ] = useState("");
  const [region, setRegion] = useState<SchoolCopRegion | "all">("all");
  const [ptype, setPtype] = useState<SchoolCopProgramType | "all">("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const regions: SchoolCopRegion[] = [
    "North",
    "South",
    "East",
    "West",
    "Central",
  ];
  const types: SchoolCopProgramType[] = ["IP", "SAP", "G3", "G2", "G1"];

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return SCHOOL_COP_HISTORY.filter((row) => {
      if (region !== "all" && row.region !== region) return false;
      if (ptype !== "all" && row.type !== ptype) return false;
      if (!qq) return true;
      return (
        row.nameEn.toLowerCase().includes(qq) ||
        row.nameCn.includes(q.trim()) ||
        row.id.includes(qq.replace(/\s+/g, "-"))
      );
    });
  }, [q, region, ptype]);

  const toggle = useCallback((id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section
      className={
        omitHeading
          ? "w-full max-w-5xl"
          : "mt-10 w-full max-w-5xl"
      }
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
              ? "flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-end"
              : "mt-5 flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-end"
          }
        >
          <label className="flex min-w-[12rem] flex-1 flex-col gap-1.5 text-xs font-semibold text-intellectual-muted">
            <span className="uppercase tracking-wide">
              {t.openHouseSearchAria}
            </span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t.scoreboardSearchPlaceholder}
              className="rounded-xl border border-intellectual/12 bg-white px-3 py-2.5 text-sm text-intellectual shadow-sm outline-none ring-champagne/0 transition placeholder:text-intellectual-muted/50 focus:border-champagne/50 focus:ring-2 focus:ring-champagne/25"
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
          <label className="flex min-w-[9rem] flex-col gap-1.5 text-xs font-semibold text-intellectual-muted">
            <span className="uppercase tracking-wide">
              {t.scoreboardFilterType}
            </span>
            <select
              value={ptype}
              onChange={(e) =>
                setPtype(e.target.value as SchoolCopProgramType | "all")
              }
              className="rounded-xl border border-intellectual/12 bg-white px-3 py-2.5 text-sm text-intellectual shadow-sm outline-none focus:border-champagne/50 focus:ring-2 focus:ring-champagne/25"
            >
              <option value="all">{t.scoreboardAll}</option>
              {types.map((ty) => (
                <option key={ty} value={ty}>
                  {typeLabels(ty, locale, t)}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className="mt-3 text-xs text-intellectual-muted">
          {interpolateTemplate(t.scoreboardShowing, {
            shown: filtered.length,
            total: SCHOOL_COP_HISTORY.length,
          })}
        </p>

        {filtered.length === 0 ? (
          <p className="mt-6 text-center text-sm text-intellectual-muted">
            {t.scoreboardNoResults}
          </p>
        ) : (
          <ul className="mt-5 space-y-3">
            {filtered.map((row) => (
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
    </section>
  );
}
