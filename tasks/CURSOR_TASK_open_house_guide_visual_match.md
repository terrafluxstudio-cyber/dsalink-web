# CURSOR TASK: Open House Guide — Match Playbook Visual Style

**File**: `components/OpenHouseGuidePageBody.tsx` only.

The Playbook (`/dsa-experience`) uses `bg-surface` base, clean white cards with `border-intellectual/12`, and champagne accent bands. Open House Guide should match this exactly.

---

## Change 1: Main background

Find:
```tsx
<main className="border-t border-intellectual/5 bg-hero-mesh">
```

Replace:
```tsx
<main className="border-t border-intellectual/5 bg-surface">
```

---

## Change 2: Main content container — tighter padding

Find:
```tsx
<div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
```

Replace:
```tsx
<div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-6xl">
```

---

## Change 3: Section 1 cards — match Playbook card style

Section 1 (Before You Go) cards currently use `bg-white/95`. The Playbook uses clean `bg-white border border-[#e3ded5] shadow-card`. Update:

Find all instances of:
```tsx
className="rounded-2xl border border-intellectual/12 bg-white/95 p-5 shadow-soft ring-1 ring-champagne/15 sm:p-6"
```

Replace with:
```tsx
className="rounded-xl border border-[#e3ded5] bg-white p-4 shadow-card sm:p-5"
```

---

## Change 4: Section heading spacing — tighter

Find all section `<h2>` headings that have `mt-10 sm:mt-12` or similar large top margins on their parent section. Reduce:
- `mt-10` → `mt-8`
- `mt-12` → `mt-10`
- `pt-8 sm:pt-10` → `pt-6 sm:pt-8`

---

## Change 5: Champagne band sections — reduce vertical padding

The champagne band divs (with `-mx-4 bg-champagne/8 border-y`) currently use `py-8 sm:py-10` or `py-8 sm:mt-12`. Reduce:
- `py-8` → `py-6`
- `mt-10` on champagne bands → `mt-8`

---

## Change 6: Question cards — match Playbook insight callout style

The 10-questions section and staff/student Q cards currently use `bg-white/95`. Update to match Playbook's insight callout style:

For regular question items:
```tsx
// OLD pattern
className="... bg-white/95 ..."

// NEW
className="... bg-white border border-[#e3ded5] shadow-card ..."
```

For the "insight" / strategy boxes (currently `bg-amber-50/50` or `bg-surface-warm`):
Keep `bg-surface-warm` — this matches Playbook's callout style exactly.

---

## Change 7: Green/Red flags — keep existing, just round the containers

The green-50 / rose-50 sections are fine. Just ensure they use `rounded-xl` consistently.

---

## Change 8: Featured Schools section heading strip

Wrap the "Featured Schools" section heading in a champagne kicker style matching Playbook section headers:

Find the heading for the Featured Schools section and add a kicker line above it:
```tsx
<p className="mb-1.5 text-[10px] font-bold tracking-[0.16em] text-champagne-dark normal-case">
  CONFIRMED OPEN HOUSES
</p>
```

Above the existing `<h2>` for that section.

---

## Verification
1. `npm run build` — no errors
2. `/open-house-guide` background is now cream/surface (same as Playbook), not the blue mesh
3. Cards are cleaner white with `border-[#e3ded5]` borders matching Playbook card style
4. Section spacing is tighter overall
5. Champagne accent bands still appear between sections for visual rhythm
6. `/dsa-experience` (Playbook) is unaffected
