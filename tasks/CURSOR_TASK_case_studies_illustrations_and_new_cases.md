# CURSOR TASK: Case Study Illustrations + 4 New Case Studies

## Overview

Four coordinated changes:
1. Create `components/CaseStudyIllustration.tsx` — flat SVG cartoon characters
2. Update `components/CaseStudyCard.tsx` — render illustration above the avatar
3. Update `content/dsa-experience.tsx` — add `illustration` field to type + 8 existing cases + 4 new cases, update heading
4. Update `components/DsaExperiencePageBody.tsx` — pass `illustration` prop

**Execute in order: 1 → 2 → 3 → 4. Run `npm run build` at the end.**

---

## CHANGE 1 — Create `components/CaseStudyIllustration.tsx`

Create this file from scratch.

```tsx
// components/CaseStudyIllustration.tsx

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

// All illustrations use a 64×72 viewBox, flat design, 3–6 shape elements each.

const illustrations: Record<IllustrationKey, JSX.Element> = {
  // Red tones — stick figure holding a sword diagonally
  fencing: (
    <svg viewBox="0 0 64 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* Head */}
      <circle cx="32" cy="14" r="10" fill="#ef4444" />
      {/* Eyes */}
      <circle cx="28" cy="13" r="1.5" fill="white" />
      <circle cx="36" cy="13" r="1.5" fill="white" />
      {/* Smile */}
      <path d="M29 17 Q32 20 35 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Body */}
      <rect x="28" y="26" width="8" height="16" rx="3" fill="#fca5a5" />
      {/* Sword arm — diagonal line from right shoulder */}
      <line x1="36" y1="30" x2="55" y2="14" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" />
      {/* Sword tip */}
      <circle cx="56" cy="13" r="2" fill="#b91c1c" />
      {/* Left arm */}
      <line x1="28" y1="30" x2="16" y2="38" stroke="#fca5a5" strokeWidth="3" strokeLinecap="round" />
      {/* Legs */}
      <line x1="31" y1="42" x2="27" y2="58" stroke="#fca5a5" strokeWidth="3" strokeLinecap="round" />
      <line x1="33" y1="42" x2="37" y2="58" stroke="#fca5a5" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),

  // Pink tones — figure with tutu, arms raised
  dance: (
    <svg viewBox="0 0 64 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* Head */}
      <circle cx="32" cy="13" r="10" fill="#ec4899" />
      {/* Eyes */}
      <circle cx="28" cy="12" r="1.5" fill="white" />
      <circle cx="36" cy="12" r="1.5" fill="white" />
      {/* Smile */}
      <path d="M29 16 Q32 19 35 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Body */}
      <rect x="29" y="25" width="6" height="12" rx="2" fill="#f9a8d4" />
      {/* Tutu / skirt */}
      <ellipse cx="32" cy="40" rx="14" ry="6" fill="#fbcfe8" />
      {/* Left arm raised */}
      <line x1="29" y1="28" x2="14" y2="16" stroke="#f9a8d4" strokeWidth="3" strokeLinecap="round" />
      {/* Right arm raised */}
      <line x1="35" y1="28" x2="50" y2="16" stroke="#f9a8d4" strokeWidth="3" strokeLinecap="round" />
      {/* Legs */}
      <line x1="30" y1="46" x2="26" y2="60" stroke="#f9a8d4" strokeWidth="3" strokeLinecap="round" />
      <line x1="34" y1="46" x2="38" y2="60" stroke="#f9a8d4" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),

  // Purple tones — blocky robot, no smile (it's a robot)
  robotics: (
    <svg viewBox="0 0 64 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* Antenna */}
      <line x1="32" y1="4" x2="32" y2="10" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="3" r="2.5" fill="#7c3aed" />
      {/* Square head */}
      <rect x="20" y="10" width="24" height="20" rx="3" fill="#8b5cf6" />
      {/* Circular robot eyes */}
      <circle cx="27" cy="20" r="4" fill="white" />
      <circle cx="37" cy="20" r="4" fill="white" />
      <circle cx="27" cy="20" r="2" fill="#4c1d95" />
      <circle cx="37" cy="20" r="2" fill="#4c1d95" />
      {/* Body */}
      <rect x="18" y="32" width="28" height="20" rx="3" fill="#7c3aed" />
      {/* Body detail — chest panel */}
      <rect x="24" y="37" width="16" height="10" rx="2" fill="#a78bfa" />
      {/* Arms */}
      <rect x="6" y="33" width="10" height="6" rx="2" fill="#8b5cf6" />
      <rect x="48" y="33" width="10" height="6" rx="2" fill="#8b5cf6" />
      {/* Legs */}
      <rect x="21" y="54" width="8" height="14" rx="2" fill="#7c3aed" />
      <rect x="35" y="54" width="8" height="14" rx="2" fill="#7c3aed" />
    </svg>
  ),

  // Blue tones — figure holding a microphone
  music: (
    <svg viewBox="0 0 64 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* Head */}
      <circle cx="32" cy="13" r="10" fill="#3b82f6" />
      {/* Eyes */}
      <circle cx="28" cy="12" r="1.5" fill="white" />
      <circle cx="36" cy="12" r="1.5" fill="white" />
      {/* Smile */}
      <path d="M29 16 Q32 19 35 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Body */}
      <rect x="29" y="25" width="6" height="16" rx="2" fill="#93c5fd" />
      {/* Right arm holding mic */}
      <line x1="35" y1="29" x2="46" y2="36" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
      {/* Microphone */}
      <rect x="44" y="32" width="6" height="10" rx="3" fill="#1d4ed8" />
      {/* Mic stand */}
      <line x1="47" y1="42" x2="47" y2="50" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" />
      {/* Left arm */}
      <line x1="29" y1="29" x2="18" y2="36" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
      {/* Legs */}
      <line x1="31" y1="41" x2="27" y2="58" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
      <line x1="33" y1="41" x2="37" y2="58" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),

  // Emerald tones — figure with arm raised holding a star/flag
  leadership: (
    <svg viewBox="0 0 64 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* Head */}
      <circle cx="32" cy="13" r="10" fill="#10b981" />
      {/* Eyes */}
      <circle cx="28" cy="12" r="1.5" fill="white" />
      <circle cx="36" cy="12" r="1.5" fill="white" />
      {/* Smile */}
      <path d="M29 16 Q32 19 35 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Body */}
      <rect x="29" y="25" width="6" height="16" rx="2" fill="#6ee7b7" />
      {/* Right arm raised with flag pole */}
      <line x1="35" y1="27" x2="50" y2="14" stroke="#6ee7b7" strokeWidth="3" strokeLinecap="round" />
      {/* Flag */}
      <rect x="50" y="6" width="10" height="8" rx="1" fill="#059669" />
      {/* Star on flag */}
      <text x="52" y="14" fontSize="7" fill="white">★</text>
      {/* Left arm */}
      <line x1="29" y1="31" x2="18" y2="38" stroke="#6ee7b7" strokeWidth="3" strokeLinecap="round" />
      {/* Legs */}
      <line x1="31" y1="41" x2="27" y2="58" stroke="#6ee7b7" strokeWidth="3" strokeLinecap="round" />
      <line x1="33" y1="41" x2="37" y2="58" stroke="#6ee7b7" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),

  // Amber tones — figure with thought bubble "?" above
  risk: (
    <svg viewBox="0 0 64 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* Thought bubble */}
      <circle cx="46" cy="8" r="5" fill="#fde68a" stroke="#f59e0b" strokeWidth="1" />
      <text x="43" y="12" fontSize="7" fill="#92400e" fontWeight="bold">?</text>
      <circle cx="41" cy="14" r="2" fill="#fde68a" stroke="#f59e0b" strokeWidth="1" />
      <circle cx="38" cy="18" r="1.5" fill="#fde68a" stroke="#f59e0b" strokeWidth="1" />
      {/* Head */}
      <circle cx="30" cy="20" r="10" fill="#f59e0b" />
      {/* Eyes — slightly worried */}
      <circle cx="26" cy="19" r="1.5" fill="white" />
      <circle cx="34" cy="19" r="1.5" fill="white" />
      {/* Flat/uncertain mouth */}
      <line x1="27" y1="24" x2="33" y2="24" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      {/* Body */}
      <rect x="27" y="32" width="6" height="16" rx="2" fill="#fcd34d" />
      {/* Arms */}
      <line x1="27" y1="36" x2="16" y2="44" stroke="#fcd34d" strokeWidth="3" strokeLinecap="round" />
      <line x1="33" y1="36" x2="44" y2="44" stroke="#fcd34d" strokeWidth="3" strokeLinecap="round" />
      {/* Legs */}
      <line x1="29" y1="48" x2="25" y2="64" stroke="#fcd34d" strokeWidth="3" strokeLinecap="round" />
      <line x1="31" y1="48" x2="35" y2="64" stroke="#fcd34d" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),

  // Cyan/teal tones — horizontal swimming pose with waves below
  swimming: (
    <svg viewBox="0 0 64 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* Head */}
      <circle cx="12" cy="28" r="10" fill="#0d9488" />
      {/* Eyes */}
      <circle cx="9" cy="27" r="1.5" fill="white" />
      <circle cx="15" cy="27" r="1.5" fill="white" />
      {/* Smile */}
      <path d="M9 31 Q12 34 15 31" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Body — horizontal */}
      <rect x="22" y="25" width="28" height="7" rx="3" fill="#5eead4" />
      {/* Front arm reaching forward */}
      <line x1="50" y1="27" x2="62" y2="22" stroke="#5eead4" strokeWidth="3" strokeLinecap="round" />
      {/* Back arm */}
      <line x1="28" y1="32" x2="24" y2="40" stroke="#5eead4" strokeWidth="3" strokeLinecap="round" />
      {/* Legs/kick */}
      <line x1="46" y1="32" x2="52" y2="40" stroke="#5eead4" strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="32" x2="58" y2="38" stroke="#5eead4" strokeWidth="3" strokeLinecap="round" />
      {/* Waves below */}
      <path d="M4 46 Q12 42 20 46 Q28 50 36 46 Q44 42 52 46 Q60 50 64 46" stroke="#67e8f9" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M4 54 Q12 50 20 54 Q28 58 36 54 Q44 50 52 54 Q60 58 64 54" stroke="#a5f3fc" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  ),

  // Indigo tones — figure holding a flask/beaker
  science: (
    <svg viewBox="0 0 64 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* Head */}
      <circle cx="32" cy="13" r="10" fill="#4f46e5" />
      {/* Eyes */}
      <circle cx="28" cy="12" r="1.5" fill="white" />
      <circle cx="36" cy="12" r="1.5" fill="white" />
      {/* Smile */}
      <path d="M29 16 Q32 19 35 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Body */}
      <rect x="29" y="25" width="6" height="16" rx="2" fill="#a5b4fc" />
      {/* Right arm holding flask */}
      <line x1="35" y1="29" x2="46" y2="34" stroke="#a5b4fc" strokeWidth="3" strokeLinecap="round" />
      {/* Flask — neck */}
      <rect x="46" y="30" width="5" height="6" rx="1" fill="#c7d2fe" />
      {/* Flask — body (wider) */}
      <ellipse cx="48.5" cy="44" rx="7" ry="8" fill="#6366f1" />
      {/* Liquid inside flask */}
      <ellipse cx="48.5" cy="48" rx="5" ry="4" fill="#818cf8" />
      {/* Flask bubbles */}
      <circle cx="46" cy="44" r="1" fill="white" opacity="0.6" />
      <circle cx="50" cy="41" r="1" fill="white" opacity="0.6" />
      {/* Left arm */}
      <line x1="29" y1="29" x2="18" y2="36" stroke="#a5b4fc" strokeWidth="3" strokeLinecap="round" />
      {/* Legs */}
      <line x1="31" y1="41" x2="27" y2="58" stroke="#a5b4fc" strokeWidth="3" strokeLinecap="round" />
      <line x1="33" y1="41" x2="37" y2="58" stroke="#a5b4fc" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),

  // Lavender tones — figure holding a paintbrush with a small canvas
  art_peace: (
    <svg viewBox="0 0 64 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* Head */}
      <circle cx="32" cy="13" r="10" fill="#a78bfa" />
      {/* Eyes — calm, slightly curved */}
      <path d="M27 12 Q28.5 11 30 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M34 12 Q35.5 11 37 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Gentle smile */}
      <path d="M29 17 Q32 20 35 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Body */}
      <rect x="29" y="25" width="6" height="16" rx="2" fill="#ddd6fe" />
      {/* Canvas (held in left arm area) */}
      <rect x="8" y="26" width="14" height="16" rx="2" fill="white" stroke="#c4b5fd" strokeWidth="1.5" />
      {/* Brushstroke on canvas */}
      <path d="M11 30 Q15 28 19 32 Q15 36 11 34" fill="#f0abfc" />
      {/* Left arm to canvas */}
      <line x1="29" y1="30" x2="22" y2="34" stroke="#ddd6fe" strokeWidth="3" strokeLinecap="round" />
      {/* Right arm holding paintbrush */}
      <line x1="35" y1="29" x2="46" y2="24" stroke="#ddd6fe" strokeWidth="3" strokeLinecap="round" />
      {/* Paintbrush */}
      <line x1="46" y1="24" x2="54" y2="16" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="55" cy="15" rx="3" ry="2" fill="#c084fc" />
      {/* Legs */}
      <line x1="31" y1="41" x2="27" y2="58" stroke="#ddd6fe" strokeWidth="3" strokeLinecap="round" />
      <line x1="33" y1="41" x2="37" y2="58" stroke="#ddd6fe" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ),
};

export function CaseStudyIllustration({ type, className }: CaseStudyIllustrationProps) {
  return (
    <span className={className} style={{ display: "inline-block" }}>
      {illustrations[type]}
    </span>
  );
}
```

---

## CHANGE 2 — Update `components/CaseStudyCard.tsx`

### 2a. Add import at top of file (after the existing imports)

Add this import line after the existing imports:

```tsx
import { CaseStudyIllustration } from "./CaseStudyIllustration";
import type { IllustrationKey } from "./CaseStudyIllustration";
```

### 2b. Update the `CaseStudyCardProps` interface

Find:
```tsx
interface CaseStudyCardProps {
  talentArea: string;
  icon: CaseStudyIcon;
  scenario: string;
  outcome: string;
  lesson?: string;
}
```

Replace with:
```tsx
interface CaseStudyCardProps {
  talentArea: string;
  icon: CaseStudyIcon;
  illustration?: IllustrationKey;
  scenario: string;
  outcome: string;
  lesson?: string;
}
```

### 2c. Update the function signature destructuring

Find:
```tsx
export function CaseStudyCard({
  talentArea,
  icon,
  scenario,
  outcome,
  lesson,
}: CaseStudyCardProps) {
```

Replace with:
```tsx
export function CaseStudyCard({
  talentArea,
  icon,
  illustration,
  scenario,
  outcome,
  lesson,
}: CaseStudyCardProps) {
```

### 2d. Add illustration rendering above the existing avatar div

Find this block inside the returned JSX:
```tsx
      <div className="mb-4 flex items-start gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${styles.avatar}`}
        >
```

Replace with:
```tsx
      {illustration && (
        <div className="mb-3 flex justify-center">
          <CaseStudyIllustration type={illustration} className="h-18 w-16" />
        </div>
      )}
      <div className="mb-4 flex items-start gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${styles.avatar}`}
        >
```

---

## CHANGE 3 — Update `content/dsa-experience.tsx`

### 3a. Update `DsaExperienceCaseStudy` type

Find the exported type definition for `DsaExperienceCaseStudy`. It currently looks like:
```ts
export type DsaExperienceCaseStudy = {
  talentArea: string;
  icon: "fencing" | "dance" | "robotics" | "music" | "leadership" | "risk";
  scenario: string;
  outcome: string;
  lesson?: string;
};
```

Replace with:
```ts
export type DsaExperienceCaseStudy = {
  talentArea: string;
  icon: "fencing" | "dance" | "robotics" | "music" | "leadership" | "risk";
  illustration?: "fencing" | "dance" | "robotics" | "music" | "leadership" | "risk" | "swimming" | "science" | "art_peace";
  scenario: string;
  outcome: string;
  lesson?: string;
};
```

### 3b. Add `illustration` field to all 8 existing case studies

In the `caseStudies` array for the `"case-studies"` section, add an `illustration` field to each entry as follows:

| `talentArea` | `illustration` value |
|---|---|
| `"Fencing (Niche Sport)"` | `"fencing"` |
| `"Chinese Dance"` | `"dance"` |
| `"Robotics & Engineering"` | `"robotics"` |
| `"Choir & Vocal Music"` | `"music"` |
| `"Leadership"` | `"leadership"` |
| `"When PSLE Exceeded Expectations"` | `"risk"` |
| `"When DSA Doesn't Work Out"` | `"risk"` |
| `"When the Offer Becomes a Mismatch"` | `"risk"` |

Add `illustration: "fencing"` (etc.) as the second property after `icon` in each object.

### 3c. Insert 4 new case studies BEFORE the 3 risk cases

The caseStudies array currently ends with these three risk entries (in this order):
1. `"When PSLE Exceeded Expectations"` (icon: risk)
2. `"When DSA Doesn't Work Out"` (icon: risk)
3. `"When the Offer Becomes a Mismatch"` (icon: risk)

Insert the following 4 new objects immediately BEFORE the first risk entry (`"When PSLE Exceeded Expectations"`):

```ts
{
  talentArea: "Swimming",
  icon: "leadership",
  illustration: "swimming",
  scenario:
    "A student had swum competitively since Primary 2, training four times a week at a national club. By Primary 6 she held regional age-group rankings but not a national title. Her PSLE projection sat around AL 14 — solid, but likely below the COP for the IP school she had her eye on. Through DSA, she applied to that school in May and completed two trial sessions. In June, she received a Confirmed Offer — four months before PSLE results, the question of which secondary school was settled. She sat her PSLE in October without the weight of school selection on her shoulders. Her PSLE came in at AL 13.",
  outcome: "Confirmed offer in June — PSLE taken with school already secured",
  lesson:
    "DSA's most underrated benefit is not the school — it is what it does to a child's state of mind during the PSLE preparation period. A confirmed place in June removes school selection from the PSLE equation entirely.",
},
{
  talentArea: "Mathematics & Science (Specialised School)",
  icon: "robotics",
  illustration: "science",
  scenario:
    "A student who loved mathematics competitions applied to the School of Science and Technology (SST) in Primary 6. SST admits 100% of its students through DSA — there is no PSLE posting pathway. His PSLE projection was around AL 16, well outside the COP for most IP schools, but SST evaluates on STEM aptitude and problem-solving, not academic AL scores alone. He sat a selection test, completed a group activity session, and received a Confirmed Offer. He is now in SST's Applied Learning programme studying engineering and computational thinking.",
  outcome: "Confirmed offer to SST — a school with no PSLE posting pathway",
  lesson:
    "Four Singapore secondary schools — NUS High, SOTA, SST, and Singapore Sports School — admit students exclusively through DSA. For students whose strengths fit these schools, DSA is not an alternative route. It is the only route.",
},
{
  talentArea: "Art (Late Start — P5 Discovery)",
  icon: "dance",
  illustration: "art_peace",
  scenario:
    "A family first heard about DSA in Primary 5 from another parent at a school event. Their daughter had been drawing and painting since she was small, but they had never thought of it as a school admission pathway. Over Primary 5, she joined an external art class, entered two youth art competitions, and built a portfolio of her best work. She applied to three secondary schools through Art DSA in Primary 6. One school invited her for an interview and portfolio review. She received a Confirmed Offer in August.",
  outcome: "Confirmed offer — portfolio built from scratch in one focused year",
  lesson:
    "Primary 5 is not too late if the talent base is real. A year of structured preparation — external coaching, documented work, and two to three competitive entries — can build a credible DSA portfolio from a standing start. The earlier families start, the more runway they have. But late is better than never.",
},
{
  talentArea: "Chinese Orchestra",
  icon: "music",
  illustration: "music",
  scenario:
    "A student had played erhu in her school's Chinese orchestra since Primary 3 and in an external youth orchestra from Primary 5. She was not island-wide ranked — but she had six years of documented, continuous ensemble experience and two youth festival performances on record. She applied DSA to two schools with strong Chinese orchestra programmes. Both shortlisted her. She chose the school closer to home that offered the IP track and accepted the Confirmed Offer in September. Her PSLE came in at AL 18 — the DSA school's COP via normal posting was around AL 14.",
  outcome: "Confirmed offer — 4 AL bands above PSLE posting reach",
  lesson:
    "Years of sustained ensemble involvement — not just peak competition results — is what Chinese orchestra programmes recruit for. A continuous record of participation, including external orchestras and festival performances, matters more than a single audition result.",
},
```

### 3d. Update the section title and paragraph count

Find:
```ts
title: "Eight Families. Eight Different DSA Pathways.",
```
Replace with:
```ts
title: "Twelve Families. Twelve Different DSA Pathways.",
```

In the `paragraphs` array for that same section, find the sentence containing `"These eight illustrative scenarios"`:
```
"DSA works differently depending on the talent, the school, and the year. These eight illustrative scenarios are composite examples — drawn from documented DSA mechanisms, publicly verified outcomes, and patterns that consistently appear across parent communities. They are designed to show range, not to represent any specific family. Names, scores, and details are illustrative.",
```
Replace `"These eight illustrative scenarios"` with `"These twelve illustrative scenarios"`.

---

## CHANGE 4 — Update `components/DsaExperiencePageBody.tsx`

Find the `<CaseStudyCard>` render call. It currently passes props without `illustration`:
```tsx
<CaseStudyCard
  key={`${cs.talentArea}-${i}`}
  talentArea={cs.talentArea}
  icon={cs.icon}
  scenario={cs.scenario}
  outcome={cs.outcome}
  lesson={cs.lesson}
/>
```

Replace with:
```tsx
<CaseStudyCard
  key={`${cs.talentArea}-${i}`}
  talentArea={cs.talentArea}
  icon={cs.icon}
  illustration={cs.illustration}
  scenario={cs.scenario}
  outcome={cs.outcome}
  lesson={cs.lesson}
/>
```

---

## Verification

After all changes are made, run:

```bash
npm run build
```

Expected: zero TypeScript errors, zero build errors.

Then check the `/dsa-experience` route:

- [ ] 12 case study cards render (not 8)
- [ ] Each card has an SVG cartoon illustration above the avatar circle
- [ ] Order: Fencing, Chinese Dance, Robotics, Choir, Leadership, Swimming, SST/Science, Art, Chinese Orchestra (positive cases) — then the 3 risk cases at the end
- [ ] Risk cards still show amber/champagne background (`bg-champagne-subtle/70` border) and amber badge
- [ ] Section heading reads "Twelve Families. Twelve Different DSA Pathways."
- [ ] Mobile (375px): 1-column layout, illustrations are centered and visible
- [ ] Robotics card shows a robot illustration (square head, no smile)
- [ ] Risk cards show the amber figure with "?" thought bubble
