# Cursor Task: Auto-translate 214 Missing Keys to Malay (ms) and Tamil (ta)

## Overview

`locales/ms.json` and `locales/ta.json` are missing 214 keys that were added in recent tasks (open house guide questions, interview prep content, coaches directory UI). This task runs a one-off Node.js script to machine-translate all missing keys and write them back to the locale files.

**Machine translation quality is acceptable for this task.**

---

## Step 1: Install translation package (temporary)

```bash
npm install --save-dev @vitalets/google-translate-api
```

---

## Step 2: Create translation script

Create file `scripts/auto-translate.mjs` with this exact content:

```mjs
/**
 * One-off script to fill missing MS and TA translations.
 * Run: node scripts/auto-translate.mjs
 * Delete this file after running.
 */

import { createRequire } from 'module';
import { writeFileSync } from 'fs';
import { translate } from '@vitalets/google-translate-api';

const require = createRequire(import.meta.url);

const en = require('../locales/en.json');
const ms = require('../locales/ms.json');
const ta = require('../locales/ta.json');

const missingKeys = Object.keys(en).filter(k => !ms.hasOwnProperty(k));

console.log(`Translating ${missingKeys.length} missing keys to MS and TA...`);

const msResult = { ...ms };
const taResult = { ...ta };

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let done = 0;

for (const key of missingKeys) {
  const text = en[key];
  
  try {
    // Translate to Malay
    const msRes = await translate(text, { to: 'ms' });
    msResult[key] = msRes.text;

    await delay(300);

    // Translate to Tamil
    const taRes = await translate(text, { to: 'ta' });
    taResult[key] = taRes.text;

    done++;
    if (done % 10 === 0) {
      console.log(`  ${done}/${missingKeys.length} done...`);
    }

    await delay(300);
  } catch (err) {
    console.error(`  FAILED: ${key} — ${err.message}`);
    // Fall back to English
    msResult[key] = text;
    taResult[key] = text;
    await delay(1000); // longer delay after error
  }
}

// Preserve the original JSON structure — write as properly formatted JSON
const writeJson = (path, data) => {
  writeFileSync(path, JSON.stringify(data, null, 2) + '\n', 'utf8');
};

writeJson('./locales/ms.json', msResult);
writeJson('./locales/ta.json', taResult);

console.log(`\nDone! Wrote ${done} translations to ms.json and ta.json.`);
console.log('Please delete scripts/auto-translate.mjs after verifying.');
```

---

## Step 3: Run the script

```bash
node scripts/auto-translate.mjs
```

Expected output: `Translating 214 missing keys to MS and TA...` followed by progress updates.

If you see rate limit errors, wait 60 seconds and re-run. The script only adds missing keys (existing translations are preserved).

---

## Step 4: Verify

```bash
node -e "
const en = require('./locales/en.json');
const ms = require('./locales/ms.json');
const ta = require('./locales/ta.json');
const missingMs = Object.keys(en).filter(k => !ms[k]);
const missingTa = Object.keys(en).filter(k => !ta[k]);
console.log('Still missing from MS:', missingMs.length);
console.log('Still missing from TA:', missingTa.length);
"
```

Expected output:
```
Still missing from MS: 0
Still missing from TA: 0
```

---

## Step 5: Clean up

```bash
rm scripts/auto-translate.mjs
npm uninstall @vitalets/google-translate-api
```

---

## Step 6: Build check

```bash
npm run build
```

No TypeScript errors expected — the new keys are added to the JSON files, which are auto-typed via `DsaGuideStrings`.

---

## Git commit

```
git add locales/ms.json locales/ta.json
git commit -m "feat: add MS and TA machine translations for 214 missing i18n keys"
```

---

## Troubleshooting

**If `@vitalets/google-translate-api` throws `TooManyRequestsError`:**
- Add `await delay(2000)` after each pair of translations
- Or split into two runs: keys 0–106 first, then 107–213

**If the package fails to install:**
- Alternative: use `npm install translate` which uses DeepL free tier
- Change the import to: `import translate from 'translate';`
- Set language: `translate.engine = 'google'; translate.key = '';`
- Then: `const msText = await translate(text, { to: 'ms' });`

**If Tamil (ta) translations contain only question marks or boxes:**
- This means the terminal/file encoding is wrong
- The `writeFileSync` with `utf8` encoding should handle Tamil Unicode correctly
- Verify by checking: `grep "navDsaCoaches" locales/ta.json`
