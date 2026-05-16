"use client";

import Link from "next/link";

const MOE_DSA_URL = "https://www.moe.gov.sg/secondary/dsa";

type SchoolTier = "safe" | "reach" | "dream" | "special";

const TIER_LABELS: Record<SchoolTier, string> = {
  safe: "Safe",
  reach: "Reach",
  dream: "Dream",
  special: "Special",
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
  tier: "safe" | "reach" | "dream" | "special";
}

export function RecommendResultCard({ school, tier }: RecommendResultCardProps) {
  const poolNote = school.competitionPoolNote
    ? POOL_NOTES[school.competitionPoolNote]
    : null;

  return (
    <article className="flex flex-col rounded-lg bg-slate-800 p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-slate-100">{school.name}</h3>
        <span className="rounded-md bg-slate-700 px-2 py-0.5 text-xs font-medium text-slate-300">
          {TIER_LABELS[tier]}
        </span>
      </div>

      <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-300">
        <span className="rounded-md bg-slate-700/80 px-2 py-0.5">{school.type}</span>
        {school.isIp && (
          <span className="rounded-md bg-slate-700/80 px-2 py-0.5">IP School</span>
        )}
        {school.isSpecialSchool && (
          <span className="rounded-md bg-slate-700/80 px-2 py-0.5">Specialised</span>
        )}
        <span className="rounded-md bg-slate-700/80 px-2 py-0.5">
          Recent AL: {school.recentCop}
        </span>
      </div>

      <p className="mt-4 text-sm text-slate-200">
        Matched for: <span className="font-medium">{school.matchedArea} DSA</span>
      </p>

      <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
        {school.reasons.map((reason) => (
          <li key={reason} className="flex gap-2">
            <span className="text-slate-500" aria-hidden>
              •
            </span>
            <span>{reason}</span>
          </li>
        ))}
      </ul>

      {poolNote && (
        <p className="mt-3 text-xs text-slate-400">{poolNote}</p>
      )}

      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          href={`/schools/${school.slug}`}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          View School
        </Link>
        <a
          href={MOE_DSA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-600"
        >
          Apply via MOE DSA
        </a>
      </div>

      <p className="mt-4 text-[0.6875rem] leading-relaxed text-slate-500">
        DSA vacancies vary each year — contact the school to confirm current intake.
      </p>
    </article>
  );
}
