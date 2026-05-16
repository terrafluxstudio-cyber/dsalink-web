# CURSOR TASK: 订阅 Banner 多语言支持

## 问题
`HomepageSubscribeBanner` 所有文字硬编码为英文，切换中文/马来文/泰米尔文时无变化。

## 涉及文件
- `lib/i18n.ts` — 添加 Copy 类型字段 + 四语言翻译
- `components/HomepageSubscribeBanner.tsx` — 改为使用 `useLanguage()`

---

## 改动 1 — `lib/i18n.ts` 添加字段

### 1a 在 Copy 类型中追加（在 `} & DsaGuideStrings;` 前一行插入）

**改前：**
```ts
  glossaryDefVocationalSubjects?: string;
} & DsaGuideStrings;
```
**改后：**
```ts
  glossaryDefVocationalSubjects?: string;
  subscribeKicker: string;
  subscribeTitle: string;
  subscribeDesc: string;
  subscribeMaterial1: string;
  subscribeMaterial2: string;
  subscribeMaterial3: string;
  subscribeMaterial4: string;
  subscribeFormLabel: string;
  subscribeBtn: string;
  subscribeBtnLoading: string;
  subscribeSuccessTitle: string;
  subscribeSuccessDesc: string;
  subscribeDisclaimer: string;
} & DsaGuideStrings;
```

### 1b 在 `en:` 对象末尾（紧接最后一个键之后，`},` 之前）追加：
```ts
    subscribeKicker: "FREE RESOURCE PACK · P6 FAMILIES",
    subscribeTitle: "Everything you need to prepare — in one free pack",
    subscribeDesc: "Used by hundreds of Singapore families preparing for DSA. No upsells, no agent, just the materials.",
    subscribeMaterial1: "DSA school comparison worksheet (147 schools)",
    subscribeMaterial2: "Interview question bank by talent area",
    subscribeMaterial3: "Open house field guide — what to ask & observe",
    subscribeMaterial4: "2026 application timeline & deadline checklist",
    subscribeFormLabel: "Get the free pack",
    subscribeBtn: "Send me the pack →",
    subscribeBtnLoading: "Sending…",
    subscribeSuccessTitle: "Pack on its way.",
    subscribeSuccessDesc: "Check your inbox — we'll send the materials within 24 hours.",
    subscribeDisclaimer: "Free. No spam. Unsubscribe anytime.",
```

### 1c 在 `zh:` 对象末尾追加：
```ts
    subscribeKicker: "免费资料包 · 小六家庭专属",
    subscribeTitle: "备考所需的一切，全部免费打包送上",
    subscribeDesc: "已有数百个新加坡家庭用于 DSA 备考。无附加销售，无中介，只有干货。",
    subscribeMaterial1: "DSA 学校对比表（147 所中学）",
    subscribeMaterial2: "按才能领域分类的面试题库",
    subscribeMaterial3: "开放日现场指引——该问什么、该观察什么",
    subscribeMaterial4: "2026 年申请时间轴与截止日期清单",
    subscribeFormLabel: "领取免费资料包",
    subscribeBtn: "发给我 →",
    subscribeBtnLoading: "发送中…",
    subscribeSuccessTitle: "资料包已在路上。",
    subscribeSuccessDesc: "请查收邮件——我们将在 24 小时内发送材料。",
    subscribeDisclaimer: "免费。无垃圾邮件。随时退订。",
```

### 1d 在 `ms:` 对象末尾追加：
```ts
    subscribeKicker: "PAKEJ SUMBER PERCUMA · KELUARGA DARJAH 6",
    subscribeTitle: "Semua yang anda perlukan untuk bersedia — dalam satu pakej percuma",
    subscribeDesc: "Digunakan oleh ratusan keluarga Singapura yang bersedia untuk DSA. Tiada jualan tambahan, tiada ejen, hanya bahan.",
    subscribeMaterial1: "Lembaran perbandingan sekolah DSA (147 sekolah)",
    subscribeMaterial2: "Bank soalan temuduga mengikut bidang bakat",
    subscribeMaterial3: "Panduan lawatan rumah terbuka — apa yang perlu ditanya & diperhatikan",
    subscribeMaterial4: "Senarai semak garis masa permohonan & tarikh akhir 2026",
    subscribeFormLabel: "Dapatkan pakej percuma",
    subscribeBtn: "Hantar kepada saya →",
    subscribeBtnLoading: "Menghantar…",
    subscribeSuccessTitle: "Pakej sedang dalam perjalanan.",
    subscribeSuccessDesc: "Semak peti masuk anda — kami akan menghantar bahan dalam masa 24 jam.",
    subscribeDisclaimer: "Percuma. Tiada spam. Berhenti langgan bila-bila masa.",
```

### 1e 在 `ta:` 对象末尾追加：
```ts
    subscribeKicker: "இலவச வள தொகுப்பு · P6 குடும்பங்கள்",
    subscribeTitle: "தயாரிப்புக்கு தேவையான அனைத்தும் — ஒரு இலவச தொகுப்பில்",
    subscribeDesc: "நூற்றுக்கணக்கான சிங்கப்பூர் குடும்பங்கள் DSA தயாரிப்புக்கு பயன்படுத்துகின்றன.",
    subscribeMaterial1: "DSA பள்ளி ஒப்பீட்டு பட்டியல் (147 பள்ளிகள்)",
    subscribeMaterial2: "திறன் பகுதி வாரியாக நேர்காணல் கேள்வி தொகுப்பு",
    subscribeMaterial3: "திறந்த இல்ல வழிகாட்டி — என்ன கேட்கவேண்டும் & கவனிக்கவேண்டும்",
    subscribeMaterial4: "2026 விண்ணப்ப கால அட்டவணை & காலக்கெடு சரிபார்ப்பு பட்டியல்",
    subscribeFormLabel: "இலவச தொகுப்பைப் பெறுங்கள்",
    subscribeBtn: "எனக்கு அனுப்புங்கள் →",
    subscribeBtnLoading: "அனுப்புகிறோம்…",
    subscribeSuccessTitle: "தொகுப்பு வழியில் உள்ளது.",
    subscribeSuccessDesc: "உங்கள் inbox-ஐ சரிபாருங்கள் — 24 மணி நேரத்தில் அனுப்புவோம்.",
    subscribeDisclaimer: "இலவசம். spam இல்லை. எப்போதும் குழுவிலகலாம்.",
```

---

## 改动 2 — `components/HomepageSubscribeBanner.tsx` 改为 i18n

**完整替换文件内容：**

```tsx
"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function HomepageSubscribeBanner() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const materials = [
    t.subscribeMaterial1,
    t.subscribeMaterial2,
    t.subscribeMaterial3,
    t.subscribeMaterial4,
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-intellectual py-12 sm:py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* Left: value proposition */}
          <div className="flex-1">
            <p className="mb-2 text-[10px] font-semibold tracking-[0.18em] text-champagne normal-case">
              {t.subscribeKicker}
            </p>
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              {t.subscribeTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              {t.subscribeDesc}
            </p>
            <ul className="mt-5 flex flex-col gap-2.5">
              {materials.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-champagne" aria-hidden />
                  <span className="text-sm text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="w-full lg:max-w-[320px]">
            {status === "success" ? (
              <div className="rounded-2xl border border-champagne/30 bg-white/10 px-6 py-8 text-center">
                <CheckCircle2 className="mx-auto mb-3 h-8 w-8 text-champagne" aria-hidden />
                <p className="text-base font-bold text-white">{t.subscribeSuccessTitle}</p>
                <p className="mt-1.5 text-sm text-white/60">{t.subscribeSuccessDesc}</p>
              </div>
            ) : (
              <div className="rounded-2xl border border-white/10 bg-white/8 px-6 py-7">
                <p className="mb-4 text-sm font-semibold text-white">{t.subscribeFormLabel}</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    disabled={status === "loading"}
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-champagne/60 focus:outline-none focus:ring-1 focus:ring-champagne/40 disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full rounded-xl bg-champagne py-3 text-sm font-bold text-intellectual shadow-gold transition hover:bg-champagne-light disabled:opacity-60"
                  >
                    {status === "loading" ? t.subscribeBtnLoading : t.subscribeBtn}
                  </button>
                </form>
                {status === "error" && (
                  <p className="mt-2 text-xs text-red-400">Something went wrong. Please try again.</p>
                )}
                <p className="mt-3 text-center text-[11px] text-white/30">{t.subscribeDisclaimer}</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
```

---

## 验证步骤
- [ ] `npx tsc --noEmit` 无报错
- [ ] 切换至中文，Banner 标题/材料列表/按钮全部显示中文
- [ ] 切换至马来文/泰米尔文，同样更新
- [ ] 提交后 success 状态文字也跟随语言变化
