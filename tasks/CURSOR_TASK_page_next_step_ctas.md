# Cursor Task: Add next-step CTAs to remaining pages

Add a "next step" CTA block at the bottom of 3 pages. Each follows the same pattern already established in `OpenHouseGuidePageBody.tsx` and (after the previous task) `DsaGuidePageBody.tsx`.

---

## Page 1: `/open-houses` page

**File:** find the component that renders the `/open-houses` route (check `app/open-houses/page.tsx` to find the body component name).

**What to add:** A CTA after the main content, before `<SiteFooter>`:

```
Heading (EN): "Attending an open house? Read the strategy guide first."
Heading (ZH): "要去开放日？先读准备攻略。"
Body (EN): "Know what questions to ask, what red flags to watch for, and how to make the visit count."
Body (ZH): "知道要问什么、警惕什么，让每次开放日都有收而返。"
Button (EN): "Read the Open House Guide →"   href="/open-house-guide"
Button (ZH): "查看开放日攻略 →"
```

Use `locale` from `useLanguage()` for EN/ZH switch. Style: same champagne card pattern used elsewhere.

---

## Page 2: `/schools` directory page

**File:** find the component that renders `/schools` route.

**What to add:** A slim CTA strip after the school listing, before `<SiteFooter>`:

```
Heading (EN): "Found schools you like? Check their open house dates."
Heading (ZH): "找到心仪学校了？查看他们的开放日日期。"
Button 1 (EN): "Open house calendar →"   href="/open-houses"
Button 2 (EN): "Open house guide →"      href="/open-house-guide"
Button 1 (ZH): "开放日日历 →"
Button 2 (ZH): "开放日攻略 →"
```

---

## Page 3: `/dsa-interview` page

**File:** find the component that renders `/dsa-interview` route.

**What to add:** A CTA at the very bottom, before `<SiteFooter>`:

```
Heading (EN): "Ready to find the right school for your child's talent?"
Heading (ZH): "准备好为孩子找到才能匹配的学校了吗？"
Body (EN): "Search 1,300+ talent areas across 147 Singapore secondary schools."
Body (ZH): "搜索 147 所中学的 1,300+ 才能领域。"
Button (EN): "Search talent areas →"   href="/dsa-finder"
Button (ZH): "搜索才能领域 →"
```

---

## Notes for all three pages
- Use `const { t, locale } = useLanguage()` — if `locale` isn't already destructured, add it
- `Link` from `next/link` should already be imported; if not, add it
- Hardcoded EN/ZH only (no i18n keys needed — consistent with recent additions)
- Run `npx tsc --noEmit` after all three changes to confirm zero errors
