import type { Metadata, Viewport } from "next";
import { Noto_Sans_SC, Noto_Sans_Tamil, Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { UtmCapture } from "@/components/UtmCapture";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { getSiteUrl } from "@/lib/seo";
import "./globals.css";

const siteTitle =
  "DSALink | DSA 2026 Singapore — Strategy Guide, School Directory & Open Houses";

const defaultOgImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "DSALink — DSA 2026 Singapore strategy guide, PSLE COP, and open houses",
} as const;

const siteDescription =
  "Singapore's DSA 2026 strategy hub — middle-stream school selection, interview prep tips, 147-school directory with PSLE COP, and live May open house calendar for P6 families.";

const siteKeywords = [
  "DSA Singapore 2026",
  "DSA interview tips Singapore",
  "DSA secondary school strategy",
  "AL 20 25 school selection Singapore",
  "middle-stream DSA strategy Singapore",
  "PSLE COP Singapore 2025",
  "secondary school open house 2026",
  "DSA talent areas Singapore",
  "DSALink",
  "Singapore P6 secondary school admission",
] as const;

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-noto",
  display: "swap",
  preload: false,
});

const notoSansTamil = Noto_Sans_Tamil({
  subsets: ["latin", "tamil"],
  weight: ["400", "600"],
  variable: "--font-noto-tamil",
  display: "swap",
  preload: false,
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
      <head>
        {/* Warm up GA4 connection early even though script loads lazily */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="font-sans">
        <GoogleAnalytics />
        <UtmCapture />
        <SpeedInsights />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
