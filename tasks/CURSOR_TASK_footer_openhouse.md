# Cursor Task: Footer cleanup + OpenHousePreview expiry filter

---

## Change 1 — OpenHousePreview: filter out finished events

**File:** `components/OpenHousePreview.tsx`

**Current:**
```tsx
const events = useMemo(() => getPreviewOpenHouseEvents(3), []);
```

**Replace with:**
```tsx
const events = useMemo(() => {
  return getPreviewOpenHouseEvents(6)
    .filter(ev => resolveOpenHouseStatus(ev) !== "Finished")
    .slice(0, 3);
}, []);
```

`resolveOpenHouseStatus` is already imported in this file — no new imports needed.
`getPreviewOpenHouseEvents` already returns events from today onwards; this change additionally removes any today-events that have already ended.

---

## Change 2 — Footer: reorder navigation links

**File:** `components/SiteFooter.tsx`

### Resources column (Column 2)

**Current order:**
1. DSA Guide (`/dsa-guide`)
2. DSA Interview (`/dsa-interview`)
3. Open House Guide (`/open-house-guide`)
4. DSA Finder (`/dsa-finder`)

**New order:**
1. DSA Guide (`/dsa-guide`)
2. DSA Finder (`/dsa-finder`)
3. Open House Guide (`/open-house-guide`)
4. DSA Interview (`/dsa-interview`)

### Data column (Column 3)

**Current order:**
1. Schools (`/schools`)
2. PSLE COP (`/psle-cop`)
3. Open Houses (`/open-houses`)

**New order:**
1. Open Houses (`/open-houses`)
2. Schools (`/schools`)
3. PSLE COP (`/psle-cop`)

Only reorder the `<li>` elements — don't change any class names or link labels.

---

## Change 3 — Merge and shorten legal disclaimer

### 3a. Update `legalDisclaimerBody` in all locale files

**Files to edit:** `lib/i18n.ts` (EN and ZH locale objects) and the corresponding MS and TA locale objects in the same file.

**New EN value:**
```
"DSALink is an independent community resource developed by Terraflux Studio. Not affiliated with or endorsed by MOE Singapore or any school. School logos sourced from MOE SchoolFinder for identification only. All information is for general reference — verify current details at moe.gov.sg. DSA rules and outcomes are subject to change; individual results may vary."
```

**New ZH value:**
```
"DSALink 是由 Terraflux Studio 开发的独立社区资源平台，与新加坡教育部（MOE）及任何学校均无关联。学校标志来源于 MOE SchoolFinder，仅用于识别目的。本站所有信息仅供参考，请以 moe.gov.sg 的最新内容为准。DSA 相关规定及录取结果可能随时变更，个人结果可能因人而异。"
```

For MS and TA: rewrite with the same meaning following the existing MS/TA tone in the file.

### 3b. Remove `legalDisclaimerLogoAttribution` everywhere

1. **`lib/i18n.ts` Copy interface:** remove the line `legalDisclaimerLogoAttribution: string;`
2. **`lib/i18n.ts` locale objects (all 4):** remove the `legalDisclaimerLogoAttribution` key-value pair from EN, ZH, MS, TA
3. **`components/LegalDisclaimer.tsx`:** 
   - Remove `logoAttribution` from the `LegalDisclaimerProps` type
   - Remove `logoAttribution` from the destructured parameters
   - Remove the `<p>` element that renders `{logoAttribution}`
4. **`components/SiteFooter.tsx`:** remove `logoAttribution={t.legalDisclaimerLogoAttribution}` from the `<LegalDisclaimer>` JSX call

---

## Change 4 — Make "Last updated" and "Spotted an error" slightly more visible

**File:** `components/LegalDisclaimer.tsx`

Find the `<p>` element that contains `{lastUpdated}` and the `<a>` element for `{reportErrorLabel}`.

**Current color on that `<p>`:** `text-white/25`
**Change to:** `text-white/50`

The `<a>` inside it currently has `text-white/25` as well — change that to `text-white/50` too (the hover state `hover:text-white/55` can stay or be bumped slightly, your call).

Only this one paragraph changes. All other paragraphs in `LegalDisclaimer.tsx` keep their existing (lower-opacity) colors.

---

## After all changes

Run:
```
npx tsc --noEmit
```
Zero errors expected. Verify:
- Open house preview on homepage no longer shows events that have already ended today
- Footer Resources column: Guide → Finder → OH Guide → Interview
- Footer Data column: Open Houses → Schools → PSLE COP
- Footer disclaimer is one short paragraph (not two long ones)
- "Last updated" and "Report error" link are legible but not prominent
