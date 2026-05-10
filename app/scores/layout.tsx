import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "PSLE COP 2026 - All 150+ Schools 5-Year History";
const description =
  "Five-year PSLE cut-off trends (2021–2025) for 150+ Singapore secondary schools. Filter by zone and programme type; expand rows for Non-IP vs IP. Always verify on MOE SchoolFinder.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  keywords: [
    "PSLE COP 2026",
    "Singapore secondary school COP history",
    "PSLE cut-off points 2021-2025",
    "AL posting score Singapore",
    "MOE SchoolFinder COP",
    "IP SAP secondary COP",
    "DSA school selection scores",
  ],
  alternates: {
    canonical: "/scores",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/scores",
    siteName: "DSALink",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ScoresLayout({ children }: { children: ReactNode }) {
  return children;
}
