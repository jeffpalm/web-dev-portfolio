import { useEffect, useRef, useState } from 'react';

const ACCENT_MAP = {
  cyan: '#22d3ee',
  amber: '#fbbf24',
  magenta: '#f472b6',
  lime: '#a3e635',
};

const SECTION_MAP = {
  home: 'home',
  about: 'about',
  work: 'work',
  projects: 'work',
  exp: 'experience',
  experience: 'experience',
  skills: 'skills',
  contact: 'contact',
};

function welcome() {
  return [
    { kind: 'sys', text: `jeff@portfolio:~$ welcome — type 'help' for commands` },
    { kind: 'sys', text: `last login: ${new Date().toUTCString()}` },
    { kind: 'spacer' },
  ];
}

export default function Terminal({
  open,
  onClose,
  theme,
  setTheme,
  setAccent,
  portfolio: P,
}) {
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const [lines, setLines] = useState(welcome);
  const [history, setHistory] = useState([]);
  const [hIdx, setHIdx] = useState(-1);
  const [val, setVal] = useState('');

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 30);
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [lines]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handle = (raw) => {
    const cmd = raw.trim();
    const next = [...lines, { kind: 'in', text: cmd }];
    if (!cmd) {
      setLines(next);
      return;
    }
    const [c, ...args] = cmd.split(/\s+/);
    const out = [];
    const push = (text, kind = 'out') => out.push({ kind, text });

    switch (c.toLowerCase()) {
      case 'help':
      case '?':
        push('AVAILABLE COMMANDS', 'head');
        [
          ['whoami', 'who I am'],
          ['about', 'longer bio'],
          ['ls projects', 'list projects'],
          ['cat <project>', 'open a project (e.g. cat nova)'],
          ['skills', 'tech stack'],
          ['resume', 'download resume'],
          ['contact / email', 'ways to reach me'],
          ['theme [dark|light]', 'toggle color mode'],
          ['accent [cyan|amber|magenta|lime]', 'set accent color'],
          ['goto <section>', 'scroll to section (home, about, work, exp, skills, contact)'],
          ['clear', 'clear the screen'],
          ['sudo make me a sandwich', 'try it'],
          ['exit / esc', 'close terminal'],
        ].forEach(([k, v]) => push(`  ${k.padEnd(36)} ${v}`));
        break;
      case 'whoami':
        push(`${P.name} — ${P.role}`);
        push(`${P.location} · ${P.email}`);
        break;
      case 'about':
        push(P.about.short);
        push('');
        P.about.long.forEach((l) => push(l));
        break;
      case 'ls':
        if (args[0] === 'projects' || !args[0]) {
          push('PROJECTS/', 'head');
          P.work.forEach((w) =>
            push(`  ${w.id.padEnd(16)} ${w.year.padEnd(10)} ${w.title}`)
          );
        } else {
          push(`ls: cannot access '${args[0]}': no such directory`, 'err');
        }
        break;
      case 'cat': {
        const id = (args[0] || '').toLowerCase();
        const proj = P.work.find((w) => w.id === id);
        if (!proj) {
          push(
            `cat: ${args[0] || '(empty)'}: no such project. try 'ls projects'`,
            'err'
          );
          break;
        }
        push(`# ${proj.title}`, 'head');
        push(`${proj.org} · ${proj.role} · ${proj.year}`);
        push('');
        push(proj.blurb);
        push('');
        push(`stack: ${proj.stack.join(', ')}`);
        scrollTo('work');
        break;
      }
      case 'skills':
        Object.entries(P.skills).forEach(([k, v]) => {
          push(`${k.toUpperCase()}`, 'head');
          push('  ' + v.join(' · '));
          push('');
        });
        break;
      case 'resume':
      case 'cv':
        push('opening resume… (download triggered)');
        setTimeout(
          () => window.dispatchEvent(new CustomEvent('download-resume')),
          150
        );
        break;
      case 'contact':
      case 'email':
        push(`email:    ${P.email}`);
        push(`github:   ${P.github}`);
        push(`linkedin: ${P.linkedin}`);
        scrollTo('contact');
        break;
      case 'theme': {
        const t = args[0]?.toLowerCase();
        if (t === 'dark' || t === 'light') {
          setTheme(t);
          push(`theme → ${t}`);
        } else {
          setTheme(theme === 'dark' ? 'light' : 'dark');
          push('theme toggled');
        }
        break;
      }
      case 'accent': {
        const a = args[0]?.toLowerCase();
        if (ACCENT_MAP[a]) {
          setAccent(ACCENT_MAP[a]);
          push(`accent → ${a}`);
        } else {
          push('usage: accent [cyan|amber|magenta|lime]', 'err');
        }
        break;
      }
      case 'goto': {
        const t = (args[0] || '').toLowerCase();
        if (SECTION_MAP[t]) {
          scrollTo(SECTION_MAP[t]);
          push(`→ ${t}`);
        } else {
          push(`goto: unknown section '${args[0]}'`, 'err');
        }
        break;
      }
      case 'clear':
      case 'cls':
        setLines([]);
        return;
      case 'exit':
      case 'q':
      case ':q':
        onClose();
        return;
      case 'sudo':
        if (args.join(' ').toLowerCase() === 'make me a sandwich') {
          push('🥪  okay.');
        } else {
          push('Permission denied: nice try.', 'err');
        }
        break;
      case 'vim':
      case 'nvim':
        push('E1: already in vim. you cannot escape.', 'err');
        break;
      case 'rm':
        push('rm: refusing to remove the portfolio you are looking at.', 'err');
        break;
      case 'echo':
        push(args.join(' '));
        break;
      case 'date':
        push(new Date().toString());
        break;
      case 'uname':
        push('portfolio-os 1.1.0 #jeffpalm SMP x86_64 GNU/Linux');
        break;
      default:
        push(`command not found: ${c}. try 'help'.`, 'err');
    }

    setLines([...next, ...out, { kind: 'spacer' }]);
    setHistory([cmd, ...history].slice(0, 50));
    setHIdx(-1);
  };

  const onKey = (e) => {
    if (e.key === 'Enter') {
      handle(val);
      setVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const ni = Math.min(history.length - 1, hIdx + 1);
      if (ni >= 0 && history[ni] !== undefined) {
        setHIdx(ni);
        setVal(history[ni]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const ni = hIdx - 1;
      if (ni < 0) {
        setHIdx(-1);
        setVal('');
      } else {
        setHIdx(ni);
        setVal(history[ni]);
      }
    } else if (e.key === 'l' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      setLines([]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div
      className="term-back"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="term-window">
        <div className="term-bar">
          <span className="term-dot td-r" />
          <span className="term-dot td-y" />
          <span className="term-dot td-g" />
          <span className="term-title">— jeff@portfolio: ~ —</span>
          <span className="term-close" onClick={onClose}>
            esc
          </span>
        </div>
        <div
          className="term-body"
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((l, i) => {
            if (l.kind === 'spacer')
              return (
                <div key={i} className="term-line term-spacer">
                  &nbsp;
                </div>
              );
            if (l.kind === 'in')
              return (
                <div key={i} className="term-line term-in">
                  <span className="term-prompt">jeff@portfolio:~$</span>
                  <span>{l.text}</span>
                </div>
              );
            return (
              <div key={i} className={'term-line term-' + l.kind}>
                {l.text || ' '}
              </div>
            );
          })}
          <div className="term-line term-current">
            <span className="term-prompt">jeff@portfolio:~$</span>
            <input
              ref={inputRef}
              className="term-input"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              onKeyDown={onKey}
              spellCheck={false}
              autoComplete="off"
            />
            <span className="term-caret">▍</span>
          </div>
        </div>
      </div>
    </div>
  );
}
