# DSALink SEO 规则（按需调用）

## 页面 SEO 状态总表

| 页面 | Sitemap | OG Image | Structured Data | 内链强度 | 待补项 |
|------|---------|----------|-----------------|---------|--------|
| `/` | ✅ 1.0 | ✅ | Organization + WebSite | ✅ | — |
| `/dsa-guide` | ✅ 0.96 | ✅ | HowTo | ✅ | — |
| `/dsa-experience` | ❌ 未收录 | ✅ | ❌ 无 schema | ⚠️ 弱 | **加 sitemap + Article schema + 内链** |
| `/open-house-guide` | ❌ 未收录 | ✅ | ❌ 无 schema | ⚠️ 弱 | **加 sitemap + HowTo schema + 内链** |
| `/dsa-finder` | ✅ 0.98 | ✅ | Dataset + ItemList | ✅ | — |
| `/schools` | ✅ 0.92 | ❌ 无 OG image | CollectionPage | ✅ | 加 OG image |
| `/open-houses` | ✅ 0.90 | ✅ | WebPage + ItemList | ✅ | — |
| `/psle-cop` | ✅ 0.95 | ✅ | Dataset + ItemList | ✅ | — |
| `/faq` | ✅ 0.94 | ❌ 无 OG image | FAQPage | ✅ | 加 OG image |
| `/dsa-interview` | ✅ 0.93 | ✅ | Article + HowTo + FAQPage | ✅ | — |
| `/recommend` | ❌ 工具页 | ❌ | ❌ | — | 不收录（内部工具） |

## 内部链接规则

**原则：** 内链以内容自然植入为主（段落中 `<Link>` 锚文本），不用"另见"硬性插入。

**已确定的缺失内链（待补）：**

| 来源页 | 目标页 | 植入位置 | 优先级 |
|--------|--------|----------|--------|
| `/dsa-guide` | `/dsa-experience` | "真实家庭路径"相关段落 | 高 |
| `/open-house-guide` | `/schools` | "查各校 NSG 记录"提示处 | 高 |
| `/faq` | `/dsa-interview` | "面试准备"问题下方 | 中 |
| `/dsa-experience` | `/dsa-guide` | Section 1 overview 末尾 | 中 |
| `/schools` | `/dsa-finder` | 学校列表页顶部工具提示 | 中 |

**禁止的内链模式：**
- 在同一句话中堆砌超过 2 个内链
- 将导航链接重复嵌入正文
- 用"点击这里"作为锚文本

## 结构化数据规则

**工具函数位置：** `lib/seo.ts`（通用）、`lib/dsa-seo.ts`（DSA Finder 专用）

| 页面类型 | 必须有的 Schema |
|----------|----------------|
| 工具/数据库页 | Dataset + ItemList |
| 指南/长文页 | Article 或 HowTo |
| FAQ 页 | FAQPage |
| 所有页面 | BreadcrumbList（待实现） |

**BreadcrumbList 规则（待实现）：**
- 模式：`Home > [页面名]`（二级）或 `Home > [分类] > [页面名]`（三级）
- 在 `lib/seo.ts` 新增 `buildBreadcrumbSchema(path: string[])` helper

## Sitemap 管理

**当前已收录（8页）：** `/`, `/dsa-finder`, `/dsa-guide`, `/dsa-interview`, `/schools`, `/open-houses`, `/psle-cop`, `/faq`

**待加入（2页）：** `/dsa-experience`（priority 0.88）、`/open-house-guide`（priority 0.87）

**禁止收录：** `/admin`, `/recommend`, `/dsa`（redirect）, `/scores`（redirect）

## 新页面上线前检查清单

- [ ] `generateMetadata()` 包含 title、description、keywords、canonical、openGraph（含 images）
- [ ] 页面已加入 `app/sitemap.ts`
- [ ] 页面有至少一个 JSON-LD schema（使用 lib/seo.ts helper）
- [ ] 页面内容有至少 2 个内链
- [ ] OG image 路径有效
