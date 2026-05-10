import type { Metadata } from "next";
import { ScoresPageBody } from "@/components/ScoresPageBody";
import { ScoresPageFaq } from "@/components/ScoresPageFaq";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildScoresStructuredData } from "@/lib/seo";

const SCORES_PAGE_TITLE =
  "PSLE COP 2026 | All 150+ Singapore Secondary Schools (5-Year History)";
const SCORES_PAGE_DESCRIPTION =
  "Sortable five-year PSLE posting bands (2021–2025) for 150+ secondary schools: filter by name, zone, and programme, then validate every figure on MOE SchoolFinder before you shortlist.";

const SCORES_KEYWORDS = [
  "PSLE COP",
  "Secondary School Scores",
  "MOE SchoolFinder",
  "Singapore Education",
  "DSA 2026",
] as const;

const scoresOgImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — PSLE COP historical dashboard for Singapore schools",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: SCORES_PAGE_TITLE },
    description: SCORES_PAGE_DESCRIPTION,
    keywords: [...SCORES_KEYWORDS],
    alternates: {
      canonical: "/scores",
    },
    openGraph: {
      title: SCORES_PAGE_TITLE,
      description: SCORES_PAGE_DESCRIPTION,
      type: "website",
      url: "/scores",
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
      <main className="border-t border-intellectual/5 bg-hero-mesh">
        <ScoresPageBody />
        <ScoresPageFaq />
      </main>
      <SiteFooter />
    </>
  );
}
