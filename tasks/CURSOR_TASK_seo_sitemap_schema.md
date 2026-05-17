# Cursor Task: SEO — Sitemap + Structured Data

## Files involved
- `app/sitemap.ts`
- `lib/seo.ts`
- `app/dsa-experience/page.tsx`
- `app/open-house-guide/page.tsx`
- `app/schools/page.tsx`
- `app/faq/page.tsx`

No file overlaps with CURSOR_TASK_nav_restructure — these two tasks can run in parallel.

---

## Change 1 — Add two missing pages to `app/sitemap.ts`

The file currently returns 8 URL entries. Add `/dsa-experience` and `/open-house-guide` in priority order.

Current array (relevant section, after `/dsa-guide` at 0.96 and `/dsa-interview` at 0.93):

```ts
    {
      url: `${base}/dsa-interview`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.93,
    },
    {
      url: `${base}/schools`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${base}/open-houses`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
```

After the `/open-houses` block (priority 0.9), insert the two new entries:

```ts
    {
      url: `${base}/dsa-experience`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${base}/open-house-guide`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.87,
    },
```

Result: the array will have 10 entries total, sorted by priority descending.

---

## Change 2 — Add Article schema helper to `lib/seo.ts`

At the end of `lib/seo.ts`, after the closing brace of `buildFaqStructuredData`, append this new exported function:

```ts
/**
 * /dsa-experience — Article schema for the DSA parent experience guide.
 */
export function buildDsaExperienceStructuredData(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The DSA Experience: What Parents Wish They Knew",
    description:
      "A complete guide to Direct School Admission in Singapore — how selectivity really works, what schools assess, real pathway examples, and the mistakes families make.",
    url: "https://dsalink.sg/dsa-experience",
    publisher: {
      "@type": "Organization",
      name: "DSALink",
      url: "https://dsalink.sg",
    },
    about: {
      "@type": "EducationalOccupationalProgram",
      name: "Direct School Admission (DSA)",
      description:
        "Singapore's Direct School Admission programme for Primary 6 students",
    },
  };
}
```

---

## Change 3 — Wire Article schema into `app/dsa-experience/page.tsx`

### 3a — Add import

At the top of `app/dsa-experience/page.tsx`, add the import. The file currently imports only from `"next"` and the page body component. Add:

```ts
import { buildDsaExperienceStructuredData } from "@/lib/seo";
```

### 3b — Inject JSON-LD script tag

The current default export is:

```tsx
export default function DsaExperiencePage() {
  return <DsaExperiencePageBody />;
}
```

Replace it with:

```tsx
export default function DsaExperiencePage() {
  const jsonLd = buildDsaExperienceStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DsaExperiencePageBody />
    </>
  );
}
```

---

## Change 4 — Add HowTo schema helper to `lib/seo.ts`

Immediately after `buildDsaExperienceStructuredData`, append:

```ts
/**
 * /open-house-guide — HowTo schema for the secondary school open house guide.
 */
export function buildOpenHouseGuideStructuredData(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Make the Most of Singapore Secondary School Open Houses",
    description:
      "A step-by-step guide for P6 parents attending secondary school open houses for DSA research.",
    step: [
      {
        "@type": "HowToStep",
        name: "Research schools before attending",
        text: "Check NSG results and school social media before open house day.",
      },
      {
        "@type": "HowToStep",
        name: "Prioritise CCA booths over auditorium talks",
        text: "The most useful information comes from current students at CCA booths, not official presentations.",
      },
      {
        "@type": "HowToStep",
        name: "Ask specific questions to staff",
        text: "Ask about DSA spots available, training schedules, and academic support systems.",
      },
      {
        "@type": "HowToStep",
        name: "Talk to currently-enrolled students",
        text: "Ask students about the actual CCA experience, academic workload, and whether they'd choose the same school again.",
      },
      {
        "@type": "HowToStep",
        name: "Observe school culture",
        text: "Notice whether student volunteers seem genuinely enthusiastic and what student work is displayed.",
      },
    ],
  };
}
```

---

## Change 5 — Wire HowTo schema into `app/open-house-guide/page.tsx`

### 5a — Add import

```ts
import { buildOpenHouseGuideStructuredData } from "@/lib/seo";
```

### 5b — Inject JSON-LD script tag

Current default export:

```tsx
export default function OpenHouseGuidePage() {
  return <OpenHouseGuidePageBody />;
}
```

Replace with:

```tsx
export default function OpenHouseGuidePage() {
  const jsonLd = buildOpenHouseGuideStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OpenHouseGuidePageBody />
    </>
  );
}
```

---

## Change 6 — Add OG image to `app/schools/page.tsx`

The current `openGraph` block in the static `metadata` export is:

```ts
  openGraph: {
    title: "School Directory 2026 | 147 Singapore Secondary Schools",
    description:
      "All 147 MOE secondary schools with PSLE COP 2025, ALP, LLP, DSA links and official websites.",
    type: "website",
    url: "/schools",
    siteName: "DSALink",
  },
```

Replace it with:

```ts
  openGraph: {
    title: "School Directory 2026 | 147 Singapore Secondary Schools",
    description:
      "All 147 MOE secondary schools with PSLE COP 2025, ALP, LLP, DSA links and official websites.",
    type: "website",
    url: "/schools",
    siteName: "DSALink",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
```

---

## Change 7 — Add OG image to `app/faq/page.tsx`

The current `openGraph` block in the static `metadata` export is:

```ts
  openGraph: {
    title: "DSA-Sec 2026 FAQ — Singapore Secondary School Admission Questions",
    description:
      "14 expert answers to the most common parent questions about DSA-Sec 2026 in Singapore — eligibility, dates, commitment, talent areas, PSLE COP, IP and SAP schools.",
    type: "article",
    url: "/faq",
    siteName: "DSALink",
  },
```

Replace it with:

```ts
  openGraph: {
    title: "DSA-Sec 2026 FAQ — Singapore Secondary School Admission Questions",
    description:
      "14 expert answers to the most common parent questions about DSA-Sec 2026 in Singapore — eligibility, dates, commitment, talent areas, PSLE COP, IP and SAP schools.",
    type: "article",
    url: "/faq",
    siteName: "DSALink",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
```

---

## Verification steps

1. Run `npm run build` — confirm zero TypeScript errors.
2. Fetch `https://dsalink.sg/sitemap.xml` (or `localhost:3000/sitemap.xml` in dev) and confirm 10 entries, including `/dsa-experience` at 0.88 and `/open-house-guide` at 0.87.
3. View source of `/dsa-experience` in browser — confirm a `<script type="application/ld+json">` tag is present with `"@type": "Article"`.
4. View source of `/open-house-guide` — confirm `<script type="application/ld+json">` with `"@type": "HowTo"` and 5 steps.
5. Use [Google Rich Results Test](https://search.google.com/test/rich-results) on `/dsa-experience` and `/open-house-guide` to validate structured data.
6. Inspect the OpenGraph tags on `/schools` and `/faq` (e.g. via [opengraph.xyz](https://www.opengraph.xyz) or view-source) — confirm `og:image` is present.
