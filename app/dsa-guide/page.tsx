import type { Metadata } from "next";
import { DsaGuidePageBody } from "@/components/DsaGuidePageBody";
import { FAQ_QA } from "@/lib/dsa-guide-faq";
import { getSiteUrl } from "@/lib/seo";

const PAGE_TITLE =
  "DSA Singapore Guide 2026 | Direct School Admission Complete Guide | DSALink";
const PAGE_DESCRIPTION =
  "The complete Singapore DSA-Sec guide — what Direct School Admission is, the 2019 reforms, the 8 talent categories, 147 participating schools, the 2026 application timeline, interview prep, and how outcomes work. Built for P5/P6 families.";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — DSA Singapore Guide 2026",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    keywords: [
      "DSA Singapore guide 2026",
      "DSA secondary school Singapore",
      "Direct School Admission Singapore",
      "how does DSA work Singapore",
      "DSA-Sec guide",
      "DSA application Singapore",
      "DSA talent areas Singapore",
      "DSA timeline 2026",
      "DSA confirmed offer guide",
    ],
    alternates: { canonical: "/dsa-guide" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      type: "article",
      url: "/dsa-guide",
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
 * FAQPage JSON-LD — Google rich snippet eligibility.
 * EN-only (canonical). The 12 Q&A mirror the on-page FAQ accordion.
 */
function FaqStructuredData() {
  const base = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${base}/dsa-guide#faq`,
    mainEntity: FAQ_QA.map((item) => ({
      "@type": "Question",
      name: item.q.en,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.en,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** BreadcrumbList JSON-LD — Home > DSA Guide */
function BreadcrumbStructuredData() {
  const base = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "DSA Guide", item: `${base}/dsa-guide` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function DsaGuidePage() {
  return (
    <>
      <FaqStructuredData />
      <BreadcrumbStructuredData />
      <DsaGuidePageBody />
    </>
  );
}
