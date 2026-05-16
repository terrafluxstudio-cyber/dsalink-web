# Cursor Task: SeoTextBlock — remove Block 3 and dead i18n keys

---

## Change 1 — Remove Block 3 from `components/SeoTextBlock.tsx`

The file has 4 blocks inside a `<div className="flex flex-col gap-4">`:
- Block 1: "What is DSA-Sec?" (white box, left border)
- Block 2: Commitment Rules (dark navy)
- **Block 3: DSALink Advantage** ← REMOVE THIS ENTIRE BLOCK
- Block 4: About DSALink (warm background)

**Remove the entire Block 3** — the `<div>` that starts with the comment `{/* 3 — DSALink Advantage */}` and contains the champagne-background stats section with `text-5xl font-extrabold` display numbers.

Block 1, Block 2, and Block 4 stay untouched.

---

## Change 2 — Remove dead keys from `lib/i18n.ts`

### 2a. Remove from the `Copy` interface (type declarations)

Find and remove these lines from the `interface Copy { ... }` block:
```
dsa_advantage_overline: string;
dsa_advantage_title: string;
dsa_advantage_lead: string;
dsa_stat1_num: string;
dsa_stat1_label: string;
dsa_stat1_sub: string;
dsa_stat2_num: string;
dsa_stat2_label: string;
dsa_stat2_sub: string;
dsa_stat3_num: string;
dsa_stat3_label: string;
dsa_stat3_sub: string;
```

### 2b. Remove from each locale object in the `copy` constant

Remove the corresponding key-value pairs from ALL 4 locale objects (en, zh, ms, ta):
- `dsa_advantage_overline`
- `dsa_advantage_title`
- `dsa_advantage_lead`
- `dsa_stat1_num`, `dsa_stat1_label`, `dsa_stat1_sub`
- `dsa_stat2_num`, `dsa_stat2_label`, `dsa_stat2_sub`
- `dsa_stat3_num`, `dsa_stat3_label`, `dsa_stat3_sub`

---

## After changes

Run:
```
npx tsc --noEmit
```
Fix any TypeScript errors. The page should render without the big numbers section, and the 3 remaining blocks (What is DSA, Commitment Rules, About DSALink) should display correctly.
