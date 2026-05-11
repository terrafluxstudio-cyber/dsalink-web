import {
  SCHOOL_COP_HISTORY,
  SCHOOL_OPEN_HOUSES,
  type SchoolCopHistoryEntry,
} from "@/lib/data";

const DEFAULT_SITE_URL = "https://dsalink.sg";

/** Publisher contact for Organization / JSON-LD (matches report-error mailto). */
export const SITE_CONTACT_EMAIL = "terrafluxstudio@gmail.com";

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

/** In-page / footer disclaimer anchor (see `LegalDisclaimer` id). */
export function getDisclaimerLicenseUrl(): string {
  return `${getSiteUrl()}/#site-disclaimer`;
}

/**
 * Homepage: WebSite + Organization (single script tag, one @graph).
 * Logo uses OG route as placeholder until a dedicated square asset ships.
 */
export function buildHomeStructuredData(): Record<string, unknown> {
  const base = getSiteUrl();
  const orgId = `${base}/#organization`;
  const websiteId = `${base}/#website`;
  const logoUrl = `${base}/opengraph-image`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "DSALink",
        url: base,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
          width: 1200,
          height: 630,
          caption: "Placeholder — replace with square brand logo in production",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Data corrections and general inquiries",
          email: SITE_CONTACT_EMAIL,
          areaServed: "SG",
          availableLanguage: ["en", "zh", "ms", "ta"],
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: "DSALink",
        url: base,
        publisher: { "@id": orgId },
        inLanguage: "en-SG",
      },
    ],
  };
}

/**
 * Open-houses directory: WebPage + ItemList of schools.
 * Avoid Event schema because open-house details are informational and may be TBC;
 * Google requires event-specific fields that this site should not imply.
 */
export function buildOpenHousesStructuredData(): Record<string, unknown> {
  const base = getSiteUrl();
  const openHousesUrl = `${base}/open-houses`;
  const pageId = `${openHousesUrl}#webpage`;
  const listId = `${openHousesUrl}#open-house-school-list`;

  const itemList = {
    "@type": "ItemList",
    "@id": listId,
    name: "Singapore secondary school open houses (May 2026 season)",
    description:
      "Directory of school open-house and admissions information compiled from public school resources; verify details with each institution.",
    numberOfItems: SCHOOL_OPEN_HOUSES.length,
    isPartOf: { "@id": pageId },
    itemListElement: SCHOOL_OPEN_HOUSES.map((school, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "EducationalOrganization",
        "@id": `${openHousesUrl}#school-${i}`,
        name: school.nameEn,
        url: school.sourceUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: school.address,
          addressCountry: "SG",
        },
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        name: "Singapore secondary school open houses",
        url: openHousesUrl,
        description:
          "Singapore secondary school open-house and admissions links compiled for parent reference.",
        mainEntity: { "@id": listId },
      },
      itemList,
    ],
  };
}

function latestPsleCop2025(row: SchoolCopHistoryEntry): string | null {
  const y = row.byYear["2025"];
  if (!y) return null;
  const parts: string[] = [];
  if (y.g3NonAffiliated) parts.push(`G3 ${y.g3NonAffiliated}`);
  if (y.indicativeNonIp) parts.push(`Indicative ${y.indicativeNonIp}`);
  if (y.ip) parts.push(`IP ${y.ip}`);
  return parts.length ? parts.join("; ") : null;
}

/**
 * Schema.org @graph for /scores: Dataset (with creator, license) + ItemList.
 * JSON via JSON.stringify only to avoid syntax errors.
 */
export function buildScoresStructuredData(): Record<string, unknown> {
  const base = getSiteUrl();
  const scoresUrl = `${base}/scores`;
  const datasetId = `${scoresUrl}#psle-cop-dataset`;
  const listId = `${scoresUrl}#school-itemlist`;
  const licenseUrl = getDisclaimerLicenseUrl();

  const itemListElement = SCHOOL_COP_HISTORY.map((row, index) => {
    const cop = latestPsleCop2025(row);
    const itemUrl = `${scoresUrl}#school-${row.id}`;
    const description = cop
      ? `${row.nameEn} is a Singapore secondary school. Indicative 2025 PSLE COP (AL-style bands): ${cop}. AL-era history (2023–2025) on this page for reference only; confirm details on the school's official website.`
      : `${row.nameEn} is a Singapore secondary school. PSLE posting history (2023–2025) on this page for reference only; confirm details on the school's official website.`;

    const variableMeasured = {
      "@type": "PropertyValue",
      name: "PSLE COP",
      description:
        "Indicative PSLE Cut-Off Point (posting score) in AL-style notation for Secondary 1 admission planning — aggregated from public sources, not an official MOE publication.",
      value: cop ?? "Not published on this record",
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
        name: "DSALink — Singapore secondary school PSLE COP (2023–2025)",
        description:
          "Indicative PSLE posting cut-off trends for Singapore secondary schools, aggregated from public education resources for reference only. Not affiliated with MOE; for official information refer to each school's website.",
        url: scoresUrl,
        license: licenseUrl,
        creator: {
          "@type": "Organization",
          name: "Terraflux Studio",
        },
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
