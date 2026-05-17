# CURSOR TASK: Star Animation + Nav Star Spacing

Two small changes: animate the ★ stars site-wide, and tighten the gap between nav text and star.

---

## Change 1: Add sparkle keyframe animation to global CSS

**File**: `app/globals.css` (or wherever Tailwind custom utilities are defined)

Add a `@keyframes sparkle` animation and a `animate-sparkle` utility class:

```css
@keyframes sparkle {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.25); }
}

.animate-sparkle {
  animation: sparkle 2.4s ease-in-out infinite;
  display: inline-block;
}
```

---

## Change 2: Apply animation to all ★ stars in the nav

**File**: `components/SiteHeader.tsx`

Find every `<span ... aria-hidden>★</span>` that appears inside `featuredLinks` rendering (both desktop nav and mobile drawer). Add `animate-sparkle` to its className.

**Desktop nav featuredLinks** (find the block that maps over featuredLinks):
```tsx
// OLD
<span className="ml-0.5 text-champagne-light" aria-hidden>★</span>

// NEW — tighter spacing + animation
<span className="ml-0 text-champagne-light animate-sparkle" aria-hidden>★</span>
```

**Mobile drawer featuredLinks** (same pattern):
```tsx
// OLD
<span className="ml-0.5 text-champagne-light" aria-hidden>★</span>

// NEW
<span className="ml-0 text-champagne-light animate-sparkle" aria-hidden>★</span>
```

Also apply `animate-sparkle` to the standalone Interview Prep link's star if it has one. Check and apply to all nav ★ instances.

---

## Change 3: Apply animation to FeaturedGuideStrip star

**File**: `components/FeaturedGuideStrip.tsx`

Find:
```tsx
<span aria-hidden>★</span>
```

Replace with:
```tsx
<span aria-hidden className="animate-sparkle">★</span>
```

---

## Change 4: Apply animation to homepage section entry stars

**File**: `components/DsaExperienceCallout.tsx` and any other homepage component that renders a ★ badge.

Find any `aria-hidden>★</span>` pattern and add `animate-sparkle` to the className.

---

## Verification
1. `npm run build` — no errors
2. Visit site — nav "Parent Playbook ★" and "Open House Guide ★" stars gently pulse/sparkle
3. FeaturedGuideStrip kicker star also animates
4. Animation is subtle (2.4s cycle), not distracting
5. Stars remain close to their text labels (no extra gap)
