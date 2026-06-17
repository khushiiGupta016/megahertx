import { motion } from "framer-motion";
import Button from "../../components/ui/Button";
import ScrollIndicator from "../../components/ui/ScrollIndicator";
import { SECTION_HASH, SECTIONS } from "../../constants/sections";
import { EASE_OUT, FONT_SERIF } from "../../constants/theme";
import HeroMediaCollage from "./HeroMediaCollage";

const LOGO_SHADOW = "0 4px 24px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.08)";

export default function Hero() {
  return (
    <section id={SECTIONS.hero} className="relative min-h-screen scroll-mt-[60px] overflow-hidden bg-[#070000] text-white">
      <HeroMediaCollage />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_38%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col items-center justify-center px-5 py-24 text-center sm:px-8 lg:px-10">
        <div className="isolate">
          <motion.h1
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
            className="font-black uppercase leading-[0.78] tracking-tighter whitespace-nowrap text-white drop-shadow-[0_8px_32px_rgba(0,0,0,0.65)]"
            style={{
              fontSize: "clamp(4rem, 12vw, 11rem)",
              letterSpacing: "-0.05em",
              textShadow: LOGO_SHADOW,
            }}
          >
            AMA FILMS
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: EASE_OUT }}
          className="mt-6 max-w-[900px] text-[clamp(1.25rem,2.25vw,2.65rem)] italic leading-tight text-white"
          style={{ fontFamily: FONT_SERIF }}
        >
          Add more to your story.
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
          <Button href={SECTION_HASH(SECTIONS.about)} variant="secondary">
            View Demos
          </Button>
          <Button href={SECTION_HASH(SECTIONS.contact)} variant="primary">
            Start Now
          </Button>
        </motion.div>
      </div>

      <ScrollIndicator href={SECTION_HASH(SECTIONS.about)} />
    </section>
  );
}
