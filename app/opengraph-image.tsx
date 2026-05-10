import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "DSALink — Singapore secondary school PSLE COP and open houses";

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
          Singapore PSLE COP · Secondary open houses · 2026
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 20,
            opacity: 0.88,
            maxWidth: 820,
            lineHeight: 1.45,
          }}
        >
          Placeholder share preview — upload a final 1200×630 PNG in{" "}
          <span style={{ opacity: 0.95 }}>public/</span> when ready.
        </div>
      </div>
    ),
    { ...size },
  );
}
