import {
  SCHOOL_COP_HISTORY,
  upcomingOpenHouses,
  type SchoolCopHistoryEntry,
} from "@/lib/data";
import { SCHOOL_DIRECTORY } from "@/lib/school-directory-data";

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

/**
 * DSA Guide page: WebPage + HowTo schema to help Google understand the step-by-step guide.
 */
export function buildDsaGuideStructuredData(): Record<string, unknown> {
  const base = getSiteUrl();
  const guideUrl = `${base}/dsa-guide`;
  const orgId = `${base}/#organization`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${guideUrl}#webpage`,
        name: "2026 Singapore DSA-Sec Timeline — Step-by-Step Parent Guide",
        url: guideUrl,
        description:
          "Official MOE 2026 DSA-Sec calendar with application window, selection, school preference, and PSLE results. Key rules on commitment and posting groups.",
        inLanguage: "en-SG",
        publisher: { "@id": orgId },
        isPartOf: { "@id": `${base}/#website` },
        about: {
          "@type": "Thing",
          name: "Direct School Admission (DSA-Sec) Singapore 2026",
        },
      },
      {
        "@type": "HowTo",
        "@id": `${guideUrl}#howto`,
        name: "How to Apply for DSA-Sec 2026 in Singapore",
        description:
          "Step-by-step guide to the 2026 MOE DSA-Sec application process for Primary 6 students and parents in Singapore.",
        url: guideUrl,
        publisher: { "@id": orgId },
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Research Schools and Open Houses",
            text: "Identify secondary schools that offer DSA in your child's talent area. Attend school open houses held between April and June 2026 to learn about programmes and selection criteria.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Submit DSA Application (6 May – 2 Jun 2026)",
            text: "Log in to the MOE DSA-Sec Portal and submit applications. Students may apply to multiple schools but can hold only one confirmed offer.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Attend Selection Exercises (Jun – Sep 2026)",
            text: "Schools conduct trials, interviews, and auditions. Results are released by 12 September 2026.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Indicate School Preference (19 – 23 Oct 2026)",
            text: "Students who receive DSA offers indicate their school preference in the Centralised DSA-Sec process. Those who accept an offer are bound by the Commitment Rule.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Receive S1 Posting Results",
            text: "DSA students will be posted to their confirmed DSA school and will not participate in the S1 Posting Exercise. Posting results are released with PSLE results in November.",
          },
        ],
      },
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

  const faqs = [
    {
      q: "What is DSA-Sec (Direct School Admission) in Singapore?",
      a: "DSA-Sec is the Direct School Admission exercise for Secondary One entry in Singapore. It allows Primary 6 students to gain admission to a secondary school based on their talents and achievements in areas such as sports, performing arts, science, technology, and language — before the release of PSLE results. MOE runs the exercise annually, with applications typically open from May to June.",
    },
    {
      q: "Who is eligible for DSA-Sec 2026?",
      a: "All Primary 6 students in Singapore — including those in MOE mainstream schools, Integrated Programme (IP) schools, and Special Assistance Plan (SAP) schools — are eligible to apply for DSA-Sec 2026. International students studying in Singapore may also apply, subject to each school's criteria.",
    },
    {
      q: "When is the DSA-Sec 2026 application period?",
      a: "The DSA-Sec 2026 application window runs from 6 May 2026 to 2 June 2026 at 16:30 SGT. Applications are submitted through the official MOE DSA-Sec Portal. Selection exercises (interviews, trials, auditions) are conducted by schools between June and September 2026.",
    },
    {
      q: "How many schools can my child apply to under DSA-Sec?",
      a: "There is no fixed cap on the number of schools a student may apply to for DSA-Sec. Each student may hold only one DSA confirmed offer at any time. A student can apply to multiple schools across different talent domains.",
    },
    {
      q: "What is the Commitment Rule in DSA-Sec?",
      a: "Students who accept a DSA-Sec offer are bound by the Commitment Rule. They must honour the offer and will be posted to that school through DSA — they cannot participate in the S1 Posting Exercise and cannot transfer based on PSLE results. Carefully research schools before accepting any offer.",
    },
    {
      q: "What are the talent areas accepted for DSA-Sec?",
      a: "Common DSA talent areas include: Sports (30+ disciplines), Performing Arts (music, dance, drama), Visual Arts, Science & Technology (robotics, coding, biomedical science), Humanities (debate, journalism), Language (bilingualism, literary arts), and Leadership. Each school publishes its own list of DSA talent domains.",
    },
    {
      q: "What is PSLE COP and how does it relate to DSA?",
      a: "PSLE COP (Cut-Off Point) is the posting score of the last student admitted to a secondary school through the S1 Posting Exercise. DSA students are posted to their confirmed school regardless of PSLE results, so COP does not directly affect DSA students — but it gives parents a sense of a school's academic profile. DSALink publishes 2023–2025 PSLE COP data for all 147 schools.",
    },
    {
      q: "Can my child still take PSLE after accepting a DSA-Sec offer?",
      a: "Yes. Students who have accepted a DSA-Sec offer must still sit the PSLE. Regardless of their PSLE score, they will be posted to their confirmed DSA school and will not participate in the S1 Posting Exercise.",
    },
    {
      q: "What is the Integrated Programme (IP) in Singapore secondary schools?",
      a: "The Integrated Programme (IP) allows students to bypass the O-Level examination and proceed directly to A-Levels, IB, or the NUS High Diploma after six years. IP schools include Raffles Institution, Hwa Chong Institution, NUS High School, SOTA, and others. Many IP schools admit students via DSA.",
    },
    {
      q: "What is a SAP (Special Assistance Plan) school in Singapore?",
      a: "SAP schools support bilingual education in English and Mandarin, with a focus on Chinese culture and language. Examples include Hwa Chong Institution, Nanyang Girls' High School, Catholic High School, and Dunman High School. SAP schools use Higher Chinese Language (HCL) grades in their PSLE COP notation.",
    },
    {
      q: "What is an Applied Learning Programme (ALP) in Singapore schools?",
      a: "Applied Learning Programmes (ALPs) are MOE-approved school-based programmes that connect academic learning to real-world contexts — for example, STEM, journalism, environmental sustainability, or the arts. Each secondary school has one ALP. ALP details are listed on MOE SchoolFinder and in the DSALink school directory.",
    },
    {
      q: "What is a Lifelong Learning Programme (LLP) in Singapore schools?",
      a: "Lifelong Learning Programmes (LLPs) focus on sports, outdoor education, performing arts, or community youth leadership to develop values and character. Each secondary school has one LLP. LLP details are listed on MOE SchoolFinder and in the DSALink school directory.",
    },
    {
      q: "How can I prepare my child for DSA-Sec selection exercises?",
      a: "Preparation depends on the talent area. For sports: consistent training and competition records. For performing arts: graded examination certifications (ABRSM, Trinity) and performance experience. For science and technology: competition results (SSEF, Olympiad) and project portfolios. For all areas: attend open houses (May 2026) to understand each school's criteria, and start building a portfolio in Primary 4–5.",
    },
    {
      q: "Where can I find secondary school open house dates for May 2026?",
      a: "DSALink's open house calendar at dsalink.sg/open-houses lists May 2026 sessions for all 147 MOE secondary schools — including dates, on-site vs. online mode, and direct links to each school's official DSA or admissions page.",
    },
  ];

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
        mainEntity: faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
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

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The DSA Experience: What Parents Wish They Knew",
    description:
      "A complete guide to Direct School Admission in Singapore — how selectivity really works, what schools assess, real pathway examples, and the mistakes families make.",
    url: pageUrl,
    publisher: {
      "@type": "Organization",
      name: "DSALink",
      url: base,
    },
    about: {
      "@type": "EducationalOccupationalProgram",
      name: "Direct School Admission (DSA)",
      description:
        "Singapore's Direct School Admission programme for Primary 6 students",
    },
  };
}

/**
 * /open-house-guide — HowTo schema for the secondary school open house guide.
 */
export function buildOpenHouseGuideStructuredData(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Make the Most of Singapore Secondary School Open Houses",
    description:
      "A step-by-step guide for P6 parents attending secondary school open houses for DSA research.",
    step: [
      {
        "@type": "HowToStep",
        name: "Research schools before attending",
        text: "Check NSG results and school social media before open house day.",
      },
      {
        "@type": "HowToStep",
        name: "Prioritise CCA booths over auditorium talks",
        text: "The most useful information comes from current students at CCA booths, not official presentations.",
      },
      {
        "@type": "HowToStep",
        name: "Ask specific questions to staff",
        text: "Ask about DSA spots available, training schedules, and academic support systems.",
      },
      {
        "@type": "HowToStep",
        name: "Talk to currently-enrolled students",
        text: "Ask students about the actual CCA experience, academic workload, and whether they'd choose the same school again.",
      },
      {
        "@type": "HowToStep",
        name: "Observe school culture",
        text: "Notice whether student volunteers seem genuinely enthusiastic and what student work is displayed.",
      },
    ],
  };
}
