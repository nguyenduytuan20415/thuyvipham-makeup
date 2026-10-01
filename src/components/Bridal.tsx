import { ArrowRight, Check } from 'lucide-react';
import { useT } from '../i18n';
import { Reveal } from './Reveal';

export default function Bridal() {
  const t = useT();
  const PACKAGES = [t.pkg1, t.pkg2, t.pkg3];
  return (
    <section id="about" className="relative overflow-hidden bg-ink text-ivory">
      <img src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=1600&auto=format&fit=crop" alt="Élan bridal campaign — bride in soft light" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 py-28 md:py-44 grid lg:grid-cols-2 gap-12">
        <Reveal>
          <p className="eyebrow text-goldlight">{t.bridalEyebrow}</p>
          <h2 className="headline-serif text-5xl md:text-7xl mt-4 leading-[0.95]">{t.bridalL1}<br /><span className="italic font-light text-champagne">{t.bridalL2}</span></h2>
          <p className="mt-6 max-w-[44ch] text-[15px] font-light leading-relaxed text-ivory/75">
            {t.bridalText}
          </p>
          <ul className="mt-8 space-y-3">
            {PACKAGES.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm font-light text-ivory/85">
                <span className="w-6 h-6 rounded-full border border-goldlight/60 flex items-center justify-center text-goldlight"><Check size={13} /></span>{p}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#booking" className="group bg-ivory text-ink text-[12px] tracking-[0.22em] uppercase px-8 py-4 flex items-center gap-3 hover:bg-gold hover:text-ivory transition-colors active:scale-[0.98]">
              {t.bridalCta} <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
