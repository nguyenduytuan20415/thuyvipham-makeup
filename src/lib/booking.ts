// Booking logic is UI-agnostic — swap `submitBooking` with Firebase/Supabase/REST later.
export interface BookingPayload {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  artist: string;
  message: string;
}

export interface BookingError {
  field: keyof BookingPayload;
  message: string;
}

export function validateBooking(p: BookingPayload, lang: 'vi' | 'en' = 'vi'): BookingError[] {
  const M = {
    vi: {
      name: 'Vui lòng nhập họ tên.',
      phone: 'Vui lòng nhập số điện thoại hợp lệ.',
      email: 'Vui lòng nhập email hợp lệ.',
      service: 'Vui lòng chọn dịch vụ.',
      date: 'Vui lòng chọn ngày mong muốn.',
      time: 'Vui lòng chọn giờ mong muốn.',
    },
    en: {
      name: 'Please enter your full name.',
      phone: 'Please enter a valid phone number.',
      email: 'Please enter a valid email.',
      service: 'Please choose a service.',
      date: 'Please pick a preferred date.',
      time: 'Please pick a preferred time.',
    },
  }[lang];
  const errs: BookingError[] = [];
  if (p.name.trim().length < 2) errs.push({ field: 'name', message: M.name });
  if (!/^[0-9+\s().-]{8,}$/.test(p.phone.trim())) errs.push({ field: 'phone', message: M.phone });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email.trim())) errs.push({ field: 'email', message: M.email });
  if (!p.service) errs.push({ field: 'service', message: M.service });
  if (!p.date) errs.push({ field: 'date', message: M.date });
  if (!p.time) errs.push({ field: 'time', message: M.time });
  return errs;
}

export async function submitBooking(payload: BookingPayload): Promise<{ reference: string }> {
  // TODO: replace with real API — e.g. supabase.from('bookings').insert(payload)
  await new Promise((r) => setTimeout(r, 1200));
  const ref = 'ELN-' + Math.random().toString(36).slice(2, 7).toUpperCase();
  try {
    localStorage.setItem(`elan-booking-${ref}`, JSON.stringify({ ...payload, createdAt: new Date().toISOString() }));
  } catch { /* private mode */ }
  return { reference: ref };
}
