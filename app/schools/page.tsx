import type { Metadata } from "next";
import { SchoolsDirectory } from "@/components/SchoolsDirectory";
import { SchoolsPageHeader } from "@/components/SchoolsPageHeader";
import { PillarBackLink } from "@/components/PillarBackLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StaticPageRelatedCards } from "@/components/StaticPageRelatedCards";
import { buildSchoolDirectoryStructuredData } from "@/lib/seo";
import { getAllPublishedSchoolSlugs } from "@/lib/schoolPages";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: { absolute: "School Directory 2026 | 147 Singapore Secondary Schools | DSALink" },
  description:
    "All 147 MOE secondary schools with PSLE COP 2025 posting bands, Applied Learning Programme, Lifelong Learning Programme, and direct links to DSA pages and official websites.",
  keywords: [
    "Singapore secondary school directory 2026",
    "PSLE COP 2025 all schools",
    "DSA school profiles Singapore",
    "ALP LLP secondary school Singapore",
    "中学目录 新加坡 2026",
  ],
  alternates: { canonical: "/schools" },
  openGraph: {
    title: "School Directory 2026 | 147 Singapore Secondary Schools",
    description:
      "All 147 MOE secondary schools with PSLE COP 2025, ALP, LLP, DSA links and official websites.",
    type: "website",
    url: "/schools",
    siteName: "DSALink",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function SchoolsPage() {
  const jsonLd = buildSchoolDirectoryStructuredData();
  const publishedSlugs = getAllPublishedSchoolSlugs();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <SchoolsPageHeader />
        <div className="bg-surface">
          <SchoolsDirectory publishedSlugs={publishedSlugs} />
        </div>
      </main>
      <StaticPageRelatedCards page="schools" />
      <PillarBackLink />
      <SiteFooter />
    </>
  );
}
