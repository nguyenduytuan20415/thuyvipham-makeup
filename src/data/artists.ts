export interface Artist {
  id: string;
  name: string;
  role: string;
  roleVi: string;
  specialty: string;
  specialtyVi: string;
  years: string;
  yearsVi: string;
  img: string;
  bio: string;
  bioVi: string;
  instagram: string;
}

export const ARTISTS: Artist[] = [
  {
    id: 'linh',
    name: 'Linh Nguyen',
    role: 'Senior Makeup Artist',
    roleVi: 'Nghệ Sĩ Makeup Senior',
    specialty: 'Bridal · Soft Glam',
    specialtyVi: 'Cô Dâu · Nhẹ Nhàng',
    years: '10 yrs',
    yearsVi: '10 năm',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=700&auto=format&fit=crop',
    bio: 'Founder & creative director. 10 years across Paris and Saigon, 3,000+ brides. Known for skin that looks like skin — luminous, calm, timeless.',
    bioVi: 'Nhà sáng lập & giám đốc sáng tạo. 10 năm kinh nghiệm tại Paris và Sài Gòn, hơn 3.000 cô dâu. Nổi tiếng với lớp nền như da thật — căng bóng, điềm tĩnh, vượt thời gian.',
    instagram: '@linh.elan',
  },
  {
    id: 'minhanh',
    name: 'Minh Anh',
    role: 'Creative Makeup Artist',
    roleVi: 'Nghệ Sĩ Makeup Sáng Tạo',
    specialty: 'Editorial · Fashion',
    specialtyVi: 'Editorial · Thời Trang',
    years: '8 yrs',
    yearsVi: '8 năm',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=700&auto=format&fit=crop',
    bio: 'Leads editorial and runway. Backstage at four fashion weeks. Graphic yet wearable — the artist behind our most daring covers.',
    bioVi: 'Dẫn dắt mảng editorial và sàn diễn. Hậu trường bốn tuần lễ thời trang. Ấn tượng mà vẫn dễ diện — người đứng sau những bìa tạp chí táo bạo nhất.',
    instagram: '@minhanh.elan',
  },
  {
    id: 'thaovy',
    name: 'Thao Vy',
    role: 'Senior Makeup Artist',
    roleVi: 'Nghệ Sĩ Makeup Senior',
    specialty: 'Korean · Natural',
    specialtyVi: 'Hàn Quốc · Tự Nhiên',
    years: '7 yrs',
    yearsVi: '7 năm',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=700&auto=format&fit=crop',
    bio: 'Specialist in glass skin and Korean techniques trained in Seoul. Beloved for barely-there looks that last 12 hours in humidity.',
    bioVi: 'Chuyên gia glass skin và kỹ thuật Hàn Quốc được đào tạo tại Seoul. Được yêu thích với look như không mà bền 12 giờ trong khí hậu ẩm.',
    instagram: '@thaovy.elan',
  },
  {
    id: 'thuyvi',
    name: 'ThuyVi Pham',
    role: 'Makeup Artist',
    roleVi: 'Nghệ Sĩ Makeup',
    specialty: 'Bridal · Ao Dai',
    specialtyVi: 'Cô Dâu · Áo Dài',
    years: '5 yrs',
    yearsVi: '5 năm',
    img: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=700&auto=format&fit=crop',
    bio: 'Loved for gentle, luminous looks — from Ao Dai sessions and graduations to bridal parties. Personalized artistry that lets you shine with confidence.',
    bioVi: 'Được yêu thích với look dịu nhẹ, rạng rỡ — từ chụp áo dài, kỷ yếu đến tiệc cưới. Nghệ thuật cá nhân hóa để bạn tỏa sáng đầy tự tin.',
    instagram: '@thuyvi.elan',
  },
];
