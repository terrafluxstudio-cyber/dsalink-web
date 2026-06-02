import type { Metadata } from "next";
import { PillarBackLink } from "@/components/PillarBackLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { OpenHouseTakeawaysBody } from "@/components/OpenHouseTakeawaysBody";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — DSA Open House Takeaways for Singapore parents",
} as const;

export const metadata: Metadata = {
  title: { absolute: "What Did Each DSA Open House Share? | DSALink" },
  description:
    "Key takeaways from 19 Singapore secondary schools that have already held their 2026 DSA open houses — talent areas, selection signals, and what parents should know.",
  keywords: [
    "DSA open house 2026 Singapore recap",
    "what schools look for DSA Singapore",
    "DSA open house takeaways Singapore",
    "secondary school DSA open house recap",
    "DSA talent area selection signals Singapore",
    "DSA open house notes Singapore parents",
    "what did schools say DSA open house Singapore",
    "DSA secondary school info sessions 2026",
  ],
  alternates: { canonical: "/open-house-takeaways" },
  openGraph: {
    title: "What Did Each DSA Open House Share? | DSALink",
    description:
      "Key takeaways from 19 Singapore secondary schools that have already held their 2026 DSA open houses — talent areas, selection signals, and what parents should know.",
    type: "article",
    url: "/open-house-takeaways",
    siteName: "DSALink",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Did Each DSA Open House Share? | DSALink",
    description:
      "Key takeaways from 19 Singapore secondary schools that have already held their 2026 DSA open houses — talent areas, selection signals, and what parents should know.",
    images: [ogImage.url],
  },
};

export default function OpenHouseTakeawaysPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-surface">
        <OpenHouseTakeawaysBody />
      </main>
      <PillarBackLink />
      <SiteFooter />
    </>
  );
}
