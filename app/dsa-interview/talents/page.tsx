import type { Metadata } from "next";
import { TalentsIndexPageBody } from "@/components/TalentsIndexPageBody";

const PAGE_TITLE =
  "DSA Interview Prep by Talent — Sports, Music, Math | DSALink Singapore";
const PAGE_DESCRIPTION =
  "Talent-specific DSA-Sec interview and trial prep for Singapore parents. Sixteen talent areas across sports, performing arts, visual arts, language, STEM, and leadership — what coaches assess, sample questions, and participating schools. Updated for 2026.";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — DSA interview prep by talent",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    keywords: [
      "DSA basketball interview Singapore",
      "DSA football trial Singapore",
      "DSA swimming DSA-Sec",
      "DSA music audition Singapore",
      "DSA math olympiad Singapore",
      "DSA badminton trial",
      "DSA track field Singapore",
      "DSA martial arts Singapore",
      "DSA robotics Singapore",
      "DSA Chinese Language CLE Singapore",
      "DSA dance audition Singapore",
      "DSA drama audition Singapore",
      "DSA visual arts portfolio Singapore",
      "DSA hockey trial Singapore",
      "DSA squash trial Singapore",
      "DSA leadership Singapore secondary",
      "DSA talent areas Singapore secondary",
    ],
    alternates: { canonical: "/dsa-interview/talents" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      type: "website",
      url: "/dsa-interview/talents",
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

export default function TalentsIndexPage() {
  return <TalentsIndexPageBody />;
}
