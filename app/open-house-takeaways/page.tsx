import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { OpenHouseTakeawaysBody } from "@/components/OpenHouseTakeawaysBody";

export const metadata: Metadata = {
  title: { absolute: "What Did Each DSA Open House Share? | DSALink" },
  description:
    "Key takeaways from 8 Singapore secondary schools that have already held their 2026 DSA open houses — talent areas, selection signals, and what parents should know.",
  alternates: { canonical: "/open-house-takeaways" },
};

export default function OpenHouseTakeawaysPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-surface">
        <OpenHouseTakeawaysBody />
      </main>
      <SiteFooter />
    </>
  );
}
