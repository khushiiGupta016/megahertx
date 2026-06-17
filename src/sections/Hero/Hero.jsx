import { motion } from "framer-motion";
import { CURSOR } from "../../constants/cursorLabels";
import Button from "../../components/ui/Button";
import ScrollIndicator from "../../components/ui/ScrollIndicator";
import { SECTION_HASH, SECTIONS } from "../../constants/sections";
import { EASE_OUT, FONT_SERIF } from "../../constants/theme";
import HeroMediaCollage from "./HeroMediaCollage";

export default function Hero() {
  return (
    <section id={SECTIONS.hero} className="relative min-h-screen scroll-mt-[60px] overflow-hidden bg-[#070000] text-white">
      <HeroMediaCollage />

      <div className="absolute inset-0 bg-black/48" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.22),rgba(0,0,0,0.78))]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col items-center justify-center px-5 py-24 text-center sm:px-8 lg:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 44 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
          className="text-[clamp(3.8rem,11.5vw,12rem)] font-black uppercase leading-[0.78] tracking-[-0.105em] text-white"
        >
          AMA FILMS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: EASE_OUT }}
          className="mt-6 max-w-[900px] text-[clamp(1.25rem,2.25vw,2.65rem)] italic leading-tight text-white"
          style={{ fontFamily: FONT_SERIF }}
        >
          Stories That Move. Productions That Inspire.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: EASE_OUT }}
          className="mt-5 text-[clamp(0.7rem,1.4vw,1rem)] font-black uppercase tracking-[0.28em] text-white/62"
        >
          Film Production &bull; Voice Overs &bull; Podcasts &bull; Events
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.38, ease: EASE_OUT }}
          className="mt-9 flex w-full flex-col items-center justify-center gap-5 sm:w-auto sm:flex-row"
        >
          <Button href={SECTION_HASH(SECTIONS.about)} variant="secondary" cursorLabel={CURSOR.CONNECT}>
            View Portfolio
          </Button>
          <Button href={SECTION_HASH(SECTIONS.about)} variant="primary" cursorLabel={CURSOR.CONNECT}>
            Get Started
          </Button>
        </motion.div>
      </div>

      <ScrollIndicator href={SECTION_HASH(SECTIONS.about)} />
    </section>
  );
}
