import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Mic2, Route, Users } from "lucide-react";
import Reveal from "../ui/Reveal";
import ResponsiveImage from "../ui/ResponsiveImage";
import { CTA_VARIANT } from "../../constants/cursorLabels";
import { SECTIONS } from "../../constants/sections";
import { EASE_OUT } from "../../constants/theme";
import { scrollToSection } from "../../utils/scrollToSection";

const iconMap = {
  mic: Mic2,
  users: Users,
  building: Building2,
  route: Route,
};

export default function EventServiceCard({
  title,
  description,
  image,
  icon = "mic",
  delay = 0,
}) {
  const Icon = iconMap[icon] ?? Mic2;

  const handleLearnMore = () => {
    scrollToSection(SECTIONS.contact);
  };

  return (
    <Reveal delay={delay} amount={0.16}>
      <motion.article
        data-cursor-interactive
        whileHover={{ y: -6, scale: 1.012 }}
        transition={{ duration: 0.35, ease: EASE_OUT }}
        className="group relative overflow-hidden rounded-[8px] bg-[#120707] text-left shadow-[0_22px_60px_rgba(0,0,0,0.38)] transition-shadow duration-300 hover:shadow-[0_28px_70px_rgba(243,78,50,0.22)] hover:ring-2 hover:ring-[#F34E32]/60"
        style={{ height: "clamp(220px, 28vw, 320px)" }}
      >
        <ResponsiveImage
          src={image}
          alt={`${title} — ${description}`}
          width={640}
          height={320}
          className="opacity-90 transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 transition duration-300 group-hover:from-black/90" />
        <div className="absolute inset-0 bg-[#F34E32]/0 transition duration-300 group-hover:bg-[#F34E32]/10" />

        <div className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-black/40 text-white/80 backdrop-blur-sm transition duration-300 group-hover:border-[#F34E32]/70 group-hover:bg-[#F34E32]/20 group-hover:text-white">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </div>

        <div className="absolute inset-x-5 bottom-5 z-10 sm:inset-x-6 sm:bottom-6">
          <p className="mb-2 text-[10px] font-black uppercase leading-[1.4] tracking-[0.12em] text-white/88 sm:text-[11px]">
            {description}
          </p>
          <h3 className="font-black uppercase leading-[0.85] tracking-[-0.1em] text-white text-[clamp(1.25rem,2.2vw,1.85rem)] transition duration-300 group-hover:text-white">
            {title}
          </h3>
          <div className="mt-4 flex opacity-100 transition duration-300 sm:opacity-0 sm:group-hover:opacity-100">
            <button
              type="button"
              onClick={handleLearnMore}
              data-cursor-cta={CTA_VARIANT.PRIMARY}
              className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-[6px] bg-[#F34E32] px-5 text-[13px] font-black uppercase tracking-[-0.03em] text-white shadow-[0_14px_40px_rgba(243,78,50,0.28)] transition hover:bg-[#d93e25]"
            >
              Learn More
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}
