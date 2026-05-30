# DSALink Blog SOP

每次写 blog 前过一遍这个清单。

---

## 一、选题判断

| 类型 | 例子 | 发布时机 |
|------|------|---------|
| 时效型 | MOE 新闻、open house、截止日提醒 | 新闻发出后24小时内 |
| 常青型 | DSA 是什么、如何准备 portfolio | 任何时候 |
| 社媒配合型 | 开放日预告/recap、申请倒计时 | 配合 FB 发帖节奏 |

**受众永远是：** 从未听过 DSA 的普通小学家长（首次发现者优先），或有低年级孩子在规划的家长。不是已经很懂 DSA 的家长。

---

## 二、内容准确性（最高优先级）

- 所有 MOE 政策数据只引用官方源：moe.gov.sg、moe-eportal.gov.sg
- 学校名额、录取分数、才艺类别：查 `lib/school-data-master.ts` 或 MOE 官网
- 禁止：捏造统计数字、"据说"、"业内人士透露"
- 禁止：声称"保证录取"、"必考"、无法核实的效果
- MOE 新闻类文章：直接引用 press release，附官方链接，不过度解读
- 不煽情、不制造恐慌；时效型文章不夸大紧迫性

---

## 三、SEO 清单

**Frontmatter 要求：**
```mdx
---
title: "关键词自然出现在前60字符"         # 主关键词 + 受众 + 年份
date: "YYYY-MM-DD"
excerpt: "150字内，包含主关键词，说清楚文章能给读者什么"
heroImage: "/blog/[slug].jpg"
tags: ["DSA 2026", "具体关键词", "Singapore secondary school", ...]
---
```

**Title 公式：** `[主题] — [受众关心的问题/利益点]`
例：`MOE Is Reviewing the DSA Scheme — What Singapore Parents Need to Know`

**高价值关键词：**
- direct school admission / DSA 2026 / DSA Singapore
- DSA application / DSA requirements / secondary school admission Singapore
- [学校名] DSA（学校专题文章）

**文章结构：**
- H2 分节，每节一个明确主题
- 第一段：直接说清楚文章讲什么，不绕弯
- 结尾：自然收口，不强行 CTA（除非是行动型内容）

---

## 四、内链规则

每篇文章至少加 1-2 个内链，找**自然的语境**，不硬塞。

| 提到这个话题 | 链接到 |
|------------|--------|
| 找哪些学校有某才艺 | `/dsa-finder` |
| 普通家庭的 DSA 经历 | `/dsa-experience` |
| DSA 流程是什么 | `/dsa-guide` |
| Open House 怎么去 | `/open-house-guide` |
| 学校 COP 分数 | `/psle-cop` |
| 不知道孩子适合哪个方向 | `/recommend` |

格式：`[DSA School Finder](/dsa-finder)`（MDX 标准 markdown 链接）

---

## 五、图片处理

每篇 blog 必须有 heroImage，上传前压缩。

```bash
python3 -c "
from PIL import Image
import os
src = '原图路径'
dst = 'public/blog/[slug].jpg'
img = Image.open(src).convert('RGB')
if img.width > 1200:
    ratio = 1200 / img.width
    img = img.resize((1200, int(img.height * ratio)), Image.LANCZOS)
img.save(dst, 'JPEG', quality=82, optimize=True)
print(os.path.getsize(dst)//1024, 'KB')
"
```

**目标：** ≤150KB。超过就降 quality 到 75。
**存放：** `public/blog/[slug].jpg`
**frontmatter：** `heroImage: "/blog/[slug].jpg"`

---

## 六、社媒配合

Blog 发布后，写一条对应的 FB 帖子。

**FB 帖子结构：**
1. 钩子（1句，引发好奇或共鸣）
2. 核心内容（2-3句，不剧透全部）
3. 链接

**中英文选择：**
- 时效新闻类 → 英文（群组语言）
- 家长情感类 → 可考虑中英双语

**发哪些群：** 参考 `memory/facebook_groups.md`，同一群组同类内容间隔 ≥7 天。

---

## 七、发布流程

```
1. 写 MDX → content/blog/[slug].mdx
2. 压缩图片 → public/blog/[slug].jpg
3. npm run build（本地验证）
4. git add + git commit
5. vercel --prod
6. 确认 dsalink.sg/blog/[slug] 可访问
7. 写 FB 帖子草稿 → 发对应群组
```

---

## 八、禁止事项

- 禁止暗示 DSA 是唯一出路（还有 PSLE 正常 posting）
- 禁止说"错过今年就没机会了"（有误导，孩子还有 PSLE）
- 禁止引用未经核实的录取数据或家长个案
- 禁止复制 MOE/学校官网大段原文（版权）
- 禁止隐含 DSALink 是 MOE 官方资源
- 每篇文章底部必须有免责声明：`DSALink is an independent resource and is not affiliated with MOE.`
