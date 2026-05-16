# CURSOR TASK: /dsa-experience 主页入口卡片

## 背景
`/dsa-experience` 页面已完整，包含 DSA 申请经验总结（学校选择性、才能层级、时间轴、常见错误等），
是站内高价值内容，但当前主页除 HomeCtaBlock 次级 CTA 外无独立入口，用户滚动到页底时容易错过。

## 目标
在 `<SeoTextBlock />` 与 `<ResourceCards />` 之间插入一个横向 callout 条，引导用户进入该页面。

## 涉及文件
- `components/DsaExperienceCallout.tsx` — 新建
- `app/page.tsx` — 插入组件

---

## 改动 1 — 新建 `components/DsaExperienceCallout.tsx`

完整内容如下：

```tsx
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export function DsaExperienceCallout() {
  return (
    <section className="bg-surface-warm py-8 sm:py-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Link
          href="/dsa-experience"
          className="group flex flex-col gap-4 rounded-2xl border border-champagne/30 bg-white px-6 py-6 shadow-card transition hover:border-champagne/60 hover:shadow-card-hover sm:flex-row sm:items-center sm:justify-between sm:px-8"
        >
          {/* Left */}
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-champagne/30 bg-champagne/10 text-intellectual transition group-hover:border-champagne/50">
              <FileText className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="mb-0.5 text-[10px] font-semibold tracking-[0.15em] text-champagne-dark normal-case">
                FEATURED GUIDE
              </p>
              <h2 className="text-base font-bold text-slate-900">
                The DSA Experience: What Parents Wish They Knew
              </h2>
              <p className="mt-1 max-w-lg text-sm leading-relaxed text-slate-500">
                School selectivity, talent tiers, the 2026 timeline, common mistakes, and a pre-application checklist — all in one place.
              </p>
            </div>
          </div>

          {/* Right */}
          <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-intellectual transition group-hover:gap-2.5">
            Read the guide
            <ArrowRight className="h-4 w-4" aria-hidden />
          </span>
        </Link>
      </div>
    </section>
  );
}
```

---

## 改动 2 — 在 `app/page.tsx` 插入组件

**在文件顶部 import 区追加：**
```tsx
import { DsaExperienceCallout } from "@/components/DsaExperienceCallout";
```

**在 `<SeoTextBlock />` 和 `<ResourceCards />` 之间插入：**

改前：
```tsx
        <SeoTextBlock />
        <ResourceCards />
```
改后：
```tsx
        <SeoTextBlock />
        <DsaExperienceCallout />
        <ResourceCards />
```

---

## 验证步骤
- [ ] `npx tsc --noEmit` 无报错
- [ ] 主页底部出现白色卡片，左侧有 FileText 图标，右侧有 "Read the guide →"
- [ ] 点击卡片跳转至 `/dsa-experience`
- [ ] 悬停时边框变深（champagne/60），箭头向右偏移
