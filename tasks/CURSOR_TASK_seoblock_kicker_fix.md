# CURSOR TASK: SeoTextBlock kicker 大写修复

## 涉及文件
- `components/SeoTextBlock.tsx`

## 问题
两处 kicker overline 使用了 `uppercase` CSS 类，违反项目设计规范（所有标题/标签应为 normal-case）。

## 改动 1 — "What is DSA-Sec" 区块 kicker

**改前：**
```tsx
<p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-intellectual">
```
**改后：**
```tsx
<p className="mb-2 text-[10px] font-bold tracking-[0.15em] text-intellectual normal-case">
```

## 改动 2 — Commitment Rules 区块 kicker

**改前：**
```tsx
<p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-champagne">
```
**改后：**
```tsx
<p className="mb-2 text-[10px] font-bold tracking-[0.15em] text-champagne normal-case">
```

## 验证步骤
- [ ] `npx tsc --noEmit` 无报错
- [ ] `/` 首页中 "Singapore Education Scheme" 和 "MOE Binding Regulations" 不再全大写显示
