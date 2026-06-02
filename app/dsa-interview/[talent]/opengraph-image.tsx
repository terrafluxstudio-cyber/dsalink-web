import { ImageResponse } from "next/og";
import { getTalentPage, TALENT_SLUGS } from "@/lib/talentPages";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 } as const;
export const alt = "DSA Interview Prep — DSALink Singapore";

/** Pre-generate one OG image per talent slug. */
export function generateImageMetadata() {
  return TALENT_SLUGS.map((slug) => ({
    id: slug,
    alt: `${slug} DSA interview prep — DSALink`,
    contentType: "image/png",
    size,
  }));
}

type Params = Promise<{ talent: string }>;

export default async function OG({ params }: { params: Params }) {
  const { talent: slug } = await params;
  const talent = getTalentPage(slug);

  const label = talent?.navLabel.en ?? "DSA Interview Prep";
  const hook =
    talent?.hook.en ??
    "DSA 2026 Singapore strategy guide — what trial coaches actually assess.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 72,
          background:
            "linear-gradient(145deg, #082a42 0%, #0c3d5c 45%, #134a6e 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Kicker — top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 18,
            letterSpacing: "0.18em",
            color: "#d4b86a",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 36, height: 2, background: "#d4b86a" }} />
          <span>DSALink · DSA Interview Prep</span>
        </div>

        {/* Talent name — H1 dominant */}
        <div
          style={{
            marginTop: 32,
            fontSize: 108,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            color: "#f8fafc",
            maxWidth: 1060,
          }}
        >
          {label}
        </div>

        {/* Hook tagline — secondary */}
        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            fontWeight: 500,
            lineHeight: 1.3,
            color: "rgba(248, 250, 252, 0.85)",
            maxWidth: 980,
          }}
        >
          {hook}
        </div>

        {/* Spacer pushes badge bar to bottom */}
        <div style={{ flex: 1 }} />

        {/* Badge bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 18,
            color: "rgba(248, 250, 252, 0.7)",
          }}
        >
          <span>147 schools</span>
          <span style={{ color: "#d4b86a" }}>·</span>
          <span>8 talent paths</span>
          <span style={{ color: "#d4b86a" }}>·</span>
          <span>2026 timeline</span>
          <span style={{ color: "#d4b86a" }}>·</span>
          <span>4 languages</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
