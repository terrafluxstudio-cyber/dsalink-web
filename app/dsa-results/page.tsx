import type { Metadata } from "next";
import { DsaResultsPageBody } from "@/components/DsaResultsPageBody";
import { getSiteUrl } from "@/lib/seo";

const PAGE_TITLE =
  "DSA-Sec Results 2026 — Confirmed Offer, Waitlist, Counter-Offer, October Preference Exercise | DSALink";
const PAGE_DESCRIPTION =
  "DSA-Sec 2026 results phase explained: schools notify 17-28 Aug 2026, the October School Preference Exercise (19-23 Oct 2026) locks in the final school, PSLE results in November pair with placement. Confirmed Offer is binding (no S1 Posting), Waitlist historically converts about half the time (CO protected), Counter-Offer covers dual-track schools (IP vs Express), Unsuccessful goes to S1 Posting. Honest dates, MOE-sourced rules.";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — DSA Results 2026 four outcomes guide",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    keywords: [
      "DSA results 2026 Singapore",
      "DSA-Sec confirmed offer",
      "DSA waitlist conversion rate",
      "DSA counter offer dual track",
      "DSA October preference exercise 2026",
      "DSA-Sec results August notification",
      "DSA unsuccessful S1 Posting",
      "DSA confirmed offer cannot S1 Posting",
      "DSA PSLE posting group",
      "S1 Posting affiliation rules",
      "DSA-Sec timeline 2026",
    ],
    alternates: { canonical: "/dsa-results" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      type: "article",
      url: "/dsa-results",
      siteName: "DSALink",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      images: [ogImage.url],
    },
  };
}

function ArticleStructuredData() {
  const base = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${base}/dsa-results#article`,
    headline:
      "DSA-Sec 2026 results — what each of the four outcomes binds you to, and how the October Preference Exercise locks the final school",
    description: PAGE_DESCRIPTION,
    url: `${base}/dsa-results`,
    inLanguage: "en-SG",
    publisher: {
      "@type": "Organization",
      name: "DSALink",
      url: base,
    },
    isAccessibleForFree: true,
    about: [
      { "@type": "Thing", name: "Direct School Admission Singapore" },
      { "@type": "Thing", name: "DSA-Sec 2026 results" },
      { "@type": "Thing", name: "October School Preference Exercise" },
      { "@type": "Thing", name: "S1 Posting" },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function BreadcrumbStructuredData() {
  const base = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base },
      { "@type": "ListItem", position: 2, name: "DSA Guide", item: `${base}/dsa-guide` },
      { "@type": "ListItem", position: 3, name: "Results & 4 outcomes", item: `${base}/dsa-results` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function DsaResultsPage() {
  return (
    <>
      <ArticleStructuredData />
      <BreadcrumbStructuredData />
      <DsaResultsPageBody />
    </>
  );
}
