import { motion } from "framer-motion";
import { EASE_SCRIBBLE } from "../../constants/theme";

const paths = [
  "M28 72 C52 18 172 12 304 25 C420 36 480 70 445 105 C407 143 233 145 95 125 C33 116 5 93 28 72Z",
  "M18 84 C67 35 183 10 317 22 C448 34 490 83 426 119 C363 154 197 150 79 131 C24 122 -10 101 18 84Z",
  "M40 60 C112 19 265 5 391 45 C470 70 458 126 350 141 C243 157 92 134 36 105 C2 88 12 74 40 60Z",
  "M8 93 C92 42 202 19 338 34 C461 48 487 95 397 128 C311 160 139 143 55 119 C2 104 -18 80 8 93Z",
];

export default function ScribbleTitle({ children, color = "#3F3F3F", stroke = "#3F3F3F", center = false }) {
  return (
    <div className={`relative inline-block ${center ? "mx-auto" : ""}`}>
      <h2
        style={{ color }}
        className="relative z-10 text-[clamp(3rem,5.9vw,6.2rem)] font-black leading-[0.83] tracking-[-0.08em]"
      >
        {children}
      </h2>
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 500 170"
        className="pointer-events-none absolute -left-[10%] -top-[27%] z-0 h-[150%] w-[126%] overflow-visible"
      >
        {paths.map((d, index) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke={stroke}
            strokeWidth={index === 0 ? 1.65 : 1.15}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.86 }}
            viewport={{ once: true, amount: 0.58 }}
            transition={{ duration: 1.1, delay: index * 0.08, ease: EASE_SCRIBBLE }}
          />
        ))}
      </motion.svg>
    </div>
  );
}
