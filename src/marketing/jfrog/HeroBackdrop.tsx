/**
 * HeroBackdrop — the decorative field behind the hero, replicating jfrog.com's
 * hero: faint wireframe isometric cubes flanking the headline and flowing wave
 * lines crossing the navy. Purely decorative (aria-hidden), low-opacity green /
 * steel strokes, no animation, so it never competes with the copy.
 */

// One wireframe isometric cube, drawn from a hexagon outline with the three
// inner seams. Stroke only; colour + opacity come from the caller.
function WireCube({ cx, cy, r, stroke }: { cx: number; cy: number; r: number; stroke: string }) {
  // hexagon corners (flat-top isometric)
  const top = [cx, cy - r];
  const tr = [cx + r * 0.866, cy - r * 0.5];
  const br = [cx + r * 0.866, cy + r * 0.5];
  const bot = [cx, cy + r];
  const bl = [cx - r * 0.866, cy + r * 0.5];
  const tl = [cx - r * 0.866, cy - r * 0.5];
  const ctr = [cx, cy];
  const f = (p: number[]) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`;
  return (
    <g fill="none" stroke={stroke} strokeWidth="1">
      <polygon points={`${f(top)} ${f(tr)} ${f(br)} ${f(bot)} ${f(bl)} ${f(tl)}`} />
      <line x1={ctr[0]} y1={ctr[1]} x2={top[0]} y2={top[1]} />
      <line x1={ctr[0]} y1={ctr[1]} x2={br[0]} y2={br[1]} />
      <line x1={ctr[0]} y1={ctr[1]} x2={bl[0]} y2={bl[1]} />
    </g>
  );
}

export default function HeroBackdrop() {
  return (
    <svg
      className="jf-backdrop"
      viewBox="0 0 1440 620"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* flowing wave lines (JFrog's signature) */}
      <g fill="none" stroke="#2b6cff" strokeWidth="1" opacity="0.18">
        {[0, 14, 28, 42, 56].map((d) => (
          <path
            key={d}
            d={`M-40,${430 + d} C 360,${330 + d} 760,${520 + d} 1480,${300 + d}`}
          />
        ))}
      </g>
      <g fill="none" stroke="#40be46" strokeWidth="1" opacity="0.12">
        {[0, 16, 32].map((d) => (
          <path
            key={d}
            d={`M-40,${150 - d} C 420,${250 - d} 820,${90 - d} 1480,${220 - d}`}
          />
        ))}
      </g>

      {/* wireframe isometric cubes flanking the centred headline */}
      <g opacity="0.5"><WireCube cx={120} cy={360} r={120} stroke="#3a7d3e" /></g>
      <g opacity="0.35"><WireCube cx={150} cy={150} r={56} stroke="#3a5a9a" /></g>
      <g opacity="0.5"><WireCube cx={1330} cy={350} r={130} stroke="#3a7d3e" /></g>
      <g opacity="0.3"><WireCube cx={1280} cy={140} r={62} stroke="#3a5a9a" /></g>
    </svg>
  );
}
