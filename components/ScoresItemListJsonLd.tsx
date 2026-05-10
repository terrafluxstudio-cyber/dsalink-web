import { buildScoresItemListJsonLd } from "@/lib/seo";

/** Injects ItemList JSON-LD for all schools on /scores (SEO). */
export function ScoresItemListJsonLd() {
  const jsonLd = buildScoresItemListJsonLd();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
