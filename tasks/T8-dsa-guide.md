# T8 — DSA 经验指南页面

## 任务目标

新建 DSA 经验指南页面，呈现从论坛、MOE 规则和真实案例中整理的 DSA 申请经验。
以文章形式呈现，英文，正式但易读的语气。

## 文件

- `/content/dsa-experience.mdx` — 指南内容（MDX 格式）
- `/app/dsa-experience/page.tsx` — 渲染页面

检查项目中是否已有 MDX 配置（看 next.config.js）。若没有，改用普通 TSX 文件直接写内容。

## 页面路由

`/dsa-experience`

## 页面内容（完整撰写以下 8 个章节，英文）

---

### Section 1: What Is DSA and How It Actually Works

覆盖要点：
- DSA (Direct School Admission) allows students to apply to secondary schools based on talent before PSLE results
- Students can apply to up to **3 schools**
- A confirmed DSA offer guarantees placement **only if** the student meets the school's minimum posting group (AL ≤ 22 for Express/IP schools)
- Students with PSLE AL ≥ 23 **cannot** attend IP or Express schools even with a DSA offer — their score determines the stream, not the offer
- DSA students cannot participate in S1 posting after accepting an offer
- Application window 2026: **6 May to 2 June 2026**

---

### Section 2: The Most Important Rule — School Selectivity vs. Talent Required

覆盖要点：
- There is an **inverse relationship** between a school's academic selectivity (COP) and how high the talent bar is for DSA
- The most academically selective schools (e.g. Raffles Institution, Hwa Chong, Nanyang Girls') are also the most selective in DSA — they only take students with nationally top-ranked talent
- Less academically selective schools often have unfilled DSA spots, so they accept students with lower talent tiers — the national-level athletes have already been "taken" by the top schools
- This is a "staircase": lower COP school → higher talent required; higher COP school → lower talent bar
- Real example (anonymised): A national-level pitcher with PSLE AL18 was accepted by Raffles and Nanyang, but rejected by MGS — because MGS had different needs that year
- Real example: A world cup softball player with AL12 was accepted by Nanyang Girls' and Nan Hua, but rejected by Raffles — a reminder that even elite talent doesn't guarantee admission if slots are full

---

### Section 3: Sports and Arts — How Schools Actually Assess Talent

覆盖要点：
- **External coaching matters far more than school CCA alone.** Students who train 3+ times per week at a club or academy are in a fundamentally different cohort from those who only train during school CCA sessions
- **Individual vs. team events are not the same.** Winning as an individual directly reflects personal skill. Winning as part of a team might mean you were the star — or just along for the ride. Schools usually dig into your specific role
- **Niche sports have smaller talent pools.** Softball is offered by roughly 20–30 primary schools in Singapore. Basketball is offered by 150+. Being "Top 10 nationally" in softball is competing against a much smaller pool than the same ranking in basketball. Both matter, but the context is different
- Students who have received years of external coaching usually know their approximate island-wide level — especially in niche sports and competitive arts programmes
- **If your child has only played casually, without structured training in school CCA or external coaching, DSA is not the right path for that area.** Schools assess documented, structured experience

---

### Section 4: Leadership DSA — What Schools Actually Want

覆盖要点（based on KiasuParents forum research）：
- Schools want **multi-year, school-wide roles** — not a one-semester class monitor position
- The progression that matters: Class Monitor → CCA Committee → School Prefect → Head/Deputy Prefect or Student Council
- Simply being a class monitor alone will not qualify at competitive schools (Tier A)
- External leadership programmes (MOE, university-affiliated, international) strengthen the application but **cannot substitute** for authentic school leadership experience
- Forum insight: There have been reports of coaches charging large sums to "guarantee" DSA leadership placements. This is misleading — schools verify leadership during interviews, and authentic experience cannot be bought
- Multi-year commitment signals genuine character; rushed portfolios are visible to school interviewers

---

### Section 5: STEM and Academic DSA

覆盖要点（based on forum research）：
- **Competition quality matters far more than quantity.** One NMOS Special Round qualification outweighs three SASMO Gold medals
- The competition hierarchy (rough guide):
  1. International Olympiad (top tier)
  2. NMOS Special Round / APMOPS (very high)
  3. NMOS Gold / SMOPS Top 10 / AMO Top Performers
  4. SASMO Gold (competitive but common at top schools)
  5. SASMO Silver / Bronze + multiple competitions (solid foundation)
  6. Participation certificates alone (not sufficient for top schools)
- Consistency across 2–3 competitions is valued more than a single performance
- Research projects and science fair achievements complement competition results but rarely replace them for top-tier school applications
- Early preparation (starting from P4) is the norm among serious applicants — this is not about "pay to play" but about depth of engagement over time

---

### Section 6: The DSA Application Timeline (2026)

呈现为清晰的时间线格式：

| Date | Milestone |
|------|-----------|
| April–May 2026 | School open houses — attend to ask about DSA intake for your talent area |
| **6 May 2026** | DSA application portal opens |
| **2 June 2026** | DSA application closes — last day to submit |
| July–August 2026 | School trials, auditions, interviews |
| Late August 2026 | DSA offers released |
| September 2026 | Deadline to accept DSA offer |
| November 2026 | PSLE results released — offer confirmed if AL ≤ 22 |

---

### Section 7: Common Mistakes to Avoid

以 bullet list 形式：

1. **Applying only to reach schools.** With only 3 DSA slots, include at least one school where your child's talent level is genuinely competitive
2. **Assuming national-level talent guarantees admission to RI.** Annual vacancies are limited and not publicly disclosed — even top athletes get rejected when slots are full
3. **Ignoring the CCA commitment.** Students admitted via DSA are expected to remain in that CCA throughout secondary school. If your child plans to switch CCAs, do not use DSA for that activity
4. **Underestimating the AL requirement.** Even with a strong DSA offer, students with PSLE AL ≥ 23 cannot attend IP or Express schools. The offer does not override stream placement
5. **Applying without attending the school's open house.** Open houses are where you learn whether a school is actually recruiting for your specific area that year — don't skip them

---

### Section 8: Practical Checklist Before Applying

以 checkbox 格式：

- [ ] Attended the school's open house and spoken with the relevant CCA teacher
- [ ] Confirmed the school is actively recruiting for your child's specific talent area in 2026
- [ ] Your child has documented experience (CCA records, competition certificates, training records)
- [ ] You have your child's PSLE projected score and it is ≤ 22 (required for IP/Express schools)
- [ ] You have selected 3 schools thoughtfully: at least one realistic match, not all aspirational
- [ ] Your child understands the CCA commitment — DSA admits cannot switch CCAs in secondary school
- [ ] You have noted the 2 June 2026 application deadline

---

## 页面设计

- 左边栏：目录（Section 1–8），点击跳转锚点
- 正文：prose 风格，用 `max-w-3xl mx-auto`，行距宽松
- 段落标题用 `text-xl font-semibold`，正常大小写
- 时间线用 HTML table 或 `<dl>` 标签
- 最后加一个 CTA 卡片：「Ready to find the right school? Try our School Recommender →」链接到 `/recommend`

## 验收标准

- 页面可在 `/dsa-experience` 访问
- 所有 8 个章节内容完整，英文通顺
- 目录锚点跳转正常
- 底部 CTA 链接正确
- 风格与现有网站一致（slate 色系）
