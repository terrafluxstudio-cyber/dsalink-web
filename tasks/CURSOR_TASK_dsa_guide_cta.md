# Cursor Task: Add next-step CTA to DsaGuidePageBody

## File to edit
`components/DsaGuidePageBody.tsx`

## What to add
Insert a "next step" CTA block inside `<main>`, **after** the closing `</div>` of the `max-w-5xl` content wrapper and **before** `</main>`.

The pattern is identical to what was added at the bottom of `OpenHouseGuidePageBody.tsx` — a full-width card with a heading, short description, and two CTA links.

## Exact insertion point
Current end of the component (lines ~215–221):
```tsx
          </section>
        </div>         ← close the max-w-5xl px-4 py-12 wrapper
      </main>
      <SiteFooter scheduleNote={t.dsaGuideFooterScheduleNote} />
```

Add the new block between `</div>` and `</main>`, so it spans full-width outside the max-w-5xl wrapper but is still inside main.

## Content (hardcoded EN/ZH — no i18n needed)

Use `locale` from `useLanguage()` which is already destructured in the component.

```tsx
{/* ── Next Step CTA ── */}
<div className="border-t border-intellectual/[0.06] bg-surface-subtle py-10 sm:py-12">
  <div className="mx-auto max-w-5xl px-4 sm:px-6">
    <div className="flex flex-col items-start gap-4 rounded-2xl border border-intellectual/12 bg-white p-6 shadow-soft ring-1 ring-champagne/15 sm:flex-row sm:items-center sm:justify-between sm:p-8">
      <div>
        <p className="text-[10px] font-bold normal-case tracking-widest text-champagne-dark">
          {locale === "zh" ? "下一步" : "NEXT STEP"}
        </p>
        <h3
          style={{ textTransform: "none" }}
          className="mt-1.5 font-display text-base font-semibold text-intellectual sm:text-lg"
        >
          {locale === "zh"
            ? "了解时间线之后：找到适合孩子的学校。"
            : "Now you know the timeline. Find the right school."}
        </h3>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-intellectual-muted">
          {locale === "zh"
            ? "用 DSA 搜索器按孩子的才能领域找到匹配学校，或浏览全部 147 所中学及其 ALP、LLP 和录取分数资料。"
            : "Use the DSA Finder to search by your child's talent area, or browse all 147 secondary schools with ALP, LLP, and PSLE COP data."}
        </p>
      </div>
      <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
        <Link
          href="/dsa-finder"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-intellectual px-5 py-2.5 text-sm font-semibold normal-case text-white transition hover:bg-intellectual-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-intellectual"
        >
          {locale === "zh" ? "搜索才能领域 →" : "Search talent areas →"}
        </Link>
        <Link
          href="/schools"
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-intellectual/20 bg-white px-5 py-2.5 text-sm font-semibold normal-case text-intellectual transition hover:border-intellectual/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-intellectual"
        >
          {locale === "zh" ? "浏览学校目录 →" : "Browse school directory →"}
        </Link>
      </div>
    </div>
  </div>
</div>
```

## Notes
- `Link` from `next/link` is already imported in this file
- `locale` is already available from `const { t, locale } = useLanguage()` — check if `locale` is destructured; if only `t` is destructured, add `locale` to the destructuring
- Run `npx tsc --noEmit` to verify no type errors after the change
