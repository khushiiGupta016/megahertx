import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SECTION_HASH, SECTIONS } from "../../constants/sections";

export default function ScrollIndicator({ href = SECTION_HASH(SECTIONS.about) }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        href={href}
        aria-label="Scroll down to About"
        className="flex flex-col items-center gap-2 text-white/70 transition-colors hover:text-white"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.22em]">Scroll</span>
        <motion.span
          className="flex flex-col items-center"
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, 8, 0],
                  opacity: [0.5, 1, 0.5],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        >
          <ChevronDown className="h-6 w-6 stroke-[2]" />
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-current" />
        </motion.span>
      </a>
    </motion.div>
  );
}
