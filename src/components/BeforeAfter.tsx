import { useRef, useState } from 'react';
import { useT } from '../i18n';
import { Reveal } from './Reveal';

const PAIRS = [
  {
    before: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=900&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=900&auto=format&fit=crop',
    label: 'Soft Glam — Thao Vy',
  },
  {
    before: 'https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=900&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop',
    label: 'Bridal — Linh Nguyen',
  },
];

function Compare({ before, after, label, beforeTxt, afterTxt }: { before: string; after: string; label: string; beforeTxt: string; afterTxt: string }) {
  const [pos, setPos] = useState(50);
  const track = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const el = track.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(96, Math.max(4, ((clientX - r.left) / r.width) * 100)));
  };

  return (
    <div
      ref={track}
      className="relative overflow-hidden aspect-[4/5] sm:aspect-[16/11] select-none touch-none cursor-ew-resize bg-cream"
      onPointerDown={(e) => { dragging.current = true; (e.target as HTMLElement).setPointerCapture?.(e.pointerId); move(e.clientX); }}
      onPointerMove={(e) => { if (dragging.current) move(e.clientX); }}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
      role="slider" aria-label={`Before after comparison: ${label}`} aria-valuenow={Math.round(pos)} tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setPos((p) => Math.max(4, p - 4));
        if (e.key === 'ArrowRight') setPos((p) => Math.min(96, p + 4));
      }}
    >
      <img src={after} alt={`After makeup — ${label}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt={`Before makeup — ${label}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        <div className="absolute inset-0 bg-ink/10" />
      </div>
      <div className="absolute top-0 bottom-0 w-px bg-ivory shadow" style={{ left: `${pos}%` }} />
      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-ivory text-espresso flex items-center justify-center text-[10px] tracking-widest shadow-xl" style={{ left: `${pos}%` }}>↔</div>
      <span className="absolute top-4 left-4 text-[10px] tracking-[0.25em] uppercase bg-ink/70 text-ivory px-3 py-1.5">{beforeTxt}</span>
      <span className="absolute top-4 right-4 text-[10px] tracking-[0.25em] uppercase bg-ivory/90 text-espresso px-3 py-1.5">{afterTxt}</span>
      <span className="absolute bottom-4 left-4 text-[10px] tracking-[0.25em] uppercase text-ivory/90">{label}</span>
    </div>
  );
}

export default function BeforeAfter() {
  const t = useT();
  return (
    <section id="transformation" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="text-center">
          <h2 className="headline-serif text-5xl md:text-7xl">{t.baTitle}</h2>
          <p className="mt-4 font-serif italic text-xl text-mocha">{t.baSub}</p>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {PAIRS.map((p) => (
            <Reveal key={p.label}><Compare {...p} beforeTxt={t.before} afterTxt={t.after} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
