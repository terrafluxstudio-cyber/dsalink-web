# Cursor Task: DSA Coaches Directory — /dsa-coaches

## Overview

Create a new page `/dsa-coaches` listing 35 real DSA coaching providers in Singapore. Filterable by talent area and provider type (institution / individual coach). Hardcoded data, client-side filtering, website-link-only contact (PDPA safe).

---

## Files to create / modify

1. `locales/en.json` — add UI keys
2. `locales/zh.json` — add UI keys (Chinese)
3. `app/dsa-coaches/page.tsx` — new page
4. `components/DsaCoachesPageBody.tsx` — new component (large)
5. `components/SiteHeader.tsx` — add nav link
6. `app/sitemap.ts` — add route

---

## Step 1: Add to `locales/en.json`

Add before the closing `}` of the file:

```json
  "navDsaCoaches": "Coach Directory",
  "dsaCoachesMetaTitle": "DSA Coaching Directory Singapore 2026 | Music, Sports, Arts & Interview Prep | DSALink",
  "dsaCoachesMetaDesc": "Find DSA coaching providers in Singapore — music tutors, sports academies, visual arts portfolio classes, drama schools, and interview coaching. 35+ providers curated by DSALink.",
  "dsaCoachesOgTitle": "DSA Coaching Directory Singapore 2026",
  "dsaCoachesOgDesc": "Music, sports, visual arts, performing arts, tech, and interview coaching for DSA-Sec 2026. 35+ providers curated by DSALink.",
  "dsaCoachesHeading": "DSA Coaching Directory",
  "dsaCoachesLead": "35+ coaching providers across music, sports, visual arts, performing arts, tech, and interview preparation. Sorted by prominence — not by payment.",
  "dsaCoachesDisclaimer": "DSALink does not endorse or have a commercial relationship with any listed provider. Listings are compiled from publicly available sources. Contact information links to each provider's official website only.",
  "dsaCoachesFilterAll": "All",
  "dsaCoachesFilterMusic": "Music",
  "dsaCoachesFilterSports": "Sports",
  "dsaCoachesFilterVisualArts": "Visual Arts",
  "dsaCoachesFilterPerformingArts": "Performing Arts",
  "dsaCoachesFilterAcademic": "Interview & Academic",
  "dsaCoachesFilterTech": "Tech & STEM",
  "dsaCoachesTypeAll": "All providers",
  "dsaCoachesTypeInstitution": "Institutions",
  "dsaCoachesTypeIndividual": "Individual coaches",
  "dsaCoachesVisitWebsite": "Visit website",
  "dsaCoachesBadgeInstitution": "Institution",
  "dsaCoachesBadgeIndividual": "Individual Coach",
  "dsaCoachesEmptyState": "No providers match this filter. Try a different combination.",
  "dsaCoachesCtaHeading": "Are you a DSA coach?",
  "dsaCoachesCtaBody": "DSALink accepts free listing requests from qualified DSA coaching providers. Send us your details and we will review your submission.",
  "dsaCoachesCtaButton": "Request a free listing"
```

---

## Step 2: Add to `locales/zh.json`

Add before the closing `}` of the file:

```json
  "navDsaCoaches": "辅导目录",
  "dsaCoachesMetaTitle": "新加坡DSA辅导机构目录2026 | 音乐、体育、艺术与面试 | DSALink",
  "dsaCoachesMetaDesc": "查找新加坡DSA辅导机构——音乐老师、体育学院、视觉艺术作品集班、戏剧学校和面试辅导。收录35+机构，由DSALink整理。",
  "dsaCoachesOgTitle": "新加坡DSA辅导机构目录2026",
  "dsaCoachesOgDesc": "2026年DSA升学的音乐、体育、视觉艺术、表演艺术、科技和面试辅导机构，由DSALink整理，收录35+服务商。",
  "dsaCoachesHeading": "DSA辅导机构目录",
  "dsaCoachesLead": "收录35+机构，涵盖音乐、体育、视觉艺术、表演艺术、科技与面试准备。按知名度排序，非付费排名。",
  "dsaCoachesDisclaimer": "DSALink不对任何列出机构作背书，亦无商业合作关系。所有信息来源于公开资料，联系方式仅链接至各机构官网。",
  "dsaCoachesFilterAll": "全部",
  "dsaCoachesFilterMusic": "音乐",
  "dsaCoachesFilterSports": "体育",
  "dsaCoachesFilterVisualArts": "视觉艺术",
  "dsaCoachesFilterPerformingArts": "表演艺术",
  "dsaCoachesFilterAcademic": "面试与学术",
  "dsaCoachesFilterTech": "科技与STEM",
  "dsaCoachesTypeAll": "全部机构",
  "dsaCoachesTypeInstitution": "辅导中心",
  "dsaCoachesTypeIndividual": "个人老师",
  "dsaCoachesVisitWebsite": "访问官网",
  "dsaCoachesBadgeInstitution": "辅导中心",
  "dsaCoachesBadgeIndividual": "个人老师",
  "dsaCoachesEmptyState": "没有符合条件的机构，请尝试其他筛选组合。",
  "dsaCoachesCtaHeading": "您是DSA辅导老师？",
  "dsaCoachesCtaBody": "DSALink接受合格DSA辅导机构的免费刊登申请，请发送您的信息，我们将审核并联系您。",
  "dsaCoachesCtaButton": "申请免费刊登"
```

---

## Step 3: Create `app/dsa-coaches/page.tsx`

Create the file with this exact content:

```tsx
import type { Metadata } from "next";
import en from "@/locales/en.json";
import { DsaCoachesPageBody } from "@/components/DsaCoachesPageBody";
import { getSiteUrl } from "@/lib/seo";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — DSA Coaching Directory Singapore 2026",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: en.dsaCoachesMetaTitle },
    description: en.dsaCoachesMetaDesc,
    keywords: [
      "DSA coaching Singapore 2026",
      "DSA music tutor Singapore",
      "DSA sports coaching Singapore",
      "DSA visual arts portfolio class Singapore",
      "DSA interview coaching Singapore",
      "DSA drama coaching Singapore",
      "DSA preparation centre Singapore",
      "DSA individual coach Singapore",
      "SOTA preparation Singapore",
      "DSA netball football swimming coaching",
      "DSA piano violin coaching Singapore",
      "DSA ballet dance coaching Singapore",
      "DSA tech STEM coaching Singapore",
      "DSA interview preparation specialist Singapore",
    ],
    alternates: { canonical: "/dsa-coaches" },
    openGraph: {
      title: en.dsaCoachesOgTitle,
      description: en.dsaCoachesOgDesc,
      type: "website",
      url: "/dsa-coaches",
      siteName: "DSALink",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: en.dsaCoachesOgTitle,
      description: en.dsaCoachesOgDesc,
      images: [ogImage.url],
    },
  };
}

function buildCoachesStructuredData() {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DSA Coaching Providers Singapore 2026",
    description:
      "A curated directory of DSA coaching providers in Singapore for music, sports, visual arts, performing arts, tech, and interview preparation.",
    url: `${base}/dsa-coaches`,
    numberOfItems: 35,
  };
}

export default function DsaCoachesPage() {
  const structuredData = buildCoachesStructuredData();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <DsaCoachesPageBody />
    </>
  );
}
```

---

## Step 4: Create `components/DsaCoachesPageBody.tsx`

Create the file with this exact content:

```tsx
"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/contexts/LanguageContext";

/* ── Types ──────────────────────────────────────────────────────── */

type TalentArea =
  | "music"
  | "sports"
  | "visual-arts"
  | "performing-arts"
  | "academic"
  | "tech";

type AreaFilter = "all" | TalentArea;
type TypeFilter = "all" | "institution" | "individual";

interface Coach {
  id: string;
  type: "institution" | "individual";
  name: string;
  talentAreas: TalentArea[];
  tagline: string;
  website: string;
  prominence: 1 | 2 | 3; // 3 = most prominent; used for sorting only
}

/* ── Coach data ─────────────────────────────────────────────────── */

const coaches: Coach[] = [
  /* ── Prominence 3 (highest) ── */
  {
    id: "superminds",
    type: "institution",
    name: "SuperMinds",
    talentAreas: ["academic"],
    tagline:
      "1-on-1 DSA interview coaching by Iwan Yang — 2,000+ students coached, 500+ verified reviews. In-person (Tanjong Pagar) and Zoom.",
    website: "https://superminds.com.sg/dsa-interview-preparation-singapore/",
    prominence: 3,
  },
  {
    id: "speech-academy-asia",
    type: "institution",
    name: "Speech Academy Asia",
    talentAreas: ["academic"],
    tagline:
      "DSA coaching workshops covering 81 interview questions, body language, voice modulation, and portfolio curation. MOE-registered instructors. Located at JEM.",
    website: "https://speechacademyasia.com/dsa/",
    prominence: 3,
  },
  {
    id: "mindchamps-dsa",
    type: "institution",
    name: "MindChamps Académie of Stars",
    talentAreas: ["performing-arts", "music"],
    tagline:
      "Singapore's dedicated DSA centre for drama, singing, and dance. LAMDA and ABRSM certifications. Claims 90%+ placement rate at target schools.",
    website: "https://www.dsa.mindchamps.org/",
    prominence: 3,
  },
  {
    id: "elixir-academy",
    type: "institution",
    name: "Elixir Academy",
    talentAreas: ["academic", "visual-arts"],
    tagline:
      "Expert DSA coaching by Teacher Albert (ex-NUS High, award-winning chess champion): portfolio building, interview prep, and art portfolio guidance. Hougang/Kovan.",
    website: "https://www.elixirtuition.com/dsa-preparation-course-singapore",
    prominence: 3,
  },
  {
    id: "ryse-education",
    type: "institution",
    name: "Ryse Education",
    talentAreas: ["academic"],
    tagline:
      "12–16 month strategic DSA mentorship starting from P5. Authentic narrative-building, portfolio documentation, and 1-on-1 structured interview coaching.",
    website: "https://www.ryse-edu.com/services/dsa-and-eae-prep",
    prominence: 3,
  },
  {
    id: "dancepointe",
    type: "institution",
    name: "Dancepointe Academy",
    talentAreas: ["performing-arts"],
    tagline:
      "Singapore's largest dance school — 18 outlets, 5,000+ students. Proven DSA placements at SCGS, SOTA, Swiss Cottage Secondary, Commonwealth Secondary, and more.",
    website: "https://www.dancepointe.com.sg/students-1/dsa",
    prominence: 3,
  },
  {
    id: "ancourage",
    type: "institution",
    name: "Art by Ancourage",
    talentAreas: ["visual-arts"],
    tagline:
      "Small-group art portfolio classes (ages 10–18) at Bishan and Woodlands. Drawing, painting, and mixed media with school-specific portfolio guidance.",
    website: "https://ancourage.academy/courses/art/dsa",
    prominence: 3,
  },
  {
    id: "goalkick",
    type: "institution",
    name: "GoalKick Football Academy",
    talentAreas: ["sports"],
    tagline:
      "FAS-accredited football DSA programme. Skill training, trial preparation, and interview coaching for aspiring school footballers.",
    website: "https://footballtraining.sg/dsa-programme/",
    prominence: 3,
  },
  {
    id: "netball-academy",
    type: "institution",
    name: "The Netball Academy",
    talentAreas: ["sports"],
    tagline:
      "Dedicated DSA Clinic led by former national players, timed for July school trials. Mock tryout scenarios, fitness conditioning, and DSA interview prep.",
    website: "https://thenetballacademy.sg/dsa-clinic/",
    prominence: 3,
  },
  {
    id: "swimfast",
    type: "institution",
    name: "Swimfast Aquatic Club",
    talentAreas: ["sports"],
    tagline:
      "14-time National Swimming Championship title holder. Competitive training pathway for students targeting swimming DSA eligibility.",
    website: "https://swimfast.com.sg/",
    prominence: 3,
  },
  /* ── Prominence 2 ── */
  {
    id: "singacademy",
    type: "institution",
    name: "SingAcademy — DSA Specialists",
    talentAreas: ["academic", "performing-arts"],
    tagline:
      "DSA specialists since 2010. Interview, audition, and portfolio coaching across all talent areas. Founded by Artistic Director Kuo Po.",
    website: "https://www.singacademy.sg/the-dsa-specialist",
    prominence: 2,
  },
  {
    id: "small-giant-music",
    type: "institution",
    name: "Small Giant Music",
    talentAreas: ["music"],
    tagline:
      "Holistic music DSA preparation: audition performance, interview techniques, and portfolio presentation for all instruments.",
    website: "https://www.smallgiantmusic.sg/dsa-preparation-course-music/",
    prominence: 2,
  },
  {
    id: "vac",
    type: "institution",
    name: "Visual Arts Centre",
    talentAreas: ["visual-arts"],
    tagline:
      "1-year portfolio preparation for DSA-Sec, DSA-JC, and SOTA. Covers idea conceptualisation and MOE/SOTA requirements. Free trial class available.",
    website:
      "https://visualartscentre.sg/courses/portfolio-preparation-course-dsa-diploma/",
    prominence: 2,
  },
  {
    id: "centre-stage",
    type: "institution",
    name: "Centre Stage",
    talentAreas: ["performing-arts"],
    tagline:
      "Drama and theatre DSA coaching: portfolio preparation, performance skills, and audition confidence. Individual focus on acting, voice, and improvisation.",
    website: "https://centre-stage.com/home/direct-school-admissions-2/",
    prominence: 2,
  },
  {
    id: "hiart",
    type: "institution",
    name: "HiArt",
    talentAreas: ["visual-arts"],
    tagline:
      "DSA art portfolio courses, intensive crash courses, and online options. Guides students to build 10–15 artworks for DSA submission.",
    website: "https://hiart.com.sg/dsa/",
    prominence: 2,
  },
  {
    id: "empire-code",
    type: "institution",
    name: "Empire Code",
    talentAreas: ["tech"],
    tagline:
      "Tech-talent DSA programme with mock interviews, presentation practice, and hands-on coding projects. Silver and Gold packages include public speaking coaching.",
    website: "https://empirecode.co/direct-school-admission-dsa-program/",
    prominence: 2,
  },
  {
    id: "dsa-academy-sg",
    type: "institution",
    name: "DSA Academy Singapore",
    talentAreas: ["music", "performing-arts"],
    tagline:
      "Specialist DSA academy for music and dance: audition video production, portfolio development, interview skills coaching. Tracks: Vocals, Dance, Theatre.",
    website: "https://www.dsasingapore.com",
    prominence: 2,
  },
  {
    id: "medley-music",
    type: "institution",
    name: "Medley Music School",
    talentAreas: ["music"],
    tagline:
      "School-aligned music DSA framework with ABRSM and Trinity certification pathways tailored to each target secondary school's specific requirements.",
    website: "https://www.medleymusic.com.sg/dsa",
    prominence: 2,
  },
  {
    id: "play-acting",
    type: "institution",
    name: "Play Acting Drama Centre",
    talentAreas: ["performing-arts"],
    tagline:
      "Drama DSA coaching with long-term portfolio building through real stage roles. Recommends starting at least 2 years before DSA application.",
    website: "https://www.playacting.net/dsa",
    prominence: 2,
  },
  {
    id: "sgna",
    type: "institution",
    name: "Singapore Netball Academy",
    talentAreas: ["sports"],
    tagline:
      "National-level netball development academy (est. 2015) with DSA guidance workshops for parents and competitive-level training for players.",
    website: "https://www.netballacademy.sg/",
    prominence: 2,
  },
  {
    id: "chalk-n-pencils",
    type: "institution",
    name: "Chalk n Pencils",
    talentAreas: ["visual-arts"],
    tagline:
      "Portfolio preparation for DSA, AEP, SOTA, and IGCSE Art. Structured to develop individual artistic identity across drawing, painting, and mixed media.",
    website: "https://www.chalknpencils.com/children-art/portfolio-preparation",
    prominence: 2,
  },
  {
    id: "tutify",
    type: "institution",
    name: "Tutify Education",
    talentAreas: ["academic"],
    tagline:
      "Academic DSA coaching by Coach Leo — 12+ years experience in Math Olympiad preparation. Talent discovery, interview training, and PSLE academic support.",
    website: "https://tutify.com.sg/dsa-preparation/",
    prominence: 2,
  },
  {
    id: "titan-tech",
    type: "institution",
    name: "Titan Tech Academy",
    talentAreas: ["tech"],
    tagline:
      "Tech DSA preparation for ages 11–12. Hands-on projects, interview coaching, and recognised as a Digital for Life (government) partner.",
    website: "https://tta.sg/course-dsa/",
    prominence: 2,
  },
  {
    id: "music-with-pat",
    type: "individual",
    name: "Music with Pat",
    talentAreas: ["music"],
    tagline:
      "Piano DSA specialist by Patricia (B.Ed Music Education, 10+ years). Audition coaching, repertoire selection, portfolio building, and mock auditions. Based in Tengah.",
    website: "https://www.musicwithpat.com/dsa-piano-lessons/",
    prominence: 2,
  },
  /* ── Prominence 1 ── */
  {
    id: "aq-dance",
    type: "institution",
    name: "AQ Dance",
    talentAreas: ["performing-arts"],
    tagline:
      "End-to-end ballet DSA support: audition preparation, interview coaching, portfolio development, and testimonial writing for school applications.",
    website: "https://aqdance.com.sg/direct-school-admissions-dsa/",
    prominence: 1,
  },
  {
    id: "the-art-people",
    type: "institution",
    name: "The Art People",
    talentAreas: ["visual-arts"],
    tagline:
      "DSA Powerup course for visual arts portfolio preparation at secondary school level. Publishes guidance on mastering the DSA art portfolio.",
    website: "https://www.theartpeople.com.sg/dsapowerup.html",
    prominence: 1,
  },
  {
    id: "fishlike",
    type: "institution",
    name: "Fishlike Swim School",
    talentAreas: ["sports"],
    tagline:
      "Competitive swimming development using the Total Immersion method (one of 18 TI Master Coaches worldwide). Relevant for students targeting swimming DSA pathways.",
    website: "https://fishlike.net/competitive-swimming/",
    prominence: 1,
  },
  {
    id: "discovering-potential",
    type: "institution",
    name: "Discovering Potential",
    talentAreas: ["academic"],
    tagline:
      "Premium interview skills coaching designed specifically for DSA-Sec applicants. Dedicated DSA-Sec Interview Skills Workshop.",
    website: "https://www.discoveringpotential.com.sg/",
    prominence: 1,
  },
  {
    id: "polarise-learning",
    type: "institution",
    name: "Polarise Learning",
    talentAreas: ["visual-arts"],
    tagline:
      "160 hours/year of art instruction combined with portfolio presentation coaching and interview skills for DSA visual arts applications.",
    website: "https://www.polarise-learning.com/visual-arts-dsa",
    prominence: 1,
  },
  {
    id: "virtuoso-music",
    type: "individual",
    name: "Virtuoso Music Connection",
    talentAreas: ["music"],
    tagline:
      "Private violin and piano coaching targeting DSA and SOTA admissions. ABRSM, Trinity, and LCM examination preparation pathways.",
    website: "https://www.virtuosomusicconnection.sg/",
    prominence: 1,
  },
  {
    id: "belcanto-violins",
    type: "individual",
    name: "Belcanto Violins",
    talentAreas: ["music"],
    tagline:
      "Violin DSA preparation by Vivienne — 20+ years experience. Monthly performance opportunities build the competition CV needed for DSA applications.",
    website: "https://belcantoviolins.com/violin-lessons-singapore",
    prominence: 1,
  },
  {
    id: "isaiah-learning",
    type: "individual",
    name: "Isaiah Learning Solutions",
    talentAreas: ["tech"],
    tagline:
      "Ex-MOE teacher with 20 years' experience. Specialist DSA preparation for School of Science and Technology (SST). Locations: Bukit Timah, Serangoon, Clementi.",
    website: "https://isaiahlearningsolutions.com/dsa-sst-tuition-singapore",
    prominence: 1,
  },
  {
    id: "language-studio",
    type: "individual",
    name: "The Language Studio",
    talentAreas: ["academic"],
    tagline:
      "Tailor-made DSA interview confidence coaching by Teacher Jane — 15+ years teaching experience. Focus on communication, leadership, and cultural awareness.",
    website: "https://thelanguagestudio.sg/dsa-confidence/",
    prominence: 1,
  },
  {
    id: "city-ballet",
    type: "institution",
    name: "City Ballet Academy",
    talentAreas: ["performing-arts"],
    tagline:
      "Ballet DSA coaching with faculty placing students at NYGH, SCGS, Dunman High, SOTA, and Crescent Girls' School. Private and group coaching available.",
    website:
      "https://www.cityballetacademy.com/achievements/direct-school-admissions/",
    prominence: 1,
  },
  {
    id: "yan-ballet",
    type: "institution",
    name: "Yan Ballet Academy",
    talentAreas: ["performing-arts"],
    tagline:
      "Founded by former Shanghai Ballet and Singapore Ballet principal dancer Wang Yan. RAD exam classes, competition coaching, and dance DSA pathways.",
    website: "https://www.yanballetacademy.com/",
    prominence: 1,
  },
];

/* ── Area config ────────────────────────────────────────────────── */

const areaColors: Record<TalentArea, string> = {
  music: "bg-purple-50 text-purple-700 border border-purple-200",
  sports: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  "visual-arts": "bg-amber-50 text-amber-700 border border-amber-200",
  "performing-arts": "bg-rose-50 text-rose-700 border border-rose-200",
  academic: "bg-blue-50 text-blue-700 border border-blue-200",
  tech: "bg-teal-50 text-teal-700 border border-teal-200",
};

/* ── Component ──────────────────────────────────────────────────── */

export function DsaCoachesPageBody() {
  const { t } = useLanguage();

  const [activeArea, setActiveArea] = useState<AreaFilter>("all");
  const [activeType, setActiveType] = useState<TypeFilter>("all");

  const areaFilters: { key: AreaFilter; label: string }[] = [
    { key: "all", label: t.dsaCoachesFilterAll },
    { key: "music", label: t.dsaCoachesFilterMusic },
    { key: "sports", label: t.dsaCoachesFilterSports },
    { key: "visual-arts", label: t.dsaCoachesFilterVisualArts },
    { key: "performing-arts", label: t.dsaCoachesFilterPerformingArts },
    { key: "academic", label: t.dsaCoachesFilterAcademic },
    { key: "tech", label: t.dsaCoachesFilterTech },
  ];

  const typeFilters: { key: TypeFilter; label: string }[] = [
    { key: "all", label: t.dsaCoachesTypeAll },
    { key: "institution", label: t.dsaCoachesTypeInstitution },
    { key: "individual", label: t.dsaCoachesTypeIndividual },
  ];

  const areaLabels: Record<TalentArea, string> = {
    music: t.dsaCoachesFilterMusic,
    sports: t.dsaCoachesFilterSports,
    "visual-arts": t.dsaCoachesFilterVisualArts,
    "performing-arts": t.dsaCoachesFilterPerformingArts,
    academic: t.dsaCoachesFilterAcademic,
    tech: t.dsaCoachesFilterTech,
  };

  const filtered = coaches
    .filter(
      (c) => activeArea === "all" || c.talentAreas.includes(activeArea as TalentArea)
    )
    .filter((c) => activeType === "all" || c.type === activeType)
    .sort((a, b) => b.prominence - a.prominence);

  return (
    <>
      <SiteHeader />
      <PageHeader
        heading={t.dsaCoachesHeading}
        lead={t.dsaCoachesLead}
      />

      <main className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">

        {/* ── Disclaimer ── */}
        <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[0.8125rem] text-amber-800">
          {t.dsaCoachesDisclaimer}
        </div>

        {/* ── Filters ── */}
        <div className="mb-8 space-y-4">
          {/* Area filter pills */}
          <div className="flex flex-wrap gap-2">
            {areaFilters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveArea(key)}
                className={`rounded-full px-4 py-1.5 text-[0.8125rem] font-medium transition ${
                  activeArea === key
                    ? "bg-intellectual text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-intellectual/40"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Type toggle */}
          <div className="flex gap-2">
            {typeFilters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveType(key)}
                className={`rounded-lg px-3 py-1 text-[0.75rem] font-medium transition ${
                  activeType === key
                    ? "bg-slate-800 text-white"
                    : "border border-slate-200 bg-white text-slate-500 hover:border-slate-300"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Results count ── */}
        <p className="mb-5 text-[0.8125rem] text-slate-400">
          {filtered.length} {filtered.length === 1 ? "provider" : "providers"}
        </p>

        {/* ── Card grid ── */}
        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-200 py-16 text-center text-[0.9375rem] text-slate-400">
            {t.dsaCoachesEmptyState}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {filtered.map((coach) => (
              <div
                key={coach.id}
                className="flex flex-col rounded-xl border border-[#e3ded5] bg-white p-5 shadow-card"
              >
                {/* Type badge */}
                <p className="mb-2 text-[0.6875rem] font-bold uppercase tracking-widest text-slate-400">
                  {coach.type === "institution"
                    ? t.dsaCoachesBadgeInstitution
                    : t.dsaCoachesBadgeIndividual}
                </p>

                {/* Name */}
                <h2 className="mb-2 font-display text-[1rem] font-semibold leading-snug text-slate-900">
                  {coach.name}
                </h2>

                {/* Talent area tags */}
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {coach.talentAreas.map((area) => (
                    <span
                      key={area}
                      className={`rounded-full px-2 py-0.5 text-[0.6875rem] font-semibold ${areaColors[area]}`}
                    >
                      {areaLabels[area]}
                    </span>
                  ))}
                </div>

                {/* Tagline */}
                <p className="mb-4 flex-1 text-[0.8125rem] leading-relaxed text-slate-600">
                  {coach.tagline}
                </p>

                {/* Website link */}
                <a
                  href={coach.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 self-start rounded-lg border border-intellectual/20 bg-intellectual/5 px-3 py-1.5 text-[0.8125rem] font-medium text-intellectual transition hover:bg-intellectual/10"
                >
                  {t.dsaCoachesVisitWebsite}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        )}

        {/* ── CTA ── */}
        <div className="mt-12 rounded-xl border border-champagne/40 bg-champagne/10 p-6 text-center">
          <h2 className="mb-2 font-display text-[1.125rem] font-semibold text-slate-900">
            {t.dsaCoachesCtaHeading}
          </h2>
          <p className="mb-4 text-[0.9375rem] text-slate-600">
            {t.dsaCoachesCtaBody}
          </p>
          <a
            href="mailto:hello@dsalink.sg"
            className="inline-block rounded-lg bg-intellectual px-5 py-2 text-[0.875rem] font-semibold text-white transition hover:bg-intellectual/90"
          >
            {t.dsaCoachesCtaButton}
          </a>
        </div>

      </main>

      <SiteFooter />
    </>
  );
}
```

---

## Step 5: Update `components/SiteHeader.tsx`

### 5a. Find the `dataLinks` array and add the new entry

Find:
```tsx
  const dataLinks = [
    { href: "/dsa-finder", label: t.navDsaFinder },
    { href: "/open-houses", label: t.navOpenHouses },
    { href: "/schools", label: t.navSchools },
    { href: "/psle-cop", label: t.navScores },
  ] as const;
```

Replace with:
```tsx
  const dataLinks = [
    { href: "/dsa-finder", label: t.navDsaFinder },
    { href: "/dsa-coaches", label: t.navDsaCoaches },
    { href: "/open-houses", label: t.navOpenHouses },
    { href: "/schools", label: t.navSchools },
    { href: "/psle-cop", label: t.navScores },
  ] as const;
```

---

## Step 6: Update `app/sitemap.ts`

Find:
```tsx
    {
      url: `${base}/open-house-guide`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.87,
    },
  ];
}
```

Replace with:
```tsx
    {
      url: `${base}/open-house-guide`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.87,
    },
    {
      url: `${base}/dsa-coaches`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.86,
    },
  ];
}
```

---

## Verification

1. `npm run build` — no TypeScript errors
2. `/dsa-coaches` renders with 35 providers in 2-col grid
3. Area filter pills work — clicking "Music" shows only music providers
4. Type toggle works — "Individual coaches" shows only individual coaches
5. Combine filter + toggle — e.g. Music + Individual shows Patricia, Virtuoso, Belcanto
6. Empty state shows when no results match
7. EN↔ZH toggle — all UI labels translate
8. Coach names and taglines stay in English in both locales (correct)
9. Nav dropdown includes "Coach Directory" / "辅导目录"
10. Each card's website link opens in new tab

---

## Git commit

```
git add app/dsa-coaches/page.tsx components/DsaCoachesPageBody.tsx locales/en.json locales/zh.json components/SiteHeader.tsx app/sitemap.ts
git commit -m "feat: add DSA coaching directory with 35 providers and talent-area filtering"
```
