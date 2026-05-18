import type { Metadata } from "next";
import { DsaCoachesPageBody } from "@/components/DsaCoachesPageBody";
import en from "@/locales/en.json";
import { getSiteUrl } from "@/lib/seo";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — DSA Coaching Directory Singapore 2026",
} as const;

export function generateMetadata(): Metadata {
  return {
    title: { absolute: en.dsaCoachesMetaTitle },
    description: en.dsaCoachesMetaDesc,
    keywords: [
      "DSA coaching Singapore 2026",
      "DSA music tutor Singapore",
      "DSA sports coaching Singapore",
      "DSA visual arts portfolio class Singapore",
      "DSA interview coaching Singapore",
      "DSA drama coaching Singapore",
      "DSA preparation centre Singapore",
      "DSA individual coach Singapore",
      "SOTA preparation Singapore",
      "DSA netball football swimming coaching",
      "DSA piano violin coaching Singapore",
      "DSA ballet dance coaching Singapore",
      "DSA tech STEM coaching Singapore",
      "DSA interview preparation specialist Singapore",
    ],
    alternates: { canonical: "/dsa-coaches" },
    openGraph: {
      title: en.dsaCoachesOgTitle,
      description: en.dsaCoachesOgDesc,
      type: "website",
      url: "/dsa-coaches",
      siteName: "DSALink",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: en.dsaCoachesOgTitle,
      description: en.dsaCoachesOgDesc,
      images: [ogImage.url],
    },
  };
}

function buildCoachesStructuredData() {
  const base = getSiteUrl();
  const pageUrl = `${base}/dsa-coaches`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        name: "DSA Coaching Providers Singapore 2026",
        description:
          "A curated directory of DSA coaching providers in Singapore for music, sports, visual arts, performing arts, tech, and interview preparation.",
        url: pageUrl,
        inLanguage: "en-SG",
        publisher: { "@id": `${base}/#organization` },
        isPartOf: { "@id": `${base}/#website` },
        mainEntity: { "@id": `${pageUrl}#coach-list` },
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#coach-list`,
        name: "DSA coaching providers Singapore 2026",
        numberOfItems: 51,
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I find a DSA coach in Singapore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Use DSALink's DSA Coaching Directory at dsalink.sg/dsa-coaches. Filter by talent area (music, sports, visual arts, performing arts, tech, or interview coaching) and provider type (institution or individual coach). All 51 providers are sorted by prominence, not payment.",
            },
          },
          {
            "@type": "Question",
            name: "What does a DSA music coach do?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A DSA music coach prepares students for music DSA auditions by aligning their ABRSM or Trinity graded exam level to the target school's requirements, coaching audition performance, helping build a portfolio, and practising common music DSA interview questions. Schools typically require ABRSM Grade 4–6 for mainstream secondary schools and Grade 6+ Merit for competitive IP schools.",
            },
          },
          {
            "@type": "Question",
            name: "When should my child start DSA coaching?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For sports and performing arts DSA, start building a verifiable track record at least 2 years before the application year (i.e., by Primary 4). For interview and portfolio coaching, structured preparation from Primary 5 is appropriate. Last-minute coaching in the application year alone is rarely sufficient — schools assess genuine talent developed over time.",
            },
          },
          {
            "@type": "Question",
            name: "Is DSA coaching worth it?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Coaching is useful for structuring genuine talent into a credible portfolio and preparing for interviews and trials. It cannot substitute for real skill or competition experience. Schools — especially independent and IP schools — are experienced at identifying coached but unsubstantiated applications. Coaching is most valuable for children who already have real ability and need help presenting it.",
            },
          },
          {
            "@type": "Question",
            name: "Which DSA sports coaching providers are well-known in Singapore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Well-known Singapore DSA sports coaching providers include ActiveSG Academies (government-backed, covers football, swimming, athletics, badminton, and more), The Netball Academy (dedicated DSA clinic led by former national players), GoalKick Football Academy (FAS-accredited), Swimfast Aquatic Club (14-time National Swimming Championship title holder), SAGA Athletics, and Club ZOOM Track and Field for athletics.",
            },
          },
        ],
      },
    ],
  };
}

export default function DsaCoachesPage() {
  const structuredData = buildCoachesStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <DsaCoachesPageBody />
    </>
  );
}
