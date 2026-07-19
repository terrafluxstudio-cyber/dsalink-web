/**
 * Pre-render one OG image per talent slug into `public/og/`.
 *
 * Why this exists: these used to be a Next metadata route
 * (`app/dsa-interview/[talent]/opengraph-image.tsx`). That route cannot be
 * statically prerendered — the `[__metadata_id__]` segment isn't enumerable —
 * so every deploy invalidated the CDN copies and the next crawler to come
 * along paid a fresh ~1s render, per image, per region. At 54 talents and ~63
 * deploys a month that was the bulk of the project's Fluid CPU.
 *
 * Static files in `public/` cost zero runtime CPU, so we generate them here
 * instead and commit the output.
 *
 * Run after editing talent labels/hooks:  npm run og
 */
import { ImageResponse } from "next/og";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { getTalentPage, TALENT_SLUGS } from "../lib/talentPages";

const SIZE = { width: 1200, height: 630 } as const;
const OUT_DIR = path.join(process.cwd(), "public", "og");

function card(label: string, hook: string) {
  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 72,
        background:
          "linear-gradient(145deg, #082a42 0%, #0c3d5c 45%, #134a6e 100%)",
        color: "#f8fafc",
        fontFamily: "system-ui, sans-serif",
      },
      children: [
        // Kicker
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontSize: 18,
              letterSpacing: "0.18em",
              color: "#d4b86a",
              fontWeight: 700,
              textTransform: "uppercase",
            },
            children: [
              {
                type: "div",
                props: { style: { width: 36, height: 2, background: "#d4b86a" } },
              },
              { type: "span", props: { children: "DSALink · DSA Interview Prep" } },
            ],
          },
        },
        // Talent name
        {
          type: "div",
          props: {
            style: {
              marginTop: 32,
              fontSize: 108,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "#f8fafc",
              maxWidth: 1060,
            },
            children: label,
          },
        },
        // Hook
        {
          type: "div",
          props: {
            style: {
              marginTop: 28,
              fontSize: 32,
              fontWeight: 500,
              lineHeight: 1.3,
              color: "rgba(248, 250, 252, 0.85)",
              maxWidth: 980,
            },
            children: hook,
          },
        },
        { type: "div", props: { style: { flex: 1 } } },
        // Badge bar
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 20,
              fontSize: 18,
              color: "rgba(248, 250, 252, 0.7)",
            },
            children: [
              { type: "span", props: { children: "147 schools" } },
              { type: "span", props: { style: { color: "#d4b86a" }, children: "·" } },
              { type: "span", props: { children: "All talent paths" } },
              { type: "span", props: { style: { color: "#d4b86a" }, children: "·" } },
              { type: "span", props: { children: "2026 timeline" } },
              { type: "span", props: { style: { color: "#d4b86a" }, children: "·" } },
              { type: "span", props: { children: "4 languages" } },
            ],
          },
        },
      ],
    },
  };
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  let written = 0;
  for (const slug of TALENT_SLUGS) {
    const talent = getTalentPage(slug);
    if (!talent) {
      console.warn(`  skip ${slug} — no talent record`);
      continue;
    }

    const image = new ImageResponse(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      card(talent.navLabel.en, talent.hook.en) as any,
      { ...SIZE },
    );
    const buf = Buffer.from(await image.arrayBuffer());
    await writeFile(path.join(OUT_DIR, `talent-${slug}.png`), buf);
    written += 1;
  }

  console.log(`OG images: wrote ${written} file(s) to public/og/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
