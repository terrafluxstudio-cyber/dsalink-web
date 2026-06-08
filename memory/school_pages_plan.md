# 学校页建设计划（定稿 2026-06-05）

## 战略定位

DSALink 从「DSA reference」升级为「P6 家长择校 + DSA 平台」。  
学校页 = SEO 漏斗口 + 内链分发中心，不是 conversion 终点。  
DSA 仍是主轴，学校页只导流不变现。  
入口已在 `RecommendResultCard` 写好（`/schools/[slug]`），等页面建好即通。

---

## 页面框架（8 段 · ~3000 字/页 · EN only）

| # | 段落 | 字数 | 功能 |
|---|------|------|------|
| 1 | About [School] | ~250 | 学校名 + 历史 · 全复述官方措辞 |
| 2 | Programmes & Curriculum | ~500 | IP/O-level/IB/SAP · MOE 标签 · 不评价 |
| 3 | Co-Curricular Activities | ~500 | 按类别列 CCA · 历史奖项（见规则）· 内链 talent pages |
| 4 | Campus & Facilities | ~200 | 地址 / MRT / 设施 · 建好后基本不变 |
| 5 | **Admission Pathways · DSA core** ⭐ | ~700 | PSLE Posting + **DSA talent paths（链 talent pages）** + 准备资源（链 blog）+ 录取参考（链 results）|
| 6 | Achievements & Recognition | ~300 | MOE Outstanding Awards · 长期认证身份 |
| 7 | FAQ | ~400 | FAQPage schema → 富片段 · 全部内链 |
| 8 | Related Schools & Resources | ~150 | 同类学校 + 相关 talent + blog + results 入口 |

**总字数：~3000 字/页**  
**内链密度：15-20 个/页**  
**30 页合计新增内链：~450 条**（全部喂权重给 talent pages + blog）

---

## SEO 配置

**Title pattern：**  
`[School Name] Secondary School · Complete Parent Guide | DSALink`

**Description pattern：**  
`Complete guide to [School Name] for P6 parents — programmes, CCAs, campus, DSA-Sec admission pathways, and preparation resources.`

**JSON-LD：**
- `Article`（不用 EducationalOrganization · 我们不是学校）
- `FAQPage`（FAQ 段 · 抓富片段）
- `BreadcrumbList`

**H1/H2 结构：** 全部含学校名 + 关键词

---

## 口径规则（死规则 · 写进 cron prompt template）

| 禁止 | 替代 |
|------|------|
| 评价学校好坏 / 排名 | 只复述 MOE / 学校官网原文 |
| 比较两间学校（X vs Y / better than） | "schools with similar programmes include..." 列举不排序 |
| 具体 cutoff 数字 | 链 results 页 |
| 校长名字 / 在任老师 | 不写（人会换） |
| **当年** CCA 名次（年年变） | 不写 |
| **历史**奖项（过去时 + 年份 + 来源） | ✅ 允许写 |
| 校友具体名字 / 成就 | 不写（容易出错 + 引战） |
| 校风严 / 松 / 学生压力 | 不写 |
| 引论坛 / 家长群言论 | 不引 |
| 校方负面新闻 / 争议 | 不写 |

**历史奖项规则：**  
✅ "Awarded MOE Outstanding Development Award (Sports) 2018–2019"（过去时 + 具体年份 + 官方来源）  
❌ "Currently ranked top in X"（现在时排名）  
❌ "Best CCA in Singapore"（比较句式）

---

## 数据来源白名单（cron 只能读这些）

1. `moe.gov.sg/schoolfinder/[school]` → 学校官方数据
2. `[school].edu.sg/about-us` 及 `/programmes` `/cca` `/admissions` → 学校官方页
3. `moe.gov.sg/secondary/dsa` → DSA 框架
4. `moe.gov.sg/secondary/courses` → 课程框架
5. DSALink 自己站上的 talent pages / blog（内链来源）

**禁止读：** Kiasu / HWZ / Reddit / Schoolbag / Honeykids / 新闻评论 / 家长 blog

---

## 文件结构

```
app/[locale]/schools/page.tsx           ← schools index（列 30 间）
app/[locale]/schools/[slug]/page.tsx    ← individual school page
content/schools/[slug].mdx              ← 正式内容（审完才上线）
content/schools/_drafts/[slug].mdx      ← cron 草稿区（不在路由里）
lib/schoolPages.ts                      ← schema 定义
memory/school_page_prompt_template.md  ← cron 写作 prompt（含全部口径规则）
memory/school_queue.md                  ← 30 间排队顺序（COP 高→低）
```

**URL slug 规则：** `hwa-chong-institution` / `raffles-girls-school` / `nanyang-girls-high`  
**语言策略：** EN only 先发 30 页 · `LocaleStrFlex`（EN required · ZH/MS/TA optional）· 等 GA 数据再翻译热门学校

---

## 写作顺序

### Wave 1（手工 · 旅行前）

| 顺序 | 学校 | 目的 |
|------|------|------|
| 1 | Raffles Girls' School (RGS) | 定调 |
| 2 | Hwa Chong Institution (HCI) | |
| 3 | National Junior College (NJC) | |
| 4 | Victoria School (VS) | |
| 5 | NUS High School of Math & Science | |

这 5 篇 = 后续 cron 的「金标准模板」，必须人工手写审过。

### Wave 2-6（cron 自动 · 旅行期间）
按 PSLE COP 从最低 AL（最竞争）往上排，一天 1 篇，详见 `memory/school_queue.md`（旅行前锁定）。

---

## Phase A 时间表（旅行前）

```
6/5-6/8   本周：blog 推广（Angle B/C）· 不动 schools
6/9-6/13  建框架：
          · app/[locale]/schools/ 路由 + 组件
          · lib/schoolPages.ts schema
          · content/schools/_drafts/ 文件夹
          · /schools index 页（列 30 间）
          · Footer 加 Schools 链接（主 nav 不动）
          · memory/school_page_prompt_template.md（cron 用）
6/14-6/19 手写 Wave 1（每天 1 间）：
          RGS → HCI → NJC → VS → NUS High
6/20-6/21 配 cron：
          · 配 remote scheduled agent
          · PushNotification 接通手机
          · 测试自动写 1 篇（看效果）
          · 锁定 school_queue.md（Wave 2-6 完整 25 间）
6/22      出发 · cron 自动跑
```

---

## Phase B（旅行期间 6/22 → 7/初）

**Cron 每天 09:00 SGT：**
1. 读 `school_queue.md` 第一个未完成学校
2. WebFetch 白名单来源
3. 用 prompt template 生成 MDX 草稿
4. 写到 `content/schools/_drafts/[slug].mdx`
5. 标记 school_queue.md 该项 `drafted`
6. git commit 到 `branch: schools-drafts`（不 push main）
7. **不部署** · 不发任何东西
8. PushNotification 推手机

**关键保护：**
- 草稿在 `_drafts/` · 不在 app 路由 · 不会上线
- 数字字段（fees/cutoff 等）全部 `<<TODO: verify>>` 占位
- 每篇 frontmatter 加 `status: draft` + `needs_fact_check: true`
- 关键 claim 必须附 `sources: [...]`（白名单 URL）

---

## Phase C（回来后 7/初）

1. 拉 `schools-drafts` 分支
2. 逐篇 fact-check（cutoff → results 页 / 申请窗口 → MOE / talent paths → 学校官网）
3. 删幻觉内容 / 填 TODO 占位
4. 分批 deploy（一周一波 · 配合社媒推广 · 不要一次 30 页全上）
5. ZH/MS/TA 翻译 → 看 GA 哪几间学校有量再翻

---

## 导航 / UX 变更

- `/schools` index 页加到 footer（主 nav 不动 · DSA 仍是主轴）
- Homepage 不改（等 Phase C 部署后再评估加不加 "Browse by school" 区块）
- `RecommendResultCard` 的 `View School →` 按钮已指向 `/schools/[slug]` ✅ 不用改

---

## i18n QA 发现（2026-06-07 · batch 5–9 审校后记录）

**模板带入的系统性译错 — 已全语料统一清理（2026-06-07，39 文件）**，canonical 定为：
1. **MS NCC** → `Kor Kadet Kebangsaan (NCC)`（原误作含 Polis 的 `Polis Kadet Kebangsaan`，与警察队 NPCC 混淆）。分队后缀如「— Udara / — Tentera Darat」保留。
2. **MS NPCC** → `Kor Kadet Polis Kebangsaan (NPCC)`（原有多种乱译：Polis Kadet Polis Kebangsaan / Kor Kadet Polis Negara / Kadet Polis Kebangsaan，已统一）。
3. **TA Shooting** → `துப்பாக்கிச் சுடுதல்`（原误作 `தூக்குவட்டி`＝铅球/田赛）。
4. **MS Girl Guides** → `Pandu Puteri (Girl Guides)`（Pengakap＝童子军是错的；原 Pengakap Puteri/Perempuan/裸 Girl Guides 混用，已统一）。
5. **TA Choir** → `பாடகர் குழு`（原误作 `குழல் இசை`＝笛/管乐；2026-06-07 全语料 58 处修正，含 temasek 模板）。
6. **TA award boilerplate**「For verified award details」→ `விருது விவரங்க`（原误作 விருத்த/விருத＝发展/成长；18 处修正）。

✅ **temasek 三语模板已全部修过**（NCC/NPCC/Shooting/Girl Guides/Choir 都已根治）→ 新 batch 复制模板不会再带出这些。但 award boilerplate 与「相关学校短标签编错地点/校名」仍需每 batch 抽查。

**batch 5–9 自身错误已修复**（commit 5b0cd2f / 2fa3cf3）：
- 专有名词须用 canonical：Woodleigh=兀里站；Yio Chu Kang=杨厝港；Mountbatten=芒德本；Maris Stella=海星中学；Presbyterian High=长老会高中；Bartley=巴特礼。
- 子代理易在「相关学校」短标签里编错校名/地点 → 以后每 batch 必查 related-school 区块。

**翻译流程固化**：每校 1 个子代理产 zh/ms/ta；产后跑结构校验（章节数/内链集/relatedSlugs 对齐 EN + ZH 标题无句号）+ 三语审校代理对照 EN 查事实漂移/专名/AI腔。

**batch 12（admiralty / ahmad-ibrahim / ang-mo-kio / assumption-pathway / bedok-green，→60/147）审校发现**：
- ⚠️ **ZH「相关学校」短标签校名 = 高频系统性幻觉**：本批 15 处被子代理编造「音近但错」的中文名（Damai 误成「淡滨尼湖畔」还放错地区、Mayflower 校名≠站名美华、Deyi 德义↔得意 字序错）。**每批必须用 ZH 审校代理逐条核对官方 MOE 中文校名**，子代理产出不可信。
- MS：NCDCC canonical = `Kor Kadet Pertahanan Awam Kebangsaan (NCDCC)`（子代理误用 Pelajar，已修）。
- TA：本批 0 错。

## ⭐ 中文校名权威源（2026-06-08 全站核实定案）

**`lib/school-profiles.ts` 的 `nameZh` 字段 = 全站中文校名唯一权威源。** 已对 147 校逐一去学校官网 / 中文维基 / MOE 核实并修正。今后翻译/引用任何学校中文名，**一律从 profiles.ts 取，禁止字面直译或让子代理猜**（猜出来的名字几乎都错）。

**这次核实纠正的根因 + 关键教训：**
- 中文校名**多数不是字面直译**：Commonwealth=立才中学（非联邦）、Cedar=四德女子中学（非雪松）、Crescent=克信女子中学（非新月）、River Valley=立化中学、Boon Lay=文礼中学（非文莱）、Bukit View=百德中学、Beatty=博理中学、Fuhua=辅华中学（非富华）。
- **合并校改用对方中文名**（英文名不变但中文名换了，必须查学校官网校史页）：Bedok Green→平仪、Bukit Merah→达善、Chua Chu Kang→德惠、Greenridge→励进、Jurongville→丰嘉、Marsiling→士林、Northland→德贤、Yio Chu Kang→崇文。
- **Canberra=康培中学**（康柏是 Compassvale，别搞混）。
- 校名带特定写法：用全角括号（）；SOTA=新加坡艺术学院（学院非学校）；NUS High=新加坡国立大学附属数理中学（非缩写国大数理中学）；Victoria=维多利亚学校（非中学）；SJI=圣若瑟书院（若瑟非约瑟）；Tanjong Katong=丹绒（非丹戎）。
- ⚠️ profiles.ts 原本自身就有错（admiralty 实为美雅中学但曾与 Beatty 混；SCGS 曾漏「华侨」）——核实时**两个候选都不预设对错，独立查官网**才不被带偏。

**已同步修正的所有文件**（含中文校名的全部位置）：`lib/school-profiles.ts`、`lib/school-cop-history-data.ts`(nameCn)、`lib/school-open-houses.ts`、`lib/featured-schools.ts`、`components/OpenHouseTakeawaysBody.tsx`、`lib/faq-content.ts`、`content/schools/zh/*.mdx`（自身名 + 相关学校标签按 slug 映射 + 正文）。校验脚本：按 `[文字](/schools/slug)` 链接 + relatedSchoolSlugs 顺序 + schoolFullName 三处对齐 profiles。
