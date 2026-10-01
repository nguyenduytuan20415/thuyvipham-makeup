import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'vi' | 'en';

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: 'vi', setLang: () => {} });

export const useLang = () => useContext(LangCtx);

/** Bảng chuỗi UI song ngữ. Thêm key mới tại đây, dùng qua `useT()`. */
const UI = {
  en: {
    navHome: 'Home', navServices: 'Services', navPortfolio: 'Portfolio', navArtists: 'Artists',
    navAcademy: 'Academy', navAbout: 'About', navContact: 'Contact',
    book: 'Book Appointment', bookShort: 'Book', explore: 'Explore Our Work',
    heroEyebrow: 'Makeup Studio · Academy — Saigon, Est. 2015',
    heroL1: 'Where Beauty', heroL2: 'Becomes Art.',
    heroSub: 'Professional makeup artistry crafted for your most unforgettable moments.',
    stat1: 'Years of Experience', stat2: 'Happy Clients', stat3: 'Professional Artists', stat4: 'Looks Created',
    servicesTitle: 'The Art of Makeup', servicesSub: 'Every look is created around you.',
    priceListLink: 'View full price list →',
    pricingTitle: 'Price List', pricingSub: 'Transparent, all-inclusive, no hidden fees.',
    pricingCta: 'Book now',
    pricingNote: 'Prices include hairstyling. A surcharge applies for travel beyond 3km.',
    workA: 'Our Signature', workB: 'Looks',
    workSub: 'A living archive of bridal, glam and editorial work by our senior artists.',
    filterAll: 'All', viewLook: 'View Look →', bookLook: 'Book This Look', artBy: 'by',
    baTitle: 'The Transformation', baSub: 'Drag to witness the artistry.',
    before: 'Before', after: 'After',
    artistsTitle: 'Meet Our Artists', artistsLink: 'Book your artist →',
    specialties: 'Specialties', yrsExp: 'experience', bookVerb: 'Book',
    bridalEyebrow: 'Bridal Atelier', bridalL1: 'For Your Most', bridalL2: 'Important Day.',
    bridalText: 'From the first brush stroke to the final touch, every detail is designed to make you feel unmistakably yourself.',
    bridalCta: 'Discover Bridal',
    pkg1: 'Trial makeup & skin consultation', pkg2: 'Wedding-day bridal artistry', pkg3: 'On-location team & touch-up kit',
    testiTitle: 'What Our Clients Say',
    igEyebrow: 'Academy · Social', igTitle: 'Follow the Beauty',
    igSubA: 'Daily looks, backstage moments & masterclasses — ',
    followUs: 'Follow Us',
    ac1t: 'Pro Masterclass', ac1d: '12-week intensive from skin science to editorial.',
    ac2t: 'Bridal Specialist', ac2d: 'The complete bridal business & artistry track.',
    ac3t: 'Personal Lesson 1:1', ac3d: '90 minutes to master your own face.',
    aboutL1: 'A Studio Built on', aboutL2: 'Craft & Calm.',
    aboutText: 'Founded in Saigon in 2015, Thuy Vi Pham began as a two-chair studio with one belief — luxury is not excess, it is precision. Today our artists, educators and stylists serve brides, cameras and classrooms across Vietnam.',
    aboutV1: '6 rooms', aboutL_1: 'Private suites', aboutV2: '9 pros', aboutL_2: 'Master educators',
    aboutV3: '2.1k reviews', aboutL_3: '5.0 rating',
    bkL1: 'Ready for', bkL2: 'Your Look?',
    bkText: 'Tell us about your moment — bridal, editorial or evening. Our coordinators reply within 2 hours, 9:00–20:00 daily.',
    hotline: 'Hotline', studioLbl: 'Studio',
    fName: 'Full Name', fPhone: 'Phone Number', fEmail: 'Email', fService: 'Service',
    fArtist: 'Artist Preference', fDate: 'Preferred Date', fTime: 'Preferred Time', fMsg: 'Message',
    selService: 'Select a service…', noPref: 'No preference',
    msgPh: 'Tell us about your event, dress, inspiration…',
    submit: 'Request an Appointment', sending: 'Sending…',
    doneTitle: 'Thank You.', doneA: 'Your appointment request', doneB: 'has been received. Our team will contact you shortly.',
    again: 'Make another request',
    ctTitle: 'Visit the Studio', ctAddr: 'Studio Address', ctPhone: 'Phone / Hotline',
    ctEmail: 'Email', ctHours: 'Opening Hours', directions: 'Get Directions',
    studioCardT: 'Thuy Vi Pham Studio — Tan Binh', studioCardD: '2 floors · 6 private suites · Academy floor',
    ftExplore: 'Explore', ftServices: 'Services', ftJournal: 'Join our beauty journal',
    ftJournalD: 'Bridal tips & masterclass invites. Once a month.',
    ftEmailPh: 'Email address', ftJoin: 'Join',
    ftWelcome: 'Welcome to the journal — please check your inbox.',
    ftRights: 'All rights reserved.', ftPrivacy: 'Privacy Policy', ftTerms: 'Terms & Conditions',
    ftSticky: 'Book Appointment — ',
  },
  vi: {
    navHome: 'Trang Chủ', navServices: 'Dịch Vụ', navPortfolio: 'Tác Phẩm', navArtists: 'Nghệ Sĩ',
    navAcademy: 'Học Viện', navAbout: 'Về Chúng Tôi', navContact: 'Liên Hệ',
    book: 'Đặt Lịch Hẹn', bookShort: 'Đặt', explore: 'Xem Tác Phẩm',
    heroEyebrow: 'Studio Makeup · Học Viện — Sài Gòn, từ 2015',
    heroL1: 'Nơi Vẻ Đẹp', heroL2: 'Hóa Nghệ Thuật.',
    heroSub: 'Nghệ thuật makeup chuyên nghiệp cho những khoảnh khắc đáng nhớ nhất của bạn.',
    stat1: 'Năm Kinh Nghiệm', stat2: 'Khách Hàng', stat3: 'Nghệ Sĩ Chuyên Nghiệp', stat4: 'Look Đã Tạo',
    servicesTitle: 'Nghệ Thuật Makeup', servicesSub: 'Mỗi diện mạo đều được tạo riêng cho bạn.',
    priceListLink: 'Xem bảng giá đầy đủ →',
    pricingTitle: 'Bảng Giá', pricingSub: 'Minh bạch, trọn gói, không phí ẩn.',
    pricingCta: 'Đặt lịch ngay',
    pricingNote: 'Giá này đã bao gồm cả làm tóc! Di chuyển trên 3km thì có thêm chút phí phụ thu nhẹ ạ! ^^',
    workA: 'Bộ Sưu Tập', workB: 'Signature',
    workSub: 'Kho lưu trữ sống động các tác phẩm cô dâu, dạ tiệc và editorial của nghệ sĩ senior.',
    filterAll: 'Tất cả', viewLook: 'Xem →', bookLook: 'Đặt Look Này', artBy: 'bởi',
    baTitle: 'Sự Biến Hóa', baSub: 'Kéo để chứng kiến sự biến hóa.',
    before: 'Trước', after: 'Sau',
    artistsTitle: 'Gặp Gỡ Nghệ Sĩ', artistsLink: 'Đặt artist của bạn →',
    specialties: 'Chuyên môn', yrsExp: 'năm kinh nghiệm', bookVerb: 'Đặt',
    bridalEyebrow: 'Atelier Cô Dâu', bridalL1: 'Cho Ngày', bridalL2: 'Trọng Đại Nhất.',
    bridalText: 'Từ nét cọ đầu tiên đến điểm chạm cuối cùng, mọi chi tiết đều để bạn là chính mình — rạng rỡ nhất.',
    bridalCta: 'Khám Phá Bridal',
    pkg1: 'Trang điểm thử & tư vấn da', pkg2: 'Makeup ngày cưới', pkg3: 'Đội ngũ tận nơi & bộ dặm lại',
    testiTitle: 'Khách Hàng Nói Gì',
    igEyebrow: 'Học Viện · Cộng Đồng', igTitle: 'Theo Dõi Vẻ Đẹp',
    igSubA: 'Look mỗi ngày, hậu trường & masterclass — ',
    followUs: 'Theo Dõi',
    ac1t: 'Masterclass Chuyên Nghiệp', ac1d: 'Khóa chuyên sâu 12 tuần từ khoa học làn da đến editorial.',
    ac2t: 'Chuyên Gia Cô Dâu', ac2d: 'Lộ trình trọn vẹn về nghệ thuật và kinh doanh bridal.',
    ac3t: 'Học Cá Nhân 1:1', ac3d: '90 phút để làm chủ gương mặt của chính bạn.',
    aboutL1: 'Một Studio Được Xây Từ', aboutL2: 'Tay Nghề & Tận Tâm.',
    aboutText: 'Thành lập tại Sài Gòn năm 2015, Thuy Vi Pham khởi đầu từ studio hai ghế với một niềm tin — sang trọng không phải phô trương, mà là chính xác. Hôm nay, nghệ sĩ, giảng viên và stylist của chúng tôi phục vụ cô dâu, ống kính và lớp học khắp Việt Nam.',
    aboutV1: '6 phòng', aboutL_1: 'Phòng riêng', aboutV2: '9 giảng viên', aboutL_2: 'Giảng viên master',
    aboutV3: '2.1k đánh giá', aboutL_3: 'Điểm 5.0',
    bkL1: 'Sẵn Sàng Cho', bkL2: 'Diện Mạo Của Bạn?',
    bkText: 'Kể cho chúng tôi về khoảnh khắc của bạn — cô dâu, editorial hay dạ tiệc. Điều phối viên phản hồi trong 2 giờ, 9:00–20:00 mỗi ngày.',
    hotline: 'Hotline', studioLbl: 'Studio',
    fName: 'Họ Tên', fPhone: 'Số Điện Thoại', fEmail: 'Email', fService: 'Dịch Vụ',
    fArtist: 'Chọn Nghệ Sĩ', fDate: 'Ngày Mong Muốn', fTime: 'Giờ Mong Muốn', fMsg: 'Lời Nhắn',
    selService: 'Chọn dịch vụ…', noPref: 'Không yêu cầu',
    msgPh: 'Kể về sự kiện, trang phục, cảm hứng của bạn…',
    submit: 'Gửi Yêu Cầu Đặt Lịch', sending: 'Đang gửi…',
    doneTitle: 'Cảm Ơn.', doneA: 'Yêu cầu đặt lịch', doneB: 'đã được tiếp nhận. Đội ngũ chúng tôi sẽ liên hệ với bạn sớm.',
    again: 'Gửi yêu cầu khác',
    ctTitle: 'Ghé Thăm Studio', ctAddr: 'Địa Chỉ Studio', ctPhone: 'Điện Thoại / Hotline',
    ctEmail: 'Email', ctHours: 'Giờ Mở Cửa', directions: 'Chỉ Đường',
    studioCardT: 'Thuy Vi Pham Studio — Tân Bình', studioCardD: '2 tầng · 6 phòng riêng · Tầng học viện',
    ftExplore: 'Khám Phá', ftServices: 'Dịch Vụ', ftJournal: 'Nhận beauty journal',
    ftJournalD: 'Mẹo cô dâu & thư mời masterclass. Mỗi tháng một lần.',
    ftEmailPh: 'Địa chỉ email', ftJoin: 'Nhận',
    ftWelcome: 'Chào mừng đến với journal — hãy kiểm tra hộp thư.',
    ftRights: 'Bảo lưu mọi quyền.', ftPrivacy: 'Chính sách riêng tư', ftTerms: 'Điều khoản sử dụng',
    ftSticky: 'Đặt lịch — ',
  },
} as const;

export type UIText = Record<string, string>;
export const useT = (): UIText => UI[useLang().lang];

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      return (localStorage.getItem('elan-lang') as Lang) || 'vi';
    } catch {
      return 'vi';
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem('elan-lang', lang);
    } catch { /* private mode */ }
    document.documentElement.lang = lang;
  }, [lang]);
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

/** Công tắc VI / EN — dùng trong header (sáng & tối). */
export function LangToggle({ light = false }: { light?: boolean }) {
  const { lang, setLang } = useLang();
  const base = light ? 'text-white/60' : 'text-espresso/50';
  const on = light ? 'text-white' : 'text-espresso';
  return (
    <div className={`flex items-center gap-1.5 text-[11px] tracking-[0.18em] uppercase ${light ? 'text-white/60' : 'text-espresso/50'}`} role="group" aria-label="Language / Ngôn ngữ">
      {(['vi', 'en'] as Lang[]).map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && <span className="opacity-40">/</span>}
          <button
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={`transition-colors hover:text-gold py-1 ${lang === l ? `${on} font-semibold` : base}`}
          >
            {l.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
