import { ArrowRight } from 'lucide-react';
import { PRICING } from '../data/pricing';
import { useLang, useT } from '../i18n';
import { Reveal } from './Reveal';

export default function Pricing() {
  const t = useT();
  const { lang } = useLang();
  return (
    <section id="pricing" className="bg-cream py-24 md:py-32 border-t border-espresso/10">
      <div className="mx-auto max-w-[1100px] px-5 md:px-10">
        <Reveal className="text-center">
          <h2 className="headline-serif text-5xl md:text-7xl">{t.pricingTitle}</h2>
          <p className="mt-4 font-serif italic text-xl text-mocha">{t.pricingSub}</p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-5 md:gap-6">
          {PRICING.map((g, gi) => (
            <Reveal key={g.id} delay={gi * 0.08}>
              <div className="bg-ivory border border-espresso/15 h-full flex flex-col">
                <div className="bg-espresso text-ivory px-7 py-5">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-goldlight">{g.title}</p>
                  <h3 className="font-serif text-3xl mt-1">{lang === 'vi' ? g.vi : g.title}</h3>
                </div>
                <ul className="flex-1 px-7 py-6 space-y-4">
                  {g.items.map((item) => (
                    <li key={item.name} className="flex items-baseline text-[15px]">
                      <span className="font-light">{lang === 'vi' ? item.name : item.en}</span>
                      <span className="flex-1 border-b border-dotted border-mocha/50 mx-3 translate-y-[-4px]" aria-hidden="true" />
                      <span className="font-serif text-xl whitespace-nowrap">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center">
          <p className="mt-8 text-sm font-light text-espresso/60 italic">{t.pricingNote}</p>
          <a href="#booking" className="mt-6 inline-flex items-center gap-3 bg-espresso text-ivory text-[12px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-gold transition-colors active:scale-[0.99]">
            {t.pricingCta} <ArrowRight size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
