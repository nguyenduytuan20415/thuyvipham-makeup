import Artists from './components/Artists';
import BeforeAfter from './components/BeforeAfter';
import Booking from './components/Booking';
import Bridal from './components/Bridal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import InstagramWall from './components/InstagramWall';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import { LangProvider, useT } from './i18n';
import { Reveal } from './components/Reveal';

function Marquee() {
  const words = ['Bridal', 'Editorial', 'Soft Glam', 'Korean', 'Runway', 'Academy'];
  return (
    <div className="bg-espresso text-ivory/80 overflow-hidden border-y border-white/10 py-4 select-none" aria-hidden="true">
      <div className="flex gap-10 whitespace-nowrap animate-[marquee_28s_linear_infinite] w-max">
        {[...words, ...words, ...words].map((w, i) => (
          <span key={i} className="font-serif italic text-xl flex items-center gap-10">
            {w} <span className="text-gold text-sm not-italic">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { to { transform: translateX(-33.333%); } } @media (prefers-reduced-motion: reduce) { .animate-\\[marquee_28s_linear_infinite\\] { animation: none; } }`}</style>
    </div>
  );
}

function About() {
  const t = useT();
  return (
    <section className="bg-ivory py-24 md:py-32 border-t border-espresso/10">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="grid grid-cols-2 gap-3">
            <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=700&auto=format&fit=crop" alt="Inside Élan Beauty studio" loading="lazy" className="aspect-[3/4] object-cover w-full" />
            <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=700&auto=format&fit=crop" alt="Élan professional cosmetics detail" loading="lazy" className="aspect-[3/4] object-cover w-full mt-10" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="headline-serif text-5xl md:text-6xl leading-[0.95]">{t.aboutL1}<br /><span className="italic font-light text-mocha">{t.aboutL2}</span></h2>
          <p className="mt-6 text-[15px] font-light leading-relaxed text-espresso/70 max-w-[46ch]">
            {t.aboutText}
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-espresso/15 pt-8">
            {[[t.aboutL_1, t.aboutV1], [t.aboutL_2, t.aboutV2], [t.aboutL_3, t.aboutV3]].map(([a, b]) => (
              <div key={a}>
                <p className="font-serif text-2xl">{b}</p>
                <p className="text-[11px] tracking-[0.2em] uppercase text-mocha mt-1">{a}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <LangProvider>
      <div className="grain bg-ivory text-espresso min-h-[100dvh]">
        <a href="#booking" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-espresso focus:text-ivory focus:px-4 focus:py-2">
          Skip to booking
        </a>
        <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Pricing />
        <Marquee />
        <Portfolio />
        <BeforeAfter />
        <Artists />
        <Bridal />
        <Testimonials />
        <InstagramWall />
        <About />
        <Booking />
        <Contact />
      </main>
      <Footer />
      </div>
    </LangProvider>
  );
}
