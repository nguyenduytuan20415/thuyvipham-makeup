const LOGO_SRC = '/brand/thuyvi-logo.png';

/** Logo ThuyVi Pham — ảnh thật từ chủ studio (bo tròn, crop góc đen). */
export function LogoMark({ size = 40, className = '' }: { size?: number; className?: string; light?: boolean }) {
  return (
    <img
      src={LOGO_SRC}
      alt="ThuyVi Pham — Makeup Artist logo"
      width={size}
      height={size}
      className={`rounded-full object-cover shrink-0 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

/** Logo chính của shop — bản landscape TV monogram + chữ ký (thay cho chữ ÉLAN BEAUTY). */
export function LogoLockup({ compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <a href="#home" className="flex items-center select-none" aria-label="Thuy Vi Pham — Makeup Artist — home">
      <img
        src="/brand/thuyvi-logo-landscape.svg"
        alt="Thuy Vi Pham — Makeup Artist"
        className="w-auto"
        style={{ height: compact ? 40 : 48 }}
      />
    </a>
  );
}
