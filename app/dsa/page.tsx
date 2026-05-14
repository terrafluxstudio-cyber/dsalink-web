import type { Metadata } from "next";
import { DsaSearchCenter } from "@/components/DsaSearchCenter";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildDsaFinderStructuredData } from "@/lib/dsa-seo";

const DSA_PAGE_TITLE =
  "DSA 2026 Talent Areas: 1315 Categories Across 147 Schools";
const DSA_PAGE_DESCRIPTION =
  "Find schools for Concert Band, Robotics, and 1300+ DSA talents. Integrated with 2025 PSLE COP data.";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — official DSA talent areas and school list",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: DSA_PAGE_TITLE },
    description: DSA_PAGE_DESCRIPTION,
    keywords: [
      "DSA 2026",
      "DSA talent areas",
      "Singapore secondary schools",
      "MOE SchoolFinder",
      "Direct School Admission",
      "dsalink.sg",
    ],
    alternates: {
      canonical: "/dsa-finder",
    },
    openGraph: {
      title: DSA_PAGE_TITLE,
      description: DSA_PAGE_DESCRIPTION,
      type: "website",
      url: "/dsa-finder",
      siteName: "DSALink",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: DSA_PAGE_TITLE,
      description: DSA_PAGE_DESCRIPTION,
      images: [ogImage.url],
    },
  };
}

export default async function DsaPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const jsonLd = buildDsaFinderStructuredData();
  const { q } = await searchParams;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <SiteHeader />
      <main className="bg-surface">
        <DsaSearchCenter initialQuery={q ?? ""} />
      </main>
      <SiteFooter />
    </>
  );
}
