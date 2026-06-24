import type { Metadata } from "next";
import { DsaExperiencePageBody } from "@/components/DsaExperiencePageBody";
import { buildDsaExperienceStructuredData } from "@/lib/seo";

const PAGE_TITLE =
  "How DSA Offers Really Work in Singapore (2026) | DSALink";
const PAGE_DESCRIPTION =
  "A practical guide to how DSA actually plays out: how offers interact with PSLE AL, school selectivity vs talent tiers, how sports, arts and leadership are assessed, the 2026 timeline, and the common mistakes to avoid.";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — Singapore DSA Experience Guide",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    keywords: [
      "Singapore DSA guide",
      "DSA experience parents",
      "DSA school selectivity",
      "DSA talent tier",
      "DSA 2026 timeline",
      "PSLE AL DSA offer",
    ],
    alternates: { canonical: "/dsa-experience" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      type: "article",
      url: "/dsa-experience",
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
