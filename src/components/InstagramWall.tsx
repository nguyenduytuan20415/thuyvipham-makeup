import { Instagram } from 'lucide-react';
import { BRAND } from '../data/site';
import { useT } from '../i18n';
import { Reveal } from './Reveal';

const SHOTS = [
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503236823255-94609f598e71?q=80&w=600&auto=format&fit=crop',
];

export default function InstagramWall() {
  const t = useT();
  return (
    <section id="academy" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="text-center">
          <p className="eyebrow text-mocha">{t.igEyebrow}</p>
          <h2 className="headline-serif text-5xl md:text-7xl mt-3">{t.igTitle}</h2>
          <p className="mt-3 text-sm font-light text-espresso/60">{t.igSubA}{BRAND.instagram}</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          {SHOTS.map((s, i) => (
            <Reveal key={i} delay={(i % 6) * 0.05}>
              <a href={BRAND.instagramUrl} className="img-zoom group relative block aspect-square overflow-hidden bg-nude" aria-label={`Instagram post ${i + 1}`}>
                <img src={s} alt={`Élan Beauty Instagram — look ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
                <span className="absolute inset-0 bg-espresso/55 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-2 text-ivory">
                  <Instagram size={22} strokeWidth={1.5} />
                  <span className="text-[10px] tracking-[0.25em] uppercase">{BRAND.instagram}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={BRAND.instagramUrl} className="inline-block border border-espresso/40 text-espresso text-[12px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-espresso hover:text-ivory transition-colors">{t.followUs}</a>
        </div>

        {/* Academy strip */}
        <div className="mt-16 grid md:grid-cols-3 border-t border-espresso/15 pt-10 gap-8">
          {[
            [t.ac1t, t.ac1d, 'from 18.000.000₫'],
            [t.ac2t, t.ac2d, 'from 12.000.000₫'],
            [t.ac3t, t.ac3d, 'from 1.500.000₫'],
          ].map(([title, d, p]) => (
            <div key={title}>
              <h3 className="font-serif text-2xl">{title}</h3>
              <p className="mt-2 text-sm font-light text-espresso/65">{d}</p>
              <p className="mt-2 text-[11px] tracking-[0.2em] uppercase text-mocha">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
