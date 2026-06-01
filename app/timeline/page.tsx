import type { Metadata } from "next";
import { TimelinePageBody } from "@/components/TimelinePageBody";

const PAGE_TITLE =
  "DSA-Sec 2026 Timeline | Key Dates for Singapore Parents | DSALink";
const PAGE_DESCRIPTION =
  "The DSA-Sec 2026 timeline at a glance — research phase, application window (5 May–2 Jun), interview season, results, S1 posting. Plain dates, no fluff. Full step-by-step in the DSA Guide.";

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
  return <TimelinePageBody />;
}
