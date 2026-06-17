import { motion } from "framer-motion";
import Reveal from "../../components/ui/Reveal";
import ResponsiveImage from "../../components/ui/ResponsiveImage";
import { EASE_OUT } from "../../constants/theme";

export default function NavHubCard({ title, description, image, delay = 0, onNavigate, card }) {
  return (
    <Reveal delay={delay} amount={0.16}>
      <motion.button
        type="button"
        data-cursor-label={title.toUpperCase()}
        onClick={() => onNavigate(card.sectionId)}
        aria-label={`Go to ${title} — ${description}`}
        whileHover={{ y: -7, scale: 1.012 }}
        transition={{ duration: 0.35, ease: EASE_OUT }}
        className="group relative block w-full cursor-pointer overflow-hidden rounded-[7px] bg-[#120707] text-left shadow-[0_22px_60px_rgba(0,0,0,0.42)] transition-shadow duration-300 hover:shadow-[0_28px_70px_rgba(243,78,50,0.18)] hover:ring-2 hover:ring-[#F34E32]/60"
        style={{ height: "clamp(210px, 25vw, 320px)" }}
      >
        <ResponsiveImage
          src={image}
          alt={`${title} — ${description}`}
          width={640}
          height={320}
          className="opacity-90 transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />

        <div className="absolute inset-x-5 bottom-5 z-10 sm:inset-x-6 sm:bottom-6">
          <p className="mb-2 text-[10px] font-black uppercase leading-[1.4] tracking-[0.12em] text-white/90 sm:text-[12px]">
            {description}
          </p>
          <h3 className="font-black uppercase leading-[0.78] tracking-[-0.11em] text-white/80 text-[clamp(1.45rem,2.55vw,3rem)]">
            {title}
          </h3>
        </div>
      </motion.button>
    </Reveal>
  );
}
