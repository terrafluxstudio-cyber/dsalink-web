import type { Metadata } from "next";
import { DsaExperiencePageBody } from "@/components/DsaExperiencePageBody";

const PAGE_TITLE =
  "Singapore DSA Experience Guide | School Selectivity, Talent Bars & 2026 Timeline | DSALink";
const PAGE_DESCRIPTION =
  "A practical English guide to Singapore DSA: how offers work with PSLE AL, school selectivity vs talent tiers, sports and arts assessment, leadership and STEM paths, the 2026 timeline, common mistakes, and a pre-application checklist.";

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
  return <DsaExperiencePageBody />;
}
