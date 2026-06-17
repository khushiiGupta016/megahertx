import { SECTIONS } from "../../constants/sections";
import { heroImages } from "../../constants/images";

export const aboutCards = [
  {
    title: "Film",
    description: "Cinematic production & storytelling",
    sectionId: SECTIONS.film,
    image: heroImages.filmSet,
  },
  {
    title: "AV",
    description: "Audio-visual content & broadcast",
    sectionId: SECTIONS.voice,
    image: heroImages.cinemaCamera,
  },
  {
    title: "Voice",
    description: "Professional voice-over artistry",
    sectionId: SECTIONS.voice,
    image: heroImages.voiceStudio,
  },
  {
    title: "Podcast",
    description: "Podcast production & distribution",
    sectionId: SECTIONS.podcast,
    image: heroImages.production,
  },
  {
    title: "Events",
    description: "Live event production & coverage",
    sectionId: SECTIONS.events,
    image: heroImages.concertStage,
  },
  {
    title: "IST",
    description: "In-studio training & workshops",
    sectionId: SECTIONS.contact,
    image: heroImages.spotlight,
  },
];
