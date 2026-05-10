import type { Metadata, Viewport } from "next";
import { Noto_Sans_SC, Noto_Sans_Tamil, Plus_Jakarta_Sans } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { getSiteUrl } from "@/lib/seo";
import "./globals.css";

const siteTitle =
  "DSALink | Singapore Secondary School PSLE COP & Open Houses 2026";

const defaultOgImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — Singapore PSLE COP, open houses, and DSA resources",
} as const;

const siteDescription =
  "Independent Singapore education companion for DSA timelines, PSLE COP insights, and secondary open-house season — cross-check everything on MOE.";

const siteKeywords = [
  "PSLE COP Singapore",
  "Singapore secondary school cut-off",
  "PSLE posting score",
  "secondary school open house 2026",
  "MOE SchoolFinder",
  "DSA Singapore 2026",
  "DSA secondary school",
  "Singapore education",
  "DSALink",
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
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteTitle,
    template: "%s · DSALink",
  },
  description: siteDescription,
  keywords: [...siteKeywords],
  authors: [{ name: "DSALink", url: getSiteUrl() }],
  openGraph: {
    type: "website",
    locale: "en_SG",
    alternateLocale: ["zh_SG", "ms_SG", "ta_SG"],
    url: "/",
    siteName: "DSALink",
    title: siteTitle,
    description: siteDescription,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
