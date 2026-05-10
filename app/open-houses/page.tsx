import type { Metadata } from "next";
import { OpenHousesDirectory } from "@/components/OpenHousesDirectory";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const pageTitle =
  "Singapore secondary schools · open houses & DSA 2026 | DSALink.sg";

const pageDescription =
  "Search and filter all 147 MOE secondary schools by name, area, and programme (IP, SAP, O-Level). Official DSA and admissions links, bilingual names, compact mobile layout — 新加坡中学开放日、DSA 与招生检索。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Singapore secondary school open house 2026",
    "DSA secondary school list",
    "MOE school finder DSA",
    "新加坡 中学 开放日 搜索",
    "DSA 学校 筛选 IP SAP",
    "secondary school Singapore filter by region",
  ],
  alternates: {
    canonical: "/open-houses",
  },
  openGraph: {
    title: "Secondary open houses & DSA directory | DSALink",
    description: pageDescription,
    type: "website",
    url: "/open-houses",
    siteName: "DSALink",
  },
};

export default function OpenHousesPage() {
  return (
    <>
      <SiteHeader />
      <main className="border-t border-intellectual/5 bg-white">
        <div className="mx-auto max-w-5xl px-3 pb-12 pt-6 sm:px-6 sm:pb-20 sm:pt-10">
          <OpenHousesDirectory />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
