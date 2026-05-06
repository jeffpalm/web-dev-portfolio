export default function VimIndicator({ vimKey }) {
  return (
    <div className="vim-indicator">
      <span>NORMAL</span>
      <span className="vim-key">{vimKey}</span>
    </div>
  );
}
