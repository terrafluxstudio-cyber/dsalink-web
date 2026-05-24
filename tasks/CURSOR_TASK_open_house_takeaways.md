# Cursor Task: Open House Takeaways — Two-Part Implementation

## Overview

Two connected changes:
1. **`OpenHouseList.tsx`** — add a "Recently Completed" section after the upcoming events list, with a CTA linking to the new takeaways page
2. **New page `app/open-house-takeaways/page.tsx`** — standalone bilingual (EN/ZH) page summarising what each completed open house shared about DSA

Both changes use existing design tokens. No new dependencies. No nav changes.

---

## Part A: `OpenHouseList.tsx` + `lib/data.ts`

### Step 1 — Add helper function to `lib/data.ts`

After the existing `upcomingOpenHouseEventsByDate()` function, add:

```ts
/**
 * Open houses with a confirmed past date (excludes TBC placeholders).
 * Returns events where date < today AND timeEn does not contain 'TBC'.
 * Sorted most-recent-first.
 */
export function recentlyCompletedOpenHouses(
  reference: Date = new Date(),
): SchoolOpenHouse[] {
  const todayKey = toSingaporeDateKey(reference);
  return SCHOOL_OPEN_HOUSES.filter(
    (ev) => ev.date < todayKey && !ev.timeEn.includes('TBC'),
  ).sort((a, b) => b.date.localeCompare(a.date));
}
```

### Step 2 — Modify `components/OpenHouseList.tsx`

**Imports to add:**
- Add `recentlyCompletedOpenHouses` to the import from `@/lib/data`
- Add `Link` from `next/link`
- Add `ChevronRight` from `lucide-react`

**Inside the component**, after the `groups` useMemo, add:

```tsx
const completedEvents = useMemo(() => recentlyCompletedOpenHouses(), []);
```

**After the closing `</div>` of the `groups.map(...)` block** (before `</section>`), add this "Recently Completed" section — only rendered when `completedEvents.length > 0`:

```tsx
{completedEvents.length > 0 && (
  <div className="mt-12 rounded-2xl border border-champagne/25 bg-champagne/8 p-5 sm:p-6">
    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-champagne-dark mb-1">
      {locale === 'zh' ? '已完结' : 'Recently Completed'}
    </p>
    <p className="text-sm font-medium text-intellectual-muted mb-4">
      {locale === 'zh'
        ? '以下学校的开放日已结束'
        : 'These open houses have already taken place'}
    </p>
    <ul className="space-y-2 mb-5">
      {completedEvents.map((ev) => (
        <li key={ev.id + ev.date} className="flex items-center justify-between gap-3 text-sm">
          <span className="font-medium text-intellectual">
            <SchoolDisplayName locale={locale} nameEn={ev.nameEn} nameZh={ev.nameZh} />
          </span>
          <span className="shrink-0 text-xs text-intellectual-muted">
            {new Intl.DateTimeFormat(locale === 'zh' ? 'zh-Hans-SG' : 'en-SG', {
              month: 'short',
              day: 'numeric',
              timeZone: 'Asia/Singapore',
            }).format(new Date(`${ev.date}T12:00:00+08:00`))}
          </span>
        </li>
      ))}
    </ul>
    <Link
      href="/open-house-takeaways"
      className="inline-flex items-center gap-2 rounded-xl bg-intellectual px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-intellectual-light"
    >
      {locale === 'zh' ? '错过了？查看各校DSA要点' : 'Missed any? See what they shared about DSA'}
      <ChevronRight className="h-4 w-4" aria-hidden />
    </Link>
  </div>
)}
```

**Note on locale:** `OpenHouseList` uses `const { locale, t } = useLanguage()`. The recently completed section should respect this locale for school names and labels. Only EN and ZH are handled here (fall back to EN for MS/TA).

---

## Part B: New page `app/open-house-takeaways/page.tsx`

Create a new file at `app/open-house-takeaways/page.tsx`.

This is a **Server Component** (no `"use client"`). Content is bilingual, hardcoded inline — do NOT use `lib/i18n.ts`.

The page uses `SiteHeader` and `SiteFooter`. No `OpenHouseTracker`.

### Metadata

```ts
export const metadata: Metadata = {
  title: { absolute: 'What Did Each DSA Open House Share? | DSALink' },
  description:
    'Key takeaways from 8 Singapore secondary schools that have already held their 2026 DSA open houses — talent areas, selection signals, and what parents should know.',
  alternates: { canonical: '/open-house-takeaways' },
};
```

### Page structure

```
SiteHeader
<main className="bg-surface min-h-screen">
  <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">

    {/* Hero */}
    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-champagne-dark mb-2">
      EN: "DSA Open House Recap · May 2026"
      ZH: "DSA 开放日回顾 · 2026年5月"
    </p>
    <h1 className="font-display text-2xl sm:text-3xl font-semibold text-intellectual mb-3">
      EN: "What Did Each DSA Open House Share?"
      ZH: "各校DSA开放日透露了什么？"
    </h1>
    <p className="text-intellectual-muted text-sm sm:text-base max-w-2xl mb-10">
      EN: "8 schools held their DSA open houses before the application window opened. Here's what each one shared — talent areas, selection signals, and what parents should know before applying."
      ZH: "这8所学校在DSA申请窗口开放前已举办开放日。以下是各校传递的关键信息——才能项目、选拔信号，以及申请前家长需要了解的要点。"
    </p>

    {/* School cards — 8 total, ordered: SCGS, NUS High, Catholic High, St Andrew's, PLMGS, NJC, CHIJ SNGS, Anglican High */}
    <div className="space-y-6">
      {SCHOOL_DATA.map(school => <SchoolCard key={school.id} school={school} />)}
    </div>

    {/* Footer CTA */}
    <div className="mt-12 rounded-2xl border border-intellectual/10 bg-card-shine p-6 shadow-sm ring-1 ring-champagne/15 text-center">
      <p className="text-sm font-semibold text-intellectual mb-1">
        EN: "DSA application window closes 2 June 2026, 4:30pm SGT"
        ZH: "DSA申请窗口：2026年6月2日（二）下午4:30截止"
      </p>
      <a href="https://www.moe.gov.sg/secondary/dsa" target="_blank" rel="noopener noreferrer"
         className="inline-flex items-center gap-2 mt-3 rounded-xl bg-intellectual px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-intellectual-light">
        EN: "Apply via MOE DSA Portal"
        ZH: "前往MOE DSA申请平台"
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>

  </div>
</main>
SiteFooter
```

### School card design

Each card (`shadow-card` style):
```
rounded-2xl border border-intellectual/10 bg-card-shine p-5 sm:p-6 shadow-sm ring-1 ring-champagne/15
```

Card header row:
- School name EN (font-display, font-semibold, text-intellectual)
- School name ZH (text-sm, text-intellectual-muted, ml-2)
- Pill tags: school type, gender, date (small pills using existing badge style)

Key Signal block (gold left border):
```
border-l-2 border-champagne pl-4 mt-3
```
- EN text (text-sm, text-intellectual)
- ZH text (text-xs, text-intellectual-muted, mt-1)

Talent Areas section (mt-4):
- Label: "DSA Talent Areas" / "DSA才能方向"
- Flex-wrap tags: each talent area as a small pill
  `bg-intellectual/5 text-intellectual text-xs px-2 py-0.5 rounded-full`

Official link button (mt-4):
- `bg-intellectual text-white` button → opens sourceUrl in new tab
- EN: "Official DSA Page" / ZH: "官方DSA页面"

### Hardcoded school data (inline in the file)

Use the following exact data. Order: most recent open house first.

```ts
const SCHOOLS = [
  {
    id: 'scgs',
    nameEn: 'Singapore Chinese Girls\' School',
    nameZh: '华侨女子中学',
    date: '16 May 2026',
    dateZh: '2026年5月16日',
    eventType: 'Online Open House',
    eventTypeZh: '线上开放日',
    tags: ['IP', 'Girls'],
    keySignalEn: 'All applicants must submit a video recording — preparation starts before you even apply. Offers both IP (→ Eunoia JC) and SEC tracks. English Language is an uncommon DSA talent area in Singapore secondary schools.',
    keySignalZh: '所有才能方向的申请者均须提交视频录像，备考需比其他学校更早开始。IP轨道直通Eunoia JC，SEC轨道独立结课——报名前需选定路径。将"英文语言"作为DSA才能方向，在新加坡中学中较为罕见。',
    talentAreas: ['Artistic Gymnastics', 'Badminton', 'Basketball', 'Choir', 'Concert Band', 'English Drama', 'English Language', 'Handbell Ensemble', 'Humanities', 'Leadership', 'Modern Dance', 'Netball', 'Squash', 'String Ensemble', 'Tennis'],
    sourceUrl: 'https://www.scgs.moe.edu.sg/prospective-students/secondary-admission/direct-school-admission/',
  },
  {
    id: 'nushigh',
    nameEn: 'NUS High School of Maths and Science',
    nameZh: '新加坡国立大学附属数理中学',
    date: '16 May 2026',
    dateZh: '2026年5月16日',
    eventType: 'On-site Open House',
    eventTypeZh: '实地开放日',
    tags: ['IP', 'DSA-only', 'Co-ed'],
    keySignalEn: 'NUS High has NO PSLE posting — DSA is the only way in. Only 2 talent areas (Maths or Science). Every applicant must sit the mandatory Selection Test on 4 July 2026. They assess problem-solving ability and passion, not exam results.',
    keySignalZh: 'NUS High没有PSLE直接派位，DSA是唯一入学途径。只有数学和科学两个才能方向，所有申请者必须参加7月4日（周六）的选拔测试，不参加则无缘录取。选拔看重解题思维与热情，而非成绩单。',
    talentAreas: ['Mathematics', 'Science'],
    sourceUrl: 'https://www.nushigh.edu.sg/admissions/year-1-and-3-admissions/year-1-admissions/',
  },
  {
    id: 'chs',
    nameEn: 'Catholic High School',
    nameZh: '公教中学',
    date: '16 May 2026',
    dateZh: '2026年5月16日',
    eventType: 'On-site Open House',
    eventTypeZh: '实地开放日',
    tags: ['SAP', 'IP', 'Boys'],
    keySignalEn: 'Music Elective Programme (MEP) via DSA is rare and prestigious — includes O-level Music and SYF participation. SAP + IP means both Higher Chinese and strong academics are expected.',
    keySignalZh: '通过DSA进入音乐精英课程（MEP）极为难得，包括O水准音乐考试和新加坡艺术节（SYF）参与机会。SAP+IP双重要求：需要华文或高级华文，且学术能力须适应综合课程。',
    talentAreas: ['Leadership', 'Music Elective Programme', 'Chinese Drama', 'Chinese Orchestra', 'Choir', 'Concert Band', 'English Drama', 'Modern Dance', 'Basketball', 'Floorball', 'Softball', 'Table Tennis', 'Track & Field', 'Volleyball', 'Wushu', 'Bilingualism (IP only)', 'Humanities (IP only)', 'Mathematics (IP only)', 'Science (IP only)'],
    sourceUrl: 'https://www.catholichigh.moe.edu.sg/prospective-students/sec-admission/direct-school-admission/',
  },
  {
    id: 'sas',
    nameEn: "St. Andrew's School (Secondary)",
    nameZh: '圣安德烈中学',
    date: '15 May 2026',
    dateZh: '2026年5月15日',
    eventType: 'Online Open House',
    eventTypeZh: '线上开放日',
    tags: ['Govt-aided', 'Boys'],
    keySignalEn: '2026 adds Football and Squash — brand new this year. Five contact/team sports make this a top choice for sporty boys. No prior experience required.',
    keySignalZh: '2026年新增足球（Football）和壁球（Squash）两个项目，是今年真正的新变化。目前提供5个对抗性/团队运动，是体育型男生的理想选择。官方表示欢迎没有相关经验的申请者。',
    talentAreas: ['Concert Band', 'Football ★ New 2026', 'Hockey', 'Rugby', 'Squash ★ New 2026', 'Water Polo', 'Student Leadership', 'Visual Arts'],
    sourceUrl: 'https://www.standrewssec.moe.edu.sg/dsa2026/',
  },
  {
    id: 'plmgs',
    nameEn: "Paya Lebar Methodist Girls' School (Secondary)",
    nameZh: '巴耶利峇卫理女中',
    date: '9 May 2026',
    dateZh: '2026年5月9日',
    eventType: 'Online Open House',
    eventTypeZh: '线上开放日',
    tags: ['Govt-aided', 'Girls'],
    keySignalEn: "Harp is one of Singapore's rarest DSA talent areas. The school explicitly welcomes applicants with no prior experience — potential matters more than track record.",
    keySignalZh: '竖琴（Harp）是全新加坡最罕见的DSA才能项目之一，竞争少机会独特。学校官方明确欢迎没有相关经验的申请者——潜力比过往成绩更重要。',
    talentAreas: ['Student Leadership', 'Concert Band', 'Guzheng', 'Harp', 'Badminton', 'Netball', 'Rhythmic Gymnastics', 'Swimming', 'Table Tennis', 'Volleyball'],
    sourceUrl: 'https://www.plmgss.moe.edu.sg/about-us/school-admission/direct-school-admission-dsa-sec/',
  },
  {
    id: 'njc',
    nameEn: 'National Junior College (IP)',
    nameZh: '国家初级学院（综合课程）',
    date: '9 May 2026',
    dateZh: '2026年5月9日',
    eventType: 'IP Information Session',
    eventTypeZh: 'IP招募信息会',
    tags: ['IP', 'Co-ed'],
    keySignalEn: "NJC's IP runs 6 years from Sec 1 to JC2 — applying here is choosing an entire educational pathway, not just a secondary school. 'Science for Sustainable Development' is a rare academic DSA track.",
    keySignalZh: 'NJC的直通IP从中一读到JC2（6年一条龙），申请NJC意味着选择整个学习路径，而非单纯选中学。"可持续发展科学"作为学术类DSA项目，在新加坡各校中极为罕见。',
    talentAreas: ['Basketball', 'Canoeing', 'Cross Country / Track & Field', 'Shooting', 'Softball', 'Squash', 'Choir', 'Chinese Dance', 'Chinese Orchestra', 'Concert Band', 'Guitar Ensemble', 'Indian Dance', 'Malay Dance', 'Modern Dance', 'String Ensemble', 'Science for Sustainable Development', 'Art Elective Programme'],
    sourceUrl: 'https://www.nationaljc.moe.edu.sg/admissions/ip-dsa/',
  },
  {
    id: 'sngs',
    nameEn: "CHIJ St. Nicholas Girls' School",
    nameZh: '圣尼各拉女校',
    date: '9 May 2026',
    dateZh: '2026年5月9日',
    eventType: 'On-site Open House',
    eventTypeZh: '实地开放日',
    tags: ['SAP', 'IP', 'Girls'],
    keySignalEn: 'IP track leads to Eunoia JC (6-year programme). Sports talent area offers 7 specific disciplines — the most granular sports list among the schools. Bilingualism talent is SAP-specific and rare.',
    keySignalZh: 'IP轨道直通Eunoia JC（6年直通课程）。体育才能类细分7个具体项目，是各校中最细化的体育DSA名单。双语才能（Bilingualism）是SAP特有项目，全岛仅少数学校提供。',
    talentAreas: ['Artistic Gymnastics', 'Badminton', 'Hockey', 'Netball', 'Rhythmic Gymnastics', 'Table Tennis', 'Track & Field', 'Leadership', 'Bilingualism', 'Arts'],
    sourceUrl: 'https://www.chijstnicholasgirls.moe.edu.sg/want-to-join-sngs-via-dsa-click-here-to-find-out-more/',
  },
  {
    id: 'ahs',
    nameEn: 'Anglican High School',
    nameZh: '圣公会中学',
    date: '18 Apr 2026',
    dateZh: '2026年4月18日',
    eventType: 'On-site Open House',
    eventTypeZh: '实地开放日',
    tags: ['SAP', 'IP', 'Co-ed'],
    keySignalEn: "SAP school — Higher Chinese is compulsory for all students. Robotics is an exceptionally rare DSA talent area for a SAP school. Boys' Brigade and Girls' Brigade as DSA talent areas are uncommon across Singapore.",
    keySignalZh: '特别助理计划（SAP）学校，所有学生必须修读华文或高级华文，无法豁免。机器人（Robotics）作为SAP学校的DSA项目极为罕见。公益少年团（BB/GB）作为DSA才能方向在本地中学中也不多见。',
    talentAreas: ['Basketball', 'Badminton', 'Table Tennis', 'Wushu', 'Chinese Language', "Boys' Brigade", "Girls' Brigade", 'Modern Dance', 'Chinese Drama', 'English Drama', 'Chinese Orchestra', 'Choir', 'Concert Band', 'Robotics'],
    sourceUrl: 'https://www.anglicanhigh.moe.edu.sg/about-us/dsa/',
  },
];
```

### Implementation notes for Cursor

- This is a pure Server Component — no `"use client"`.
- Import `SiteHeader`, `SiteFooter` from `@/components/`.
- Import `ExternalLink`, `ChevronRight` from `lucide-react`.
- Import `Metadata` from `next`.
- Do NOT import anything from `lib/i18n.ts` or `lib/data.ts` — all content is inline.
- Talent area pills: small, compact, use `bg-intellectual/5 border border-intellectual/10 text-intellectual text-xs px-2 py-0.5 rounded-full`.
- Items tagged `★ New 2026` should render with a small gold star/badge next to the pill.
- Card order: exactly as listed above (SCGS → AHS).

---

## Files to create / modify

| File | Action |
|------|--------|
| `lib/data.ts` | Add `recentlyCompletedOpenHouses()` function |
| `components/OpenHouseList.tsx` | Add "Recently Completed" section + CTA link |
| `app/open-house-takeaways/page.tsx` | Create new page |

## Do NOT change

- `lib/school-open-houses.ts`
- `components/OpenHousesDirectory.tsx`
- `app/open-houses/page.tsx`
- Any nav files

## After implementation

Run `npm run build` to verify no TypeScript errors, then let me know.
