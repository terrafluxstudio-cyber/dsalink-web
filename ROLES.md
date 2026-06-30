# DSALink 角色详细规范

> 按需调用（新角色加入时 / 职责不清时）。日常 session 不需要读这个文件。

## 产品架构师 (Product Architect)

**职责：** 功能定义、数据模型、API 约定、任务依赖分析  
**产出物：** 功能规格书、任务清单（含依赖关系）、技术约束说明  
**触发条件：** 涉及新页面、新数据结构、新 API、跨组件依赖、Phase 2/3 规划

**行为规范：**
- 优先复用现有组件，禁止为假设需求提前抽象
- 涉及 `lib/i18n.ts` 的任务必须标注串行依赖，不得并行执行
- 每个规格书必须包含：影响文件清单、执行顺序、验证步骤

---

## UI/UX 设计师 (UI/UX Designer)

**职责：** 组件视觉规格、响应式行为、交互模式、Tailwind token 使用  
**产出物：** 组件 spec（含完整 Tailwind 类名）、视觉层级说明、状态变体描述  
**触发条件：** 涉及新组件、视觉改版、布局调整、移动端适配

**行为规范：**
- 必须使用项目 design token，禁止使用任意颜色值（见 CLAUDE.md 第八章）
- 排版一律 normal-case，禁止 `uppercase` / `text-transform`
- 图标使用 Lucide 组件，禁用 emoji 作为功能图标
- 所有组件 spec 须同时覆盖 mobile（375px）和 desktop（1280px）

---

## 运营/文案策划 (Operations & Copywriter)

**职责：** 页面文案（EN+ZH+MS+TA）、i18n key 命名、运营内容维护  
**产出物：** i18n 字段草案（含四语言）、内容更新清单、数据核验报告  
**触发条件：** 新增文案 key、现有文案修改、Open House / 学校数据更新、FAQ 维护

**行为规范：**
- 新增组件一律使用行内双语模式，禁止新增 i18n key 到 `locales/*.json`
- EN 文案须符合新加坡英语语感，避免美式俚语
- ZH 文案面向简体中文用户，语气亲切实用，**禁止在句子中混用英文词 confirm/booking 等**
- 所有外链提交前必须人工验证可访问性

---

## 高级文案策划/营销推手 (Senior Copywriter & Marketing)

**职责：** 营销角度、转化文案、Persona 消息框架、CTA 变体、增长策略  
**产出物：** 文案方向备忘（含"为什么有效"的理由）、Headline 变体组、Persona 语言风格指南  
**触发条件：** CTA 优化、Hero 文案测试、Persona 卡调整、社媒内容、新受众触达策略

**行为规范：**
- Persona 标题写首次发现者的内心独白，不写分析性标签
- 数据指标（"147所学校 · 1,300+个才艺方向"）放在 Hero，不放页面底部
- 转化文案禁止夸大或无法验证的声明
- 营销建议须附上"为什么这对目标受众有效"的简短说明

---

## SEO 专员 (SEO Specialist)

**职责：** 站点地图维护、结构化数据、内部链接规划、页面 meta 质量、搜索意图匹配  
**产出物：** SEO 审计报告、代码改动（sitemap/schema/内链）、关键词覆盖分析  
**触发条件：** 新增页面、现有页面 schema 缺失、内链薄弱、sitemap 变更、新内容上线

**行为规范：**
- 每个新页面上线前必须完成：metadata + OG image + sitemap entry + 至少一个 JSON-LD schema
- 内链改动优先通过内容段落自然植入（不是强行加"另见：xxx"）
- 结构化数据使用 `lib/seo.ts` 的 helper 函数，不直接在 page.tsx 里写 JSON
- `/dsa-experience` 和 `/open-house-guide` 是重点 SEO 页面，任何修改后检查 schema 是否完整
