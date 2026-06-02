import type { Metadata } from "next";
import { ScoresPageBody } from "@/components/ScoresPageBody";
import { PillarBackLink } from "@/components/PillarBackLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildScoresStructuredData } from "@/lib/seo";

const SCORES_PAGE_TITLE =
  "PSLE COP | Singapore Secondary Schools (AL 2023–2025)";
const SCORES_PAGE_DESCRIPTION =
  "Sortable PSLE posting bands (AL era, 2023–2025) for 140+ Singapore secondary schools: filter by name, zone, SAP, IP, and gender. Indicative data for reference only.";

const SCORES_KEYWORDS = [
  "PSLE COP",
  "Secondary School Scores",
  "Achievement Level",
  "Singapore Education",
  "DSA 2026",
] as const;

const scoresOgImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — PSLE COP Historical Dashboard for Singapore schools",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: SCORES_PAGE_TITLE },
    description: SCORES_PAGE_DESCRIPTION,
    keywords: [...SCORES_KEYWORDS],
    alternates: {
      canonical: "/psle-cop",
    },
    openGraph: {
      title: SCORES_PAGE_TITLE,
      description: SCORES_PAGE_DESCRIPTION,
      type: "website",
      url: "/psle-cop",
      siteName: "DSALink",
      images: [scoresOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: SCORES_PAGE_TITLE,
      description: SCORES_PAGE_DESCRIPTION,
      images: [scoresOgImage.url],
    },
  };
}

/** PSLE COP dashboard; structured data for Rich Results (Dataset + ItemList). */
export default function ScoresPage() {
  const jsonLd = buildScoresStructuredData();
  const jsonString = JSON.stringify(jsonLd);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonString }}
      />
      <SiteHeader />
      <main className="bg-surface">
        <ScoresPageBody />
      </main>
      <PillarBackLink />
      <SiteFooter />
    </>
  );
}
