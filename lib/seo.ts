import {
  SCHOOL_COP_HISTORY,
  SCHOOL_OPEN_HOUSES,
  type SchoolCopHistoryEntry,
  type SchoolOpenHouse,
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

function openHouseToEvent(
  ev: SchoolOpenHouse,
  index: number,
  openHousesUrl: string,
): Record<string, unknown> {
  const eventId = `${openHousesUrl}#event-${index}`;
  const name = `${ev.nameEn} Open House`;
  const attendanceMode =
    ev.mode === "online"
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode";

  const location =
    ev.mode === "online"
      ? {
          "@type": "VirtualLocation",
          url: ev.sourceUrl,
          name: `${ev.nameEn} (online)`,
        }
      : {
          "@type": "Place",
          name: ev.nameEn,
          address: {
            "@type": "PostalAddress",
            streetAddress: ev.address,
            addressCountry: "SG",
          },
        };

  const description = [
    ev.timeEn,
    ev.mode === "online" ? "Delivery: online." : "Delivery: on-site at the school address.",
    `${ev.region} · ${ev.schoolType}.`,
    "Details may change — confirm on the school’s official DSA or admissions page.",
  ].join(" ");

  return {
    "@type": "Event",
    "@id": eventId,
    name,
    description,
    startDate: ev.startsAt,
    endDate: ev.endsAt,
    eventAttendanceMode: attendanceMode,
    eventStatus: "https://schema.org/EventScheduled",
    location,
    organizer: {
      "@type": "EducationalOrganization",
      name: ev.nameEn,
      url: ev.sourceUrl,
    },
    url: ev.sourceUrl,
    isAccessibleForFree: true,
  };
}

/**
 * Open-houses directory: ItemList pointing at Event nodes (one JSON-LD script).
 */
export function buildOpenHousesStructuredData(): Record<string, unknown> {
  const base = getSiteUrl();
  const openHousesUrl = `${base}/open-houses`;

  const events = SCHOOL_OPEN_HOUSES.map((ev, index) =>
    openHouseToEvent(ev, index, openHousesUrl),
  );

  const itemList = {
    "@type": "ItemList",
    "@id": `${openHousesUrl}#open-house-event-list`,
    name: "Singapore secondary school open houses (May 2026 season)",
    description:
      "Scheduled open-house sessions compiled from MOE-listed schools; dates may be TBC — verify with each institution.",
    numberOfItems: events.length,
    itemListElement: SCHOOL_OPEN_HOUSES.map((_, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@id": `${openHousesUrl}#event-${i}` },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [...events, itemList],
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
