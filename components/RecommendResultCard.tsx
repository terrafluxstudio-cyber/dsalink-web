"use client";

import Link from "next/link";

const MOE_DSA_URL = "https://www.moe.gov.sg/secondary/dsa";

type SchoolTier = "safe" | "reach" | "dream" | "special";

const TIER_LABELS: Record<SchoolTier, string> = {
  safe: "Safe Pick",
  reach: "Reach",
  dream: "Dream",
  special: "Specialised",
};

const TIER_STYLES: Record<SchoolTier, { badge: string; prefix: string }> = {
  safe:    { badge: "border-emerald-200 bg-emerald-50 text-emerald-700",    prefix: "✓" },
  reach:   { badge: "border-amber-200 bg-amber-50 text-amber-700",          prefix: "↗" },
  dream:   { badge: "border-intellectual/20 bg-intellectual/8 text-intellectual", prefix: "★" },
  special: { badge: "border-champagne/30 bg-champagne/10 text-champagne-dark", prefix: "◆" },
};

const POOL_NOTES: Record<"niche" | "moderate" | "popular", string> = {
  niche:
    "This talent area is offered by relatively few primary schools, which can mean a smaller but dedicated competition pool.",
  moderate:
    "This talent area has moderate uptake among primary schools — competition varies by school.",
  popular:
    "This talent area is widely popular, so DSA competition for slots may be higher.",
};

export interface RecommendResultCardProps {
  school: {
    name: string;
    slug: string;
    type: string;
    isIp: boolean;
    recentCop: string;
    matchedArea: string;
    reasons: string[];
    competitionPoolNote?: "niche" | "moderate" | "popular";
    isSpecialSchool?: boolean;
  };
  tier: SchoolTier;
}

export function RecommendResultCard({ school, tier }: RecommendResultCardProps) {
  const poolNote = school.competitionPoolNote ? POOL_NOTES[school.competitionPoolNote] : null;
  const { badge, prefix } = TIER_STYLES[tier];

  return (
    <article className="flex flex-col rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card transition-all duration-200 hover:shadow-card-hover hover:-translate-y-0.5">

      {/* School name + tier badge */}
      <div className="flex flex-wrap items-start justify-between gap-2">
        <Link
          href={`/schools/${school.slug}`}
          className="font-display text-[1.0625rem] font-bold text-slate-900 transition hover:text-intellectual"
        >
          {school.name}
        </Link>
        <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${badge}`}>
          {prefix} {TIER_LABELS[tier]}
        </span>
      </div>

      {/* Meta chips */}
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
          {school.type}
        </span>
        {school.isIp && (
          <span className="rounded-md bg-intellectual/8 px-2.5 py-0.5 text-[11px] font-medium text-intellectual">
            IP School
          </span>
        )}
        {school.isSpecialSchool && (
          <span className="rounded-md bg-champagne/10 px-2.5 py-0.5 text-[11px] font-medium text-champagne-dark">
            Specialised
          </span>
        )}
        <span className="rounded-md bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
          Recent AL {school.recentCop}
        </span>
      </div>

      {/* Matched talent area */}
      <div className="mt-4 flex items-center gap-2">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" aria-hidden />
        <p className="text-[0.8125rem] font-semibold text-slate-800">
          {school.matchedArea} DSA
        </p>
      </div>

      {/* Reasons list */}
      <ul className="mt-2.5 space-y-1.5">
        {school.reasons.map((reason) => (
          <li key={reason} className="flex gap-2 text-[0.8125rem] text-slate-600">
            <span className="mt-[3px] h-1 w-1 shrink-0 rounded-full bg-slate-300" aria-hidden />
            <span>{reason}</span>
          </li>
        ))}
      </ul>

      {/* Competition pool note */}
      {poolNote && (
        <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-[0.75rem] leading-relaxed text-slate-500">
          {poolNote}
        </p>
      )}

      {/* Action buttons */}
      <div className="mt-4 flex flex-wrap gap-2.5 border-t border-slate-100 pt-4">
        <Link
          href={`/schools/${school.slug}`}
          className="rounded-xl bg-intellectual px-4 py-2 text-[0.8125rem] font-semibold text-white transition hover:bg-intellectual-light"
        >
          View School →
        </Link>
        <a
          href={MOE_DSA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-intellectual/20 px-4 py-2 text-[0.8125rem] font-medium text-intellectual transition hover:border-intellectual/40 hover:bg-intellectual/5"
        >
          Apply via MOE DSA ↗
        </a>
      </div>

      <p className="mt-3 text-[0.6875rem] leading-relaxed text-slate-400">
        DSA vacancies vary each year — contact the school to confirm current intake.
      </p>
    </article>
  );
}
