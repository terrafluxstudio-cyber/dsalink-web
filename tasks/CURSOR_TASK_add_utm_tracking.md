# Cursor Task: Add UTM parameter tracking

Goal: capture UTM parameters from inbound URLs, persist them in sessionStorage, and attach the utm_source to every recommendation record saved to KV.

---

## Change 1 — Create `hooks/useUtm.ts`

Create a new file at `hooks/useUtm.ts`:

```ts
"use client";

import { useEffect } from "react";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign"] as const;
const STORAGE_KEY = "dsalink_utm";

export function useUtm() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const hasUtm = UTM_KEYS.some((k) => params.has(k));
    if (!hasUtm) return;

    const utm: Record<string, string> = {};
    for (const key of UTM_KEYS) {
      const val = params.get(key);
      if (val) utm[key] = val;
    }
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
  }, []);
}

export function getStoredUtm(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
```

---

## Change 2 — Call `useUtm()` in `app/layout.tsx`

Find the root client layout or create a thin client wrapper component. The goal is to run `useUtm()` on every page load so UTM params are captured regardless of which page the user lands on.

Check if `app/layout.tsx` already has a `"use client"` client component wrapper. If it does, add `useUtm()` there. If not:

Create `components/UtmCapture.tsx`:

```tsx
"use client";

import { useUtm } from "@/hooks/useUtm";

export function UtmCapture() {
  useUtm();
  return null;
}
```

Then import and render `<UtmCapture />` inside the `<body>` in `app/layout.tsx` (server component), alongside `<GoogleAnalytics />`.

---

## Change 3 — Attach utm_source to the recommend API call

Find where `POST /api/recommend` is called in the codebase (likely in `components/SchoolFinderWizard.tsx` or similar). In the fetch body, add:

```ts
import { getStoredUtm } from "@/hooks/useUtm";

// inside the fetch call, add to the body object:
...getStoredUtm(),
```

So the final body passed to `/api/recommend` includes `utm_source`, `utm_medium`, `utm_campaign` if present.

---

## Change 4 — Save UTM fields in `app/api/recommend/route.ts`

In `app/api/recommend/route.ts`, update the `record` object to include UTM fields:

```ts
const record = {
  id: nanoid(),
  timestamp: new Date().toISOString(),
  alScore: body.alScore,
  talents: body.talents,
  recommendedSchools: body.recommendedSchools,
  region: body.region,
  town: body.town,
  ...(body.email ? { email: body.email } : {}),
  // Add these:
  ...(body.utm_source ? { utm_source: body.utm_source } : {}),
  ...(body.utm_medium ? { utm_medium: body.utm_medium } : {}),
  ...(body.utm_campaign ? { utm_campaign: body.utm_campaign } : {}),
};
```

---

## After changes

Run:
```
npx tsc --noEmit
```

Fix any TypeScript errors. Test by loading `http://localhost:3000/?utm_source=tiktok&utm_medium=video&utm_campaign=test` and verifying `sessionStorage` contains `dsalink_utm` with the expected values.
