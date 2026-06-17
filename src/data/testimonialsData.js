export const testimonials = [
  {
    kicker: "Film Production",
    quote:
      "AMA Films delivered exactly the cinematic quality we needed. From concept to final cut, the team was professional, creative, and easy to work with.",
    name: "Sarah Mitchell",
    company: "Northlight Media",
    rating: 5,
  },
  {
    kicker: "Corporate Films",
    quote:
      "Our corporate film exceeded expectations. The storytelling felt authentic and the production value was outstanding across every deliverable.",
    name: "James Okonkwo",
    company: "Okonkwo Group",
    rating: 5,
  },
  {
    kicker: "Voice Overs",
    quote:
      "The voice-over sessions were seamless. Clear direction, fast turnaround, and broadcast-ready audio that elevated our entire campaign.",
    name: "Elena Vasquez",
    company: "Vasquez & Co.",
    rating: 5,
  },
  {
    kicker: "Podcast Production",
    quote:
      "We trusted AMA Films with our podcast launch and they handled recording, editing, and distribution flawlessly. Highly recommended.",
    name: "Marcus Chen",
    company: "Signal Wave Studios",
    rating: 5,
  },
  {
    kicker: "Events",
    quote:
      "Event coverage was sharp, energetic, and on-brand. The team captured every key moment without disrupting the live experience.",
    name: "Aisha Rahman",
    company: "Horizon Events",
    rating: 5,
  },
  {
    kicker: "Full Service",
    quote:
      "A complete creative partner for film, voice, and events. Professional at every stage and genuinely invested in our vision.",
    name: "Tom Bradley",
    company: "Bradley Media",
    rating: 5,
  },
];

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export { getInitials };
