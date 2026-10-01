export interface Testimonial {
  quote: string;
  quoteVi: string;
  name: string;
  service: string;
  serviceVi: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'I looked like myself, only unforgettable. My bridal makeup lasted 14 hours.',
    quoteVi: 'Tôi vẫn là chính mình, chỉ là phiên bản khó quên. Lớp makeup cô dâu bền suốt 14 giờ.',
    name: 'Phuong Thao',
    service: 'Bridal Makeup',
    serviceVi: 'Makeup Cô Dâu',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote: 'The most calming morning of my wedding. Linh is a true artist.',
    quoteVi: 'Buổi sáng đám cưới thư thái nhất. Linh là một nghệ sĩ thực thụ.',
    name: 'Jessica Tran',
    service: 'VIP On-Location',
    serviceVi: 'Dịch Vụ VIP Tận Nơi',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote: 'Editorial team finished 8 looks flawlessly. Our photographer was amazed.',
    quoteVi: 'Đội editorial hoàn thành 8 look không tì vết. Nhiếp ảnh gia của chúng tôi đã kinh ngạc.',
    name: 'An Nguyen',
    service: 'Photoshoot',
    serviceVi: 'Chụp Photoshoot',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
];
