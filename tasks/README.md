# DSA School Recommender — Task Board

## 任务状态总览

| 任务 | 文件 | 执行方 | 依赖 | 状态 |
|------|------|--------|------|------|
| **T1** 小学 CCA 数据 | `T1-primary-cca-data.md` | Cursor | 无 | ✅ 完成 |
| **T2** 特长评级逻辑 | `T2-talent-assessment.md` | Cursor | 无 | ✅ 完成 |
| **T3** 推荐引擎核心 | `T3-recommend-engine.md` | **自写 + Claude 审核** | T1+T2 | ✅ 完成 |
| **T4** 数据库 + API | `T4-database-api.md` | Cursor | 无 | ✅ 完成 |
| **T5** UI 组件 | `T5-ui-components.md` | Cursor | 无 | ✅ 完成 |
| **T6** 页面组装 | `T6-pages-assembly.md` | Cursor | T2+T3+T5 | ✅ 完成 |
| **T7** 后台管理面板 | `T7-admin-dashboard.md` | Cursor | T4 | ✅ 完成 |
| **T8** DSA 经验指南 | `T8-dsa-guide.md` | Cursor | 无 | ✅ 完成 |
| **T9** 首页 CTA | `T9-homepage-cta.md` | Cursor | T6+T8 | ✅ 完成 |

## 执行顺序

### 第 1 天（并行启动）

将以下 5 个任务**同时**分别开一个 Cursor 窗口执行：
- T1 — `T1-primary-cca-data.md`
- T2 — `T2-talent-assessment.md`
- T4 — `T4-database-api.md`
- T5 — `T5-ui-components.md`
- T8 — `T8-dsa-guide.md`

同时自己写 T3（推荐引擎核心），完成后在 Claude Code 里找 Claude 审核。

### 第 2 天（集成）

- T1+T2+T5 都完成后 → 把 T3 交 Cursor（如果 T3 自写已通过审核）
- T3 通过 → 启动 T6 页面组装
- T4 完成 → 启动 T7 管理面板

### 第 3 天（收尾）

- T6+T8 完成 → 启动 T9 首页 CTA
- 全流程浏览器测试 7 个验证场景（见 T3 规格文件）
- `vercel --prod` 部署

## 状态更新方法

完成一个任务后，把对应行的 ⬜ 改为 ✅。

## 验证场景（上线前必须全部通过）

| # | AL | 特长 | 评估 | 预期 |
|---|----|----|------|------|
| 1 | 18 | 垒球 | 全国赛冠军+个人 | RI、南洋在推荐中 |
| 2 | 12 | 垒球 | 国际赛代表队+个人 | 南洋、南华推荐；RI为Dream |
| 3 | 20 | 舞蹈 | 学区赛前三+团体主力 | 中等IP或自主学校 |
| 4 | 16 | 垒球 | 全国赛前三+个人 | 南洋 + B级学校 |
| 5 | 23 | 任意 | 任意 | 第一步拦截，显示警告 |
| 6 | 10 | STEM | 国际奥林匹克金牌 | NUS High/RI/HCI |
| 7 | 14 | 领导力 | 学生会+国际项目+2年 | A/B级学校 |
