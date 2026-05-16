# CURSOR TASK: 修复 MS / TA 翻译问题（P0 数据错误 + P1 内容一致性 + P2 用词质量）

## 任务描述
`lib/i18n.ts` 的马来语（ms）和泰米尔语（ta）区块存在以下问题：
- 年份数据错误（2021 写成了 2023）
- 关键字段翻译意思与英文/中文版本不一致
- 部分译文 AI 腔重或用词不规范

本任务一次性修复全部 12 处，仅修改 `ms:{}` 和 `ta:{}` 两个区块。

## 涉及文件
- `lib/i18n.ts`（唯一修改文件）

---

## MS 区块改动（共 6 处）

### 1. `scoresPageH1` — 年份错误（P0）
**改前：**
```ts
scoresPageH1: "Papan data PSLE COP (2021–2025)",
```
**改后：**
```ts
scoresPageH1: "Papan Sejarah PSLE COP (2023–2025)",
```

### 2. `openHouseOfficialBooking` — 意思错误（P1）
**改前：**
```ts
openHouseOfficialBooking: "Tempahan rasmi",
```
**改后：**
```ts
openHouseOfficialBooking: "DSA / kemasukan",
```

### 3. `openHouseKicker` — 缺少"全岛"（P1）
**改前：**
```ts
openHouseKicker: "Mei 2026",
```
**改后：**
```ts
openHouseKicker: "Mei 2026 · Seluruh Pulau",
```

### 4. `sectionOpenHouseTitle` — 意思偏差（P2）
**改前：**
```ts
sectionOpenHouseTitle: "Hari terbuka sekolah · sorotan musim DSA",
```
**改后：**
```ts
sectionOpenHouseTitle: "Hari Terbuka Sekolah Menengah · DSA & Kemasukan",
```

### 5. `sectionOpenHouseDesc` — 内容与 EN/ZH 不一致（P1）
**改前：**
```ts
sectionOpenHouseDesc:
  "Disusun daripada kalendar Mei 2026. Masa dan mod di tapak / dalam talian adalah anggaran — sentiasa sahkan di laman rasmi setiap sekolah.",
```
**改后：**
```ts
sectionOpenHouseDesc:
  "147 sekolah menengah (direktori MOE, 2026) dengan nama dwibahasa, kawasan, jenis sekolah, dan pautan rasmi DSA / kemasukan. Masa hari terbuka adalah Mei 2026 (TBC) melainkan sekolah telah menerbitkan tarikh — sentiasa sahkan di laman rasmi setiap sekolah.",
```

### 6. `dsaStrategyInsightTitle` — AI 腔直译（P2）
**改前：**
```ts
dsaStrategyInsightTitle: "Pandangan Permainan Padanan",
```
**改后：**
```ts
dsaStrategyInsightTitle: "Logik Padanan Sekolah",
```

---

## TA 区块改动（共 6 处）

### 7. `openHouseOfficialBooking` — 意思错误（P1）
**改前：**
```ts
openHouseOfficialBooking: "அதிகாரப்பூர்வ முன்பதிவு",
```
**改后：**
```ts
openHouseOfficialBooking: "DSA / சேர்க்கை",
```

### 8. `openHouseKicker` — 缺少"全岛"（P1）
**改前：**
```ts
openHouseKicker: "மே 2026",
```
**改后：**
```ts
openHouseKicker: "மே 2026 · தீவு முழுவதும்",
```

### 9. `sectionOpenHouseTitle` — 意思偏差（P1）
**改前：**
```ts
sectionOpenHouseTitle: "பள்ளி திறந்த வீடுகள் · DSA சீசன் சிறப்புகள்",
```
**改后：**
```ts
sectionOpenHouseTitle: "இடைநிலைப் பள்ளி திறந்த நாட்கள் · DSA & சேர்க்கை",
```

### 10. `sectionOpenHouseDesc` — 内容与 EN/ZH 不一致（P1）
**改前：**
```ts
sectionOpenHouseDesc:
  "எங்கள் மே 2026 நாட்காட்டியிலிருந்து தேர்ந்தெடுக்கப்பட்டது. நேரங்கள் மற்றும் நேரடி / ஆன்லைன் முறைமைகள் குறிப்பிட்டவை — ஒவ்வொரு பள்ளியின் அதிகாரப்பூர்வ பக்கத்திலும் உறுதிப்படுத்தவும்.",
```
**改后：**
```ts
sectionOpenHouseDesc:
  "147 இடைநிலைப் பள்ளிகள் (MOE அட்டவணை, 2026) இரு மொழிப் பெயர்கள், பகுதி, பள்ளி வகை மற்றும் அதிகாரப்பூர்வ DSA / சேர்க்கை இணைப்புகளுடன். திறந்த வீடு நேரங்கள் மே 2026 (TBC) — ஒவ்வொரு பள்ளியின் அதிகாரப்பூர்வ பக்கத்திலும் உறுதிப்படுத்தவும்.",
```

### 11. `dsaStrategySmartTitle` — 文化典故不适用（P2）
**改前：**
```ts
dsaStrategySmartTitle: "சாணக்கிய உத்தி",
```
**改后：**
```ts
dsaStrategySmartTitle: "புத்திசாலி உத்தி",
```

### 12. `openHouseUrgencyThisSat` / `openHouseUrgencyThisSun` — 口语缩写不规范（P2）
**改前：**
```ts
openHouseUrgencyThisSat: "இந்த சனி",
openHouseUrgencyThisSun: "இந்த ஞாயி",
```
**改后：**
```ts
openHouseUrgencyThisSat: "இந்த சனிக்கிழமை",
openHouseUrgencyThisSun: "இந்த ஞாயிற்றுக்கிழமை",
```

---

## 验证步骤
- [ ] `npx tsc --noEmit` 无报错
- [ ] 本地 `npm run dev`，切换语言至马来语（ms），确认：
  - PSLE COP 页面 H1 显示 "2023–2025"（非 2021）
  - Open House 区块标题为 "Hari Terbuka Sekolah Menengah · DSA & Kemasukan"
  - Open House kicker 显示 "Mei 2026 · Seluruh Pulau"
- [ ] 切换至泰米尔语（ta），确认：
  - Open House kicker 显示 "மே 2026 · தீவு முழுவதும்"
  - Strategy Smart 标题显示 "புத்திசாலி உத்தி"
  - 星期标签显示完整拼写
