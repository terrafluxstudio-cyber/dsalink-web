import type { Metadata } from "next";
import { DsaResultsPageBody } from "@/components/DsaResultsPageBody";

const PAGE_TITLE =
  "DSA Results 2026 | Confirmed Offer, Waitlist, Counter-Offer Explained | DSALink";
const PAGE_DESCRIPTION =
  "When DSA-Sec results are released (24–25 Nov 2026) and what each outcome means — Confirmed Offer, Waitlist, Counter-Offer, Unsuccessful — plus the October preference exercise that locks in your child's secondary school.";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — DSA Results 2026 guide",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    keywords: [
      "DSA results 2026",
      "DSA results Singapore",
      "DSA results when",
      "DSA confirmed offer accept",
      "DSA waitlist Singapore",
      "DSA counter offer",
      "DSA preference exercise October",
      "DSA outcome Singapore",
    ],
    alternates: { canonical: "/dsa-results" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      type: "website",
      url: "/dsa-results",
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

export default function DsaResultsPage() {
  return <DsaResultsPageBody />;
}
