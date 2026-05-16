# T6 — 页面组装（依赖 T2+T3+T5 完成后执行）

## 任务目标

新建 `/app/recommend/page.tsx`，组装向导向导 + 结果展示。
将 T5 的组件和 T3 的推荐引擎逻辑连接在一起，形成完整的用户流程。

## 前置条件

- T2 完成：`/lib/talent-assessment.ts` 存在
- T3 完成并通过审核：`/lib/recommend.ts` 存在
- T5 完成：所有 UI 组件存在

## 页面流程（4 步向导）

### Step 1：PSLE AL 分数输入

```
标题："What is your child's estimated PSLE AL score?"
副标题："Use your P5 end-of-year results as a reference."

输入控件：数字输入框，range 4–32
  辅助说明："Lower is better. AL 4 = top score (all AL1), AL 32 = lowest"

若用户输入 >= 23：
  显示警告卡片（红色边框）：
  "DSA is designed for students entering Express or IP schools, which require AL ≤ 22.
   If your child's projected PSLE score is ≥ 23, we recommend focusing on the S1 posting process instead."
  显示按钮："View PSLE COP information →" 链接到 /psle-cop
  不允许继续到下一步

[Next →] 按钮
```

### Step 2：选择特长领域

```
标题："What are your child's talents or special strengths?"
副标题："You can add multiple. Each will be assessed separately."

显示 7 个类别卡片（MOE 官方类别）：
  Sports & Games
  Visual, Literary & Performing Arts
  Debate & Public Speaking
  Science, Maths & Engineering
  Languages & Humanities
  Uniformed Groups
  Leadership

点击类别后，该类别卡片展开，显示具体项目选择：
  项目列表来自 dsa_master_list.json 中该类别学校的 dsaTalents，
  提取所有唯一的 area 值，以 checkbox 列表显示。

可以选多个类别，每个类别选 1 个具体项目。

[← Back]  [Next →]
```

### Step 3：评估每个特长

```
对每个选定的特长，依次展示一个 TalentSection 组件（T5）。
若选了 3 个特长，显示 3 页，每页一个特长。

顶部显示进度："Assessing talent 1 of 3: Softball (Sports & Games)"

[← Back]  [Next →]
```

### Step 4：地理位置（条件显示）

在显示结果前，先运行推荐算法（客户端运行）。
若结果包含任何非 IP 学校，才显示此步骤：

```
LocationPicker 组件（T5）

[← Back]  [See Recommendations →]
```

若所有推荐都是 IP 学校（或精英模式下全推 IP 学校），跳过此步骤直接显示结果。

### 结果页

不使用步骤容器，直接展开显示推荐结果。

**学术强特长弱警告（若有）：**
显示黄色警告卡片：
"Note: With a strong projected PSLE score of AL [X], you may access top schools directly via S1 posting.
 DSA at the assessed talent level may not give you access to schools beyond what your score achieves.
 These recommendations are provided for reference."

**特殊学校板块（若有 SOTA/NUS High/SST）：**
```
标题："Specialised Schools (DSA Only)"
说明："These schools admit students exclusively through DSA..."
每所学校显示 RecommendResultCard（T5），tier='special'
```

**Safe 板块：**
```
标题："A good match — and a secured option"
说明："These schools' recent admission AL scores (≈ AL [X]–[X+2]) suggest your child may qualify
       via S1 posting too. Applying via DSA secures a spot earlier."
2 个 RecommendResultCard
```

**Reach 板块：**
```
标题："Stretch for these — DSA is your main pathway"
说明："Your child's PSLE score alone would not qualify for these schools.
       DSA gives you access based on talent."
2 个 RecommendResultCard
```

**Dream 板块：**
```
标题："Aspirational — your child's talent is the key"
说明："These are highly selective schools. Only apply if your child's talent level
       is genuinely competitive. Check their DSA intake directly."
2 个 RecommendResultCard
```

**邮件收集：**（结果底部）
EmailCapture 组件（T5）

**提交推荐记录到 API：**
显示结果时，同时静默调用 `POST /api/recommend`（T4 实现），提交以下数据：
```ts
{
  alScore,
  talents: [{ category, specificArea, tier }],
  recommendedSchools: [{ name, tier }],
  region, // 若有
  town,   // 若有
  // email 在 EmailCapture 提交时单独更新
}
```

## 状态管理

使用 React `useState` 管理：
```ts
const [step, setStep] = useState(1);            // 当前步骤
const [alScore, setAlScore] = useState<number>();
const [selectedTalents, setSelectedTalents] = useState<TalentAssessmentInput[]>([]);
const [currentTalentIndex, setCurrentTalentIndex] = useState(0);
const [location, setLocation] = useState({ region: '', town: '' });
const [result, setResult] = useState<RecommendResult | null>(null);
```

推荐计算在客户端运行（`recommend()` 函数直接在前端调用）。

## 页面 SEO

```ts
export const metadata = {
  title: 'DSA School Recommender | DSALink',
  description: 'Find the right secondary school for your child based on PSLE score and talent. Get personalised DSA recommendations.',
};
```

## 验收标准

- 完整走完 AL=14, Softball(national champion individual) 的流程，输出 6 所学校
- AL=23 在第 1 步显示警告，无法继续
- LocationPicker 仅在有非 IP 学校时显示
- 结果显示后，`POST /api/recommend` 被调用（在 Network tab 可见）
- EmailCapture 组件出现在结果底部
