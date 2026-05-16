# T4 — 数据库 + API 路由

## 任务目标

建立数据库连接，创建表结构，实现 API 路由，记录每次推荐请求的数据（用于后台管理面板统计）。

## 技术选型

使用 **Vercel KV**（Redis-based，无需建表，最快上线）。
若 KV 不可用，改用 **Vercel Postgres**。

项目已部署在 Vercel，可在 Vercel Dashboard 直接开通 KV Storage。

## 文件

### `/lib/db.ts`

数据库连接和操作函数：

```ts
import { kv } from '@vercel/kv';

export interface RecommendRecord {
  id: string;           // nanoid() 生成
  timestamp: string;    // ISO 8601
  alScore: number;
  talents: Array<{
    category: string;
    specificArea: string;
    tier: string;       // elite / strong / solid / developing
  }>;
  recommendedSchools: Array<{
    name: string;
    tier: 'safe' | 'reach' | 'dream' | 'special';
  }>;
  region?: string;      // 若用户填了地区
  town?: string;        // 若用户填了市镇
  email?: string;       // 若用户填了邮件
}

export async function saveRecommendRecord(record: RecommendRecord): Promise<void> {
  // 存 hash: recommend:{id}
  await kv.hset(`recommend:${record.id}`, record);
  // 维护有序集合，按时间戳排序
  await kv.zadd('recommend:index', { score: Date.now(), member: record.id });
}

export async function getRecentRecords(limit = 100): Promise<RecommendRecord[]> {
  // 取最新 limit 条
  const ids = await kv.zrange('recommend:index', 0, limit - 1, { rev: true });
  if (!ids.length) return [];
  const records = await Promise.all(
    ids.map(id => kv.hgetall(`recommend:${id}`))
  );
  return records.filter(Boolean) as RecommendRecord[];
}
```

### `/app/api/recommend/route.ts`

Next.js API Route，接收推荐数据并存库：

```ts
import { NextRequest, NextResponse } from 'next/server';
import { saveRecommendRecord } from '@/lib/db';
import { nanoid } from 'nanoid';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const record = {
    id: nanoid(),
    timestamp: new Date().toISOString(),
    alScore: body.alScore,
    talents: body.talents,
    recommendedSchools: body.recommendedSchools,
    region: body.region,
    town: body.town,
    email: body.email,
  };

  await saveRecommendRecord(record);
  return NextResponse.json({ ok: true });
}
```

## 环境变量

在 Vercel Dashboard → Settings → Environment Variables 添加：
```
KV_URL
KV_REST_API_URL
KV_REST_API_TOKEN
KV_REST_API_READ_ONLY_TOKEN
```

（开通 Vercel KV 后自动提供）

本地开发：`.env.local` 里填入相同变量，或使用 `vercel env pull`

## 安装依赖

```bash
npm install @vercel/kv nanoid
```

## 验收标准

- `POST /api/recommend` 接受 JSON body，存入 KV，返回 `{ ok: true }`
- `getRecentRecords()` 返回最近记录，格式正确
- 本地测试：`curl -X POST http://localhost:3000/api/recommend -H "Content-Type: application/json" -d '{"alScore":14,"talents":[{"category":"sports","specificArea":"Softball","tier":"elite"}],"recommendedSchools":[{"name":"Raffles Institution","tier":"dream"}]}'`
  应返回 200 `{ ok: true }`

## 注意

- email 字段可能为空，存储时若为空不写入（避免 PDPA 问题）
- 不需要验证邮件格式，只存储
- 本任务不包括前端调用，前端调用在 T6 实现
