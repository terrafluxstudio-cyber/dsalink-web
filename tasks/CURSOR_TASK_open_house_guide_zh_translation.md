# CURSOR TASK: Open House Guide — Add 40 Missing ZH Keys

## Context

`locales/zh.json` is missing 40 translation keys for the Open House Guide page (`/open-house-guide`). These keys exist in `locales/en.json` (lines 170–208) but are absent from `locales/zh.json`.

The ZH file currently ends the ohGuide section at `ohGuide_after3_body` (line 169) and then jumps directly to `ohGuide_footerNote` (line 170), skipping four complete sections: staff questions, student questions, observe, and logistics.

---

## Task 1: Add 40 Missing Keys to `locales/zh.json`

### Where to insert

Open `locales/zh.json`. Find this line (currently line 169):

```json
"ohGuide_after3_body": "用笔记在 5 月申请窗口开放前重新排列你的 5 到 8 所学校的优先顺序。不要因为一次开放日的对话就急着重写孩子的作品集——作品集应反映真实持续的成就，而非仓促的方向调整。",
```

Insert the following block **immediately after** that line, **before** `ohGuide_footerNote`:

```json
  "ohGuide_staffQ_heading": "问学校工作人员和老师的问题",
  "ohGuide_staffQ_lead": "学校工作人员都经过培训，知道怎么把学校说得好听。你要问的是那些需要给出具体、实操性答案的问题——不是泛泛而谈的「学校文化」。",
  "ohGuide_staffQ_cat_label": "问 DSA 统筹或 CCA 负责老师",
  "ohGuide_staffQ1": "通过 DSA 成功录取的学生（在这个运动或艺术领域），他们通常有什么共同点？",
  "ohGuide_staffQ2": "学校在甄选试训或试演时，具体看重什么——除了基本功之外？",
  "ohGuide_staffQ3": "没有比赛经验的申请人，学校会考虑吗？你们说的「潜力」，实际上是什么样子？",
  "ohGuide_staffQ4": "这个特长领域今年有多少个 DSA 名额？",
  "ohGuide_staffQ5": "CCA 每周的训练时间表是怎样的？哪些比赛或演出是必须参加的？",
  "ohGuide_staffQ6": "如果学生学业跟不上，学校有什么支援？CCA 的时间表会相应调整吗？",
  "ohGuide_staffQ7": "对于同时有 IP 和 O 水准轨道的学校：这个 DSA 录取通知书是 IP 还是 O 水准课程？",
  "ohGuide_staffQ8": "通过 DSA 入读的学生，是否预期在整个中学阶段都留在同一个 CCA？",
  "ohGuide_studentQ_heading": "问在读学生的问题",
  "ohGuide_studentQ_lead": "在读学生给的答案往往比工作人员更真实。找那些看起来比较放松的学生聊——不是被安排在展台的「官方」学生大使。",
  "ohGuide_studentQ_cat_label": "自然接触到的在读学生，不是被安排在展台的大使",
  "ohGuide_studentQ_insight": "开放日最值得做的一件事",
  "ohGuide_studentQ_insightBody": "我们参考过的所有资料——家长论坛、教育博客、学校辅导员——都指向同一个结论：直接和在读学生聊天，比任何官方介绍或宣传册都更有参考价值。",
  "ohGuide_studentQ1": "你为什么选择这所学校？当时有没有在考虑其他学校？",
  "ohGuide_studentQ2": "通过 DSA 入读的学生，和靠 PSLE 成绩进来的同学，在日常相处或课堂上会有区别对待吗？",
  "ohGuide_studentQ3": "你实际的每周训练时间表是怎样的——几次、几小时、有多少比赛是必须参加的？",
  "ohGuide_studentQ4": "在这里读中学，最难熬的是什么？",
  "ohGuide_studentQ5": "自从加入 CCA，你在自己的特长领域有没有明显进步？",
  "ohGuide_studentQ6": "你或者队友，除了学校训练，还有请私人教练吗？",
  "ohGuide_studentQ7": "如果可以改变学校 CCA 课程的一件事，你会改什么？",
  "ohGuide_observe_heading": "观察什么（不只是提问）",
  "ohGuide_observe_lead": "你被动注意到的东西，往往比你主动问出来的更能说明问题。",
  "ohGuide_observe1_title": "学生志愿者",
  "ohGuide_observe1_body": "他们看起来是真的热情，还是在「演」一个角色？没有被问到就主动聊起来的学生，比照着剧本回答的更值得参考。",
  "ohGuide_observe2_title": "CCA 示范表演",
  "ohGuide_observe2_body": "他们展示的是真实的日常训练状态，还是专门为开放日准备的精彩演出？后者对你了解平时训练来说帮助有限。",
  "ohGuide_observe3_title": "教职人员的可接触程度",
  "ohGuide_observe3_body": "科目老师在正式讲座以外，有没有机会直接和你交流？如果老师都躲在行政人员后面，这所学校可能在刻意管控信息。",
  "ohGuide_observe4_title": "走廊和公共区域",
  "ohGuide_observe4_body": "展示的是什么样的学生作品？公告板上贴着什么？这些细节反映的是学校真正在乎什么，而不是它声称在乎什么。",
  "ohGuide_logistics_heading": "实用参观攻略",
  "ohGuide_logistics_lead": "参观前和参观当天要做什么，才能在有限时间内发挥最大效益。",
  "ohGuide_logistics1": "热门学校的开放日人很多——带着一份已排好优先顺序的展台和讲座清单去，不要想着什么都看。",
  "ohGuide_logistics2": "CCA 展台的对话最有价值。把时间优先留给展台，而不是学校礼堂的统一介绍——那些内容官网都有。",
  "ohGuide_logistics3": "有些学校会取消或不举办开放日。去之前先在学校官网确认活动确实进行中。",
  "ohGuide_logistics4": "参观前一周查看学校的社交媒体——近期的帖子往往比任何宣传册都更能反映学生的日常文化。",
```

---

## Task 2: Fix 3 Existing ZH Issues

These are **not** in the ohGuide_ section, but are in zh.json and need fixing:

### Fix 1 — "Portfolio" without Chinese equivalent

In `locales/zh.json` line 38:

**Current:**
```json
"dsaGuidePhase1AfterLink": "了解学校文化与 DSA 要求；同时整理清晰的个人作品集（Portfolio）：成果证明、反思文字，以及必要的奖状或证书。",
```

**Change** `（Portfolio）` → remove the English parenthetical since 作品集 already appears before it:

```json
"dsaGuidePhase1AfterLink": "了解学校文化与 DSA 要求；同时整理清晰的个人作品集：成果证明、反思文字，以及必要的奖状或证书。",
```

### Fix 2 — "Posting" untranslated (line 69)

**Current:**
```json
"dsaGuideFactCommitmentStrong1": "不再参加随后的 Secondary 1 (S1) Posting 网上选校",
```

**Change** `S1 Posting` → `S1 派位`:

```json
"dsaGuideFactCommitmentStrong1": "不再参加随后的中一（S1）派位网上选校",
```

### Fix 3 — "confirm" mid-sentence in ohGuide_ values

Run a grep check after inserting the new keys:

```bash
grep -n "ohGuide_" locales/zh.json | grep -i "confirm"
```

If any result shows English "confirm" inside a Chinese sentence, replace it with `确认`. Based on the current audit, no such instance exists in zh.json — but verify after the Task 1 insert since the source EN keys contain "confirm" in some values.

---

## Verification Checklist

Run these after making all changes:

```bash
# 1. JSON is valid
node -e "JSON.parse(require('fs').readFileSync('locales/zh.json','utf8')); console.log('ZH JSON valid')"

# 2. All 40 new keys are present
grep -c "ohGuide_staffQ\|ohGuide_studentQ\|ohGuide_observe\|ohGuide_logistics" locales/zh.json
# Expected: 40

# 3. No English "confirm" mid-sentence in ohGuide_ values
grep "ohGuide_" locales/zh.json | grep -i "confirm"
# Expected: no output

# 4. No bare "Portfolio" (without Chinese) in ZH
grep "Portfolio" locales/zh.json
# Expected: only line 266/267 with 作品集（Portfolio） or no bare Portfolio

# 5. No bare "Posting" (untranslated) in ZH ohGuide_ or dsaGuide sections
grep "Posting" locales/zh.json
# Expected: only glossary definitions or lines that already have 派位

# 6. Build passes
npm run build
```

### Manual browser check

1. Start dev server: `npm run dev`
2. Go to `/open-house-guide`
3. Switch language to 中文
4. Scroll through the page — confirm these four sections render with Chinese text (no blank or missing content):
   - "问学校工作人员和老师的问题" section
   - "问在读学生的问题" section
   - "观察什么（不只是提问）" section
   - "实用参观攻略" section
5. Confirm no raw key names (like `ohGuide_staffQ_heading`) appear on screen

---

## Translation Notes

- **CCA**: kept as CCA (universally understood in Singapore)
- **DSA**: kept as DSA
- **IP / O 水准**: standard Singapore education shorthand, kept
- **ALP / LLP**: kept as-is (Singapore education acronyms)
- **PSLE**: kept as PSLE
- **作品集**: used consistently for Portfolio (no English parenthetical needed)
- **派位**: used for Posting/S1 Posting Exercise
- Tone: 像一个有经验的家长在跟另一个家长说话，亲切直接，不用书面语
