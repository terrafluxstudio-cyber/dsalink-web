# Cursor Task: Expand DSA Coaches Directory + Fix CTA + Update Lead Count

## Overview

Three changes to `components/DsaCoachesPageBody.tsx` and `locales/*.json`:
1. Add 16 new prominent institutions (Yamaha, Cristofori, SNYO, ActiveSG, ACT 3, Crestar, etc.)
2. Soften CTA wording — less salesy, more welcoming
3. Update lead count from "35+" to "50+"
4. Update `dsaInterviewLinkCoaches` i18n key (new) for cross-link from interview page

---

## Files to modify

1. `components/DsaCoachesPageBody.tsx`
2. `locales/en.json`
3. `locales/zh.json`

---

## Step 1: Update `locales/en.json`

### 1a. Update lead text count (line ~572)

Find:
```json
  "dsaCoachesLead": "35+ coaching providers across music, sports, visual arts, performing arts, tech, and interview preparation. Sorted by prominence — not by payment.",
```

Replace with:
```json
  "dsaCoachesLead": "50+ coaching providers across music, sports, visual arts, performing arts, tech, and interview preparation. Sorted by prominence — not by payment.",
```

### 1b. Update CTA heading and body

Find:
```json
  "dsaCoachesCtaHeading": "Are you a DSA coach?",
  "dsaCoachesCtaBody": "DSALink accepts free listing requests from qualified DSA coaching providers. Send us your details and we will review your submission.",
  "dsaCoachesCtaButton": "Request a free listing"
```

Replace with:
```json
  "dsaCoachesCtaHeading": "Do you coach DSA students?",
  "dsaCoachesCtaBody": "If you work with DSA applicants — as a centre, school, or individual coach — we would be glad to include you in our directory. Contact us to request a free listing.",
  "dsaCoachesCtaButton": "Contact us to be listed"
```

### 1c. Add cross-link key (add after the last `dsaCoaches*` key)

```json
  "dsaInterviewLinkCoaches": "DSA coach directory →"
```

---

## Step 2: Update `locales/zh.json`

### 2a. Update lead text count

Find:
```json
  "dsaCoachesLead": "收录35+机构，涵盖音乐、体育、视觉艺术、表演艺术、科技与面试准备。按知名度排序，非付费排名。",
```

Replace with:
```json
  "dsaCoachesLead": "收录50+机构，涵盖音乐、体育、视觉艺术、表演艺术、科技与面试准备。按知名度排序，非付费排名。",
```

### 2b. Update CTA heading and body

Find:
```json
  "dsaCoachesCtaHeading": "您是DSA辅导老师？",
  "dsaCoachesCtaBody": "DSALink接受合格DSA辅导机构的免费刊登申请，请发送您的信息，我们将审核并联系您。",
  "dsaCoachesCtaButton": "申请免费刊登"
```

Replace with:
```json
  "dsaCoachesCtaHeading": "您也在辅导DSA学生吗？",
  "dsaCoachesCtaBody": "无论您是辅导中心、学校还是个人老师，只要您辅导DSA申请学生，欢迎联系我们申请免费收录。",
  "dsaCoachesCtaButton": "联系我们申请收录"
```

### 2c. Add cross-link key

```json
  "dsaInterviewLinkCoaches": "DSA辅导机构目录 →"
```

---

## Step 3: Update `components/DsaCoachesPageBody.tsx`

### 3a. Add 16 new coaches to the `coaches` array

Find the comment `/* ── Prominence 3 (highest) ── */` and insert these 5 new Prominence 3 entries BEFORE the existing `superminds` entry:

```tsx
  {
    id: "yamaha-sg",
    type: "institution",
    name: "Yamaha Music School Singapore",
    talentAreas: ["music"],
    tagline:
      "Singapore's most recognised music school brand. Individual piano, keyboard, and instrument lessons following the ABRSM grade pathway. 10 branches island-wide. Teachers hold minimum ABRSM Grade 8.",
    website: "https://sg.yamaha.com/en/education/",
    prominence: 3,
  },
  {
    id: "cristofori",
    type: "institution",
    name: "Cristofori Music School",
    talentAreas: ["music"],
    tagline:
      "Singapore's largest music school — 35 centres, 16,000 students, 500 teachers. Piano, violin, guitar, and drums with annual ABRSM graded exam progression. 45 years of operation.",
    website: "https://cristofori.asia/",
    prominence: 3,
  },
  {
    id: "snyo",
    type: "institution",
    name: "SNYO — Singapore National Youth Orchestra",
    talentAreas: ["music"],
    tagline:
      "The most prestigious youth music credential in Singapore. MOE-recognised National Project of Excellence for orchestral instruments (strings, woodwind, brass, percussion). Open auditions year-round.",
    website: "https://www.snyo.org.sg/",
    prominence: 3,
  },
  {
    id: "activesg",
    type: "institution",
    name: "ActiveSG Academies",
    talentAreas: ["sports"],
    tagline:
      "Government-backed youth sports academies covering football, swimming, athletics, badminton, basketball, gymnastics, and more. Development Centre level provides competition experience for DSA-eligible credentials.",
    website: "https://www.activesgcircle.gov.sg/academies-clubs",
    prominence: 3,
  },
  {
    id: "act3",
    type: "institution",
    name: "ACT 3 International",
    talentAreas: ["performing-arts"],
    tagline:
      "Singapore's first and oldest children's drama academy (est. 1994). Drama classes for ages 18 months to 15 years at Cairnhill Arts Centre and Oasis Terraces, Punggol. Stage production opportunities build performing arts DSA portfolios.",
    website: "https://act3international.com.sg/",
    prominence: 3,
  },
  {
    id: "crestar",
    type: "institution",
    name: "Crestar Learning Centre",
    talentAreas: ["visual-arts"],
    tagline:
      "Established enrichment brand since 1977 — 50,000+ students. Dedicated Art DSA-Sec programme for ages 10–12 covering multiple mediums, portfolio building, and DSA interview skills. 4+ centres island-wide.",
    website: "https://crestar.com.sg/",
    prominence: 3,
  },
```

Then find the comment `/* ── Prominence 2 ── */` and insert these 7 new Prominence 2 entries BEFORE the existing `singacademy` entry:

```tsx
  {
    id: "soma",
    type: "institution",
    name: "SOMA — School of Music and the Arts",
    talentAreas: ["music", "performing-arts"],
    tagline:
      "Private music and arts school (est. 2005) offering ABRSM, Trinity, and Rockschool graded pathways. Explicitly lists DSA portfolio guidance. Live recitals build the performance record needed for music DSA.",
    website: "https://soma.edu.sg/",
    prominence: 2,
  },
  {
    id: "tree-art",
    type: "institution",
    name: "Tree Art",
    talentAreas: ["visual-arts"],
    tagline:
      "Specialist DSA visual arts school with instructors including ex-MOE teachers with 20+ years' experience. Multi-stage coaching: technique, portfolio curation, interview prep, and application support.",
    website: "https://treeart.co/",
    prominence: 2,
  },
  {
    id: "art-wonderland",
    type: "institution",
    name: "Art Wonderland",
    talentAreas: ["visual-arts"],
    tagline:
      "Advanced art enrichment programme specifically designed for DSA Art portfolios targeting SOTA and secondary school admissions. Traditional and contemporary mediums. Backed by 10+ years experience.",
    website: "https://www.artwonderland.sg/",
    prominence: 2,
  },
  {
    id: "artgrain",
    type: "institution",
    name: "Artgrain",
    talentAreas: ["visual-arts"],
    tagline:
      "Portfolio Preparatory Course (ages 10–12) for Visual Art DSA, AEP, and local/overseas art schools. Covers observational drawing, painting, clay, 3D, and photography. Portfolio produced is usable as a DSA supporting document.",
    website: "https://artgrain.com.sg/",
    prominence: 2,
  },
  {
    id: "saga-athletics",
    type: "institution",
    name: "SAGA Athletics",
    talentAreas: ["sports"],
    tagline:
      "Specialist track and field coaching club (est. 2009). Events: sprinting, hurdles, middle/long distance, jumps, and throws. Trains athletes to National School Games qualifying standards for DSA eligibility.",
    website: "https://www.sagaathletics.com/",
    prominence: 2,
  },
  {
    id: "club-zoom",
    type: "institution",
    name: "Club ZOOM Track and Field",
    talentAreas: ["sports"],
    tagline:
      "SAA-affiliated non-profit athletics club with documented DSA placements via track and field. Athletes train 2–5 times per week and race in local and regional meets to build their competitive record.",
    website: "https://clubzoom.org.sg/",
    prominence: 2,
  },
  {
    id: "sg-badminton-school",
    type: "institution",
    name: "Singapore Badminton School",
    talentAreas: ["sports"],
    tagline:
      "Dedicated youth badminton coaching school with structured pathways from beginner through competitive levels. Training develops the footwork, match play, and technical skills assessed in school DSA badminton trials.",
    website: "https://www.singaporebadmintonschool.com.sg/",
    prominence: 2,
  },
```

Then find the comment `/* ── Prominence 1 ── */` and insert these 3 new Prominence 1 entries BEFORE the existing `aq-dance` entry:

```tsx
  {
    id: "duck-learning",
    type: "institution",
    name: "Duck Learning",
    talentAreas: ["tech"],
    tagline:
      "STEM enrichment and DSA coaching covering computational thinking, robotics, and digital literacy pathways. Publishes a maintained list of STEM DSA schools and offers structured tech DSA preparation.",
    website: "https://ducklearning.com/",
    prominence: 2,
  },
  {
    id: "artfully-yours",
    type: "institution",
    name: "Artfully Yours",
    talentAreas: ["visual-arts"],
    tagline:
      "Boutique art studio offering structured DSA Portfolio preparation with tailored coaching and portfolio development for secondary school visual arts DSA applications.",
    website: "https://www.artfullyyours.com.sg/",
    prominence: 1,
  },
  {
    id: "haus-of-wonders",
    type: "institution",
    name: "Haus of Wonders",
    talentAreas: ["visual-arts"],
    tagline:
      "DSA Portfolio Prep Masterclass for ages 8–17. Documented placements into SOTA, Raffles Girls' School, NAFA, and Naval Base Secondary via DSA visual arts. Portfolio curation and interview coaching included.",
    website: "https://hausofwonders.com/",
    prominence: 1,
  },
```

### 3b. Update lead text count

Find in `DsaCoachesPageBody.tsx`:
```tsx
        <p className="mb-5 text-[0.8125rem] text-slate-400">
          {filtered.length} {filtered.length === 1 ? "provider" : "providers"}
        </p>
```

This is dynamic and will auto-update. No change needed here.

---

## Verification

1. `npm run build` — no TypeScript errors
2. `/dsa-coaches` shows 51 providers total when "All" is selected
3. Yamaha, Cristofori, SNYO appear under Music filter
4. ActiveSG appears under Sports filter
5. ACT 3 International appears under Performing Arts filter
6. Crestar, Tree Art, Art Wonderland, Artgrain appear under Visual Arts filter
7. CTA text reads "Do you coach DSA students?" / "Contact us to be listed"
8. Results count shows correct number dynamically

---

## Git commit

```
git add components/DsaCoachesPageBody.tsx locales/en.json locales/zh.json
git commit -m "feat: expand coaches directory to 51 providers, soften CTA, add prominent brands"
```
