import CategorySplitLayout from "../../components/service/CategorySplitLayout";
import ServiceCard from "../../components/service/ServiceCard";
import { SECTIONS } from "../../constants/sections";
import { filmOverview } from "../../data/filmServices";

export default function FilmSection() {
  return (
    <CategorySplitLayout
      id={SECTIONS.film}
      theme="cream"
      title={filmOverview.title}
      intro={filmOverview.intro}
    >
      {filmOverview.cards.map((card, index) => (
        <ServiceCard
          key={card.title}
          title={card.title}
          description={card.description}
          image={card.image}
          action={card.action}
          variant="film"
          delay={index * 0.06}
        />
      ))}
    </CategorySplitLayout>
  );
}
