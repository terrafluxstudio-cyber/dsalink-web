# Cursor Task: WhatsApp Share Strip + Email Capture in Playbook and Open House Guide

## Files to modify (no new files needed)

- `components/DsaExperiencePageBody.tsx`
- `components/OpenHouseGuidePageBody.tsx`

The `EmailCapture` component already exists at `components/EmailCapture.tsx`.  
Its props: `{ onSubmit: (email: string) => void; onSkip: () => void }`  
The async fetch inside `onSubmit` is fine — the returned Promise is ignored by the component.

---

## Change 1 — `DsaExperiencePageBody.tsx`: add import

Find the last import line at the top of the file. After it, add:

```tsx
import { EmailCapture } from "@/components/EmailCapture";
```

Also confirm `useState` is imported from `"react"`. If not already present, add:

```tsx
import { useState } from "react";
```

---

## Change 2 — `DsaExperiencePageBody.tsx`: add state

Inside `DsaExperiencePageBody` function body, after the existing `const toc = getDsaExperienceToc(locale);` line, add:

```tsx
  const [emailSkipped, setEmailSkipped] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
```

---

## Change 3 — `DsaExperiencePageBody.tsx`: insert share strip + email capture

Find the bottom CTA div that starts with:
```tsx
<div className="mt-14 rounded-2xl border border-intellectual/15 bg-gradient-to-br from-intellectual to-intellectual-dark p-6 text-white shadow-soft sm:p-8">
```

It is preceded by `})}` (closing of the sections map). Insert the following TWO blocks immediately BEFORE that CTA div:

```tsx
                {/* ── WhatsApp share strip ── */}
                <div className="mb-6 flex flex-wrap items-center gap-3 rounded-xl border border-champagne/30 bg-champagne/8 px-4 py-3">
                  <span className="text-sm text-slate-600">
                    {locale === "zh"
                      ? "觉得有用？转发给还不知道 DSA 的家长朋友"
                      : "Found this helpful? Share with a parent who hasn't heard of DSA"}
                  </span>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      locale === "zh"
                        ? "推荐这个 DSA 申请指南，免费又全面：https://dsalink.sg/dsa-experience"
                        : "This free DSA guide is really comprehensive: https://dsalink.sg/dsa-experience"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto shrink-0 rounded-lg bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#1ebe5d]"
                  >
                    {locale === "zh" ? "WhatsApp 分享" : "Share on WhatsApp"}
                  </a>
                </div>

                {/* ── Email capture ── */}
                {!emailSkipped && !emailSubmitted && (
                  <div className="mb-6">
                    <EmailCapture
                      onSubmit={async (email) => {
                        await fetch("/api/subscribe", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ email, source: "playbook" }),
                        });
                        setEmailSubmitted(true);
                      }}
                      onSkip={() => setEmailSkipped(true)}
                    />
                  </div>
                )}
```

---

## Change 4 — `OpenHouseGuidePageBody.tsx`: add import

At the top of the file, after the existing imports, add:

```tsx
import { EmailCapture } from "@/components/EmailCapture";
```

---

## Change 5 — `OpenHouseGuidePageBody.tsx`: add state

Inside `OpenHouseGuidePageBody` function body, after the existing `const [featuredSchools, setFeaturedSchools] = useState<FeaturedSchool[]>([]);` line, add:

```tsx
  const [emailSkipped, setEmailSkipped] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
```

(`useState` is already imported in this file — no additional import needed.)

---

## Change 6 — `OpenHouseGuidePageBody.tsx`: insert email capture before Next Step CTA

Find this comment and div:
```tsx
          {/* ── Next Step CTA ── */}
          <div className="mt-8 border-t border-intellectual/[0.06] pt-6 sm:mt-10 sm:pt-8">
```

Insert the following block immediately BEFORE it:

```tsx
          {/* ── Email capture ── */}
          {!emailSkipped && !emailSubmitted && (
            <div className="mb-6 mt-8">
              <EmailCapture
                onSubmit={async (email) => {
                  await fetch("/api/subscribe", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, source: "open-house-guide" }),
                  });
                  setEmailSubmitted(true);
                }}
                onSkip={() => setEmailSkipped(true)}
              />
            </div>
          )}

```

---

## Verification

1. `npm run build` — zero TypeScript errors
2. `/dsa-experience` ZH: champagne share strip + WhatsApp green button + email capture below
3. `/dsa-experience` EN: English copy versions
4. Click "No thanks" on either page → email box disappears, share strip stays
5. `/open-house-guide`: email capture visible above Next Step CTA; "No thanks" hides it
6. Submit test email → Network tab shows `POST /api/subscribe` with correct `source` field

---

## Git commit

```
git add components/DsaExperiencePageBody.tsx components/OpenHouseGuidePageBody.tsx
git commit -m "feat: share CTA and email capture in Playbook and Open House Guide"
```
