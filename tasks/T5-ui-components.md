# T5 — UI 组件

## 任务目标

新建 4 个 React 组件（TypeScript + Tailwind CSS），供向导页面使用。
不包含业务逻辑，只做展示和事件回调。风格与现有项目一致（slate-900 背景，白色文字，无 emoji）。

## 现有项目风格参考

查看 `/components/` 目录下任意现有组件（如 DsaSearchCenter.tsx）了解样式规范：
- 使用 Tailwind CSS utility classes
- 颜色主色：slate-900 背景，slate-100 文字
- 卡片用 `bg-slate-800 rounded-lg p-4`
- 按钮激活状态：`bg-blue-600`，hover：`hover:bg-blue-700`
- 标题用正常大小写（非全大写）

---

## 组件 1：`/components/TalentSection.tsx`

### 功能

单个特长项目的完整问卷输入组件。根据类别（体育/艺术/STEM/领导力/制服团体/语言）动态显示不同问题。

### Props

```ts
interface TalentSectionProps {
  category: TalentCategory;  // 'sports'|'arts'|'debate'|'stem'|'languages'|'uniformed'|'leadership'
  specificArea: string;      // e.g. "Softball"
  onChange: (input: Partial<TalentAssessmentInput>) => void;
  value: Partial<TalentAssessmentInput>;
}
```

（`TalentAssessmentInput` 从 `/lib/talent-assessment.ts` 导入）

### 显示逻辑

**Sports & Arts：**

1. 先显示参与验证问题（仅 sports/arts）：
   ```
   "Has your child formally trained in [specificArea]?"
   [School CCA only]  [External coaching]  [Both]  [Just personal interest]
   ```
   若选 "Just personal interest" → 显示警告卡片，不再显示后续问题

2. 课外培训问题（若有外部培训）：
   ```
   "Does your child have external coaching outside school?"  Yes / No
   ```
   若 Yes：
   ```
   "How often per week?"  Once / Twice / 3+ times
   "Do you know your child's approximate island-wide level?"  Yes / No
   ```
   若知道：显示 4 个按钮：Top 10 island-wide / Top 50 / Upper-middle / Middle
   若不知道：显示维度 A 问题（外部赛事）

3. 维度 A — 外部赛事（仅在 hasExternalCoaching && !knownRanking）：
   ```
   "Highest external competition level"  Zonal / National / International
   "Best result at that level"  Participation / Placed / Top 3 / Champion or Representative
   "Participation type"  Individual / Team – key player / Team – regular member
   ```

4. 维度 B — 学校 CCA（始终显示）：
   ```
   "Highest school CCA competition level"  School-internal / Zonal / National
   "Best CCA result"  Participation / Placed / Top 3 / Champion
   "CCA role"  Individual event / Team – key player / Team – regular member
   ```

**Leadership：**（直接显示，无课外培训问题）
```
"Highest position held in school"
  Class Monitor / CCA Committee or Captain / School Prefect / Head/Deputy Prefect or Student Council

"External leadership activities"
  None / School-organised programme / MOE or University level / International (e.g. Model UN)

"Duration in leadership role"
  Less than 1 year / About 1 year / 2 years or more
```

**Uniformed Groups：**
```
"Your rank/role in the group"
  Regular member / NCO or Officer / Commander or highest position in school

"Highest level activity participated"
  School internal / National camp or competition / International exchange

"Years of participation"
  1 year / 2 years / 3 years or more
```

**Languages & Humanities：**
```
"Your child's level in this language/subject"
  School curriculum level / One level above school / Two or more levels above school

"Competitions or activities participated"
  None / School-level event / National competition

"Years of sustained involvement"
  1 year / 2 years / 3 years or more
```

**STEM / Debate：**
```
"Most significant competition participated"
  School competition / National selection (e.g. SASMO) / NMOS / SMOPS level / International Olympiad

"Best result"
  Participation / Bronze or Silver / Gold / Special Round or National Team

"Number of competitions entered"
  1 / 2–3 / 4 or more
```

---

## 组件 2：`/components/LocationPicker.tsx`

### 功能

两级地区选择器。只在结果包含非 IP 学校时显示（由父组件控制 `visible` prop）。

### Props

```ts
interface LocationPickerProps {
  visible: boolean;
  onChange: (region: string, town: string) => void;
  value: { region: string; town: string };
}
```

### 显示

标题："For non-IP schools, proximity to home matters. Where do you live?"

第一级（5 个按钮）：Central / North / North-East / East / West

第二级（根据第一级展开）：
```
Central  → Bishan, Toa Payoh, Bukit Timah, Queenstown, Novena, Orchard/River Valley
North    → Woodlands, Sembawang, Yishun, Ang Mo Kio
North-East → Punggol, Sengkang, Hougang, Serangoon
East     → Tampines, Pasir Ris, Bedok, Marine Parade
West     → Jurong East, Jurong West, Bukit Batok, Choa Chu Kang, Clementi
```

---

## 组件 3：`/components/EmailCapture.tsx`

### 功能

推荐结果展示后的可选邮件收集卡片。

### Props

```ts
interface EmailCaptureProps {
  onSubmit: (email: string) => void;
  onSkip: () => void;
}
```

### 显示

```
标题：Want your free DSA Preparation Guide?

说明文字（小字，灰色）：
"We'll send you a guide covering: DSA school trials & auditions, interview tips,
portfolio preparation, what happens after acceptance, and how to optimise S1 if DSA doesn't work out."

[Email input field]
[Send me the guide]    [Skip for now]
```

提交后显示感谢信息："We'll be in touch soon."

---

## 组件 4：`/components/RecommendResultCard.tsx`

### 功能

单个学校推荐卡片。

### Props

```ts
interface RecommendResultCardProps {
  school: {
    name: string;
    slug: string;              // 用于链接到 /schools/[slug]
    type: string;              // e.g. "IP School", "Autonomous", "Government"
    isIp: boolean;
    recentCop: string;         // e.g. "AL 8–12" (3年区间)
    matchedArea: string;       // e.g. "Softball"
    reasons: string[];         // 3 条推荐理由
    competitionPoolNote?: 'niche' | 'moderate' | 'popular';
    isSpecialSchool?: boolean; // SOTA / NUS High / SST
  };
  tier: 'safe' | 'reach' | 'dream' | 'special';
}
```

### 显示

```
┌──────────────────────────────────────┐
│ School Name                          │
│ [IP School]  [Boys]  Recent AL: 8–12 │
│                                      │
│ Matched for: Softball DSA            │
│                                      │
│ • [reason 1]                         │
│ • [reason 2]                         │
│ • [reason 3]                         │
│                                      │
│ [niche sport note if applicable]     │
│                                      │
│ [View School]    [Apply via MOE DSA] │
└──────────────────────────────────────┘
```

- "View School" → `/schools/[slug]`（内部路由）
- "Apply via MOE DSA" → `https://www.moe.gov.sg/secondary/dsa`（外链，`target="_blank"`）

免责小字（每张卡片底部）：
"DSA vacancies vary each year — contact the school to confirm current intake."

---

## 验收标准

- 所有 4 个组件可以在 `/app/recommend/page.tsx` 中导入并渲染
- TalentSection 根据 category 正确显示不同问题
- Sports/arts 的"just personal interest"选项触发警告且不显示后续问题
- LocationPicker 的两级联动正常
- RecommendResultCard 的两个链接正确（一个内部路由，一个外链）
- 组件风格与现有项目一致（slate 色系，正常大小写标题）
