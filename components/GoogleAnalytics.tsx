"use client";

import Script from "next/script";
import { flushEventQueue } from "@/lib/analytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim();

if (process.env.NODE_ENV === "development") {
  if (GA_ID) {
    console.log(
      "[dsalink] Google Analytics: NEXT_PUBLIC_GA_ID is set (scripts will load in browser).",
    );
  } else {
    console.warn(
      "[dsalink] Google Analytics: NEXT_PUBLIC_GA_ID is unset — add it to .env.local or Vercel env.",
    );
  }
}

/**
 * GA4 via gtag.js. Renders nothing until `NEXT_PUBLIC_GA_ID` is defined.
 */
export function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      {/* Define gtag immediately so trackEvent() works before the external script loads */}
      <Script id="dsalink-ga4-init" strategy="beforeInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
        onLoad={flushEventQueue}
      />
    </>
  );
}
