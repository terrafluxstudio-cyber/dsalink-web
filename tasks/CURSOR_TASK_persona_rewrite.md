# Cursor Task: Persona cards — rewrite all 4 persona i18n keys

**File to edit:** `lib/i18n.ts`

The `DsaStrategySection.tsx` component structure (icons, colours, links) does NOT change.
Only the text content of the 4 persona keys changes.

The 4 link hrefs also change:
- Persona 1: keep `/faq` ← no change needed (already correct)
- Persona 2: keep `/schools` → but update to `/dsa-finder`
- Persona 3: keep `/schools` → but update to `/dsa-guide`
- Persona 4: keep `/faq` → but update to `/dsa-finder`

Wait — the hrefs are hardcoded in `DsaStrategySection.tsx`, not in i18n. Check the component and update the href values for personas 2, 3, and 4 there.

---

## i18n key values to set — English (en locale in `lib/i18n.ts`)

### Persona 1
```
dsaStrategyPersona1Title: "My child's been in CCA for years — I just never looked into DSA",
dsaStrategyPersona1Tag: "First time exploring",
dsaStrategyPersona1Who: "You've heard of DSA but assumed it was for Gifted Programme kids or top-tier schools. Your child has been in the same CCA for 2+ years. That's already more than most families start with.",
dsaStrategyPersona1Goal: "Understand whether your child qualifies, and what 'evidence of talent' actually looks like in a real application.",
dsaStrategyPersona1Tip: "DSA is open to every primary school in Singapore. What schools look for is consistent participation over time — not medals from elite programmes.",
dsaStrategyPersona1Cta: "Start with the FAQ →",
```

### Persona 2
```
dsaStrategyPersona2Title: "Average grades, but genuinely strong in one area",
dsaStrategyPersona2Tag: "Talent over grades",
dsaStrategyPersona2Who: "PSLE predicted: AL 20–26. But your child has been training consistently — swimming, wushu, Chinese dance, or a niche STEM domain — with results to show. Their talent is real. Their PSLE score doesn't reflect that.",
dsaStrategyPersona2Goal: "Find secondary schools where their talent, not their exam score, is what gets them in.",
dsaStrategyPersona2Tip: "Schools that would be out of reach via the normal PSLE pathway are genuinely accessible through DSA. The competition is measured on different terms.",
dsaStrategyPersona2Cta: "Search talent areas →",
```

### Persona 3
```
dsaStrategyPersona3Title: "I want to secure the right school before PSLE results day",
dsaStrategyPersona3Tag: "Locking in early",
dsaStrategyPersona3Who: "Your child is performing well (predicted AL ≤ 20) and has a documented talent. You've seen how stressful November results day is. A Confirmed DSA Offer, in hand before PSLE, changes what that day means.",
dsaStrategyPersona3Goal: "Use DSA strategically — secure a school that fits both their academic track and their talent — before the PSLE scramble begins.",
dsaStrategyPersona3Tip: "With a Confirmed Offer, your PSLE target shifts from 'competing for rank' to 'meeting minimum entry requirements.' That's a completely different exam to prepare for.",
dsaStrategyPersona3Cta: "Read the DSA Guide →",
```

### Persona 4
```
dsaStrategyPersona4Title: "Applications close 2 June — where do I start?",
dsaStrategyPersona4Tag: "Deadline: 2 Jun 2026",
dsaStrategyPersona4Who: "You found out about DSA this week. You have less than three weeks. Your child has been doing a CCA for at least a year. That's enough to start.",
dsaStrategyPersona4Goal: "Identify 1–3 schools to apply to, gather the minimum evidence portfolio, and submit before 4:30pm on 2 June.",
dsaStrategyPersona4Tip: "The application itself takes under an hour via the MOE portal. The real work is deciding which schools to apply to. Use DSA Finder now — it searches by talent area.",
dsaStrategyPersona4Cta: "Use DSA Finder →",
```

---

## i18n key values — Chinese (zh locale in `lib/i18n.ts`)

### Persona 1
```
dsaStrategyPersona1Title: "孩子 CCA 参加了好几年——我从没认真了解过 DSA",
dsaStrategyPersona1Tag: "第一次了解",
dsaStrategyPersona1Who: "你听说过 DSA，但一直以为那是给"天才班"孩子或顶级小学才适合的。你的孩子已经在同一个 CCA 坚持了 2 年以上——这已经比大多数家庭的起点要好。",
dsaStrategyPersona1Goal: "搞清楚孩子是否符合条件，以及在真实申请中"才能证明"到底是什么样的。",
dsaStrategyPersona1Tip: "DSA 面向新加坡所有小学。学校看的是稳定、持续的参与记录——不是精英培训机构的奖杯。",
dsaStrategyPersona1Cta: "先读 DSA 常见问答 →",
```

### Persona 2
```
dsaStrategyPersona2Title: "成绩中等，但在某个领域确实有料",
dsaStrategyPersona2Tag: "才能高于成绩",
dsaStrategyPersona2Who: "PSLE 预测 AL 20–26。但孩子一直在认真训练——游泳、武术、华族舞蹈，或某个 STEM 细分领域——而且有成绩可以证明。孩子的才能是真实的，只是 PSLE 成绩无法体现这一点。",
dsaStrategyPersona2Goal: "找到以才能而非考试分数录取的中学，让孩子进入原本靠 PSLE 进不了的学校。",
dsaStrategyPersona2Tip: "通过 DSA 才能通道，那些"分数够不着"的学校是真实可以申请的。竞争维度不同——不是考试排名，而是才能匹配。",
dsaStrategyPersona2Cta: "搜索才能领域 →",
```

### Persona 3
```
dsaStrategyPersona3Title: "想在 PSLE 放榜前先锁定一所合适的学校",
dsaStrategyPersona3Tag: "提前锁定",
dsaStrategyPersona3Who: "孩子成绩不错（预测 AL ≤ 20），同时有才能记录。你见过 11 月放榜日的压力有多大。手握一份 DSA Confirmed Offer，放榜那天的意义就完全不一样了。",
dsaStrategyPersona3Goal: "战略性地使用 DSA——在 PSLE 放榜前，锁定一所同时符合学业方向和才能兴趣的学校。",
dsaStrategyPersona3Tip: "有了 Confirmed Offer，PSLE 的目标就从"竞争名次"变成了"达到最低入学要求"——这是完全不同的备考心态。",
dsaStrategyPersona3Cta: "阅读 DSA 完整指南 →",
```

### Persona 4
```
dsaStrategyPersona4Title: "截止日期是 6 月 2 日——我从哪里开始？",
dsaStrategyPersona4Tag: "截止：2026年6月2日",
dsaStrategyPersona4Who: "你这周才听说 DSA，距离截止日期不到三周。孩子至少参加了一年 CCA——这已经够了。",
dsaStrategyPersona4Goal: "确定 1–3 所要申请的学校，准备最基本的才能证明材料，在 6 月 2 日下午 4:30 前提交。",
dsaStrategyPersona4Tip: "申请本身通过 MOE 门户不到一小时就能完成。真正要做的事是决定申请哪几所学校——现在就用 DSA 搜索器，按才能领域查。",
dsaStrategyPersona4Cta: "现在使用 DSA 搜索器 →",
```

---

## i18n key values — Malay (ms locale) and Tamil (ta locale)

For ms and ta: rewrite all 4 personas following the same meaning and structure as the EN content above.
Use the existing MS and TA locale tone/style already present in `lib/i18n.ts` for other persona keys as reference.

---

## Component href updates (`components/DsaStrategySection.tsx`)

Find the `personas` array and update the `href` values:
- Persona 2 (index 1): change href from `/schools` to `/dsa-finder`
- Persona 3 (index 2): change href from `/schools` to `/dsa-guide`
- Persona 4 (index 3): change href from `/faq` to `/dsa-finder`

---

## After changes

Run:
```
npx tsc --noEmit
```
Zero errors expected — only string values changed, no type structure changes.
