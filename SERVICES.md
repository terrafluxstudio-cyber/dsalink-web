# DSALink — Third-Party Services & Configuration

> 仅在需要时查阅。不进入 CLAUDE.md，不自动加载。
> Last updated: 2026-05-24

---

## 域名

| 项目 | 值 |
|------|----|
| 主域名 | `dsalink.sg` |
| www 重定向 | `www.dsalink.sg` → `dsalink.sg`（Vercel vercel.json 301 redirect） |
| 注册商 | 待补充 |

---

## Vercel（托管 + CDN + Cron）

| 项目 | 值 |
|------|----|
| 项目名 | `dsalink-web-9ftz` |
| Project ID | `prj_AXcouZBWX6hQENv4WzzSRS6T3owa` |
| Org / Team ID | `team_Dano5jUcrGSy35yziMm3fhx6` |
| 登录账号 | terrafluxstudio@gmail.com |
| 控制台 | https://vercel.com/dashboard |
| 自动部署 | 推送 `main` 分支触发，约 1 min 完成 |

### Vercel Cron Job

```
路径:    /api/cron/drip
计划:    0 1 * * *  （每天 01:00 UTC = 09:00 SGT）
用途:    按当前 DSA 阶段自动发邮件序列给订阅用户
保护:    CRON_SECRET 环境变量（需在 Vercel 环境变量中设置）
```

### 环境变量（Vercel 控制台设置）

| 变量名 | 用途 | 备注 |
|--------|------|------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID | 值: `G-6P0DLG1EZL` |
| `KV_REST_API_URL` | Upstash Redis REST URL | 值: `https://concrete-cub-125493.upstash.io` |
| `KV_REST_API_TOKEN` | Upstash 读写 token | Upstash 控制台 → REST API |
| `KV_REST_API_READ_ONLY_TOKEN` | Upstash 只读 token | 同上 |
| `KV_URL` | Redis 连接字符串 | 格式 `redis://default:<token>@host:6379` |
| `RESEND_API_KEY` | Resend 邮件 API key | Resend 控制台 → API Keys |
| `ADMIN_KEY` | `/admin` 页面访问密码 | 当前值见 `.env.local` |
| `CRON_SECRET` | 保护 `/api/cron/drip` 端点 | 自定义强密码，Vercel + `.env.local` 一致 |
| `NEXT_PUBLIC_SITE_URL` | 规范 URL（可选） | 默认 `https://dsalink.sg` |
| `NEXT_PUBLIC_MOE_PRIMARY_CTA_URL` | 首页 CTA 链接（可选） | 默认 MOE DSA 官页 |
| `FEATURED_SCHOOLS_SHEET_ID` | Google Sheet ID（可选） | 开放日精选学校数据源 |
| `FEATURED_SCHOOLS_SHEET_TAB` | Sheet 标签名（可选） | 默认 `FeaturedSchools` |

本地开发：复制 `.env.example` 为 `.env.local` 并填入真实值。

---

## GitHub

| 项目 | 值 |
|------|----|
| 仓库 | `terrafluxstudio-cyber/dsalink-web` |
| 分支 | `main`（直接推送，无 PR 流程） |
| 账号 | terrafluxstudio@gmail.com |

---

## Upstash Redis（数据库）

| 项目 | 值 |
|------|----|
| 服务 | Upstash Redis（通过 `@vercel/kv` 访问） |
| REST URL | `https://concrete-cub-125493.upstash.io` |
| 控制台 | https://console.upstash.com/redis?teamid=0 |
| 用途 | 存储订阅邮箱、推荐记录、邮件发送状态（drip 阶段标记） |
| 主要 key 结构 | `recommend:<id>` → JSON 对象（email, timestamp, talents, schools, phase_*_sent flags） |

---

## Resend（发信服务）

| 项目 | 值 |
|------|----|
| 服务 | Resend（https://resend.com） |
| 发信地址 | `hello@dsalink.sg` |
| 控制台 | https://resend.com/emails |
| 用途 | 欢迎邮件 + 5阶段 drip 序列（open_house / deadline_reminder / post_application / interview_prep / results） |
| 邮件模板 | 纯文本，代码在 `lib/resend.ts` |

---

## Cloudflare Email Routing（收信转发）

| 项目 | 值 |
|------|----|
| 服务 | Cloudflare Email Routing |
| 收信地址 | `hello@dsalink.sg` |
| 转发到 | `terrafluxstudio@gmail.com` |
| 状态 | Enabled（2026-05-23 配置完成） |

### DNS 记录（Cloudflare）

| 类型 | 名称 | 值 |
|------|------|----|
| MX | `@` | `route1.mx.cloudflare.net`（优先级 26） |
| MX | `@` | `route2.mx.cloudflare.net`（优先级 30） |
| MX | `@` | `route3.mx.cloudflare.net`（优先级 10） |
| TXT | `@` | `v=spf1 include:_spf.mx.cloudflare.net ~all` |

---

## Google Analytics 4

| 项目 | 值 |
|------|----|
| Measurement ID | `G-6P0DLG1EZL` |
| 控制台 | https://analytics.google.com |
| 登录 | terrafluxstudio@gmail.com |
| 实现 | `components/GoogleAnalytics.tsx`，在 `app/layout.tsx` 注入 |

---

## 社交媒体账号

| 平台 | 账号/链接 | 状态 |
|------|-----------|------|
| Facebook Page | https://www.facebook.com/profile.php?id=61590026554613 | 🟢 活跃 |
| Instagram | https://www.instagram.com/dsalink.sg (`@dsalink.sg`) | 🟢 活跃 |
| Telegram 频道 | https://t.me/dsa_link_sg | 🟡 已建，subscriber 少 |

---

## 主要 npm 包（非标准库）

| 包 | 用途 |
|----|------|
| `@vercel/kv` | Redis 客户端（Upstash） |
| `next-mdx-remote` | MDX 博客文章渲染 |
| `remark-gfm` | MDX 表格/GFM 支持 |
| `gray-matter` | MDX frontmatter 解析 |
| `resend`（via fetch） | 发信（直接调用 REST API，未用 SDK） |
| `nanoid` | 生成订阅记录唯一 ID |
| `@radix-ui/react-dialog` | SchoolFinderModal 等弹窗 |
| `@tailwindcss/typography` | blog prose 样式 |
| `lucide-react` | 图标库 |
| `puppeteer` | 数据抓取脚本（非运行时） |
| `cheerio` | HTML 解析（数据脚本） |
| `sharp` | 图片处理（Next.js 内置优化） |

---

## 本地开发

```bash
npm install
cp .env.example .env.local   # 填入真实 key
npm run dev                   # http://localhost:3000
npx tsc --noEmit              # 类型检查（忽略 .next/ 报错）
git push origin main          # 自动触发 Vercel 部署
```
