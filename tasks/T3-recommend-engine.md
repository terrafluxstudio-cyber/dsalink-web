# T3 — 推荐引擎核心（自写 + 审核）

## 任务目标

新建 `/lib/recommend.ts`，实现完整的推荐逻辑，输出 6 所学校（分三层：Safe/Reach/Dream），并为每所学校生成英文推荐理由。

## 前置条件

- T1 已完成：`/data/primary-cca-pool.json` 存在
- T2 已完成：`/lib/talent-assessment.ts` 存在，可导入 `assessTalent()` 和相关类型

## 数据来源

```ts
import dsaMasterList from '@/data/dsa_master_list.json'; // 147 所学校
import { SCHOOL_COP_HISTORY_DATA } from '@/lib/school-cop-history-data';
import primaryCcaPool from '@/data/primary-cca-pool.json';
import { assessTalent, TalentAssessmentInput, TalentTier } from '@/lib/talent-assessment';
```

### dsa_master_list.json 的学校结构（先读文件确认字段名）

每所学校大致包含：
- `id`, `schoolName`, `slug`
- `psleCop`（按 posting group 分组的 COP 值）
- `dsaTalents`：数组，每条有 `category`、`area`、`description`
- `openHouse` 等

### school-cop-history-data.ts 的结构（先读文件确认）

包含历年 COP 数据（2023–2025），按年份存储。

## 输入类型

```ts
export interface RecommendRequest {
  alScore: number; // 4–32
  talents: TalentAssessmentInput[];
  region?: string;
  town?: string;
}
```

## 输出类型

```ts
export type SchoolTier = 'safe' | 'reach' | 'dream' | 'special';

export interface RecommendedSchool {
  name: string;
  slug: string;
  type: string;       // "IP School" | "Autonomous" | "Government" | etc.
  isIp: boolean;
  gender?: string;
  recentCop: string;  // e.g. "AL 8–12"
  matchedArea: string;
  matchedCategory: string;
  talentTier: TalentTier;  // 孩子的评级
  reasons: string[];       // 3 条推荐理由
  competitionPoolNote?: 'niche' | 'moderate' | 'popular';
  tier: SchoolTier;
}

export interface RecommendResult {
  safe: RecommendedSchool[];      // 2 所
  reach: RecommendedSchool[];     // 2 所
  dream: RecommendedSchool[];     // 2 所
  special: RecommendedSchool[];   // SOTA/NUS High/SST（若匹配）
  eliteMode: boolean;             // 若孩子是精英级，全部推好学校
  warnings: string[];             // 警告信息（AL≥23、学术强特长弱等）
}
```

## 推荐算法（6 步）

### Step 0：前置警告检查

```
若 alScore >= 23：
  return { warnings: ["DSA only applies to Express/IP schools (AL ≤ 22). ..."] }
  停止

若 talentTier <= 'solid' AND alScore <= 8：
  warnings.push("With a strong PSLE score of AL [X], S1 posting may give you access to
    better schools than DSA at this talent level.")
  （不停止，继续推荐，但加警告）
```

### Step 1：学段过滤

根据 alScore 过滤候选学校池：
```
alScore <= 22 → 保留所有 IP + Express 学校
alScore >= 23 → 排除 IP 学校（这步实际上在 Step 0 已处理，但双重保险）
```

### Step 2：特长匹配

对每所学校，检查 `dsaTalents` 数组是否包含用户所选特长：
- 精确匹配（category + area）→ 分数更高
- 类别匹配（只匹配 category）→ 也纳入

取用户多个特长中匹配分数最高的一个。

### Step 3：学校 DSA 门槛（阶梯）

计算每所学校近 3 年 COP 中位数，映射为该校 DSA 的最低特长要求：

```ts
function getSchoolRequiredTier(medianCop: number): TalentTier {
  if (medianCop <= 10) return 'elite';
  if (medianCop <= 16) return 'strong';
  if (medianCop <= 20) return 'solid';
  return 'developing';
}
```

- 孩子评级 >= 学校要求 → 正常推荐
- 孩子评级比要求低 1 档 → 标记为"aspirational"（保留，但理由措辞诚实）
- 孩子评级低 2 档以上 → 排除

### Step 4：竞争池修正

从 `primary-cca-pool.json` 查询该 area 的 `competitionLevel`（niche/moderate/popular）。
用于生成推荐理由文字，不影响排序。

### Step 5：地理过滤（非 IP 学校）

若用户填了 region/town：
- IP 学校不过滤
- 非 IP 学校：计算地理邻近度权重（同区 × 1.0，相邻区 × 0.8，跨区 × 0.5）

用邻近区对照表（hardcode）：
```ts
const adjacentRegions: Record<string, string[]> = {
  'Central': ['North', 'North-East', 'East', 'West'],
  'North': ['Central', 'North-East'],
  'North-East': ['Central', 'North', 'East'],
  'East': ['Central', 'North-East'],
  'West': ['Central'],
};
```

### Step 6：分层输出

根据孩子 AL 分计算 Safe/Reach/Dream 的 COP 区间：

```
Safe 学校：近 3 年 COP 中位数 在 [alScore, alScore+3] 范围内
           （COP 比孩子分略高，孩子通过 S1 也有机会，DSA 作托底保障）

Reach 学校：近 3 年 COP 中位数 在 [alScore-5, alScore-1] 范围内
            （孩子 S1 进不去，需靠 DSA 特长）

Dream 学校：近 3 年 COP 中位数 < alScore - 5
            （最顶尖学校，仅精英特长有机会）
```

精英特殊规则：
```
若所有特长评级均为 'elite'：
  eliteMode = true
  全部候选学校按 Dream 处理（COP 最低的排最前）
  输出 6 所最顶尖学校，safe/reach/dream 层均为顶级学校
```

**SOTA / NUS High / SST 处理：**
```
SOTA: 若用户特长 category === 'arts' → 加入 special 层
NUS High: 若用户特长 category === 'stem' AND talentTier === 'elite' → 加入 special 层
SST: 若用户特长 category === 'stem' → 加入 special 层（不要求 elite）
```

### 推荐理由生成

每所学校生成 3 条英文理由，基于：
- 特长匹配情况
- 孩子评级 vs 学校层级
- 竞争池大小（niche/popular）
- 地理位置（若非 IP）

理由模板（从以下选 3 条最相关的）：

```ts
const reasonTemplates = {
  // 特长匹配
  exactMatch: `${schoolName} offers DSA in ${area} — a direct match for your child's focus.`,
  categoryMatch: `${schoolName}'s ${category} DSA programme aligns with your child's background in ${area}.`,

  // 竞争评估
  strongFit: `With a ${tier} achievement level, your child is well-positioned for ${schoolName}'s competitive ${area} programme.`,
  competitiveFit: `${schoolName} actively recruits for ${area} and your child's level is relevant to their selection criteria.`,
  aspirational: `${schoolName} is highly selective in ${area} — this is an aspirational choice, worth trying given your child's talent.`,

  // 竞争池
  nicheAdvantage: `${area} is offered by relatively few primary schools in Singapore, meaning a smaller but dedicated talent pool at national competitions.`,
  popularNote: `${area} is widely popular, so competition for DSA slots is higher — your child's achievement level will need to stand out.`,

  // COP 关系
  safeNote: `Based on recent admission data (AL ${copRange}), your child may also qualify via S1 posting — DSA provides an earlier, secured offer.`,
  reachNote: `${schoolName}'s recent AL admission range is ${copRange} — your child would likely only access this school through DSA.`,
  dreamNote: `${schoolName} is among Singapore's most academically selective schools (recent AL ${copRange}) — DSA in ${area} is your child's primary pathway here.`,

  // 地理（非 IP）
  nearbyNote: `${schoolName} is located in the ${region} region — a practical commute from your area.`,

  // 固定免责
  disclaimer: `DSA vacancies are set by schools each year and are not publicly disclosed. We recommend contacting ${schoolName} directly to confirm their ${area} intake for 2026.`,
};
```

每所学校选 2 条内容理由 + 1 条 disclaimer，共 3 条。

## 验收标准

在 `recommend.ts` 底部加一个 `__testRecommend()` 函数，跑以下 7 个场景并 console.log 结果：

| # | Input | 期望 |
|---|-------|------|
| 1 | AL=18, softball, national champion individual | eliteMode=false, dream 含 RI 或 Nanyang |
| 2 | AL=12, softball, international representative | dream 含 Nanyang 或 Nan Hua |
| 3 | AL=20, dance, zonal top3 team key player | reach 含中等 IP 或自主学校 |
| 4 | AL=16, softball, national top3 individual | reach 含 Nanyang + B级 |
| 5 | AL=23, any | warnings 包含 AL≥23 提示，无推荐 |
| 6 | AL=10, stem, international olympiad gold | dream 含 NUS High, RI |
| 7 | AL=14, leadership, head student council + international + 2yr | A/B级学校 |

完成后给我审核验证。
