import { useEffect, useRef, useState } from 'react';

const CHARS = '!<>-_\\/[]{}—=+*^?#________';

export default function Scramble({ text, className, trigger = 'hover' }) {
  const [out, setOut] = useState(text);
  const raf = useRef(null);

  useEffect(() => {
    setOut(text);
  }, [text]);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  const run = () => {
    cancelAnimationFrame(raf.current);
    const orig = text;
    const queue = [];
    for (let i = 0; i < orig.length; i++) {
      const from = out[i] || '';
      const to = orig[i];
      const start = Math.floor(Math.random() * 12);
      const end = start + Math.floor(Math.random() * 16) + 8;
      queue.push({ from, to, start, end, char: '' });
    }
    let frame = 0;
    const step = () => {
      let s = '';
      let done = 0;
      for (let i = 0; i < queue.length; i++) {
        const q = queue[i];
        if (frame >= q.end) {
          done++;
          s += q.to;
        } else if (frame >= q.start) {
          if (!q.char || Math.random() < 0.28)
            q.char = CHARS[Math.floor(Math.random() * CHARS.length)];
          s += q.char;
        } else {
          s += q.from;
        }
      }
      setOut(s);
      if (done < queue.length) {
        frame++;
        raf.current = requestAnimationFrame(step);
      }
    };
    step();
  };

  return (
    <span className={className} onMouseEnter={trigger === 'hover' ? run : undefined}>
      {out}
    </span>
  );
}
