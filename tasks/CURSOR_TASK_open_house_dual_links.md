# CURSOR TASK: Add Open House Links + Fix Data

Two things: (1) add a second "Open House" link button for schools with confirmed open houses, (2) fix data errors.

---

## Part 1: Fix Data in `lib/school-open-houses.ts`

### 1a. Update SACSS (currently still TBC — fix this)

Find entry `id: "st-anthonys-canossian-secondary-school"` and replace:

```typescript
date: "2026-05-31",
startsAt: "2026-05-31T09:00:00+08:00",
endsAt: "2026-05-31T17:00:00+08:00",
timeEn: "May 2026 (TBC — check school DSA page)",
timeZh: "2026年5月（待定 — 以学校 DSA 页面为准）",
mode: "on-site",
dateDisplayEn: "May 2026 (TBC)",
dateDisplayZh: "2026年5月（待定）",
```

With:

```typescript
date: "2026-05-23",
startsAt: "2026-05-23T10:00:00+08:00",
endsAt: "2026-05-23T11:00:00+08:00",
timeEn: "Sat, 23 May, 10:00am–11:00am (Online)",
timeZh: "5月23日（六）上午10:00–11:00（线上）",
mode: "online",
dateDisplayEn: "Sat, 23 May",
dateDisplayZh: "5月23日（六）",
```

### 1b. Remove Raffles Institution entry

Find and delete the entire entry with `id: "raffles-institution"`. It has `date: "2026-05-09"` (past event) and malformed timeEn. Remove the whole object from the array.

---

## Part 2: Add `openHouseUrl` Field to Type

### Edit `lib/open-house-types.ts`

Add after `isHomepageOnly?: boolean`:

```typescript
/** Direct link to the school's open house event page (when different from or in addition to sourceUrl). */
openHouseUrl?: string;
```

---

## Part 3: Add `openHouseUrl` Data for Confirmed Open House Schools

Add `openHouseUrl` to each of the following entries in `lib/school-open-houses.ts`. Only add to schools with **confirmed open house dates May 23–June 2, 2026**.

| School ID | openHouseUrl |
|-----------|-------------|
| `hwa-chong-institution` | `https://hci.edu.sg/experience-the-hwa-chong-spirit/` |
| `raffles-girls-school` | `https://openhouse.rgs.edu.sg/` |
| `victoria-school` | `https://www.victoria.moe.edu.sg/prospective-students/openhouse-2026/` |
| `crest-secondary-school` | `https://sites.google.com/crestsec.edu.sg/crest-open-house/` |
| `st-josephs-institution` | `https://www.sji.edu.sg/news-and-events/announcements/2026/` |
| `dunman-high-school` | `https://www.dunmanhigh.moe.edu.sg/jh-sec-admissions/admissions/` |
| `cedar-girls-secondary-school` | `https://www.cedargirlssec.moe.edu.sg/` |
| `st-anthonys-canossian-secondary-school` | `https://stanthonyscanossiansec.moe.edu.sg/sacss-dsa-information-2026/` |
| `school-of-science-and-technology-singapore` | `https://www.sst.edu.sg/admissions/dsa` |
| `yusof-ishak-secondary-school` | `https://www.yusofishaksec.moe.edu.sg/open-house-2026/` |
| `tanjong-katong-secondary-school` | `https://www.tanjongkatongsec.moe.edu.sg/dsa-open-house-2026/` |

---

## Part 4: Update UI Components

Both components show a link button per school. When `openHouseUrl` exists, show **two buttons**: one for the open house, one for DSA/admissions.

### 4a. `components/OpenHouseList.tsx`

Find the button section (currently around line 168–178):

```tsx
<div className="mt-5 flex flex-wrap items-center gap-2 border-t border-intellectual/8 pt-4">
  <a
    href={ev.sourceUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-intellectual px-4 py-2.5 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-intellectual-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:flex-initial sm:justify-start"
  >
    {t.openHouseOfficialLink}
    <ExternalLink className="h-4 w-4 opacity-90" aria-hidden />
  </a>
</div>
```

Replace with:

```tsx
<div className="mt-5 flex flex-wrap items-center gap-2 border-t border-intellectual/8 pt-4">
  {ev.openHouseUrl && (
    <a
      href={ev.openHouseUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-champagne/20 px-4 py-2.5 text-center text-sm font-semibold text-champagne-light shadow-soft transition hover:bg-champagne/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:flex-initial sm:justify-start border border-champagne/30"
    >
      Open House
      <ExternalLink className="h-4 w-4 opacity-90" aria-hidden />
    </a>
  )}
  <a
    href={ev.sourceUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-intellectual px-4 py-2.5 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-intellectual-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:flex-initial sm:justify-start"
  >
    {t.openHouseOfficialLink}
    <ExternalLink className="h-4 w-4 opacity-90" aria-hidden />
  </a>
</div>
```

### 4b. `components/OpenHousesDirectory.tsx`

Find the single link button section (around line 444–462). Replace with two buttons when `openHouseUrl` exists:

```tsx
<div className="flex shrink-0 flex-col items-end justify-center gap-1.5">
  {ev.openHouseUrl && (
    <a
      href={ev.openHouseUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open House"
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-champagne/20 text-champagne-light border border-champagne/30 shadow-sm transition hover:bg-champagne/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2"
    >
      <ExternalLink className="h-4 w-4 sm:h-4 sm:w-4" aria-hidden />
      <span className="hidden max-w-[6.5rem] text-center text-xs font-semibold leading-tight sm:inline">
        Open House
      </span>
    </a>
  )}
  {(() => {
    const label = ev.isHomepageOnly ? t.openHouseSchoolLink : t.openHouseOfficialBooking;
    return (
      <a
        href={ev.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={label}
        aria-label={label}
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-intellectual text-white shadow-sm transition hover:bg-intellectual-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:h-auto sm:w-auto sm:gap-2 sm:px-4 sm:py-2.5"
      >
        <ExternalLink className="h-4 w-4 sm:h-4 sm:w-4" aria-hidden />
        <span className="hidden max-w-[6.5rem] text-center text-xs font-semibold leading-tight sm:inline">
          {label}
        </span>
      </a>
    );
  })()}
</div>
```

Note: the outer wrapper changed from `flex-col justify-center` to `flex-col items-end justify-center gap-1.5` to stack the two buttons vertically.

---

## Files to Edit

1. `lib/open-house-types.ts` — add field
2. `lib/school-open-houses.ts` — fix SACSS, remove RI, add openHouseUrl
3. `components/OpenHouseList.tsx` — dual buttons
4. `components/OpenHousesDirectory.tsx` — dual buttons

---

## After Editing

```bash
cd ~/Desktop/dsalink-web
npx tsc --noEmit
```

Fix any TypeScript errors before finishing.
