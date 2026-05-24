# CURSOR TASK: Takeaways Content Enrichment + Homepage Card + Blog Nav

## Overview (5 changes)

1. `lib/i18n.ts` — Update 2 existing strings + add 6 new string keys (4 locales)
2. `components/OpenHouseTakeawaysBody.tsx` — Add `aboutEn/Zh` + `goodFitEn/Zh` per school, update SchoolCard
3. `components/TakeawaysEntryCard.tsx` — Create new homepage sidebar card (client component)
4. `app/page.tsx` — Insert TakeawaysEntryCard between OpenHousePreview and ScoresEntryCard
5. `components/SiteHeader.tsx` + `app/blog/page.tsx` — Blog nav item (gold, animate-pulse) + coming soon page

Run `npx tsc --noEmit` after all changes. Fix any TS errors before finishing.

---

## CHANGE 1 — `lib/i18n.ts`

### 1a. Update existing values (find and replace each one, all 4 locale objects)

Find `ohTakeawaysKicker` in each locale and replace with:
```
en:  "Open House Takeaways · 2026"
zh:  "2026 DSA开放日情报整理"
ms:  "Rumusan Hari Terbuka · 2026"
ta:  "திறந்த நாள் சுருக்கம் · 2026"
```

Find `ohTakeawaysTitle` in each locale and replace with:
```
en:  "Missed the Open House? Here's What Each School Shared"
zh:  "错过了开放日？8所学校的DSA情报全在这里"
ms:  "Terlepas Hari Terbuka? Ini Yang Dikongsi Setiap Sekolah"
ta:  "திறந்த நாளை தவறவிட்டீர்களா? ஒவ்வொரு பள்ளியும் பகிர்ந்தது இதோ"
```

### 1b. Add new keys to `Copy` type (add after `ohTakeawaysApplyBtn: string;`)

```ts
  navBlog: string;
  ohMissedCardTitle: string;
  ohMissedCardBody: string;
  ohMissedCardCta: string;
  ohTakeawaysAbout: string;
  ohTakeawaysGoodFit: string;
```

### 1c. Add values to each locale object (add after `ohTakeawaysApplyBtn: "..."` line in each locale)

**en:**
```ts
    navBlog: "Blog",
    ohMissedCardTitle: "Missed an Open House?",
    ohMissedCardBody: "8 schools have shared their DSA talent areas and selection signals.",
    ohMissedCardCta: "Read the takeaways",
    ohTakeawaysAbout: "About the School",
    ohTakeawaysGoodFit: "Good Fit For",
```

**zh:**
```ts
    navBlog: "博客",
    ohMissedCardTitle: "错过了开放日？",
    ohMissedCardBody: "8所学校已公布DSA才能方向与选拔信号，全部整理好了。",
    ohMissedCardCta: "查看情报整理",
    ohTakeawaysAbout: "学校简介",
    ohTakeawaysGoodFit: "适合这样的孩子",
```

**ms:**
```ts
    navBlog: "Blog",
    ohMissedCardTitle: "Terlepas Hari Terbuka?",
    ohMissedCardBody: "8 sekolah telah berkongsi bidang bakat DSA dan isyarat pemilihan mereka.",
    ohMissedCardCta: "Baca ringkasan",
    ohTakeawaysAbout: "Tentang Sekolah",
    ohTakeawaysGoodFit: "Sesuai Untuk",
```

**ta:**
```ts
    navBlog: "வலைப்பதிவு",
    ohMissedCardTitle: "திறந்த நாளை தவறவிட்டீர்களா?",
    ohMissedCardBody: "8 பள்ளிகள் தங்கள் DSA திறன் பகுதிகள் மற்றும் தேர்வு சமிக்ஞைகளை பகிர்ந்துள்ளன.",
    ohMissedCardCta: "சுருக்கத்தைப் படிக்கவும்",
    ohTakeawaysAbout: "பள்ளியைப் பற்றி",
    ohTakeawaysGoodFit: "பொருத்தமான மாணவர்",
```

---

## CHANGE 2 — `components/OpenHouseTakeawaysBody.tsx`

### 2a. Extend SchoolTakeaway type

Add four new fields to the type:
```ts
type SchoolTakeaway = {
  // ...all existing fields unchanged
  aboutEn: string;
  aboutZh: string;
  goodFitEn: string[];
  goodFitZh: string[];
};
```

### 2b. Add new data to each school in the SCHOOLS array

Add `aboutEn`, `aboutZh`, `goodFitEn`, `goodFitZh` to each school object:

**id: "scgs"**
```ts
aboutEn: "Founded in 1899, SCGS is one of Singapore's oldest girls' schools, located in the Dunearn Road/Bukit Timah area. It offers both an IP track (leading to Eunoia JC) and an O-Level track, and is known for its rigorous academic culture, strong performing arts programme, and diverse competitive sports.",
aboutZh: "创立于1899年，是新加坡历史最悠久的女校之一，位于Dunearn Road/武吉知马一带。提供IP（直通Eunoia JC）及O水准双轨道，以严谨学风、表演艺术和多元竞技体育著称。",
goodFitEn: [
  "Girls who are clear about their talent area and comfortable presenting themselves on camera — video submission is mandatory for all applicants",
  "Students who want the flexibility to choose between IP and O-Level tracks at the point of application",
  "Students looking for a wide range of CCAs and a competitive but supportive all-girls environment",
],
goodFitZh: [
  "明确才能方向、能自信展示自我的女生——所有申请须提交视频，无例外",
  "希望在报名时自行选择IP或O水准路径的学生",
  "寻找CCA选择丰富、竞争与包容并存的全女生环境的学生",
],
```

**id: "nushigh"**
```ts
aboutEn: "Founded in 2005, NUS High is Singapore's only specialised independent school for Mathematics and Science. It awards its own NUS High School Diploma — not O- or A-Levels. With around 200 students per cohort, the school is research-oriented: students take university modules, join research projects, and compete internationally.",
aboutZh: "2005年创立，全新加坡唯一专注数理的特立独行学校，颁发NUS高中文凭而非普通O/A水准证书。每届约200名学生，以科研导向著称——学生参与大学模块、研究项目和国际竞赛。",
goodFitEn: [
  "Children who solve maths problems or run science experiments for fun — genuine curiosity matters more than grades",
  "Students who can stay self-motivated without regular exam milestones (NUS High has no O-levels)",
  "Families fully committed to a Maths/Science pathway — there is no switching out mid-programme",
],
goodFitZh: [
  "把解题或做实验当兴趣而非功课的孩子——真正的好奇心比成绩更重要",
  "能在没有固定考试节点驱动下保持自驱力的学生（NUS High没有O水准考试）",
  "确定走数理路线且不打算中途换校的家庭——入学后路径是固定的",
],
```

**id: "chs"**
```ts
aboutEn: "Founded in 1935, Catholic High is an all-boys SAP school in Bishan with an IP track leading to Victoria Junior College (6-year programme). One of Singapore's top SAP schools, it is renowned for its Music Elective Programme (MEP), strong Chinese cultural identity, and high-achieving academic environment.",
aboutZh: "创立于1935年，位于碧山的男校，SAP特别助理计划学校，IP直通维多利亚初级学院（6年课程）。全岛顶尖SAP男校之一，以音乐精英课程（MEP）、浓厚中华文化传统和竞争性学术环境著称。",
goodFitEn: [
  "Musically trained boys with strong Chinese language ability — MEP via DSA is one of the rarest opportunities in Singapore secondary education",
  "Boys who thrive in an all-boys, high-achieving SAP environment with strong Chinese cultural programming",
  "Students who can manage IP-level academics alongside a demanding CCA commitment",
],
goodFitZh: [
  "有正式音乐训练背景、华文能力强的男生——通过DSA进入MEP是全新加坡最难得的机会之一",
  "适应全男生、高要求SAP环境、热爱中华文化活动的男生",
  "能同时应付IP课业强度和繁重CCA承诺的学生",
],
```

**id: "sas"**
```ts
aboutEn: "Founded in 1862, St. Andrew's School is an Anglican boys' school in Potong Pasir offering an O-Level track. It is renowned for its rugby culture and deep sporting tradition, and fosters an inclusive, values-driven community rooted in Anglican principles.",
aboutZh: "创立于1862年，位于波东巴西（中部）的圣公会男校，提供O水准轨道。以橄榄球文化和深厚体育传统著称，培养基于圣公会原则的包容、价值观导向型社群。",
goodFitEn: [
  "Boys passionate about contact and team sports — the school takes rugby, football, hockey, squash, and water polo seriously",
  "Students who prefer a supportive O-Level environment over the pressure of an IP programme",
  "Boys from Anglican or Christian families, or those who resonate with a values-based school culture",
],
goodFitZh: [
  "热爱对抗性/团队运动的男生——学校认真对待橄榄球、足球、曲棍球、壁球和水球",
  "倾向于在支持性O水准环境成长、不走IP路线的学生",
  "来自圣公会/基督教家庭，或认同价值观导向校园文化的男生",
],
```

**id: "plmgs"**
```ts
aboutEn: "Founded in 1949, Paya Lebar Methodist Girls' School is a government-aided girls' school in Paya Lebar offering an O-Level track. It is known for its nurturing and inclusive culture — less academically intense than IP schools — with a strong emphasis on character development and holistic growth.",
aboutZh: "创立于1949年，位于巴耶利峇的政府辅助女校，提供O水准轨道。以关爱包容的校园文化著称——学术强度低于IP学校——注重品格培养与全面发展。",
goodFitEn: [
  "Girls interested in Harp — one of Singapore's rarest DSA instruments, with the school officially welcoming zero-experience applicants",
  "Students who want a supportive O-Level environment without the competitive pressure of IP schools",
  "Families in the East or North-East of Singapore looking for a values-based girls' school",
],
goodFitZh: [
  "对竖琴（Harp）感兴趣的女生——全新加坡最稀缺的DSA乐器之一，学校官方欢迎零基础申请者",
  "希望在支持性O水准环境中成长、不需要IP课程竞争压力的学生",
  "居住在东部/东北部、寻找价值观导向女校的家庭",
],
```

**id: "njc"**
```ts
aboutEn: "Founded in 1969 in Clementi, National Junior College runs Singapore's most distinctive IP: a 6-year through-train from Secondary 1 to JC2 with no standalone secondary school stage. The co-educational school is known for its well-rounded programme, research culture, and real academic autonomy for students.",
aboutZh: "创立于1969年，位于金文泰，国家初级学院运营全新加坡最独特的IP项目：从中一直通JC2的6年连贯课程，无独立中学阶段。男女混合，以课程全面均衡和给予学生真正学术自主权的研究文化著称。",
goodFitEn: [
  "Self-motivated students who can sustain momentum without O-Level milestones to anchor them",
  "Families who want to commit to an entire 6-year educational environment in one decision — no mid-point school switches",
  "Students with genuine interest in Science for Sustainable Development, not just environmentalism as a talking point",
],
goodFitZh: [
  "自驱力强、无需O水准考试节点驱动也能保持动力的学生",
  "希望一次决定整个6年学习环境、不需要中途换校的家庭",
  "对可持续发展科学有真正热情的学生——不只是作为谈话要点的环保意识",
],
```

**id: "sngs"**
```ts
aboutEn: "Founded in 1948, CHIJ St. Nicholas Girls' School is a Canossian SAP school in Bishan with an IP track leading to Eunoia Junior College. It stands out for having the most granular sports DSA list among SAP girls' schools — 7 specific disciplines — alongside its distinctive Bilingualism talent area.",
aboutZh: "创立于1948年，位于碧山的仁爱女修会SAP女校，IP直通Eunoia初级学院。以全岛SAP女校中最细化的体育DSA名单著称——7个具体体育项目——以及独特的双语才能方向。",
goodFitEn: [
  "Girls who compete in a specific sport, not just 'I like sports generally' — the school evaluates 7 disciplines separately",
  "Students with strong Chinese language ability who want the rare Bilingualism DSA track",
  "Girls who want an all-girls SAP environment with IP leading to Eunoia JC",
],
goodFitZh: [
  "有具体运动专项的女生——不只是泛泛'喜欢运动'——学校对7个体育项目分别进行评估",
  "华文能力强、有意申请罕见双语才能DSA方向的学生",
  "希望在全女生SAP环境中就读、IP直通Eunoia JC的女生",
],
```

**id: "ahs"**
```ts
aboutEn: "Founded in 1952, Anglican High School is a Special Assistance Plan (SAP) school in Hougang, North-East Singapore. Chinese Language is compulsory for all students — no exceptions. The school offers both Express and IP tracks and is notable for including Robotics as a DSA talent area, rare among SAP schools.",
aboutZh: "创立于1952年，位于后港（东北部）的特别助理计划学校。华文/高级华文对所有学生为必修科目，无例外。提供快捷课程和综合课程，以将Robotics（机器人）纳入DSA才能方向著称——这在SAP学校中极为罕见。",
goodFitEn: [
  "Students who are genuinely bilingual — Higher Chinese or Chinese is non-negotiable for all students, not just DSA Chinese Language applicants",
  "Students interested in Robotics who also want a Chinese-medium cultural environment",
  "Families in North-East Singapore (Hougang, Sengkang) looking for a strong SAP school with diverse DSA options",
],
goodFitZh: [
  "真正掌握双语的学生——华文/高级华文是所有学生的必修科，不只是申请中文DSA的学生",
  "对Robotics感兴趣、同时希望在华语文化环境中成长的学生",
  "居住在东北部（后港/盛港）、寻找DSA选择多元的强SAP学校的家庭",
],
```

### 2c. Update SchoolCard component

Add two props: `aboutLabel: string` and `goodFitLabel: string`.

**Add "About the School" section** — insert AFTER the tags div and BEFORE the key signal block:
```tsx
{/* About the school */}
<div className="mt-4">
  <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-intellectual/40">
    {aboutLabel}
  </p>
  <p className="text-sm leading-relaxed text-intellectual-muted">
    {isZh ? school.aboutZh : school.aboutEn}
  </p>
</div>
```

**Add "Good Fit For" section** — insert AFTER the talent areas block and BEFORE the official link button:
```tsx
{/* Good Fit For */}
<div className="mt-4">
  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-intellectual/40">
    {goodFitLabel}
  </p>
  <ul className="space-y-1.5">
    {(isZh ? school.goodFitZh : school.goodFitEn).map((item, i) => (
      <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-intellectual-muted">
        <span className="mt-0.5 shrink-0 text-champagne-dark font-semibold">✓</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>
```

**Update where SchoolCard is called** in `OpenHouseTakeawaysBody` — pass the two new props:
```tsx
<SchoolCard
  key={school.id}
  school={school}
  locale={locale}
  keySignalLabel={t.ohTakeawaysKeySignal}
  talentAreasLabel={t.ohTakeawaysTalentAreas}
  officialLinkLabel={t.ohTakeawaysOfficialLink}
  aboutLabel={t.ohTakeawaysAbout}
  goodFitLabel={t.ohTakeawaysGoodFit}
/>
```

---

## CHANGE 3 — Create `components/TakeawaysEntryCard.tsx`

Create this file from scratch:

```tsx
"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function TakeawaysEntryCard() {
  const { t } = useLanguage();
  return (
    <div className="rounded-2xl border border-champagne/25 bg-champagne/8 p-4 shadow-sm ring-1 ring-champagne/10">
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-champagne-dark">
        Open House Recap
      </p>
      <p className="font-display text-[0.9375rem] font-semibold leading-snug text-intellectual">
        {t.ohMissedCardTitle}
      </p>
      <p className="mt-1.5 text-xs leading-relaxed text-intellectual-muted">
        {t.ohMissedCardBody}
      </p>
      <Link
        href="/open-house-takeaways"
        className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-intellectual px-3 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-intellectual-light"
      >
        {t.ohMissedCardCta}
        <ChevronRight className="h-3.5 w-3.5" aria-hidden />
      </Link>
    </div>
  );
}
```

---

## CHANGE 4 — `app/page.tsx`

Add import at top:
```tsx
import { TakeawaysEntryCard } from "@/components/TakeawaysEntryCard";
```

Find the `<OpenHousePreview />` and `<ScoresEntryCard />` lines. Insert `<TakeawaysEntryCard />` between them:
```tsx
<OpenHousePreview />
<TakeawaysEntryCard />
<ScoresEntryCard />
```

---

## CHANGE 5a — `components/SiteHeader.tsx` — Blog nav item

### Desktop nav
Add a Blog link AFTER the `featuredLinks.map(...)` block and BEFORE the "Open House" dropdown `<div className="relative"...>`:

```tsx
{/* Blog — gold label style */}
<Link
  href="/blog"
  className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-champagne/40 bg-champagne/15 px-3 py-1.5 text-[0.8125rem] font-medium normal-case text-champagne-light transition hover:bg-champagne/25 hover:text-white ${
    pathname === "/blog" ? "bg-champagne/30 text-white" : ""
  }`}
>
  {t.navBlog}
  <span className="rounded bg-champagne px-1.5 py-px text-[9px] font-bold uppercase tracking-wide text-intellectual animate-pulse">
    New
  </span>
</Link>
```

### Mobile drawer
Add AFTER the `featuredLinks.map(...)` block and BEFORE the "Open House ★" section:

```tsx
<Link
  href="/blog"
  className={`flex items-center gap-2 rounded-lg border border-champagne/40 bg-champagne/15 px-3 py-2 text-sm font-medium normal-case text-champagne-light transition hover:bg-champagne/25 ${
    pathname === "/blog" ? "bg-champagne/30 text-white" : ""
  }`}
  onClick={() => setMobileMenuOpen(false)}
>
  {t.navBlog}
  <span className="rounded bg-champagne px-1.5 py-px text-[9px] font-bold uppercase tracking-wide text-intellectual animate-pulse">
    New
  </span>
</Link>
```

---

## CHANGE 5b — Create `app/blog/page.tsx`

```tsx
import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: { absolute: "Blog | DSALink" },
  description:
    "DSA guides, school insights, and parent tips from DSALink — coming soon.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-champagne-dark">
            Coming Soon
          </p>
          <h1 className="font-display text-3xl font-semibold text-intellectual sm:text-4xl">
            Blog
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-intellectual-muted">
            DSA guides, school insights, and parent tips — we&apos;re putting it
            together now.
          </p>
          <p className="mt-6 text-sm text-intellectual-muted/60">
            Follow us on Facebook for updates while we build this out.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
```

---

## Verification

After all changes:
1. `npx tsc --noEmit` — must be zero errors
2. Do NOT run `npm run build` locally (pre-existing ESLint issue unrelated to our changes)
3. Each school card on `/open-house-takeaways` should show: About section → Key Signal → Talent Areas → Good Fit For → Official link button
4. Homepage right sidebar order: Deadline → Coming Up → TakeawaysEntryCard → PSLE COP
5. Nav: Blog link appears in gold/champagne styling with "New" badge pulsing
6. `/blog` loads without error, shows coming soon content
