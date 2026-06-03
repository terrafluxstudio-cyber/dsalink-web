import type { Metadata } from "next";
import { UnderRecruitedPathsPageBody } from "@/components/UnderRecruitedPathsPageBody";
import { getSiteUrl } from "@/lib/seo";

const PAGE_TITLE =
  "Under-recruited DSA Paths 2027 — Lion Dance, Rare Instruments, Niche Sports | DSALink Singapore";
const PAGE_DESCRIPTION =
  "Under-recruited DSA-Sec talent paths in Singapore for P5 families planning the 2027 cycle — female lion dance at NYGH, rare Chinese instruments (sheng, suona, zhongruan), floorball goalkeeper, archery, sailing, fencing, softball, bowling, rare track events, squash. Possible routes — not guarantees. Honest timelines, school lists, and the caps strategy can't beat.";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — Under-recruited DSA paths for 2027 planning",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    keywords: [
      "DSA Singapore niche talents 2027",
      "NYGH lion dance girls DSA",
      "Nanyang girls lion dance audition",
      "DSA female lion dance Singapore",
      "rare Chinese instrument DSA Singapore",
      "sheng suona zhongruan DSA",
      "floorball goalkeeper DSA Singapore",
      "DSA archery Singapore secondary",
      "DSA softball Singapore",
      "DSA bowling Singapore",
      "DSA pole vault Singapore",
      "DSA fencing Singapore",
      "DSA squash Singapore",
      "DSA sailing Singapore",
      "less crowded DSA paths Singapore",
      "DSA strategy 2027 P5",
      "P5 prep for DSA-Sec",
    ],
    alternates: { canonical: "/dsa-interview/under-recruited-paths" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      type: "article",
      url: "/dsa-interview/under-recruited-paths",
      siteName: "DSALink",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      images: [ogImage.url],
    },
  };
}

/**
 * Article JSON-LD — rich-snippet eligibility for the strategy page.
 * Headline + description mirror the canonical EN copy on the page.
 */
function ArticleStructuredData() {
  const base = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${base}/dsa-interview/under-recruited-paths#article`,
    headline:
      "Under-recruited DSA paths — possible routes when supply is thin at the school side",
    description: PAGE_DESCRIPTION,
    url: `${base}/dsa-interview/under-recruited-paths`,
    inLanguage: "en-SG",
    publisher: {
      "@type": "Organization",
      name: "DSALink",
      url: base,
    },
    isAccessibleForFree: true,
    about: [
      { "@type": "Thing", name: "Direct School Admission Singapore" },
      { "@type": "Thing", name: "DSA-Sec 2027" },
      { "@type": "Thing", name: "Female lion dance Singapore" },
      { "@type": "Thing", name: "Rare Chinese instrument DSA" },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** BreadcrumbList JSON-LD — Home > Interview > Under-recruited paths */
function BreadcrumbStructuredData() {
  const base = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      {
        "@type": "ListItem",
        position: 2,
        name: "Interview & Trial",
        item: `${base}/dsa-interview`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Under-recruited paths",
        item: `${base}/dsa-interview/under-recruited-paths`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function UnderRecruitedPathsPage() {
  return (
    <>
      <ArticleStructuredData />
      <BreadcrumbStructuredData />
      <UnderRecruitedPathsPageBody />
    </>
  );
}
