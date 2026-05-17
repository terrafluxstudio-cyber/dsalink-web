# Cursor Task C：content/dsa-experience.tsx 内容改写 + 类型扩展

## 涉及文件（仅此一个文件，与 Task A / Task B 完全不重叠，可并行执行）
- `content/dsa-experience.tsx`

---

## 改动 1：类型定义扩展

在文件顶部现有类型定义区域（`DsaExperienceQuestionSet` 之后，`DsaExperienceSection` 之前），**插入**两个新类型：

```ts
export type DsaExperienceExample = {
  label?: string;
  body: string;
};

export type DsaExperienceStat = {
  value: string;
  label: string;
};
```

然后在 `DsaExperienceSection` type 定义中，`questionSets?: DsaExperienceQuestionSet[];` 之后追加：

```ts
examples?: DsaExperienceExample[];
stats?: DsaExperienceStat[];
```

---

## 改动 2：Section 1 — AL 分数段落修正（仅 EN）

**当前第三段（找到包含 "For Integrated Programme (IP) and Express schools" 的段落）：**

```
"A confirmed DSA offer guarantees placement at that school only if the student meets the school's minimum posting group. For Integrated Programme (IP) and Express schools, that generally means a PSLE Achievement Level (AL) score of 22 or better (AL ≤ 22).",
```

**替换为：**

```ts
"A confirmed DSA offer guarantees placement at that school only if the student meets the school's minimum posting group. For Express-stream schools, this generally means a PSLE Achievement Level (AL) score of 22 or better (AL ≤ 22). For Integrated Programme (IP) schools, the effective bar is considerably lower — the most selective IP schools have Cut-Off Points (COPs) in the AL 4–10 range, meaning a student who secures a DSA offer but scores AL 15 at PSLE will not be able to take up that IP offer, even though they would qualify for an Express school.",
```

---

## 改动 3：Section 1 — 新增 stats 块（仅 EN，在 EN section-1 的 `callouts` 之前或同级）

在 EN 的 section-1 对象中，`callouts: [...]` 同级，加入：

```ts
stats: [
  { value: "3", label: "max school choices per student" },
  { value: "AL ≤ 22", label: "minimum PSLE for Express schools" },
  { value: "6 May", label: "2026 application portal opens" },
],
```

---

## 改动 4：Section 2 — 游泳运动员故事改为 examples 块（仅 EN）

**当前 section-2 的 paragraphs 中，找到以下两段并删除：**

段落 1（找到含 "Consider a swimmer who has trained with a club since Primary 2" 的段落）：
```
"Consider a swimmer who has trained with a club since Primary 2, represented their school at NSG competitions, and achieved national age-group rankings. At the most academically selective schools, this profile earned confirmed offers — but the same swimmer was unsuccessful at one equally well-known school that had already filled its swimming quota with national record holders that year. The school had not lowered its standards; it had simply run out of available places for that talent area.",
```

段落 2（找到含 "A documented pattern across multiple years" 的段落）：
```
"A documented pattern across multiple years: students who have represented Singapore at regional or international level in their sport received confirmed offers from some top-tier schools in the same application cycle while being rejected by others at the same tier — not because of a talent gap, but because annual vacancies at each school are finite and fill on a first-qualified basis. A world-class résumé is a powerful credential. It is not a key that opens every door in the same year.",
```

**在 section-2 对象中新增 examples 块（与 callouts 同级）：**

```ts
examples: [
  {
    label: "Real-world pattern",
    body: "A nationally ranked swimmer — with years of club training, NSG representation, and age-group titles — received confirmed DSA offers from some of Singapore's most academically selective schools in the same cycle, while being unsuccessful at others at the same tier. The difference was not talent. It was that certain schools had already filled their swimming vacancies with students who held national records. Annual intake slots are finite and fill on a first-qualified basis. A strong profile is necessary. It is not sufficient.",
  },
],
```

---

## 改动 5：Section 3 — 软球数据保留说明

Section 3 第三段提到 "Softball is offered at around 14 primary schools in Singapore" — 这条**保留不变**，它是用作教育性说明（数量对比）而非识别具体个人，符合隐私要求。

---

## 改动 6：Section 7 — 顾问风险条目（新增）

在 EN section-7 的 `orderedList` 末尾追加一条（在最后一项后面）：

```ts
"Paying a DSA consultant for 'guaranteed' results or 'school connections'. No consultant has privileged access to MOE school admission quotas or individual selectors' decisions. Legitimate consultants help with preparation — portfolio organisation, interview coaching, timeline management. Any consultant who implies relationships with specific schools, offers 'direct introductions' to DSA coordinators, or guarantees offers is misrepresenting how the process works. MOE's selection is blind to intermediaries.",
```

---

## 关于其他语言（ZH / MS / TA）

Task C 仅修改 EN locale 的内容段落。ZH / MS / TA 的对应 sections 在本次 task 中**保持不变**——等内容经用户审核后再同步翻译，避免错误扩散到四个语言版本。

---

## 验证步骤
1. `npm run build` — 无 TS 错误
2. TypeScript 能识别 `DsaExperienceSection.stats` 和 `.examples` 字段
3. 访问 `/dsa-experience`（英文），Section 1 第三段正确区分 IP 和 Express
4. Section 2 游泳运动员故事以 example 卡片形式呈现（待 Task B 部署后可见）
5. Section 7 末尾出现顾问风险警告条目
