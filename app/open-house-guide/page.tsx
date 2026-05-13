import type { Metadata } from "next";
import homeEn from "@/locales/en.json";
import { OpenHouseGuideFull } from "@/components/OpenHouseGuideFull";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: `${homeEn.fieldGuide_title} | DSALink` },
    description: homeEn.fieldGuide_subtitle,
    alternates: {
      canonical: "/open-house-guide",
    },
    openGraph: {
      title: homeEn.fieldGuide_title,
      description: homeEn.fieldGuide_subtitle,
      url: "/open-house-guide",
    },
  };
}

export default function OpenHouseGuidePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <OpenHouseGuideFull />
      </main>
      <SiteFooter />
    </>
  );
}
