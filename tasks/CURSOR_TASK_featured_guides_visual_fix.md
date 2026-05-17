# Cursor Task: Featured Guides Section Visual Fix

## File to modify
`components/FeaturedGuidesSection.tsx`

## Changes required

### 1. Move kicker to same row as icon (icon + kicker side by side), enlarge title, enlarge star

**Current structure per card:**
```tsx
<div className="flex flex-col rounded-2xl border border-champagne/30 bg-white p-6 shadow-card">
  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-champagne/20 text-champagne-dark">
    <BookOpen className="h-5 w-5" aria-hidden />
  </div>
  <p className="mb-1 text-[10px] font-bold tracking-[0.16em] text-champagne-dark normal-case">
    {t.featuredGuideKicker}{" "}
    <span aria-hidden className="animate-sparkle">★</span>
  </p>
  <h2 className="font-display text-[1.1rem] font-extrabold leading-snug text-slate-900 sm:text-[1.2rem]">
    {t.featuredGuideTitle}
  </h2>
  ...
```

**Replace with (for Card 1 — Playbook):**
```tsx
<div className="flex flex-col rounded-2xl border border-champagne/30 bg-white p-6 shadow-card">
  <div className="mb-4 flex items-center gap-3">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-champagne/20 text-champagne-dark">
      <BookOpen className="h-5 w-5" aria-hidden />
    </div>
    <p className="text-[11px] font-bold tracking-[0.16em] text-champagne-dark normal-case">
      {t.featuredGuideKicker}{" "}
      <span aria-hidden className="animate-sparkle text-base">★</span>
    </p>
  </div>
  <h2 className="font-display text-[1.25rem] font-extrabold leading-snug text-slate-900 sm:text-[1.375rem]">
    {t.featuredGuideTitle}
  </h2>
  ...
```

**Replace with (for Card 2 — Open House Guide):**
```tsx
<div className="flex flex-col rounded-2xl border border-champagne/30 bg-white p-6 shadow-card">
  <div className="mb-4 flex items-center gap-3">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-champagne/20 text-champagne-dark">
      <MapPin className="h-5 w-5" aria-hidden />
    </div>
    <p className="text-[11px] font-bold tracking-[0.16em] text-champagne-dark normal-case">
      {t.fieldGuide_kicker}{" "}
      <span aria-hidden className="animate-sparkle text-base">★</span>
    </p>
  </div>
  <h2 className="font-display text-[1.25rem] font-extrabold leading-snug text-slate-900 sm:text-[1.375rem]">
    {t.fieldGuide_title}
  </h2>
  ...
```

## Summary of changes
- Icon and kicker text are now on the same row (`flex items-center gap-3`)
- Icon gets a wrapper div with `shrink-0`
- Star changes from inline `★` to `text-base` size (larger)
- Title font size: `text-[1.1rem] sm:text-[1.2rem]` → `text-[1.25rem] sm:text-[1.375rem]`

Do NOT change anything else in the file (description text, CTA buttons, section wrapper, etc).

## Verification
1. `npm run build` — no TypeScript errors
2. Homepage: each card shows icon + kicker text on the same horizontal row
3. Star is visibly larger than before
4. Title text is larger than before
5. Layout still stacks vertically on mobile

## Git commit
```
git add components/FeaturedGuidesSection.tsx
git commit -m "fix: featured guides card layout — icon beside kicker, larger title and star"
```
