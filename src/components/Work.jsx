import { useState } from 'react';
import Scramble from './Scramble.jsx';

function ProjectCard({ p, i, total }) {
  const [hover, setHover] = useState(false);
  return (
    <article
      className={'proj ' + (p.confidential ? 'proj-conf ' : '') + (hover ? 'is-hover' : '')}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="proj-row">
        <span className="proj-idx">
          {String(i + 1).padStart(2, '0')}
          <span className="proj-idx-tot">/{String(total).padStart(2, '0')}</span>
        </span>
        <div className="proj-mid">
          <div className="proj-meta">
            <span className="proj-year">{p.year}</span>
            <span className="proj-sep">·</span>
            <span className="proj-org">{p.org}</span>
            {p.confidential && <span className="proj-badge">internal</span>}
          </div>
          <h3 className="proj-title">
            <Scramble text={p.title} className="proj-title-text" />
          </h3>
          <p className="proj-blurb">{p.blurb}</p>
          <div className="proj-stack">
            {p.stack.map((s, k) => (
              <span key={k} className="chip">
                {s}
              </span>
            ))}
          </div>
          {p.metrics && (
            <div className="proj-metrics">
              {p.metrics.map((m, k) => (
                <div key={k} className="metric">
                  <span className="metric-k">{m.k}</span>
                  <span className="metric-v">{m.v}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="proj-end">
          <span className="proj-arrow">↗</span>
          <span className="proj-role">{p.role}</span>
        </div>
      </div>
      <div className="proj-underline" />
    </article>
  );
}

export default function Work({ portfolio }) {
  return (
    <section id="work" data-screen-label="03 Work" className="sec sec-work">
      <div className="sec-head">
        <span className="sec-num">03 //</span>
        <span className="sec-name">selected work</span>
        <span className="sec-aside">
          hover to focus · <kbd>g</kbd> <kbd>w</kbd> to jump here
        </span>
      </div>
      <div className="proj-list">
        {portfolio.work.map((p, i) => (
          <ProjectCard key={p.id} p={p} i={i} total={portfolio.work.length} />
        ))}
      </div>
    </section>
  );
}
