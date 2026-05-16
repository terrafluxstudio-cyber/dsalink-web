# CURSOR TASK: 修复中文首页标题句号

## 任务描述
`locales/zh.json` 的 `heroTitle` 是首页最重要的 H1 标题，结尾带有中文句号（。）。按照项目规范，中文标题不加句号。

## 涉及文件
- `locales/zh.json`（唯一修改文件）

## 变更位置
文件第 2 行，`heroTitle` 字段。

## 精确改动

**改前：**
```json
"heroTitle": "孩子有才艺，就有学校等着他。",
```

**改后：**
```json
"heroTitle": "孩子有才艺，就有学校等着他",
```

只去掉结尾的句号（。），其余内容不变。

## 验证步骤
- [ ] 保存后确认 `locales/zh.json` 是合法 JSON（无语法错误）
- [ ] `npx tsc --noEmit` 无报错
- [ ] 本地 `npm run dev`，切换语言至中文，首页 Hero 标题显示"孩子有才艺，就有学校等着他"，无句号
