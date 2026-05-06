import { useEffect, useRef } from 'react';

export default function HeroCanvas({ accent }) {
  const ref = useRef(null);

  useEffect(() => {
    const cvs = ref.current;
    if (!cvs) return;
    const ctx = cvs.getContext('2d');
    let raf;
    let w;
    let h;
    let dpr;
    const nodes = [];
    const N = 70;

    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = cvs.clientWidth;
      h = cvs.clientHeight;
      cvs.width = w * dpr;
      cvs.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < N; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.4,
      });
    }

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e) => {
      const r = cvs.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    cvs.addEventListener('mousemove', onMove);
    cvs.addEventListener('mouseleave', onLeave);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < N; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        const dx = a.x - mouse.x;
        const dy = a.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 14000) {
          const f = ((14000 - d2) / 14000) * 0.6;
          a.x += (dx / Math.sqrt(d2 + 0.01)) * f;
          a.y += (dy / Math.sqrt(d2 + 0.01)) * f;
        }
      }
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            const alpha = (1 - d / 130) * 0.35;
            ctx.strokeStyle = accent;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      for (const n of nodes) {
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      cvs.removeEventListener('mousemove', onMove);
      cvs.removeEventListener('mouseleave', onLeave);
    };
  }, [accent]);

  return <canvas ref={ref} className="hero-canvas" />;
}
