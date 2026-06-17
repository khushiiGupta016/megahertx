export default function HeroTile({ image, className = "", alt = "Production still" }) {
  return (
    <div
      className={`shrink-0 overflow-hidden rounded-[10px] bg-white/5 shadow-[0_28px_80px_rgba(0,0,0,0.55)] ${className}`}
    >
      <img src={image} alt={alt} className="h-full w-full object-cover opacity-82" loading="lazy" />
    </div>
  );
}
