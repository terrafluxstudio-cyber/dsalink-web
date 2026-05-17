# Cursor Task: Nav Restructure + Homepage Section Reorder

## Files involved
- `lib/i18n.ts`
- `components/SiteHeader.tsx`
- `app/page.tsx`

No file overlaps with CURSOR_TASK_seo_sitemap_schema — these two tasks can run in parallel.

## Serial dependency within this task
**Do `lib/i18n.ts` BEFORE `components/SiteHeader.tsx`.** SiteHeader uses `t.navOpenHouseGuide`
from the i18n context; the type must be satisfied first so TypeScript compilation succeeds.
`app/page.tsx` is independent and can be done at any point.

---

## Change 1 — `lib/i18n.ts`: Verify / add `navOpenHouseGuide`

### Check first
Run a search in `lib/i18n.ts` for `navOpenHouseGuide`.

All four locales already define this key:
- `Copy` type (line ~112): `navOpenHouseGuide: string;`
- `en` locale: `navOpenHouseGuide: "Open House Guide"`
- `zh` locale: `navOpenHouseGuide: "开放日指南"`
- `ms` locale: `navOpenHouseGuide: "Panduan Hari Terbuka"`
- `ta` locale: currently `"திறந்த வீடு வழிகாட்டி"`

**The only change needed in `lib/i18n.ts`:** update the Tamil value if it reads `"திறந்த வீடு வழிகாட்டி"`.
Change it to:

```ts
navOpenHouseGuide: "திறந்த நாள் வழிகாட்டி",
```

If it already reads `"திறந்த நாள் வழிகாட்டி"`, leave it unchanged. All other locales are correct as-is.

---

## Change 2 — `components/SiteHeader.tsx`: Restructure navigation

### 2a — Add ChevronDown to lucide import

Current import line:

```ts
import { GraduationCap, Menu, X } from "lucide-react";
```

Replace with:

```ts
import { ChevronDown, GraduationCap, Menu, X } from "lucide-react";
```

### 2b — Add dataMenuOpen state

Find the existing state declaration:

```ts
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
```

Add a second state on the line immediately after it:

```ts
  const [dataMenuOpen, setDataMenuOpen] = useState(false);
```

### 2c — Replace navLinks and desktop nav

Find and delete the entire `navLinks` const:

```ts
  const navLinks = [
    { href: "/faq", label: t.navFaq },
    { href: "/dsa-guide", label: t.navDsaGuide },
    { href: "/dsa-experience", label: t.navDsaExperience },
    { href: "/dsa-finder", label: t.navDsaFinder },
    { href: "/open-houses", label: t.navOpenHouses },
    { href: "/schools", label: t.navSchools },
    { href: "/psle-cop", label: t.navScores },
    { href: "/dsa-interview", label: t.navDsaInterview },
  ] as const;
```

Replace it with three grouped consts:

```tsx
  const mainLinks = [
    { href: "/faq", label: t.navFaq },
    { href: "/dsa-guide", label: t.navDsaGuide },
    { href: "/dsa-interview", label: t.navDsaInterview },
  ] as const;

  const featuredLinks = [
    { href: "/dsa-experience", label: t.navDsaExperience },
    { href: "/open-house-guide", label: t.navOpenHouseGuide },
  ] as const;

  const dataLinks = [
    { href: "/dsa-finder", label: t.navDsaFinder },
    { href: "/open-houses", label: t.navOpenHouses },
    { href: "/schools", label: t.navSchools },
    { href: "/psle-cop", label: t.navScores },
  ] as const;
```

### 2d — Replace the desktop nav inner content

Find the desktop nav block. It currently contains a single `navLinks.map()` loop followed by the LanguageToggle div:

```tsx
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 hover:text-white ${
                pathname === link.href ? "bg-white/10 text-white" : "text-white/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2">
            <LanguageToggle id="language-select-desktop" />
          </div>
```

Replace with:

```tsx
          {/* Main links */}
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 hover:text-white ${
                pathname === link.href ? "bg-white/10 text-white" : "text-white/70"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Featured links with ★ badge */}
          {featuredLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-1.5 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 hover:text-white ${
                pathname === link.href ? "bg-white/10 text-white" : "text-white/70"
              }`}
            >
              {link.label}
              <span className="text-champagne-light text-[11px]">★</span>
            </Link>
          ))}

          {/* Explore dropdown */}
          <div
            className="relative"
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setDataMenuOpen(false);
              }
            }}
          >
            <button
              onClick={() => setDataMenuOpen((v) => !v)}
              className={`flex items-center gap-0.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 hover:text-white ${
                dataLinks.some((l) => l.href === pathname) ? "bg-white/10 text-white" : "text-white/70"
              }`}
            >
              Explore
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${dataMenuOpen ? "rotate-180" : ""}`} aria-hidden />
            </button>
            {dataMenuOpen && (
              <div className="absolute right-0 top-full z-50 mt-1 min-w-[160px] rounded-xl border border-white/10 bg-intellectual/98 py-1 shadow-lg backdrop-blur-md">
                {dataLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setDataMenuOpen(false)}
                    className={`block px-4 py-2 text-[0.8125rem] normal-case transition hover:bg-white/10 hover:text-white ${
                      pathname === link.href ? "text-white" : "text-white/75"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="ml-2">
            <LanguageToggle id="language-select-desktop" />
          </div>
```

### 2e — Replace the mobile drawer nav content

Find the mobile drawer nav section. It currently contains a single `navLinks.map()` loop:

```tsx
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium normal-case transition hover:bg-white/10 hover:text-white ${
                    pathname === link.href ? "bg-white/10 text-white" : "text-white/75"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-white/10 pt-3">
                <LanguageToggle id="language-select-mobile" />
              </div>
```

Replace with:

```tsx
              {/* All non-data links */}
              {[...mainLinks, ...featuredLinks].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium normal-case transition hover:bg-white/10 hover:text-white ${
                    pathname === link.href ? "bg-white/10 text-white" : "text-white/75"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.href === "/dsa-experience" || link.href === "/open-house-guide"
                    ? <>{link.label} <span className="text-champagne-light text-[10px]">★</span></>
                    : link.label}
                </Link>
              ))}
              {/* Explore section */}
              <div className="mt-1 border-t border-white/10 pt-2">
                <p className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/35">Explore</p>
                {dataLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium normal-case transition hover:bg-white/10 hover:text-white ${
                      pathname === link.href ? "bg-white/10 text-white" : "text-white/75"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="mt-2 border-t border-white/10 pt-3">
                <LanguageToggle id="language-select-mobile" />
              </div>
```

---

## Change 3 — `app/page.tsx`: Reorder homepage sections

Find the current section order in the `<main>` block:

```tsx
        <HomepageSubscribeBanner />
        <DsaExperienceCallout />
        <SeoTextBlock />
        <ResourceCards />
```

Replace with:

```tsx
        <DsaExperienceCallout />
        <SeoTextBlock />
        <HomepageSubscribeBanner />
        <ResourceCards />
```

This places `SeoTextBlock` (light background) between `DsaExperienceCallout` and `HomepageSubscribeBanner` (both dark), creating visual separation and avoiding two consecutive dark sections.

No import changes needed — all four components are already imported in `app/page.tsx`.

---

## Verification steps

1. Run `npm run build` — confirm zero TypeScript errors. In particular, verify `t.navOpenHouseGuide` resolves without error in SiteHeader.
2. On desktop (≥768px), confirm the nav shows: `DSA Basics` | `DSA Guide` | `Interview Prep` | `Parent Playbook ★` | `Open House Guide ★` | `Explore ▼` | language toggle.
3. Click `Explore` dropdown — confirm it opens and lists: DSA Finder, Open houses, Schools, PSLE COP.
4. Clicking a link in the Explore dropdown closes it and navigates correctly.
5. Keyboard / focus-out: tabbing away from the Explore dropdown closes it (onBlur guard).
6. On mobile, open the drawer — confirm top section shows main + featured links (with ★ on the two featured), then an "Explore" subheading, then the 4 data links.
7. Switching language (EN/ZH/MS/TA) — confirm `Open House Guide` / `开放日指南` / `Panduan Hari Terbuka` / `திறந்த நாள் வழிகாட்டி` renders correctly in the nav.
8. On the homepage, scroll down and confirm the visual order is: `DsaExperienceCallout` → `SeoTextBlock` → `HomepageSubscribeBanner` → `ResourceCards`. There should be a light-background section between the two dark sections.
