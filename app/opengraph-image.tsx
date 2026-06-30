import { ImageResponse } from "next/og";

// Share card for the JFrog application page, in JFrog's verified brand: a deep
// navy field (#0a1428 / #122342), the JFrog green earned as one accent, and a
// flat, rounded, supply-chain look. Rendered by next/og (Satori), so it uses a
// flexbox-only CSS subset and plain hex. Text is Latin so it renders reliably.

export const alt =
  "Bar Moshe for JFrog — GenAI & Competitive Intelligence Engineer. MCPs, Skills, RAG, end to end.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// A flat isometric cube — JFrog's package / supply-chain motif.
function Cube({ s = 56 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 100 100">
      <polygon points="50,8 88,30 88,70 50,92 12,70 12,30" fill="#40be46" />
      <polygon points="50,8 88,30 50,52 12,30" fill="#57d65c" />
      <polygon points="50,52 88,30 88,70 50,92" fill="#36a13b" />
    </svg>
  );
}

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0a1428",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "66px 72px 52px",
            backgroundImage:
              "radial-gradient(760px 480px at 90% 0%, rgba(64,190,70,0.22), transparent 60%)",
          }}
        >
          {/* brand row */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <Cube s={56} />
            <div
              style={{
                display: "flex",
                marginLeft: 18,
                fontSize: 40,
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              Bar Moshe
            </div>
            <div
              style={{
                display: "flex",
                marginLeft: 16,
                padding: "8px 16px",
                borderRadius: 999,
                border: "1px solid rgba(64,190,70,0.6)",
                backgroundColor: "rgba(64,190,70,0.12)",
                fontSize: 22,
                fontWeight: 700,
                color: "#57d65c",
              }}
            >
              × JFrog
            </div>
          </div>

          {/* headline */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 66,
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                maxWidth: "1000px",
              }}
            >
              Scattered sources into shared knowledge.
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 30,
                color: "#c7d0e0",
                marginTop: "20px",
                maxWidth: "940px",
              }}
            >
              GenAI &amp; Competitive Intelligence: MCP servers, Claude skills,
              agentic pipelines, and RAG, with the cloud around them.
            </div>
          </div>

          {/* foot */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 25,
              color: "#8794ad",
            }}
          >
            <div style={{ display: "flex" }}>github.com/barmoshe</div>
            <div style={{ display: "flex", fontWeight: 700, color: "#57d65c" }}>
              GenAI · MCP &amp; Skills · RAG · DevSecOps
            </div>
          </div>
        </div>

        {/* base strip */}
        <div
          style={{
            display: "flex",
            height: "14px",
            background:
              "linear-gradient(90deg, #36a13b 0%, #40be46 50%, #57d65c 100%)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
