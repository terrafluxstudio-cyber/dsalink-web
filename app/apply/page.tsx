import type { Metadata } from "next";
import { DsaApplyPageBody } from "@/components/DsaApplyPageBody";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — DSA 2026 Application Checklist for Singapore parents",
} as const;

export const metadata: Metadata = {
  title: { absolute: "DSA 2026 Application Checklist | DSALink" },
  description:
    "Step-by-step DSA-Sec 2026 application checklist for Singapore parents — from shortlisting schools to submitting preference rankings. Track your progress with persistent checkboxes.",
  keywords: [
    "DSA application checklist Singapore 2026",
    "how to apply DSA secondary school Singapore",
    "DSA-Sec application steps Singapore",
    "DSA 2026 deadline Singapore",
    "DSA school preference ranking Singapore",
    "MOE DSA application portal Singapore",
    "DSA application guide Primary 6",
    "DSA school shortlist Singapore",
    "how to submit DSA application Singapore",
    "DSA application window June 2026",
  ],
  alternates: { canonical: "/apply" },
  openGraph: {
    title: "DSA 2026 Application Checklist | DSALink",
    description:
      "Step-by-step DSA-Sec 2026 application checklist for Singapore parents — from shortlisting schools to submitting preference rankings.",
    type: "article",
    url: "/apply",
    siteName: "DSALink",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "DSA 2026 Application Checklist | DSALink",
    description:
      "Step-by-step DSA-Sec 2026 application checklist for Singapore parents — from shortlisting schools to submitting preference rankings.",
    images: [ogImage.url],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Apply for DSA-Sec 2026 in Singapore",
  description:
    "A step-by-step checklist for Singapore P6 parents applying for DSA-Sec 2026 — from shortlisting schools to receiving your final school allocation.",
  totalTime: "PT6M",
  step: [
    {
      "@type": "HowToStep",
      name: "Phase 1 — Shortlist and Prepare (Now)",
      text: "Identify your child's talent domain, review what target schools shared at open houses, check if each school requires a portfolio or audition, and confirm your expected PSLE Posting Group meets each school's minimum.",
      url: "https://dsalink.sg/apply#phase1",
    },
    {
      "@type": "HowToStep",
      name: "Phase 2 — Submit Applications (closes 2 Jun 2026, 4:30pm SGT)",
      text: "Log in to the MOE DSA-Sec Application System, submit applications to all target schools (no cap on number of applications), and receive submission confirmation before the deadline.",
      url: "https://dsalink.sg/apply#phase2",
    },
    {
      "@type": "HowToStep",
      name: "Phase 3 — Trials and Interviews (Jul – Aug 2026)",
      text: "Watch for shortlist notifications from schools by 10 Jul 2026, attend talent trials (6 Jul – 4 Aug 2026), prepare for and attend interviews (13 Jul – 14 Aug 2026), and await final outcome notifications from schools by 28 Aug 2026.",
      url: "https://dsalink.sg/apply#phase3",
    },
    {
      "@type": "HowToStep",
      name: "Phase 4 — Accept and Rank (Oct – Nov 2026)",
      text: "Submit your school preference ranking via the MOE system (19–23 Oct 2026 by 4:30pm). Note: if you hold a Confirmed Offer you cannot join S1 Posting. Receive your final school allocation (tentatively 24–25 Nov 2026).",
      url: "https://dsalink.sg/apply#phase4",
    },
  ],
};

export default function ApplyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DsaApplyPageBody />
    </>
  );
}
