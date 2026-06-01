import type { Metadata } from "next";
import { TimelinePageBody } from "@/components/TimelinePageBody";

const PAGE_TITLE =
  "2026 DSA-Sec Application Timeline | Key Dates for Singapore Parents | DSALink";
const PAGE_DESCRIPTION =
  "The full 2026 DSA-Sec application timeline — research phase, application window (5 May–2 Jun), interview & trial season, October preference exercise, results released with PSLE. Plain dates, with links to deeper prep at each phase.";

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
