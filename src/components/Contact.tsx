import { Clock, Facebook, Mail, MapPin, Navigation, Phone } from 'lucide-react';
import { BRAND } from '../data/site';
import { useT } from '../i18n';
import { Reveal } from './Reveal';

export default function Contact() {
  const t = useT();
  return (
    <section id="contact" className="bg-espresso text-ivory py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 grid lg:grid-cols-2 gap-12">
        <Reveal>
          <h2 className="headline-serif text-5xl md:text-7xl">{t.ctTitle}</h2>
          <div className="mt-10 space-y-6">
            {[
              [MapPin, t.ctAddr, BRAND.address],
              [Phone, t.ctPhone, `${BRAND.phone}`],
              [Facebook, 'Facebook', BRAND.facebook],
              [Mail, t.ctEmail, BRAND.email],
              [Clock, t.ctHours, BRAND.hours],
            ].map(([Icon, label, value]: any) => (
              <div key={label} className="flex gap-4">
                <span className="w-11 h-11 shrink-0 rounded-full border border-white/20 flex items-center justify-center text-goldlight"><Icon size={17} strokeWidth={1.5} /></span>
                <span>
                  <span className="block text-[11px] tracking-[0.22em] uppercase text-ivory/50">{label}</span>
                  <span className="block mt-1 font-light text-[15px]">{value}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://maps.google.com/?q=Tan+Binh+Ho+Chi+Minh+City" target="_blank" rel="noreferrer" className="bg-ivory text-ink text-[11px] tracking-[0.22em] uppercase px-8 py-4 flex items-center gap-2 hover:bg-gold hover:text-ivory transition-colors"><Navigation size={14} /> {t.directions}</a>
            <a href={`tel:${BRAND.hotlineTel}`} className="border border-white/30 text-[11px] tracking-[0.22em] uppercase px-8 py-4 hover:border-ivory transition-colors">{t.hotline}</a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative h-full min-h-[380px] overflow-hidden bg-ink border border-white/10">
            {/* map placeholder — swap iframe with real Google Maps embed */}
            <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop" alt="Élan Beauty studio interior" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-ivory text-espresso p-6 flex items-center justify-between">
              <div>
                <p className="font-serif text-2xl">{t.studioCardT}</p>
                <p className="text-[13px] font-light text-espresso/60 mt-1">{t.studioCardD}</p>
              </div>
              <MapPin className="text-gold" size={24} strokeWidth={1.5} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
