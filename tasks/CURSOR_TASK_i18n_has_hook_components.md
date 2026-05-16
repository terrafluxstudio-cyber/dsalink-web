# CURSOR TASK: i18n — 已有 hook 的组件修补（依赖 batch1_keys 先完成）

## 涉及文件
- `components/HomeCtaBlock.tsx`
- `components/DsaStrategySection.tsx`
- `components/SiteFooter.tsx`
- `components/HomepageSubscribeBanner.tsx`

---

## 改动 1 — `components/HomeCtaBlock.tsx`

### 1a — "Free personalised tool" eyebrow badge

找到：
```tsx
            Free personalised tool
```
改为：
```tsx
            {t.ctaFreePersonalisedTool}
```

### 1b — Trust strip 数组

找到整个 trust strip 数组：
```tsx
            {(
              [
                { value: "2 min", label: "to complete" },
                { value: "Free", label: "always" },
                { value: "Personalised", label: "to your child" },
              ] as const
            ).map((stat, i) => (
```
替换为：
```tsx
            {(
              [
                { value: "2 min", label: t.ctaTrustTimeLabel },
                { value: t.ctaTrustFreeVal ?? "Free", label: t.ctaTrustFreeLabel },
                { value: t.ctaTrustPersonalVal, label: t.ctaTrustPersonalLabel },
              ]
            ).map((stat, i) => (
```

注意：`value: "2 min"` 保持不变（数字在各语言一致），但如果 Copy 类型中没有 `ctaTrustFreeVal`，则 `{ value: "Free", label: t.ctaTrustFreeLabel }` 即可（value 保留硬编码"Free"，只翻译 label）。

实际上最简单的做法：只翻译三个 label，value 保持硬编码：
```tsx
            {(
              [
                { value: "2 min", label: t.ctaTrustTimeLabel },
                { value: "Free", label: t.ctaTrustFreeLabel },
                { value: t.ctaTrustPersonalVal, label: t.ctaTrustPersonalLabel },
              ]
            ).map((stat, i) => (
```

去掉原来的 `as const`（改为普通数组）。

---

## 改动 2 — `components/DsaStrategySection.tsx`

找到：
```tsx
            Not sure? Try the School Finder →
```
改为：
```tsx
            {t.dsaStrategyNotSureCta}
```

---

## 改动 3 — `components/SiteFooter.tsx`

找到：
```tsx
            DSALink covers DSA-Sec (P6 → Secondary 1) only. DSA-JC is a separate process not covered here.
```
改为：
```tsx
            {t.footerScopeNote}
```

注意：`SiteFooter` 需要已经 import `useLanguage` 并解构 `t`。如果还没有，先在组件函数内添加：
```tsx
const { t } = useLanguage();
```

---

## 改动 4 — `components/HomepageSubscribeBanner.tsx`

找到：
```tsx
                  <p className="mt-2 text-xs text-red-400">Something went wrong. Please try again.</p>
```
改为：
```tsx
                  <p className="mt-2 text-xs text-red-400">{t.subscribeError}</p>
```

---

## 验证步骤
- [ ] `npx tsc --noEmit` 无报错
- [ ] 切换中文：HomeCtaBlock trust strip 显示"个性化推荐 / 专属孩子"，badge 显示"免费个性化工具"
- [ ] DsaStrategySection 链接显示"不确定？试试学校搜索器 →"
- [ ] Footer 范围说明显示中文
- [ ] Subscribe Banner 错误消息显示中文
