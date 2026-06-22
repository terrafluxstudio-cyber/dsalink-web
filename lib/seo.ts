import {
  SCHOOL_COP_HISTORY,
  upcomingOpenHouses,
  type SchoolCopHistoryEntry,
} from "@/lib/data";
import { SCHOOL_DIRECTORY } from "@/lib/school-directory-data";
import { TALENT_SLUGS } from "@/lib/talentSlugs";
import { FAQ_ITEMS } from "@/lib/faq-content";

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
  return "https://creativecommons.org/licenses/by-nc/4.0/";
}

/**
 * Homepage: Organization + WebSite + WebPage (single script tag, one @graph).
 * Logo is the square 512x512 brand asset (required for Knowledge Panel / bylines).
 */
export function buildHomeStructuredData(): Record<string, unknown> {
  const base = getSiteUrl();
  const orgId = `${base}/#organization`;
  const websiteId = `${base}/#website`;
  const webpageId = `${base}/#webpage`;
  const logoUrl = `${base}/logo.png`;

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
          width: 512,
          height: 512,
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
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
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: base,
        name: "DSALink — Singapore DSA-Sec 2026 Guide for P6 Parents",
        isPartOf: { "@id": websiteId },
        publisher: { "@id": orgId },
        inLanguage: "en-SG",
        about: {
          "@type": "EducationalOccupationalProgram",
          name: "Direct School Admission (DSA-Sec)",
          description:
            "Singapore MOE's talent-based Secondary 1 admission programme for Primary 6 students",
        },
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
  const schools = upcomingOpenHouses();

  const itemList = {
    "@type": "ItemList",
    "@id": listId,
    name: "Singapore secondary school open houses (May 2026 season)",
    description:
      "Directory of school open-house and admissions information compiled from public school resources; verify details with each institution.",
    numberOfItems: schools.length,
    isPartOf: { "@id": pageId },
    itemListElement: schools.map((school, i) => ({
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
          url: "https://dsalink.sg",
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

/**
 * /schools — School Directory: WebPage (CollectionPage) + ItemList of 147 schools
 * as EducationalOrganization. Compact form to keep JSON-LD size reasonable.
 */
export function buildSchoolDirectoryStructuredData(): Record<string, unknown> {
  const base = getSiteUrl();
  const pageUrl = `${base}/schools`;
  const pageId = `${pageUrl}#webpage`;
  const listId = `${pageUrl}#school-list`;

  const itemListElement = SCHOOL_DIRECTORY.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": ["EducationalOrganization", "School"],
      "@id": `${pageUrl}#school-${i}`,
      name: s.nameEn,
      ...(s.nameZh ? { alternateName: s.nameZh } : {}),
      url: s.officialWebsite,
      sameAs: [s.moeUrl, s.dsaUrl].filter(Boolean),
      address: {
        "@type": "PostalAddress",
        streetAddress: s.address,
        addressCountry: "SG",
        addressLocality: "Singapore",
      },
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": pageId,
        name: "Singapore Secondary School Directory 2026",
        url: pageUrl,
        description:
          "All 147 MOE secondary schools in Singapore with PSLE COP 2025 posting bands, Applied Learning Programme, Lifelong Learning Programme, and direct links to DSA pages.",
        inLanguage: "en-SG",
        publisher: { "@id": `${base}/#organization` },
        isPartOf: { "@id": `${base}/#website` },
        mainEntity: { "@id": listId },
      },
      {
        "@type": "ItemList",
        "@id": listId,
        name: "Singapore secondary schools — DSA directory 2026",
        numberOfItems: itemListElement.length,
        itemListElement,
      },
    ],
  };
}

/**
 * /faq — FAQPage schema targeting high-volume "DSA Singapore" People Also Ask queries.
 */
export function buildFaqStructuredData(): Record<string, unknown> {
  const base = getSiteUrl();
  const faqUrl = `${base}/faq`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${faqUrl}#webpage`,
        name: "DSA-Sec 2026 FAQ — Singapore Secondary School Admission Questions Answered",
        url: faqUrl,
        description:
          "Answers to the most common questions about Singapore's DSA-Sec 2026: eligibility, application dates, commitment rules, talent areas, PSLE COP, IP, SAP, ALP and LLP.",
        inLanguage: "en-SG",
        publisher: { "@id": `${base}/#organization` },
        isPartOf: { "@id": `${base}/#website` },
        mainEntity: { "@id": `${faqUrl}#faqpage` },
      },
      {
        "@type": "FAQPage",
        "@id": `${faqUrl}#faqpage`,
        name: "DSA-Sec 2026 Frequently Asked Questions",
        url: faqUrl,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.q.en,
          acceptedAnswer: { "@type": "Answer", text: item.a.en },
        })),
      },
    ],
  };
}

/**
 * /dsa-experience — Article schema for the DSA parent experience guide.
 */
export function buildDsaExperienceStructuredData(): Record<string, unknown> {
  const base = getSiteUrl();
  const pageUrl = `${base}/dsa-experience`;
  const org = {
    "@type": "Organization",
    name: "DSALink",
    url: base,
    logo: { "@type": "ImageObject", url: `${base}/logo.png`, width: 512, height: 512 },
  };

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: "The DSA Experience: What Parents Wish They Knew",
    description:
      "A complete guide to Direct School Admission in Singapore — how selectivity really works, what schools assess, real pathway examples, and the mistakes families make.",
    url: pageUrl,
    inLanguage: "en-SG",
    image: `${base}/opengraph-image`,
    datePublished: "2026-05-15",
    dateModified: "2026-06-08",
    author: org,
    publisher: org,
    about: {
      "@type": "EducationalOccupationalProgram",
      name: "Direct School Admission (DSA)",
      description:
        "Singapore's Direct School Admission programme for Primary 6 students",
    },
    isAccessibleForFree: true,
  };
}

/**
 * /blog/[slug] — BlogPosting schema for any blog post.
 * Pass the post's slug, title, excerpt, ISO date, and optional heroImage path.
 */
export function buildBlogPostStructuredData(opts: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  heroImage?: string;
}): Record<string, unknown> {
  const base = getSiteUrl();
  const url = `${base}/blog/${opts.slug}`;
  const orgId = `${base}/#organization`;
  const image = opts.heroImage
    ? (opts.heroImage.startsWith("http") ? opts.heroImage : `${base}${opts.heroImage}`)
    : `${base}/opengraph-image`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        headline: opts.title,
        description: opts.excerpt,
        image,
        datePublished: opts.date,
        dateModified: opts.date,
        url,
        author: { "@id": orgId },
        publisher: { "@id": orgId },
        inLanguage: "en-SG",
        isAccessibleForFree: true,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: base },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${base}/blog` },
          { "@type": "ListItem", position: 3, name: opts.title, item: url },
        ],
      },
      {
        "@type": "Organization",
        "@id": orgId,
        name: "DSALink",
        url: base,
        logo: { "@type": "ImageObject", url: `${base}/logo.png`, width: 512, height: 512 },
      },
    ],
  };
}

/**
 * /what-is-dsa — Article schema for the DSA explainer page.
 * Targets "what is DSA Singapore" / "how does DSA work" People Also Ask queries.
 */
export function buildWhatIsDsaStructuredData(): Record<string, unknown> {
  const base = getSiteUrl();
  const pageUrl = `${base}/what-is-dsa`;
  const org = {
    "@type": "Organization",
    name: "DSALink",
    url: base,
    logo: { "@type": "ImageObject", url: `${base}/logo.png`, width: 512, height: 512 },
  };
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline:
      "What is DSA-Sec? Singapore's Direct School Admission explained",
    description:
      "Plain-English explainer of Singapore's Direct School Admission (DSA-Sec) for Primary 6 families — how it works, who it's for, how DSA interacts with PSLE, and what the 2019 reforms changed.",
    url: pageUrl,
    inLanguage: "en-SG",
    image: `${base}/opengraph-image`,
    datePublished: "2026-05-10",
    dateModified: "2026-06-22",
    author: org,
    publisher: org,
    about: {
      "@type": "EducationalOccupationalProgram",
      name: "Direct School Admission (DSA-Sec)",
      description:
        "Singapore MOE's talent-based admission route into Secondary One for Primary 6 students.",
    },
    isAccessibleForFree: true,
  };
}

/**
 * /timeline — Article schema with Event-like structure for the 2026 DSA timeline.
 * Helps "DSA timeline 2026" / "when is DSA application" queries.
 */
export function buildTimelineStructuredData(): Record<string, unknown> {
  const base = getSiteUrl();
  const pageUrl = `${base}/timeline`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: "DSA-Sec 2026 Timeline — every key date from May to November",
        description:
          "The full DSA-Sec 2026 calendar for Singapore P6 families: application window May-June, interview & trial June-August, October Preference Exercise, November PSLE-day final placement, S1 Posting.",
        url: pageUrl,
        inLanguage: "en-SG",
        publisher: { "@type": "Organization", name: "DSALink", url: base },
        isAccessibleForFree: true,
      },
      {
        "@type": "Event",
        name: "DSA-Sec 2026 Application Window",
        startDate: "2026-05-06",
        endDate: "2026-06-02",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        location: {
          "@type": "VirtualLocation",
          url: "https://www.moe.gov.sg/secondary/dsa",
        },
        description:
          "MOE DSA-Sec Portal application window for Singapore P6 students. Closes 4:30pm SGT on 2 June 2026.",
        organizer: {
          "@type": "GovernmentOrganization",
          name: "Singapore Ministry of Education",
          url: "https://www.moe.gov.sg",
        },
      },
      {
        "@type": "Event",
        name: "DSA-Sec 2026 October Preference Exercise",
        startDate: "2026-10-19",
        endDate: "2026-10-23",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        location: {
          "@type": "VirtualLocation",
          url: "https://www.moe.gov.sg/secondary/dsa/preferences",
        },
        description:
          "5-day window via the DSA-Sec Portal where families rank up to 3 schools that issued a Confirmed Offer or Waitlist. The ranking locks in the final school placement.",
        organizer: {
          "@type": "GovernmentOrganization",
          name: "Singapore Ministry of Education",
          url: "https://www.moe.gov.sg",
        },
      },
    ],
  };
}

/**
 * /dsa-interview/talents — CollectionPage schema for the talent index hub.
 * Each live talent is an ItemList entry, supporting talent-area discovery.
 */
export function buildTalentsIndexStructuredData(): Record<string, unknown> {
  const base = getSiteUrl();
  const pageUrl = `${base}/dsa-interview/talents`;

  // Full talent list (dynamic — stays in sync as talents are added).
  const talents = TALENT_SLUGS;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collection`,
    name: "DSA-Sec Talent Prep Pages — All Singapore DSA Talent Areas",
    description:
      "Comprehensive index of DSA-Sec talent prep pages for Singapore P6 families. Each talent page covers what trial coaches assess, sample interview questions, and participating Singapore secondary schools.",
    url: pageUrl,
    inLanguage: "en-SG",
    publisher: { "@type": "Organization", name: "DSALink", url: base },
    isAccessibleForFree: true,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: talents.length,
      itemListElement: talents.map((slug, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${base}/dsa-interview/${slug}`,
      })),
    },
  };
}

/**
 * /dsa-statistics — Dataset schema (citation-friendly) + breadcrumb.
 */
export function buildDsaStatsStructuredData(opts: {
  schools: number;
  offerings: number;
  distinctTalents: number;
  compiledOn: string;
}): Record<string, unknown> {
  const base = getSiteUrl();
  const pageUrl = `${base}/dsa-statistics`;
  const orgId = `${base}/#organization`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: base },
          { "@type": "ListItem", position: 2, name: "DSA Guide", item: `${base}/dsa-guide` },
          { "@type": "ListItem", position: 3, name: "DSA statistics", item: pageUrl },
        ],
      },
      {
        "@type": "Dataset",
        "@id": `${pageUrl}#dataset`,
        name: "DSA-Sec 2026 talent areas across Singapore secondary schools",
        description:
          "Aggregate statistics on Singapore Direct School Admission (DSA-Sec): number of secondary schools offering DSA, total talent-area offerings, distinct talent areas, breakdown by category, and the most-offered talent areas. Compiled from the official MOE SchoolFinder DSA listings.",
        url: pageUrl,
        isAccessibleForFree: true,
        creator: { "@id": orgId },
        publisher: { "@id": orgId },
        license: getDisclaimerLicenseUrl(),
        temporalCoverage: "2026",
        dateModified: opts.compiledOn,
        spatialCoverage: { "@type": "Place", name: "Singapore" },
        variableMeasured: [
          { "@type": "PropertyValue", name: "Schools offering DSA", value: opts.schools },
          { "@type": "PropertyValue", name: "Talent-area offerings", value: opts.offerings },
          { "@type": "PropertyValue", name: "Distinct talent areas", value: opts.distinctTalents },
        ],
      },
      { "@type": "Organization", "@id": orgId, name: "DSALink", url: base },
    ],
  };
}

/**
 * Individual talent prep page (/dsa-interview/[slug]).
 * @graph: BreadcrumbList + Article + (optional) FAQPage built from the
 * talent-specific interview questions. FAQ uses ONLY talent-specific questions
 * (not the shared common deck) so each page's FAQ content is unique.
 */
export function buildTalentPageStructuredData(opts: {
  slug: string;
  label: string;
  description: string;
  faqs: { q: string; a: string }[];
}): Record<string, unknown> {
  const base = getSiteUrl();
  const pageUrl = `${base}/dsa-interview/${opts.slug}`;
  const orgId = `${base}/#organization`;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "DSA Guide", item: `${base}/dsa-guide` },
        { "@type": "ListItem", position: 2, name: "Interview Prep", item: `${base}/dsa-interview` },
        { "@type": "ListItem", position: 3, name: "Talents", item: `${base}/dsa-interview/talents` },
        { "@type": "ListItem", position: 4, name: `${opts.label} DSA Interview Prep`, item: pageUrl },
      ],
    },
    {
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: `${opts.label} DSA Interview Prep`,
      description: opts.description,
      about: `${opts.label} Direct School Admission (DSA-Sec) in Singapore`,
      url: pageUrl,
      mainEntityOfPage: pageUrl,
      inLanguage: "en-SG",
      image: `${base}/dsa-interview/${opts.slug}/opengraph-image`,
      isAccessibleForFree: true,
      author: { "@id": orgId },
      publisher: { "@id": orgId },
    },
    {
      "@type": "Organization",
      "@id": orgId,
      name: "DSALink",
      url: base,
    },
  ];

  if (opts.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: opts.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

/**
 * /open-house-guide — Article schema. Was HowTo, but Google removed HowTo rich
 * results in Sept 2023, so Article is the correct type (still useful for AI citation).
 */
export function buildOpenHouseGuideStructuredData(): Record<string, unknown> {
  const base = getSiteUrl();
  const pageUrl = `${base}/open-house-guide`;
  const orgId = `${base}/#organization`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: "How to Make the Most of Singapore Secondary School Open Houses",
    description:
      "A practical guide for P6 parents attending secondary school open houses for DSA research — what to prioritise, what to ask staff and students, and how to read school culture.",
    url: pageUrl,
    inLanguage: "en-SG",
    image: `${base}/opengraph-image`,
    datePublished: "2026-05-20",
    dateModified: "2026-06-08",
    author: { "@id": orgId },
    publisher: { "@id": orgId },
    isAccessibleForFree: true,
  };
}
