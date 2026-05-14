import type { Metadata } from "next";
import { GlossaryTooltip } from "@/components/GlossaryTooltip";
import { SchoolsDirectory } from "@/components/SchoolsDirectory";
import { PageHeader } from "@/components/PageHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { buildSchoolDirectoryStructuredData } from "@/lib/seo";

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
  },
};

export default function SchoolsPage() {
  const jsonLd = buildSchoolDirectoryStructuredData();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <PageHeader
          crumbLabel="School Directory"
          kicker="2026 · 147 Secondary Schools"
          title="School Directory"
          subtitle={
            <>
              All 147 <GlossaryTooltip term="MOE">MOE</GlossaryTooltip> secondary schools —{" "}
              <GlossaryTooltip term="PSLE">PSLE</GlossaryTooltip>{" "}
              <GlossaryTooltip term="COP">COP</GlossaryTooltip> 2025 posting bands,{" "}
              <GlossaryTooltip term="ALP">Applied Learning Programme</GlossaryTooltip>,{" "}
              <GlossaryTooltip term="LLP">Lifelong Learning Programme</GlossaryTooltip>, and direct links
              to each school&apos;s <GlossaryTooltip term="DSA">DSA</GlossaryTooltip> page and official
              website. Schools without the <GlossaryTooltip term="IP">IP</GlossaryTooltip> typically offer{" "}
              <GlossaryTooltip term="O-Level">O-Level</GlossaryTooltip> or{" "}
              <GlossaryTooltip term="SP">SP</GlossaryTooltip> programmes. Programmes such as{" "}
              <GlossaryTooltip term="Critical Social Inquiry and Media Literacy">
                Critical Social Inquiry and Media Literacy
              </GlossaryTooltip>{" "}
              are offered in the English Language curriculum at some schools.
            </>
          }
        />
        <div className="bg-surface">
          <SchoolsDirectory />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
