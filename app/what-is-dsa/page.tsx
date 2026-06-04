import type { Metadata } from "next";
import { WhatIsDsaPageBody } from "@/components/WhatIsDsaPageBody";
import { buildWhatIsDsaStructuredData } from "@/lib/seo";

const PAGE_TITLE =
  "What Is DSA-Sec? The Singapore Direct School Admission Explained | DSALink";
const PAGE_DESCRIPTION =
  "What Direct School Admission to Secondary (DSA-Sec) is, who it's for, how MOE's central portal works, and how a Confirmed Offer interacts with PSLE — written for Singapore parents in P4–P6.";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — What Is DSA-Sec explained",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    keywords: [
      "what is DSA Singapore",
      "DSA-Sec explained",
      "Direct School Admission secondary",
      "DSA vs S1 posting",
      "DSA confirmed offer Singapore",
      "how DSA works Singapore",
      "DSA eligibility Singapore",
    ],
    alternates: { canonical: "/what-is-dsa" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      type: "article",
      url: "/what-is-dsa",
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

export default function WhatIsDsaPage() {
  const jsonLd = buildWhatIsDsaStructuredData();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WhatIsDsaPageBody />
    </>
  );
}
