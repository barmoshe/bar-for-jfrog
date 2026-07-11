'use client';

import { useEffect, useRef } from 'react';
import PipelineFlow from './PipelineFlow';
import HeroBackdrop from './HeroBackdrop';
import './jfrog.css';

/**
 * JfrogApp — an ad-hoc, personalized application page for Bar Moshe's JFrog
 * applications (GenAI & Competitive Intelligence Engineer, and Software
 * Engineer). Built in JFrog's verified visual language (read live off
 * jfrog.com): the deep navy canvas (#122342), the JFrog green (#40BE46) used
 * sparingly, Open Sans, green pill CTAs, rounded cards, a liquid/supply-chain
 * flow motif. English / LTR. Self-contained, every visual built fresh. Motion
 * respects prefers-reduced-motion and the page is legible with no JS.
 */

const EMAIL =
  'mailto:1barmoshe1@gmail.com?subject=' +
  encodeURIComponent('Application: Bar Moshe × JFrog');
const CV = '/Bar_Moshe_CV_JFrog.pdf';
const WHATSAPP = 'https://wa.me/972546561465';
const LINKEDIN = 'https://www.linkedin.com/in/barmoshe/';
const GITHUB = 'https://github.com/barmoshe';

type Fit = { k: string; body: string };

const FIT: Fit[] = [
  {
    k: 'AI-native engineering',
    body: 'I ship production features through Claude Code, and build the MCP servers and Claude / Codex skills those tools connect to. MDP is on npm with its own MCP server.',
  },
  {
    k: 'Backend systems and APIs',
    body: 'Full-stack and API work in production at Joomsy, plus a Go worker in a cross-language Temporal service featured on Temporal’s Code Exchange.',
  },
  {
    k: 'Concept to production',
    body: 'I ship ideas to running software. Several are open source on npm, with full ownership from idea to deploy.',
  },
  {
    k: 'Cloud-native and DevOps',
    body: 'Docker, Kubernetes, Terraform, and CI/CD, plus publishing versioned packages to registries.',
  },
];

type Proof = { tag: string; title: string; desc: string; href: string; open: string };

const PROOF: Proof[] = [
  {
    tag: 'Open source · MCP server',
    title: 'MDP',
    desc: 'A Markdown-to-documents compiler on npm, with its own MCP server and plugins.',
    href: 'https://barmoshe.github.io/mdp/',
    open: 'Open MDP',
  },
  {
    tag: 'Agentic · RAG',
    title: 'Catalogue Orchestrator',
    desc: 'A local-first AI video orchestrator: plans edits over a vector index (RAG), then renders with ffmpeg.',
    href: 'https://github.com/barmoshe/catalogue-orchestrator',
    open: 'View on GitHub',
  },
  {
    tag: 'Open source · npm',
    title: 'Entailer',
    desc: 'An open-source logic-validity toolkit released to npm, with a live site.',
    href: 'https://github.com/barmoshe/entailer',
    open: 'View on GitHub',
  },
  {
    tag: 'Orchestration · external',
    title: 'Cross-language Temporal',
    desc: 'One Temporal workflow across Go, Python, and TypeScript. Featured on Temporal’s Code Exchange.',
    href: 'https://temporal.io/code-exchange/cross-language-data-processing-service-with-temporal',
    open: 'Read the write-up',
  },
  {
    tag: 'LLM · agentic tooling',
    title: 'Biome Synth',
    desc: 'A Claude skill that builds a project brief, then the browser instrument I built from it.',
    href: 'https://biome-synth.lovable.app/',
    open: 'Play the app',
  },
  {
    tag: 'Full-stack · React + Node',
    title: 'Israelify',
    desc: 'A Spotify-style app: a React frontend over a Node and MongoDB API.',
    href: 'https://github.com/barmoshe/Israelify-backend',
    open: 'View the code',
  },
];

type Role = { title: string; org: string; time: string; note: string };

const EXPERIENCE: Role[] = [
  {
    title: 'Software Developer',
    org: 'Joomsy',
    time: '2025 – present',
    note: 'Early-stage startup, team of five. Primary developer across full-stack and DevOps, with broad ownership over engineering and product.',
  },
  {
    title: 'Customer Support Engineer',
    org: 'Wochit',
    time: '2021 – present',
    note: 'Technical support for users of a cloud video editor at scale, turning user feedback into product improvements alongside the development team.',
  },
];

const EDUCATION: string[] = [
  'B.Sc. Computer Science, Afeka College of Engineering (2020 – 2023).',
  'DevOps track at Wix: Amazon EKS, Kubernetes, Terraform, and microservices.',
  'Full-Stack Bootcamp, Coding Academy: Node.js, React, MongoDB.',
];

const STRIP = [
  'LLMs',
  'MCP servers',
  'Claude Skills',
  'Agentic systems',
  'RAG',
  'Python · TypeScript · Go',
  'Docker · Kubernetes',
  'CI/CD',
];

export default function JfrogApp() {
  const scope = useRef<HTMLDivElement | null>(null);

  // Lightweight scroll reveal: add `.is-in` as each [data-reveal] enters. No
  // dependency; CSS settles the static frame when reduced motion is requested.
  useEffect(() => {
    const root = scope.current;
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="jf-root" ref={scope}>
      <a className="jf-skip" href="#main">Skip to content</a>

      {/* ── Nav ─────────────────────────────────────────────── */}
      <header className="jf-nav">
        <div className="jf-nav__inner">
          <a className="jf-brand" href="#main" aria-label="Bar Moshe">
            <span className="jf-brand__mark" aria-hidden="true" />
            <span className="jf-wordmark">Bar Moshe</span>
          </a>
          <span className="jf-nav__tag">for JFrog</span>
          <nav className="jf-nav__links" aria-label="Sections">
            <a className="jf-nav__link" href="#fit">How I fit</a>
            <a className="jf-nav__link" href="#work">Work</a>
            <a className="jf-nav__link" href="#contact">Contact</a>
          </nav>
          <div className="jf-nav__cta">
            <a className="jf-btn jf-btn--ghost jf-btn--sm" href={CV} target="_blank" rel="noopener noreferrer">Download CV</a>
            <a className="jf-btn jf-btn--primary jf-btn--sm" href={EMAIL}>Get in touch</a>
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="jf-hero">
          <HeroBackdrop />
          <div className="jf-hero__inner">
            <p className="jf-eyebrow" data-reveal>
              <span className="jf-eyebrow__dot" aria-hidden="true" />
              For JFrog · Software Engineer &amp; GenAI / Competitive Intelligence Engineer
            </p>
            <h1 className="jf-title" data-reveal>
              AI Builder &amp; <span className="jf-hl">Full-Stack Engineer</span>
            </h1>
            <p className="jf-lede" data-reveal>
              I ship production features through Claude Code, build the MCP
              servers and Claude skills those tools connect to, and own the
              full-stack and DevOps around them. Open source on npm, with a
              service featured on Temporal&apos;s Code Exchange.
            </p>
            <div className="jf-hero__cta" data-reveal>
              <a className="jf-btn jf-btn--primary" href={EMAIL}>
                Get in touch
                <span className="jf-btn__arrow" aria-hidden="true">→</span>
              </a>
              <a className="jf-btn jf-btn--ghost" href={CV} target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </div>
          </div>
        </section>

        {/* ── Pipeline panel + capability tabs ──────────────── */}
        <section className="jf-panelwrap">
          <div className="jf-panel" data-reveal>
            <header className="jf-section__head jf-section__head--center">
              <p className="jf-kicker">The pipeline</p>
              <h2 className="jf-h2">Collect, ground, synthesise, <span className="jf-hl">deliver</span>.</h2>
              <div className="jf-rule" aria-hidden="true" />
            </header>
            <div className="jf-panel__pipe">
              <PipelineFlow />
            </div>
            <div className="jf-tabs">
              {STRIP.map((s) => (
                <span className="jf-tab" key={s}>{s}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── How I fit (areas mapped to the role) ──────────── */}
        <section id="fit" className="jf-section">
          <div className="jf-wrap">
            <header className="jf-section__head jf-section__head--center" data-reveal>
              <p className="jf-kicker">Focus areas</p>
              <h2 className="jf-h2">What I do, mapped to the <span className="jf-hl">role</span>.</h2>
              <div className="jf-rule" aria-hidden="true" />
            </header>
            <div className="jf-fit__grid">
              {FIT.map((f, i) => (
                <article className="jf-fcard" key={f.k} data-reveal>
                  <span className="jf-fcard__no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="jf-fcard__k">{f.k}</h3>
                  <p className="jf-fcard__body">{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience + Education ────────────────────────── */}
        <section className="jf-section jf-section--soft">
          <div className="jf-wrap">
            <header className="jf-section__head jf-section__head--center" data-reveal>
              <p className="jf-kicker">Background</p>
              <h2 className="jf-h2">Experience and <span className="jf-hl">education</span>.</h2>
              <div className="jf-rule" aria-hidden="true" />
            </header>
            <div className="jf-cv">
              <div className="jf-cv__col" data-reveal>
                <h3 className="jf-cv__h">Experience</h3>
                <ul className="jf-cv__list">
                  {EXPERIENCE.map((r) => (
                    <li className="jf-cv__item" key={r.org}>
                      <div className="jf-cv__row">
                        <span className="jf-cv__role">{r.title}</span>
                        <span className="jf-cv__org">{r.org}</span>
                        <span className="jf-cv__time">{r.time}</span>
                      </div>
                      <p className="jf-cv__note">{r.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="jf-cv__col" data-reveal>
                <h3 className="jf-cv__h">Education and training</h3>
                <ul className="jf-cv__list">
                  {EDUCATION.map((e) => (
                    <li className="jf-cv__edu" key={e}>{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Selected work ─────────────────────────────────── */}
        <section id="work" className="jf-section">
          <div className="jf-wrap">
            <header className="jf-section__head jf-section__head--center" data-reveal>
              <p className="jf-kicker">Selected work</p>
              <h2 className="jf-h2">Selected <span className="jf-hl">work</span>.</h2>
              <div className="jf-rule" aria-hidden="true" />
              <p className="jf-sub">A live link for each.</p>
            </header>
            <div className="jf-proof__grid">
              {PROOF.map((p) => (
                <a key={p.title} className="jf-pcard" href={p.href} target="_blank" rel="noopener noreferrer" data-reveal>
                  <span className="jf-pcard__tag">{p.tag}</span>
                  <h3 className="jf-pcard__title">{p.title}</h3>
                  <p className="jf-pcard__desc">{p.desc}</p>
                  <span className="jf-pcard__link" aria-hidden="true">{p.open} →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact close ─────────────────────────────────── */}
        <section id="contact" className="jf-cta">
          <div className="jf-cta__inner" data-reveal>
            <h2 className="jf-cta__title">Let&apos;s talk.</h2>
            <p className="jf-cta__sub">
              Email or WhatsApp me, or browse the code. My CV is a click away.
            </p>
            <div className="jf-cta__links">
              <a className="jf-btn jf-btn--primary" href={EMAIL}>Email me</a>
              <a className="jf-btn jf-btn--ghost" href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a className="jf-btn jf-btn--ghost" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="jf-btn jf-btn--ghost" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="jf-btn jf-btn--ghost" href={CV} target="_blank" rel="noopener noreferrer">Download CV</a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="jf-footer">
        <div className="jf-footer__inner">
          <p className="jf-footer__tag">
            An application page Bar Moshe built in JFrog&apos;s visual language, for the
            Software Engineer and GenAI &amp; Competitive Intelligence Engineer roles.
            Not affiliated with JFrog.
          </p>
          <span className="jf-footer__meta">Tel Aviv · 2026</span>
        </div>
      </footer>
    </div>
  );
}
