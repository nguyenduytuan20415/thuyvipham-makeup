/**
 * Logo chính: TV monogram + chữ ký "Thuy Vi Pham" + MAKEUP ARTIST.
 * SVG được nhúng trực tiếp (không dùng <img>) vì font trong file SVG bị trình duyệt
 * chặn khi nạp qua <img> — nhúng inline thì kế thừa được font của trang.
 */
export function LogoLockup({ compact = false }: { light?: boolean; compact?: boolean }) {
  const h = compact ? 40 : 48;
  return (
    <a
      href="#home"
      className="flex items-center select-none"
      aria-label="Thuy Vi Pham — Makeup Artist — trang chủ"
    >
      <svg
        viewBox="0 0 680 322"
        role="img"
        aria-label="Thuy Vi Pham — Makeup Artist"
        style={{ height: h, width: 'auto' }}
      >
        <rect width="680" height="322" fill="#F1ECE7" />
        <text
          x="340" y="208"
          textAnchor="middle"
          fontFamily="'Cormorant Garamond', Georgia, serif"
          fontSize="220" fontWeight="500" letterSpacing="-14"
          fill="#A27B5F"
        >
          TV
        </text>
        <path
          d="M 118 128 C 240 100, 430 102, 566 126"
          fill="none" stroke="#5D554A" strokeWidth="2" strokeLinecap="round" opacity="0.75"
        />
        <text
          x="340" y="182"
          textAnchor="middle"
          fontFamily="'Pinyon Script', 'Segoe Script', cursive"
          fontSize="72" fill="#5D554A"
        >
          Thuy Vi Pham
        </text>
        <text
          x="344" y="282"
          textAnchor="middle"
          fontFamily="'Jost', system-ui, sans-serif"
          fontSize="17" fontWeight="500" letterSpacing="9"
          fill="#5D554A"
        >
          MAKEUP ARTIST
        </text>
      </svg>
    </a>
  );
}

/** Logo tròn (con dấu hồng) — dùng cho avatar / social nếu cần. */
export function LogoMark({ size = 40, className = '' }: { size?: number; className?: string; light?: boolean }) {
  return (
    <img
      src="/brand/thuyvi-logo.png"
      alt="Thuy Vi Pham logo"
      width={size} height={size}
      className={`rounded-full object-cover shrink-0 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}