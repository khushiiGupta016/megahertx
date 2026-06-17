import { heroImages } from "../constants/images";

export const eventsOverview = {
  title: "Events",
  intro:
    "Live event production and coverage that captures energy, clarity, and premium brand presence — from intimate corporate gatherings to large-scale roadshows.",
  cards: [
    {
      title: "Anchoring",
      description: "Confident hosts for stage and broadcast",
      image: heroImages.spotlight,
      icon: "mic",
      action: "display",
    },
    {
      title: "Team Building",
      description: "Engaging experiences that unite teams",
      image: heroImages.corporateOffice,
      icon: "users",
      action: "display",
    },
    {
      title: "Corporate Events",
      description: "Premium coverage for business events",
      image: heroImages.premiere,
      icon: "building",
      action: "display",
    },
    {
      title: "Roadshows",
      description: "Multi-city tours with consistent production",
      image: heroImages.concertStage,
      icon: "route",
      action: "display",
    },
  ],
};
