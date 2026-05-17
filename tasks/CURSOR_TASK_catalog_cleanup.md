# Cursor Task: recommend-catalog.ts 才能目录数据清理

## 涉及文件（仅此一个）
- `lib/recommend-catalog.ts`

---

## 背景
`getAreasForCategory` 当前完全动态从 master list 提取，导致学校侧的复合标签（如 "Chinese and Modern Dance"）直接暴露为用户可选项，逻辑混乱。

现有的子字符串匹配逻辑已正确处理：用户选 "Chinese Dance"，系统自动匹配学校的 "Chinese and Modern Dance"——所以只需修改用户看到的选项列表，不需要改匹配逻辑。

---

## 改动：新增静态 arts 区域列表，替换动态提取

**Step 1**：在文件顶部（import 之后，第一个 const 之前），添加静态 arts 列表：

```ts
/**
 * Curated arts area list for the wizard — shows what students DO,
 * not school-side combined labels. Matching logic handles the rest.
 */
const ARTS_AREAS_CURATED: string[] = [
  // Dance
  "Ballet",
  "Chinese Dance",
  "Modern Dance",
  "Indian Dance",
  "Malay Dance",
  "Jazz Dance",
  "Tap Dance",
  "Western Dance",
  "Lion and Dragon Dance",
  "Dance",
  // Music
  "Choir",
  "Concert Band",
  "Chinese Orchestra",
  "Chinese Instrumental Ensemble",
  "Guzheng Ensemble",
  "Guitar Ensemble",
  "Handbell Ensemble",
  "Harmonica Ensemble",
  "Harp Ensemble",
  "Angklung/Kulintang Ensemble",
  // Visual & Literary Arts
  "Art",
  "Art & Design",
  "Art Elective Programme",
  "Chinese Calligraphy",
  "Chinese Painting",
  "Digital Media",
  "Media Arts / Film / Photography",
  // Drama & Theatre
  "Chinese Drama",
  "English Drama",
  // Other performing arts
  "Rhythmic Gymnastics",
];
```

**Important note for Cursor**: Before finalising, run a check against the master list to ensure no legitimate arts area from the master list is omitted (except "Chinese and Modern Dance" and "Debate and Theatre" which are intentionally excluded). Add any missing areas in the appropriate category group.

**Step 2**：找到 `getAreasForCategory` 函数中的 `arts` case：
```ts
case "arts":
  return collectAreas((t) => t.category === "Arts");
```

替换为：
```ts
case "arts":
  return ARTS_AREAS_CURATED;
```

---

## 排除说明

| 排除项 | 原因 |
|--------|------|
| `"Chinese and Modern Dance"` | 学校侧复合标签，学生只做 Chinese Dance 或 Modern Dance；匹配逻辑自动处理 |
| `"Debate and Theatre"` | 已由 `DEBATE_PATTERN` 路由到 debate category，不属于 arts |

---

## 验证步骤
1. `npm run build` — 无 TS 错误
2. 打开 wizard Step 2，展开 "Visual, Literary & Performing Arts"
3. 确认 "Chinese and Modern Dance" 不再出现
4. 确认 "Chinese Dance" 和 "Modern Dance" 分别出现
5. 选择 "Chinese Dance" 完成测验：推荐结果中应包含同时提供 "Chinese Dance" 和 "Chinese and Modern Dance" 的学校（验证匹配逻辑未受影响）
