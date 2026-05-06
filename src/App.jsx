import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import PORTFOLIO from './data.js';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Terminal from './components/Terminal.jsx';
import StatusBar from './components/StatusBar.jsx';
import Rail from './components/Rail.jsx';
import HelpOverlay from './components/HelpOverlay.jsx';
import VimIndicator from './components/VimIndicator.jsx';

const SECTIONS = [
  { id: 'home', key: 'h', label: 'home' },
  { id: 'about', key: 'a', label: 'about' },
  { id: 'work', key: 'w', label: 'work' },
  { id: 'experience', key: 'e', label: 'experience' },
  { id: 'skills', key: 's', label: 'skills' },
  { id: 'contact', key: 'c', label: 'contact' },
];

// Hues for cyan / amber / magenta / lime — preserved from the original design palette.
const SEED_HUES = [187, 43, 330, 83];
const seedHue = () => SEED_HUES[Math.floor(Math.random() * SEED_HUES.length)];
const randomHue = () => Math.random() * 360;

export default function App() {
  const [baseHue, setBaseHue] = useState(seedHue);
  const [scrollPct, setScrollPct] = useState(0);
  const [theme, setTheme] = useState('dark');
  const [termOpen, setTermOpen] = useState(false);
  const [activeSec, setActiveSec] = useState('home');
  const [vimKey, setVimKey] = useState(null);
  const [showHelp, setShowHelp] = useState(false);
  const gPressed = useRef(false);
  const gTimeout = useRef(null);

  const accent = useMemo(() => {
    const h = (((baseHue + scrollPct * 360) % 360) + 360) % 360;
    return `hsl(${h.toFixed(2)} 100% 50%)`;
  }, [baseHue, scrollPct]);

  const randomizeAccent = useCallback(() => setBaseHue(randomHue()), []);

  useLayoutEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty(
      '--accent-soft',
      `color-mix(in oklch, ${accent}, transparent 88%)`
    );
    document.documentElement.dataset.theme = theme;
  }, [accent, theme]);

  useEffect(() => {
    let raf = null;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setScrollPct(pct);
      raf = null;
    };
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const opts = { rootMargin: '-30% 0px -60% 0px', threshold: 0 };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActiveSec(e.target.id);
      });
    }, opts);
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const flashKey = (k) => {
    setVimKey(k);
    setTimeout(() => setVimKey((cur) => (cur === k ? null : cur)), 900);
  };

  useEffect(() => {
    const onKey = (e) => {
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;

      if (e.key === '~' || e.key === '`') {
        e.preventDefault();
        setTermOpen((o) => !o);
        return;
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTermOpen(true);
        return;
      }
      if (termOpen) return;

      if (e.key === '?') {
        e.preventDefault();
        setShowHelp((s) => !s);
        return;
      }
      if (e.key === 'Escape') {
        setShowHelp(false);
        return;
      }

      if (e.key === 't') {
        setTheme((cur) => (cur === 'dark' ? 'light' : 'dark'));
        flashKey('t');
        return;
      }

      if (e.key === 'j' || e.key === 'k') {
        const idx = SECTIONS.findIndex((s) => s.id === activeSec);
        const next =
          e.key === 'j' ? Math.min(SECTIONS.length - 1, idx + 1) : Math.max(0, idx - 1);
        document.getElementById(SECTIONS[next].id)?.scrollIntoView({ behavior: 'smooth' });
        flashKey(e.key);
        return;
      }

      if (e.key === 'G') {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        flashKey('G');
        return;
      }

      if (gPressed.current) {
        const sec = SECTIONS.find((s) => s.key === e.key.toLowerCase());
        gPressed.current = false;
        clearTimeout(gTimeout.current);
        if (sec) {
          document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' });
          flashKey('g ' + e.key);
        } else if (e.key === 'g') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          flashKey('gg');
        }
        return;
      }
      if (e.key === 'g') {
        gPressed.current = true;
        flashKey('g…');
        gTimeout.current = setTimeout(() => {
          gPressed.current = false;
          setVimKey(null);
        }, 1200);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeSec, termOpen]);

  useEffect(() => {
    const open = () => setTermOpen(true);
    window.addEventListener('open-terminal', open);
    return () => window.removeEventListener('open-terminal', open);
  }, []);

  useEffect(() => {
    const dl = () => {
      const a = document.createElement('a');
      a.href = '/Jeff_Palmer_Resume.pdf';
      a.download = 'Jeff_Palmer_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
    };
    window.addEventListener('download-resume', dl);
    return () => window.removeEventListener('download-resume', dl);
  }, []);

  return (
    <>
      <StatusBar
        sections={SECTIONS}
        activeSec={activeSec}
        onOpenTerm={() => setTermOpen(true)}
        onToggleHelp={() => setShowHelp((s) => !s)}
      />
      <Rail sections={SECTIONS} activeSec={activeSec} />
      <main>
        <Hero accent={accent} theme={theme} portfolio={PORTFOLIO} />
        <About portfolio={PORTFOLIO} />
        <Work portfolio={PORTFOLIO} />
        <Experience portfolio={PORTFOLIO} />
        <Skills portfolio={PORTFOLIO} />
        <Contact portfolio={PORTFOLIO} />
      </main>
      <Terminal
        open={termOpen}
        onClose={() => setTermOpen(false)}
        theme={theme}
        setTheme={setTheme}
        randomizeAccent={randomizeAccent}
        portfolio={PORTFOLIO}
      />
      {vimKey && <VimIndicator vimKey={vimKey} />}
      {showHelp && <HelpOverlay onClose={() => setShowHelp(false)} />}
    </>
  );
}
