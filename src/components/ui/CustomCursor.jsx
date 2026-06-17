import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useCustomCursor from "../../hooks/useCustomCursor";
import usePointerFine from "../../hooks/usePointerFine";

const CTA_STYLES = {
  primary:
    "border-[#F34E32]/30 bg-[#F34E32]/25 shadow-[0_0_30px_rgba(243,78,50,0.45)] backdrop-blur-sm",
  secondary:
    "border-white/25 bg-white/20 shadow-[0_0_28px_rgba(255,255,255,0.35)] backdrop-blur-sm",
  light:
    "border-[#F34E32]/35 bg-[#F34E32]/22 shadow-[0_0_26px_rgba(243,78,50,0.4)] backdrop-blur-sm",
};

export default function CustomCursor() {
  const enabled = usePointerFine();
  const { cursorRef, label, mode, ctaVariant } = useCustomCursor(enabled);

  useEffect(() => {
    document.body.classList.toggle("has-custom-cursor", enabled);
    return () => {
      document.body.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  const isScaled = mode !== "rest";
  const showLabel = mode === "label" && label;
  const ctaStyle = CTA_STYLES[ctaVariant] || CTA_STYLES.primary;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[10000]"
      style={{
        transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%) scale(1)",
        willChange: "transform, opacity",
      }}
    >
      <div className="relative isolate h-7 w-7">
        <div
          className={`absolute inset-0 rounded-full border transition-[border-color,background-color,opacity] duration-300 mix-blend-difference ${
            mode === "cta"
              ? "border-transparent bg-transparent opacity-0"
              : isScaled
                ? "border-white bg-transparent"
                : "border-white bg-transparent"
          }`}
        />

        <div
          className={`pointer-events-none absolute inset-0 rounded-full transition-[opacity,transform,box-shadow,background-color,border-color] duration-300 ${
            mode === "cta" ? `opacity-100 ${ctaStyle}` : "border-transparent bg-transparent opacity-0"
          }`}
          style={{ mixBlendMode: "normal" }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {showLabel ? (
              <motion.span
                key={label}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.14em] text-white"
                style={{ mixBlendMode: "normal" }}
              >
                {label}
              </motion.span>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
