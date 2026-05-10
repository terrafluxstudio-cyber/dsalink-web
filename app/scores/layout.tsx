import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "历年 PSLE 录取分数线查询 | DSALink.sg";
const description =
  "查询全岛 150+ 所中学 2021–2025 五年 PSLE 截分趋势（AL 制示意），按校名、区域、IP/SAP/G3 等筛选；展开对比 Non-IP 与 IP。辅助 DSA 与选校 — Historical PSLE COP trends for Singapore secondary schools.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "PSLE COP Singapore",
    "secondary school cut-off AL",
    "PSLE 录取分数线",
    "中学 截分 历年",
    "DSA 选校 分数",
    "IP SAP posting score",
  ],
  alternates: {
    canonical: "/scores",
  },
  openGraph: {
    title: "PSLE posting scores & COP trends (2021–2025) | DSALink.sg",
    description,
    type: "website",
    url: "/scores",
  },
};

export default function ScoresLayout({ children }: { children: ReactNode }) {
  return children;
}
