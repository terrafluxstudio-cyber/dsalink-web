import type { Metadata } from "next";
import { FaqContent } from "@/components/FaqContent";
import { FaqPageHeader } from "@/components/FaqPageHeader";
import { SiteHeader } from "@/components/SiteHeader";
import { PillarBackLink } from "@/components/PillarBackLink";
import { SiteFooter } from "@/components/SiteFooter";
import { StaticPageRelatedCards } from "@/components/StaticPageRelatedCards";
import { buildFaqStructuredData } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute:
      "DSA-Sec 2026 FAQ — Singapore Secondary School Admission Questions | DSALink",
  },
  description:
    "Complete answers to DSA-Sec 2026 questions: application dates, eligibility, Commitment Rule, talent areas, PSLE COP, IP, SAP, ALP and LLP — for Singapore parents.",
  keywords: [
    "DSA-Sec 2026 FAQ Singapore",
    "what is DSA secondary school Singapore",
    "DSA application period 2026",
    "DSA commitment rule Singapore",
    "DSA talent areas Singapore",
    "PSLE COP DSA Singapore",
    "integrated programme IP schools Singapore",
    "SAP school Singapore",
    "ALP LLP secondary school",
    "DSA interview preparation Singapore",
  ],
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "DSA-Sec 2026 FAQ — Singapore Secondary School Admission Questions",
    description:
      "14 expert answers to the most common parent questions about DSA-Sec 2026 in Singapore — eligibility, dates, commitment, talent areas, PSLE COP, IP and SAP schools.",
    type: "article",
    url: "/faq",
    siteName: "DSALink",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function FaqPage() {
  const jsonLd = buildFaqStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <FaqPageHeader />

        <FaqContent />
      </main>
      <StaticPageRelatedCards page="faq" />
      <PillarBackLink />
      <SiteFooter />
    </>
  );
}
