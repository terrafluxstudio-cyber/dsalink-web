import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { AfterApplyHubBody } from "@/components/AfterApplyHubBody";

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — After You Apply: the 6-month DSA black box reference",
} as const;

const PAGE_TITLE =
  "After You Apply | DSA Interview, Trial, Results, S1 Posting Reference";
const PAGE_DESCRIPTION =
  "From June to January, DSA goes private. The reference hub for what happens after you apply — interview prep (35 questions), trial signals, results routing, S1 posting fallback. For Singapore P6 parents.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "DSA after application Singapore",
    "DSA waiting period Singapore",
    "DSA interview prep Singapore 2026",
    "DSA trial lessons Singapore",
    "DSA results timeline Singapore",
    "DSA confirmed offer waitlist Singapore",
    "S1 posting Singapore",
    "what happens after DSA application Singapore",
  ],
  alternates: { canonical: "/after-apply" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: "website",
    url: "/after-apply",
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

export default function AfterApplyPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-surface">
        <AfterApplyHubBody />
      </main>
      <SiteFooter />
    </>
  );
}
