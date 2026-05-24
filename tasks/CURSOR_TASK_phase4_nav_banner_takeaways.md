# Cursor Task: Phase 4 — Nav Reorder + Banner + Ended Schools + Takeaways Content

## Overview

5 changes across 5 files. Do them in order. Run `npx tsc --noEmit` at the end to verify zero TypeScript errors.

---

## 1. `lib/i18n.ts` — Add 3 new keys

Add to the `Copy` type and all 4 locale objects (`en`, `zh`, `ms`, `ta`). Insert after the `ohMissedCardCta` key.

**Copy type (add 3 fields):**
```ts
navOpenHouseDates: string;
navOpenHouseMissed: string;
ohMissedTakeawaysBtn: string;
```

**en:**
```ts
navOpenHouseDates: "Open House Dates",
navOpenHouseMissed: "Missed an Open House?",
ohMissedTakeawaysBtn: "Missed it? Everything's here →",
```

**zh:**
```ts
navOpenHouseDates: "开放日日期",
navOpenHouseMissed: "错过了开放日？",
ohMissedTakeawaysBtn: "错过了？情报全在这里 →",
```

**ms:**
```ts
navOpenHouseDates: "Tarikh Hari Terbuka",
navOpenHouseMissed: "Terlepas Hari Terbuka?",
ohMissedTakeawaysBtn: "Terlepas? Semua ada di sini →",
```

**ta:**
```ts
navOpenHouseDates: "திறந்த நாள் தேதிகள்",
navOpenHouseMissed: "திறந்த நாளை தவறவிட்டீர்களா?",
ohMissedTakeawaysBtn: "தவறவிட்டீர்களா? எல்லாம் இங்கே →",
```

---

## 2. `components/SiteHeader.tsx` — Blog move + openHouseLinks rename

### 2a. Change openHouseLinks labels

```ts
// BEFORE:
const openHouseLinks = [
  { href: "/open-houses", label: t.navOpenHouses },
  { href: "/open-house-guide", label: t.navOpenHouseGuide },
  { href: "/open-house-takeaways", label: t.navOpenHouseTakeaways },
] as const;

// AFTER:
const openHouseLinks = [
  { href: "/open-houses", label: t.navOpenHouseDates },
  { href: "/open-house-guide", label: t.navOpenHouseGuide },
  { href: "/open-house-takeaways", label: t.navOpenHouseMissed },
] as const;
```

`dataLinks` (Explore dropdown) keeps `t.navOpenHouses` — do NOT change it.

### 2b. Desktop nav — move Blog link

Currently the Blog `<Link>` block appears right after `featuredLinks.map()`. Move it to between the DSA Coaches `<Link>` and the Explore `<div>` (just before the Explore dropdown).

New desktop nav order:
1. `mainLinks.map()`
2. `featuredLinks.map()`
3. Open House dropdown `<div>`
4. DSA Interview `<Link>`
5. DSA Coaches `<Link>`
6. **Blog `<Link>`** ← moved here
7. Explore `<div>`
8. LanguageToggle

### 2c. Mobile drawer — move Blog link

Same: move the Blog `<Link>` block in the mobile drawer grid from after featuredLinks to after the DSA Coaches link and before the Open House section.

New mobile drawer order:
1. `mainLinks.map()`
2. `featuredLinks.map()`
3. DSA Interview `<Link>`
4. DSA Coaches `<Link>`
5. **Blog `<Link>`** ← moved here
6. Open House section `<div>`
7. Explore section `<div>`
8. LanguageToggle

---

## 3. `components/TakeawaysEntryCard.tsx` — Add sticky note decoration

Wrap the existing outer `<div>` with a relative container. Add a small yellow tab peeking above the card. Do NOT change any text content or the inner card structure.

```tsx
// BEFORE (simplified):
<div className="rounded-2xl border border-champagne/25 bg-champagne/8 p-4 shadow-sm ring-1 ring-champagne/10">
  ...existing content...
</div>

// AFTER:
<div className="relative pt-2">
  {/* Sticky note tab */}
  <div
    className="absolute left-5 top-0 h-3 w-14 rounded-sm bg-amber-300/75 shadow-sm"
    aria-hidden
  />
  <div className="rounded-2xl border border-champagne/25 bg-champagne/8 p-4 shadow-sm ring-1 ring-champagne/10">
    ...existing content unchanged...
  </div>
</div>
```

---

## 4. `components/OpenHousesDirectory.tsx` — Banner + Sort + Missed button

### 4a. Swap PAST_RANK and TBC_RANK constants

Find near the top of the file:
```ts
// BEFORE:
const TBC_RANK = 1;
const PAST_RANK = 2;

// AFTER:
const TBC_RANK = 2;
const PAST_RANK = 1;
```

This makes ended schools appear after upcoming schools but BEFORE TBC schools in the main list. No other sort logic changes needed.

### 4b. Add TAKEAWAYS_MAP constant (outside component, near top)

```ts
const TAKEAWAYS_MAP: Record<string, string> = {
  "singapore-chinese-girls-school": "scgs",
  "nus-high-school-of-mathematics-and-science": "nushigh",
  "catholic-high-school": "chs",
  "st-andrews-school": "sas",
  "paya-lebar-methodist-girls-school": "plmgs",
  "national-junior-college": "njc",
  "chij-st-nicholas-girls-school": "sngs",
  "anglican-high-school": "ahs",
};
```

### 4c. Replace takeaways banner (lines ~248-260)

```tsx
// BEFORE:
<div className="border-b border-champagne/20 bg-champagne/8 px-4 py-3 sm:px-6">
  <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2">
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

// AFTER:
<div className="border-b border-champagne/30 bg-intellectual px-4 py-3.5 sm:px-6">
  <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2">
    <p className="text-sm font-medium text-white/90">{t.ohBannerText}</p>
    <Link
      href="/open-house-takeaways"
      className="shrink-0 rounded-lg bg-champagne px-3 py-1.5 text-sm font-semibold text-intellectual transition hover:bg-champagne-light"
    >
      {t.ohBannerCta}
    </Link>
  </div>
</div>
```

### 4d. Add "Missed?" button to ended schools in the main list

Inside the `shown.map((ev) => { ... })` render, find the right-side action `<div className="flex shrink-0 flex-col ...">`. Add a "Missed?" link button as the FIRST item in that column, before the existing Open House and DSA buttons. Only render it when the school is past AND has a takeaways entry.

```tsx
// Add this INSIDE the action <div>, BEFORE the openHouseUrl button:
{(() => {
  const takeawaysId = TAKEAWAYS_MAP[ev.id];
  const isPast = Date.parse(ev.endsAt) < Date.now();
  if (!isPast || !takeawaysId) return null;
  return (
    <Link
      href={`/open-house-takeaways#school-${takeawaysId}`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-champagne/50 bg-champagne/15 text-champagne-dark shadow-sm transition hover:bg-champagne/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:h-auto sm:w-auto sm:gap-2 sm:px-3 sm:py-2"
    >
      <span className="hidden text-xs font-semibold leading-tight sm:inline">{t.ohMissedTakeawaysBtn}</span>
      <span className="text-[10px] font-bold sm:hidden">?</span>
    </Link>
  );
})()}
```

`Link` is already imported from `"next/link"`.

---

## 5. `components/OpenHouseTakeawaysBody.tsx` — Content rewrite + type change

### 5a. Type change

```ts
// BEFORE:
type SchoolTakeaway = {
  ...
  aboutEn: string;
  aboutZh: string;
  ...
};

// AFTER:
type SchoolTakeaway = {
  ...
  aboutEn: string[];
  aboutZh: string[];
  ...
};
```

### 5b. SchoolCard rendering — change about from <p> to <ul>

Find the About section render (currently renders `<p>{isZh ? school.aboutZh : school.aboutEn}</p>`):

```tsx
// BEFORE:
<div className="mt-4">
  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-intellectual/40">
    {aboutLabel}
  </p>
  <p className="text-sm leading-relaxed text-intellectual-muted">
    {isZh ? school.aboutZh : school.aboutEn}
  </p>
</div>

// AFTER:
<div className="mt-4">
  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-intellectual/40">
    {aboutLabel}
  </p>
  <ul className="space-y-1">
    {(isZh ? school.aboutZh : school.aboutEn).map((point, i) => (
      <li key={i} className="flex items-start gap-2 text-sm text-intellectual-muted">
        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne-dark" aria-hidden />
        <span>{point}</span>
      </li>
    ))}
  </ul>
</div>
```

### 5c. Replace ALL 8 schools' data

Replace the entire `SCHOOLS` array with updated data below. Key changes:
- `aboutEn`/`aboutZh` are now `string[]` (bullet arrays)
- `goodFitEn`/`goodFitZh` updated with shorter, sharper bullets
- **CRITICAL FIX**: Catholic High IP → Eunoia JC (NOT Victoria JC)
- **CRITICAL FIX**: CHIJ SNGS — remove "Arts" from `talentAreas` (not on official page)
- All other fields (id, nameEn, nameZh, nameShort, date, dateZh, eventType, eventTypeZh, tags, keySignalEn, keySignalZh, talentAreas, sourceUrl) remain unchanged

---

**SCGS:**
```ts
aboutEn: [
  "Founded 1899 — one of Singapore's oldest girls' schools",
  "Location: Dunearn Road / Bukit Timah area",
  "IP track (→ Eunoia JC) or SEC track — choose at point of application",
  "All DSA applicants must submit a video: single take, unedited, not professionally produced",
  "Known for performing arts, competitive sports, and rigorous academics",
],
aboutZh: [
  "1899年创立，新加坡历史最悠久的女校之一",
  "校址：Dunearn Road / 武吉知马区域",
  "IP轨道直通Eunoia JC，或选择SEC课程——报名时自行决定",
  "所有DSA申请者须提交视频：单次拍摄，不剪辑，非专业制作",
  "以表演艺术、竞技体育和严谨学风著称",
],
goodFitEn: [
  "Girls with a clearly defined talent — a video is mandatory for every DSA applicant, no exceptions",
  "Students who want to choose between IP and SEC track at time of application (rare flexibility among IP schools)",
  "Students seeking a wide CCA range in a competitive, high-achieving all-girls environment",
],
goodFitZh: [
  "有明确才能方向的女生——所有DSA申请者必须提交视频，无例外",
  "希望在报名时自行选择IP或SEC课程的学生（IP学校中属于罕见的灵活性）",
  "寻找CCA多元、竞争激烈但氛围积极的全女生环境的学生",
],
```

---

**NUS High:**
```ts
aboutEn: [
  "Founded 2005 — Singapore's only specialised school for Maths and Science",
  "Awards the NUS High School Diploma — not O- or A-Levels",
  "DSA-only intake — PSLE results do not give you a place here",
  "~200 students per cohort; modular and research-focused curriculum",
  "Diploma recognised by NUS, NTU, SMU, SUTD, SIT and international universities",
],
aboutZh: [
  "2005年创立，全新加坡唯一专注数理的独立学校",
  "颁发NUS高中文凭——不参加O水准也不参加A水准考试",
  "DSA是唯一入学途径——PSLE成绩不用于录取",
  "每届约200名学生；模块化、科研导向课程",
  "文凭获NUS、NTU、SMU、SUTD、SIT及国际院校认可",
],
goodFitEn: [
  "Students who genuinely love Maths or Science — the assessment tests how they think, not whether they get the right answer",
  "Self-directed learners who don't need O-Level exam milestones to stay motivated",
  "Families making a full 6-year commitment — there is no exit to mainstream secondary mid-programme",
],
goodFitZh: [
  "真正热爱数学或科学的学生——选拔考查的是思维方式，而非是否答对",
  "自驱力强、无需O水准考试节点也能保持专注的学生",
  "确定走这条路的家庭——就读后无法中途转回普通中学路线",
],
```

---

**Catholic High — ⚠️ Fix: IP → Eunoia JC (not Victoria JC):**
```ts
aboutEn: [
  "Founded 1935 — all-boys SAP school in Bishan",
  "IP track leads to Eunoia Junior College (4+2 Joint Integrated Programme with SCGS and CHIJ SNGS)",
  "All IP students must take Higher Chinese; SP students must offer at least Chinese Language",
  "IP applicants need 'consistent and excellent' P5–P6 results; SP applicants need 'very good' results",
  "Home of Singapore's prestigious Music Elective Programme (MEP), including O-Level Music and SYF",
],
aboutZh: [
  "1935年创立，位于碧山的全男生SAP学校",
  "IP轨道直通Eunoia初级学院（与SCGS和SNGS组成4+2年联合IP课程）",
  "IP学生须修高级华文；SP学生须修华文或高级华文",
  "IP申请须P5–P6成绩'稳定且优秀'；SP申请须'稳定且非常好'",
  "设有新加坡声望极高的音乐精英课程（MEP），含O水准音乐考试和SYF参赛",
],
goodFitEn: [
  "Musically trained boys: MEP via DSA is among Singapore's rarest tracks — includes O-Level Music and SYF (Arts Festival)",
  "Boys who can meet the SAP + IP double bar: Higher Chinese is required, plus strong P5–P6 academics",
  "Students who thrive in a high-achieving all-boys Chinese cultural environment",
],
goodFitZh: [
  "有音乐训练基础的男生：DSA进MEP是全岛最难得的机会之一——含O水准音乐和SYF艺术节",
  "能满足SAP+IP双重门槛的男生：高级华文必须，P5–P6成绩要求高",
  "在高要求全男生华文文化环境中能茁壮成长的学生",
],
```
Also fix `keySignalEn` and `keySignalZh` to remove "Victoria Junior College" reference if present — replace with "Eunoia Junior College".

---

**St. Andrew's:**
```ts
aboutEn: [
  "Founded 1862 — one of Singapore's oldest boys' schools",
  "Anglican school in Potong Pasir; O-Level track only",
  "2026 DSA talent areas: Concert Band, Football ★, Hockey, Leadership, Rugby, Squash ★, Visual Arts, Water Polo",
  "Football and Squash are new in 2026",
  "DSA admits up to 20% of each Sec 1 cohort via trials and interview",
],
aboutZh: [
  "1862年创立，新加坡历史最悠久的男校之一",
  "位于波东巴西的圣公会学校；仅提供O水准轨道",
  "2026年DSA才能方向：管乐队、足球★、曲棍球、领导力、橄榄球、壁球★、视觉艺术、水球",
  "足球和壁球为2026年全新加入",
  "每届约20%中一生通过DSA录取，经才能试训和面试评估",
],
goodFitEn: [
  "Boys passionate about team and contact sports — Rugby, Football, Hockey, Squash, Water Polo are all serious CCA tracks",
  "Students who prefer O-Level over IP — no academic pressure beyond typical secondary",
  "Boys who resonate with Anglican values or a culture-first school community",
],
goodFitZh: [
  "热爱团队和对抗性运动的男生——橄榄球、足球、曲棍球、壁球、水球均为认真竞技的CCA",
  "倾向O水准而非IP的学生——无IP课程附带的高强度学业压力",
  "认同圣公会价值观或文化优先型校园社群的男生",
],
```

---

**PLMGS:**
```ts
aboutEn: [
  "Founded 1949 — government-aided girls' school in Paya Lebar",
  "Methodist school guided by H.E.A.R.T. values (Honouring God, Excellence, Adaptability, Respect, Thankfulness)",
  "O-Level track; less academically intense than IP schools",
  "Offers Harp as a DSA talent area — one of the rarest in Singapore secondary schools",
  "Official policy: no prior experience required for any talent area, including Harp",
],
aboutZh: [
  "1949年创立，位于巴耶利峇的政府辅助女校",
  "卫理公会学校；以H.E.A.R.T.价值观立校（荣神、卓越、适应、尊重、感恩）",
  "O水准轨道；学术强度低于IP学校",
  "开设竖琴（Harp）DSA才能方向——全新加坡中学中极为罕见",
  "官方政策：所有才能方向接受零基础申请，包括竖琴，学校评估潜力",
],
goodFitEn: [
  "Girls interested in Harp — zero experience explicitly welcome; school assesses potential, not track record",
  "Students who want a nurturing O-Level environment without the competitive pace of IP schools",
  "Families in the East or North-East looking for a values-centred girls' school",
],
goodFitZh: [
  "对竖琴感兴趣的女生——官方明确欢迎零基础申请，学校评估潜力而非过往成绩",
  "希望在关爱型O水准环境成长、不需要IP节奏的学生",
  "居住在东部/东北部、寻找价值观导向女校的家庭",
],
```

---

**NJC:**
```ts
aboutEn: [
  "Founded 1969 — located in Clementi, West Singapore",
  "6-year through-train from Sec 1 to JC2 with no standalone secondary stage",
  "Co-educational; you complete both secondary and JC in the same institution",
  "Science for Sustainable Development (academic DSA): requires 4-year STEM engagement during Junior High",
  "Art Elective Programme DSA: requires Art as an academic subject for all 4 Junior High years",
],
aboutZh: [
  "1969年创立，位于金文泰（西部）",
  "从中一直通JC2的6年贯通课程，无独立中学阶段",
  "男女混合；中学和初院阶段在同一所学校完成",
  "可持续发展科学（学术DSA）：需在初中阶段持续4年参与STEM活动",
  "视觉艺术精英课程DSA：须在整个初中阶段将艺术作为正式学科",
],
goodFitEn: [
  "Self-driven students who don't need O-Level milestones as motivation checkpoints",
  "Families making a full 6-year commitment in one decision — no switching schools after PSLE",
  "Students with deep STEM or arts passion: both Science and Art DSA tracks require a 4-year programme commitment",
],
goodFitZh: [
  "自驱力强、无需O水准考试节点驱动也能坚持的学生",
  "在PSLE后一次性确定整个6年学习环境、不打算中途换校的家庭",
  "对STEM或艺术有深度热情的学生：两个学术DSA方向均需4年持续投入",
],
```

---

**CHIJ SNGS — ⚠️ Fix: remove "Arts" from talentAreas:**
```ts
aboutEn: [
  "Founded 1948 — Canossian SAP school in Bishan",
  "Part of the Joint Integrated Programme (JIP): IP students join Eunoia JC after Year 4",
  "Same JIP cluster as Catholic High and SCGS",
  "7 distinct sports disciplines for DSA — most granular sports list among SAP girls' schools",
  "Bilingualism talent area: assessed on critical thinking and oratorical competency in both English and Chinese",
],
aboutZh: [
  "1948年创立，位于碧山的仁爱女修会SAP女校",
  "联合IP网络（JIP）成员：IP学生完成四年后升读Eunoia初级学院",
  "与公教中学（CHS）和新加坡女子学校（SCGS）同属同一JIP联合课程",
  "提供7个具体体育DSA项目——各SAP女校中最细化的体育名单",
  "双语才能方向：同时考查英文和华文的批判思维与演讲表达能力",
],
// talentAreas: REMOVE "Arts" — keep: 7 sports + "Leadership" + "Bilingualism"
talentAreas: [
  "Artistic Gymnastics",
  "Badminton",
  "Hockey",
  "Netball",
  "Rhythmic Gymnastics",
  "Table Tennis",
  "Track & Field",
  "Leadership",
  "Bilingualism",
],
goodFitEn: [
  "Girls competing in a specific sport (not 'generally sporty') — the school assesses all 7 disciplines separately",
  "Bilingual students who can argue and persuade fluently in both English and Chinese",
  "Girls wanting an all-girls SAP environment with IP leading to Eunoia JC via the Joint IP",
],
goodFitZh: [
  "有具体运动专项的女生——学校对7个体育项目分别评估，不是泛泛'喜欢运动'就够",
  "能用英文和华文都流利表达、有批判性思维的双语学生",
  "希望在全女生SAP环境就读、通过联合IP升读Eunoia JC的女生",
],
```

---

**Anglican High:**
```ts
aboutEn: [
  "Founded 1952 — SAP school in Hougang, North-East Singapore",
  "Chinese Language compulsory for ALL students — no exceptions regardless of DSA talent area",
  "Posting Group 3 only — students must qualify for this posting group to be eligible",
  "Offers both Express (SP) and IP tracks",
  "Rare for a SAP school: Robotics listed as a DSA talent area",
],
aboutZh: [
  "1952年创立，位于后港（东北部）的SAP学校",
  "华文/高级华文为所有学生必修——无论申请哪个才能方向，均无例外",
  "仅接受第3报名组别（Posting Group 3）学生",
  "提供快捷课程（SP）和综合课程（IP）双轨道",
  "SAP学校中罕见：Robotics（机器人）列为DSA才能方向",
],
goodFitEn: [
  "Genuinely bilingual students — Higher Chinese or Chinese is mandatory for ALL enrolled students, not just Chinese DSA applicants",
  "Students who qualify for Posting Group 3 — this is a hard requirement, not a preference",
  "Tech-oriented students who want a Chinese cultural school: Robotics in a SAP environment is uniquely available here",
],
goodFitZh: [
  "真正掌握双语的学生——华文/高级华文是所有学生的必修科，不只是申请中文DSA的学生",
  "符合第3报名组别要求的学生——这是硬性条件，不是偏好",
  "对科技感兴趣又希望在华文文化环境就读的学生：SAP学校里有Robotics DSA，这是独一无二的",
],
```

---

## Verification

After all changes:

```bash
npx tsc --noEmit
```

Zero errors expected. Key things to verify:
- `aboutEn` and `aboutZh` are `string[]` everywhere — both type definition and all 8 school objects
- SchoolCard renders them as `<ul>/<li>` not `<p>`
- `TAKEAWAYS_MAP` keys match the `ev.id` values in `school-open-houses.ts` exactly
- Catholic High: no mention of "Victoria Junior College" anywhere in the component
- CHIJ SNGS: `talentAreas` has 9 items (7 sports + Leadership + Bilingualism), "Arts" removed
- `ohMissedTakeawaysBtn` referenced in OpenHousesDirectory is in Copy type and all 4 locales
