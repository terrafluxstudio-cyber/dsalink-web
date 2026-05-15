/**
 * Merges keys from ./schools-i18n-data.json into locales/{en,zh,ms,ta}.json
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, "schools-i18n-data.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

for (const locale of ["en", "zh", "ms", "ta"]) {
  const p = path.join(__dirname, "..", "locales", `${locale}.json`);
  const j = JSON.parse(fs.readFileSync(p, "utf8"));
  const patch = data[locale];
  for (const [k, v] of Object.entries(patch)) {
    if (k in j) throw new Error(`${locale}.json already has ${k}`);
    j[k] = v;
  }
  fs.writeFileSync(p, JSON.stringify(j, null, 2) + "\n");
}
console.log("Merged schools + glossary keys into locales/*.json");
