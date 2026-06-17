import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../constants/sections";

const OBSERVED_IDS = NAV_ITEMS.map((item) => item.id);

export default function useActiveSection() {
  const [activeId, setActiveId] = useState(OBSERVED_IDS[0]);

  useEffect(() => {
    const elements = OBSERVED_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return activeId;
}
