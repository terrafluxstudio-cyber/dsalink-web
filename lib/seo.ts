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

/** Schema.org ItemList + EducationalOrganization for /scores (server-rendered). */
export function buildScoresItemListJsonLd() {
  const base = getSiteUrl();
  const itemListElement = SCHOOL_COP_HISTORY.map((row, index) => {
    const cop = latestPsleCop2025(row);
    const url = `${base}/scores#school-${row.id}`;
    return {
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "EducationalOrganization",
        "@id": url,
        name: row.nameEn,
        url,
        ...(cop
          ? {
              additionalProperty: [
                {
                  "@type": "PropertyValue",
                  name: "PSLE COP 2025",
                  value: cop,
                },
              ],
            }
          : {}),
      },
    };
  });

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Singapore secondary schools — PSLE COP history",
    description:
      "Historical PSLE cut-off points (2021–2025) for Singapore secondary schools. Illustrative AL-style bands — verify on MOE SchoolFinder.",
    numberOfItems: itemListElement.length,
    itemListElement,
  };
}
