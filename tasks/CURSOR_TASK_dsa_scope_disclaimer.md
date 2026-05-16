# CURSOR TASK: DSA 适用范围说明（P6→Sec1 Only）

## 背景
DSALink 仅涵盖 Primary 6 升 Secondary 1 的直接招生计划（DSA-Sec）。
独立的 DSA-JC（Secondary → Junior College）不在本平台范围内。
当前网站无任何说明，可能让部分中学生家长误以为也适用。

## 目标
在三处加入简短范围说明，不强调、不干扰主流程：
1. `locales/en.json` — `dsa_about_body` 末尾追加一句
2. `locales/zh.json` — 同上（中文）
3. `locales/ms.json` — 同上（马来文）
4. `locales/ta.json` — 同上（泰米尔文）
5. `components/SiteFooter.tsx` — 底部免责声明区域追加一行小字

---

## 改动 1–4 — 四语言 locale 文件

### `locales/en.json`
找到第 94 行：
```json
"dsa_about_body": "DSALink is an independent data platform developed and maintained by Terraflux Studio. All data is aggregated from the Ministry of Education (MOE) SchoolFinder and individual official school portals. This platform is not affiliated with the Ministry of Education, Singapore.",
```
改为：
```json
"dsa_about_body": "DSALink is an independent data platform developed and maintained by Terraflux Studio. All data is aggregated from the Ministry of Education (MOE) SchoolFinder and individual official school portals. This platform is not affiliated with the Ministry of Education, Singapore. DSALink covers the Primary 6 to Secondary 1 DSA exercise (DSA-Sec) only; the separate DSA for Junior Colleges (DSA-JC) is not covered here.",
```

### `locales/zh.json`
找到第 94 行：
```json
"dsa_about_body": "DSALink 由 Terraflux Studio 独立开发维护，数据来源于新加坡教育部官方 SchoolFinder 平台及各校官网。本平台与新加坡教育部（MOE）无任何隶属关系。",
```
改为：
```json
"dsa_about_body": "DSALink 由 Terraflux Studio 独立开发维护，数据来源于新加坡教育部官方 SchoolFinder 平台及各校官网。本平台与新加坡教育部（MOE）无任何隶属关系。本平台仅涵盖小六升中一的直接招生计划（DSA-Sec），升初院的 DSA-JC 不在此范围内。",
```

### `locales/ms.json`
找到 `dsa_about_body` 键，在现有值末尾追加（句号后空格）：
```
 Platform ini hanya merangkumi DSA dari Darjah 6 ke Menengah 1 (DSA-Sec); DSA untuk Kolej Junior (DSA-JC) tidak diliputi di sini.
```

### `locales/ta.json`
找到 `dsa_about_body` 键，在现有值末尾追加（句号后空格）：
```
 இந்த தளம் பிரைமரி 6 இல் இருந்து செகண்டரி 1 வரையிலான DSA-Sec செயல்முறையை மட்டுமே உள்ளடக்குகிறது; ஜூனியர் கல்லூரிக்கான DSA-JC இங்கு தொடர்புடையதல்ல.
```

---

## 改动 5 — `components/SiteFooter.tsx`

找到现有免责声明区域（`text-[11px]` 或 `text-slate-400` 的 `<p>` 标签），在其**后面**紧接着插入一行：

```tsx
<p className="mt-1 text-[11px] text-slate-400">
  DSALink covers DSA-Sec (P6 → Secondary 1) only. DSA-JC is a separate process not covered here.
</p>
```

如果免责声明区域不存在，则在 `<SiteFooter>` 的底部版权行上方插入上述 `<p>` 标签。

---

## 验证步骤
- [ ] `npx tsc --noEmit` 无报错
- [ ] SeoTextBlock "About DSALink" 段落末尾显示范围说明（英文）
- [ ] 切换至中文，显示 "本平台仅涵盖小六升中一…"
- [ ] Footer 底部显示小字 "DSALink covers DSA-Sec (P6 → Secondary 1) only."
