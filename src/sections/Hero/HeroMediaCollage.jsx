import { motion } from "framer-motion";
import { heroImages } from "../../constants/images";
import { EASE_OUT } from "../../constants/theme";
import MovingHeroRow from "./MovingHeroRow";

const rowOne = [
  { image: heroImages.filmSet, className: "h-[220px] w-[370px]" },
  { image: heroImages.cinemaCamera, className: "h-[220px] w-[440px]" },
  { image: heroImages.director, className: "h-[220px] w-[330px]" },
  { image: heroImages.production, className: "h-[220px] w-[360px]" },
  { image: heroImages.filmReel, className: "h-[220px] w-[400px]" },
];

const rowTwo = [
  { image: heroImages.premiere, className: "h-[270px] w-[470px]" },
  { image: heroImages.voiceStudio, className: "h-[270px] w-[440px]" },
  { image: heroImages.concertStage, className: "h-[270px] w-[380px]" },
  { image: heroImages.spotlight, className: "h-[270px] w-[360px]" },
  { image: heroImages.redCarpet, className: "h-[330px] w-[520px]" },
];

const rowThree = [
  { image: heroImages.director, className: "h-[235px] w-[360px]" },
  { image: heroImages.cinemaCamera, className: "h-[235px] w-[470px]" },
  { image: heroImages.filmSet, className: "h-[235px] w-[390px]" },
  { image: heroImages.concertStage, className: "h-[235px] w-[400px]" },
  { image: heroImages.production, className: "h-[235px] w-[440px]" },
];

export default function HeroMediaCollage() {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-[190vw] -translate-x-1/2 -translate-y-1/2 scale-[1.02] rotate-[-13deg] opacity-95"
      initial={{ opacity: 0, scale: 1.16, rotate: -13 }}
      animate={{ opacity: 1, scale: 1.02, rotate: -13 }}
      transition={{ duration: 1.1, ease: EASE_OUT }}
      aria-hidden="true"
    >
      <MovingHeroRow items={rowOne} speed={46} className="-ml-[18vw]" />
      <MovingHeroRow items={rowTwo} reverse speed={52} className="-ml-[38vw] mt-7" />
      <MovingHeroRow items={rowThree} speed={48} className="-ml-[10vw] mt-7" />
    </motion.div>
  );
}
