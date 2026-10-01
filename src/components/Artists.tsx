import { AnimatePresence, motion } from 'framer-motion';
import { Instagram, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ARTISTS, type Artist } from '../data/artists';
import { useLang, useT } from '../i18n';
import { Reveal } from './Reveal';

export default function Artists() {
  const t = useT();
  const { lang } = useLang();
  const [sel, setSel] = useState<Artist | null>(null);

  useEffect(() => {
    if (!sel) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSel(null);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [sel]);

  return (
    <section id="artists" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="headline-serif text-5xl md:text-7xl">{t.artistsTitle}</h2>
          <a href="#booking" className="btn-line text-[12px] tracking-[0.22em] uppercase text-espresso">{t.artistsLink}</a>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8">
          {ARTISTS.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.08}>
              <button onClick={() => setSel(a)} className="group w-full text-left" aria-label={`Open profile of ${a.name}`}>
                <div className="img-zoom overflow-hidden aspect-[3/4] bg-cream">
                  <img src={a.img} alt={`Portrait of ${a.name}, ${a.role}`} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="pt-5 flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-2xl md:text-[28px]">{a.name}</h3>
                    <p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-mocha">{lang === 'vi' ? a.roleVi : a.role}</p>
                    <p className="mt-1 text-[13px] font-light text-espresso/70">{lang === 'vi' ? a.specialtyVi : a.specialty} · {lang === 'vi' ? a.yearsVi : a.years}</p>
                  </div>
                  <span className="text-gold text-xl font-serif italic group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {sel && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] bg-ink/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-8" role="dialog" aria-modal="true" aria-label={sel.name}>
            <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 60, opacity: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-ivory w-full max-w-3xl grid sm:grid-cols-2 overflow-hidden max-h-[92dvh]">
              <img src={sel.img} alt={sel.name} className="h-64 sm:h-full w-full object-cover" />
              <div className="p-7 md:p-9 overflow-y-auto">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-4xl">{sel.name}</h3>
                    <p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-mocha">{lang === 'vi' ? sel.roleVi : sel.role}</p>
                  </div>
                  <button onClick={() => setSel(null)} aria-label="Close profile"><X size={22} strokeWidth={1.5} /></button>
                </div>
                <p className="mt-5 text-[15px] font-light leading-relaxed text-espresso/80">{lang === 'vi' ? sel.bioVi : sel.bio}</p>
                <p className="mt-4 text-sm"><span className="text-mocha text-[11px] tracking-[0.2em] uppercase block mb-1">{t.specialties}</span>{lang === 'vi' ? sel.specialtyVi : sel.specialty} · {lang === 'vi' ? sel.yearsVi : sel.years} {t.yrsExp}</p>
                <div className="mt-6 flex gap-3">
                  <a href="#booking" onClick={() => setSel(null)} className="flex-1 bg-espresso text-ivory text-center text-[11px] tracking-[0.22em] uppercase py-4 hover:bg-gold transition-colors">{t.bookVerb} {sel.name.split(' ')[0]}</a>
                  <a href="https://instagram.com" aria-label={`${sel.name} on Instagram`} className="w-[52px] border border-espresso/25 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
                </div>
                <p className="mt-3 text-xs text-espresso/50">{sel.instagram}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
