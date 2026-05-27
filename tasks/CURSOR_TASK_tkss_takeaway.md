## 任务描述
在 OpenHouseTakeawaysBody.tsx 的 SCHOOLS 数组末尾（`];` 之前）新增 Tanjong Katong Secondary School 条目。

## 涉及文件
- `components/OpenHouseTakeawaysBody.tsx`（在第863行 `},` 后、第864行 `];` 前插入）

## 完整内容

在第863行末尾 `},` 之后、`];` 之前，插入以下完整对象：

```ts
  {
    id: "tkss",
    nameEn: "Tanjong Katong Secondary School",
    nameZh: "丹绒加东中学",
    nameShort: "TKSS",
    date: "26 May 2026",
    dateZh: "2026年5月26日",
    eventType: "On-site Open House",
    eventTypeZh: "实地开放日",
    tags: ["O-Level", "Co-ed", "Government"],
    aboutEn: [
      "Government co-ed school on Haig Road — O-Level track",
      "5 DSA talent areas across 2 domains: Malay Language + 4 sports",
      "Sports DSA is gender-specific: Basketball and Football for boys; Floorball and Netball for girls",
      "Malay Language DSA is open to both boys and girls",
      "Known for its Malay cultural heritage — one of the original East Coast community schools",
    ],
    aboutZh: [
      "海格路政府男女中学，修读O水准课程",
      "5个DSA才能方向，分属两个领域：马来语 + 4项运动",
      "运动DSA按性别限定：篮球和足球限男生；地板曲棍球和篮网球限女生",
      "马来语DSA男女生均可申请",
      "以马来文化传承著称，是东海岸历史最悠久的社区学校之一",
    ],
    goodFitEn: [
      "Students with strong Malay Language results AND competition experience — grades alone are not enough",
      "Boys who play Basketball or Football at National School Games level",
      "Girls who play Floorball or Netball at NSG level",
      "Families looking for a community-feel co-ed O-Level school in the East",
    ],
    goodFitZh: [
      "马来语成绩优秀且有竞赛经历的学生——仅有好成绩还不够",
      "在全国学校运动会打篮球或足球的男生",
      "在NSG打地板曲棍球或篮网球的女生",
      "寻找东区有社区氛围的男女混合O水准学校的家庭",
    ],
    keySignalEn:
      "TKSS offers one of the few Malay Language DSA pathways in Singapore — but requires both strong academic results in Malay and proven competition achievements. For sports, NSG-level performance is expected, not just school CCA participation. If your child's sport isn't one of the four listed, there is no DSA pathway here.",
    keySignalZh:
      "TKSS是新加坡少数提供马来语DSA途径的学校之一，要求同时具备优异的马来语学业成绩和竞赛成就。运动DSA要求全国学校运动会级别的成绩，校内CCA参与并不足够。若孩子的运动项目不在这四项之列，此校没有DSA途径。",
    talentAreas: [
      "Malay Language",
      "Basketball (Boys)",
      "Floorball (Girls)",
      "Football (Boys)",
      "Netball (Girls)",
    ],
    sourceUrl: "https://www.tanjongkatongsec.moe.edu.sg/useful-links/dsa/",
  },
```

## 验证步骤
- [ ] `npm run build` 无报错
- [ ] 访问 /open-house-takeaways 可见 TKSS 卡片出现
- [ ] EN/ZH 切换正常

## 完成后
```
git add -A && git commit -m "content: add Tanjong Katong Secondary School to open house takeaways"
```
