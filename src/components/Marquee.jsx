export default function Marquee({ items }) {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track">
        {row.map((it, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot">◆</span>
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
