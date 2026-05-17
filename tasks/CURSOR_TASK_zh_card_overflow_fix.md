# CURSOR TASK: Fix Chinese Text Overflow in Case Study Cards

## Problem
On `/dsa-experience`, Chinese Playbook case study cards have text overflowing the card boundary. Chinese text is longer than the English equivalent and lacks automatic word-break points, causing layout issues.

## File
`components/CaseStudyCard.tsx`

---

## Fix 1: Add word-break handling to scenario text

**Find** (line ~112):
```tsx
<p className="mb-4 flex-1 text-[0.8125rem] leading-relaxed text-slate-600">
  {scenario}
</p>
```

**Replace with**:
```tsx
<p className="mb-4 flex-1 break-words text-[0.8125rem] leading-relaxed text-slate-600">
  {scenario}
</p>
```

`break-words` (`word-break: break-word`) allows long strings to break at arbitrary points if needed, preventing overflow.

---

## Fix 2: Add overflow protection to the card container

**Find** the outer card div (line ~89):
```tsx
<div
  className={`flex flex-col rounded-xl border p-5 shadow-card transition hover:shadow-card-hover ${styles.card}`}
>
```

**Replace with**:
```tsx
<div
  className={`flex min-w-0 flex-col overflow-hidden rounded-xl border p-5 shadow-card transition hover:shadow-card-hover ${styles.card}`}
>
```

`overflow-hidden` clips any content that escapes the rounded card boundary. `min-w-0` prevents flex children from forcing the card wider than its grid cell.

---

## Fix 3: Add overflow protection to the talentArea title

**Find** (line ~105):
```tsx
<p className="text-[0.8125rem] font-bold text-slate-900">{talentArea}</p>
```

**Replace with**:
```tsx
<p className="break-words text-[0.8125rem] font-bold text-slate-900">{talentArea}</p>
```

---

## Verification
1. `npm run build` — no TypeScript errors
2. Visit `/dsa-experience`, switch language to Chinese (ZH)
3. Scroll to "十二个家庭" section — all 12 cards render within their borders
4. No text escaping card boundaries on any viewport width (test mobile 375px and desktop)
5. English version unaffected
