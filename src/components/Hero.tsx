import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import { useT } from '../i18n';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const t = useT();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const txtY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={ref} id="home" className="relative min-h-[100dvh] flex overflow-hidden bg-ink text-ivory">
      {/* bg image right */}
      <motion.div style={reduce ? undefined : { y: imgY }} className="absolute inset-0 md:left-[42%]">
        <motion.img
          initial={reduce ? false : { scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1400&auto=format&fit=crop"
          alt="Luxury makeup close-up — Thuy Vi Pham campaign"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-transparent md:via-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
      </motion.div>

      {/* content — 4 elements: eyebrow / headline / sub / CTAs */}
      <motion.div style={reduce ? undefined : { y: txtY }} className="relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-10 flex flex-col justify-end md:justify-center pb-20 md:pb-0 pt-24">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="eyebrow text-goldlight mb-5">
          {t.heroEyebrow}
        </motion.p>
        <h1 className="headline-serif text-balance text-5xl sm:text-6xl md:text-7xl lg:text-[88px] max-w-[12ch]">
          {[t.heroL1, t.heroL2].map((line, i) => (
            <span key={line} className="block overflow-hidden pb-2 -mb-1">
              <motion.span
                className={`block ${i === 1 ? 'italic font-light text-champagne' : ''}`}
                initial={reduce ? false : { y: '110%' }} animate={{ y: '0%' }}
                transition={{ delay: 0.45 + i * 0.15, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}>
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.9 }}
          className="mt-5 max-w-[42ch] text-[15px] md:text-base font-light leading-relaxed text-ivory/75">
          {t.heroSub}
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a href="#booking" className="group bg-ivory text-ink text-[12px] tracking-[0.22em] uppercase px-8 py-4 flex items-center gap-3 hover:bg-gold hover:text-ivory transition-colors duration-300 active:scale-[0.98]">
            {t.book}
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a href="#work" className="btn-line text-[12px] tracking-[0.22em] uppercase py-4 flex items-center gap-2 text-ivory/90">
            {t.explore} <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </motion.div>

      {/* vertical side label */}
      <div className="hidden xl:flex absolute right-8 bottom-10 z-10 items-center gap-4 vertical-text text-[10px] tracking-[0.4em] uppercase text-ivory/50">
        Scroll — N°01 <span className="w-px h-16 bg-ivory/30 mx-auto" />
      </div>
    </section>
  );
}
