import WTGLogo from './WTGLogo.jsx';
import Marquee from './Marquee.jsx';

export default function About({ portfolio }) {
  return (
    <section id="about" data-screen-label="02 About" className="sec sec-about">
      <div className="sec-head">
        <span className="sec-num">02 //</span>
        <span className="sec-name">about</span>
      </div>
      <div className="about-grid">
        <div className="about-photo-col">
          <div className="about-photo">
            <div className="photo-ph">
              <img src="/assets/jeff.png" alt="Jeff Palmer" className="photo-img" />
              <span className="photo-corner photo-corner-tl" />
              <span className="photo-corner photo-corner-tr" />
              <span className="photo-corner photo-corner-bl" />
              <span className="photo-corner photo-corner-br" />
            </div>
            <div className="about-photo-meta">
              <div className="kv">
                <span>NOW</span>
                <strong>
                  Architect @ <WTGLogo className="wtg-inline" />
                </strong>
              </div>
              <div className="kv">
                <span>BASED</span>
                <strong>{portfolio.location}</strong>
              </div>
              <div className="kv">
                <span>SHIP</span>
                <strong>Whatever the job needs</strong>
              </div>
              <div className="kv">
                <span>DAILY</span>
                <strong>Vim · Linux · Tmux</strong>
              </div>
            </div>
          </div>
        </div>
        <div className="about-text">
          <p className="about-lede">{portfolio.about.short}</p>
          {portfolio.about.long.map((p, i) => (
            <p key={i} className="about-p">
              {p}
            </p>
          ))}
          <div className="about-loves">
            <span className="loves-label">things I love →</span>
            <Marquee items={portfolio.loves} />
          </div>
        </div>
      </div>
    </section>
  );
}
