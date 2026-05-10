import type { Metadata, Viewport } from "next";
import { Noto_Sans_SC, Noto_Sans_Tamil, Plus_Jakarta_Sans } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { copy } from "@/lib/i18n";
import "./globals.css";

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

const en = copy.en;

export const viewport: Viewport = {
  themeColor: "#0c3d5c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dsalink.sg"),
  title: {
    default: en.metaTitle,
    template: "%s · DSA Link",
  },
  description: en.metaDescription,
  keywords: [
    "DSA Singapore",
    "DSA Link",
    "DSA 2026",
    "Direct School Admission",
    "MOE DSA",
    "新加坡 DSA",
    "DSA Melayu",
    "DSA Tamil",
    "சிங்கப்பூர் DSA",
  ],
  authors: [{ name: "DSA Link" }],
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://dsalink.sg",
    siteName: "DSA Link",
    title: en.metaTitle,
    description: en.metaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: en.metaTitle,
    description: en.metaDescription,
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
