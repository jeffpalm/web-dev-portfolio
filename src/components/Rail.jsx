export default function Rail({ sections, activeSec }) {
  return (
    <nav className="rail" aria-label="Section navigation">
      {sections.map((s, i) => (
        <a key={s.id} href={'#' + s.id} className={s.id === activeSec ? 'is-active' : ''}>
          {String(i + 1).padStart(2, '0')} {s.label}
        </a>
      ))}
    </nav>
  );
}
