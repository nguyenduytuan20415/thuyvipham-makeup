import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';
import { useLang, useT } from '../i18n';
import { Reveal } from './Reveal';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const s = useT();
  const { lang } = useLang();
  return (
    <section className="bg-ivory py-24 md:py-32 border-t border-espresso/10">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <h2 className="headline-serif text-5xl md:text-6xl">{s.testiTitle}</h2>
          <div className="mt-4 flex justify-center gap-1 text-gold" aria-label="5 star rating">
            {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={15} fill="currentColor" strokeWidth={0} />)}
          </div>
        </Reveal>
        <div className="mt-8 min-h-[220px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.figure key={i} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.5 }}>
              <blockquote className="font-serif italic text-2xl md:text-[32px] leading-snug">“{lang === 'vi' ? t.quoteVi : t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center justify-center gap-3">
                <img src={t.avatar} alt={t.name} loading="lazy" className="w-11 h-11 rounded-full object-cover" />
                <span className="text-left">
                  <span className="block text-sm font-medium">{t.name}</span>
                  <span className="block text-[11px] tracking-[0.2em] uppercase text-mocha">{lang === 'vi' ? t.serviceVi : t.service}</span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={() => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)} aria-label="Previous testimonial" className="w-11 h-11 rounded-full border border-espresso/25 flex items-center justify-center hover:bg-espresso hover:text-ivory transition-colors"><ArrowLeft size={17} /></button>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, k) => (
              <button key={k} onClick={() => setI(k)} aria-label={`Go to testimonial ${k + 1}`} className={`h-1.5 rounded-full transition-all ${k === i ? 'w-8 bg-espresso' : 'w-1.5 bg-espresso/25'}`} />
            ))}
          </div>
          <button onClick={() => setI((i + 1) % TESTIMONIALS.length)} aria-label="Next testimonial" className="w-11 h-11 rounded-full border border-espresso/25 flex items-center justify-center hover:bg-espresso hover:text-ivory transition-colors"><ArrowRight size={17} /></button>
        </div>
      </div>
    </section>
  );
}
