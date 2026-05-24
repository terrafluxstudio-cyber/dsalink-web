# CURSOR TASK: Nav Restructure + Open Houses Banner + Takeaways Enrichment

## Overview

4 changes in one task:
1. Add ~17 new i18n strings to `lib/i18n.ts` (all 4 locales)
2. Restructure nav — "Open House Guide ★" → "Open House ★" dropdown with 3 sub-items
3. Add a banner at top of `/open-houses` pointing to `/open-house-takeaways`
4. Enrich `/open-house-takeaways` — more content sections + convert to 4-language i18n

---

## CHANGE A — `lib/i18n.ts`

### Step A1: Add to `Copy` type (after the `navOpenHouseGuide: string;` line at ~line 112)

```ts
  navOpenHouse: string;
  navOpenHouseTakeaways: string;
  ohBannerText: string;
  ohBannerCta: string;
  ohTakeawaysKicker: string;
  ohTakeawaysTitle: string;
  ohTakeawaysSubtitle: string;
  ohTakeawaysKeySignal: string;
  ohTakeawaysTalentAreas: string;
  ohTakeawaysOfficialLink: string;
  ohTakeawaysTalentFinderTitle: string;
  ohTakeawaysTalentFinderSubtitle: string;
  ohTakeawaysWhatsNextTitle: string;
  ohTakeawaysWhatsNextBody: string;
  ohTakeawaysDeadlineLabel: string;
  ohTakeawaysApplyBtn: string;
```

### Step A2: Add locale values

In the **en** object (near the `navOpenHouseGuide: "Open House Guide"` line):
```ts
navOpenHouse: "Open House",
navOpenHouseTakeaways: "Takeaways",
ohBannerText: "8 schools have held their DSA open houses",
ohBannerCta: "See what they shared →",
ohTakeawaysKicker: "DSA Open House Recap · May 2026",
ohTakeawaysTitle: "What Did Each DSA Open House Share?",
ohTakeawaysSubtitle: "8 schools held their open houses before the application window opened. Here's what each one shared — talent areas, selection signals, and what parents need to know.",
ohTakeawaysKeySignal: "Key Signal",
ohTakeawaysTalentAreas: "DSA Talent Areas",
ohTakeawaysOfficialLink: "Official DSA Page",
ohTakeawaysTalentFinderTitle: "Find Schools by Talent Area",
ohTakeawaysTalentFinderSubtitle: "Which of these 8 schools offer the talent area your child is applying with?",
ohTakeawaysWhatsNextTitle: "What's Next?",
ohTakeawaysWhatsNextBody: "The DSA-Sec Exercise application window is now open. Apply directly through the MOE DSA-Sec portal — shortlisting and trials happen separately at each school.",
ohTakeawaysDeadlineLabel: "Application closes 2 June 2026, 4:30 pm SGT",
ohTakeawaysApplyBtn: "Apply via MOE DSA-Sec Portal",
```

In the **zh** object (near `navOpenHouseGuide: "开放日指南"`):
```ts
navOpenHouse: "开放日",
navOpenHouseTakeaways: "开放日要点",
ohBannerText: "8所学校已完成DSA开放日",
ohBannerCta: "查看各校分享的要点 →",
ohTakeawaysKicker: "DSA 开放日回顾 · 2026年5月",
ohTakeawaysTitle: "各校DSA开放日透露了什么？",
ohTakeawaysSubtitle: "这8所学校在DSA申请窗口开放前已举办开放日。以下是各校传递的关键信息——才能项目、选拔信号，以及申请前家长需要了解的要点。",
ohTakeawaysKeySignal: "关键信号",
ohTakeawaysTalentAreas: "DSA才能方向",
ohTakeawaysOfficialLink: "官方DSA页面",
ohTakeawaysTalentFinderTitle: "按才能方向查找学校",
ohTakeawaysTalentFinderSubtitle: "这8所学校中，哪些提供你孩子所申请的才能方向？",
ohTakeawaysWhatsNextTitle: "接下来怎么做？",
ohTakeawaysWhatsNextBody: "DSA-Sec申请窗口现已开放。请通过MOE DSA-Sec入口直接申请——各校的入围通知和选拔测试将另行安排。",
ohTakeawaysDeadlineLabel: "申请截止：2026年6月2日（周二）下午4:30（新加坡时间）",
ohTakeawaysApplyBtn: "前往MOE DSA-Sec申请平台",
```

In the **ms** object (near `navOpenHouseGuide: "Panduan Hari Terbuka"`):
```ts
navOpenHouse: "Hari Terbuka",
navOpenHouseTakeaways: "Ringkasan",
ohBannerText: "8 sekolah telah mengadakan hari terbuka DSA mereka",
ohBannerCta: "Lihat apa yang mereka kongsikan →",
ohTakeawaysKicker: "Ringkasan Hari Terbuka DSA · Mei 2026",
ohTakeawaysTitle: "Apa yang Dikongsi Setiap Hari Terbuka DSA?",
ohTakeawaysSubtitle: "8 sekolah mengadakan hari terbuka sebelum tempoh permohonan dibuka. Berikut ialah apa yang setiap sekolah kongsikan — bidang bakat, isyarat pemilihan, dan apa yang perlu diketahui ibu bapa.",
ohTakeawaysKeySignal: "Isyarat Utama",
ohTakeawaysTalentAreas: "Bidang Bakat DSA",
ohTakeawaysOfficialLink: "Laman DSA Rasmi",
ohTakeawaysTalentFinderTitle: "Cari Sekolah mengikut Bidang Bakat",
ohTakeawaysTalentFinderSubtitle: "Antara 8 sekolah ini, yang mana menawarkan bidang bakat yang anak anda mohon?",
ohTakeawaysWhatsNextTitle: "Apa Seterusnya?",
ohTakeawaysWhatsNextBody: "Tetingkap permohonan DSA-Sec kini dibuka. Mohon melalui portal MOE DSA-Sec — penyenaraian pendek dan ujian pemilihan dijalankan berasingan di setiap sekolah.",
ohTakeawaysDeadlineLabel: "Permohonan tutup 2 Jun 2026, 4:30 petang SGT",
ohTakeawaysApplyBtn: "Mohon melalui Portal MOE DSA-Sec",
```

In the **ta** object (near `navOpenHouseGuide: "திறந்த நாள் வழிகாட்டி"`):
```ts
navOpenHouse: "திறந்த நாள்",
navOpenHouseTakeaways: "சுருக்கம்",
ohBannerText: "8 பள்ளிகள் தங்கள் DSA திறந்த நாளை நடத்தியுள்ளன",
ohBannerCta: "அவர்கள் பகிர்ந்ததைப் பாருங்கள் →",
ohTakeawaysKicker: "DSA திறந்த நாள் சுருக்கம் · மே 2026",
ohTakeawaysTitle: "ஒவ்வொரு DSA திறந்த நாளும் என்ன பகிர்ந்தது?",
ohTakeawaysSubtitle: "விண்ணப்ப காலம் தொடங்குவதற்கு முன் 8 பள்ளிகள் திறந்த நாளை நடத்தின. ஒவ்வொன்றும் பகிர்ந்தது — திறன் பகுதிகள், தேர்வு சமிக்ஞைகள், மற்றும் பெற்றோர் அறிய வேண்டியவை.",
ohTakeawaysKeySignal: "முக்கிய சமிக்ஞை",
ohTakeawaysTalentAreas: "DSA திறன் பகுதிகள்",
ohTakeawaysOfficialLink: "அதிகாரப்பூர்வ DSA பக்கம்",
ohTakeawaysTalentFinderTitle: "திறன் பகுதி மூலம் பள்ளிகளைக் கண்டறியுங்கள்",
ohTakeawaysTalentFinderSubtitle: "இந்த 8 பள்ளிகளில் எந்த பள்ளிகள் உங்கள் குழந்தையின் திறன் பகுதியை வழங்குகின்றன?",
ohTakeawaysWhatsNextTitle: "அடுத்தது என்ன?",
ohTakeawaysWhatsNextBody: "DSA-Sec விண்ணப்ப காலம் இப்போது திறந்துள்ளது. MOE DSA-Sec தளம் வழியாக நேரடியாக விண்ணப்பிக்கவும் — தேர்வு மற்றும் சோதனைகள் தனித்தனியாக ஒவ்வொரு பள்ளியிலும் நடைபெறும்.",
ohTakeawaysDeadlineLabel: "விண்ணப்பம் மூடும் தேதி: 2 ஜூன் 2026, மாலை 4:30 SGT",
ohTakeawaysApplyBtn: "MOE DSA-Sec தளம் வழியாக விண்ணப்பிக்கவும்",
```

---

## CHANGE B — `components/SiteHeader.tsx`

### Step B1: Add new state
After `const [dataMenuOpen, setDataMenuOpen] = useState(false);` add:
```ts
const [openHouseMenuOpen, setOpenHouseMenuOpen] = useState(false);
```

### Step B2: Update arrays

Remove `/open-house-guide` from `featuredLinks` (keep only `/dsa-experience`):
```ts
const featuredLinks = [
  { href: "/dsa-experience", label: t.navDsaExperience },
] as const;
```

Add new array after `featuredLinks`:
```ts
const openHouseLinks = [
  { href: "/open-houses", label: t.navOpenHouses },
  { href: "/open-house-guide", label: t.navOpenHouseGuide },
  { href: "/open-house-takeaways", label: t.navOpenHouseTakeaways },
] as const;
```

### Step B3: Desktop nav — add "Open House" dropdown

Place it AFTER the `featuredLinks.map(...)` block, BEFORE the `/dsa-interview` Link:

```tsx
{/* Open House dropdown */}
<div
  className="relative"
  onBlur={(event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpenHouseMenuOpen(false);
    }
  }}
  onKeyDown={(event) => {
    if (event.key === "Escape") setOpenHouseMenuOpen(false);
  }}
>
  <button
    type="button"
    aria-controls="desktop-openhouse-menu"
    aria-expanded={openHouseMenuOpen}
    aria-haspopup="true"
    onClick={() => setOpenHouseMenuOpen((open) => !open)}
    className={`flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-1.5 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 hover:text-white ${
      openHouseLinks.some((link) => link.href === pathname)
        ? "bg-white/10 text-white"
        : "text-white/70"
    }`}
  >
    <span className="inline-flex items-center gap-[0.2em]">
      <span>{t.navOpenHouse}</span>
      <span className="text-champagne-light animate-sparkle" aria-hidden>★</span>
    </span>
    <ChevronDown
      className={`h-3.5 w-3.5 transition-transform ${openHouseMenuOpen ? "rotate-180" : ""}`}
      aria-hidden
    />
  </button>
  {openHouseMenuOpen ? (
    <div
      id="desktop-openhouse-menu"
      className="absolute right-0 top-full z-50 mt-1 min-w-[180px] rounded-xl border border-white/10 bg-intellectual/95 py-1 shadow-lg backdrop-blur-md"
    >
      {openHouseLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setOpenHouseMenuOpen(false)}
          className={`block px-4 py-2 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 hover:text-white ${
            pathname === link.href ? "text-white" : "text-white/75"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  ) : null}
</div>
```

### Step B4: Mobile drawer — add "Open House" section

In the mobile `<nav>` section, BEFORE the existing `border-t` section for `navExplore`, add:

```tsx
<div className="mt-1 border-t border-white/10 pt-2">
  <p className="px-3 py-1 text-[10px] font-semibold normal-case text-white/45">
    {t.navOpenHouse}
  </p>
  {openHouseLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`block rounded-lg px-3 py-2 text-sm font-medium normal-case transition hover:bg-white/10 hover:text-white ${
        pathname === link.href ? "bg-white/10 text-white" : "text-white/75"
      }`}
      onClick={() => setMobileMenuOpen(false)}
    >
      {link.label}
    </Link>
  ))}
</div>
```

---

## CHANGE C — `components/OpenHousesDirectory.tsx`

Check if it's already a client component. If not, add `"use client"` at top and import `useLanguage`.

At the top of the JSX return (before any existing heading/search UI), add a wrapper div and the banner:

```tsx
{/* Takeaways banner */}
<div className="mx-auto max-w-5xl px-4 pt-6 sm:px-6">
  <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-champagne/25 bg-champagne/8 px-4 py-3">
    <p className="text-sm font-medium text-intellectual">
      {t.ohBannerText}
    </p>
    <Link
      href="/open-house-takeaways"
      className="shrink-0 text-sm font-semibold text-champagne-dark transition hover:underline"
    >
      {t.ohBannerCta}
    </Link>
  </div>
</div>
```

Make sure `Link` from `next/link` is imported.

---

## CHANGE D — Split `app/open-house-takeaways/page.tsx` → new `components/OpenHouseTakeawaysBody.tsx`

### Step D1: Create `components/OpenHouseTakeawaysBody.tsx`

This is a new `"use client"` component. Move ALL content from `page.tsx` (the SCHOOLS data, SchoolTakeaway type, TalentAreaPill, SchoolCard, and the main render) into this file.

**Key modifications to the component:**

1. Add at top:
```tsx
"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
```

2. Add `useLanguage()` hook inside `OpenHouseTakeawaysBody`:
```tsx
const { locale, t } = useLanguage();
```

3. Update `SchoolCard` to accept `locale` prop and render locale-aware content:
```tsx
function SchoolCard({ school, locale }: { school: SchoolTakeaway; locale: string }) {
  // school name: nameZh for zh, nameEn otherwise
  // date: dateZh for zh, date otherwise
  // eventType: eventTypeZh for zh, eventType otherwise
  // keySignal: keySignalZh for zh, keySignalEn otherwise
}
```

4. The key signal section becomes:
```tsx
<div className="mt-3 border-l-2 border-champagne pl-4">
  <p className="text-sm text-intellectual">
    {locale === "zh" ? school.keySignalZh : school.keySignalEn}
  </p>
</div>
```
(Remove the separate ZH line — now it's one line in the active locale)

5. Talent areas label and official link button use `t.ohTakeawaysTalentAreas` and `t.ohTakeawaysOfficialLink`.

6. Hero section uses `t.ohTakeawaysKicker`, `t.ohTakeawaysTitle`, `t.ohTakeawaysSubtitle`.

### Step D2: Add Talent Finder section

After the school cards list (`</div>` closing the `space-y-6` div), add:

```tsx
{/* Talent Area Finder */}
<section className="mt-14">
  <div className="mb-6 border-b border-intellectual/10 pb-4">
    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-champagne-dark">
      {t.ohTakeawaysTalentFinderTitle}
    </p>
    <p className="mt-1 text-sm text-intellectual-muted">
      {t.ohTakeawaysTalentFinderSubtitle}
    </p>
  </div>
  <div className="divide-y divide-intellectual/8">
    {buildTalentFinderRows(SCHOOLS).map(([area, schoolNames]) => (
      <div key={area} className="flex flex-wrap items-baseline gap-x-4 gap-y-1.5 py-3">
        <span className="min-w-[180px] text-sm font-semibold text-intellectual">
          {area}
        </span>
        <span className="text-xs text-intellectual-muted">
          {schoolNames.length === 1 ? "1 school" : `${schoolNames.length} schools`}
          {" · "}
          {schoolNames.join(", ")}
        </span>
      </div>
    ))}
  </div>
</section>
```

Add the helper function above the component:
```tsx
function buildTalentFinderRows(schools: SchoolTakeaway[]): [string, string[]][] {
  const map = new Map<string, string[]>();
  for (const school of schools) {
    for (const area of school.talentAreas) {
      const base = area.replace(" ★ New 2026", "").trim();
      const list = map.get(base) ?? [];
      list.push(school.nameEn.replace("School (Secondary)", "School").replace("Paya Lebar Methodist Girls' School", "PLMGS").replace("Singapore Chinese Girls' School", "SCGS").replace("CHIJ St. Nicholas Girls' School", "CHIJ SNGS").replace("Anglican High School", "Anglican High").replace("National Junior College (IP)", "NJC").replace("NUS High School of Maths and Science", "NUS High").replace("Catholic High School", "Catholic High").replace("St. Andrew's School", "St. Andrew's"));
      map.set(base, list);
    }
  }
  return Array.from(map.entries())
    .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
}
```

Actually — simpler: just use a short `schoolId` map instead of string replacement. Or even simpler: add a `nameShort` field to the `SchoolTakeaway` type:

```tsx
type SchoolTakeaway = {
  // ... existing fields
  nameShort: string; // for the talent finder display
};
```

And add `nameShort` to each school in the SCHOOLS array:
- scgs: "SCGS"
- nushigh: "NUS High"
- chs: "Catholic High"
- sas: "St. Andrew's"
- plmgs: "PLMGS"
- njc: "NJC"
- sngs: "CHIJ SNGS"
- ahs: "Anglican High"

Then `buildTalentFinderRows` uses `school.nameShort` instead of string replacement.

### Step D3: Add "What's Next?" section

After the Talent Finder section:

```tsx
{/* What's Next */}
<div className="mt-14 rounded-2xl border border-champagne/20 bg-champagne/6 p-6 sm:p-8">
  <h2 className="font-display text-xl font-semibold text-intellectual sm:text-2xl">
    {t.ohTakeawaysWhatsNextTitle}
  </h2>
  <p className="mt-2 text-sm leading-relaxed text-intellectual-muted sm:text-base">
    {t.ohTakeawaysWhatsNextBody}
  </p>
  <p className="mt-3 text-xs font-semibold text-champagne-dark">
    {t.ohTakeawaysDeadlineLabel}
  </p>
  <div className="mt-5 flex flex-wrap gap-3">
    <a
      href="https://www.moe.gov.sg/secondary/dsa"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-xl bg-intellectual px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-intellectual-light"
    >
      {t.ohTakeawaysApplyBtn}
      <ExternalLink className="h-4 w-4" aria-hidden />
    </a>
  </div>
  {/* Related links */}
  <div className="mt-6 border-t border-intellectual/8 pt-5 flex flex-wrap gap-4">
    <Link
      href="/open-house-guide"
      className="text-sm font-medium text-champagne-dark hover:underline"
    >
      → {locale === "zh" ? "开放日参观指南" : "Open House Visit Guide"}
    </Link>
    <Link
      href="/dsa-interview"
      className="text-sm font-medium text-champagne-dark hover:underline"
    >
      → {locale === "zh" ? "选拔面试准备" : "Selection Trial Prep"}
    </Link>
  </div>
</div>
```

### Step D4: Update `app/open-house-takeaways/page.tsx`

Replace entire file content with:

```tsx
import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { OpenHouseTakeawaysBody } from "@/components/OpenHouseTakeawaysBody";

export const metadata: Metadata = {
  title: { absolute: "What Did Each DSA Open House Share? | DSALink" },
  description:
    "Key takeaways from 8 Singapore secondary schools that have already held their 2026 DSA open houses — talent areas, selection signals, and what parents should know.",
  alternates: { canonical: "/open-house-takeaways" },
};

export default function OpenHouseTakeawaysPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-surface">
        <OpenHouseTakeawaysBody />
      </main>
      <SiteFooter />
    </>
  );
}
```

---

## Important Notes

- Run `npx tsc --noEmit` after all changes — fix any TypeScript errors before committing
- Do NOT run `npm run build` locally (pre-existing ESLint issue in ChineseNote.tsx will cause false failure)
- Test language toggle manually: EN → ZH should change hero text, key signals, section labels
- `OpenHouseTakeawaysBody` must export as named export: `export function OpenHouseTakeawaysBody`
- The SCHOOLS array and SchoolTakeaway type should be defined in the body component file, not imported from elsewhere

## Files to Create/Modify

- MODIFY: `lib/i18n.ts`
- MODIFY: `components/SiteHeader.tsx`
- MODIFY: `components/OpenHousesDirectory.tsx`
- MODIFY: `app/open-house-takeaways/page.tsx`
- CREATE: `components/OpenHouseTakeawaysBody.tsx`
