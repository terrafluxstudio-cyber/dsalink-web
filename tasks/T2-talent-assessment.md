# T2 — 特长水平评级逻辑

## 任务目标

新建 `/lib/talent-assessment.ts`，实现将家长的问卷答案转换为孩子特长水平的内部评级。

评级结果只有四档（内部使用，不直接展示给家长）：
```ts
type TalentTier = 'elite' | 'strong' | 'solid' | 'developing';
```

## 文件结构

```
/lib/talent-assessment.ts
```

## 类型定义

```ts
export type TalentCategory =
  | 'sports'
  | 'arts'
  | 'debate'
  | 'stem'
  | 'languages'
  | 'uniformed'
  | 'leadership';

export type TalentTier = 'elite' | 'strong' | 'solid' | 'developing';

export interface TalentAssessmentInput {
  category: TalentCategory;
  specificArea: string; // e.g. "Softball", "Dance", "Mathematics"

  // Sports & Arts specific
  hasExternalCoaching?: boolean;       // 是否有课外培训
  trainingFrequency?: 'once' | 'twice' | 'thrice_plus'; // 每周几次
  knownIslandRanking?: 'top10' | 'top50' | 'upper_middle' | 'middle'; // 若家长知道全岛水平

  // External training competition (Dimension A) — if hasExternalCoaching
  externalCompLevel?: 'zonal' | 'national' | 'international';
  externalBestResult?: 'participation' | 'placed' | 'top3' | 'champion_rep';
  externalParticipationType?: 'individual' | 'team_key' | 'team_regular';

  // School CCA (Dimension B) — always asked for sports/arts
  ccaCompLevel?: 'school' | 'zonal' | 'national';
  ccaBestResult?: 'participation' | 'placed' | 'top3' | 'champion';
  ccaParticipationType?: 'individual' | 'team_key' | 'team_regular';

  // Leadership specific
  leadershipPosition?: 'class_monitor' | 'cca_committee' | 'school_prefect' | 'head_student_council';
  leadershipExternal?: 'none' | 'school_prog' | 'moe_university' | 'international';
  leadershipDuration?: 'less1yr' | '1yr' | '2yr_plus';

  // Uniformed groups specific
  uniformedRank?: 'regular' | 'nco_officer' | 'commander';
  uniformedHighestActivity?: 'school' | 'national' | 'international';
  uniformedYears?: '1yr' | '2yr' | '3yr_plus';

  // Languages specific
  languageLevel?: 'school_curriculum' | 'one_above' | 'two_above';
  languageCompetition?: 'none' | 'school' | 'national';
  languageYears?: '1yr' | '2yr' | '3yr_plus';

  // STEM specific (Debate uses similar structure to STEM)
  stemCompLevel?: 'school' | 'national_selection' | 'nmos_smops' | 'international_olympiad';
  stemBestResult?: 'participation' | 'bronze_silver' | 'gold' | 'special_round_national';
  stemCompCount?: 'one' | 'two_three' | 'four_plus';
  stemResearchProject?: 'none' | 'external_comp' | 'published_recognised';
}

export interface TalentAssessmentResult {
  tier: TalentTier;
  category: TalentCategory;
  specificArea: string;
  competitionPoolNote?: 'niche' | 'moderate' | 'popular'; // injected later from T1 data
}
```

## 评级函数

### 主函数

```ts
export function assessTalent(input: TalentAssessmentInput): TalentAssessmentResult
```

### Sports & Arts 评级

若 `knownIslandRanking` 已填写，直接映射：
```
top10        → elite
top50        → strong
upper_middle → solid
middle       → developing
```

若未填写 `knownIslandRanking`，计算两维度综合分：

**维度 A（课外培训，若 hasExternalCoaching = true）：**
```
levelScore:
  zonal       → 25
  national    → 40
  international → 55

resultScore:
  participation → 5
  placed        → 12
  top3          → 22
  champion_rep  → 35

typeMultiplier:
  individual  → 1.0
  team_key    → 0.85
  team_regular → 0.6

frequencyMultiplier:
  once         → 0.7
  twice        → 0.85
  thrice_plus  → 1.0

externalScore = (levelScore + resultScore) * typeMultiplier * frequencyMultiplier
```

**维度 B（学校 CCA）：**
```
levelScore:
  school → 8
  zonal  → 18
  national → 30

resultScore:
  participation → 3
  placed        → 8
  top3          → 15
  champion      → 22

typeMultiplier: same as above

ccaScore = (levelScore + resultScore) * typeMultiplier
```

**综合：**
```
若 hasExternalCoaching：
  total = externalScore * 0.7 + ccaScore * 0.3
否则：
  total = ccaScore

elite:     total >= 75
strong:    total >= 50
solid:     total >= 28
developing: total < 28
```

### Leadership 评级

```
elite:
  leadershipPosition = 'head_student_council'
  AND leadershipExternal in ['moe_university', 'international']
  AND leadershipDuration = '2yr_plus'

strong:
  (leadershipPosition = 'school_prefect' AND leadershipExternal != 'none')
  OR (leadershipPosition = 'head_student_council')

solid:
  leadershipPosition in ['cca_committee', 'school_prefect']
  AND leadershipDuration in ['1yr', '2yr_plus']

developing: otherwise
```

### Uniformed Groups 评级

```
elite:
  uniformedRank = 'commander'
  AND uniformedHighestActivity = 'international'
  AND uniformedYears = '3yr_plus'

strong:
  uniformedRank in ['nco_officer', 'commander']
  AND uniformedHighestActivity in ['national', 'international']

solid:
  uniformedRank = 'nco_officer'
  OR (uniformedRank = 'regular' AND uniformedHighestActivity = 'national')

developing: otherwise
```

### Languages 评级

```
elite:
  languageLevel = 'two_above'
  AND languageCompetition = 'national'

strong:
  languageLevel = 'two_above'
  OR (languageLevel = 'one_above' AND languageCompetition = 'national')

solid:
  languageLevel = 'one_above'
  OR (languageLevel = 'school_curriculum' AND languageCompetition = 'national')

developing: otherwise
```

### STEM / Science & Maths 评级

```
elite:
  stemCompLevel in ['international_olympiad', 'nmos_smops']
  AND stemBestResult in ['gold', 'special_round_national']

strong:
  (stemCompLevel = 'national_selection' AND stemBestResult in ['gold', 'special_round_national'])
  OR (stemCompLevel = 'nmos_smops' AND stemBestResult = 'bronze_silver')

solid:
  stemCompLevel = 'national_selection' AND stemBestResult = 'bronze_silver'
  AND stemCompCount in ['two_three', 'four_plus']

developing: otherwise
```

### Debate 评级（参考 STEM 结构）

```
elite:
  外部：国际级比赛 Best Speaker / National champion
strong:
  National competition + award
solid:
  Zonal competition + award, OR school best speaker
developing: otherwise
```

使用与 STEM 相同的 stemCompLevel/stemBestResult 字段，
但 stemCompLevel 对 debate 的解读为：
- `school` → 校内辩论
- `national_selection` → 全国中学辩论赛（如 Sec Schools Debate Championship）
- `nmos_smops` → Best Speaker 级别奖项
- `international_olympiad` → 国际辩论赛

## 验收标准

- 函数签名正确，可以被 recommend.ts 导入
- 所有 7 类特长都有评级函数，边界情况返回 `developing` 而非 throw
- 单元测试（可选，用 console.log 验证即可）：
  - 全国赛冠军个人运动员 → elite
  - 学区赛团体正式队员 3次/周 → strong
  - 仅校内参与 → developing
  - Head Prefect + 国际项目 + 2年 → elite (leadership)
  - NMOS Special Round gold → elite (stem)
