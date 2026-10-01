/**
 * ÉLAN BEAUTY — brand tokens (single source of truth).
 * Đổi tên / màu / font toàn site chỉ từ file này + tailwind.config.js.
 */

export const BRAND_TOKENS = {
  colors: {
    ivory: '#FAF7F2', // nền chính (light luxury)
    cream: '#F4EEE5', // nền phụ / section xen kẽ
    champagne: '#E8DCC8', // highlight headline trên nền tối
    nude: '#D9C3A9', // placeholder ảnh, tint
    beige: '#C9B291', // border, chi tiết
    mocha: '#8A6F55', // label phụ trên nền sáng
    espresso: '#2B2118', // chữ chính, nền footer/booking
    ink: '#17120D', // nền tối (hero, portfolio) — không dùng đen tuyền
    gold: '#B9975B', // accent DUY NHẤT toàn site
    goldlight: '#D8C39A', // accent trên nền tối
  },
  type: {
    display: '"Cormorant Garamond", Georgia, serif', // headline — editorial luxury
    text: '"Jost", system-ui, sans-serif', // body/UI — hiện đại, thoáng
  },
  shape: {
    // Quy tắc shape toàn site: mặt phẳng (card, panel, nút) GIỮ GÓC NHỌN (radius 0);
    // hình TRÒN chỉ dùng cho điểm nhấn: avatar, icon-button, filter pill, slider handle.
    radius: 0 as const,
  },
  assets: {
    mark: '/brand/thuyvi-logo.png',
    logo: '/brand/thuyvi-logo.png',
    favicon: '/brand/thuyvi-logo.png',
  },
  clearspace: 'Chiều cao chữ É ở mọi phía — không chèn chữ/hình khác vào vùng này.',
  misuse: [
    'Không đổi màu ring sang màu khác ngoài gold.',
    'Không đặt logo sáng trên nền sáng thiếu contrast (dùng bản ink/espresso).',
    'Không stretch, không đổ bóng, không gradient lên logo.',
    'Không đặt tagline khác dưới lockup ngoài "STUDIO · ACADEMY".',
  ],
} as const;
