# 图片制作与放置流程

> 只在需要做图/放图时看这个文件。

---

## 一、完整流程

```
1. 定尺寸（先决定图片要多大，放在哪）
2. 生图（Jimeng，按定好的尺寸生成）
3. 裁剪（macOS预览）
4. 压缩（Squoosh.app）
5. 放进网站（Next.js Image组件）
6. 调位置（浏览器DevTools）
```

---

## 二、各步骤操作

### 第一步：定尺寸
- 先决定图片在页面哪个位置、多大
- 记下：宽度px × 高度px
- 常用尺寸参考：
  - 博客题图：1200 × 630px
  - 首页Hero图：全宽（width: 100%）× 500px高
  - 装饰小图：按实际需要定

### 第二步：Jimeng生图
- 生图时指定和第一步一样的尺寸比例
- 需要透明背景：Jimeng选"去背景"选项
- 下载PNG格式

### 第三步：macOS预览裁剪
1. 双击图片用预览打开
2. 点铅笔图标（标记工具栏）
3. 鼠标拖选保留区域
4. Command + K 裁剪
5. Command + S 保存

**缩放到指定尺寸：**
预览 → 工具 → 调整大小 → 输入宽度 → 确定

### 第四步：压缩转WebP（必做，不做不上线）

**方法A — 用sharp脚本（推荐，Claude执行）：**
```bash
node -e "
const sharp = require('sharp');
sharp('input.png')
  .resize(1200, 630, { fit: 'cover' })
  .modulate({ brightness: 1.2 })  // 如需提亮
  .webp({ quality: 80 })
  .toFile('output.webp')
  .then(info => console.log(info));
"
```

**方法B — Squoosh（手动）：**
- 打开 squoosh.app
- 上传图片，右侧格式选 **WebP**，质量 **75–80%**
- 下载后替换原文件

**标准：**
- Blog图：1200×630px，目标 **50KB以下**
- 其他图：按实际尺寸，目标 **200KB以下**
- 格式：一律 **.webp**，禁止PNG/JPG直接上线

### 第五步：放进网站
- 压缩后图片放入 `public/images/` 目录
- 代码里用 Next.js Image组件，**不用普通img标签**：

```tsx
import Image from 'next/image'

// 固定尺寸图片
<Image
  src="/images/your-image.webp"
  alt="描述"
  width={1200}
  height={630}
  priority  // 首屏图片加这个
/>

// 装饰图（绝对定位）
<div style={{ position: 'relative' }}>
  <Image
    src="/images/deco.webp"
    alt=""
    width={400}
    height={500}
    style={{ position: 'absolute', top: '120px', right: '80px' }}
  />
</div>
```

### 第六步：调位置（DevTools）
1. `npm run dev` 跑起来
2. 浏览器打开 localhost:3000
3. F12 打开DevTools
4. 点左上角箭头 → 点页面元素
5. 直接在Styles面板改CSS数值
6. 满意后把最终数值写进代码

---

## 三、常见问题

| 问题 | 解法 |
|------|------|
| 图片加载慢 | Squoosh压缩 + 转WebP + 加priority属性 |
| 位置对不准 | DevTools实时调，不要猜数值 |
| 图片模糊 | 生图尺寸太小，重新生更大尺寸 |
| 背景挡住内容 | 用透明PNG，Jimeng生图时选去背景 |
| 手机端变形 | 用 `object-fit: cover` + 固定容器高度 |

---

## 四、工具清单

| 工具 | 用途 | 地址 |
|------|------|------|
| Jimeng（即梦）| 生图 | jimeng.jianying.com |
| macOS预览 | 裁剪/缩放 | 系统自带 |
| Squoosh | 压缩+转WebP | squoosh.app |
| DevTools | 调位置 | F12 |
