import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useState } from 'react';
import { BRAND } from '../data/site';
import { SERVICES } from '../data/services';
import { useLang, useT } from '../i18n';
import { LogoLockup } from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [ok, setOk] = useState(false);
  const t = useT();
  const { lang } = useLang();
  const NAV = [
    { label: t.navHome, href: '#home' },
    { label: t.navServices, href: '#services' },
    { label: t.navPortfolio, href: '#work' },
    { label: t.navArtists, href: '#artists' },
    { label: t.navAcademy, href: '#academy' },
    { label: t.navAbout, href: '#about' },
    { label: t.navContact, href: '#contact' },
  ];
  return (
    <footer className="bg-ink text-ivory border-t border-white/10">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-20 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div>
          <LogoLockup light />
          <p className="mt-4 text-sm font-light text-ivory/60 leading-relaxed max-w-[34ch]">{lang === 'vi' ? 'Studio makeup & học viện sắc đẹp cao cấp. Nghệ thuật bridal, editorial và dạ tiệc được tạo riêng cho bạn.' : BRAND.description}</p>
          <div className="mt-6 flex gap-3">
            {[[Instagram, BRAND.instagramUrl, 'Instagram'], [Facebook, BRAND.facebookUrl, 'Facebook'], [Youtube, BRAND.instagramUrl, 'YouTube']].map(([Icon, href, label]: any) => (
              <a key={label} href={href} aria-label={label} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-ivory hover:text-ink transition-colors"><Icon size={16} strokeWidth={1.5} /></a>
            ))}
          </div>
        </div>
        <nav aria-label="Footer">
          <p className="text-[11px] tracking-[0.25em] uppercase text-ivory/50">{t.ftExplore}</p>
          <ul className="mt-4 space-y-2.5">
            {NAV.map((n) => <li key={n.href}><a href={n.href} className="text-sm font-light text-ivory/75 hover:text-goldlight transition-colors">{n.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <p className="text-[11px] tracking-[0.25em] uppercase text-ivory/50">{t.ftServices}</p>
          <ul className="mt-4 space-y-2.5">
            {SERVICES.map((s) => <li key={s.id}><a href="#services" className="text-sm font-light text-ivory/75 hover:text-goldlight transition-colors">{lang === 'vi' ? s.vi : s.title}</a></li>)}
          </ul>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.25em] uppercase text-ivory/50">{t.ftJournal}</p>
          <p className="mt-4 text-sm font-light text-ivory/60">{t.ftJournalD}</p>
          {ok ? (
            <p className="mt-4 text-sm text-goldlight">{t.ftWelcome}</p>
          ) : (
            <form className="mt-4 flex border-b border-white/25 focus-within:border-goldlight transition-colors"
              onSubmit={(e) => { e.preventDefault(); if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) setOk(true); }}>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.ftEmailPh} aria-label="Email for newsletter"
                className="flex-1 bg-transparent py-3 text-sm font-light placeholder:text-ivory/35" />
              <button aria-label="Subscribe" className="text-[11px] tracking-[0.25em] uppercase pl-4 hover:text-goldlight">{t.ftJoin}</button>
            </form>
          )}
          <p className="mt-6 text-[13px] font-light text-ivory/50">{BRAND.address}<br />{BRAND.hotline} · {BRAND.email}</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] font-light text-ivory/45">
          <p>© 2026 {BRAND.name}. {t.ftRights}</p>
          <p className="flex gap-6"><a href="#home" className="hover:text-ivory">{t.ftPrivacy}</a><a href="#home" className="hover:text-ivory">{t.ftTerms}</a></p>
        </div>
      </div>
      {/* sticky mobile booking */}
      <a href="#booking" className="fixed bottom-0 inset-x-0 z-40 bg-espresso/95 backdrop-blur text-ivory text-center text-[12px] tracking-[0.25em] uppercase py-4 border-t border-white/15 md:hidden">
        {t.ftSticky}{BRAND.hotline}
      </a>
      <div className="h-[52px] md:hidden" />
    </footer>
  );
}
