import { useEffect, useState } from 'react';
import HeroCanvas from './HeroCanvas.jsx';
import Scramble from './Scramble.jsx';

export default function Hero({ accent, theme, portfolio }) {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const dallasTime = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'America/Chicago',
  }).format(time);

  return (
    <section id="home" data-screen-label="01 Home" className="hero">
      <HeroCanvas accent={accent} theme={theme} />
      <div className="hero-grid" />
      <div className="hero-inner">
        <div className="hero-meta">
          <span className="dot dot-live" />
          <span>
            {portfolio.location} · {dallasTime} CT
          </span>
        </div>
        <h1 className="hero-title">
          <Scramble text="Jeff" className="hero-title-line" />
          <Scramble text="Palmer." className="hero-title-line accent-text" />
        </h1>
        <p className="hero-sub">
          Full-stack engineer building enterprise systems
          <br />
          that don't feel like enterprise systems. Currently{' '}
          <span className="accent-text">@ {portfolio.current.company}</span>.
          <br />
          <em>Framework-agnostic by design.</em>
        </p>
        <div className="hero-cta-row">
          <a href="#work" className="cta cta-primary">
            <span>See selected work</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 7h12M8 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </a>
          <a href="#contact" className="cta cta-ghost">
            Get in touch
          </a>
          <button
            className="cta cta-ghost cta-kbd"
            onClick={() => window.dispatchEvent(new CustomEvent('open-terminal'))}
          >
            <kbd>~</kbd> Open terminal
          </button>
        </div>
        <div className="hero-foot">
          <span>scroll</span>
          <span className="scroll-line" />
          <span>
            or press <kbd>j</kbd>
          </span>
        </div>
      </div>
    </section>
  );
}
