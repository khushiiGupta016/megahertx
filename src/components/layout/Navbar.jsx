import { CURSOR } from "../../constants/cursorLabels";
import useActiveSection from "../../hooks/useActiveSection";
import { NAV_ITEMS, SECTION_HASH, SECTIONS } from "../../constants/sections";
import { scrollToSection } from "../../utils/scrollToSection";

export default function Navbar() {
  const activeId = useActiveSection();

  const handleNavClick = (event, id) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <a
          href={SECTION_HASH(SECTIONS.hero)}
          onClick={(event) => handleNavClick(event, SECTIONS.hero)}
          data-cursor={CURSOR.GO}
          className="shrink-0 text-[11px] font-black uppercase tracking-[0.18em] text-white transition hover:text-[#F34E32] sm:text-[12px]"
        >
          AMA FILMS
        </a>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-4 overflow-x-auto text-[9px] font-black uppercase tracking-[0.16em] sm:gap-5 sm:text-[10px]"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={SECTION_HASH(item.id)}
              onClick={(event) => handleNavClick(event, item.id)}
              data-cursor={CURSOR.GO}
              className={`shrink-0 transition hover:text-[#F34E32] ${activeId === item.id ? "text-[#F34E32]" : "text-white/82"}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
