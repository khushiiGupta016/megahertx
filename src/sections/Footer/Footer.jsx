import { CURSOR } from "../../constants/cursorLabels";
import { NAV_ITEMS, SECTION_HASH, SECTIONS } from "../../constants/sections";
import { scrollToSection } from "../../utils/scrollToSection";

export default function Footer() {
  const handleNavClick = (event, id) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer className="border-t border-white/10 bg-[#070000] px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <a
          href={SECTION_HASH(SECTIONS.hero)}
          onClick={(event) => handleNavClick(event, SECTIONS.hero)}
          data-cursor={CURSOR.GO}
          className="text-[11px] font-black uppercase tracking-[0.18em] text-white transition hover:text-[#F34E32] sm:text-[12px]"
        >
          AMA FILMS
        </a>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-black uppercase tracking-[0.16em] text-white/65"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={SECTION_HASH(item.id)}
              onClick={(event) => handleNavClick(event, item.id)}
              data-cursor={CURSOR.GO}
              className="transition hover:text-[#F34E32]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <p className="text-[12px] font-medium text-white/45">
          &copy; {new Date().getFullYear()} AMA Films. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
