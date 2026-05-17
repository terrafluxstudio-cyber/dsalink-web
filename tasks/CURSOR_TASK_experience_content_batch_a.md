# CURSOR TASK — DSA Experience Content Batch A

**File to edit:** `content/dsa-experience.tsx`  
**Scope:** Content-only changes. No component or rendering changes.  
**Verification:** `npx tsc --noEmit` must pass with zero TypeScript errors.

---

## Overview of all changes

1. **Section 2 (SECTIONS_EN, SECTIONS_ZH, SECTIONS_MS, SECTIONS_TA):** Remove two identifying "softball" examples in paragraphs[4] and paragraphs[5]. Replace with generic, non-identifiable sport examples that make the same analytical point.
2. **Section 1 (all 4 locale arrays):** Insert one new paragraph after the current paragraphs[4] (the "committed" paragraph), before paragraphs[5] (the "2026 cycle" paragraph). This paragraph covers commitment risk in both directions.
3. **Section 7 (all 4 locale arrays):** Add 3 new items to the end of `orderedList`.
4. **CHECKLIST (all 4 locale arrays):** Add 3 new items to the end of each checklist array.

Execute changes in this order: SECTIONS_EN → SECTIONS_ZH → SECTIONS_MS → SECTIONS_TA → CHECKLIST_EN → CHECKLIST_ZH → CHECKLIST_MS → CHECKLIST_TA.

---

## CHANGE 1 — SECTIONS_EN, Section 2, paragraphs[4] and [5]

### 1a. paragraphs[4] — Replace softball pitcher example

Find this exact string in `SECTIONS_EN` (the `section-2` object):

```
"Real example (anonymised): A national-level softball pitcher with PSLE AL 18 received offers from Raffles Institution and Nanyang Girls' High School but was not taken by Methodist Girls' School that year—MGS had different squad needs and intake priorities, not a lower talent standard by default.",
```

Replace with:

```
"Consider a swimmer who has trained with a club since Primary 2, represented their school at NSG competitions, and achieved national age-group rankings. At the most academically selective schools, this profile earned confirmed offers — but the same swimmer was unsuccessful at one equally well-known school that had already filled its swimming quota with national record holders that year. The school had not lowered its standards; it had simply run out of available places for that talent area.",
```

### 1b. paragraphs[5] — Replace World Cup softball example

Find this exact string in `SECTIONS_EN` (the `section-2` object):

```
"Another real example (anonymised): A student who competed at World Cup level in softball with AL 12 was accepted by Nanyang Girls' and Nan Hua High School but not by Raffles Institution—reminding families that even world-class résumés do not guarantee every top school when annual slots are full.",
```

Replace with:

```
"A documented pattern across multiple years: students who have represented Singapore at regional or international level in their sport received confirmed offers from some top-tier schools in the same application cycle while being rejected by others at the same tier — not because of a talent gap, but because annual vacancies at each school are finite and fill on a first-qualified basis. A world-class résumé is a powerful credential. It is not a key that opens every door in the same year.",
```

---

## CHANGE 2 — SECTIONS_EN, Section 1: Insert new paragraph

In `SECTIONS_EN`, find the `section-1` object. Its `paragraphs` array ends with (paragraphs[4] and [5]):

```
      "Once a student accepts a DSA offer, they are committed to that school and CCA pathway and cannot participate in the S1 posting exercise for other schools.",
      "For the 2026 cycle, the DSA application window runs from 6 May to 2 June 2026. Plan research and open-house visits before the portal opens.",
```

Insert the following new paragraph **between** those two strings (after the "committed" string, before the "2026 cycle" string):

```
      "Before confirming any DSA offer, consider risk in both directions. If your child's PSLE score falls short of the school's minimum posting group, a conditional offer may be withdrawn — and the S1 Posting Exercise is no longer available, because they exited it upon confirmation. Equally, if your child outperforms their PSLE projections significantly — scoring well enough to qualify for a higher-tier school under normal posting — the DSA commitment remains binding. There is no provision for transferring to a school your child's actual results would have qualified them for. Assessing your child's realistic PSLE range in both directions — not just the middle estimate — before confirming is one of the most consequential decisions in the DSA process.",
```

After the insert, Section 1 paragraphs should have 7 items total.

---

## CHANGE 3 — SECTIONS_EN, Section 7: Add 3 new orderedList items

In `SECTIONS_EN`, find the `section-7` object. Its `orderedList` currently has 5 items ending with:

```
      "Skipping open houses. Open houses are where you learn whether a school is actively recruiting for your specific talent area that year—attend before you finalise your three choices.",
```

Add 3 new items to the end of that `orderedList` array:

```
      "Assuming the commitment risk only affects children who underperform at PSLE. A child who dramatically outperforms their projection is equally bound — even if their actual PSLE score would have qualified them for a higher-tier school through normal posting. Before confirming, think through both ends of your child's realistic PSLE range, not just the most likely outcome.",
      "Applying to NYGH for Mathematics, Science, or Artistic Gymnastics DSA in the 2026 intake. NYGH discontinued all three programmes for 2026 without extended advance notice. Families who had invested years building portfolios for these specific pathways need to redirect their planning immediately.",
      "Not confirming whether the DSA offer covers the IP or O Level track at dual-stream schools. Schools can counter-offer the O Level track to applicants who expressed a preference for IP, based on their academic results. Confirm the exact track before accepting — you cannot change it afterwards.",
```

---

## CHANGE 4 — CHECKLIST_EN: Add 3 new items

Find `const CHECKLIST_EN`. It currently ends with:

```
  "You have noted the 2 June 2026 application deadline on your family calendar.",
```

Add these 3 new items to the end of the array:

```
  "I have checked this school's NSG competition results in my child's specific sport or talent area to understand what calibre of student they typically recruit.",
  "If this is a dual-stream school, I have confirmed in writing which academic track (IP or O Level) the DSA offer covers.",
  "I have thought through both upside and downside PSLE scenarios — if my child scores significantly better than expected, I accept that this DSA commitment remains binding regardless.",
```

---

## CHANGE 5 — SECTIONS_ZH, Section 2, paragraphs[4] and [5]

### 5a. paragraphs[4] — Replace softball pitcher example (ZH)

Find this exact string in `SECTIONS_ZH` (the `section-2` object):

```
      "真实案例（已匿名）：一位全国级垒球投手，PSLE AL 18，获莱佛士书院和南洋女中录取，但未被卫理女中录取——后者当年有不同的队伍需求和招募重点，而非因为才能门槛更低。",
```

Replace with:

```
      "以游泳为例：一名从小二开始在俱乐部系统训练、代表学校参加 NSG 赛事并取得全国年龄组前列排名的学生，在选拔性最高的几所学校中收到了确认录取通知——但在另一所同等知名的学校却未能成功，因为该校当年游泳项目的名额，已全部被持有全国纪录的选手填满。不是门槛降低了，而是名额用完了。",
```

### 5b. paragraphs[5] — Replace World Cup softball example (ZH)

Find this exact string in `SECTIONS_ZH` (the `section-2` object):

```
      "另一个真实案例（已匿名）：一位代表新加坡出战世界杯的垒球学生，AL 12，被南洋女中和南华中学录取，但未获莱佛士书院录取——提醒家长，即使是世界级履历，也不能保证每所顶校——该年名额可能已满。",
```

Replace with:

```
      "多年的规律显示：曾代表新加坡参加区域或国际赛事的运动员，在同一申请周期内，可能同时收到某些顶校的确认录取，又被其他同等级别的学校拒绝——原因不是才能差异，而是每所学校每年的名额有限，先到先得。世界级履历是强有力的凭证，但不是同一年能打开所有顶校大门的通用钥匙。",
```

---

## CHANGE 6 — SECTIONS_ZH, Section 1: Insert new paragraph

In `SECTIONS_ZH`, find the `section-1` object. Insert the following new paragraph **between** paragraphs[4] ("一旦学生接受...") and paragraphs[5] ("2026 年度 DSA 申请窗口..."):

```
      "在 confirm 任何 DSA 录取通知书之前，请考虑两个方向的风险。如果孩子 PSLE 分数未达到该校最低录取分配组别，条件性录取通知可能被撤销——而 S1 分配通道，他们在 confirm 的那一刻就已退出，无法再回头。同样，如果孩子 PSLE 发挥显著超出预期——考出了按正常分配可以进入更好学校的成绩——DSA 承诺依然具有约束力。没有任何机制允许他们转入凭 PSLE 实际成绩本可进入的更高层级学校。在 confirm 之前，对孩子 PSLE 成绩的上下两个方向都做出清醒判断——而不只是中位预测——是整个 DSA 过程中最关键的决定之一。",
```

---

## CHANGE 7 — SECTIONS_ZH, Section 7: Add 3 new orderedList items

In `SECTIONS_ZH`, find the `section-7` object. Its `orderedList` currently ends with:

```
      "跳过开放日。开放日是了解该校是否在当年积极招募你孩子特定才能领域的唯一机会——在确认三个选择前请务必参加。",
```

Add 3 new items to the end of that `orderedList` array:

```
      "认为承诺风险只会影响 PSLE 成绩不达标的孩子。成绩显著超出预期的孩子同样受 confirm 承诺约束——即使他们的实际 PSLE 成绩原本可以通过正常分配进入更高层级的学校。confirm 之前，请对孩子 PSLE 成绩的上下两个方向都做出判断，而不只看最可能的中位结果。",
      "2026 年向南洋女中报名数学、理科或竞技体操 DSA。NYGH 已取消这三个 2026 年度的 DSA 项目，且未提前足够预警。为此专门投入多年准备的家庭，需要立即重新规划志愿学校。",
      "没有确认 DSA 录取通知书覆盖的是 IP 还是 O Level 轨道——尤其是在双轨制学校。学校可以根据申请者的学业成绩，把 IP 志愿改为 O Level 录取通知，即使申请时已注明偏好 IP。签收前请务必确认对应轨道，事后无法更改。",
```

---

## CHANGE 8 — CHECKLIST_ZH: Add 3 new items

Find `const CHECKLIST_ZH`. It currently ends with:

```
  "你已将 2026 年 6 月 2 日申请截止日期记入家庭日历。",
```

Add these 3 new items to the end of the array:

```
  "我已查阅目标学校在孩子才能项目上的 NSG 赛区历史成绩，了解该校通常招募什么层级的学生。",
  "如果是双轨制学校，我已书面确认 DSA 录取通知书对应的是 IP 还是 O Level 轨道。",
  "我已对孩子 PSLE 成绩的上下两个方向都做过判断——即使孩子发挥远超预期，我也接受这份 DSA 承诺依然具有约束力。",
```

---

## CHANGE 9 — SECTIONS_MS, Section 2, paragraphs[4] and [5]

### 9a. paragraphs[4] — Replace softball pitcher example (MS)

Find this exact string in `SECTIONS_MS` (the `section-2` object):

```
      "Contoh sebenar (tanpa nama): Pelambung sofbol peringkat nasional dengan PSLE AL 18 menerima tawaran dari Raffles Institution dan Nanyang Girls' High School tetapi tidak dipilih oleh Methodist Girls' School pada tahun itu—MGS mempunyai keperluan pasukan dan keutamaan pengambilan yang berbeza, bukan piawaian bakat yang lebih rendah secara lalai.",
```

Replace with:

```
      "Ambil contoh seorang perenang yang berlatih di kelab sejak Darjah 2, mewakili sekolah dalam pertandingan NSG, dan mencapai kedudukan kumpulan umur peringkat nasional. Di sekolah yang paling selektif dari segi akademik, profil ini membuahkan tawaran yang disahkan — tetapi perenang yang sama tidak berjaya di sekolah terkenal lain yang telah mengisi kuota perenangannya dengan pemegang rekod nasional pada tahun yang sama. Piawaian sekolah tidak diturunkan; tempat dalam bidang bakat tersebut hanya telah habis.",
```

### 9b. paragraphs[5] — Replace World Cup softball example (MS)

Find this exact string in `SECTIONS_MS` (the `section-2` object):

```
      "Contoh sebenar lain (tanpa nama): Pelajar yang bersaing di peringkat Piala Dunia dalam sofbol dengan AL 12 diterima oleh Nanyang Girls' dan Nan Hua High School tetapi tidak oleh Raffles Institution—mengingatkan keluarga bahawa walaupun resume bertaraf dunia tidak menjamin setiap sekolah teratas apabila slot tahunan penuh.",
```

Replace with:

```
      "Corak yang didokumentasikan merentas pelbagai tahun: pelajar yang mewakili Singapura di peringkat serantau atau antarabangsa dalam sukan mereka menerima tawaran yang disahkan daripada beberapa sekolah terkemuka dalam kitaran permohonan yang sama sambil ditolak oleh sekolah lain pada tahap yang sama — bukan kerana jurang bakat, tetapi kerana kekosongan tahunan di setiap sekolah adalah terhad. Resume bertaraf dunia adalah kelayakan yang kukuh — ia bukan kunci yang membuka setiap pintu pada tahun yang sama.",
```

---

## CHANGE 10 — SECTIONS_MS, Section 1: Insert new paragraph

In `SECTIONS_MS`, find the `section-1` object. Insert the following new paragraph **between** paragraphs[4] ("Setelah pelajar menerima...") and paragraphs[5] ("Untuk kitaran 2026..."):

```
      "Sebelum mengesahkan sebarang tawaran DSA, pertimbangkan risiko dalam kedua-dua arah. Jika skor PSLE anak anda lebih rendah daripada kumpulan penempatan minimum sekolah, tawaran bersyarat boleh ditarik balik — dan Latihan Penempatan S1 tidak lagi tersedia kerana mereka telah keluar daripadanya semasa pengesahan. Sama juga, jika anak anda jauh mengatasi unjuran PSLE mereka — mendapat skor yang cukup untuk memenuhi syarat sekolah tahap lebih tinggi melalui penempatan biasa — komitmen DSA kekal mengikat. Tiada peruntukan untuk berpindah ke sekolah yang keputusan PSLE sebenar anak anda akan melayakkan mereka. Menilai julat PSLE realistik anak anda dalam kedua-dua arah — bukan hanya anggaran tengah — sebelum mengesahkan adalah salah satu keputusan paling penting dalam proses DSA.",
```

---

## CHANGE 11 — SECTIONS_MS, Section 7: Add 3 new orderedList items

In `SECTIONS_MS`, find the `section-7` object. Its `orderedList` currently ends with:

```
      "Melangkau rumah terbuka. Rumah terbuka adalah tempat anda mengetahui sama ada sekolah sedang merekrut secara aktif untuk bidang bakat khusus anda pada tahun itu—hadiri sebelum anda muktamadkan tiga pilihan anda.",
```

Add 3 new items to the end of that `orderedList` array:

```
      "Menganggap risiko komitmen hanya mempengaruhi kanak-kanak yang tidak mencapai prestasi yang dijangkakan di PSLE. Kanak-kanak yang jauh mengatasi unjuran mereka sama-sama terikat — walaupun skor PSLE sebenar mereka akan layak mereka untuk sekolah tahap lebih tinggi melalui penempatan biasa. Sebelum mengesahkan, pertimbangkan kedua-dua hujung julat PSLE realistik anak anda.",
      "Memohon ke NYGH untuk DSA Matematik, Sains, atau Gimnastik Artistik untuk kemasukan 2026. NYGH telah menghentikan ketiga-tiga program untuk 2026 tanpa notis awal yang mencukupi. Keluarga yang telah melabur bertahun-tahun membina portfolio untuk laluan khusus ini perlu merancang semula dengan segera.",
      "Tidak mengesahkan sama ada tawaran DSA merangkumi trek IP atau O Level di sekolah dwi-aliran. Sekolah boleh mengemukakan tawaran trek O Level kepada pemohon yang menyatakan pilihan untuk IP, berdasarkan keputusan akademik mereka. Sahkan trek yang tepat sebelum menerima — anda tidak boleh mengubahnya selepas itu.",
```

---

## CHANGE 12 — CHECKLIST_MS: Add 3 new items

Find `const CHECKLIST_MS`. It currently ends with:

```
  "Anda telah mencatat tarikh akhir permohonan 2 Jun 2026 pada kalendar keluarga anda.",
```

Add these 3 new items to the end of the array:

```
  "Saya telah menyemak keputusan pertandingan NSG sekolah ini dalam sukan atau bidang bakat khusus anak saya untuk memahami tahap pelajar yang biasanya mereka rekrut.",
  "Jika ini adalah sekolah dwi-aliran, saya telah mengesahkan secara bertulis trek akademik (IP atau O Level) yang tawaran DSA merangkumi.",
  "Saya telah memikirkan senario PSLE positif dan negatif — jika anak saya mendapat skor yang jauh lebih baik daripada yang dijangka, saya menerima bahawa komitmen DSA ini kekal mengikat walau apa pun.",
```

---

## CHANGE 13 — SECTIONS_TA, Section 2, paragraphs[4] and [5]

### 13a. paragraphs[4] — Replace softball pitcher example (TA)

Find this exact string in `SECTIONS_TA` (the `section-2` object):

```
      "உண்மையான உதாரணம் (பெயரில்லாமல்): PSLE AL 18 உடன் தேசிய அளவிலான சாஃப்ட்பால் பிட்ச்சர் ஒருவர் Raffles Institution மற்றும் Nanyang Girls' High School-லிருந்து சலுகைகள் பெற்றார், ஆனால் Methodist Girls' School அந்த ஆண்டு ஏற்கவில்லை.",
```

Replace with:

```
      "ஒரு நீச்சல் வீரரை உதாரணமாக எடுத்துக்கொள்ளுங்கள், அவர் 2ஆம் வகுப்பிலிருந்து ஒரு கிளப்பில் பயிற்சி பெற்று, NSG போட்டிகளில் பள்ளியை பிரதிநிதித்துவப்படுத்தி, தேசிய வயது குழு தரவரிசை பெற்றார். மிகவும் தேர்ந்தெடுக்கப்பட்ட பள்ளிகளில், இந்த சுயவிவரம் உறுதிப்படுத்தப்பட்ட சலுகைகளை பெற்றது — ஆனால் அதே நீச்சல் வீரர் அந்த ஆண்டு தேசிய பதிவுகள் வைத்திருப்பவர்களால் நீச்சல் இடங்களை நிரப்பிய மற்றொரு புகழ்பெற்ற பள்ளியில் வெற்றி பெறவில்லை. பள்ளியின் தரங்கள் குறையவில்லை; அந்த திறன் பகுதியில் கிடைக்கக்கூடிய இடங்கள் முடிந்துவிட்டன.",
```

### 13b. paragraphs[5] — Replace World Cup softball example (TA)

Find this exact string in `SECTIONS_TA` (the `section-2` object):

```
      "மற்றொரு உண்மையான உதாரணம் (பெயரில்லாமல்): சாஃப்ட்பால்-ல் உலக கோப்பை அளவில் போட்டியிட்ட AL 12 உடன் ஒரு மாணவர் Nanyang Girls' மற்றும் Nan Hua High School-ல் ஏற்றுக்கொள்ளப்பட்டார், ஆனால் Raffles Institution-ல் இல்லை.",
```

Replace with:

```
      "பல ஆண்டுகளாக ஆவணப்படுத்தப்பட்ட ஒரு வடிவம்: தங்கள் விளையாட்டில் சிங்கப்பூரை பிராந்திய அல்லது சர்வதேச அளவில் பிரதிநிதித்துவப்படுத்தியவர்கள் ஒரே விண்ணப்ப சுழற்சியில் சில சிறந்த பள்ளிகளில் உறுதிப்படுத்தப்பட்ட சலுகைகளைப் பெற்றும், அதே தரத்திலுள்ள மற்ற பள்ளிகளால் நிராகரிக்கப்பட்டும் உள்ளனர் — திறன் வேறுபாடு காரணமாக அல்ல, ஒவ்வொரு பள்ளியிலும் ஆண்டு வாரியான காலியிடங்கள் குறைவாக இருப்பதால். உலக தரம் வாய்ந்த சுயவிவரம் ஒரு வலுவான தகுதி — ஒரே ஆண்டில் ஒவ்வொரு கதவையும் திறக்கும் சாவியல்ல.",
```

---

## CHANGE 14 — SECTIONS_TA, Section 1: Insert new paragraph

In `SECTIONS_TA`, find the `section-1` object. Insert the following new paragraph **between** paragraphs[4] ("ஒரு மாணவர் DSA சலுகையை ஏற்றுக்கொண்டதும்...") and paragraphs[5] ("2026 சுழற்சிக்கு..."):

```
      "எந்த DSA சலுகையையும் உறுதிப்படுத்துவதற்கு முன், இரண்டு திசைகளிலும் இடர்களை கவனியுங்கள். உங்கள் குழந்தையின் PSLE மதிப்பெண் பள்ளியின் குறைந்தபட்ச நியமன குழுவை பூர்த்தி செய்யவில்லை என்றால், நிபந்தனை சலுகை திரும்பப் பெறப்படலாம் — உறுதிப்படுத்தும் நேரத்தில் அவர்கள் S1 நியமன பயிற்சியிலிருந்து விலகிவிட்டதால். அதேபோல், உங்கள் குழந்தை PSLE ஊகிப்புகளை கணிசமாக மீறினால் — சாதாரண நியமனம் மூலம் உயர் தர பள்ளிக்கு தகுதி பெறும் மதிப்பெண் பெற்றால் — DSA அர்ப்பணிப்பு கட்டுப்படுத்தும் தன்மை கொண்டிருக்கும். PSLE முடிவுகள் தகுதி பெற்ற பள்ளிக்கு மாறுவதற்கு எந்த ஏற்பாடும் இல்லை. உறுதிப்படுத்துவதற்கு முன் இரண்டு திசைகளிலும் உங்கள் குழந்தையின் யதார்த்தமான PSLE வரம்பை மதிப்பீடு செய்வது DSA செயல்பாட்டின் மிக முக்கியமான முடிவுகளில் ஒன்றாகும்.",
```

---

## CHANGE 15 — SECTIONS_TA, Section 7: Add 3 new orderedList items

In `SECTIONS_TA`, find the `section-7` object. Its `orderedList` currently ends with:

```
      "திறந்த நாள்களை தவிர்த்தல். திறந்த நாள்கள் பள்ளி அந்த ஆண்டு உங்கள் குறிப்பிட்ட திறன் பகுதிக்கு செயலில் ஆட்சேர்ப்பு செய்கிறதா என்று நீங்கள் அறியும் இடம்.",
```

Add 3 new items to the end of that `orderedList` array:

```
      "PSLE-ல் குறைந்த செயல்திறன் கொண்ட குழந்தைகளை மட்டுமே அர்ப்பணிப்பு இடர் பாதிக்கும் என்று கருதுவது. ஊகிப்பை கடந்து சாதிக்கும் குழந்தை சம அளவில் கட்டுப்படுகிறார் — அவர்களின் உண்மையான PSLE மதிப்பெண் சாதாரண நியமனம் மூலம் உயர் தர பள்ளிக்கு தகுதி பெற்றிருந்தாலும். உறுதிப்படுத்துவதற்கு முன், உங்கள் குழந்தையின் PSLE வரம்பின் இரண்டு முனைகளையும் கருத்தில் கொள்ளுங்கள்.",
      "2026 சேர்க்கைக்கான NYGH கணிதம், அறிவியல் அல்லது கலை ஜிம்னாஸ்டிக்ஸ் DSA-வில் விண்ணப்பிப்பது. NYGH போதுமான முன் அறிவிப்பு இல்லாமல் 2026-க்கான மூன்று திட்டங்களையும் நிறுத்தியது. இந்த குறிப்பிட்ட பாதைகளுக்காக ஆண்டுகளாக முதலீடு செய்த குடும்பங்கள் உடனடியாக திட்டமிட வேண்டும்.",
      "இரட்டை நீரோட்ட பள்ளிகளில் DSA சலுகை IP அல்லது O Level பாதையை உள்ளடக்குகிறதா என்று உறுதிப்படுத்தாமல் இருப்பது. கல்வி முடிவுகளின் அடிப்படையில் IP-ஐ விரும்பினாலும் பள்ளிகள் O Level பாதை சலுகையை வழங்கலாம். ஏற்றுக்கொள்வதற்கு முன் சரியான பாதையை உறுதிப்படுத்துங்கள் — பின்னர் மாற்ற முடியாது.",
```

---

## CHANGE 16 — CHECKLIST_TA: Add 3 new items

Find `const CHECKLIST_TA`. It currently ends with:

```
  "2026 ஜூன் 2 விண்ணப்ப காலக்கெடுவை குடும்ப நாட்காட்டியில் குறித்துள்ளீர்கள்.",
```

Add these 3 new items to the end of the array:

```
  "இந்த பள்ளி பொதுவாக எந்த திறன் நிலை கொண்ட மாணவர்களை ஆட்சேர்ப்பு செய்கிறது என்பதை புரிந்துகொள்ள என் குழந்தையின் குறிப்பிட்ட விளையாட்டு அல்லது திறன் பகுதியில் இந்த பள்ளியின் NSG போட்டி முடிவுகளை சரிபார்த்தேன்.",
  "இது இரட்டை நீரோட்ட பள்ளியாக இருந்தால், DSA சலுகை எந்த கல்வி பாதையை (IP அல்லது O Level) உள்ளடக்குகிறது என்பதை எழுத்துப்பூர்வமாக உறுதிப்படுத்தியுள்ளேன்.",
  "நான் PSLE-ன் சாதகமான மற்றும் எதிர்மறையான சூழ்நிலைகளை சிந்தித்திருக்கிறேன் — என் குழந்தை எதிர்பார்த்ததை விட கணிசமாக அதிக மதிப்பெண் பெற்றால், இந்த DSA அர்ப்பணிப்பு கட்டுப்படுத்தும் தன்மை கொண்டிருக்கும் என்பதை ஏற்கிறேன்.",
```

---

## Verification

After all changes:

1. Run `npx tsc --noEmit` — must exit with zero errors.
2. Confirm Section 2 in all 4 locale arrays no longer contains the words "softball" or "垒球" or "sofbol" or "சாஃப்ட்பால்".
3. Confirm Section 1 in all 4 locale arrays has 7 paragraphs (was 6).
4. Confirm Section 7 in all 4 locale arrays has 8 orderedList items (was 5).
5. Confirm each CHECKLIST array has 10 items (was 7).
