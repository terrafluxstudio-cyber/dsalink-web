# Cursor Task: DSA Experience 案例卡片 + CCA问题删除（content/dsa-experience.tsx）

## 涉及文件（仅此一个）
- `content/dsa-experience.tsx`

与 CURSOR_TASK_case_studies_renderer.md 不共享文件，可并行执行。
但 renderer 任务依赖本任务定义的类型，建议本任务先完成 build 确认无误后再交 renderer。

---

## 改动 1：新增类型定义

在文件顶部现有类型区（`DsaExperienceQuestionSet` 之后，`DsaExperienceSection` 之前）插入：

```ts
export type DsaExperienceCaseStudy = {
  talentArea: string;
  icon: "fencing" | "dance" | "robotics" | "music" | "leadership" | "risk";
  scenario: string;
  outcome: string;
  lesson?: string;
};
```

在 `DsaExperienceSection` type 中，`stats?: DsaExperienceStat[];` 之后追加：

```ts
caseStudies?: DsaExperienceCaseStudy[];
```

---

## 改动 2：新增 case-studies section（EN，插入 Section 3 和 Section 4 之间）

在 `SECTIONS_EN` 数组中，找到 `{ id: "section-3", ...}` 对象结束的 `},` 之后，`{ id: "section-4", ...}` 之前，插入以下新 section：

```ts
  {
    id: "case-studies",
    title: "Six Families. Six Different DSA Pathways.",
    paragraphs: [
      "DSA works differently depending on the talent, the school, and the year. These six composite stories — drawn from patterns reported by families across forums, parent networks, and school communities — illustrate how different the experience can be. Names, scores, and identifying details have been changed.",
    ],
    caseStudies: [
      {
        talentArea: "Fencing (Niche Sport)",
        icon: "fencing",
        scenario:
          "A student had been fencing competitively since Primary 4, training three times a week with a national club. By P6, she held a top-30 national ranking in her age group. Her PSLE projection sat around AL 16 — good, but not top-tier. DSA gave her access to an IP school whose historical COP was around AL 12. She applied, completed two trial rounds, and received a Confirmed Offer four months before PSLE results were released.",
        outcome: "Confirmed offer — ~4 AL better than PSLE posting pathway",
        lesson:
          "In niche sports, a verified national ranking in a small competitive pool carries more weight than a strong result in a large one. Check the school's NSG record in your child's specific sport before applying.",
      },
      {
        talentArea: "Chinese Dance",
        icon: "dance",
        scenario:
          "A student started Chinese Dance at a community centre in Primary 2, joined his school's Chinese Dance CCA in Primary 4, and performed at two national youth festivals by Primary 6. He was not the most technically gifted dancer in Singapore — but five years of documented, continuous involvement, plus a leadership role as assistant instructor in Primary 6, built a portfolio that three schools responded to. He received a Confirmed Offer from a school with a historical COP well below his projected PSLE range.",
        outcome: "Confirmed offer — arts DSA reached a school 4 AL bands above PSLE path",
        lesson:
          "Sustained involvement over years matters more than peak performance in one audition. A CCA leadership role is a legitimate credential, not padding.",
      },
      {
        talentArea: "Robotics & Engineering",
        icon: "robotics",
        scenario:
          "From Primary 4, a student spent weekends on robotics — school club, holiday workshops, and one national competition where he finished without an award. What distinguished his application was the portfolio: he had documented every design iteration, every failure, and what he learned from each. Two STEM-focused schools shortlisted him; one — a school that admits primarily through DSA for its engineering programme — gave him a Confirmed Offer. His PSLE score alone would not have qualified him.",
        outcome: "Confirmed offer to a specialised tech school — PSLE score alone wouldn't qualify",
        lesson:
          "For STEM DSA, a documented learning journey — including failures and revisions — often speaks louder than a single competition medal.",
      },
      {
        talentArea: "Choir & Vocal Music",
        icon: "music",
        scenario:
          "A student sang in her school choir from Primary 2 with no private vocal lessons and no ABRSM grades — just six years in the school ensemble, three concert performances, and an audition she prepared for herself. She applied to SOTA Music and was placed on the waitlist. In October, after a higher-ranked student chose a different school, her waitlist position converted to a Confirmed Offer. She is now completing SOTA's six-year integrated arts programme.",
        outcome: "Waitlist converted to Confirmed Offer — no formal private training required",
        lesson:
          "A waitlist from a highly selective school is not a rejection. Roughly half of waitlisted students ultimately receive a confirmed place when higher-ranked applicants decline.",
      },
      {
        talentArea: "Leadership",
        icon: "leadership",
        scenario:
          "A student was not an athlete and didn't play an instrument. What he had was six years of consistent school community involvement — class monitor from Primary 2, Prefect in Primary 5 and 6, and a student-led environmental project that ran for two years across eight schools. His DSA application read like a map of documented impact, not a list of titles. He received a Confirmed Offer to a school where his PSLE score would have been borderline under normal posting.",
        outcome: "Confirmed offer — leadership track opened a school 2 AL bands above PSLE path",
        lesson:
          "Leadership DSA requires verifiable, documented impact — not just titles. Schools interview closely and check teacher references. A real project with measurable outcomes is far stronger than three committee roles with no recorded results.",
      },
      {
        talentArea: "When PSLE Exceeded Expectations",
        icon: "risk",
        scenario:
          "A family applied DSA conservatively. Their daughter was projected around AL 16, so they targeted a school with a COP of around AL 14 — a good school, a safe bet. She received a Confirmed Offer and they accepted in September. PSLE came back at AL 10. Suddenly the family was looking at schools two to three tiers above — schools she could have entered through normal S1 posting. The DSA commitment is binding. There is no mechanism to transfer. She thrives at her school and loves it — but the family wishes they had thought carefully about the upside scenario before confirming.",
        outcome: "Bound to DSA school — could not access higher-tier school despite PSLE result",
        lesson:
          "Before confirming a DSA offer, think through both ends of your child's realistic PSLE range — not just the middle estimate. A PSLE outperformance does not override a confirmed DSA commitment.",
      },
    ],
  },
```

---

## 改动 3：更新 TOC（EN）

找到 EN 的 TOC 数组（`getDsaExperienceToc` 函数或内联 toc 常量），在 section-3 对应的 TOC 条目之后，section-4 之前，插入：

```ts
{ href: "#case-studies", label: "4", shortTitle: "Six Families, Six Pathways" },
```

同时将原 section-4 至 section-10 的 `label` 数字各加1（如原 label "4" → "5"，以此类推）。

**注意**：如果 TOC label 是自动从 section 数据生成的，则只需确保新 section 出现在正确位置，无需手动更新编号。

---

## 改动 4：删除"退出CCA"问题（四个 locale）

### EN（line 282 附近）
在 `SECTIONS_EN` 的 section-9 questionSets 中，找到 `"Ask the CCA teacher or coach"` 的 questions 数组，删除以下这一行：
```ts
"What happens if a DSA student wants to leave the CCA mid-way through secondary school?",
```
删除后该 questions 数组剩余 5 条，顺序不变。

### ZH（line 549 附近）
在 `SECTIONS_ZH` 的 section-9 questionSets 中删除：
```ts
"如果 DSA 录取的学生中途想退出该 CCA，会怎么处理？",
```

### MS（找到含 "meninggalkan CCA di pertengahan" 的行）
在 `SECTIONS_MS` 的 section-9 questionSets 中删除：
```ts
"Apa yang berlaku jika pelajar DSA ingin meninggalkan CCA di pertengahan sekolah menengah?",
```

### TA（line 1077 附近）
在 `SECTIONS_TA` 的 section-9 questionSets 中删除：
```ts
"ஒரு DSA மாணவர் இடைநிலை பள்ளியின் நடுவில் CCA-ஐ விட்டு வெளியேற விரும்பினால் என்ன நடக்கும்?",
```

---

## 验证步骤
1. `npm run build` — 无 TS 错误（TS 会识别新的 `caseStudies` 字段）
2. Section 9 Open House 的 "Ask the CCA teacher or coach" 剩余 5 条问题（四个语言均验证）
3. `/dsa-experience` 页面（英文）Section 3 之后、Section 4 之前出现新的 "Six Families" section（需 renderer 任务完成后可见）
