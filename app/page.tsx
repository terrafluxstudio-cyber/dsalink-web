import { AdPlaceholder } from "@/components/AdPlaceholder";
import { HeroSection } from "@/components/HeroSection";
import { OpenHouseList } from "@/components/OpenHouseList";
import { ResourceCards } from "@/components/ResourceCards";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection>
          <OpenHouseList />
        </HeroSection>
        <ResourceCards />
        <AdPlaceholder />
      </main>
      <SiteFooter />
    </>
  );
}
