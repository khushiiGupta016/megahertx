import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Reveal from "../../components/ui/Reveal";
import ScribbleTitle from "../../components/ui/ScribbleTitle";
import { SECTIONS } from "../../constants/sections";
import { EASE_OUT, FONT_SERIF } from "../../constants/theme";
import { getInitials, testimonials } from "../../data/testimonialsData";

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} className="h-3 w-3 fill-[#F34E32] text-[#F34E32]" strokeWidth={0} />
      ))}
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <article className="flex min-h-[168px] flex-col rounded-[8px] bg-[#160000] p-5 text-white sm:min-h-[180px] sm:p-6 lg:min-h-[195px]">
      <StarRating count={item.rating} />
      <p
        className="mt-2 text-[12px] italic text-white/70 sm:text-[13px]"
        style={{ fontFamily: FONT_SERIF }}
      >
        {item.kicker}
      </p>
      <p className="mt-2.5 text-[14px] font-black leading-[1.34] tracking-[-0.055em] sm:text-[16px] lg:text-[17px]">
        {item.quote}
      </p>
      <div className="mt-4 flex items-center gap-2.5">
        <div className="grid h-[37px] w-[37px] shrink-0 place-items-center rounded-full bg-[#182018] text-[11px] font-black text-[#F34E32]">
          {getInitials(item.name)}
        </div>
        <div>
          <p className="text-[12px] font-bold tracking-[-0.03em] sm:text-[14px]">{item.name}</p>
          <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/55 sm:text-[11px]">
            {item.company}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const directionRef = useRef(1);
  const current = testimonials[active];

  const goPrev = () => {
    directionRef.current = -1;
    setActive((value) => (value - 1 + testimonials.length) % testimonials.length);
  };

  const goNext = () => {
    directionRef.current = 1;
    setActive((value) => (value + 1) % testimonials.length);
  };

  const slideOffset = directionRef.current > 0 ? 48 : -48;

  return (
    <section
      id={SECTIONS.testimonials}
      className="scroll-mt-[60px] overflow-hidden bg-[#070000] px-5 py-12 text-white sm:px-8 lg:px-10 lg:py-[4.5rem]"
    >
      <Reveal className="mx-auto max-w-[1250px] text-center">
        <ScribbleTitle color="#FFFFFF" stroke="#FFFFFF" center>
          Testimonials
        </ScribbleTitle>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 1, ease: EASE_OUT }}
          className="mx-auto mt-7 h-px w-full max-w-[520px] origin-center bg-white/20"
        />
        <p
          className="mx-auto mt-5 max-w-[620px] text-[14px] font-medium leading-relaxed text-white/55 sm:text-[16px]"
          style={{ fontFamily: FONT_SERIF }}
        >
          See what our clients have to say about working with AMA Films
        </p>
      </Reveal>

      <div className="relative mx-auto mt-10 max-w-[640px] px-12 sm:px-14">
        <button
          type="button"
          aria-label="Previous testimonial"
          data-cursor-interactive
          onClick={goPrev}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 text-white transition hover:-translate-x-1 hover:text-[#F34E32]"
        >
          <ChevronLeft className="h-7 w-7 stroke-[1.25] sm:h-8 sm:w-8" />
        </button>

        <div className="overflow-hidden" aria-live="polite" aria-atomic="true">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, x: slideOffset }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -slideOffset }}
              transition={{ duration: 0.55, ease: EASE_OUT }}
              style={{ willChange: "transform, opacity" }}
            >
              <TestimonialCard item={current} />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          aria-label="Next testimonial"
          data-cursor-interactive
          onClick={goNext}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 text-white transition hover:translate-x-1 hover:text-[#F34E32]"
        >
          <ChevronRight className="h-7 w-7 stroke-[1.25] sm:h-8 sm:w-8" />
        </button>

        <p className="sr-only">
          Testimonial {active + 1} of {testimonials.length}
        </p>
      </div>
    </section>
  );
}
