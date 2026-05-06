export default function HelpOverlay({ onClose }) {
  return (
    <div className="vim-help" onClick={onClose}>
      <span className="vh-title">Keyboard</span>
      <div className="vh-row">
        <kbd>j</kbd>/<kbd>k</kbd> next/prev section
      </div>
      <div className="vh-row">
        <kbd>g</kbd> then <kbd>h/a/w/e/s/c</kbd>
      </div>
      <div className="vh-row">
        <kbd>gg</kbd> top · <kbd>G</kbd> bottom
      </div>
      <div className="vh-row">
        <kbd>~</kbd> or <kbd>⌘K</kbd> open terminal
      </div>
      <div className="vh-row">
        <kbd>t</kbd> toggle theme
      </div>
      <div className="vh-row">
        <kbd>?</kbd> toggle this help
      </div>
    </div>
  );
}
