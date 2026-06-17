import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "../../constants/theme";

export default function Toast({ message, isVisible, onDismiss }) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isVisible) return;

    const timer = window.setTimeout(() => {
      onDismiss();
    }, 3500);

    return () => window.clearTimeout(timer);
  }, [isVisible, onDismiss]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isVisible && message && (
        <motion.div
          role="status"
          aria-live="polite"
          className="fixed top-8 left-1/2 z-[120] w-full max-w-[calc(100vw-2rem)] -translate-x-1/2 px-4"
          initial={reduceMotion ? false : { opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -12, scale: 0.98 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
        >
          <div className="mx-auto w-fit rounded-[8px] border border-[#F34E32]/40 bg-[#120707] px-6 py-4 shadow-[0_24px_60px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
            <p className="text-center text-[14px] font-black uppercase tracking-[0.12em] text-white sm:text-[15px]">
              {message}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
