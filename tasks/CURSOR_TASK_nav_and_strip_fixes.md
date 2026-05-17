# CURSOR TASK: Nav ★ Badge, Link Reorder, Strip Resize, Homepage ★ Markers

## Overview

Five targeted UI changes across four components. All changes are cosmetic / structural — no new routes, no i18n key additions required. Read each change carefully before editing; the order of edits matters for SiteHeader.tsx.

---

## File 1: `components/SiteHeader.tsx`

### CHANGE 1A — Replace "Featured" pill with ★ (desktop nav)

**Locate** the `featuredLinks.map()` block in the desktop `<nav>` (lines ~71-84). Inside the map, each `<Link>` currently renders two children:

```tsx
<span>{link.label}</span>
<span className="rounded-full border border-champagne/30 bg-champagne/10 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-champagne-light normal-case">
  {t.navFeatured}
</span>
```

**Replace** those two children with:

```tsx
<span>{link.label}</span>
<span className="ml-0.5 text-champagne-light" aria-hidden>★</span>
```

The outer `<Link>` already has `flex items-center gap-1.5` — keep that intact. Remove only the pill span and swap in the star span above.

### CHANGE 1B — Replace "Featured" pill with ★ (mobile drawer)

**Locate** the `featuredLinks.map()` block in the mobile drawer `<nav>` (lines ~178-192). Same pattern — two children inside the `<Link>`:

```tsx
<span>{link.label}</span>
<span className="rounded-full border border-champagne/30 bg-champagne/10 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-champagne-light normal-case">
  {t.navFeatured}
</span>
```

**Replace** with:

```tsx
<span>{link.label}</span>
<span className="ml-0.5 text-champagne-light" aria-hidden>★</span>
```

The mobile `<Link>` has `flex items-center justify-between gap-3` — keep that. Only swap out the pill span.

### CHANGE 1C — Note on `t.navFeatured`

After removing both usages of `{t.navFeatured}` from this component, **do not** remove it from `i18n.ts` or any other file yet. It may be used elsewhere. Add a single-line comment near the top of this file:

```tsx
// TODO: t.navFeatured is no longer used in SiteHeader — check i18n.ts and remove if unused elsewhere
```

Place it just above the `useLanguage` destructure line.

---

### CHANGE 2 — Move "Interview Prep" out of mainLinks; render it between featuredLinks and Explore

**Step 2a — Edit `mainLinks` array.**

Remove `{ href: "/dsa-interview", label: t.navDsaInterview }` from the `mainLinks` array. After this change `mainLinks` should have only two entries:

```tsx
const mainLinks = [
  { href: "/faq", label: t.navFaq },
  { href: "/dsa-guide", label: t.navDsaGuide },
] as const;
```

**Step 2b — Desktop nav: insert Interview Prep link after featuredLinks.map().**

After the closing `})}` of `featuredLinks.map()` and BEFORE the `<div className="relative">` (the Explore dropdown wrapper), insert:

```tsx
<Link
  href="/dsa-interview"
  className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 hover:text-white ${
    pathname === "/dsa-interview" ? "bg-white/10 text-white" : "text-white/70"
  }`}
>
  {t.navDsaInterview}
</Link>
```

Resulting desktop nav render order (left → right):
1. `mainLinks.map()` → FAQ · DSA Guide
2. `featuredLinks.map()` → Parent Playbook ★ · Open House Guide ★
3. Interview Prep standalone link
4. Explore ▾ dropdown
5. LanguageToggle

**Step 2c — Mobile drawer: insert Interview Prep after featuredLinks.map().**

After the closing `})}` of `featuredLinks.map()` in the mobile drawer and BEFORE `<div className="mt-1 border-t border-white/10 pt-2">` (the Explore section divider), insert:

```tsx
<Link
  href="/dsa-interview"
  className={`rounded-lg px-3 py-2 text-sm font-medium normal-case transition hover:bg-white/10 hover:text-white ${
    pathname === "/dsa-interview" ? "bg-white/10 text-white" : "text-white/75"
  }`}
  onClick={() => setMobileMenuOpen(false)}
>
  {t.navDsaInterview}
</Link>
```

Mobile drawer render order:
1. `mainLinks.map()` → FAQ · DSA Guide
2. `featuredLinks.map()` → Parent Playbook ★ · Open House Guide ★
3. Interview Prep standalone link
4. Explore section (with divider)
5. LanguageToggle

---

## File 2: `components/FeaturedGuideStrip.tsx`

### CHANGE 3 — Make strip taller and more prominent

**Container `<div>` inside the outer wrapper** — currently `py-3.5`:

```tsx
<div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3.5 sm:flex-nowrap sm:px-6">
```

Change `py-3.5` to `py-5 sm:py-6`:

```tsx
<div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-5 sm:flex-nowrap sm:px-6 sm:py-6">
```

**Icon box** — currently `h-8 w-8` with `h-4 w-4` BookOpen:

```tsx
<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-champagne/20 text-champagne-dark">
  <BookOpen className="h-4 w-4" aria-hidden />
</span>
```

Change to `h-10 w-10` with `h-5 w-5` BookOpen:

```tsx
<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-champagne/20 text-champagne-dark">
  <BookOpen className="h-5 w-5" aria-hidden />
</span>
```

**Kicker `<p>`** — currently no bottom margin. Add `mb-0.5`:

```tsx
<p className="mb-0.5 text-[10px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
```

Also update the kicker text value. The kicker is driven by `{t.featuredGuideKicker}`. If that i18n value is something like "FEATURED GUIDE · FREE", append ` ★` directly in this component as a literal character so we don't need an i18n change:

```tsx
<p className="mb-0.5 text-[10px] font-bold tracking-[0.14em] text-champagne-dark normal-case">
  {t.featuredGuideKicker} ★
</p>
```

**Title `<p>`** — currently `text-sm`. Change to `text-[0.9375rem]`:

```tsx
<p className="truncate text-[0.9375rem] font-semibold text-slate-800">
  {t.featuredGuideTitle}
</p>
```

**Add subtitle line** — immediately after the title `<p>`, add:

```tsx
<p className="mt-0.5 text-xs text-slate-500 normal-case">
  The complete DSA guide for Singapore P6 families
</p>
```

(This is static text for now — no i18n needed.)

**CTA button** — currently `px-4 py-1.5 text-xs`. Change to `px-5 py-2 text-sm`:

```tsx
<Link
  href="/dsa-experience"
  className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-champagne/40 bg-white px-5 py-2 text-sm font-semibold text-intellectual transition hover:border-champagne hover:bg-champagne/10"
>
```

---

## File 3: `components/OpenHouseFieldGuide.tsx`

### CHANGE 4 — Add ★ after the heading title

**Locate** the `<h2>` that renders `{t.fieldGuide_title}`:

```tsx
<h2 className="mt-1 font-display text-[1.25rem] font-extrabold leading-tight text-slate-900 sm:text-[1.5rem]">
  {t.fieldGuide_title}
</h2>
```

**Replace** with:

```tsx
<h2 className="mt-1 font-display text-[1.25rem] font-extrabold leading-tight text-slate-900 sm:text-[1.5rem]">
  {t.fieldGuide_title}
  <span className="ml-1 text-champagne" aria-hidden>★</span>
</h2>
```

No other changes to this file.

---

## File 4: `components/DsaExperienceCallout.tsx`

### CHANGE 5 — Add ★ near the kicker (above the title)

**Locate** the kicker `<p>`:

```tsx
<p className="mb-3 text-[10px] font-bold tracking-[0.18em] text-champagne normal-case">
  {t.dsaExpCalloutKicker}
</p>
```

**Replace** with (append ★ inline):

```tsx
<p className="mb-3 text-[10px] font-bold tracking-[0.18em] text-champagne normal-case">
  {t.dsaExpCalloutKicker} ★
</p>
```

No other changes to this file.

---

## Verification Steps

After all edits are saved, run:

```bash
npm run build
```

Confirm zero TypeScript / build errors.

Then open the dev server (`npm run dev`) and check:

1. **Desktop nav order** (viewport ≥ 768px):
   - Left to right: `FAQ` · `DSA Guide` · `Parent Playbook ★` · `Open House Guide ★` · `Interview Prep` · `Explore ▾` · language toggle
   - The ★ on featured links should appear as a plain gold character — no pill box or border around it.

2. **Mobile drawer** (narrow viewport, open hamburger menu):
   - Same order as above, each on its own row
   - Featured links show ★ on the right side
   - Interview Prep appears as a plain row between featured links and the Explore divider

3. **FeaturedGuideStrip** (visible on homepage or relevant page):
   - Strip is visually taller than before (roughly 60–72px total height vs ~52px)
   - Icon box is slightly larger
   - Kicker includes ★
   - A subtitle line appears below the title
   - CTA button is slightly larger with `text-sm`

4. **OpenHouseFieldGuide section** (homepage):
   - The `<h2>` heading ends with a gold ★ character

5. **DsaExperienceCallout section** (homepage):
   - The kicker text (small caps above the main heading) ends with ★

---

## Notes for Cursor

- Do **not** touch `i18n.ts` in this task. All ★ characters are added as inline literals.
- Do **not** add new routes, pages, or API handlers.
- Do **not** reformat unrelated code — surgical edits only.
- If TypeScript complains about `as const` after removing `navDsaInterview` from `mainLinks`, that is expected and fine — the tuple just gets shorter.
- The `t.navFeatured` key is being removed from usage in `SiteHeader.tsx` but leave it in `i18n.ts` — a follow-up cleanup task will handle that.
