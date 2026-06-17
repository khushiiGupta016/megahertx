import { heroImages } from "../constants/images";

export const voiceProjectTypes = [
  "Advertisement",
  "Narration",
  "Studio Recording",
  "Podcast",
  "Other",
];

export const voiceOverview = {
  title: "Voice Overs",
  intro:
    "Premium voice production for advertisements, narration, and studio sessions — delivered with broadcast clarity, creative direction, and AMA Films' signature cinematic polish.",
  cards: [
    {
      title: "Advertisement Voice Overs",
      description: "Bold, persuasive voice for campaigns",
      image: heroImages.microphone,
      action: "display",
    },
    {
      title: "Narration",
      description: "Warm, authoritative long-form storytelling",
      image: heroImages.narration,
      action: "display",
    },
    {
      title: "Book Slot",
      description: "Reserve your studio session instantly",
      image: heroImages.voiceStudio,
      action: "booking",
    },
    {
      title: "Studio Recording",
      description: "Professional booth sessions and direction",
      image: heroImages.studioMic,
      action: "display",
    },
  ],
};
