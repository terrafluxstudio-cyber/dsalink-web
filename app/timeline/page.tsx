import type { Metadata } from "next";
import { TimelinePageBody } from "@/components/TimelinePageBody";
import { buildTimelineStructuredData } from "@/lib/seo";

const PAGE_TITLE =
  "DSA Timeline 2026: Key Dates & Calendar (Singapore) | DSALink";
const PAGE_DESCRIPTION =
  "Every key DSA-Sec 2026 date in one place: the application window (6 May–2 Jun), interview & trial season, the October preference exercise, and results released with PSLE — plus what to prepare at each stage.";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — DSA-Sec 2026 timeline",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    keywords: [
      "DSA timeline 2026",
      "DSA-Sec key dates",
      "Singapore DSA application window",
      "DSA interview period",
      "DSA results Singapore",
    ],
    alternates: { canonical: "/timeline" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      type: "website",
      url: "/timeline",
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

export default function TimelinePage() {
  const jsonLd = buildTimelineStructuredData();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TimelinePageBody />
    </>
  );
}
