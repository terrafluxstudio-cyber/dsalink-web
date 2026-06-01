import type { Metadata } from "next";
import { OfferPageBody } from "@/components/OfferPageBody";

const PAGE_TITLE =
  "DSA Offer Selection 2026 | Confirmed Offer, Waitlist, S1 Posting | DSALink";
const PAGE_DESCRIPTION =
  "Decoding the DSA-Sec offer outcome — Confirmed Offer, Waitlist, Unsuccessful — and the October preference exercise that locks in your child's secondary school. Full guide drops November 2026.";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — DSA Offer Selection guide",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    keywords: [
      "DSA offer selection Singapore",
      "DSA confirmed offer 2026",
      "DSA waitlist Singapore",
      "DSA preference exercise October",
      "DSA S1 posting Singapore",
      "accept DSA offer Singapore",
    ],
    alternates: { canonical: "/offer" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      type: "website",
      url: "/offer",
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

export default function OfferPage() {
  return <OfferPageBody />;
}
