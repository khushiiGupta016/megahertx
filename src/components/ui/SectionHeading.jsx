import { motion } from "framer-motion";
import { EASE_SCRIBBLE } from "../../constants/theme";
import Reveal from "./Reveal";

export default function SectionHeading({ title, scribbleTarget }) {
  const parts = title.split(scribbleTarget);
  const hasSplit = parts.length === 2;

  return (
    <Reveal>
      <div className="relative mb-11 flex flex-col gap-10">
        <div className="relative inline-flex w-fit items-center">
          <h2 className="relative z-10 text-[30px] font-black leading-none tracking-[-0.055em] text-white sm:text-[36px] lg:text-[40px]">
            {hasSplit ? (
              <>
                {parts[0]}
                <span className="relative inline-block">
                  {scribbleTarget}
                  <motion.svg
                    aria-hidden="true"
                    viewBox="0 0 260 82"
                    className="pointer-events-none absolute -right-8 -top-4 h-[74px] w-[190px] overflow-visible opacity-80"
                  >
                    {[0, 1, 2, 3].map((item) => (
                      <motion.ellipse
                        key={item}
                        cx="130"
                        cy="42"
                        rx={96 + item * 4}
                        ry={22 + item * 2}
                        fill="none"
                        stroke="rgba(255,255,255,0.72)"
                        strokeWidth="1.1"
                        transform={`rotate(${item * 4 - 7} 130 42)`}
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.9, delay: item * 0.08, ease: EASE_SCRIBBLE }}
                      />
                    ))}
                  </motion.svg>
                </span>
              </>
            ) : (
              title
            )}
          </h2>
        </div>
        <div className="h-px w-full bg-white/42" />
      </div>
    </Reveal>
  );
}
