import SectionHeading from "../../components/ui/SectionHeading";
import Reveal from "../../components/ui/Reveal";
import { SECTIONS } from "../../constants/sections";
import { scrollToSection } from "../../utils/scrollToSection";
import { aboutCards } from "./aboutCards";
import NavHubCard from "./NavHubCard";

const INTRO_COPY =
  "We are a creative media production company specializing in Film Production, AV Content, Voice Overs, Podcast Production, and Event Experiences.";

export default function AboutHub() {
  return (
    <section
      id={SECTIONS.about}
      className="scroll-mt-[60px] bg-[#070000] px-5 pb-20 pt-12 text-white sm:px-8 lg:px-12 lg:pb-24 lg:pt-16"
    >
      <div className="mx-auto max-w-[1320px]">
        <SectionHeading title="ABOUT AMA FILMS" scribbleTarget="AMA FILMS" />

        <Reveal delay={0.06} className="mb-11 max-w-[760px]">
          <p className="text-[16px] font-medium leading-[1.58] text-white/72 sm:text-[18px]">
            {INTRO_COPY}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-9">
          {aboutCards.map((card, index) => (
            <NavHubCard
              key={card.title}
              card={card}
              onNavigate={scrollToSection}
              title={card.title}
              description={card.description}
              image={card.image}
              delay={index * 0.045}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
