const unsplash = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

export const heroImages = {
  filmSet: unsplash("1485846234645-a62644f84728"),
  cinemaCamera: unsplash("1478720568477-152d9b83e8a6"),
  director: unsplash("1598899134735-59c461cf71bc"),
  redCarpet: unsplash("1511578314322-379afb476865"),
  voiceStudio: unsplash("1590602847861-f357a9332bbc"),
  concertStage: unsplash("1501386761578-eac5c94b800a"),
  filmReel: unsplash("1489599849927-2ee91cede3ba"),
  production: unsplash("1492691527719-9d1e07e534b4"),
  spotlight: unsplash("1514525253161-7a46d19cd819"),
  premiere: unsplash("1440404653325-ab127d49abc1"),
  corporateOffice: unsplash("1497366216548-37526070297c"),
  lifestyle: unsplash("1516035069371-29a1b244cc32"),
  promoAd: unsplash("1533750349088-86b444dcabb4"),
  microphone: unsplash("1589903308904-0d3bca77e98d"),
  narration: unsplash("1478737270239-2f02b77fc618"),
  studioMic: unsplash("1516280440614-37939bbacd81"),
  podcastRecording: unsplash("1590602847861-f357a9332bbc"),
  podcastEditing: unsplash("1589903308904-0d3bca77e98d"),
  podcastBanner: unsplash("1478737270239-2f02b77fc618", 1600),
};
