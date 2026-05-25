# Cursor Task: Nav Restructure → 5 Groups + Star Sticker + /apply Entry

## Overview

Rewrite `SiteHeader.tsx` from the current 7-item flat/mixed nav into 5 clean dropdown groups. Add new i18n keys. Also add a glowing ⭐ sticker on "Apply for DSA". All 13 site pages must remain reachable from the nav.

Run `npx tsc --noEmit` after to verify zero new TypeScript errors.

---

## 1. `lib/i18n.ts` — Add new nav keys to Copy type and all 4 locale objects

### 1a. Copy type — add 11 new fields

Find the block of existing `nav*` fields (around line 103–145) and add these after `navOpenHouseMissed`:

```ts
navDsaGuideGroup: string;     // top-level dropdown trigger: "DSA Guide"
navWhatIsDsa: string;         // /dsa-guide dropdown item: "What is DSA?"
navParentStories: string;     // /dsa-experience dropdown item: "Parent Stories"
navApplyGroup: string;        // top-level dropdown trigger: "Apply for DSA"
navApplyChecklist: string;    // /apply dropdown item: "Application Checklist"
navFindCoach: string;         // /dsa-coaches dropdown item (gold): "Find a Coach"
navHowToVisit: string;        // /open-house-guide dropdown item: "How to Visit an Open House"
navSchoolFinderGroup: string; // top-level dropdown trigger: "School Finder"
navSearchSchools: string;     // /dsa-finder dropdown item: "Search Schools"
navAllSchools: string;        // /schools dropdown item: "All Schools"
navPsleCutoffs: string;       // /psle-cop dropdown item: "PSLE Cut-offs"
```

### 1b. `en` locale object — add values (after `navOpenHouseMissed: "Missed an Open House?"`)

```ts
navDsaGuideGroup: "DSA Guide",
navWhatIsDsa: "What is DSA?",
navParentStories: "Parent Stories",
navApplyGroup: "Apply for DSA",
navApplyChecklist: "Application Checklist",
navFindCoach: "Find a Coach",
navHowToVisit: "How to Visit an Open House",
navSchoolFinderGroup: "School Finder",
navSearchSchools: "Search Schools",
navAllSchools: "All Schools",
navPsleCutoffs: "PSLE Cut-offs",
```

### 1c. `zh` locale object — add values (after `navOpenHouseMissed: "错过了开放日？"`)

```ts
navDsaGuideGroup: "DSA 指南",
navWhatIsDsa: "什么是 DSA？",
navParentStories: "家长故事",
navApplyGroup: "申请 DSA",
navApplyChecklist: "申请清单",
navFindCoach: "寻找教练",
navHowToVisit: "如何参观开放日",
navSchoolFinderGroup: "学校搜索",
navSearchSchools: "搜索学校",
navAllSchools: "所有学校",
navPsleCutoffs: "PSLE 录取分数",
```

### 1d. `ms` locale object — add values (after `navOpenHouseMissed: "Terlepas Hari Terbuka?"`)

Find the ms `navOpenHouseMissed` line and insert after it:

```ts
navDsaGuideGroup: "Panduan DSA",
navWhatIsDsa: "Apa itu DSA?",
navParentStories: "Cerita Ibu Bapa",
navApplyGroup: "Mohon DSA",
navApplyChecklist: "Senarai Semak Permohonan",
navFindCoach: "Cari Jurulatih",
navHowToVisit: "Cara Melawat Hari Terbuka",
navSchoolFinderGroup: "Pencari Sekolah",
navSearchSchools: "Cari Sekolah",
navAllSchools: "Semua Sekolah",
navPsleCutoffs: "Potongan PSLE",
```

### 1e. `ta` locale object — add values (after `navOpenHouseMissed: "திறந்த நாளை தவறவிட்டீர்களா?"`)

Find the ta `navOpenHouseMissed` line and insert after it:

```ts
navDsaGuideGroup: "DSA வழிகாட்டி",
navWhatIsDsa: "DSA என்றால் என்ன?",
navParentStories: "பெற்றோர் கதைகள்",
navApplyGroup: "DSA விண்ணப்பிக்க",
navApplyChecklist: "விண்ணப்ப சரிபார்ப்பு பட்டியல்",
navFindCoach: "பயிற்சியாளரை கண்டறியுங்கள்",
navHowToVisit: "திறந்த நாளை எவ்வாறு பார்வையிடுவது",
navSchoolFinderGroup: "பள்ளி தேடல்",
navSearchSchools: "பள்ளிகளை தேடுங்கள்",
navAllSchools: "அனைத்து பள்ளிகளும்",
navPsleCutoffs: "PSLE கட்-ஆஃப்கள்",
```

---

## 2. `components/SiteHeader.tsx` — Full rewrite of nav structure

Replace the entire file content with the structure below. Keep the exact same imports, brand/logo, mobile toggle button, and LanguageToggle placement. Only the nav link groups change.

### Key changes from current code:
- Remove `mainLinks`, `featuredLinks`, `dataLinks` arrays
- Keep `openHouseLinks` concept but rename + add new groups
- Add `dsaGuideLinks`, `applyLinks`, `schoolFinderLinks` arrays
- Add `applyMenuOpen` state (new dropdown)
- Add `dsaGuideMenuOpen` state (new dropdown)
- Add `schoolFinderMenuOpen` state (new dropdown)
- Remove `openHouseMenuOpen` → rename to `openHouseMenuOpen` (keep)
- Remove `dataMenuOpen` → replace with `schoolFinderMenuOpen`

### New link arrays (place after `const { t } = useLanguage()` block):

```tsx
const dsaGuideLinks = [
  { href: "/dsa-guide", label: t.navWhatIsDsa },
  { href: "/faq", label: t.navFaq },
  { href: "/dsa-experience", label: t.navParentStories },
] as const;

const openHouseLinks = [
  { href: "/open-houses", label: t.navOpenHouseDates },
  { href: "/open-house-guide", label: t.navHowToVisit },
  { href: "/open-house-takeaways", label: t.navOpenHouseMissed, gold: true },
] as const;

const applyLinks = [
  { href: "/apply", label: t.navApplyChecklist },
  { href: "/dsa-interview", label: t.navDsaInterview },
  { href: "/dsa-coaches", label: t.navFindCoach, gold: true },
] as const;

const schoolFinderLinks = [
  { href: "/dsa-finder", label: t.navSearchSchools },
  { href: "/schools", label: t.navAllSchools },
  { href: "/psle-cop", label: t.navPsleCutoffs },
] as const;
```

### New state declarations (add alongside existing `mobileMenuOpen`):

```tsx
const [dsaGuideMenuOpen, setDsaGuideMenuOpen] = useState(false);
const [openHouseMenuOpen, setOpenHouseMenuOpen] = useState(false);
const [applyMenuOpen, setApplyMenuOpen] = useState(false);
const [schoolFinderMenuOpen, setSchoolFinderMenuOpen] = useState(false);
```

Remove the old `dataMenuOpen` state.

### Desktop nav — replace the entire `<nav>` block with:

```tsx
<nav
  className="hidden min-w-0 shrink-0 flex-nowrap items-center justify-end gap-0.5 md:flex"
  aria-label={t.a11yNavPrimary}
>
  {/* 1. DSA Guide dropdown */}
  <NavDropdown
    label={t.navDsaGuideGroup}
    isOpen={dsaGuideMenuOpen}
    onToggle={() => setDsaGuideMenuOpen((o) => !o)}
    onClose={() => setDsaGuideMenuOpen(false)}
    id="desktop-dsa-guide-menu"
    links={dsaGuideLinks}
    pathname={pathname}
  />

  {/* 2. Open Houses dropdown */}
  <NavDropdown
    label={t.navOpenHouse}
    isOpen={openHouseMenuOpen}
    onToggle={() => setOpenHouseMenuOpen((o) => !o)}
    onClose={() => setOpenHouseMenuOpen(false)}
    id="desktop-openhouse-menu"
    links={openHouseLinks}
    pathname={pathname}
  />

  {/* 3. Apply for DSA dropdown — with ⭐ sticker */}
  <NavDropdown
    label={t.navApplyGroup}
    isOpen={applyMenuOpen}
    onToggle={() => setApplyMenuOpen((o) => !o)}
    onClose={() => setApplyMenuOpen(false)}
    id="desktop-apply-menu"
    links={applyLinks}
    pathname={pathname}
    starSticker
  />

  {/* 4. School Finder dropdown */}
  <NavDropdown
    label={t.navSchoolFinderGroup}
    isOpen={schoolFinderMenuOpen}
    onToggle={() => setSchoolFinderMenuOpen((o) => !o)}
    onClose={() => setSchoolFinderMenuOpen(false)}
    id="desktop-school-finder-menu"
    links={schoolFinderLinks}
    pathname={pathname}
  />

  {/* 5. Blog — standalone gold badge link */}
  <Link
    href="/blog"
    className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-champagne/40 bg-champagne/15 px-3 py-1.5 text-[0.8125rem] font-medium normal-case text-champagne-light transition hover:bg-champagne/25 hover:text-white ${
      pathname === "/blog" ? "bg-champagne/30 text-white" : ""
    }`}
  >
    {t.navBlog}
    <span className="rounded bg-champagne px-1.5 py-px text-[9px] font-bold uppercase tracking-wide text-intellectual animate-pulse">
      New
    </span>
  </Link>

  <div className="ml-2">
    <LanguageToggle id="language-select-desktop" />
  </div>
</nav>
```

### NavDropdown helper component — add ABOVE `SiteHeader` function:

```tsx
type NavLink = { href: string; label: string; gold?: boolean };

function NavDropdown({
  label,
  isOpen,
  onToggle,
  onClose,
  id,
  links,
  pathname,
  starSticker = false,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  id: string;
  links: readonly NavLink[];
  pathname: string;
  starSticker?: boolean;
}) {
  const isActive = links.some((l) => l.href === pathname);
  return (
    <div
      className="relative"
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) onClose(); }}
      onKeyDown={(e) => { if (e.key === "Escape") onClose(); }}
    >
      <button
        type="button"
        aria-controls={id}
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={onToggle}
        className={`flex items-center gap-0.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 hover:text-white ${
          isActive ? "bg-white/10 text-white" : "text-white/70"
        }`}
      >
        {starSticker ? (
          <span className="relative pr-3">
            {label}
            <span
              className="pointer-events-none absolute -right-0.5 -top-2.5 rotate-12 text-base leading-none"
              style={{ filter: "drop-shadow(0 0 5px #c6a24a) drop-shadow(0 0 12px #c6a24a)" }}
              aria-hidden
            >
              ⭐
            </span>
          </span>
        ) : (
          <span>{label}</span>
        )}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {isOpen ? (
        <div
          id={id}
          className="absolute right-0 top-full z-50 mt-1 min-w-[200px] rounded-xl border border-white/10 bg-intellectual/95 py-1 shadow-lg backdrop-blur-md"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`block px-4 py-2 text-[0.8125rem] font-medium normal-case transition hover:bg-white/10 ${
                link.gold
                  ? pathname === link.href
                    ? "text-champagne"
                    : "text-champagne hover:text-champagne-light"
                  : pathname === link.href
                    ? "text-white"
                    : "text-white/75 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
```

### Mobile drawer — replace the `<nav>` inside `{mobileMenuOpen ? ...}` with:

```tsx
<nav className="mx-auto max-w-5xl px-4 py-3" aria-label={t.a11yNavMobilePrimary}>
  <div className="grid gap-0.5">

    {/* DSA Guide group */}
    <p className="px-3 py-1 text-[10px] font-semibold normal-case text-white/45">
      {t.navDsaGuideGroup}
    </p>
    {dsaGuideLinks.map((link) => (
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

    {/* Open Houses group */}
    <div className="mt-1 border-t border-white/10 pt-2">
      <p className="px-3 py-1 text-[10px] font-semibold normal-case text-white/45">
        {t.navOpenHouse}
      </p>
      {openHouseLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`block rounded-lg px-3 py-2 text-sm font-medium normal-case transition hover:bg-white/10 ${
            link.gold
              ? "text-champagne hover:text-champagne-light"
              : pathname === link.href ? "bg-white/10 text-white" : "text-white/75 hover:text-white"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </div>

    {/* Apply for DSA group — with ⭐ sticker on label */}
    <div className="mt-1 border-t border-white/10 pt-2">
      <p className="relative inline-flex items-center px-3 py-1 text-[10px] font-semibold normal-case text-white/45">
        <span className="relative pr-4">
          {t.navApplyGroup}
          <span
            className="pointer-events-none absolute -right-0.5 -top-2 rotate-12 text-sm leading-none"
            style={{ filter: "drop-shadow(0 0 5px #c6a24a) drop-shadow(0 0 10px #c6a24a)" }}
            aria-hidden
          >
            ⭐
          </span>
        </span>
      </p>
      {applyLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`block rounded-lg px-3 py-2 text-sm font-medium normal-case transition hover:bg-white/10 ${
            link.gold
              ? "text-champagne hover:text-champagne-light"
              : pathname === link.href ? "bg-white/10 text-white" : "text-white/75 hover:text-white"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </div>

    {/* School Finder group */}
    <div className="mt-1 border-t border-white/10 pt-2">
      <p className="px-3 py-1 text-[10px] font-semibold normal-case text-white/45">
        {t.navSchoolFinderGroup}
      </p>
      {schoolFinderLinks.map((link) => (
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

    {/* Blog */}
    <div className="mt-1 border-t border-white/10 pt-2">
      <Link
        href="/blog"
        className={`flex items-center gap-2 rounded-lg border border-champagne/40 bg-champagne/15 px-3 py-2 text-sm font-medium normal-case text-champagne-light transition hover:bg-champagne/25 ${
          pathname === "/blog" ? "bg-champagne/30 text-white" : ""
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        {t.navBlog}
        <span className="rounded bg-champagne px-1.5 py-px text-[9px] font-bold uppercase tracking-wide text-intellectual animate-pulse">
          New
        </span>
      </Link>
    </div>

    <div className="mt-2 border-t border-white/10 pt-3">
      <LanguageToggle id="language-select-mobile" />
    </div>
  </div>
</nav>
```

---

## 3. Verify coverage — all 13 routes must appear in nav

After editing, confirm these hrefs exist somewhere in SiteHeader.tsx:
- `/dsa-guide` ✓ DSA Guide group
- `/faq` ✓ DSA Guide group
- `/dsa-experience` ✓ DSA Guide group
- `/open-houses` ✓ Open Houses group
- `/open-house-guide` ✓ Open Houses group
- `/open-house-takeaways` ✓ Open Houses group (gold)
- `/apply` ✓ Apply for DSA group
- `/dsa-interview` ✓ Apply for DSA group
- `/dsa-coaches` ✓ Apply for DSA group (gold)
- `/dsa-finder` ✓ School Finder group
- `/schools` ✓ School Finder group
- `/psle-cop` ✓ School Finder group
- `/blog` ✓ standalone

---

## 4. TypeScript check

```bash
npx tsc --noEmit
```

Ignore pre-existing `.next/types/cache-life.d 2.ts` duplicate errors (known Next.js artifact). Fix any new errors introduced by this task.

---

## 5. Commit

```bash
git add components/SiteHeader.tsx lib/i18n.ts
git commit -m "refactor(nav): restructure into 5 groups + Apply for DSA star sticker

DSA Guide · Open Houses · Apply for DSA ⭐ · School Finder · Blog
All 13 pages covered. Gold highlights on Missed an Open House? and Find a Coach.
New i18n keys added in EN/ZH/MS/TA.

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
git push
```
