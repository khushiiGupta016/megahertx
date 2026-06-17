import { motion, useReducedMotion } from "framer-motion";

const bars = [0.45, 0.72, 1, 0.62, 0.88, 0.55, 0.95, 0.68, 0.8, 0.5];

export default function AudioWaveGraphic() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-8 flex h-14 items-end gap-1.5" aria-hidden="true">
      {bars.map((scale, index) => (
        <motion.span
          key={index}
          className="w-1.5 rounded-full bg-[#F34E32]/85"
          style={{ height: `${scale * 100}%` }}
          animate={
            reduceMotion
              ? undefined
              : {
                  scaleY: [1, 0.45 + scale * 0.55, 1],
                  opacity: [0.55, 1, 0.55],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 1.1 + index * 0.06,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.05,
                }
          }
        />
      ))}
    </div>
  );
}
