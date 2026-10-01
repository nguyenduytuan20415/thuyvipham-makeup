import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/services';
import { useLang, useT } from '../i18n';
import { Reveal } from './Reveal';

export default function Services() {
  const t = useT();
  const { lang } = useLang();
  return (
    <section id="services" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 className="headline-serif text-5xl md:text-7xl">{t.servicesTitle}</h2>
          <p className="mt-4 text-mocha font-light italic font-serif text-xl">{t.servicesSub}</p>
          <a href="#pricing" className="btn-line inline-block mt-4 text-[12px] tracking-[0.22em] uppercase text-espresso">{t.priceListLink}</a>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.08}>
              <a href="#booking" className="img-zoom group relative block overflow-hidden bg-ink text-ivory aspect-[3/4]" aria-label={`${s.title} — ${s.price}`}>
                <img src={s.img} alt={`${s.title} — ${s.vi}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                <span className="absolute top-5 left-5 font-serif italic text-lg text-ivory/80">{s.no}</span>
                <span className="absolute top-5 right-5 w-9 h-9 rounded-full border border-white/40 flex items-center justify-center transition-all duration-300 group-hover:bg-ivory group-hover:text-ink group-hover:rotate-45">
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </span>
                <div className="absolute bottom-0 inset-x-0 p-6 transition-transform duration-500 group-hover:-translate-y-1">
                  <p className="text-[10px] tracking-[0.28em] uppercase text-goldlight">{lang === 'vi' ? s.title : s.vi}</p>
                  <h3 className="font-serif text-3xl mt-1">{lang === 'vi' ? s.vi : s.title}</h3>
                  <p className="mt-2 text-[13px] font-light text-ivory/70 leading-relaxed">{lang === 'vi' ? s.descVi : s.desc}</p>
                  <p className="mt-3 text-[11px] tracking-[0.2em] uppercase text-ivory">{s.price}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
