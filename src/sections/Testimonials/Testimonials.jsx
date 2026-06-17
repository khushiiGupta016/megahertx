import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Reveal from "../../components/ui/Reveal";
import ScribbleTitle from "../../components/ui/ScribbleTitle";
import { CURSOR } from "../../constants/cursorLabels";
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

function TestimonialCard({ item, isCenter }) {
  return (
    <article
      className={`flex min-h-[148px] flex-col rounded-[8px] bg-[#160000] p-4 text-white sm:min-h-[158px] sm:p-5 lg:min-h-[168px] ${
        isCenter ? "" : "overflow-hidden blur-[0.1px]"
      }`}
    >
      <StarRating count={item.rating} />
      <p
        className="mt-2 text-[12px] italic text-white/70 sm:text-[13px]"
        style={{ fontFamily: FONT_SERIF }}
      >
        {item.kicker}
      </p>
      <p
        className={`mt-2.5 font-black leading-[1.34] tracking-[-0.055em] ${
          isCenter ? "text-[14px] sm:text-[16px] lg:text-[17px]" : "text-[15px] opacity-45"
        }`}
      >
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
  const current = testimonials[active];
  const prev = testimonials[(active - 1 + testimonials.length) % testimonials.length];
  const next = testimonials[(active + 1) % testimonials.length];

  return (
    <section
      id={SECTIONS.testimonials}
      data-cursor={CURSOR.READ}
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

      <div className="relative mx-auto mt-8 max-w-[1250px] overflow-visible">
        <div className="grid grid-cols-[64px_minmax(0,480px)_64px] justify-center gap-5 md:grid-cols-[80px_minmax(0,480px)_80px] md:gap-6">
          {[prev, current, next].map((item, index) => {
            const isCenter = index === 1;
            return (
              <motion.div
                key={`${item.name}-${active}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isCenter ? 1 : 0.28, y: 0 }}
                transition={{ duration: 0.55, ease: EASE_OUT }}
                className={index === 0 ? "md:col-start-1" : index === 1 ? "md:col-start-2" : "md:col-start-3"}
              >
                <TestimonialCard item={item} isCenter={isCenter} />
              </motion.div>
            );
          })}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="rounded-full border border-white/25 px-3 py-1 text-[13px] font-medium leading-none text-white/70">
            {active + 1} / {testimonials.length}
          </div>
          <div className="flex items-center gap-4 text-white">
            <button
              type="button"
              aria-label="Previous testimonial"
              data-cursor={CURSOR.VIEW}
              onClick={() => setActive((value) => (value - 1 + testimonials.length) % testimonials.length)}
              className="transition hover:-translate-x-1 hover:text-[#F34E32]"
            >
              <ChevronLeft className="h-7 w-7 stroke-[1.25]" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              data-cursor={CURSOR.VIEW}
              onClick={() => setActive((value) => (value + 1) % testimonials.length)}
              className="transition hover:translate-x-1 hover:text-[#F34E32]"
            >
              <ChevronRight className="h-7 w-7 stroke-[1.25]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
