# Cursor Task: Add GA4 custom conversion events

Goal: fire 4 custom GA4 events so we can measure which traffic sources drive real engagement, not just page views.

GA4 is already installed via `components/GoogleAnalytics.tsx` using gtag.js. All you need to do is call `gtag('event', ...)` at the right moments.

---

## Helper — Create `lib/analytics.ts`

Create a new file at `lib/analytics.ts`:

```ts
export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined") return;
  if (typeof (window as Window & { gtag?: (...args: unknown[]) => void }).gtag !== "function") return;
  (window as Window & { gtag: (...args: unknown[]) => void }).gtag("event", name, params ?? {});
}
```

---

## Event 1 — `email_captured`

**File:** `components/EmailCapture.tsx`

In the `handleSubmit` function, after `onSubmit(trimmed)` and before `setSubmitted(true)`, add:

```ts
import { trackEvent } from "@/lib/analytics";

// inside handleSubmit, after onSubmit(trimmed):
trackEvent("email_captured");
```

---

## Event 2 — `finder_completed`

**File:** Find where `SchoolFinderWizard` calls the `/api/recommend` POST and receives a successful response (the step where recommended schools are shown to the user).

After the successful API response is received, add:

```ts
import { trackEvent } from "@/lib/analytics";

trackEvent("finder_completed", { school_count: recommendedSchools.length });
```

---

## Event 3 — `open_house_viewed`

**File:** `app/open-houses/page.tsx`

This is a server component. Create a client wrapper or find the existing client component in the open houses page.

Add a `useEffect` that fires once on mount:

```tsx
"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

useEffect(() => {
  trackEvent("open_house_viewed");
}, []);
```

If the page is a pure server component with no client children, create a minimal `components/OpenHouseTracker.tsx`:

```tsx
"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function OpenHouseTracker() {
  useEffect(() => {
    trackEvent("open_house_viewed");
  }, []);
  return null;
}
```

Then render `<OpenHouseTracker />` somewhere inside the open-houses page.

---

## Event 4 — `guide_scrolled_50`

**File:** `app/dsa-guide/page.tsx` (or whichever file renders the main DSA guide content)

Find or create a client component in the DSA guide page. Add a scroll listener that fires once when the user reaches 50% of the page:

```tsx
"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export function GuideScrollTracker() {
  const fired = useRef(false);

  useEffect(() => {
    function onScroll() {
      if (fired.current) return;
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (scrolled / total >= 0.5) {
        trackEvent("guide_scrolled_50");
        fired.current = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
```

Render `<GuideScrollTracker />` inside the DSA guide page.

---

## After changes

Run:
```
npx tsc --noEmit
```

Fix any TypeScript errors. To verify: open `http://localhost:3000` with GA4 DebugView active (or use browser console to check `window.dataLayer`). Submit the email form and confirm `email_captured` appears in dataLayer.
