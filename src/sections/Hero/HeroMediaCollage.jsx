import { motion } from "framer-motion";
import { heroImages } from "../../constants/images";
import { EASE_OUT } from "../../constants/theme";
import MovingHeroRow from "./MovingHeroRow";

const rowOne = [
  { image: heroImages.filmSet, width: 370, height: 220 },
  { image: heroImages.cinemaCamera, width: 440, height: 220 },
  { image: heroImages.director, width: 330, height: 220 },
  { image: heroImages.production, width: 360, height: 220 },
  { image: heroImages.filmReel, width: 400, height: 220 },
];

const rowTwo = [
  { image: heroImages.premiere, width: 470, height: 270 },
  { image: heroImages.voiceStudio, width: 440, height: 270 },
  { image: heroImages.concertStage, width: 380, height: 270 },
  { image: heroImages.spotlight, width: 360, height: 270 },
  { image: heroImages.redCarpet, width: 520, height: 330 },
];

const rowThree = [
  { image: heroImages.lifestyle, width: 360, height: 235 },
  { image: heroImages.corporateOffice, width: 470, height: 235 },
  { image: heroImages.promoAd, width: 390, height: 235 },
  { image: heroImages.narration, width: 400, height: 235 },
  { image: heroImages.studioMic, width: 440, height: 235 },
];

export default function HeroMediaCollage() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute left-1/2 top-1/2 flex w-[190vw] -translate-x-1/2 -translate-y-1/2 flex-col gap-7 opacity-95"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: EASE_OUT }}
      >
        <MovingHeroRow
          items={rowOne}
          speed={46}
          className="-ml-[18vw]"
          rowStyle={{ transform: "rotate(-8deg)" }}
        />
        <MovingHeroRow
          items={rowTwo}
          reverse
          speed={52}
          className="-ml-[38vw] mt-7"
          rowStyle={{ transform: "rotate(-6deg)" }}
        />
        <MovingHeroRow
          items={rowThree}
          speed={48}
          className="-ml-[10vw] mt-7"
          rowStyle={{ transform: "rotate(-10deg)" }}
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.55)_45%,rgba(0,0,0,0.82)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-black/50" />
    </div>
  );
}
