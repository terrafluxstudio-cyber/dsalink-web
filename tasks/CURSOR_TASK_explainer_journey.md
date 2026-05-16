# Cursor Task: Create DsaExplainerSection + ParentJourneyStrip components

## Context
DSALink.sg is a Next.js 15 + Tailwind CSS + TypeScript site at `/Users/nanewmac/Desktop/dsalink-web`.
- Design system: navy (`bg-intellectual`), champagne gold (`text-champagne-dark`, `border-champagne`), warm cream background (`bg-surface`, `bg-surface-subtle`)
- All text is i18n'd via `useLanguage()` hook from `@/contexts/LanguageContext`
- Follow existing component patterns exactly — look at `DsaStrategySection.tsx` for card layouts and `OpenHouseFieldGuide.tsx` for single promo sections

---

## Task 1: Create `components/DsaExplainerSection.tsx`

New component, hardcoded English + Chinese copy (not i18n'd — these are new additions, i18n can be added later).

**Purpose:** Explain DSA to parents who have never heard of it. Welcoming tone, opportunity-focused, NOT shame/fear.

**Layout:**
- Full-width section with `bg-white` background (contrasts with hero's cream mesh)
- Max width `max-w-6xl mx-auto px-4 sm:px-6`
- Vertical padding `py-12 sm:py-16`

**Content structure:**

### Part A: Header
```
Kicker (small tag, champagne gold): "Direct School Admission · DSA 2026"
H2: "Your child has a talent. There are schools that want exactly that."
Subtext (slate-500): "DSA is a free MOE programme that lets P6 students apply to secondary schools based on their interests, aptitude, and potential — not just PSLE results."
```

### Part B: How DSA Works — 3 steps (horizontal on desktop, vertical on mobile)
Use numbered cards (1, 2, 3) in a grid `grid-cols-1 sm:grid-cols-3 gap-4`

Each card has:
- Large step number (intellectual blue, font-bold, text-2xl)
- Bold title
- 1 sentence description

Content:
1. **Apply** — Submit up to 3 school choices via the MOE DSA portal. Applications are free and open from 6 May 2026.
2. **Selected** — Schools invite your child for a trial, audition, or interview based on their talent area.
3. **Confirmed** — If offered a place, your child's school is secured before PSLE results are released.

Add a small note below the 3 steps: `*DSA does not replace PSLE. Your child still sits the exam and must meet the school's minimum posting group score. Source: MOE (moe.gov.sg/secondary/dsa)`

### Part C: Myth-busting — 3 cards in a row (`grid-cols-1 sm:grid-cols-3 gap-3`)
Section label: "Common misconceptions"

Card design: left red ❌ icon + "Myth" label | right green ✓ icon + "Fact" label — two-tone card

Content:
1. Myth: "Only elite students from top primary schools apply."  
   Fact: "Any P6 student from any primary school can apply. School name doesn't matter — talent does."

2. Myth: "My child needs national champion results."  
   Fact: "Schools value consistent CCA participation and genuine interest. Trophies help but are not the only path."

3. Myth: "It's complicated and costs money."  
   Fact: "The MOE application is completely free. No agent needed. DSALink is also free."

### Part D: CTA at bottom
Button (champagne/gold style, similar to existing secondary buttons): "Search talent areas" → href="/dsa-finder"
Small text below: "Powered by DSALink — free, independent, not affiliated with MOE"

---

## Task 2: Create `components/ParentJourneyStrip.tsx`

**Purpose:** 4-step horizontal journey that replaces the confusing external CTA in the hero area. Shows parents a logical path through the site.

**Layout:**
- Slim section, `bg-surface-subtle` background
- `py-8 sm:py-10`
- Max width `max-w-6xl mx-auto px-4 sm:px-6`
- Section label above: "Your DSA journey" (small uppercase tracking-wide text-slate-400)

**4 steps:**

Use a horizontal flex/grid with connecting arrows between cards on desktop. On mobile, 2×2 grid (no arrows).

Each step card:
- Number badge (small circle, intellectual blue bg)
- Step title (font-semibold text-slate-900)
- 1-line description (text-sm text-slate-500)
- The whole card is a clickable link

Step data:
1. **Understand DSA** | "What it is and if it's right for your child" | href="/faq"
2. **Find schools** | "Search 1,300+ talent areas across 147 schools" | href="/dsa-finder"  
3. **Visit open houses** | "Know what to ask before you go" | href="/open-house-guide"
4. **Apply** | "Submit by 2 Jun 2026 via MOE portal" | href="https://www.moe.gov.sg/secondary/dsa" (external, show ExternalLink icon)

Step 4 card: use slightly different style (champagne-subtle bg) to indicate it's the action destination.

**Arrow connector** (desktop only, between cards): a small `→` in `text-slate-300` between each step card.

---

## Task 3: Update `app/page.tsx` to include both new components

Current order:
```tsx
<HeroSection>...</HeroSection>
<DsaStrategySection />
<OpenHouseFieldGuide />
<SeoTextBlock />
<ResourceCards />
```

New order:
```tsx
<HeroSection>...</HeroSection>
<ParentJourneyStrip />       ← NEW, import from @/components/ParentJourneyStrip
<DsaExplainerSection />      ← NEW, import from @/components/DsaExplainerSection
<DsaStrategySection />
<OpenHouseFieldGuide />
<SeoTextBlock />
<ResourceCards />
```

---

## Styling notes
- Card borders: `border border-[#e3ded5]` (existing pattern for warm card borders)
- Card shadow: `shadow-card` (defined in tailwind config)
- Card hover: `hover:shadow-card-hover transition`
- Rounded: `rounded-xl` for cards
- Background colors:
  - `bg-surface` = `#f8f6f1`
  - `bg-surface-subtle` = `#f2efe8`
  - `bg-white` for cards
- Don't use inline styles unless necessary
- Check `DsaStrategySection.tsx` and `OpenHouseFieldGuide.tsx` for reference patterns
