import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";
export const alt = "Terramap — Industrial space, Central Florida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Default Open Graph card used for link previews (iMessage, Slack, WhatsApp,
 * LinkedIn, X, Facebook, etc.) whenever a page doesn't set its own og:image.
 *
 * Kept intentionally simple to match the site's editorial cream + display
 * type aesthetic: cream background, huge TERRAMAP wordmark, small tagline.
 * Property detail pages override this with the listing's cover photo (via
 * `openGraph.images` in the page's `generateMetadata`).
 */
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          background: "#F1EBDF",
          color: "#0F0E0B",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top row: small eyebrow label */}
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            fontWeight: 600,
            textTransform: "uppercase",
            color: "#6B6355",
          }}
        >
          Central Florida industrial
        </div>

        {/* Wordmark + tagline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 220,
              lineHeight: 0.9,
              fontWeight: 900,
              letterSpacing: -6,
              textTransform: "uppercase",
            }}
          >
            Terramap.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: 34,
              lineHeight: 1.2,
              maxWidth: 820,
              color: "#3B342A",
            }}
          >
            Warehouse, flex, and small-bay space — owned and operated
            in-house.
          </div>
        </div>

        {/* Bottom row: url */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: 4,
            fontWeight: 600,
            textTransform: "uppercase",
            color: "#6B6355",
          }}
        >
          <div style={{ display: "flex" }}>terramapproperties.vercel.app</div>
          <div style={{ display: "flex" }}>View spaces →</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
