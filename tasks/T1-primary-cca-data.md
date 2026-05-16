# T1 — 抓取小学 CCA 数据

## 任务目标

从 data.gov.sg 公开 API 拉取新加坡小学 CCA 数据，统计每个 CCA 项目有多少所小学开设，
输出到 `/data/primary-cca-pool.json`。

这个数据用于推荐引擎中判断某个特长项目是"小众"还是"热门"，
以便调整推荐措辞：小众项目（<50所小学）竞争池小，热门项目（>100所小学）竞争更激烈。

## 执行步骤

### 1. 写脚本 `/scripts/fetch-primary-cca.ts`

调用 data.gov.sg API：

```
GET https://data.gov.sg/api/action/datastore_search
  ?resource_id=d_9aba12b5527843afb0b2e8e4ed6ac6bd
  &limit=5000
```

返回的每条记录有这些字段：
- `school_name` — 学校名称
- `level` — "primary" / "secondary" / "mixed"
- `cca_grouping_desc` — CCA 大类（"Physical Sports", "Clubs & Societies", "Visual & Performing Arts", "Uniformed Groups"）
- `cca_generic_name` — 通用项目名（如 "Basketball", "Softball", "Dance"）
- `cca_customised_name` — 学校自定义名称（如 "Raffles Dance"）

### 2. 过滤逻辑

只保留 `level === "primary"` 的记录

### 3. 统计与输出

按 `cca_generic_name` 分组，统计每个项目有多少所不同的小学（去重）开设。

输出 `/data/primary-cca-pool.json` 格式如下：

```json
{
  "metadata": {
    "source": "data.gov.sg",
    "fetched_at": "2026-05-15",
    "total_primary_schools_counted": 190
  },
  "cca_pool": [
    {
      "genericName": "Basketball",
      "category": "Physical Sports",
      "schoolCount": 187,
      "competitionLevel": "popular"
    },
    {
      "genericName": "Softball",
      "category": "Physical Sports",
      "schoolCount": 24,
      "competitionLevel": "niche"
    },
    {
      "genericName": "Dance",
      "category": "Visual & Performing Arts",
      "schoolCount": 95,
      "competitionLevel": "moderate"
    }
  ]
}
```

`competitionLevel` 计算规则：
- `schoolCount < 50` → `"niche"`
- `50 <= schoolCount <= 100` → `"moderate"`
- `schoolCount > 100` → `"popular"`

### 4. 运行脚本

在 package.json 加一个 script：
```json
"fetch-cca": "npx ts-node --project tsconfig.json scripts/fetch-primary-cca.ts"
```

运行：`npm run fetch-cca`

## 验收标准

- 输出文件 `/data/primary-cca-pool.json` 存在且格式正确
- "Basketball" 应为 popular（>100所小学）
- "Softball" 应为 niche（<50所小学）
- `cca_pool` 数组中每条记录都有 genericName、category、schoolCount、competitionLevel

## 注意

- API 可能需要分页（total 大于 5000 时循环请求）
- 有些学校可能同时有多个舞蹈/运动队，同一所学校只计数一次（按 school_name 去重）
- 网络请求用 `node-fetch`（已在 package.json 中）
