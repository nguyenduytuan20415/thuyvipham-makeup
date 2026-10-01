// Bảng giá thật của studio — sửa số tiền / thêm món tại đây, web tự cập nhật.
export interface PriceItem {
  name: string;
  en: string;
  price: string;
}

export interface PriceGroup {
  id: string;
  title: string;
  vi: string;
  items: PriceItem[];
}

export const PRICING: PriceGroup[] = [
  {
    id: 'bridal',
    title: 'Bridal',
    vi: 'MAKEUP CÔ DÂU',
    items: [
      { name: 'Lễ Gia Tiên hoặc Tiệc', en: 'Ancestral Ceremony or Reception', price: '2.000.000₫' },
      { name: 'Chụp Hình Cưới', en: 'Pre-Wedding Photoshoot', price: '1.500.000₫' },
      { name: 'Trọn Gói Lễ, Tiệc', en: 'Full Package (Ceremony + Reception)', price: '3.500.000₫' },
      { name: 'Makeup Cô Sui', en: 'Family of the Couple', price: '700.000₫' },
    ],
  },
  {
    id: 'personal',
    title: 'Personal',
    vi: 'MAKEUP CÁ NHÂN',
    items: [
      { name: 'Makeup Đi Tiệc', en: 'Party / Event Makeup', price: '500–600K' },
      { name: 'Makeup Kỷ Yếu', en: 'Graduation Makeup', price: '450–600K' },
      { name: 'Theo Concept Riêng', en: 'Custom Concept', price: '600–800K' },
    ],
  },
];

export const PRICING_NOTE =
  'Giá này đã bao gồm cả làm tóc! Di chuyển trên 3km thì có thêm chút phí phụ thu nhẹ ạ! ^^';
