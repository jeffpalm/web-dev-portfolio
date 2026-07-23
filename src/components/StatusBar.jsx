export default function StatusBar({ sections, activeSec, onOpenTerm, onToggleHelp }) {
  return (
    <header className="statusbar">
      <div className="sb-left">
        <span className="sb-mark">
          <span className="sb-mark-glyph">jp</span>
          <span>jeffpalm.dev</span>
        </span>
        <span className="dot dot-live" />
      </div>
      <nav className="sb-mid sb-nav">
        {sections.map((s) => (
          <a key={s.id} href={'#' + s.id} className={s.id === activeSec ? 'is-active' : ''}>
            {s.label}
          </a>
        ))}
      </nav>
      <div className="sb-right">
        <span className="sb-time">v2.0.1</span>
        <button className="sb-btn" onClick={onOpenTerm}>
          <kbd>~</kbd> term
        </button>
        <button className="sb-btn" onClick={onToggleHelp}>
          <kbd>?</kbd> keys
        </button>
      </div>
    </header>
  );
}
