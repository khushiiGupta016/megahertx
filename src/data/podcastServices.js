import { heroImages } from "../constants/images";

export const podcastOverview = {
  title: "Podcast Production",
  intro:
    "End-to-end podcast production from first take to global distribution — engineered for clarity, consistency, and audience growth across every platform.",
  banner: heroImages.podcastBanner,
  cards: [
    {
      title: "Recording",
      description: "Studio-grade capture with live direction",
      image: heroImages.podcastRecording,
      action: "display",
    },
    {
      title: "Editing",
      description: "Polished episodes with broadcast-ready sound",
      image: heroImages.podcastEditing,
      action: "display",
    },
    {
      title: "Publishing",
      description: "Metadata, artwork, and platform-ready delivery",
      image: heroImages.podcastPublishing,
      action: "display",
    },
    {
      title: "Distribution",
      description: "Multi-platform rollout and audience reach",
      image: heroImages.podcastDistribution,
      action: "display",
    },
  ],
};
