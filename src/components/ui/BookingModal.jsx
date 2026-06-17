import { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import useScrollLock from "../../hooks/useScrollLock";
import { EASE_OUT } from "../../constants/theme";
import { voiceProjectTypes } from "../../data/voiceServices";

export default function BookingModal({ isOpen, onClose, onConfirm }) {
  const reduceMotion = useReducedMotion();
  useScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    onConfirm();
    onClose();
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-5 sm:p-8"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE_OUT }}
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close booking modal"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
            className="relative z-10 w-full max-w-[520px] overflow-hidden rounded-[10px] bg-[#0a0000] p-6 shadow-[0_32px_90px_rgba(0,0,0,0.65)] ring-1 ring-white/10 sm:p-8"
            initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#F34E32]">Voice Studio</p>
                <h2 id="booking-modal-title" className="mt-2 text-[28px] font-black uppercase leading-tight tracking-[-0.06em] text-white sm:text-[32px]">
                  Book Slot
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#F34E32]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.16em] text-white/65">Name</span>
                <input
                  required
                  name="name"
                  type="text"
                  className="w-full rounded-[6px] border border-white/20 bg-black/40 px-4 py-3 text-[15px] text-white outline-none transition focus:border-[#F34E32] focus:ring-1 focus:ring-[#F34E32]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.16em] text-white/65">Email</span>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full rounded-[6px] border border-white/20 bg-black/40 px-4 py-3 text-[15px] text-white outline-none transition focus:border-[#F34E32] focus:ring-1 focus:ring-[#F34E32]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.16em] text-white/65">Project Type</span>
                <select
                  required
                  name="projectType"
                  className="w-full rounded-[6px] border border-white/20 bg-black/40 px-4 py-3 text-[15px] text-white outline-none transition focus:border-[#F34E32] focus:ring-1 focus:ring-[#F34E32]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select project type
                  </option>
                  {voiceProjectTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#120707]">
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-[11px] font-black uppercase tracking-[0.16em] text-white/65">Preferred Date/Time</span>
                <input
                  required
                  name="preferredDateTime"
                  type="datetime-local"
                  className="w-full rounded-[6px] border border-white/20 bg-black/40 px-4 py-3 text-[15px] text-white outline-none transition focus:border-[#F34E32] focus:ring-1 focus:ring-[#F34E32]"
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex min-h-[54px] w-full items-center justify-center rounded-[7px] bg-[#F34E32] px-8 text-[15px] font-black uppercase tracking-[-0.03em] text-white shadow-[0_18px_50px_rgba(243,78,50,0.32)] transition hover:bg-[#d93e25]"
              >
                Confirm Booking
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
