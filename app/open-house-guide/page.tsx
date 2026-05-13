import type { Metadata } from "next";
import { OpenHouseGuidePageBody } from "@/components/OpenHouseGuidePageBody";

const PAGE_TITLE =
  "2026 Secondary School Open House Guide | Forum Tips, School Types & 10 Must-Ask Questions | DSALink";
const PAGE_DESCRIPTION =
  "The complete parent playbook for 2026 Singapore secondary open houses: how to shortlist schools, what IP/SAP/mainstream schools actually show, 10 questions DSA booth staff must answer, and a green-flag/red-flag checklist sourced from parent forums.";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — 2026 Secondary School Open House Master Guide",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    keywords: [
      "Singapore secondary school open house 2026",
      "DSA open house tips",
      "secondary school open house guide",
      "what to ask at open house Singapore",
      "IP SAP O-Level open house",
      "KiasuParents open house tips",
    ],
    alternates: { canonical: "/open-house-guide" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      type: "website",
      url: "/open-house-guide",
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

export default function OpenHouseGuidePage() {
  return <OpenHouseGuidePageBody />;
}
