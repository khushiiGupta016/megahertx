import { useState } from "react";

export default function ResponsiveImage({
  src,
  alt = "Creative Portfolio Asset",
  width,
  height,
  className = "",
  loading = "lazy",
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`bg-[#120707] ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      onError={() => setHasError(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
