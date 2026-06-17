import { CURSOR } from "../../constants/cursorLabels";
import { ArrowUpRight } from "lucide-react";
import { scrollToSection } from "../../utils/scrollToSection";

const base =
  "group inline-flex min-h-[56px] items-center justify-center gap-2 rounded-[7px] px-8 text-[15px] font-black uppercase tracking-[-0.04em] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#F34E32] focus:ring-offset-4";

const variants = {
  primary:
    "bg-[#F34E32] text-white shadow-[0_20px_60px_rgba(243,78,50,0.35)] hover:bg-[#d93e25] hover:shadow-[0_24px_70px_rgba(243,78,50,0.45)] hover:scale-[1.02] focus:ring-offset-[#070000]",
  secondary:
    "border border-white/80 bg-black/20 text-white backdrop-blur-sm hover:bg-white hover:text-black hover:scale-[1.02] focus:ring-offset-[#070000]",
  cream:
    "bg-[#F34E32] text-white shadow-[0_14px_40px_rgba(243,78,50,0.28)] hover:bg-[#d93e25] hover:scale-[1.02] focus:ring-offset-[#F6F3D8]",
};

export default function SectionScrollButton({
  label,
  targetSectionId,
  variant = "primary",
  className = "",
}) {
  const handleClick = () => {
    scrollToSection(targetSectionId);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      data-cursor={CURSOR.VIEW}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span>{label}</span>
      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </button>
  );
}
