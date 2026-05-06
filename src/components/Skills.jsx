export default function Skills({ portfolio }) {
  return (
    <section id="skills" data-screen-label="05 Skills" className="sec sec-skills">
      <div className="sec-head">
        <span className="sec-num">05 //</span>
        <span className="sec-name">stack</span>
      </div>
      <div className="skills-grid">
        {Object.entries(portfolio.skills).map(([k, v]) => (
          <div key={k} className="skill-col">
            <h4 className="skill-cat">{k}</h4>
            <ul className="skill-list">
              {v.map((s, i) => (
                <li key={i} className="skill-item">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
