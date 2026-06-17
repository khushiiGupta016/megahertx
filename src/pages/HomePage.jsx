import AboutHub from "../sections/About/About";
import Contact from "../sections/Contact/Contact";
import EventsSection from "../sections/Events/EventsSection";
import FilmSection from "../sections/Film/FilmSection";
import Footer from "../sections/Footer/Footer";
import Hero from "../sections/Hero/Hero";
import PodcastSection from "../sections/Podcast/PodcastSection";
import Testimonials from "../sections/Testimonials/Testimonials";
import VoiceSection from "../sections/Voice/VoiceSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutHub />
      <FilmSection />
      <VoiceSection />
      <PodcastSection />
      <EventsSection />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
