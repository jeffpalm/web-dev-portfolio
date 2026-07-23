import { useState } from 'react';

export default function Contact({ portfolio }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard?.writeText(portfolio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="contact" data-screen-label="06 Contact" className="sec sec-contact">
      <div className="sec-head">
        <span className="sec-num">06 //</span>
        <span className="sec-name">contact</span>
      </div>
      <div className="contact-inner">
        <h2 className="contact-h">
          Looking for a senior or staff engineer
          <br />
          who's <em>actually</em> shipped the hard stuff?
        </h2>
        <p className="contact-p">
          I'm open to senior / staff / lead roles — full-stack, platform, or DX-leaning. Remote
          friendly. Dallas-based. Reply rate: same day.
        </p>
        <div className="contact-actions">
          <button className="cta cta-primary cta-big" onClick={copy}>
            <span>{copied ? 'copied ✓' : portfolio.email}</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 1h6v8M3 4h6v9H3z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button
            className="cta cta-ghost cta-big"
            onClick={() => window.dispatchEvent(new CustomEvent('download-resume'))}
          >
            <span>Download resume</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1v9m0 0L3 6m4 4l4-4M1 13h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </button>
        </div>
        <div className="contact-links">
          <a href={'https://' + portfolio.github} target="_blank" rel="noopener noreferrer">
            → {portfolio.github}
          </a>
          <a href={'https://' + portfolio.linkedin} target="_blank" rel="noopener noreferrer">
            → {portfolio.linkedin}
          </a>
        </div>
      </div>
      <footer className="foot">
        <span>
          © {new Date().getFullYear()} {portfolio.name}
        </span>
        <span className="foot-mid">
          handcrafted in vim · 0 frameworks were harmed (many were used)
        </span>
        <span>v2.0.1 — built {new Date().toLocaleDateString()}</span>
      </footer>
    </section>
  );
}
