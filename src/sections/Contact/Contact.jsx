import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading";
import Reveal from "../../components/ui/Reveal";
import { CURSOR } from "../../constants/cursorLabels";
import { CONTACT_SERVICES } from "../../constants/contactServices";
import { SECTIONS } from "../../constants/sections";

const inputClass =
  "w-full rounded-[7px] border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-white outline-none transition focus:border-[#F34E32] focus:ring-2 focus:ring-[#F34E32]/30";

const labelClass =
  "mb-2 block text-[11px] font-black uppercase tracking-[0.14em] text-white/70";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id={SECTIONS.contact}
      className="scroll-mt-[60px] bg-[#070000] px-5 pb-16 pt-20 text-white sm:px-8 lg:px-12 lg:pb-20 lg:pt-28"
    >
      <div className="mx-auto max-w-[1320px]">
        <SectionHeading title="GET IN TOUCH" scribbleTarget="TOUCH" />

        <Reveal delay={0.06} className="mb-11 max-w-[760px]">
          <p className="text-[16px] font-medium leading-[1.58] text-white/72 sm:text-[18px]">
            Ready to bring your story to life? Tell us about your project — we respond within one
            business day.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="mx-auto max-w-[720px] space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className={labelClass}>Full Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  data-cursor={CURSOR.CONNECT}
                  className={inputClass}
                  placeholder="Your full name"
                />
              </label>
              <label className="block">
                <span className={labelClass}>Email Address</span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className={inputClass}
                  placeholder="you@company.com"
                />
              </label>
            </div>

            <label className="block">
              <span className={labelClass}>Service Required</span>
              <div className="relative">
                <select
                  name="service"
                  required
                  defaultValue=""
                  data-cursor={CURSOR.CONNECT}
                  className={`${inputClass} appearance-none pr-10`}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {CONTACT_SERVICES.map((service) => (
                    <option key={service} value={service} className="bg-[#120707] text-white">
                      {service}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50"
                  aria-hidden="true"
                />
              </div>
            </label>

            <label className="block">
              <span className={labelClass}>Project Brief / Message</span>
              <textarea
                name="message"
                required
                rows={5}
                data-cursor={CURSOR.CONNECT}
                className={`${inputClass} resize-y`}
                placeholder="Tell us about your project, timeline, and goals..."
              />
            </label>

            <button
              type="submit"
              data-cursor={CURSOR.CONNECT}
              className="inline-flex min-h-[56px] w-full items-center justify-center rounded-[7px] bg-[#F34E32] px-8 text-[15px] font-black uppercase tracking-[-0.03em] text-white shadow-[0_20px_60px_rgba(243,78,50,0.35)] transition hover:scale-[1.02] hover:bg-[#d93e25] sm:w-full"
            >
              Send Message
            </button>
            {submitted ? (
              <p className="text-center text-[14px] font-semibold text-[#F34E32] sm:text-left" role="status">
                Thank you — your message has been received.
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
