# Cursor Task: Hero visual fixes (3 changes, 1 file)

All changes are in `components/HeroSection.tsx`.

---

## Change 1 — Replace ⚠️ emoji with Clock icon in deadline banner

**Location:** lines 74–87 (the amber deadline banner block)

**Current import line:**
```tsx
import { ArrowRight, ShieldCheck } from "lucide-react";
```
**Change to:**
```tsx
import { ArrowRight, Clock, ShieldCheck } from "lucide-react";
```

**Current inner span (the emoji):**
```tsx
<span className="shrink-0 text-base leading-none" aria-hidden>⚠️</span>
```
**Replace with:**
```tsx
<Clock className="h-4 w-4 shrink-0 text-amber-600" aria-hidden />
```

Everything else in the banner stays the same.

---

## Change 2 — Primary CTA button: deep navy → champagne gold

**Location:** the first `<Link>` in the CTA buttons section (href="/dsa-finder")

**Current className (approximately):**
```
bg-intellectual text-white shadow-soft ... hover:bg-intellectual-light ... focus-visible:outline-intellectual
```
**Replace with:**
```
bg-champagne text-intellectual shadow-soft ... hover:bg-champagne-light ... focus-visible:outline-champagne
```

Keep all other classes (padding, rounded, text-sm, font-semibold, inline-flex, gap, etc.) unchanged.

---

## Change 3 — Replace 3-column stats card with lightweight inline text

**Location:** the stats strip block (lines ~40–66), which currently renders a 3-column bordered grid card showing "147 / 1,300+ / Free".

**Remove the entire block** (the `<div className="mt-5 grid grid-cols-3 ...">` element and all its children).

**Replace with a single `<p>` tag:**
```tsx
<p className="mt-4 text-[0.8125rem] text-slate-400 normal-case">
  147 secondary schools · 1,300+ talent areas
</p>
```

Note: "Free" stat is intentionally dropped (it's already stated twice in the badge and subtitle).

---

## After all 3 changes

Run:
```
npx tsc --noEmit
```
Fix any TypeScript errors before considering the task complete.
