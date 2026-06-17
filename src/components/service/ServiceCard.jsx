import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import { EASE_OUT } from "../../constants/theme";

export default function ServiceCard({
  title,
  description,
  image,
  action = "display",
  onBook,
  variant = "film",
  cursorLabel,
  delay = 0,
}) {
  const isBooking = action === "booking";
  const accentRing = variant === "voice" ? "hover:ring-[#F34E32]/60" : "hover:ring-black/20";

  const cardInner = (
    <>
      <img
        src={image}
        alt={`${title} — ${description}`}
        className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15" />

      <div className="absolute inset-x-5 bottom-5 z-10 sm:inset-x-6 sm:bottom-6">
        <p className="mb-2 text-[10px] font-black uppercase leading-[1.4] tracking-[0.12em] text-white/88 sm:text-[11px]">
          {description}
        </p>
        <h3 className="font-black uppercase leading-[0.85] tracking-[-0.1em] text-white text-[clamp(1.25rem,2.2vw,1.85rem)]">
          {title}
        </h3>
        <div
          className={`mt-4 flex transition duration-300 ${isBooking ? "opacity-100" : "opacity-100 sm:opacity-0 sm:group-hover:opacity-100"}`}
        >
          <span className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[6px] bg-[#F34E32] px-5 text-[13px] font-black uppercase tracking-[-0.03em] text-white shadow-[0_14px_40px_rgba(243,78,50,0.28)] transition group-hover:bg-[#d93e25]">
            {isBooking ? "Book Slot" : "Learn More"}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </>
  );

  const cardClass = `group relative block w-full overflow-hidden rounded-[8px] bg-[#120707] text-left shadow-[0_22px_60px_rgba(0,0,0,0.38)] transition-shadow duration-300 hover:shadow-[0_28px_70px_rgba(0,0,0,0.48)] hover:ring-2 ${accentRing}`;

  return (
    <Reveal delay={delay} amount={0.16}>
      {isBooking ? (
        <motion.button
          type="button"
          onClick={onBook}
          aria-label={`Book a slot for ${title}`}
          data-cursor={cursorLabel}
          whileHover={{ y: -6, scale: 1.012 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
          className={`${cardClass} relative cursor-pointer`}
          style={{ height: "clamp(220px, 28vw, 320px)" }}
        >
          {cardInner}
        </motion.button>
      ) : (
        <motion.div
          data-cursor={cursorLabel}
          whileHover={{ y: -6, scale: 1.012 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
          className={`${cardClass} relative`}
          style={{ height: "clamp(220px, 28vw, 320px)" }}
        >
          {cardInner}
        </motion.div>
      )}
    </Reveal>
  );
}
