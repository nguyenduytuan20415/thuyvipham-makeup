import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Instagram, Menu, X } from 'lucide-react';
import { BRAND } from '../data/site';
import { LangToggle, useLang, useT } from '../i18n';
import { LogoLockup } from './Logo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkTone = scrolled ? 'text-espresso/70' : 'text-white/85';

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-ivory/85 backdrop-blur-xl shadow-[0_1px_24px_rgba(43,33,24,0.08)]' : 'bg-transparent'
        }`}
      >
        <div className={`mx-auto max-w-[1400px] px-5 md:px-10 flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16 md:h-[68px]' : 'h-20 md:h-24'}`}>
          {/* left nav desktop */}
          <nav className="hidden lg:flex items-center gap-7 flex-1" aria-label="Primary">
            {NAV.slice(0, 4).map((n, i) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setActive(i)}
                className={`relative text-[12px] tracking-[0.18em] uppercase transition-colors hover:text-gold py-1 ${active === i ? (scrolled ? 'text-espresso' : 'text-white') : linkTone}`}
              >
                {n.label}
                {active === i && (
                  <motion.span layoutId="nav-underline" className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold" />
                )}
              </a>
            ))}
          </nav>

          {/* logo */}
          <div className="flex lg:justify-center flex-1">
            <LogoLockup light={!scrolled} compact={scrolled} />
          </div>

          {/* right */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-end">
            {NAV.slice(4).map((n, k) => (
              <a key={n.href} href={n.href} onClick={() => setActive(k + 4)}
                className={`relative text-[12px] tracking-[0.18em] uppercase transition-colors hover:text-gold py-1 ${active === k + 4 ? (scrolled ? 'text-espresso' : 'text-white') : linkTone}`}>
                {n.label}
                {active === k + 4 && (
                  <motion.span layoutId="nav-underline" className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold" />
                )}
              </a>
            ))}
            <LangToggle light={!scrolled} />
            <a href={BRAND.instagramUrl} aria-label="Instagram" className={`transition-colors hover:text-gold ${scrolled ? 'text-espresso' : 'text-white'}`}>
              <Instagram size={17} strokeWidth={1.5} />
            </a>
            <a href="#booking"
              className={`whitespace-nowrap text-[11px] tracking-[0.22em] uppercase border px-5 py-2.5 transition-all duration-300 hover:bg-espresso hover:text-ivory hover:border-espresso active:scale-[0.98] ${scrolled ? 'border-espresso/40 text-espresso' : 'border-white/60 text-white'}`}>
              {t.book}
            </a>
          </div>

          {/* mobile */}
          <div className="flex lg:hidden items-center gap-3 flex-1 justify-end">
            <LangToggle light={!scrolled} />
            <a href="#booking" className={`text-[10px] tracking-[0.2em] uppercase border px-4 py-2 ${scrolled ? 'border-espresso/40 text-espresso' : 'border-white/60 text-white'}`}>
              {t.bookShort}
            </a>
            <button onClick={() => setOpen(true)} aria-label="Open menu" className={scrolled ? 'text-espresso' : 'text-white'}>
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-espresso text-ivory flex flex-col">
            <div className="flex items-center justify-between px-5 h-20">
              <LogoLockup compact />
              <span className="flex items-center gap-4">
                <LangToggle light />
                <button onClick={() => setOpen(false)} aria-label="Close menu"><X size={24} strokeWidth={1.5} /></button>
              </span>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2" aria-label="Mobile" key={lang}>
              {NAV.map((n, i) => (
                <motion.a key={n.href} href={n.href} onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.05, duration: 0.5 }}
                  className="font-serif text-4xl py-2 border-b border-white/10 flex items-baseline gap-4">
                  <span className="text-xs font-sans text-goldlight">0{i + 1}</span>{n.label}
                </motion.a>
              ))}
              <motion.a href="#booking" onClick={() => setOpen(false)}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="mt-8 bg-ivory text-espresso text-center text-[12px] tracking-[0.25em] uppercase py-4">
                {t.book}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
