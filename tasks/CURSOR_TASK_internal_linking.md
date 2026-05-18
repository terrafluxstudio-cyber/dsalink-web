# Cursor Task: Internal Linking — Cross-Page Navigation

## Overview

Add reciprocal links between related pages so users can navigate naturally between content. Current gaps:
- `/dsa-interview` related links section missing `/dsa-coaches`
- `/dsa-coaches` has no link back to `/dsa-interview`
- Footer missing `/dsa-coaches`
- Homepage `FeaturedGuidesSection` or `DsaStrategySection` not linking to `/dsa-coaches`

**NOTE: Run AFTER `CURSOR_TASK_coaches_expand.md` because that task adds `dsaInterviewLinkCoaches` i18n key.**

---

## Files to modify

1. `components/DsaInterviewPageBody.tsx`
2. `components/DsaCoachesPageBody.tsx`
3. `components/SiteFooter.tsx`

---

## Step 1: Add `/dsa-coaches` to interview page related links

### In `components/DsaInterviewPageBody.tsx`

Find the `relatedLinks` array:
```tsx
  const relatedLinks = [
    { href: "/open-houses", label: t.dsaInterviewLinkOpenHouses },
    { href: "/schools", label: t.dsaInterviewLinkSchools },
    { href: "/dsa-guide", label: t.dsaInterviewLinkDsaGuide },
    { href: "/faq", label: t.dsaInterviewLinkFaq },
    { href: "/psle-cop", label: t.dsaInterviewLinkPsleCop },
  ];
```

Replace with:
```tsx
  const relatedLinks = [
    { href: "/dsa-coaches", label: t.dsaInterviewLinkCoaches },
    { href: "/open-houses", label: t.dsaInterviewLinkOpenHouses },
    { href: "/schools", label: t.dsaInterviewLinkSchools },
    { href: "/dsa-guide", label: t.dsaInterviewLinkDsaGuide },
    { href: "/faq", label: t.dsaInterviewLinkFaq },
    { href: "/psle-cop", label: t.dsaInterviewLinkPsleCop },
  ];
```

---

## Step 2: Add "Interview Prep →" link from coaches page

### In `components/DsaCoachesPageBody.tsx`

Find the CTA section at the bottom (the `<div className="mt-12 rounded-xl border border-champagne/40 ...">` block) and insert this BEFORE it:

```tsx
        {/* ── Cross-link to Interview Prep ── */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#e3ded5] bg-white px-5 py-4 shadow-card">
          <p className="text-[0.9375rem] font-medium text-slate-700">
            {locale === "zh"
              ? "准备好辅导之后，查看我们的面试准备指南"
              : "Once you've found a coach, prepare for the trial and interview"}
          </p>
          <Link
            href="/dsa-interview"
            className="shrink-0 rounded-lg bg-intellectual px-4 py-2 text-[0.8125rem] font-semibold text-white transition hover:bg-intellectual/90"
          >
            {locale === "zh" ? "面试准备指南 →" : "Interview Prep Guide →"}
          </Link>
        </div>
```

**Also add `locale` to the destructured hook:**

Find:
```tsx
  const { t } = useLanguage();
```

Replace with:
```tsx
  const { t, locale } = useLanguage();
```

---

## Step 3: Add `/dsa-coaches` to the footer

### In `components/SiteFooter.tsx`

Find the footer link for `/dsa-interview`:
```tsx
                <Link href="/dsa-interview" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
```

Insert this BEFORE it (so coaches appears right before interview prep in the footer):
```tsx
                <Link href="/dsa-coaches" className="text-[0.8125rem] text-white/50 transition hover:text-white/80 normal-case">
                  {t.navDsaCoaches}
                </Link>
```

---

## Verification

1. `npm run build` — no TypeScript errors
2. `/dsa-interview` related links section shows "DSA coach directory →" as the first link
3. `/dsa-coaches` bottom bar links to `/dsa-interview` with "Interview Prep Guide →"
4. Footer includes "Coach Directory" link between the guides and interview prep
5. EN↔ZH toggle — all new links show in correct language
6. All links navigate to correct destination pages

---

## Git commit

```
git add components/DsaInterviewPageBody.tsx components/DsaCoachesPageBody.tsx components/SiteFooter.tsx
git commit -m "feat: add reciprocal internal links between /dsa-coaches and /dsa-interview, update footer"
```
