# T9 — 首页 CTA 按钮（依赖 T6 完成后执行）

## 任务目标

修改 `/app/page.tsx`，在首页显著位置加入两个入口按钮：
1. 推荐引擎入口 → `/recommend`
2. DSA 经验指南入口 → `/dsa-experience`

## 前置条件

- T6 完成：`/app/recommend/page.tsx` 存在
- T8 完成：`/app/dsa-experience/page.tsx` 存在

## 修改位置

先读取 `/app/page.tsx` 了解现有结构，找到 Hero Section（通常是页面顶部最显眼的区域），
在 Hero Section 内或其正下方加入 CTA 区块。

## CTA 区块设计

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Not sure which school to apply for DSA?           │
│                                                     │
│   [Find the right school →]    [DSA Guide]         │
│   (主按钮，蓝色填充)            (次按钮，边框)       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

按钮样式：
- 主按钮（推荐引擎）：`bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium`
- 次按钮（指南）：`border border-slate-500 hover:border-slate-300 text-slate-300 px-6 py-3 rounded-lg font-medium`

文字方案：
- 标题：`"Not sure which school fits your child?"`
- 副标题：`"Enter your child's PSLE score and talent — get personalised DSA school recommendations in 2 minutes."`
- 主按钮文字：`"Find the right school →"`
- 次按钮文字：`"Read the DSA Guide"`

## 验收标准

- 两个按钮在首页 hero 区或紧随其后可见，无需滚动
- 点击主按钮跳转到 `/recommend`
- 点击次按钮跳转到 `/dsa-experience`
- 样式与现有首页风格一致，无视觉突兀
