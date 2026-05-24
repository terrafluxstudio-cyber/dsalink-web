# CURSOR TASK: Fix Dataset Schema creator + license fields

## Problem
Google Search Console flagged 2 non-critical issues on dsalink.sg:
- Missing field "creator" (not recognised — needs `url` property)
- Missing field "license" (anchor URL `/#site-disclaimer` not accepted by Google)

## File to edit
`lib/seo.ts`

## Change 1: Fix `getDisclaimerLicenseUrl()`

Find:
```ts
export function getDisclaimerLicenseUrl(): string {
  return `${getSiteUrl()}/#site-disclaimer`;
}
```

Replace with:
```ts
export function getDisclaimerLicenseUrl(): string {
  return "https://creativecommons.org/licenses/by-nc/4.0/";
}
```

## Change 2: Fix `creator` in `buildScoresStructuredData()`

Find (around line 261):
```ts
        creator: {
          "@type": "Organization",
          name: "Terraflux Studio",
        },
```

Replace with:
```ts
        creator: {
          "@type": "Organization",
          name: "Terraflux Studio",
          url: "https://dsalink.sg",
        },
```

## Verification
Run:
```bash
npm run build
```
Build must complete with no errors.

Then confirm the two changes are in place:
```bash
grep -A4 "creator" lib/seo.ts | head -10
grep "getDisclaimerLicenseUrl\|creativecommons" lib/seo.ts
```

## Commit
```bash
git add lib/seo.ts && git commit -m "fix: add creator url and valid CC license to Dataset schema"
```
