import { motion, useReducedMotion } from "framer-motion";
import HeroTile from "./HeroTile";

export default function MovingHeroRow({ items, reverse = false, speed = 36, className = "" }) {
  const reduceMotion = useReducedMotion();
  const doubled = [...items, ...items];

  return (
    <motion.div
      className={`flex w-max gap-7 will-change-transform ${className}`}
      initial={{ x: reverse ? "-50%" : "0%" }}
      animate={reduceMotion ? undefined : { x: reverse ? "0%" : "-50%" }}
      transition={
        reduceMotion
          ? undefined
          : { duration: speed, repeat: Infinity, ease: "linear" }
      }
    >
      {doubled.map((tile, index) => (
        <HeroTile key={`${tile.image}-${index}`} image={tile.image} className={tile.className} />
      ))}
    </motion.div>
  );
}
