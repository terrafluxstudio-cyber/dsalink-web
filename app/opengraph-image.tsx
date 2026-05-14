import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "DSALink — DSA 2026 Singapore strategy guide, secondary school directory, and open houses";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

/**
 * Placeholder Open Graph image (1200×630). Replace with a static branded
 * asset in `public/` later if you prefer full design control.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background:
            "linear-gradient(145deg, #082a42 0%, #0c3d5c 45%, #134a6e 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700, letterSpacing: "-0.02em" }}>
          DSALink
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 30,
            fontWeight: 600,
            color: "#d4b86a",
            maxWidth: 900,
            lineHeight: 1.25,
          }}
        >
          Beyond PSLE · DSA 2026 Strategy Guide
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 22,
            opacity: 0.9,
            maxWidth: 820,
            lineHeight: 1.45,
          }}
        >
          The middle-stream pathway to a better-fit secondary school — before PSLE results are released.
        </div>
        <div
          style={{
            marginTop: 32,
            display: "flex",
            gap: 24,
            fontSize: 16,
            opacity: 0.75,
          }}
        >
          <span>147 Singapore secondary schools</span>
          <span>·</span>
          <span>Interview prep</span>
          <span>·</span>
          <span>PSLE COP data</span>
          <span>·</span>
          <span>Open house calendar</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
