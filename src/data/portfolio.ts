export type LookCategory = 'Bridal' | 'Glam' | 'Soft Glam' | 'Editorial' | 'Korean' | 'Event' | 'Ao Dai';

export interface Look {
  id: number;
  name: string;
  artist: string;
  category: LookCategory;
  desc: string;
  descVi: string;
  img: string;
  tall?: boolean;
}

export const CATEGORIES = ['All', 'Bridal', 'Glam', 'Soft Glam', 'Editorial', 'Korean', 'Event', 'Ao Dai'] as const;

export const LOOKS: Look[] = [
  { id: 1, name: 'Ivoire Bride', artist: 'Linh Nguyen', category: 'Bridal', desc: 'Luminous skin, champagne eye, blurred rose lip — our most requested bridal look.', descVi: 'Da căng bóng, mắt champagne, môi hồng nhòe — look cô dâu được yêu cầu nhiều nhất.', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop', tall: true },
  { id: 2, name: 'Nuit Dorée', artist: 'Minh Anh', category: 'Glam', desc: 'Sculpted bronze glam with gold shimmer for evening light.', descVi: 'Glam đồng điêu khắc ánh nhũ vàng cho ánh đèn buổi tối.', img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Petal Veil', artist: 'Linh Nguyen', category: 'Soft Glam', desc: 'Feathered liner, satin skin, soft-focus blush.', descVi: 'Kẻ mắt mềm, da satin, má hồng mờ ảo.', img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop', tall: true },
  { id: 4, name: 'Atelier No.9', artist: 'Minh Anh', category: 'Editorial', desc: 'Graphic liner and bare skin — backstage at Saigon Fashion Week.', descVi: 'Kẻ mắt graphic và da mộc — hậu trường Tuần lễ Thời trang Sài Gòn.', img: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?q=80&w=800&auto=format&fit=crop' },
  { id: 5, name: 'Seoul Morning', artist: 'Thao Vy', category: 'Korean', desc: 'Glass skin, gradient lip, straight airy brow.', descVi: 'Da glass skin, môi loang, chân mày ngang tự nhiên.', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop', tall: true },
  { id: 6, name: 'Champagne Hour', artist: 'Thao Vy', category: 'Event', desc: 'Warm nude palette that photographs beautifully in flash.', descVi: 'Bảng nude ấm lên hình đẹp tuyệt vời dưới đèn flash.', img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop' },
  { id: 7, name: 'La Mariée', artist: 'Linh Nguyen', category: 'Bridal', desc: 'Classic French bridal — defined eye, velvet matte lip.', descVi: 'Cô dâu Pháp cổ điển — mắt sắc nét, môi lì nhung.', img: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=800&auto=format&fit=crop' },
  { id: 8, name: 'Sculpt & Silk', artist: 'Minh Anh', category: 'Editorial', desc: 'Monochrome silk skin study for magazine cover.', descVi: 'Nghiên cứu da lụa đơn sắc cho bìa tạp chí.', img: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=800&auto=format&fit=crop', tall: true },
  { id: 9, name: 'Áo Dài Thơ', artist: 'ThuyVi Pham', category: 'Ao Dai', desc: 'Luminous heritage glow for the classic Ao Dai — poetic and timeless.', descVi: 'Rạng rỡ di sản cho tà áo dài cổ điển — nên thơ và vượt thời gian.', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop' },
];
