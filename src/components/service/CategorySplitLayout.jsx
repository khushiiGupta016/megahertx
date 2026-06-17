import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import ScribbleTitle from "../ui/ScribbleTitle";
import { CREAM, DEEP, EASE_OUT } from "../../constants/theme";

const themes = {
  cream: {
    bg: CREAM,
    text: "text-[#3F3F3F]",
    titleColor: "#3E3E3E",
    stroke: "#555",
    line: "bg-black/22",
    para: "text-[#686868]",
  },
  dark: {
    bg: DEEP,
    text: "text-white",
    titleColor: "#FFFFFF",
    stroke: "#FFFFFF",
    line: "bg-white/24",
    para: "text-white/88",
  },
};

export default function CategorySplitLayout({
  id,
  theme = "cream",
  title,
  intro,
  decoration = null,
  reverse = false,
  children,
}) {
  const t = themes[theme];

  return (
    <section
      id={id}
      style={{ backgroundColor: t.bg }}
      className={`scroll-mt-[60px] overflow-hidden px-5 py-20 sm:px-8 lg:px-10 lg:py-28 ${t.text}`}
    >
      <div className="mx-auto grid max-w-[1760px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className={reverse ? "lg:order-2" : undefined}>
          <Reveal>
            <ScribbleTitle color={t.titleColor} stroke={t.stroke}>
              {title}
            </ScribbleTitle>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ duration: 1, ease: EASE_OUT }}
              className={`mt-9 h-px w-full origin-left ${t.line}`}
            />
            <p className={`mt-8 max-w-[700px] text-[18px] font-semibold leading-[1.55] tracking-[-0.025em] sm:text-[23px] ${t.para}`}>
              {intro}
            </p>
            {decoration}
          </Reveal>
        </div>

        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7 ${reverse ? "lg:order-1" : undefined}`}>{children}</div>
      </div>
    </section>
  );
}
