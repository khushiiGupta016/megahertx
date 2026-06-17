export const SECTIONS = {
  hero: "hero",
  about: "about",
  film: "film",
  voice: "voice",
  podcast: "podcast",
  events: "events",
  testimonials: "testimonials",
  contact: "contact",
};

export const NAV_ITEMS = [
  { label: "About", id: SECTIONS.about },
  { label: "Film", id: SECTIONS.film },
  { label: "Voice", id: SECTIONS.voice },
  { label: "Podcast", id: SECTIONS.podcast },
  { label: "Events", id: SECTIONS.events },
  { label: "Contact", id: SECTIONS.contact },
];

export const SECTION_HASH = (id) => `#${id}`;
