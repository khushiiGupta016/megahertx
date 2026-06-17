import { ArrowUp } from "lucide-react";
import { SECTIONS } from "../../constants/sections";
import { scrollToSection } from "../../utils/scrollToSection";
import useScrollToTopVisible from "../../hooks/useScrollToTopVisible";

export default function ScrollToTop() {
  const visible = useScrollToTopVisible();

  const handleClick = () => {
    scrollToSection(SECTIONS.hero);
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={handleClick}
      className={`fixed bottom-8 right-8 z-[90] grid h-12 w-12 place-items-center rounded-full border border-[#F34E32]/50 bg-[#120707]/90 text-[#F34E32] shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:bg-[#F34E32] hover:text-white ${
        visible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5 stroke-[2.5]" />
    </button>
  );
}
