# Cursor Task: EmailCapture Custom Text Per Page

## Goal

Add optional props to `EmailCapture` so each page can show different heading, description, and button text. Then update the two new usages (Playbook and Open House Guide) with context-appropriate copy.

The DSA Finder usage (if any) should remain unchanged — it uses the defaults.

---

## Step 1: Update `components/EmailCapture.tsx`

### Update the props interface

Replace:
```tsx
export interface EmailCaptureProps {
  onSubmit: (email: string) => void;
  onSkip: () => void;
}
```

With:
```tsx
export interface EmailCaptureProps {
  onSubmit: (email: string) => void;
  onSkip: () => void;
  heading?: string;
  description?: string;
  submitLabel?: string;
  successTitle?: string;
  successDescription?: string;
}
```

### Update the function signature

Replace:
```tsx
export function EmailCapture({ onSubmit, onSkip }: EmailCaptureProps) {
```

With:
```tsx
export function EmailCapture({
  onSubmit,
  onSkip,
  heading = "Email me my results",
  description = "We’ll send your school recommendations to your inbox. A free resource pack on trials, interviews, and what to do next follows automatically.",
  submitLabel = "Send my results",
  successTitle = "Sent — check your inbox",
  successDescription = "Your school recommendations are on their way. We’ll also send follow-ups with open house dates, deadline reminders, and interview prep tips.",
}: EmailCaptureProps) {
```

### Update the success state JSX

Replace:
```tsx
            <p className="text-[0.9375rem] font-semibold text-slate-900">
              Sent - check your inbox
            </p>
            <p className="mt-1 text-[0.8125rem] leading-relaxed text-slate-500">
              Your school recommendations are on their way. We&apos;ll also send follow-ups
              with open house dates, deadline reminders, and interview prep tips.
            </p>
```

With:
```tsx
            <p className="text-[0.9375rem] font-semibold text-slate-900">
              {successTitle}
            </p>
            <p className="mt-1 text-[0.8125rem] leading-relaxed text-slate-500">
              {successDescription}
            </p>
```

### Update the form heading and description JSX

Replace:
```tsx
          <h3 className="text-[0.9375rem] font-semibold text-slate-900">
            Email me my results
          </h3>
          <p className="mt-0.5 text-[0.8125rem] leading-relaxed text-slate-500">
            We&apos;ll send your school recommendations to your inbox. A free resource pack
            on trials, interviews, and what to do next follows automatically.
          </p>
```

With:
```tsx
          <h3 className="text-[0.9375rem] font-semibold text-slate-900">
            {heading}
          </h3>
          <p className="mt-0.5 text-[0.8125rem] leading-relaxed text-slate-500">
            {description}
          </p>
```

### Update the submit button

Replace:
```tsx
            Send my results
```

With:
```tsx
            {submitLabel}
```

---

## Step 2: Update `components/DsaExperiencePageBody.tsx`

Find the `EmailCapture` usage added in the share CTA section. It currently looks like:

```tsx
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
```

Add the custom props:

```tsx
<EmailCapture
  heading="Save this guide to your inbox"
  description="We'll send you this Playbook plus deadline reminders and open house alerts as DSA season progresses."
  submitLabel="Send me the guide"
  successTitle="Guide sent!"
  successDescription="Check your inbox. We'll follow up with deadline reminders and open house alerts throughout DSA season."
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
```

---

## Step 3: Update `components/OpenHouseGuidePageBody.tsx`

Find the `EmailCapture` usage added before the Next Step CTA. It currently looks like:

```tsx
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
```

Add the custom props:

```tsx
<EmailCapture
  heading="Get open house reminders"
  description="We'll alert you when new open house dates are confirmed, and send a visit checklist before each school's open day."
  submitLabel="Send me alerts"
  successTitle="You're on the list"
  successDescription="We'll alert you when new open house dates are confirmed. Check your inbox for the school visit checklist."
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
```

---

## Verification

1. `npm run build` — no TypeScript errors
2. `/dsa-experience`: EmailCapture shows "Save this guide to your inbox" + "Send me the guide" button
3. `/open-house-guide`: EmailCapture shows "Get open house reminders" + "Send me alerts" button
4. DSA Finder (if EmailCapture is used there): still shows default "Email me my results" text
5. Submit on either page → success state shows the custom success title/description

---

## Git commit

```
git add components/EmailCapture.tsx components/DsaExperiencePageBody.tsx components/OpenHouseGuidePageBody.tsx
git commit -m "feat: customisable EmailCapture copy per page"
```
