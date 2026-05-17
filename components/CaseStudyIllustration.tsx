import {
  AlertTriangle,
  Bot,
  FlaskConical,
  Music2,
  Palette,
  Sparkles,
  Sword,
  Users,
  Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type IllustrationKey =
  | "fencing"
  | "dance"
  | "robotics"
  | "music"
  | "leadership"
  | "risk"
  | "swimming"
  | "science"
  | "art_peace";

interface CaseStudyIllustrationProps {
  type: IllustrationKey;
  className?: string;
}

interface IllustrationConfig {
  Icon: LucideIcon;
  container: string;
  icon: string;
}

const ILLUSTRATION_CONFIG: Record<IllustrationKey, IllustrationConfig> = {
  fencing: {
    Icon: Sword,
    container: "border-intellectual/15 from-white via-surface to-intellectual/10 shadow-intellectual/10",
    icon: "text-intellectual",
  },
  dance: {
    Icon: Sparkles,
    container: "border-champagne/30 from-white via-champagne-subtle to-champagne/20 shadow-champagne/15",
    icon: "text-champagne-dark",
  },
  robotics: {
    Icon: Bot,
    container: "border-intellectual/15 from-surface via-white to-intellectual/15 shadow-intellectual/10",
    icon: "text-intellectual-light",
  },
  music: {
    Icon: Music2,
    container: "border-champagne/30 from-white via-surface to-champagne/20 shadow-champagne/15",
    icon: "text-champagne-dark",
  },
  leadership: {
    Icon: Users,
    container: "border-intellectual/15 from-white via-surface to-slate-200 shadow-intellectual/10",
    icon: "text-intellectual",
  },
  risk: {
    Icon: AlertTriangle,
    container: "border-champagne/50 from-champagne-subtle via-white to-champagne/30 shadow-champagne/20",
    icon: "text-champagne-dark",
  },
  swimming: {
    Icon: Waves,
    container: "border-intellectual/15 from-white via-surface to-intellectual/15 shadow-intellectual/10",
    icon: "text-intellectual-muted",
  },
  science: {
    Icon: FlaskConical,
    container: "border-intellectual/15 from-surface via-white to-intellectual/10 shadow-intellectual/10",
    icon: "text-intellectual-light",
  },
  art_peace: {
    Icon: Palette,
    container: "border-champagne/30 from-white via-champagne-subtle to-surface-warm shadow-champagne/15",
    icon: "text-champagne-dark",
  },
};

export function CaseStudyIllustration({ type, className }: CaseStudyIllustrationProps) {
  const { Icon, container, icon } = ILLUSTRATION_CONFIG[type];

  return (
    <span
      className={[
        "inline-flex h-16 w-16 items-center justify-center rounded-full border bg-gradient-to-br shadow-md ring-1 ring-white/70",
        container,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 shadow-sm">
        <Icon className={`h-6 w-6 ${icon}`} strokeWidth={2.25} aria-hidden />
      </span>
    </span>
  );
}
