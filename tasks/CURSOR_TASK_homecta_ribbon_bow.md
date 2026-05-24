# CURSOR TASK: HomeCtaBlock — Gold Ribbon + 3D Bow Corner Decoration

## Goal
Replace the current SVG decoration in `components/HomeCtaBlock.tsx` with a polished gold diagonal ribbon + 3D bow that sits at the top-right corner of the card.

**Reference**: Think gift box packaging — two ribbon strips crossing at the top-right corner, tied into a 3D bow with visible loop volume and center knot.

---

## Current State

`components/HomeCtaBlock.tsx` already has a placeholder SVG at `right-0 top-0` (Layer 4). It uses gradients and paths but the visual result needs improvement. **Rewrite this layer entirely.**

The outer card container is:
```tsx
<div className="relative mt-5 overflow-hidden rounded-2xl" ...>
```
`overflow-hidden` clips anything outside the rounded card — use this to your advantage.

---

## What to Build

### Ribbon strips
- **Horizontal**: thin gold band along the very top of the card
- **Vertical**: thin gold band along the very right edge of the card
- Width: ~14–16px each
- Both should go edge-to-edge (full width / full height of their respective edges)
- Gold gradient: light `#fef3c7` highlight → mid `#d4a84b` → dark `#92702a` shadow
- The horizontal ribbon has a lighter top edge and darker bottom edge (gives 3D depth)
- The vertical ribbon has a darker left edge and lighter right edge

### 3D Bow
- Positioned at the intersection of the two ribbons (top-right corner area)
- Two loops: one pointing upper-left, one pointing upper-right (classic bow shape)
- Each loop uses a radial gradient: bright highlight at the "peak" of the loop fading to dark shadow at the base
- A center knot: small ellipse with highlight dot to show roundness
- Two tails hanging down from the knot (ribbon tails, not too long)
- Drop shadow on the bow loops (`filter: drop-shadow`) to lift them off the card surface
- Overall bow width: ~56–64px

### Colors (gold palette)
- Highlight: `#fef9c3` / `#fefce8`
- Mid gold: `#d4a84b` / `#c6a24a`
- Deep shadow: `#7a4f10` / `#3a2006`

---

## Implementation Notes

- Keep the wrapping div as: `className="pointer-events-none absolute right-0 top-0 z-20"`
- Size: `h-[96px] w-[110px] sm:h-[108px] sm:w-[124px]` (adjust as needed for visual fit)
- Use unique SVG gradient/filter IDs prefixed with `hcta` to avoid conflicts
- The bow should look lifted/3D — use `feDropShadow` filter on the loops
- The two ribbon strips should look like real ribbon — include a thin highlight stripe and a thin shadow stripe within each band
- No text, no labels — purely decorative

---

## Validation

1. View `/` on mobile (375px) — bow is visible at top-right corner of the CTA card
2. View on desktop — bow scales proportionally, doesn't overlap the headline text
3. The ribbon strips follow the card's `rounded-2xl` corners naturally via `overflow-hidden`
4. The decoration looks like a gold gift bow, not a flat sticker

---

## File to Edit

`components/HomeCtaBlock.tsx` — only the Layer 4 `<div>` block (the SVG section). Do not touch any other part of the file.
