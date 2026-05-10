import { SCHOOL_COP_HISTORY, type SchoolCopHistoryEntry } from "@/lib/data";

const DEFAULT_SITE_URL = "https://dsalink.sg";

/** Canonical origin for sitemap, JSON-LD, and metadataBase (no trailing slash). */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;
  try {
    const u = new URL(raw);
    return `${u.protocol}//${u.host}`;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

function latestPsleCop2025(row: SchoolCopHistoryEntry): string | null {
  const y = row.history["2025"];
  if (!y) return null;
  if (y.nonIp && y.ip) return `Non-IP ${y.nonIp}; IP ${y.ip}`;
  return y.nonIp ?? y.ip ?? null;
}

/**
 * Schema.org @graph: Dataset (PSLE COP as variableMeasured) + ItemList (schools).
 * JSON is built with JSON.stringify only (no manual concatenation) to avoid syntax errors.
 */
export function buildScoresPageJsonLd(): Record<string, unknown> {
  const base = getSiteUrl();
  const scoresUrl = `${base}/scores`;
  const datasetId = `${scoresUrl}#psle-cop-dataset`;
  const listId = `${scoresUrl}#school-itemlist`;

  const itemListElement = SCHOOL_COP_HISTORY.map((row, index) => {
    const cop = latestPsleCop2025(row);
    const itemUrl = `${scoresUrl}#school-${row.id}`;
    const description = cop
      ? `${row.nameEn} is a Singapore secondary school. Indicative 2025 PSLE COP (AL-style bands): ${cop}. Five-year history (2021–2025) on this page; verify all figures with MOE SchoolFinder.`
      : `${row.nameEn} is a Singapore secondary school. PSLE posting history (2021–2025) on this page; verify cut-offs with MOE SchoolFinder.`;

    const variableMeasured = {
      "@type": "PropertyValue",
      name: "PSLE COP",
      description:
        "Indicative PSLE Cut-Off Point (posting score) in AL-style notation for Secondary 1 admission planning — not an official MOE publication.",
      value: cop ?? "Refer to MOE SchoolFinder",
    };

    return {
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "EducationalOrganization",
        "@id": itemUrl,
        name: row.nameEn,
        url: itemUrl,
        description,
        variableMeasured,
      },
    };
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dataset",
        "@id": datasetId,
        name: "DSALink — Singapore secondary school PSLE COP (2021–2025)",
        description:
          "Curated indicative PSLE posting cut-off trends for 150+ Singapore secondary schools, aligned with public MOE releases for parent planning. This site is not affiliated with MOE; always confirm on MOE SchoolFinder.",
        url: scoresUrl,
        variableMeasured: {
          "@type": "PropertyValue",
          name: "PSLE COP",
          description:
            "PSLE Cut-Off Point: indicative Achievement Level (AL) style posting bands used for Secondary 1 posting comparison.",
        },
      },
      {
        "@type": "ItemList",
        "@id": listId,
        name: "Singapore secondary schools — PSLE COP listing",
        description:
          "Schools with English name, in-page URL anchor, short description, and PSLE COP as variableMeasured (latest 2025 band where available).",
        numberOfItems: itemListElement.length,
        isPartOf: { "@id": datasetId },
        itemListElement,
      },
    ],
  };
}
