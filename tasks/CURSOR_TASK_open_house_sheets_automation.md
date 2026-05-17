# CURSOR TASK: Open House Featured Schools — Google Sheets Automation

Replace hardcoded `FEATURED_SCHOOLS` array with live Google Sheets data via API route.

**Before starting**: User must have already:
1. Created a Google Sheet with columns: `nameEn | nameZh | badge | dateEn | dateZh | confirmed | dateISO | url | thisWeekend`
2. Set sheet sharing to "Anyone with the link → Viewer"
3. Added env vars (see below)

---

## Step 1: Add env vars to `.env.local`

```
FEATURED_SCHOOLS_SHEET_ID=your_google_spreadsheet_id_here
FEATURED_SCHOOLS_SHEET_TAB=FeaturedSchools
```

Also add to `.env.example`:
```
FEATURED_SCHOOLS_SHEET_ID=
FEATURED_SCHOOLS_SHEET_TAB=FeaturedSchools
```

---

## Step 2: Create `lib/featured-schools.ts`

```typescript
export type FeaturedSchool = {
  nameEn: string;
  nameZh: string;
  badge: string;
  dateEn: string;
  dateZh: string;
  confirmed: boolean;
  dateISO: string;
  url: string;
  thisWeekend?: boolean;
};

const FALLBACK_SCHOOLS: FeaturedSchool[] = [
  {
    nameEn: "Hwa Chong Institution",
    nameZh: "华侨中学",
    badge: "IP · Independent",
    dateEn: "Sat 23 May 2026 · 08:00–13:00",
    dateZh: "2026年5月23日（周六）· 08:00–13:00",
    confirmed: true,
    dateISO: "2026-05-23",
    url: "https://www.hci.edu.sg/",
  },
  {
    nameEn: "Raffles Girls' School",
    nameZh: "莱佛士女子中学",
    badge: "IP · Independent",
    dateEn: "Sat 23 May 2026 · 08:30–13:30",
    dateZh: "2026年5月23日（周六）· 08:30–13:30",
    confirmed: true,
    dateISO: "2026-05-23",
    url: "https://openhouse.rgs.edu.sg/",
  },
  {
    nameEn: "Victoria School",
    nameZh: "维多利亚学校",
    badge: "IP · Autonomous",
    dateEn: "Sat 23 May 2026 · 08:00–12:00",
    dateZh: "2026年5月23日（周六）· 08:00–12:00",
    confirmed: true,
    dateISO: "2026-05-23",
    url: "https://www.victoria.moe.edu.sg/",
  },
];

function buildSheetUrl(): string {
  const id = process.env.FEATURED_SCHOOLS_SHEET_ID;
  const tab = process.env.FEATURED_SCHOOLS_SHEET_TAB ?? "FeaturedSchools";
  if (!id) throw new Error("FEATURED_SCHOOLS_SHEET_ID is not set");
  return `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tab)}`;
}

function parseCSV(csv: string): FeaturedSchool[] {
  const lines = csv.trim().split("\n");
  if (lines.length < 2) return [];
  // Skip header row (index 0)
  return lines.slice(1).flatMap((line) => {
    // Handle quoted CSV fields
    const cols: string[] = [];
    let current = "";
    let inQuotes = false;
    for (const char of line) {
      if (char === '"') { inQuotes = !inQuotes; continue; }
      if (char === "," && !inQuotes) { cols.push(current.trim()); current = ""; continue; }
      current += char;
    }
    cols.push(current.trim());

    const [nameEn, nameZh, badge, dateEn, dateZh, confirmedRaw, dateISO, url, thisWeekendRaw] = cols;
    if (!nameEn) return [];
    return [{
      nameEn,
      nameZh: nameZh ?? "",
      badge: badge ?? "",
      dateEn: dateEn ?? "",
      dateZh: dateZh ?? "",
      confirmed: confirmedRaw?.trim().toUpperCase() === "TRUE",
      dateISO: dateISO ?? "",
      url: url ?? "",
      thisWeekend: thisWeekendRaw?.trim().toUpperCase() === "TRUE" || undefined,
    }];
  });
}

export async function fetchFeaturedSchools(): Promise<FeaturedSchool[]> {
  try {
    const res = await fetch(buildSheetUrl(), {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      console.warn(`[featured-schools] Sheet fetch failed: ${res.status}`);
      return FALLBACK_SCHOOLS;
    }
    const csv = await res.text();
    const parsed = parseCSV(csv);
    return parsed.length > 0 ? parsed : FALLBACK_SCHOOLS;
  } catch (err) {
    console.warn("[featured-schools] Sheet unreachable, using fallback", err);
    return FALLBACK_SCHOOLS;
  }
}
```

---

## Step 3: Create `app/api/open-house/featured/route.ts`

```typescript
import { NextResponse } from "next/server";
import { fetchFeaturedSchools } from "@/lib/featured-schools";

export const revalidate = 3600;

export async function GET() {
  const schools = await fetchFeaturedSchools();
  return NextResponse.json(schools, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
```

---

## Step 4: Modify `components/OpenHouseGuidePageBody.tsx`

**a) Add import at top:**
```typescript
import { useState, useEffect } from "react";
import type { FeaturedSchool } from "@/lib/featured-schools";
```

**b) Remove the local `FeaturedSchool` type definition** (lines ~148–157) — it's now imported.

**c) Remove the `FEATURED_SCHOOLS` constant array** (lines ~159–225) — replaced by state.

**d) Inside `OpenHouseGuidePageBody` function, replace:**
```typescript
// OLD
const today = new Date().toISOString().slice(0, 10);
const upcomingSchools = FEATURED_SCHOOLS.filter(
  (school) => school.confirmed && school.dateISO >= today
);

// NEW
const [featuredSchools, setFeaturedSchools] = useState<FeaturedSchool[]>([]);

useEffect(() => {
  fetch("/api/open-house/featured")
    .then((r) => r.json())
    .then((data: FeaturedSchool[]) => {
      const today = new Date().toISOString().slice(0, 10);
      setFeaturedSchools(data.filter((s) => s.confirmed && s.dateISO >= today));
    })
    .catch(() => {});
}, []);

const upcomingSchools = featuredSchools;
```

---

## Verification
1. `npm run build` — no TypeScript errors
2. `npx tsc --noEmit` — clean
3. Visit `/open-house-guide` — Featured Schools section loads (may flash in after hydration)
4. Hit `GET /api/open-house/featured` directly — returns JSON array
5. If `FEATURED_SCHOOLS_SHEET_ID` not set, fallback data serves correctly (no crash)

## After completion
```
git add -A && git commit -m "feat: open house featured schools via Google Sheets API"
```

---

## User setup required (not in code)

After Cursor runs, user must:
1. Create Google Sheet with columns: `nameEn | nameZh | badge | dateEn | dateZh | confirmed | dateISO | url | thisWeekend`
2. Share as "Anyone with the link → Viewer"
3. Copy the Sheet ID from the URL: `docs.google.com/spreadsheets/d/**{THIS_PART}**/edit`
4. Add to Vercel dashboard: Settings → Environment Variables → `FEATURED_SCHOOLS_SHEET_ID`
5. Redeploy to pick up new env var
