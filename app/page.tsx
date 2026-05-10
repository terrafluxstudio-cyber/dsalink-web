import { AdPlaceholder } from "@/components/AdPlaceholder";
import { HeroSection } from "@/components/HeroSection";
import { OpenHousePreview } from "@/components/OpenHousePreview";
import { ScoresEntryCard } from "@/components/ScoresEntryCard";
import { ResourceCards } from "@/components/ResourceCards";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection>
          <OpenHousePreview />
          <ScoresEntryCard />
        </HeroSection>
        <ResourceCards />
        <AdPlaceholder />
      </main>
      <SiteFooter />
    </>
  );
}
