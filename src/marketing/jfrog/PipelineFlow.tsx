/**
 * PipelineFlow — the hero centerpiece. Reframes JFrog's supply-chain "liquid
 * flow" motif as a competitive-intelligence pipeline: sources are collected,
 * grounded against a vector store (RAG), synthesised by an LLM "engine", and
 * delivered as an insight to the right stakeholder. Flat, rounded, deep-navy
 * with the JFrog green earned along the flow. Pure inline SVG; the travelling
 * pulse, flow dashes and engine rings are CSS, gated on prefers-reduced-motion
 * in jfrog.css so the static frame stays fully legible. LTR: flow reads left -> right.
 */

// stage chips, ordered left -> right (LTR flow). cx = chip centre.
const STAGES = [
  { cx: 66, kind: "sources", label: "Sources" },
  { cx: 208, kind: "collect", label: "Collect" },
  { cx: 350, kind: "rag", label: "RAG · Vectors" },
  { cx: 492, kind: "llm", label: "LLM" },
  { cx: 634, kind: "insight", label: "Insight" },
];

const CHIP_W = 116;
const CHIP_H = 78;
const CHIP_Y = 190;
const WIRE_Y = CHIP_Y + CHIP_H / 2; // 229
const ICON_Y = CHIP_Y + 28; // 218
const LABEL_Y = CHIP_Y + 60; // 250

// A small glyph per stage, centred on (cx, cy). Stroke = green (jf-pipe__icon).
function StageIcon({ kind, cx, cy }: { kind: string; cx: number; cy: number }) {
  if (kind === "sources") {
    // three source nodes feeding forward
    return (
      <g className="jf-pipe__icon">
        <circle cx={cx - 8} cy={cy - 7} r="3.4" />
        <circle cx={cx - 8} cy={cy + 7} r="3.4" />
        <circle cx={cx - 8} cy={cy} r="3.4" />
        <line x1={cx - 4} y1={cy - 7} x2={cx + 8} y2={cy} />
        <line x1={cx - 4} y1={cy} x2={cx + 8} y2={cy} />
        <line x1={cx - 4} y1={cy + 7} x2={cx + 8} y2={cy} />
        <circle cx={cx + 9} cy={cy} r="2.6" fill="currentColor" stroke="none" />
      </g>
    );
  }
  if (kind === "collect") {
    // funnel
    return (
      <g className="jf-pipe__icon">
        <polyline points={`${cx - 10},${cy - 8} ${cx + 10},${cy - 8} ${cx + 2},${cy + 1} ${cx + 2},${cy + 9} ${cx - 2},${cy + 9} ${cx - 2},${cy + 1}`} />
      </g>
    );
  }
  if (kind === "rag") {
    // database cylinder (vector store)
    return (
      <g className="jf-pipe__icon">
        <ellipse cx={cx} cy={cy - 7} rx="10" ry="3.6" />
        <path d={`M${cx - 10},${cy - 7} L${cx - 10},${cy + 7}`} />
        <path d={`M${cx + 10},${cy - 7} L${cx + 10},${cy + 7}`} />
        <path d={`M${cx - 10},${cy} A10 3.6 0 0 0 ${cx + 10},${cy}`} />
        <path d={`M${cx - 10},${cy + 7} A10 3.6 0 0 0 ${cx + 10},${cy + 7}`} />
      </g>
    );
  }
  if (kind === "insight") {
    // delivered answer: check inside a soft target
    return (
      <g className="jf-pipe__icon">
        <circle cx={cx} cy={cy} r="10" />
        <polyline points={`${cx - 5},${cy} ${cx - 1},${cy + 4} ${cx + 6},${cy - 5}`} />
      </g>
    );
  }
  // llm: the brand cube / diamond
  return (
    <polygon
      points={`${cx},${cy - 10} ${cx + 10},${cy} ${cx},${cy + 10} ${cx - 10},${cy}`}
      fill="var(--jf-green)"
    />
  );
}

export default function PipelineFlow() {
  const llmCx = 492;
  const engineY = 150;
  return (
    <svg
      className="jf-pipe"
      viewBox="0 0 700 300"
      role="img"
      aria-label="Competitive-intelligence pipeline: sources are collected, grounded against a vector store with RAG, synthesised by an LLM, and delivered as an insight to the right stakeholder"
    >
      {/* connector wire (LTR), behind the chips */}
      <line className="jf-pipe__wire" x1="66" y1={WIRE_Y} x2="634" y2={WIRE_Y} />
      <line className="jf-pipe__flow" x1="66" y1={WIRE_Y} x2="634" y2={WIRE_Y} />

      {/* flow chevrons pointing right, in the gaps between chips */}
      {[137, 279, 421, 563].map((x) => (
        <polyline
          key={x}
          className="jf-pipe__arrow"
          points={`${x - 6},${WIRE_Y - 6} ${x + 2},${WIRE_Y} ${x - 6},${WIRE_Y + 6}`}
        />
      ))}

      {/* the LLM engine: a pulsing core with expanding rings above the LLM chip */}
      <line className="jf-pipe__wire" x1={llmCx} y1={engineY + 8} x2={llmCx} y2={CHIP_Y} />
      <circle className="jf-pipe__ring" cx={llmCx} cy={engineY} r="14" />
      <circle className="jf-pipe__ring jf-pipe__ring--2" cx={llmCx} cy={engineY} r="14" />
      <circle className="jf-pipe__core" cx={llmCx} cy={engineY} r="7" />

      {/* stage chips */}
      {STAGES.map((s) => (
        <g key={s.label}>
          <rect
            className="jf-pipe__chip"
            x={s.cx - CHIP_W / 2}
            y={CHIP_Y}
            width={CHIP_W}
            height={CHIP_H}
            rx={8}
          />
          <StageIcon kind={s.kind} cx={s.cx} cy={ICON_Y} />
          <text className="jf-pipe__label" x={s.cx} y={LABEL_Y} textAnchor="middle">
            {s.label}
          </text>
        </g>
      ))}

      {/* travelling pulse along the wire */}
      <circle className="jf-pipe__pulse" r="5.5" fill="var(--jf-green)">
        <animateMotion dur="3.2s" repeatCount="indefinite" path={`M66,${WIRE_Y} L634,${WIRE_Y}`} />
      </circle>
    </svg>
  );
}
