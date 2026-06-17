import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "../../constants/theme";

export default function Reveal({ children, className = "", delay = 0, amount = 0.18 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 42 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.85, ease: EASE_OUT, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
