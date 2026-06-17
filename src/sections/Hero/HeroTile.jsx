import ResponsiveImage from "../../components/ui/ResponsiveImage";

export default function HeroTile({
  image,
  className = "",
  alt = "Creative Portfolio Asset",
  width = 400,
  height = 220,
}) {
  return (
    <div
      className={`shrink-0 overflow-hidden rounded-[10px] bg-white/5 shadow-[0_28px_80px_rgba(0,0,0,0.55)] ${className}`}
      style={{ width, height }}
    >
      <ResponsiveImage
        src={image}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className="opacity-82"
      />
    </div>
  );
}
