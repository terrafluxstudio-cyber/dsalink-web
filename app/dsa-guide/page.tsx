import type { Metadata } from "next";
import { DsaGuidePageBody } from "@/components/DsaGuidePageBody";
import { buildDsaGuideStructuredData } from "@/lib/seo";

const PAGE_TITLE =
  "2026 Singapore DSA-Sec Timeline | Step-by-Step Parent Guide | DSALink";
const PAGE_DESCRIPTION =
  "Follow the official MOE 2026 DSA-Sec calendar: research and open houses, application window (6 May–2 Jun), selection, school preference (19–23 Oct), and results with PSLE. Key rules on commitment and posting groups.";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — Singapore DSA-Sec 2026 application timeline",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    keywords: [
      "DSA-Sec 2026 Singapore",
      "MOE DSA application window",
      "DSA timeline",
      "Secondary 1 DSA",
      "school preference DSA",
      "DSA commitment rule",
    ],
    alternates: { canonical: "/dsa-guide" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      type: "website",
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

export default function DsaGuidePage() {
  const jsonLd = buildDsaGuideStructuredData();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DsaGuidePageBody />
    </>
  );
}
