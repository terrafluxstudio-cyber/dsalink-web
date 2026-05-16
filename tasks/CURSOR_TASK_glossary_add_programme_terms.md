# CURSOR TASK: Schools 页面 — 为所有 otherProgrammes 补充 GlossaryTooltip 定义

## 任务描述

`SchoolsDirectory.tsx` 通过 `isGlossaryTerm(p)` 判断是否显示悬停提示。  
但 `otherProgrammes` 数据里存的是**全名**（如 `"Music Elective Programme"`），而 `GLOSSARY` 的 key 是**缩写**（如 `"MEP"`），导致 `isGlossaryTerm` 返回 false，悬停提示全部不显示。

本任务在 `src/data/glossary.ts` 中补充 25 个全名 key，并在 `locales/en.json` 中补充对应英文定义。

**可与 `CURSOR_TASK_glossary_translations_zh_ms_ta.md` 并行执行（文件无重叠）。**

## 涉及文件

- `src/data/glossary.ts` — 新增 GLOSSARY 条目 + GLOSSARY_I18N_KEY 映射
- `locales/en.json` — 新增英文定义

---

## 第一步：在 `src/data/glossary.ts` 的 `GLOSSARY` 对象末尾、最后一个条目之后添加

在 `"Elective Programme in Malay Language (EMAS)": "..."` 之后，添加以下内容：

```ts
  "School-based Gifted Education":
    "School-level enrichment and acceleration for high-ability learners, aligned to MOE gifted education policy. Schools offer advanced coursework, independent study, and specialist mentorship within the regular school setting.",
  "Music Elective Programme":
    "An MOE programme for secondary students with strong musical aptitude to study music performance, theory, and history at a deeper level alongside the standard curriculum. Offered at selected schools.",
  "Art Elective Programme":
    "An MOE programme for secondary students with strong visual arts aptitude to study art theory, history, and studio practice at a deeper level alongside the standard curriculum. Offered at selected schools.",
  "Bicultural Studies Programme":
    "Typically offered in SAP schools, a programme linking Chinese language and culture with contemporary global issues, developing bilingual and bicultural competencies through specialist coursework.",
  "Integrated Programme":
    "A six-year through-train secondary programme leading to GCE A-Level or equivalent without sitting GCE O-Level. Students progress from Secondary 1 to pre-university level within the same school or school cluster.",
  "Regional Studies Programme":
    "An MOE humanities programme offered at selected schools that develops specialist knowledge of the history, geography, and cultures of Southeast Asia and East Asia. Includes study trips and expert mentorship.",
  "Chinese Language Special Programme":
    "Offered in selected secondary schools (typically SAP schools), this programme deepens Chinese language proficiency through classical texts, literature, and cultural study beyond the standard curriculum.",
  "Malay Language Special Programme":
    "A programme at selected secondary schools to deepen Malay Language proficiency through enhanced literary, cultural, and linguistic study for students with strong aptitude.",
  "Malay Language (Special Programme)":
    "A programme at selected secondary schools to deepen Malay Language proficiency through enhanced literary, cultural, and linguistic study for students with strong aptitude.",
  "Language Elective Programme (Chinese)":
    "The MOE Language Elective Programme track for Chinese Language — an elective for students with strong aptitude to study Chinese at a higher depth, including classical and contemporary literature.",
  "Language Elective Programme (Tamil)":
    "The MOE Language Elective Programme track for Tamil Language — an elective for students with strong aptitude to study Tamil at a higher depth.",
  "Humanities Scholarship and Programme":
    "A scholarship-linked programme for students with exceptional aptitude in humanities (history, geography, literature), offering specialist teaching, mentorship, and enrichment. Offered at selected schools including RGS and NYGH.",
  "Engineering and Tech Programme and Scholarship":
    "A scholarship and programme for students with strong interest in engineering and technology, combining academic study with design challenges, industry exposure, and practitioner mentorship.",
  "STEAM (Science, Technology, Engineering, Aesthetics and Mathematics)":
    "A cross-disciplinary programme integrating arts and design thinking with STEM subjects, developing creative problem-solving and innovation mindset alongside technical competencies.",
  "Enhanced Art Programme":
    "A school-based visual arts programme offering deeper study beyond the standard curriculum for students with strong artistic aptitude, including advanced studio work, art history, and exhibition participation.",
  "Enhanced Art Programme (Elective)":
    "An elective version of the school's enhanced visual arts offering, allowing students to opt in for deeper study based on interest and aptitude.",
  "Enhanced Music Programme":
    "A school-based music programme offering deeper engagement in performance, composition, and music theory for students with strong musical aptitude, beyond the standard curriculum.",
  "SUNRISE programme":
    "A structured alternative education programme offering applied learning and vocational skills development for students who benefit from non-traditional academic pathways and hands-on learning approaches.",
  "Internet of Things Applications":
    "An applied learning module covering IoT concepts, sensor networks, and connected device programming. Students design and build physical computing projects, developing skills in electronics and data-driven systems.",
  "Mobile Web Applications":
    "An applied learning module focused on designing and developing mobile and web applications, combining programming with UI/UX principles to create functional digital products.",
  "Mechanical Design & Automation":
    "An applied learning module covering mechanical engineering principles, computer-aided design (CAD), and automation systems, developing practical engineering and problem-solving skills.",
  "Culinary & Restaurant Operations":
    "A vocational or applied subject module covering professional food preparation, kitchen management, and restaurant service operations, providing industry-relevant skills for the hospitality sector.",
  "Retail & E-commerce":
    "A vocational or applied subject module covering retail management, digital commerce platforms, customer service, and business operations for the retail industry.",
  "Special Assistance Plan (SAP)":
    "The full designation of SAP — schools that offer both English Language and Chinese Language at a higher level to develop bilingual and bicultural students.",
  "Vocational subjects: air-conditioning maintenance, electrical systems, food preparation, hospitality services":
    "Vocational subject modules at alternative education schools (e.g. NorthLight, Spectra, Assumption Pathway), covering trade skills in building services, electrical work, food preparation, and hospitality for students on non-standard secondary pathways.",
```

---

## 第二步：在 `GLOSSARY_I18N_KEY` 对象末尾，`"Elective Programme in Malay Language (EMAS)": "..."` 之后添加

```ts
  "School-based Gifted Education": "glossaryDefSchoolBasedGiftedEducation",
  "Music Elective Programme": "glossaryDefMusicElectiveProgramme",
  "Art Elective Programme": "glossaryDefArtElectiveProgramme",
  "Bicultural Studies Programme": "glossaryDefBiculturalStudiesProgramme",
  "Integrated Programme": "glossaryDefIntegratedProgramme",
  "Regional Studies Programme": "glossaryDefRegionalStudiesProgramme",
  "Chinese Language Special Programme": "glossaryDefChineseLanguageSpecialProgramme",
  "Malay Language Special Programme": "glossaryDefMalayLanguageSpecialProgramme",
  "Malay Language (Special Programme)": "glossaryDefMalayLanguageSpecialProgrammeAlt",
  "Language Elective Programme (Chinese)": "glossaryDefLanguageElectiveProgrammeChinese",
  "Language Elective Programme (Tamil)": "glossaryDefLanguageElectiveProgrammeTamil",
  "Humanities Scholarship and Programme": "glossaryDefHumanitiesScholarshipProgramme",
  "Engineering and Tech Programme and Scholarship": "glossaryDefEngineeringTechProgramme",
  "STEAM (Science, Technology, Engineering, Aesthetics and Mathematics)": "glossaryDefSteam",
  "Enhanced Art Programme": "glossaryDefEnhancedArtProgramme",
  "Enhanced Art Programme (Elective)": "glossaryDefEnhancedArtProgrammeElective",
  "Enhanced Music Programme": "glossaryDefEnhancedMusicProgramme",
  "SUNRISE programme": "glossaryDefSunriseProgramme",
  "Internet of Things Applications": "glossaryDefIotApplications",
  "Mobile Web Applications": "glossaryDefMobileWebApplications",
  "Mechanical Design & Automation": "glossaryDefMechanicalDesignAutomation",
  "Culinary & Restaurant Operations": "glossaryDefCulinaryRestaurantOperations",
  "Retail & E-commerce": "glossaryDefRetailEcommerce",
  "Special Assistance Plan (SAP)": "glossaryDefSpecialAssistancePlanSap",
  "Vocational subjects: air-conditioning maintenance, electrical systems, food preparation, hospitality services": "glossaryDefVocationalSubjects",
```

---

## 第三步：在 `locales/en.json` 中最后一个 `glossaryDef` 条目之后添加

```json
  "glossaryDefSchoolBasedGiftedEducation": "School-level enrichment and acceleration for high-ability learners, aligned to MOE gifted education policy. Schools offer advanced coursework, independent study, and specialist mentorship.",
  "glossaryDefMusicElectiveProgramme": "An MOE programme for secondary students with strong musical aptitude to study music performance, theory, and history at a deeper level. Offered at selected schools.",
  "glossaryDefArtElectiveProgramme": "An MOE programme for secondary students with strong visual arts aptitude to study art theory, history, and studio practice at a deeper level. Offered at selected schools.",
  "glossaryDefBiculturalStudiesProgramme": "Typically offered in SAP schools, a programme linking Chinese language and culture with contemporary global issues, developing bilingual and bicultural competencies.",
  "glossaryDefIntegratedProgramme": "A six-year through-train secondary programme leading to GCE A-Level or equivalent without sitting GCE O-Level. Students progress from Secondary 1 to pre-university level within the same school or cluster.",
  "glossaryDefRegionalStudiesProgramme": "An MOE humanities programme at selected schools (e.g. Raffles Institution, HCI) developing specialist knowledge of the history, geography, and cultures of Southeast Asia and East Asia, with study trips and expert mentorship.",
  "glossaryDefChineseLanguageSpecialProgramme": "Offered in selected secondary schools (typically SAP schools), this programme deepens Chinese language proficiency through classical texts, literature, and cultural study beyond the standard curriculum.",
  "glossaryDefMalayLanguageSpecialProgramme": "A programme at selected secondary schools to deepen Malay Language proficiency through enhanced literary, cultural, and linguistic study for students with strong aptitude.",
  "glossaryDefMalayLanguageSpecialProgrammeAlt": "A programme at selected secondary schools to deepen Malay Language proficiency through enhanced literary, cultural, and linguistic study for students with strong aptitude.",
  "glossaryDefLanguageElectiveProgrammeChinese": "The MOE Language Elective Programme track for Chinese — an elective for students with strong aptitude to study Chinese at higher depth, including classical and contemporary literature.",
  "glossaryDefLanguageElectiveProgrammeTamil": "The MOE Language Elective Programme track for Tamil — an elective for students with strong aptitude to study Tamil at a higher depth.",
  "glossaryDefHumanitiesScholarshipProgramme": "A scholarship-linked programme for students with exceptional aptitude in humanities (history, geography, literature), offering specialist teaching, mentorship, and enrichment. Offered at selected schools including RGS and NYGH.",
  "glossaryDefEngineeringTechProgramme": "A scholarship and programme for students with strong interest in engineering and technology, combining academic study with design challenges, industry exposure, and practitioner mentorship.",
  "glossaryDefSteam": "A cross-disciplinary programme integrating arts and design thinking with STEM subjects, developing creative problem-solving and innovation mindset alongside technical competencies.",
  "glossaryDefEnhancedArtProgramme": "A school-based visual arts programme offering deeper study for students with strong artistic aptitude, including advanced studio work, art history, and exhibition participation.",
  "glossaryDefEnhancedArtProgrammeElective": "An elective version of the school's enhanced visual arts offering, allowing students to opt in for deeper study based on interest and aptitude.",
  "glossaryDefEnhancedMusicProgramme": "A school-based music programme offering deeper engagement in performance, composition, and theory for students with strong musical aptitude, beyond the standard curriculum.",
  "glossaryDefSunriseProgramme": "A structured alternative education programme offering applied learning and vocational skills development for students who benefit from non-traditional academic pathways and hands-on learning.",
  "glossaryDefIotApplications": "An applied learning module covering IoT concepts, sensor networks, and connected device programming. Students design and build physical computing projects.",
  "glossaryDefMobileWebApplications": "An applied learning module focused on designing and developing mobile and web applications, combining programming with UI/UX principles.",
  "glossaryDefMechanicalDesignAutomation": "An applied learning module covering mechanical engineering principles, computer-aided design (CAD), and automation systems.",
  "glossaryDefCulinaryRestaurantOperations": "A vocational or applied subject module covering professional food preparation, kitchen management, and restaurant service operations for the hospitality sector.",
  "glossaryDefRetailEcommerce": "A vocational or applied subject module covering retail management, digital commerce platforms, customer service, and business operations.",
  "glossaryDefSpecialAssistancePlanSap": "The full designation of SAP — schools that offer both English Language and Chinese Language at a higher level to develop bilingual and bicultural students.",
  "glossaryDefVocationalSubjects": "Vocational subject modules at alternative education schools (e.g. NorthLight, Spectra, Assumption Pathway), covering trade skills in building services, electrical work, food preparation, and hospitality."
```

---

## 注意事项

- 如果 `npx tsc --noEmit` 报 `Copy` 类型错误，说明 `lib/i18n.ts` 的 `Copy` 类型中缺少这些新 key。将报错的 key 名称以 `string` 类型加入 `Copy` 的类型定义中（与现有 `glossaryDefAlp: string` 等字段格式相同）。
- **不需要修改 `SchoolsDirectory.tsx`**：现有 `isGlossaryTerm(p)` 逻辑会自动识别新增的全名 key。

---

## 验证步骤

- [ ] `npx tsc --noEmit` 无报错
- [ ] 本地 `npm run dev`，访问 `/schools`
- [ ] 鼠标悬停在 "Music Elective Programme"、"Regional Studies Programme"、"School-based Gifted Education" 上，出现工具提示
- [ ] 鼠标悬停在 "STEAM (Science, Technology, Engineering, Aesthetics and Mathematics)" 上，出现工具提示
- [ ] 鼠标悬停在 "Culinary & Restaurant Operations" 上，出现工具提示
