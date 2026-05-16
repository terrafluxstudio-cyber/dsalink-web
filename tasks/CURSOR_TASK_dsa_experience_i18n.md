# CURSOR TASK: /dsa-experience 页面多语言支持

## 背景
`/dsa-experience` 页面内容全部硬编码英文，非英文用户无法阅读。
本任务分两步：
1. 页面顶部加语言提示 banner（非英文时显示"本文仅提供英文版"）
2. 将页面 Hero（标题/副标题/breadcrumb）改为 i18n 字段，其余内容暂时保持英文

## 涉及文件
- `lib/i18n.ts` — 添加 5 个 i18n key
- `components/DsaExperiencePageBody.tsx` — 使用 i18n + 添加语言 banner

---

## 改动 1 — `lib/i18n.ts` 添加字段

### 在 Copy 类型 `} & DsaGuideStrings;` 前追加：
```ts
  dsaExpPageCrumb: string;
  dsaExpPageKicker: string;
  dsaExpPageTitle: string;
  dsaExpPageSubtitle: string;
  dsaExpLangNotice: string;
```

### 在 `en:` 末尾追加：
```ts
    dsaExpPageCrumb: "DSA Experience Guide",
    dsaExpPageKicker: "Parent playbook",
    dsaExpPageTitle: "DSA Experience Guide",
    dsaExpPageSubtitle: "What actually works in Singapore DSA — school selectivity, talent bars, timelines, and mistakes to avoid. Synthesised from parent forums, MOE rules, and real case patterns.",
    dsaExpLangNotice: "",
```

### 在 `zh:` 末尾追加：
```ts
    dsaExpPageCrumb: "DSA 经验指南",
    dsaExpPageKicker: "家长实战手册",
    dsaExpPageTitle: "DSA 经验指南",
    dsaExpPageSubtitle: "新加坡 DSA 真正有效的方法——学校选拔性、才能门槛、时间轴与常见错误。综合家长社区、MOE 规定与真实案例整理。",
    dsaExpLangNotice: "本指南目前仅提供英文正文。标题与导航已翻译；完整中文版即将上线。",
```

### 在 `ms:` 末尾追加：
```ts
    dsaExpPageCrumb: "Panduan Pengalaman DSA",
    dsaExpPageKicker: "Buku panduan ibu bapa",
    dsaExpPageTitle: "Panduan Pengalaman DSA",
    dsaExpPageSubtitle: "Apa yang benar-benar berkesan dalam DSA Singapura — selektiviti sekolah, aras bakat, garis masa dan kesilapan yang perlu dielakkan.",
    dsaExpLangNotice: "Panduan ini kini hanya tersedia dalam bahasa Inggeris. Versi Bahasa Malaysia akan datang tidak lama lagi.",
```

### 在 `ta:` 末尾追加：
```ts
    dsaExpPageCrumb: "DSA அனுபவ வழிகாட்டி",
    dsaExpPageKicker: "பெற்றோர் செயல்நூல்",
    dsaExpPageTitle: "DSA அனுபவ வழிகாட்டி",
    dsaExpPageSubtitle: "சிங்கப்பூர் DSA-வில் உண்மையில் செயல்படுவது — பள்ளி தேர்வு, திறன் வரம்புகள், கால அட்டவணை மற்றும் தவிர்க்க வேண்டிய தவறுகள்.",
    dsaExpLangNotice: "இந்த வழிகாட்டி தற்போது ஆங்கிலத்தில் மட்டுமே கிடைக்கிறது. தமிழ் பதிப்பு விரைவில் வரும்.",
```

---

## 改动 2 — `components/DsaExperiencePageBody.tsx`

文件顶部，在现有 import 区追加：
```tsx
import { useLanguage } from "@/contexts/LanguageContext";
```

将 `export function DsaExperiencePageBody()` 改为：
```tsx
export function DsaExperiencePageBody() {
  const { t, locale } = useLanguage();
```

删除文件顶部的 `const HERO = { ... } as const;` 块（共 8 行）。

将 `<PageHeader>` 调用改为：
```tsx
        <PageHeader
          crumbLabel={t.dsaExpPageCrumb}
          kicker={t.dsaExpPageKicker}
          title={t.dsaExpPageTitle}
          subtitle={t.dsaExpPageSubtitle}
        />
```

在 `<PageHeader ... />` 与 `<div className="bg-surface">` 之间插入语言 banner：
```tsx
        {locale !== "en" && t.dsaExpLangNotice && (
          <div className="border-b border-amber-200 bg-amber-50 px-4 py-3">
            <p className="mx-auto max-w-6xl text-center text-sm text-amber-800">
              {t.dsaExpLangNotice}
            </p>
          </div>
        )}
```

---

## 验证步骤
- [ ] `npx tsc --noEmit` 无报错
- [ ] 切换中文，`/dsa-experience` 页面顶部标题显示"DSA 经验指南"
- [ ] 中文时，顶部显示黄色提示条"本指南目前仅提供英文正文…"
- [ ] 英文时，提示条不显示
- [ ] 页面正文内容（来自 content/dsa-experience.tsx）不受影响
