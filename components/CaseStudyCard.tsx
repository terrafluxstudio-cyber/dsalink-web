"use client";

import { AlertTriangle, Cpu, Music, Music2, Sword, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CaseStudyIllustration } from "./CaseStudyIllustration";
import type { IllustrationKey } from "./CaseStudyIllustration";
import type { DsaExperienceCaseStudy } from "@/content/dsa-experience";

type CaseStudyIcon = DsaExperienceCaseStudy["icon"];

const ICON_MAP: Record<CaseStudyIcon, LucideIcon> = {
  fencing: Sword,
  dance: Music,
  robotics: Cpu,
  music: Music2,
  leadership: Users,
  risk: AlertTriangle,
};

const STYLE_MAP: Record<
  CaseStudyIcon,
  { card: string; avatar: string; icon: string; badge: string; lessonLabel: string }
> = {
  fencing: {
    card: "border-[#e3ded5] bg-white",
    avatar: "border-intellectual/15 bg-intellectual/10",
    icon: "text-intellectual",
    badge: "bg-intellectual/10 text-intellectual",
    lessonLabel: "text-intellectual",
  },
  dance: {
    card: "border-[#e3ded5] bg-white",
    avatar: "border-champagne/50 bg-champagne-subtle",
    icon: "text-champagne-dark",
    badge: "bg-champagne-subtle text-intellectual",
    lessonLabel: "text-champagne-dark",
  },
  robotics: {
    card: "border-[#e3ded5] bg-white",
    avatar: "border-intellectual/20 bg-surface-warm",
    icon: "text-intellectual-light",
    badge: "bg-surface-warm text-intellectual",
    lessonLabel: "text-intellectual",
  },
  music: {
    card: "border-[#e3ded5] bg-white",
    avatar: "border-champagne/60 bg-white",
    icon: "text-champagne-dark",
    badge: "bg-intellectual/10 text-intellectual",
    lessonLabel: "text-champagne-dark",
  },
  leadership: {
    card: "border-[#e3ded5] bg-white",
    avatar: "border-slate-200 bg-slate-100",
    icon: "text-slate-700",
    badge: "bg-slate-100 text-slate-700",
    lessonLabel: "text-slate-700",
  },
  risk: {
    card: "border-champagne bg-champagne-subtle/70",
    avatar: "border-champagne-dark/30 bg-champagne",
    icon: "text-intellectual-dark",
    badge: "bg-intellectual text-white",
    lessonLabel: "text-intellectual",
  },
};

interface CaseStudyCardProps {
  talentArea: string;
  icon: CaseStudyIcon;
  illustration?: IllustrationKey;
  scenario: string;
  outcome: string;
  lesson?: string;
}

export function CaseStudyCard({
  talentArea,
  icon,
  illustration,
  scenario,
  outcome,
  lesson,
}: CaseStudyCardProps) {
  const IconComponent = ICON_MAP[icon];
  const styles = STYLE_MAP[icon];

  return (
    <div
      className={`flex min-w-0 flex-col overflow-hidden rounded-xl border p-5 shadow-card transition hover:shadow-card-hover ${styles.card}`}
    >
      {illustration ? (
        <div className="mb-4 flex justify-center">
          <CaseStudyIllustration type={illustration} />
        </div>
      ) : null}

      <div className="mb-4 flex items-start gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${styles.avatar}`}
        >
          <IconComponent className={`h-5 w-5 ${styles.icon}`} aria-hidden />
        </div>
        <div>
          <p className="break-words text-[0.8125rem] font-bold text-slate-900">
            {talentArea}
          </p>
          <p className="text-[11px] font-semibold tracking-wide text-slate-400">
            Real pathway
          </p>
        </div>
      </div>

      <p className="mb-4 flex-1 text-[0.8125rem] leading-relaxed text-slate-600 [overflow-wrap:anywhere]">
        {scenario}
      </p>

      <div
        className={`mb-3 inline-block rounded-lg px-3 py-1.5 text-xs font-semibold ${styles.badge}`}
      >
        {outcome}
      </div>

      {lesson ? (
        <p className="border-t border-slate-200/80 pt-3 text-[11px] italic leading-snug text-slate-500">
          <span className={`font-semibold not-italic ${styles.lessonLabel}`}>
            Lesson:{" "}
          </span>
          {lesson}
        </p>
      ) : null}
    </div>
  );
}
