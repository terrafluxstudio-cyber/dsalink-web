import type { Metadata } from "next";
import { DsaSearchCenter } from "@/components/DsaSearchCenter";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const DSA_PAGE_TITLE =
  "DSA 2026 Official Talent Areas & 147 School List - dsalink.sg";
const DSA_PAGE_DESCRIPTION =
  "Search official MOE SchoolFinder DSA-Sec 2026 talent areas across 147 Singapore secondary schools by school, category, and talent.";

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
      canonical: "/dsa",
    },
    openGraph: {
      title: DSA_PAGE_TITLE,
      description: DSA_PAGE_DESCRIPTION,
      type: "website",
      url: "/dsa",
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

export default function DsaPage() {
  return (
    <>
      <SiteHeader />
      <main className="border-t border-intellectual/5 bg-hero-mesh">
        <DsaSearchCenter />
      </main>
      <SiteFooter />
    </>
  );
}
