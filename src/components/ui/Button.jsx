import { ArrowUpRight } from "lucide-react";
import { CTA_VARIANT } from "../../constants/cursorLabels";

const base =
  "group inline-flex min-h-[62px] w-full items-center justify-center gap-3 rounded-[7px] px-9 text-[17px] font-black uppercase tracking-[-0.04em] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#F34E32] focus:ring-offset-4 focus:ring-offset-[#070000] sm:w-[250px]";

const variants = {
  primary:
    "bg-[#F34E32] text-white shadow-[0_20px_60px_rgba(243,78,50,0.35)] hover:bg-[#d93e25] hover:shadow-[0_24px_70px_rgba(243,78,50,0.45)] hover:scale-[1.02]",
  secondary:
    "border border-white/80 bg-black/20 text-white backdrop-blur-sm hover:bg-white hover:text-black hover:scale-[1.02]",
};

const ctaByVariant = {
  primary: CTA_VARIANT.PRIMARY,
  secondary: CTA_VARIANT.SECONDARY,
};

function ButtonContent({ children }) {
  return (
    <>
      <span>{children}</span>
      <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
    </>
  );
}

export default function Button({ children, href = "#", variant = "primary", className = "" }) {
  const classes = `${base} ${variants[variant]} ${className}`;

  return (
    <a href={href} className={classes} data-cursor-cta={ctaByVariant[variant] || CTA_VARIANT.PRIMARY}>
      <ButtonContent>{children}</ButtonContent>
    </a>
  );
}
