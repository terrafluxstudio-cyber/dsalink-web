# CURSOR TASK: Case Study Illustration Redesign

## Goal
Replace the current SVG stick-figure illustrations in `components/CaseStudyIllustration.tsx` with a cleaner, friendlier approach: large emojis displayed inside styled circular gradient containers. The current SVG paths look like basic stick figures — the goal is something cheerful, immediately recognisable, and visually appealing.

## File to modify
`components/CaseStudyIllustration.tsx` — **full rewrite**

## New approach: emoji + gradient circle

Each illustration type renders:
- A circular container (`w-16 h-16`, `rounded-full`)
- A gradient background (soft, talent-area-specific color)
- A centered emoji at `text-4xl` (approximately 2.5rem)
- No SVG paths needed

The component's exported interface stays identical:
- `IllustrationKey` type — same 9 values: `fencing | dance | robotics | music | leadership | risk | swimming | science | art_peace`
- `CaseStudyIllustration` function — accepts `{ type, className? }`, returns JSX

## Full replacement code

```tsx
import type { ReactElement } from "react";

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
  emoji: string;
  gradient: string;
  shadow: string;
}

const ILLUSTRATION_CONFIG: Record<IllustrationKey, IllustrationConfig> = {
  fencing: {
    emoji: "🤺",
    gradient: "from-blue-100 to-blue-200",
    shadow: "shadow-blue-200/60",
  },
  dance: {
    emoji: "💃",
    gradient: "from-pink-100 to-rose-200",
    shadow: "shadow-rose-200/60",
  },
  robotics: {
    emoji: "🤖",
    gradient: "from-violet-100 to-purple-200",
    shadow: "shadow-purple-200/60",
  },
  music: {
    emoji: "🎵",
    gradient: "from-sky-100 to-cyan-200",
    shadow: "shadow-cyan-200/60",
  },
  leadership: {
    emoji: "🌟",
    gradient: "from-amber-100 to-yellow-200",
    shadow: "shadow-yellow-200/60",
  },
  risk: {
    emoji: "⚡",
    gradient: "from-orange-100 to-amber-200",
    shadow: "shadow-amber-200/60",
  },
  swimming: {
    emoji: "🏊",
    gradient: "from-teal-100 to-emerald-200",
    shadow: "shadow-teal-200/60",
  },
  science: {
    emoji: "🔬",
    gradient: "from-indigo-100 to-blue-200",
    shadow: "shadow-indigo-200/60",
  },
  art_peace: {
    emoji: "🎨",
    gradient: "from-fuchsia-100 to-pink-200",
    shadow: "shadow-pink-200/60",
  },
};

export function CaseStudyIllustration({ type, className }: CaseStudyIllustrationProps) {
  const config = ILLUSTRATION_CONFIG[type];

  return (
    <span
      className={`flex items-center justify-center rounded-full bg-gradient-to-br ${config.gradient} shadow-md ${config.shadow} ${className ?? ""}`}
      style={{ width: "4rem", height: "4rem" }}
      aria-hidden
    >
      <span className="text-4xl leading-none select-none">{config.emoji}</span>
    </span>
  );
}
```

## Changes to CaseStudyCard.tsx

The card currently renders the illustration inside a `flex justify-center` div with `className="h-[4.5rem] w-16"`. With the new round container approach (the illustration itself is now a circle), adjust this wrapper to just `flex justify-center mb-4`:

In `components/CaseStudyCard.tsx`, find:
```tsx
{illustration ? (
  <div className="mb-3 flex justify-center">
    <CaseStudyIllustration type={illustration} className="h-[4.5rem] w-16" />
  </div>
) : null}
```

Replace with:
```tsx
{illustration ? (
  <div className="mb-4 flex justify-center">
    <CaseStudyIllustration type={illustration} />
  </div>
) : null}
```

(Remove the fixed `className` — the component now self-sizes via its inline style.)

## Verification
1. `npm run build` — no TypeScript errors
2. Visit `/dsa-experience` in browser — scroll to "Twelve Families" section
3. Each case card has a round emoji circle at the top (colored gradient background)
4. All 9 emoji types render: fencing 🤺, dance 💃, robotics 🤖, music 🎵, leadership 🌟, risk ⚡, swimming 🏊, science 🔬, art 🎨
5. Mobile: 1-column layout, illustrations display correctly centered
6. Risk cards still have amber/orange visual distinction (⚡ on amber gradient background)
