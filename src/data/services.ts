// Swap any `src` with your real campaign photography — layout stays intact.
export interface Service {
  id: string;
  no: string;
  title: string;
  vi: string;
  desc: string;
  descVi: string;
  price: string;
  img: string;
}

export const SERVICES: Service[] = [
  {
    id: 'bridal',
    no: '01',
    title: 'Bridal Makeup',
    vi: 'Trang điểm cô dâu',
    desc: 'Long-wear, luminous bridal look with trial session and skin prep ritual.',
    descVi: 'Look cô dâu rạng rỡ lâu trôi, kèm buổi makeup thử và nghi thức chăm da.',
    price: 'from 700.000₫',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'event',
    no: '02',
    title: 'Event Makeup',
    vi: 'Trang điểm dự tiệc',
    desc: 'Soft glam to full glam — camera-ready for every evening you own.',
    descVi: 'Từ soft glam đến full glam — sẵn sàng trước ống kính cho mọi buổi tiệc.',
    price: 'from 500.000₫',
    img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'photoshoot',
    no: '03',
    title: 'Photoshoot',
    vi: 'Makeup photoshoot',
    desc: 'Editorial-grade artistry built for studio light, film and flash.',
    descVi: 'Nghệ thuật chuẩn editorial cho ánh sáng studio, phim và đèn flash.',
    price: 'from 1.500.000₫',
    img: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'personal',
    no: '04',
    title: 'Personal Makeup',
    vi: 'Trang điểm cá nhân',
    desc: 'Your features, elevated. Natural, refined, unmistakably you.',
    descVi: 'Tôn vinh đường nét của bạn. Tự nhiên, tinh tế, vẫn là chính bạn.',
    price: 'from 600.000₫',
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'hair',
    no: '05',
    title: 'Hair & Makeup',
    vi: 'Combo tóc & makeup',
    desc: 'Complete head-to-toe styling with our senior hair artists.',
    descVi: 'Styling trọn vẹn từ đầu đến chân cùng nghệ sĩ tóc senior.',
    price: 'from 1.800.000₫',
    img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'vip',
    no: '06',
    title: 'VIP / On-Location',
    vi: 'Makeup tận nơi',
    desc: 'Private team at your hotel, villa or venue — anywhere in Vietnam.',
    descVi: 'Đội ngũ riêng tại khách sạn, villa hay địa điểm của bạn — khắp Việt Nam.',
    price: 'from 6.000.000₫',
    img: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'aodai',
    no: '07',
    title: 'Ao Dai Glamour',
    vi: 'Makeup áo dài',
    desc: 'Gentle, luminous makeup for the classic Ao Dai — poetic, timeless, heritage glow.',
    descVi: 'Makeup dịu nhẹ, rạng rỡ cho tà áo dài — nên thơ, vượt thời gian.',
    price: 'from 1.000.000₫',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'graduation',
    no: '08',
    title: 'Graduation & Yearbook',
    vi: 'Makeup kỷ yếu',
    desc: 'Fresh, radiant, long-lasting looks for your milestone — picture-perfect all day.',
    descVi: 'Tươi tắn, rạng rỡ, bền màu cho ngày trọng đại — hoàn hảo trong mọi khung hình.',
    price: 'from 450.000₫',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'family',
    no: '09',
    title: 'Family & Guest Glam',
    vi: 'Makeup người nhà & khách tiệc',
    desc: 'Tailored looks for bridal party and family — cohesive, sophisticated, individual.',
    descVi: 'Look riêng cho dàn phù dâu và gia đình — hài hòa mà vẫn cá tính.',
    price: 'from 700.000₫',
    img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop',
  },
];
