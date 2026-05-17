# Cursor Task: 修复 ZH "confirm" 用词 + 新增两个 EN 案例卡片

## 涉及文件（仅此一个）
- `content/dsa-experience.tsx`

两个改动互相独立，可按顺序完成。

---

## 改动 1：修复 SECTIONS_ZH 中的英文动词 "confirm"

**原则**：中文句子中不使用英文动词（如 confirm、booking、check、update）。  
所有出现在中文句子里的 `confirm` 均替换为 `确认接受`。

### 第 414 行（约）

找到以下原文（`SECTIONS_ZH` 中）：

```
"在 confirm 任何 DSA 录取通知书之前，请考虑两个方向的风险。如果孩子 PSLE 分数未达到该校最低录取分配组别，条件性录取通知可能被撤销——而 S1 分配通道，他们在 confirm 的那一刻就已退出，无法再回头。同样，如果孩子 PSLE 发挥显著超出预期——考出了按正常分配可以进入更好学校的成绩——DSA 承诺依然具有约束力。没有任何机制允许他们转入凭 PSLE 实际成绩本可进入的更高层级学校。在 confirm 之前，对孩子 PSLE 成绩的上下两个方向都做出清醒判断——而不只是中位预测——是整个 DSA 过程中最关键的决定之一。"
```

替换为：

```
"在确认接受任何 DSA 录取通知书之前，请考虑两个方向的风险。如果孩子 PSLE 分数未达到该校最低录取分配组别，条件性录取通知可能被撤销——而 S1 分配通道，他们在确认接受的那一刻就已退出，无法再回头。同样，如果孩子 PSLE 发挥显著超出预期——考出了按正常分配可以进入更好学校的成绩——DSA 承诺依然具有约束力。没有任何机制允许他们转入凭 PSLE 实际成绩本可进入的更高层级学校。在确认接受之前，对孩子 PSLE 成绩的上下两个方向都做出清醒判断——而不只是中位预测——是整个 DSA 过程中最关键的决定之一。"
```

（共替换该字符串中的 3 个 `confirm`：句首、句中、句尾各一个）

---

### 第 564 行（约）

找到以下原文（`SECTIONS_ZH` 中）：

```
"认为承诺风险只会影响 PSLE 成绩不达标的孩子。成绩显著超出预期的孩子同样受 confirm 承诺约束——即使他们的实际 PSLE 成绩原本可以通过正常分配进入更高层级的学校。confirm 之前，请对孩子 PSLE 成绩的上下两个方向都做出判断，而不只看最可能的中位结果。"
```

替换为：

```
"认为承诺风险只会影响 PSLE 成绩不达标的孩子。成绩显著超出预期的孩子同样受确认接受承诺约束——即使他们的实际 PSLE 成绩原本可以通过正常分配进入更高层级的学校。确认接受之前，请对孩子 PSLE 成绩的上下两个方向都做出判断，而不只看最可能的中位结果。"
```

（共替换该字符串中的 2 个 `confirm`）

---

## 改动 2：在 SECTIONS_EN 的 `case-studies` section 新增两个案例卡片

找到 `SECTIONS_EN` 中 `id: "case-studies"` 的 section，在 `caseStudies` 数组末尾（即 scenario 6 "When PSLE Exceeded Expectations" 的对象结束 `},` 之后，`]` 关闭方括号之前）追加以下两个对象：

```ts
      {
        talentArea: "When DSA Doesn't Work Out",
        icon: "risk",
        scenario:
          "A student had trained in Chinese instrumental music for five years and applied to three secondary schools — a top-tier IP school, a mid-tier school, and a neighbourhood school she genuinely liked. All three rejected her. Her parents kept the news quiet during PSLE preparation. When results came back at AL 12, the family was surprised: her score opened schools she had not originally considered. She secured a place through normal S1 posting at a school with a strong music programme, joined the Chinese orchestra there, and captained it by Secondary 3.",
        outcome: "All three DSA applications unsuccessful — PSLE and S1 posting delivered the right outcome",
        lesson:
          "DSA rejection is not the end of a musical journey. S1 posting and CCA open trials remain. Some students find a better fit through the regular process.",
      },
      {
        talentArea: "When the Offer Becomes a Mismatch",
        icon: "risk",
        scenario:
          "A student was admitted via DSA to a prestigious secondary school for string instruments. Within a semester, two problems emerged: her academic workload was significantly heavier than at her primary school, and the school's string ensemble focused on pieces well below the level she had mastered at her external academy. She spent Secondary 1 managing stress, not music. By Secondary 2 she had adjusted academically — but had switched her private instrumental lessons to a different academy because the school CCA no longer challenged her.",
        outcome: "Confirmed offer accepted — academic and CCA mismatch emerged post-admission",
        lesson:
          "Visit the CCA at open house and ask current student members about the repertoire difficulty and training schedule. A school's reputation in a talent area does not always match the actual CCA experience.",
      },
```

---

## 改动 3：更新 `case-studies` section 标题（EN）

找到 `SECTIONS_EN` 中 `id: "case-studies"` 的 `title` 字段：

```ts
title: "Six Families. Six Different DSA Pathways.",
```

替换为：

```ts
title: "Eight Families. Eight Different DSA Pathways.",
```

同时更新 `paragraphs` 数组的第一句，将 `six composite stories` 改为 `eight composite stories`，将 `These six` 改为 `These eight`：

原文：
```
"DSA works differently depending on the talent, the school, and the year. These six composite stories — drawn from patterns reported by families across forums, parent networks, and school communities — illustrate how different the experience can be. Names, scores, and identifying details have been changed.",
```

替换为：
```
"DSA works differently depending on the talent, the school, and the year. These eight composite stories — drawn from patterns reported by families across forums, parent networks, and school communities — illustrate how different the experience can be. Names, scores, and identifying details have been changed.",
```

---

## 验证步骤

1. `npm run build` — 必须零 TypeScript 错误。
2. 浏览器打开 `/dsa-experience`，切换至英文（EN）：
   - 滚动至 "Eight Families" section，确认出现 **8 张**案例卡片。
   - 最后 3 张卡片（scenarios 6、7、8）均应显示**琥珀色（amber）样式**——与 `icon: "risk"` 对应的卡片主题一致。
3. 浏览器切换至中文（ZH）：
   - 在"录取通知"相关段落中，确认不再出现英文单词 `confirm`，已全部替换为 `确认接受`。
   - 搜索全文，确认 `SECTIONS_ZH` 中不再有单独使用的英文 `confirm`。
