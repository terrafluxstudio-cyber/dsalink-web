import type { Metadata } from "next";
import { ScoresPageBody } from "@/components/ScoresPageBody";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildScoresPageJsonLd } from "@/lib/seo";

const SCORES_PAGE_TITLE =
  "PSLE COP 2026 | All 150+ Singapore Secondary Schools (5-Year History)";
const SCORES_PAGE_DESCRIPTION =
  "Official-based PSLE Cut-off Points from 2021 to 2025. Compare school trends and prepare for 2026 Secondary 1 posting.";

const SCORES_KEYWORDS = [
  "PSLE COP",
  "Secondary School Scores",
  "MOE SchoolFinder",
  "Singapore Education",
  "DSA 2026",
] as const;

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
    },
    twitter: {
      card: "summary_large_image",
      title: SCORES_PAGE_TITLE,
      description: SCORES_PAGE_DESCRIPTION,
    },
  };
}

/** PSLE COP dashboard; structured data for Rich Results (Dataset + ItemList). */
export default function ScoresPage() {
  const jsonLd = buildScoresPageJsonLd();
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
      </main>
      <SiteFooter />
    </>
  );
}
