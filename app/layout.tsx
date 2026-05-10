import type { Metadata, Viewport } from "next";
import { Noto_Sans_SC, Noto_Sans_Tamil, Plus_Jakarta_Sans } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const siteTitle =
  "DSALink.sg | 2026 新加坡中学 DSA 申请一站式导航";

const siteDescription =
  "实时追踪 2026 年新加坡中学 DSA (Direct School Admission) 申请时间轴、截止日期及热门学校名单。为家长提供最清晰的 DSA 申请指南。";

const siteKeywords = [
  "DSA Singapore 2026",
  "DSA secondary school list",
  "MOE DSA deadline",
  "新加坡中学直通车",
  "DSA 申请时间表",
  "DSALink.sg",
  "dsalink.sg",
] as const;

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto",
  display: "swap",
});

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["latin", "tamil"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-tamil",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c3d5c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dsalink.sg"),
  title: {
    default: siteTitle,
    template: "%s · DSALink.sg",
  },
  description: siteDescription,
  keywords: [...siteKeywords],
  authors: [{ name: "DSALink.sg", url: "https://dsalink.sg" }],
  openGraph: {
    type: "website",
    locale: "zh_SG",
    alternateLocale: ["en_SG", "ms_SG", "ta_SG"],
    url: "https://dsalink.sg",
    siteName: "DSALink.sg",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-SG"
      className={`${plusJakarta.variable} ${notoSansSC.variable} ${notoSansTamil.variable}`}
    >
      <body className="font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
