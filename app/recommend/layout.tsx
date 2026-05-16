import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DSA School Recommender | DSALink",
  description:
    "Find the right secondary school for your child based on PSLE score and talent. Get personalised DSA recommendations.",
};

export default function RecommendLayout({ children }: { children: React.ReactNode }) {
  return children;
}
