import { CURSOR } from "../../constants/cursorLabels";
import { motion } from "framer-motion";
import ServiceCard from "../../components/service/ServiceCard";
import Reveal from "../../components/ui/Reveal";
import ScribbleTitle from "../../components/ui/ScribbleTitle";
import SectionScrollButton from "../../components/ui/SectionScrollButton";
import { SECTIONS } from "../../constants/sections";
import { DEEP, EASE_OUT } from "../../constants/theme";
import { podcastOverview } from "../../data/podcastServices";

export default function PodcastSection() {
  return (
    <section
      id={SECTIONS.podcast}
      style={{ backgroundColor: DEEP }}
      className="scroll-mt-[60px] overflow-hidden px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1760px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:order-1 lg:gap-7">
          {podcastOverview.cards.map((card, index) => (
            <ServiceCard
              key={card.title}
              title={card.title}
              description={card.description}
              image={card.image}
              action={card.action}
              cursorLabel={CURSOR.EXPLORE}
              variant="voice"
              delay={index * 0.06}
            />
          ))}
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <ScribbleTitle color="#FFFFFF" stroke="#FFFFFF">
              {podcastOverview.title}
            </ScribbleTitle>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ duration: 1, ease: EASE_OUT }}
              className="mt-9 h-px w-full origin-left bg-white/24"
            />
            <p className="mt-8 max-w-[700px] text-[18px] font-semibold leading-[1.55] tracking-[-0.025em] text-white/88 sm:text-[23px]">
              {podcastOverview.intro}
            </p>

            <div className="relative mt-10 overflow-hidden rounded-[10px] shadow-[0_28px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
              <img
                src={podcastOverview.banner}
                alt="Cinematic podcast studio"
                className="h-[clamp(220px,32vw,420px)] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(243,78,50,0.18),transparent_45%)]" />
            </div>

            <div className="mt-10">
              <SectionScrollButton
                label="Next Section"
                targetSectionId={SECTIONS.events}
                variant="primary"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
