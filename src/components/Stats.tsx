import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { useT } from '../i18n';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setN(value); return; }
    const start = performance.now();
    const dur = 1600;
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return <span ref={ref} className="font-serif text-4xl md:text-5xl">{n}{suffix}</span>;
}

export default function Stats() {
  const t = useT();
  const STATS = [
    { value: 10, suffix: '+', label: t.stat1 },
    { value: 25, suffix: 'K+', label: t.stat2 },
    { value: 50, suffix: '+', label: t.stat3 },
    { value: 100, suffix: 'K+', label: t.stat4 },
  ];
  return (
    <section className="bg-ivory border-b border-espresso/10" aria-label="Studio statistics">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-12 md:py-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center lg:text-left lg:border-l lg:border-espresso/15 lg:pl-8 first:border-0 first:pl-0">
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-2 text-[11px] tracking-[0.24em] uppercase text-mocha">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
