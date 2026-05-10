import type { ReactNode } from "react";

/** Route group passthrough; metadata comes from `page.tsx` `generateMetadata`. */
export default function ScoresLayout({ children }: { children: ReactNode }) {
  return children;
}
