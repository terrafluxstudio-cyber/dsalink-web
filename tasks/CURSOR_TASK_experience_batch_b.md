# CURSOR TASK — DSA Experience Batch B
# (Softball data fix + Callout visual layer)

**Files to edit:**
1. `content/dsa-experience.tsx`
2. `components/DsaExperiencePageBody.tsx`

**Verification:** `npx tsc --noEmit` must pass with zero errors.

---

## PART 1 — Fix softball number (content/dsa-experience.tsx)

Four string replacements, one per locale. Change "20–30" to "around 14"
(Source: SGSchoolKaki / MOE SchoolFinder — 14 primary schools confirmed).

### EN
Find:
```
"Softball is offered at roughly 20–30 primary schools in Singapore; basketball at well over 150.
```
Replace with:
```
"Softball is offered at around 14 primary schools in Singapore; basketball at well over 150.
```

### ZH
Find:
```
垒球在新加坡约有 20–30 所小学开展，篮球则超过 150 所。
```
Replace with:
```
垒球在新加坡约有 14 所小学开展，篮球则超过 150 所。
```

### MS
Find:
```
Sofbol ditawarkan di lebih kurang 20–30 sekolah rendah di Singapura; bola keranjang di lebih 150.
```
Replace with:
```
Sofbol ditawarkan di sekitar 14 sekolah rendah di Singapura; bola keranjang di lebih 150.
```

### TA
Find:
```
சாஃப்ட்பால் சிங்கப்பூரில் சுமார் 20-30 தொடக்கப் பள்ளிகளில் வழங்கப்படுகிறது
```
Replace with:
```
சாஃப்ட்பால் சிங்கப்பூரில் சுமார் 14 தொடக்கப் பள்ளிகளில் வழங்கப்படுகிறது
```

---

## PART 2 — Add callout type to content/dsa-experience.tsx

### 2a. Add exported type (insert directly after the existing DsaExperienceSection type declaration)

Find the existing type:
```typescript
export type DsaExperienceSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  orderedList?: string[];
};
```

Replace with:
```typescript
export type DsaExperienceCallout = {
  type: "warning" | "insight";
  heading: string;
  body: string;
};

export type DsaExperienceSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  orderedList?: string[];
  callouts?: DsaExperienceCallout[];
};
```

---

## PART 3 — Add callout data to SECTIONS_EN

Three sections in `SECTIONS_EN` need `callouts` added. In each case, add the `callouts` field as the LAST property of the section object (before the closing `}`).

### Section 1 (id: "section-1") — add after `paragraphs: [...]`

Add this property to the section-1 object in SECTIONS_EN:
```typescript
    callouts: [
      {
        type: "warning",
        heading: "Before you confirm: think through both directions",
        body: "If PSLE falls short of the school's minimum posting group, a conditional offer may be withdrawn — and the S1 Posting Exercise is closed, because you exited it on confirmation. If PSLE significantly exceeds projections, the DSA commitment still holds — there is no mechanism to transfer to a higher-tier school your child's results would otherwise have reached.",
      },
    ],
```

### Section 2 (id: "section-2") — add after `paragraphs: [...]`

Add this property to the section-2 object in SECTIONS_EN:
```typescript
    callouts: [
      {
        type: "insight",
        heading: "Use NSG results as a free public signal",
        body: "Before applying, check the school's National School Games results in your child's specific sport. Schools that reach NSG nationals recruit nationally competitive talent. Schools competitive at zonal level may still accept strong-but-not-national profiles — especially after top-tier slots are filled. Match talent level to school tier, not just school name.",
      },
    ],
```

### Section 3 (id: "section-3") — add after `paragraphs: [...]`

Add this property to the section-3 object in SECTIONS_EN:
```typescript
    callouts: [
      {
        type: "insight",
        heading: "Silence is usually the rejection notice",
        body: "Most schools do not send notifications to unsuccessful applicants. If two weeks pass without contact after results season begins, treat that as your answer — not a delay.",
      },
      {
        type: "warning",
        heading: "Dual-stream schools: confirm which track before signing",
        body: "Schools offering both IP and O Level programmes can counter-offer the O Level track to DSA applicants, even if you expressed a preference for IP. Ask at open house. Confirm in writing before accepting any offer — you cannot change the track afterwards.",
      },
    ],
```

---

## PART 4 — Add callout data to SECTIONS_ZH

Same three sections, Chinese content.

### Section 1 (id: "section-1") in SECTIONS_ZH

Add this property to the section-1 object in SECTIONS_ZH:
```typescript
    callouts: [
      {
        type: "warning",
        heading: "Confirm 之前：两个方向都要想清楚",
        body: "如果 PSLE 未达学校最低分配组别，条件性录取可能被撤销——而 S1 分配通道已在你 confirm 的那一刻关闭。如果 PSLE 大幅超出预期，DSA 承诺依然有效——没有机制让孩子转入凭实际成绩本可进入的更好学校。",
      },
    ],
```

### Section 2 (id: "section-2") in SECTIONS_ZH

Add this property to the section-2 object in SECTIONS_ZH:
```typescript
    callouts: [
      {
        type: "insight",
        heading: "用 NSG 赛果做选校功课（免费公开情报）",
        body: "申请前，查一查目标学校在孩子那个运动项目的 National School Games 赛区成绩。能进全国赛的学校，招募的是全国级选手；区域赛成绩稳定但未进全国的学校，可能在顶校名额用完后接受强但非全国顶尖的申请者。按才能层级选校，而不只看学校名气。",
      },
    ],
```

### Section 3 (id: "section-3") in SECTIONS_ZH

Add this property to the section-3 object in SECTIONS_ZH:
```typescript
    callouts: [
      {
        type: "insight",
        heading: "没有邮件，通常就是答复",
        body: "大部分学校不会向未入选的申请者发送淘汰通知。结果发放季开始后两周没有任何消息，这很可能就是你的答案——不是延迟，是沉默式淘汰。",
      },
      {
        type: "warning",
        heading: "双轨制学校：签收前确认是哪条轨道",
        body: "同时提供 IP 和 O Level 的学校，可以把你的 IP 志愿改成 O Level 录取通知，即使申请时已注明偏好 IP。开放日时直接问，收到通知书前书面确认。签了就改不了。",
      },
    ],
```

---

## PART 5 — Add callout data to SECTIONS_MS

### Section 1 (id: "section-1") in SECTIONS_MS

Add this property to the section-1 object in SECTIONS_MS:
```typescript
    callouts: [
      {
        type: "warning",
        heading: "Sebelum mengesahkan: fikirkan kedua-dua arah",
        body: "Jika PSLE tidak mencapai kumpulan penempatan minimum sekolah, tawaran bersyarat boleh ditarik balik — dan Latihan Penempatan S1 ditutup, kerana anda keluar daripadanya semasa pengesahan. Jika PSLE jauh melebihi unjuran, komitmen DSA masih berkuat kuasa — tiada mekanisme untuk berpindah ke sekolah tahap lebih tinggi yang keputusan sebenar anak anda akan melayakkan mereka.",
      },
    ],
```

### Section 2 (id: "section-2") in SECTIONS_MS

Add this property to the section-2 object in SECTIONS_MS:
```typescript
    callouts: [
      {
        type: "insight",
        heading: "Gunakan keputusan NSG sebagai isyarat awam percuma",
        body: "Sebelum memohon, semak keputusan National School Games sekolah dalam sukan khusus anak anda. Sekolah yang mencapai NSG nasional merekrut bakat bertaraf nasional. Sekolah yang kompetitif di peringkat zon masih boleh menerima profil yang kukuh tetapi bukan bertaraf nasional — terutamanya selepas slot terkemuka dipenuhi. Padankan tahap bakat dengan tahap sekolah, bukan sekadar nama sekolah.",
      },
    ],
```

### Section 3 (id: "section-3") in SECTIONS_MS

Add this property to the section-3 object in SECTIONS_MS:
```typescript
    callouts: [
      {
        type: "insight",
        heading: "Kesunyian biasanya adalah notis penolakan",
        body: "Kebanyakan sekolah tidak menghantar pemberitahuan kepada pemohon yang tidak berjaya. Jika dua minggu berlalu tanpa sebarang hubungan selepas musim keputusan bermula, anggap itu sebagai jawapan anda — bukan kelewatan.",
      },
      {
        type: "warning",
        heading: "Sekolah dwi-aliran: sahkan trek mana sebelum menandatangani",
        body: "Sekolah yang menawarkan program IP dan O Level boleh mengemukakan tawaran trek O Level kepada pemohon DSA, walaupun anda menyatakan pilihan untuk IP. Tanya semasa rumah terbuka. Sahkan secara bertulis sebelum menerima sebarang tawaran — anda tidak boleh menukar trek selepas itu.",
      },
    ],
```

---

## PART 6 — Add callout data to SECTIONS_TA

### Section 1 (id: "section-1") in SECTIONS_TA

Add this property to the section-1 object in SECTIONS_TA:
```typescript
    callouts: [
      {
        type: "warning",
        heading: "உறுதிப்படுத்துவதற்கு முன்: இரண்டு திசைகளிலும் சிந்தியுங்கள்",
        body: "PSLE பள்ளியின் குறைந்தபட்ச நியமன குழுவை பூர்த்தி செய்யவில்லை என்றால், நிபந்தனை சலுகை திரும்பப் பெறப்படலாம் — உறுதிப்படுத்தும்போது S1 நியமன பயிற்சியிலிருந்து விலகிவிட்டதால் அது மூடப்பட்டுவிட்டது. PSLE ஊகிப்புகளை கணிசமாக மீறினால், DSA அர்ப்பணிப்பு கட்டுப்படுத்தும் — குழந்தையின் உண்மையான முடிவுகள் எட்டியிருக்கக்கூடிய உயர் தர பள்ளிக்கு மாற எந்த வழிமுறையும் இல்லை.",
      },
    ],
```

### Section 2 (id: "section-2") in SECTIONS_TA

Add this property to the section-2 object in SECTIONS_TA:
```typescript
    callouts: [
      {
        type: "insight",
        heading: "NSG முடிவுகளை இலவச பொது தகவலாக பயன்படுத்துங்கள்",
        body: "விண்ணப்பிப்பதற்கு முன், உங்கள் குழந்தையின் குறிப்பிட்ட விளையாட்டில் பள்ளியின் National School Games முடிவுகளை சரிபார்க்கவும். NSG தேசிய போட்டிகளை அடையும் பள்ளிகள் தேசிய அளவிலான திறன்களை ஆட்சேர்ப்பு செய்கின்றன. மண்டல அளவில் போட்டித்தன்மை வாய்ந்த பள்ளிகள் இன்னும் வலுவான-ஆனால்-தேசிய அளவிலல்லாத சுயவிவரங்களை ஏற்கலாம். பள்ளி பெயரை மட்டும் பார்க்காமல், திறன் நிலையை பள்ளி தரத்துடன் பொருத்துங்கள்.",
      },
    ],
```

### Section 3 (id: "section-3") in SECTIONS_TA

Add this property to the section-3 object in SECTIONS_TA:
```typescript
    callouts: [
      {
        type: "insight",
        heading: "மௌனம் பொதுவாக நிராகரிப்பு அறிவிப்பு",
        body: "பெரும்பாலான பள்ளிகள் வெற்றி பெறாத விண்ணப்பதாரர்களுக்கு அறிவிப்புகள் அனுப்புவதில்லை. முடிவுகள் சீசன் தொடங்கிய பிறகு இரண்டு வாரங்கள் கடந்தும் தொடர்பு இல்லை என்றால், அதை உங்கள் பதிலாக கருதுங்கள் — தாமதமாக அல்ல.",
      },
      {
        type: "warning",
        heading: "இரட்டை நீரோட்ட பள்ளிகள்: கையொப்பமிடுவதற்கு முன் எந்த பாதை என்று உறுதிப்படுத்துங்கள்",
        body: "IP மற்றும் O Level திட்டங்கள் இரண்டையும் வழங்கும் பள்ளிகள் DSA விண்ணப்பதாரர்களுக்கு O Level பாதை சலுகையை வழங்கலாம், நீங்கள் IP-க்கு விருப்பம் தெரிவித்தாலும். திறந்த நாளில் கேளுங்கள். எந்த சலுகையையும் ஏற்றுக்கொள்வதற்கு முன் எழுத்துப்பூர்வமாக உறுதிப்படுத்துங்கள்.",
      },
    ],
```

---

## PART 7 — Update DsaExperiencePageBody.tsx to render callouts

**File:** `components/DsaExperiencePageBody.tsx`

### 7a. Add imports

Find the existing import line:
```typescript
import {
  getDsaExperienceChecklist,
  getDsaExperienceSections,
  getDsaExperienceTimeline,
  getDsaExperienceToc,
} from "@/content/dsa-experience";
```

Replace with:
```typescript
import {
  getDsaExperienceChecklist,
  getDsaExperienceSections,
  getDsaExperienceTimeline,
  getDsaExperienceToc,
  type DsaExperienceCallout,
} from "@/content/dsa-experience";
import { AlertCircle, Lightbulb } from "lucide-react";
```

### 7b. Add callout rendering

Find this block inside the article (it appears after the paragraphs.map() and before the `section.id === "section-6"` timeline block):

```tsx
                      {section.id === "section-6" ? (
```

Insert the following block **immediately before** that line:

```tsx
                      {section.callouts?.map((callout: DsaExperienceCallout, i: number) => (
                        <div
                          key={i}
                          className={`flex gap-3 rounded-r-xl border-l-4 p-4 ${
                            callout.type === "warning"
                              ? "border-red-400 bg-red-50"
                              : "border-champagne bg-champagne-subtle"
                          }`}
                        >
                          <div className="mt-0.5 shrink-0">
                            {callout.type === "warning" ? (
                              <AlertCircle
                                className="h-4 w-4 text-red-500"
                                aria-hidden
                              />
                            ) : (
                              <Lightbulb
                                className="h-4 w-4 text-champagne-dark"
                                aria-hidden
                              />
                            )}
                          </div>
                          <div>
                            <p
                              className={`text-sm font-semibold ${
                                callout.type === "warning"
                                  ? "text-red-700"
                                  : "text-intellectual"
                              }`}
                            >
                              {callout.heading}
                            </p>
                            <p
                              className={`mt-1 text-sm leading-relaxed ${
                                callout.type === "warning"
                                  ? "text-red-900/75"
                                  : "text-slate-600"
                              }`}
                            >
                              {callout.body}
                            </p>
                          </div>
                        </div>
                      ))}

```

---

## Verification

1. `npx tsc --noEmit` — zero errors.
2. In `content/dsa-experience.tsx`: confirm "20–30" no longer appears anywhere (all four locales updated).
3. In `content/dsa-experience.tsx`: confirm `DsaExperienceCallout` type is exported.
4. Confirm SECTIONS_EN sections 1, 2, 3 each have a `callouts` array.
5. Confirm SECTIONS_ZH sections 1, 2, 3 each have a `callouts` array.
6. Confirm SECTIONS_MS sections 1, 2, 3 each have a `callouts` array.
7. Confirm SECTIONS_TA sections 1, 2, 3 each have a `callouts` array.
8. In `DsaExperiencePageBody.tsx`: confirm `AlertCircle` and `Lightbulb` are imported from lucide-react.
9. In `DsaExperiencePageBody.tsx`: confirm `DsaExperienceCallout` type is imported from `@/content/dsa-experience`.
