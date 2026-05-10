import { ScoresPageBody } from "@/components/ScoresPageBody";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function ScoresPage() {
  return (
    <>
      <SiteHeader />
      <main className="border-t border-intellectual/5 bg-hero-mesh">
        <ScoresPageBody />
      </main>
      <SiteFooter />
    </>
  );
}
