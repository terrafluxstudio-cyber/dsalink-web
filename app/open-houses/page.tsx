import type { Metadata } from "next";
import { OpenHouseList } from "@/components/OpenHouseList";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const pageTitle = "May 2026 secondary school open houses (DSA season)";

const pageDescription =
  "Plan May 2026 visits to Singapore MOE secondary school open houses during DSA: on-site and online sessions with official school links — RI, RGS, HCI, NJC, Victoria School, CHIJ St Nicholas, and more. 新加坡中学5月校园开放日、线下/线上形式与官方入口汇总，方便家长择校与参观。";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "Singapore school open house 2026",
    "DSA secondary school open house",
    "MOE open house May 2026",
    "新加坡 中学 开放日 2026",
    "DSA 校园开放日",
    "secondary school visit Singapore",
  ],
  alternates: {
    canonical: "/open-houses",
  },
  openGraph: {
    title: "May 2026 secondary school open houses | DSALink.sg",
    description: pageDescription,
    type: "website",
    url: "/open-houses",
  },
};

export default function OpenHousesPage() {
  return (
    <>
      <SiteHeader />
      <main className="border-t border-intellectual/5 bg-white">
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12">
          <OpenHouseList variant="page" />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
