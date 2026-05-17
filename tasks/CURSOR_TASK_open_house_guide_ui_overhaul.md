# CURSOR TASK: Open House Guide — Remove Stale Schools + Compact UI + Background Variation

Three changes to OpenHouseGuidePageBody.tsx. Today's date: 2026-05-17.

---

## Change 1: Remove expired and unconfirmed schools from FEATURED_SCHOOLS

**File**: `components/OpenHouseGuidePageBody.tsx`

**Current FEATURED_SCHOOLS array** has 7 entries. Remove all entries where `confirmed: false` OR where the date is already past (before 2026-05-17).

**Entries to REMOVE**:
- NUS High School — `confirmed: true` but date was 16 May 2026 (yesterday, expired)
- St. Andrew's School — `confirmed: false` AND date was 16 May 2026 (expired + unconfirmed)
- Nan Hua High School — `confirmed: false`, "May 2026 (TBC)"
- Crescent Girls' School — `confirmed: false`, "May 2026 (TBC)"

**Entries to KEEP** (confirmed + upcoming):
- Hwa Chong Institution — confirmed, 23 May 2026 ✓
- Raffles Girls' School — confirmed, 23 May 2026 ✓
- Victoria School — confirmed, 23 May 2026 ✓

Also remove `thisWeekend: true` from any remaining entries (those schools were "this weekend" but 16 May has passed; 23 May is next weekend as of today).

**Add a `dateISO` field** to `FeaturedSchool` type so future maintenance is easier:
```typescript
type FeaturedSchool = {
  nameEn: string;
  nameZh: string;
  badge: string;
  dateEn: string;
  dateZh: string;
  confirmed: boolean;
  dateISO: string; // YYYY-MM-DD, used for expiry logic
  url: string;
  thisWeekend?: boolean;
};
```

Add `dateISO` to the 3 remaining entries: `"2026-05-23"`.

**Add dynamic filtering** in the component render — only show schools where `confirmed === true` AND `dateISO >= today`:
```tsx
// At top of OpenHouseGuidePageBody function:
const today = new Date().toISOString().slice(0, 10); // "2026-05-17"
const upcomingSchools = FEATURED_SCHOOLS.filter(
  (s) => s.confirmed && s.dateISO >= today
);
```

Then replace all references to `FEATURED_SCHOOLS.map(...)` in the render with `upcomingSchools.map(...)`.

If `upcomingSchools` is empty, hide the entire Featured Schools section entirely rather than showing an empty grid.

---

## Change 2: Make the layout more compact

**File**: `components/OpenHouseGuidePageBody.tsx`

The main content container and section gaps are too generous. Apply these spacing reductions:

**Main container** (line ~241):
```tsx
// OLD
<div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">

// NEW
<div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
```

**Between sections** — find `space-y-12` or `mt-12`/`mb-12` section gaps and reduce to `space-y-8` / `mt-8`.

**Section headings** — reduce `mb-6` to `mb-4`, `mb-8` to `mb-5` on h2 headings within sections.

**Card padding** — find cards with `p-5` or `p-6` and reduce to `p-4`.

**Grid gaps** — find `gap-6` and reduce to `gap-4` where applicable.

---

## Change 3: Add background color variation between sections

**File**: `components/OpenHouseGuidePageBody.tsx`

Currently almost every section sits on the same `bg-hero-mesh` base with white cards. Add alternating section-level backgrounds similar to the homepage (which uses bg-intellectual for dark sections and bg-surface-mesh/bg-champagne-subtle for light breaks).

Apply this pattern — wrap alternating sections in full-width background containers:

**Section 1 (Before You Go)** — keep on default (light/white)

**Section 2 (School Types)** — wrap in a full-bleed `bg-champagne/8 border-y border-champagne/15` band:
```tsx
<div className="-mx-4 bg-champagne/8 border-y border-champagne/15 px-4 py-8 sm:-mx-6 sm:px-6">
  {/* section 2 content */}
</div>
```

**Section 3 (Checklists)** — keep light

**Section 4 (Questions)** — wrap in `bg-intellectual/5 border-y border-intellectual/10` band

**Section 5 (Featured Schools)** — wrap in `bg-champagne/8 border-y border-champagne/15` band (same as section 2)

**Section 6 (Green/Red Flags)** — keep existing green/rose accent colors, just add `rounded-xl` if missing

**Section 7 (After the Visit)** — keep light

This creates a rhythm: light → champagne → light → navy-tint → champagne → light — matching the homepage's alternating visual cadence.

---

## Verification
1. `npm run build` — no errors
2. Visit `/open-house-guide`
3. Featured Schools section shows only 3 schools (Hwa Chong, RGS, Victoria) — all confirmed and dated 23 May
4. No "TBC" or expired date entries visible
5. Page feels more compact — less vertical whitespace between sections
6. Alternating background bands visible between major sections
7. If tested after 23 May 2026, the Featured Schools section disappears entirely (dynamic filter works)
