export default function Experience({ portfolio }) {
  return (
    <section id="experience" data-screen-label="04 Experience" className="sec sec-exp">
      <div className="sec-head">
        <span className="sec-num">04 //</span>
        <span className="sec-name">trajectory</span>
      </div>
      <ol className="timeline">
        {portfolio.experience.map((e, i) => (
          <li key={i} className="tl-item">
            <span className="tl-dot" />
            <div className="tl-when">
              <span className="tl-from">{e.from}</span>
              <span className="tl-arrow">→</span>
              <span className="tl-to">{e.to}</span>
            </div>
            <div className="tl-what">
              <h4 className="tl-co">{e.company}</h4>
              <span className="tl-title">{e.title}</span>
              {e.note && <span className="tl-note">{e.note}</span>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
