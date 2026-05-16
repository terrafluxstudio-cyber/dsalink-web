# T7 — 后台管理面板（依赖 T4 完成后执行）

## 任务目标

新建 `/app/admin/page.tsx`，以表格形式展示所有推荐记录，用于数据回顾和统计。
密码保护，只有知道密码的人才能访问。

## 前置条件

- T4 完成：`/lib/db.ts` 存在，`getRecentRecords()` 函数可用

## 文件

`/app/admin/page.tsx`（Server Component）

## 密码保护

使用最简单的方式：URL query param 密码验证。

```ts
// 访问方式：/admin?key=YOUR_SECRET
// 密码存在环境变量 ADMIN_KEY

export default async function AdminPage({ searchParams }) {
  const key = searchParams?.key;
  if (key !== process.env.ADMIN_KEY) {
    return <div className="p-8 text-red-400">Access denied.</div>;
  }
  // ... 正常渲染
}
```

在 Vercel 环境变量中设置 `ADMIN_KEY=something_secret_here`。

## 数据获取

```ts
import { getRecentRecords } from '@/lib/db';

const records = await getRecentRecords(200); // 最近 200 条
```

## 页面展示

标题："DSA Recommender — Admin Dashboard"
副标题：显示记录总数和最后更新时间

### 汇总统计卡片（顶部）

```
Total sessions: [N]
Unique emails collected: [N]
Most requested talent: [area name]
Average AL score: [X.X]
```

### 详细表格

每行一条推荐记录，列：

| 列 | 内容 |
|----|------|
| Time | 时间（格式：May 15, 14:32） |
| AL Score | 家长输入的分数 |
| Talent(s) | 特长列表（如 "Softball (elite), Dance (solid)"） |
| Recommended Schools | 推荐的 6 所学校名称，带 S/R/D 标注 |
| Region | 地区（若有） |
| Email | 邮件（若有，否则 "—"） |

表格样式：
- 暗色背景（`bg-slate-900`）
- 行间隔色（`odd:bg-slate-800`）
- 文字小（`text-sm`）
- 可水平滚动（`overflow-x-auto`）

## 环境变量

在 `.env.local` 加：
```
ADMIN_KEY=your_secret_password_here
```

在 Vercel Dashboard 同步添加此环境变量。

## 验收标准

- `/admin?key=wrongpassword` → 显示 "Access denied."
- `/admin?key=correct_password` → 显示数据表格
- 若数据库为空，显示 "No records yet."
- 表格列对齐，可滚动
