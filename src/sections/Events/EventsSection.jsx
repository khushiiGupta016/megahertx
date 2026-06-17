import CategorySplitLayout from "../../components/service/CategorySplitLayout";
import EventServiceCard from "../../components/service/EventServiceCard";
import SectionScrollButton from "../../components/ui/SectionScrollButton";
import { SECTIONS } from "../../constants/sections";
import { eventsOverview } from "../../data/eventsServices";

export default function EventsSection() {
  return (
    <CategorySplitLayout
      id={SECTIONS.events}
      theme="cream"
      title={eventsOverview.title}
      intro={eventsOverview.intro}
      decoration={
        <div className="mt-10">
          <SectionScrollButton
            label="Get in Touch"
            targetSectionId={SECTIONS.contact}
            variant="cream"
          />
        </div>
      }
    >
      {eventsOverview.cards.map((card, index) => (
        <EventServiceCard
          key={card.title}
          title={card.title}
          description={card.description}
          image={card.image}
          icon={card.icon}
          delay={index * 0.06}
        />
      ))}
    </CategorySplitLayout>
  );
}
