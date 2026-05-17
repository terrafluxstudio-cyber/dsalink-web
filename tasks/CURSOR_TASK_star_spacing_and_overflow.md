# CURSOR TASK: Star Spacing Fix + Missing Animations + ZH Overflow

## Change 1: Fix star spacing in SiteHeader nav

**File**: `components/SiteHeader.tsx`

The ★ after nav link text has inconsistent spacing. The gap between text and star should match natural letter spacing — roughly `0.15em`. Currently `ml-0` but inline whitespace still creates a gap.

Fix by wrapping each featuredLink's content in a tight flex span:

**Desktop nav** — find the featuredLinks map block and change inner content:
```tsx
// OLD
<span>{link.label}</span>
<span className="ml-0 text-champagne-light animate-sparkle" aria-hidden>
  ★
</span>

// NEW
<span className="inline-flex items-center gap-[0.2em]">
  <span>{link.label}</span>
  <span className="text-champagne-light animate-sparkle" aria-hidden>★</span>
</span>
```

**Mobile drawer** — same fix in the mobile featuredLinks map block.

---

## Change 2: Add animate-sparkle to ALL missing stars

**File**: `components/OpenHouseFieldGuide.tsx`

Find:
```tsx
★
```
(the bare ★ inside the component, around line 27)

Wrap in:
```tsx
<span className="animate-sparkle" aria-hidden>★</span>
```

**File**: `components/SiteHeader.tsx`

Confirm both ★ instances (desktop + mobile) already have `animate-sparkle`. If the ★ is on its own line inside the span (not inline), consolidate to single line:
```tsx
<span className="text-champagne-light animate-sparkle" aria-hidden>★</span>
```

Do NOT touch `RecommendResultCard.tsx` — that ★ is a text prefix in a badge string, not a decorative star.

---

## Change 3: Fix Chinese text overflow in CaseStudyCard

**File**: `components/CaseStudyCard.tsx`

The previous `break-words` fix wasn't enough. Chinese long text in the section subtitle "十二个家庭，十二条不同的 DSA 路径" small copy is still overflowing.

Add `overflow-wrap: anywhere` via Tailwind `break-all` specifically for the scenario text, and ensure the card grid doesn't force cards wider than their column:

Find scenario paragraph:
```tsx
<p className="mb-4 flex-1 break-words text-[0.8125rem] leading-relaxed text-slate-600">
```

Replace with:
```tsx
<p className="mb-4 flex-1 text-[0.8125rem] leading-relaxed text-slate-600 [overflow-wrap:anywhere]">
```

Also find the section heading that renders "十二个家庭..." — this is likely in `DsaExperiencePageBody.tsx`. Find the `<h2>` or `<p>` rendering `section.title` for `id="case-studies"` and ensure it has `break-words` or `[overflow-wrap:anywhere]` class.

In `components/DsaExperiencePageBody.tsx`, find the section title heading (around the `aria-labelledby` heading):
```tsx
// Find something like:
<h2 ... className="... text-...">
  {section.title}
</h2>
```

Add `break-words` to its className if not already present.

---

## Verification
1. `npm run build` — no errors
2. Nav: "Parent Playbook ★" — gap between text and star matches letter spacing (tight, not a full space)
3. All ★ on page animate with sparkle pulse
4. `/dsa-experience` ZH mode — case study cards and section title "十二个家庭..." no overflow on any width
5. OpenHouseFieldGuide ★ animates
