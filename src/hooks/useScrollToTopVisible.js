import { useEffect, useState } from "react";
import { SECTIONS } from "../constants/sections";

export default function useScrollToTopVisible() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const filmSection = document.getElementById(SECTIONS.film);
    if (!filmSection) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );

    observer.observe(filmSection);
    return () => observer.disconnect();
  }, []);

  return visible;
}
