import sharp from "sharp";
import path from "path";

/** Cream / checkerboard fill baked into Jimeng export — not part of the bow. */
function isCreamBg(r: number, g: number, b: number) {
  const sat = Math.max(r, g, b) - Math.min(r, g, b);
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  return sat < 32 && lum > 198;
}

async function convertRibbonBow() {
  const src = path.resolve(
    process.env.HOME!,
    "Desktop/jimeng-2026-05-24-4283.png"
  );

  // Display size: w-80 (320px) ~ w-96 (384px), 2x retina → export at 800px
  const OUTPUT_WIDTH = 800;

  const { data, info } = await sharp(src)
    .resize(OUTPUT_WIDTH, OUTPUT_WIDTH, { fit: "fill" })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Remove cream/white background from AI-generated image
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    data[i + 3] = isCreamBg(r, g, b) ? 0 : 255;
  }

  await sharp(data, { raw: info })
    .webp({ quality: 88, alphaQuality: 90 })
    .toFile(path.resolve("public/ribbon-bow.webp"));

  console.log(`Done: ribbon-bow.webp (${OUTPUT_WIDTH}×${OUTPUT_WIDTH})`);
}

async function main() {
  await convertRibbonBow();

  await sharp("public/blog/dsa-open-house-hero.jpg")
    .webp({ quality: 80 })
    .toFile("public/blog/dsa-open-house-hero.webp");
  console.log("Done: dsa-open-house-hero.webp");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
