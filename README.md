# bar-for-jfrog

An ad-hoc, personalized job-application page Bar Moshe built for the **GenAI &
Competitive Intelligence Engineer** role at **JFrog** (Tel Aviv, Hybrid), built in
JFrog's own visual language (read live off jfrog.com): the deep navy canvas, the
JFrog green earned as one accent, Open Sans, pill CTAs, rounded cards. The hero
reframes JFrog's supply-chain "liquid flow" motif as a competitive-intelligence
pipeline (sources to collect to RAG / vectors to an LLM engine to a delivered
insight).

English, LTR. Not affiliated with JFrog. `robots: noindex` — a private, shareable
link sent with the application.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Plain CSS (scoped under `.jf-root`), no Tailwind, no GSAP — motion is CSS/SVG,
  gated on `prefers-reduced-motion`
- `next/og` share card (`app/opengraph-image.tsx`)

## Develop

```bash
npm install
npm run dev      # http://localhost:3090
npm run build
```

## Layout

- `app/` — route shell (`layout.tsx` sets `lang="en" dir="ltr"`, `page.tsx` with fonts + metadata, `opengraph-image.tsx`)
- `src/marketing/jfrog/` — `JfrogApp` (the page), `PipelineFlow` (the hero graphic), `jfrog.css`
- `public/cv/Bar_Moshe_CV.pdf` — CV linked from the page

Built by Bar Moshe, in JFrog's brand, for this application.
