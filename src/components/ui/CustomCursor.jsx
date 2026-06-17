import { useEffect } from "react";
import useCustomCursor from "../../hooks/useCustomCursor";
import usePointerFine from "../../hooks/usePointerFine";

export default function CustomCursor() {
  const enabled = usePointerFine();
  const { cursorRef, label, isHovering } = useCustomCursor(enabled);

  useEffect(() => {
    document.body.classList.toggle("has-custom-cursor", enabled);
    return () => {
      document.body.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[10000] -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{ transform: "translate3d(-100px, -100px, 0) scale(1)" }}
    >
      <div
        className={`flex h-7 w-7 items-center justify-center rounded-full border transition-[background-color,backdrop-filter,border-color] duration-300 ${
          isHovering
            ? "border-white/20 bg-white/10 backdrop-blur-md"
            : "border-white/55 bg-transparent"
        }`}
      >
        <span
          className={`whitespace-nowrap text-[10px] font-black uppercase tracking-[0.14em] text-white transition-opacity duration-300 ${
            isHovering && label ? "opacity-100" : "opacity-0"
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
