import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { CATEGORIES, LOOKS, type Look } from '../data/portfolio';
import { useLang, useT } from '../i18n';
import { Reveal } from './Reveal';

export default function Portfolio() {
  const t = useT();
  const { lang } = useLang();
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = cat === 'All' ? LOOKS : LOOKS.filter((l) => l.category === cat);

  const step = useCallback((dir: 1 | -1) => {
    setLightbox((cur) => {
      if (cur === null) return cur;
      const idx = filtered.findIndex((l) => l.id === cur);
      const next = (idx + dir + filtered.length) % filtered.length;
      return filtered[next].id;
    });
  }, [filtered]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [lightbox, step]);

  const active: Look | undefined = filtered.find((l) => l.id === lightbox) ?? LOOKS.find((l) => l.id === lightbox);

  return (
    <section id="work" className="bg-ink text-ivory py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="headline-serif text-5xl md:text-7xl">{t.workA}<br /><span className="italic font-light text-champagne">{t.workB}</span></h2>
          </div>
          <p className="max-w-[36ch] text-sm font-light text-ivory/60 leading-relaxed">{t.workSub}</p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter looks">
          {CATEGORIES.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
              className={`text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 rounded-full border transition-all duration-300 active:scale-[0.97] ${cat === c ? 'bg-ivory text-ink border-ivory' : 'border-white/25 text-ivory/70 hover:border-ivory/70 hover:text-ivory'}`}>
              {c === 'All' ? t.filterAll : c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((l) => (
              <motion.button
                layout key={l.id}
                initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setLightbox(l.id)}
                className={`img-zoom group relative overflow-hidden text-left ${l.tall ? 'row-span-2 aspect-[3/5]' : 'aspect-[3/4]'}`}
                aria-label={`View look ${l.name}`}>
                <img src={l.img} alt={`${l.name} — ${l.category} by ${l.artist}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 inset-x-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-serif text-xl leading-none">{l.name}</p>
                  <p className="mt-1 text-[10px] tracking-[0.22em] uppercase text-goldlight">{l.artist} · {t.viewLook}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10" role="dialog" aria-modal="true" aria-label={active.name}>
            <button onClick={() => setLightbox(null)} aria-label="Close" className="absolute top-5 right-5 text-ivory/80 hover:text-ivory"><X size={26} strokeWidth={1.5} /></button>
            <button onClick={() => step(-1)} aria-label="Previous look" className="absolute left-3 md:left-8 w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-ivory hover:text-ink transition-colors"><ArrowLeft size={18} /></button>
            <button onClick={() => step(1)} aria-label="Next look" className="absolute right-3 md:right-8 w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-ivory hover:text-ink transition-colors"><ArrowRight size={18} /></button>
            <motion.div key={active.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 max-w-4xl w-full bg-espresso overflow-hidden">
              <img src={active.img} alt={active.name} className="aspect-[3/4] md:aspect-auto md:h-full w-full object-cover max-h-[50vh] md:max-h-[75vh]" />
              <div className="p-7 md:p-10 flex flex-col justify-center">
                <p className="text-[10px] tracking-[0.3em] uppercase text-goldlight">{active.category}</p>
                <h3 className="font-serif text-4xl md:text-5xl mt-2">{active.name}</h3>
                <p className="mt-1 text-sm text-ivory/60">{t.artBy} {active.artist}</p>
                <p className="mt-5 text-[15px] font-light leading-relaxed text-ivory/75">{lang === 'vi' ? active.descVi : active.desc}</p>
                <a href="#booking" onClick={() => setLightbox(null)} className="mt-8 bg-ivory text-ink text-[11px] tracking-[0.22em] uppercase text-center py-4 hover:bg-gold hover:text-ivory transition-colors">{t.bookLook}</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
