import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { ARTISTS } from '../data/artists';
import { SERVICES } from '../data/services';
import { BRAND } from '../data/site';
import { submitBooking, validateBooking, type BookingPayload } from '../lib/booking';
import { useLang, useT } from '../i18n';
import { Reveal } from './Reveal';

const TIMES = ['09:00', '11:00', '13:00', '15:00', '17:00', '19:00'];
const EMPTY: BookingPayload = { name: '', phone: '', email: '', service: '', date: '', time: '', artist: '', message: '' };

const field = 'w-full bg-transparent border border-espresso/25 px-4 py-3.5 text-[14px] font-light placeholder:text-espresso/35 focus:border-gold transition-colors';

export default function Booking() {
  const t = useT();
  const { lang } = useLang();
  const noPref = t.noPref;
  const [form, setForm] = useState<BookingPayload>({ ...EMPTY, artist: noPref });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle');
  const [ref, setRef] = useState('');

  const set = (k: keyof BookingPayload, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: '' }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validateBooking(form, lang);
    if (errs.length) {
      setErrors(Object.fromEntries(errs.map((x) => [x.field, x.message])));
      document.getElementById('booking')?.querySelector('[aria-invalid="true"]')?.scrollIntoView({ block: 'center', behavior: 'smooth' });
      return;
    }
    setStatus('sending');
    try {
      const r = await submitBooking(form);
      setRef(r.reference);
      setStatus('done');
    } catch {
      setStatus('idle');
      setErrors({ form: lang === 'vi' ? 'Có lỗi xảy ra. Vui lòng gọi hotline của chúng tôi.' : 'Something went wrong. Please call our hotline.' });
    }
  };

  const svcName = (s: (typeof SERVICES)[number]) => (lang === 'vi' ? s.vi : s.title);

  return (
    <section id="booking" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
        <Reveal>
          <h2 className="headline-serif text-5xl md:text-7xl leading-[0.95]">{t.bkL1}<br /><span className="italic font-light text-mocha">{t.bkL2}</span></h2>
          <p className="mt-6 max-w-[40ch] text-[15px] font-light leading-relaxed text-espresso/70">
            {t.bkText}
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <p><span className="text-[11px] tracking-[0.22em] uppercase text-mocha block">{t.hotline}</span><a href={`tel:${BRAND.hotlineTel}`} className="font-serif text-3xl hover:text-gold transition-colors">{BRAND.hotline}</a></p>
            <p><span className="text-[11px] tracking-[0.22em] uppercase text-mocha block">{t.studioLbl}</span>{BRAND.address}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {status === 'done' ? (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="border border-espresso/15 bg-cream p-10 md:p-14 text-center">
              <CheckCircle2 size={40} strokeWidth={1} className="mx-auto text-gold" />
              <h3 className="font-serif text-5xl mt-5">{t.doneTitle}</h3>
              <p className="mt-4 text-[15px] font-light text-espresso/70 max-w-[40ch] mx-auto leading-relaxed">
                {t.doneA} <span className="font-medium text-espresso">{ref}</span> {t.doneB}
              </p>
              <button onClick={() => { setForm({ ...EMPTY, artist: noPref }); setStatus('idle'); }} className="mt-8 text-[11px] tracking-[0.25em] uppercase underline underline-offset-4 hover:text-gold">{t.again}</button>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid sm:grid-cols-2 gap-4" aria-label="Appointment request form" key={lang}>
              {(
                [
                  ['name', t.fName, 'text', 'Nguyen Anh Thu'],
                  ['phone', t.fPhone, 'tel', '0334 000 000'],
                  ['email', t.fEmail, 'email', 'you@email.com'],
                ] as const
              ).map(([k, label, type, ph]) => (
                <label key={k} className={`block ${k === 'email' ? 'sm:col-span-2' : ''}`}>
                  <span className="block text-[11px] tracking-[0.2em] uppercase text-mocha mb-2">{label} *</span>
                  <input type={type} value={form[k]} onChange={(e) => set(k, e.target.value)} placeholder={ph} className={field}
                    aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} />
                  {errors[k] && <span id={`${k}-err`} role="alert" className="block mt-1.5 text-[13px] text-red-800">{errors[k]}</span>}
                </label>
              ))}
              <label className="block">
                <span className="block text-[11px] tracking-[0.2em] uppercase text-mocha mb-2">{t.fService} *</span>
                <select value={form.service} onChange={(e) => set('service', e.target.value)} className={field} aria-invalid={!!errors.service}>
                  <option value="">{t.selService}</option>
                  {SERVICES.map((s) => <option key={s.id} value={svcName(s)}>{svcName(s)} — {s.price}</option>)}
                </select>
                {errors.service && <span role="alert" className="block mt-1.5 text-[13px] text-red-800">{errors.service}</span>}
              </label>
              <label className="block">
                <span className="block text-[11px] tracking-[0.2em] uppercase text-mocha mb-2">{t.fArtist}</span>
                <select value={form.artist} onChange={(e) => set('artist', e.target.value)} className={field}>
                  <option>{noPref}</option>
                  {ARTISTS.map((a) => <option key={a.id}>{a.name}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="block text-[11px] tracking-[0.2em] uppercase text-mocha mb-2">{t.fDate} *</span>
                <input type="date" value={form.date} onChange={(e) => set('date', e.target.value)} className={field} aria-invalid={!!errors.date} />
                {errors.date && <span role="alert" className="block mt-1.5 text-[13px] text-red-800">{errors.date}</span>}
              </label>
              <div>
                <span className="block text-[11px] tracking-[0.2em] uppercase text-mocha mb-2">{t.fTime} *</span>
                <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label={t.fTime}>
                  {TIMES.map((tm) => (
                    <button type="button" key={tm} role="radio" aria-checked={form.time === tm} onClick={() => set('time', tm)}
                      className={`border py-3 text-[13px] transition-all active:scale-[0.97] ${form.time === tm ? 'bg-espresso text-ivory border-espresso' : 'border-espresso/25 hover:border-espresso'}`}>{tm}</button>
                  ))}
                </div>
                {errors.time && <span role="alert" className="block mt-1.5 text-[13px] text-red-800">{errors.time}</span>}
              </div>
              <label className="block sm:col-span-2">
                <span className="block text-[11px] tracking-[0.2em] uppercase text-mocha mb-2">{t.fMsg}</span>
                <textarea value={form.message} onChange={(e) => set('message', e.target.value)} rows={4} placeholder={t.msgPh} className={`${field} resize-none`} />
              </label>
              {errors.form && <p role="alert" className="sm:col-span-2 text-[13px] text-red-800">{errors.form}</p>}
              <button type="submit" disabled={status === 'sending'}
                className="sm:col-span-2 group bg-espresso text-ivory text-[12px] tracking-[0.25em] uppercase py-5 flex items-center justify-center gap-3 hover:bg-gold transition-colors disabled:opacity-60 active:scale-[0.99]">
                {status === 'sending' ? t.sending : (<>{t.submit} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></>)}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
