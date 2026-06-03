import type { Metadata } from "next";
import { UnderRecruitedPathsPageBody } from "@/components/UnderRecruitedPathsPageBody";

const PAGE_TITLE =
  "Under-recruited DSA Paths — Lion Dance, Rare Instruments, Niche Sports | DSALink Singapore";
const PAGE_DESCRIPTION =
  "Ten under-recruited DSA-Sec talent paths in Singapore — female lion dance at NYGH, rare Chinese instruments, floorball goalkeeper, archery, sailing, fencing, softball, bowling, rare track events, squash. Honest timelines and the caps strategy can't beat.";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — Under-recruited DSA paths",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    keywords: [
      "DSA Singapore niche talents",
      "NYGH lion dance girls DSA",
      "Nanyang girls lion dance audition",
      "DSA female lion dance Singapore",
      "rare Chinese instrument DSA Singapore",
      "sheng suona zhongruan DSA",
      "floorball goalkeeper DSA Singapore",
      "DSA archery Singapore secondary",
      "DSA softball Singapore",
      "DSA bowling Singapore",
      "DSA pole vault Singapore",
      "DSA fencing Singapore",
      "DSA squash Singapore",
      "less crowded DSA paths Singapore",
      "DSA strategy 2026",
    ],
    alternates: { canonical: "/dsa-interview/under-recruited-paths" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      type: "article",
      url: "/dsa-interview/under-recruited-paths",
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

export default function UnderRecruitedPathsPage() {
  return <UnderRecruitedPathsPageBody />;
}
