# ÉLAN BEAUTY — Brand Kit v1.0

## 1. Logo
| File | Dùng khi nào |
|---|---|
| `public/brand/elan-logo.svg` | Lockup chính (web header sáng, ấn phẩm) — chữ `currentColor`, ring gold cố định |
| `public/brand/elan-mark.svg` | Monogram tròn: avatar social, favicon nền, watermark, con dấu academy |
| `public/favicon.svg` | Favicon nền ink + chữ ivory (đã gắn trong `index.html`) |
| `src/components/Logo.tsx` | Component React (`LogoMark`, `LogoLockup`) — header/footer đang dùng bản này |

**Cấu tạo:** ring gold mảnh `#B9975B` + serif `É` (Cormorant Garamond) + chấm gold (điểm cọ) + wordmark letterspaced + descriptor `STUDIO · ACADEMY`.

**Clearspace:** tối thiểu bằng chiều cao chữ `É` ở mọi phía. **Không:** đổi màu ring, stretch, đổ bóng, gradient, gắn tagline khác.

## 2. Màu (accent duy nhất: gold)
| Token | Hex | Vai trò |
|---|---|---|
| ivory | `#FAF7F2` | Nền chính |
| cream | `#F4EEE5` | Nền section phụ |
| champagne | `#E8DCC8` | Headline italic trên nền tối |
| nude / beige | `#D9C3A9` / `#C9B291` | Tint ảnh, border |
| mocha | `#8A6F55` | Label phụ nền sáng |
| espresso | `#2B2118` | Chữ chính, nền tối vừa |
| ink | `#17120D` | Nền tối sâu (không dùng đen tuyền) |
| gold / goldlight | `#B9975B` / `#D8C39A` | Accent duy nhất (sáng / trên nền tối) |

Tokens trong code: `src/data/brand.ts` + `tailwind.config.js`.

## 3. Typography
- **Display:** Cormorant Garamond (headline, quote, số liệu) — luôn `text-wrap: balance`, italic có `pb` chống cắt descender (y, g, p).
- **Text/UI:** Jost (body, label, form) — label dùng uppercase `tracking 0.2–0.32em`.
- Không nhồi serif vào câu sans và ngược lại để "tạo điểm nhấn".

## 4. Shape & Motion
- **Shape:** mặt phẳng (card, panel, nút, input) góc nhọn `radius 0`; hình tròn chỉ cho avatar, icon-button, filter pill, slider handle.
- **Motion:** chậm, một lần (`ease [0.16,1,0.3,1]`, 0.5–1.1s); chỉ 1 marquee toàn trang; tôn trọng `prefers-reduced-motion`.

## 5. Đổi tên thương hiệu
Sửa `name` trong `src/data/site.ts` → header, footer, title, booking tự cập nhật. Nếu đổi cả logo: thay 3 file SVG + kiểm tra contrast header 2 trạng thái (trong suốt / blur).
