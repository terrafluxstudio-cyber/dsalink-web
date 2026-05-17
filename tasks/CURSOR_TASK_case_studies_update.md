# Cursor Task: Case Studies — Disclaimer Fix + Section Reorder

## File to edit (only this one)
`content/dsa-experience.tsx`

---

## Background

The `case-studies` section already exists in `SECTIONS_EN` and is currently positioned **between `section-3` and `section-4`**. Two changes are needed:

1. Fix the disclaimer paragraph text inside the `case-studies` section.
2. Move the entire `case-studies` object to appear **between `section-1` and `section-2`** instead.

Do **not** touch `SECTIONS_ZH`, `SECTIONS_MS`, or `SECTIONS_TA`. The case-studies section does not exist in those arrays and should not be added here.

---

## Change 1 — Fix the disclaimer paragraph text

Inside the `case-studies` section object (currently around line 164–168 in `SECTIONS_EN`), find the existing intro paragraph inside `paragraphs: [...]`:

**Find this exact string:**
```
"DSA works differently depending on the talent, the school, and the year. These six composite stories — drawn from patterns reported by families across forums, parent networks, and school communities — illustrate how different the experience can be. Names, scores, and identifying details have been changed.",
```

**Replace with:**
```
"DSA works differently depending on the talent, the school, and the year. These six illustrative scenarios are composite examples — drawn from documented DSA mechanisms, publicly verified outcomes, and patterns that consistently appear across parent communities. They are designed to show range, not to represent any specific family. Names, scores, and details are illustrative.",
```

This change corrects the framing. The original wording implied the stories were reported by specific families; the replacement makes clear they are illustrative composites based on documented mechanisms.

---

## Change 2 — Move the `case-studies` section object in `SECTIONS_EN`

The `SECTIONS_EN` array currently contains sections in this order:

```
section-1
section-2
section-3
case-studies     ← currently here
section-4
...
```

Move the entire `{ id: "case-studies", ... }` object (from the opening `{` to its closing `},`) so the order becomes:

```
section-1
case-studies     ← new position
section-2
section-3
section-4
...
```

### How to locate the block to move

The `case-studies` object starts at the line containing:
```ts
    id: "case-studies",
```

It ends at the closing `},` that follows the last `caseStudies` entry (the one for `"When PSLE Exceeded Expectations"` with `icon: "risk"`). The closing sequence looks like:
```ts
      },
    ],
  },
```
where the final `},` closes the `case-studies` section object.

Cut the entire block (including its surrounding blank lines for readability) and paste it after the closing `},` of `section-1` and before the opening `{` of `section-2`.

The `section-1` object ends with a closing `},` after its `callouts` array. The `section-2` object begins with `{ id: "section-2",`.

### No TOC changes required

The `getDsaExperienceToc` function (around line 1215) generates TOC entries dynamically by iterating over the sections array in order. Moving the section in the array is sufficient — the TOC will automatically reflect the new position. Do not manually edit `getDsaExperienceToc` or its output.

---

## Verification steps

1. Run `npm run build` — must complete with zero TypeScript errors.
2. Start the dev server and open `/dsa-experience` in the browser with locale set to EN (default).
3. Scroll down from the top. The "Six Families. Six Different DSA Pathways." section must appear **immediately after** the first section ("What Is DSA and How It Actually Works") and **before** the "The Most Important Rule" section.
4. Check the intro paragraph inside the case-studies section. It must read:
   > "DSA works differently depending on the talent, the school, and the year. These six illustrative scenarios are composite examples — drawn from documented DSA mechanisms, publicly verified outcomes, and patterns that consistently appear across parent communities. They are designed to show range, not to represent any specific family. Names, scores, and details are illustrative."
   The old phrase "drawn from patterns reported by families across forums, parent networks, and school communities" must not appear anywhere in the rendered page.
5. Open the TOC (table of contents / side nav). The "Six Families" entry should appear as Section 2, and all subsequent sections should be numbered accordingly.
6. Switch locale to ZH, MS, and TA. Confirm the case-studies section does **not** appear on those pages — the EN-only change must not bleed into other locales.
