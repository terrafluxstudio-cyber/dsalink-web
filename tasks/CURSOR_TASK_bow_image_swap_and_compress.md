# CURSOR TASK: 替换蝴蝶结图片 + 图片压缩为 WebP

## 背景

首页 HomeCtaBlock 的蝴蝶结图片需要：
1. 换新图片（用户提供）
2. 定位往上移，使蝴蝶结衔接卡片右上角
3. 转 WebP 压缩
4. blog hero 图也需要压缩

---

## Task 1 — 替换蝴蝶结图片并调整定位

### 步骤

**1a. 复制并转换图片**

源文件：`~/Desktop/jimeng-2026-05-24-4283.png`

目标：`public/ribbon-bow.webp`

用 sharp 或 Next.js 内置支持转换；如没有 sharp，在 package.json 里 devDependencies 加入 sharp 并写一个一次性转换脚本 `scripts/convert-images.ts`：

```ts
// scripts/convert-images.ts
import sharp from 'sharp';
import path from 'path';

async function main() {
  await sharp(path.resolve(process.env.HOME!, 'Desktop/jimeng-2026-05-24-4283.png'))
    .webp({ quality: 85 })
    .toFile(path.resolve('public/ribbon-bow.webp'));
  console.log('Done: ribbon-bow.webp');
}
main();
```

运行：`npx tsx scripts/convert-images.ts`

**1b. 更新图片引用**

文件：`components/HomeCtaBlock.tsx` 第 66 行

```tsx
// 改前
src="/ribbon-bow.png"
// 改后
src="/ribbon-bow.webp"
```

**1c. 调整定位（往上移）**

文件：`components/HomeCtaBlock.tsx` 第 69 行

当前：
```tsx
className="pointer-events-none absolute -right-4 -top-16 z-20 w-80 sm:w-96"
```

改为（减小负偏移，让图片整体往上，蝴蝶结节点出现在卡片右上角边缘）：
```tsx
className="pointer-events-none absolute -right-2 -top-4 z-20 w-72 sm:w-80"
```

如果视觉上蝴蝶结还是偏低，继续减小 `-top-*`（往 `top-0` 方向调），直到蝴蝶结的底部与卡片顶边衔接自然。目标效果：蝴蝶结悬于卡片右上角，ribbon 条延伸进卡片内。

---

## Task 2 — 压缩 blog hero 图

源文件：`public/blog/dsa-open-house-hero.jpg`

目标：`public/blog/dsa-open-house-hero.webp`（quality: 80）

在同一个脚本 `scripts/convert-images.ts` 里追加：

```ts
await sharp('public/blog/dsa-open-house-hero.jpg')
  .webp({ quality: 80 })
  .toFile('public/blog/dsa-open-house-hero.webp');
console.log('Done: dsa-open-house-hero.webp');
```

然后更新所有引用 `dsa-open-house-hero.jpg` 的组件/页面，改为 `.webp`。

用 grep 找引用：
```bash
grep -r "dsa-open-house-hero" src app components --include="*.tsx" --include="*.ts"
```

---

## Task 3 — 清理旧文件（可选）

转换完成、确认部署正常后，可以删除：
- `public/ribbon-bow.png`
- `public/blog/dsa-open-house-hero.jpg`

**不要在本次 PR 里删除**，等上线验证后再清。

---

## 验证

1. `npm run dev` → 访问 `/`，查看首页 HomeCtaBlock 右上角，蝴蝶结与卡片顶边衔接自然
2. 查看 blog 页面，`dsa-open-house-hero.webp` 正常加载
3. DevTools Network → 确认 webp 文件比原 png/jpg 小

---

## 不要动的地方

- `HomeCtaBlock.tsx` 除 Layer 4 img 标签外的所有代码
- blog 文章 slug/frontmatter
