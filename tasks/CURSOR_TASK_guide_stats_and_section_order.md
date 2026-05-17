# CURSOR TASK: Guide Stats Update + Section Order Fix

Two targeted changes. File 1 is a 2-line edit. File 2 involves reordering two sections in the content array.

---

## Change 1: Update hardcoded stats in DsaExperienceCallout.tsx

**File**: `components/DsaExperienceCallout.tsx`

The "About This Guide" card has three hardcoded stats that are now outdated. The guide has grown from 8 sections to 11 (section-1 through section-10 plus case-studies), and read time needs to reflect the additional 12 case study stories.

**Find and replace (line 65–68)**:
```tsx
// OLD
<p className="font-display text-xl font-extrabold tabular-nums text-white">
  8
</p>
<p className="text-xs text-white/45">chapters</p>
```
```tsx
// NEW
<p className="font-display text-xl font-extrabold tabular-nums text-white">
  11
</p>
<p className="text-xs text-white/45">chapters</p>
```

**Find and replace (line 76–79)**:
```tsx
// OLD
<p className="font-display text-xl font-extrabold text-white">
  ~20 min
</p>
<p className="text-xs text-white/45">read time</p>
```
```tsx
// NEW
<p className="font-display text-xl font-extrabold text-white">
  ~35 min
</p>
<p className="text-xs text-white/45">read time</p>
```

Leave the "4 languages" stat unchanged.

---

## Change 2: Fix section order in content/dsa-experience.tsx (SECTIONS_EN only)

**File**: `content/dsa-experience.tsx`

**Problem**: `section-9` ("Open House: The Questions That Actually Matter") currently appears after `section-8` ("After Selection: What Your Result Actually Means"). Open house visits are a pre-application research step — they should come before the post-results section.

**Current order** (sections 7–10 in SECTIONS_EN):
```
section-7: "Common Mistakes to Avoid"
section-8: "After Selection: What Your Result Actually Means"
section-9: "Open House: The Questions That Actually Matter"
section-10: "Practical Checklist Before Applying"
```

**Correct order**:
```
section-7: "Common Mistakes to Avoid"
section-8: "Open House: The Questions That Actually Matter"   ← move up
section-9: "Practical Checklist Before Applying"              ← move up
section-10: "After Selection: What Your Result Actually Means" ← move to last
```

**How to implement**: In `SECTIONS_EN`, locate the four section objects with IDs `section-7`, `section-8`, `section-9`, `section-10` and reorder them so the sequence becomes:
1. Keep section-7 ("Common Mistakes") in place
2. Move the object with `id: "section-9"` (Open House questions) to appear after section-7
3. Move the object with `id: "section-10"` (Practical Checklist) after the Open House section
4. Move the object with `id: "section-8"` (After Selection) to the very end as the last section in SECTIONS_EN

**Important**: Do NOT change the `id` strings inside each object (they are used for anchor links and TOC). Only reorder which object appears first in the array.

**Do NOT touch SECTIONS_ZH, SECTIONS_MS, or SECTIONS_TA** — only SECTIONS_EN.

---

## Verification
1. `npm run build` — no TypeScript errors
2. Visit `/dsa-experience` — "About This Guide" card shows **11 chapters**, **~35 min**, 4 languages
3. In the EN guide's table of contents / section flow, "After Selection" now appears as the final chapter after "Practical Checklist"
4. "Open House" section appears before "Practical Checklist" which appears before "After Selection"
5. ZH/MS/TA sections are unaffected
