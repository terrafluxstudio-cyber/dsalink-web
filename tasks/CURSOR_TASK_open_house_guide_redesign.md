# Cursor Task: Open House Guide — New Content Sections + UI Redesign

## Files to edit (exactly two)

1. `components/OpenHouseGuidePageBody.tsx`
2. `locales/en.json`

Do **not** touch `app/open-house-guide/page.tsx`. Do not create new files.

---

## Background

The `/open-house-guide` page currently has seven sections. This task adds three new
sections between the existing "10 Questions" block and the "Featured Schools" block:

- **Section A: "Questions to Ask Staff & Teachers"** — 8 questions (new, replaces nothing)
- **Section B: "Questions to Ask Current Students"** — 7 questions (new, replaces nothing)
- **Section C: "What to Observe — Not Just Ask"** — 4-item observe checklist (new)
- **Section D: "Practical Logistics"** — 4-item tip box (new)

Sections A and B are rendered as a two-column grid (desktop) / stacked (mobile) inside
one `<section>` wrapper, matching the existing "10 Questions" two-column layout but with
fresh data and a stronger heading that highlights the student-conversation insight.

Sections C and D are each their own `<section>` with the standard `border-t` separator.

The existing content stays untouched. These sections are inserted after the amber "Booth
Strategy" callout card and before the `aria-labelledby="featured-heading"` section.

---

## Change 1 — Add i18n keys to `locales/en.json`

Find the key `"ohGuide_after3_body"` in `locales/en.json`. After its closing `",` line,
insert the following block (keep valid JSON — ensure there is a comma after the preceding
key if one doesn't already exist):

```json
  "ohGuide_staffQ_heading": "Questions to Ask School Staff and Teachers",
  "ohGuide_staffQ_lead": "Booth staff and CCA teachers are the right people for these. Ask them at the DSA booth, not during the general auditorium talk.",
  "ohGuide_staffQ_cat_label": "Ask school staff / CCA teachers",
  "ohGuide_staffQ1": "What do successful DSA candidates in this sport or art typically have in common?",
  "ohGuide_staffQ2": "What does the school look for specifically during trials or auditions — beyond raw ability?",
  "ohGuide_staffQ3": "Does the school consider applicants without competition experience? What does 'potential' mean here in practice?",
  "ohGuide_staffQ4": "How many DSA spots are available in this specific talent area? (Note: schools often won't put this in writing — ask directly.)",
  "ohGuide_staffQ5": "What is the weekly CCA training schedule, and which competitions or performances are mandatory?",
  "ohGuide_staffQ6": "If a student falls behind academically, what support systems exist — and does the CCA schedule adjust?",
  "ohGuide_staffQ7": "For schools with both IP and O Level tracks: will this DSA offer be for the IP or O Level programme?",
  "ohGuide_staffQ8": "Are students admitted via DSA expected to remain in that CCA throughout all four years of secondary school?",
  "ohGuide_studentQ_heading": "Questions to Ask Currently-Enrolled Students",
  "ohGuide_studentQ_lead": "Research consistently shows that conversations with current students — especially at CCA booths — provide more useful information than official presentations. Seek them out.",
  "ohGuide_studentQ_cat_label": "Ask current students (CCA booth, not student guides)",
  "ohGuide_studentQ_insight": "The open house insight most parents miss",
  "ohGuide_studentQ_insightBody": "Student guides are briefed to represent the school positively. CCA booth students are usually less coached — they're there to demonstrate their activity. Those are the conversations worth having.",
  "ohGuide_studentQ1": "Why did you choose this school? Were you considering other options, and what made this one win?",
  "ohGuide_studentQ2": "Are DSA students treated differently from those who entered through PSLE posting — socially or in class?",
  "ohGuide_studentQ3": "What is your actual weekly training schedule — number of sessions, hours, and how many competitions are mandatory?",
  "ohGuide_studentQ4": "What has been the hardest thing about secondary school here?",
  "ohGuide_studentQ5": "Have you grown in your talent area since joining, or does school training mostly maintain where you were?",
  "ohGuide_studentQ6": "Do you or your teammates use private coaches on top of school training?",
  "ohGuide_studentQ7": "If you could change one thing about the school's CCA programme, what would it be?",
  "ohGuide_observe_heading": "What to Observe — Not Just Ask",
  "ohGuide_observe_lead": "Some of the most useful signals at an open house cannot be asked about. Look for these.",
  "ohGuide_observe1_title": "Student volunteers",
  "ohGuide_observe1_body": "Do they seem genuinely enthusiastic, or are they performing a rehearsed role? Students who volunteer specifics unprompted are a stronger signal than students who stay on-script.",
  "ohGuide_observe2_title": "CCA demonstrations",
  "ohGuide_observe2_body": "Are they showing real, in-progress work — rehearsals, drills, live practice — or polished showcase pieces prepared specifically for the open house?",
  "ohGuide_observe3_title": "Staff accessibility",
  "ohGuide_observe3_body": "Are subject teachers and CCA coaches accessible for direct conversation, or are they only present at formal timed talks? Accessible teachers signal a more open culture.",
  "ohGuide_observe4_title": "Corridors and common areas",
  "ohGuide_observe4_body": "What student work is displayed — recent, specific, named? Generic trophies and laminated press clippings from 2019 tell a different story than current student artwork or project writeups.",
  "ohGuide_logistics_heading": "Practical Logistics",
  "ohGuide_logistics_lead": "Forum-tested advice on getting the most out of the day itself.",
  "ohGuide_logistics1": "Popular school open houses are crowded. Arrive with a prioritised list of talks and CCA booths — decide in advance what you will skip if queues are long.",
  "ohGuide_logistics2": "CCA booths offer the most useful conversations. Prioritise time there over the school auditorium talk, which covers the same content as the website.",
  "ohGuide_logistics3": "Some schools cancel open houses without much notice — ACS Barker cancelled in 2024. Confirm the date on the school website within 48 hours of visiting.",
  "ohGuide_logistics4": "Check the school's official social media (Instagram, Facebook) before visiting. The posts from the last 6 months tell you more about current student life than any brochure."
```

---

## Change 2 — Update the Lucide import in `OpenHouseGuidePageBody.tsx`

Find this line near the top of the file:

```ts
import {
  AlertCircle,
  CheckCircle,
  ExternalLink,
  Eye,
  ListChecks,
  XCircle,
} from "lucide-react";
```

Replace it with:

```ts
import {
  AlertCircle,
  CheckCircle,
  Clock,
  ExternalLink,
  Eye,
  ListChecks,
  MessageSquare,
  XCircle,
} from "lucide-react";
```

---

## Change 3 — Add data constants to `OpenHouseGuidePageBody.tsx`

Find this block in the file (after the `AFTER_STEPS` constant and before the
`type FeaturedSchool` declaration):

```ts
const AFTER_STEPS: Array<{ titleKey: TKey; bodyKey: TKey }> = [
  { titleKey: "ohGuide_after1_title", bodyKey: "ohGuide_after1_body" },
  { titleKey: "ohGuide_after2_title", bodyKey: "ohGuide_after2_body" },
  { titleKey: "ohGuide_after3_title", bodyKey: "ohGuide_after3_body" },
];
```

After that block (before `type FeaturedSchool`), insert:

```ts
const STAFF_QUESTIONS: TKey[] = [
  "ohGuide_staffQ1",
  "ohGuide_staffQ2",
  "ohGuide_staffQ3",
  "ohGuide_staffQ4",
  "ohGuide_staffQ5",
  "ohGuide_staffQ6",
  "ohGuide_staffQ7",
  "ohGuide_staffQ8",
];

const STUDENT_QUESTIONS: TKey[] = [
  "ohGuide_studentQ1",
  "ohGuide_studentQ2",
  "ohGuide_studentQ3",
  "ohGuide_studentQ4",
  "ohGuide_studentQ5",
  "ohGuide_studentQ6",
  "ohGuide_studentQ7",
];

const OBSERVE_ITEMS: Array<{ titleKey: TKey; bodyKey: TKey }> = [
  { titleKey: "ohGuide_observe1_title", bodyKey: "ohGuide_observe1_body" },
  { titleKey: "ohGuide_observe2_title", bodyKey: "ohGuide_observe2_body" },
  { titleKey: "ohGuide_observe3_title", bodyKey: "ohGuide_observe3_body" },
  { titleKey: "ohGuide_observe4_title", bodyKey: "ohGuide_observe4_body" },
];

const LOGISTICS_TIPS: TKey[] = [
  "ohGuide_logistics1",
  "ohGuide_logistics2",
  "ohGuide_logistics3",
  "ohGuide_logistics4",
];
```

---

## Change 4 — Insert new JSX sections into the component

### Exact insertion point

Find this comment in the JSX (inside the `<div className="mx-auto max-w-5xl...">` wrapper):

```tsx
          {/* ── Section 5: Featured Schools ── */}
```

Insert the following four JSX blocks **immediately before** that comment, after the
closing `</div>` of the amber "Booth Strategy" callout (which ends with `</div>`
followed by two blank lines before Section 5).

### Blocks to insert

```tsx
          {/* ── Section A: Questions to Ask Staff & Teachers ── */}
          {/* ── Section B: Questions to Ask Current Students  ── */}
          <section
            aria-labelledby="staff-student-questions-heading"
            className="mt-20 border-t border-intellectual/[0.06] pt-14 sm:mt-24 sm:pt-16"
          >
            {/* Section heading — scoped to the staff sub-section */}
            <h2
              id="staff-student-questions-heading"
              style={{ textTransform: "none" }}
              className="font-display text-lg font-semibold normal-case text-intellectual sm:text-xl"
            >
              {t.ohGuide_staffQ_heading}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.ohGuide_staffQ_lead}
            </p>

            {/* Two-column grid: staff questions left, student questions right */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">

              {/* ── Staff / Teacher questions ── */}
              <div className="rounded-2xl border border-intellectual/12 bg-white/95 p-5 shadow-soft ring-1 ring-champagne/15 sm:p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-champagne/30 bg-champagne-subtle/70">
                  <MessageSquare className="h-5 w-5 text-champagne-dark" aria-hidden />
                </div>
                <p className="text-[10px] font-bold normal-case tracking-wide text-champagne-dark">
                  {t.ohGuide_staffQ_cat_label}
                </p>
                <ol className="mt-4 space-y-3.5">
                  {STAFF_QUESTIONS.map((key, i) => (
                    <li key={String(key)} className="flex gap-3 text-sm">
                      <span className="mt-px shrink-0 font-mono text-[11px] font-bold tabular-nums text-champagne-dark">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-relaxed text-intellectual-muted">
                        {t[key]}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* ── Current student questions ── */}
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl border border-champagne/35 bg-gradient-to-br from-white to-champagne-subtle/50 p-5 shadow-sm ring-1 ring-intellectual/8 sm:p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-champagne/30 bg-champagne-subtle/70">
                    <MessageSquare className="h-5 w-5 text-champagne-dark" aria-hidden />
                  </div>
                  <p className="text-[10px] font-bold normal-case tracking-wide text-champagne-dark">
                    {t.ohGuide_studentQ_cat_label}
                  </p>
                  <ol className="mt-4 space-y-3.5">
                    {STUDENT_QUESTIONS.map((key, i) => (
                      <li key={String(key)} className="flex gap-3 text-sm">
                        <span className="mt-px shrink-0 font-mono text-[11px] font-bold tabular-nums text-champagne-dark">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="leading-relaxed text-intellectual-muted">
                          {t[key]}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Insight callout — the student conversation insight */}
                <div className="rounded-2xl border border-intellectual/12 bg-surface-warm p-5 ring-1 ring-champagne/15 sm:p-6">
                  <p className="text-[10px] font-bold normal-case tracking-wide text-champagne-dark">
                    {t.ohGuide_studentQ_insight}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-intellectual-muted">
                    {t.ohGuide_studentQ_insightBody}
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* ── Section C: What to Observe ── */}
          <section
            aria-labelledby="observe-heading"
            className="mt-20 border-t border-intellectual/[0.06] pt-14 sm:mt-24 sm:pt-16"
          >
            <h2
              id="observe-heading"
              style={{ textTransform: "none" }}
              className="font-display text-lg font-semibold normal-case text-intellectual sm:text-xl"
            >
              {t.ohGuide_observe_heading}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.ohGuide_observe_lead}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {OBSERVE_ITEMS.map(({ titleKey, bodyKey }) => (
                <div
                  key={String(titleKey)}
                  className="flex gap-4 rounded-2xl border border-intellectual/12 bg-white/95 p-5 shadow-soft ring-1 ring-champagne/15 sm:p-6"
                >
                  <div className="mt-0.5 shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-champagne/30 bg-champagne-subtle/70">
                    <Eye className="h-4 w-4 text-champagne-dark" aria-hidden />
                  </div>
                  <div>
                    <h3
                      style={{ textTransform: "none" }}
                      className="font-display text-sm font-semibold text-intellectual"
                    >
                      {t[titleKey]}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-intellectual-muted">
                      {t[bodyKey]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section D: Practical Logistics ── */}
          <section
            aria-labelledby="logistics-heading"
            className="mt-20 border-t border-intellectual/[0.06] pt-14 sm:mt-24 sm:pt-16"
          >
            <h2
              id="logistics-heading"
              style={{ textTransform: "none" }}
              className="font-display text-lg font-semibold normal-case text-intellectual sm:text-xl"
            >
              {t.ohGuide_logistics_heading}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-intellectual-muted sm:text-base">
              {t.ohGuide_logistics_lead}
            </p>
            <div className="mt-8 rounded-2xl border border-intellectual/12 bg-white/95 p-5 shadow-soft ring-1 ring-champagne/15 sm:p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-champagne/30 bg-champagne-subtle/70">
                <Clock className="h-5 w-5 text-champagne-dark" aria-hidden />
              </div>
              <ul className="space-y-4">
                {LOGISTICS_TIPS.map((key, i) => (
                  <li key={String(key)} className="flex gap-3 text-sm">
                    <span className="mt-px shrink-0 font-mono text-[11px] font-bold tabular-nums text-champagne-dark">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed text-intellectual-muted">
                      {t[key]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

```

---

## Change 5 — Add new keys to `lib/i18n.ts` Copy type

The `Copy` type in `lib/i18n.ts` is derived from the imported locale JSON files (it uses
`typeof dsaGuideEn` indirectly). After adding keys to `locales/en.json`, TypeScript will
automatically pick them up — **no manual edit to `lib/i18n.ts` is required** as long as
`Copy` uses the JSON-derived type pattern already in place.

If the build throws a type error on any new `t[key]` reference, check that the key name
in the JSX matches exactly (character-for-character) the key name added to `en.json`.

---

## Verification checklist

After making all changes, run:

```bash
npm run build
```

Expected: zero TypeScript errors. If you see `Type '"ohGuide_staffQ1"' is not assignable
to parameter of type 'TKey'`, the key in en.json does not match the key in the constant
array — fix the spelling.

Visual check (dev server):
- On desktop (≥ 640px): Sections A/B render as a two-column grid. Staff questions on
  the left in a white card; student questions + insight callout stacked on the right.
- On mobile (< 640px): both columns stack vertically, full width.
- Section C: two-column grid of four observe cards, each with an Eye icon on the left.
- Section D: single-column card with a Clock icon and four numbered tips.
- All four new sections appear between the amber "Booth Strategy" callout and the
  "Featured Schools" grid.

---

## Do not change

- `app/open-house-guide/page.tsx` — leave untouched
- Existing sections 1–7 in `OpenHouseGuidePageBody.tsx` — leave untouched
- The amber "Booth Strategy" callout (inline hardcoded EN/ZH) — leave untouched
- The "Next Step CTA" at the bottom — leave untouched
- `locales/zh.json`, `locales/ms.json`, `locales/ta.json` — leave untouched for now;
  Chinese and other translations can be added in a follow-up task
