import { ScoresPageBody } from "@/components/ScoresPageBody";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

/** PSLE COP 历年数据看板（H1 文案见 i18n `scoresPageH1`）；MOE 核对入口在 `ScoresPageBody` 页头。 */
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
