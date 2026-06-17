import { useEffect, useRef, useState } from "react";

const LERP = 0.22;
const SCALE_LERP = 0.2;
const REST_SCALE = 1;
const HOVER_SCALE = 2.7;

function lerp(current, target, factor) {
  return current + (target - current) * factor;
}

function resolveCursorState(target) {
  const labelEl = target.closest("[data-cursor-label]");
  const aboutEl = target.closest("#about");

  if (labelEl && aboutEl) {
    return {
      mode: "label",
      label: labelEl.getAttribute("data-cursor-label") || "",
      ctaVariant: "primary",
      scale: HOVER_SCALE,
    };
  }

  const ctaEl = target.closest("[data-cursor-cta]");
  if (ctaEl) {
    return {
      mode: "cta",
      label: "",
      ctaVariant: ctaEl.getAttribute("data-cursor-cta") || "primary",
      scale: HOVER_SCALE,
    };
  }

  const interactiveEl = target.closest("[data-cursor-interactive]");
  if (interactiveEl) {
    return {
      mode: "interactive",
      label: "",
      ctaVariant: "primary",
      scale: HOVER_SCALE,
    };
  }

  return {
    mode: "rest",
    label: "",
    ctaVariant: "primary",
    scale: REST_SCALE,
  };
}

function interactionChanged(prev, next) {
  return prev.mode !== next.mode || prev.label !== next.label || prev.ctaVariant !== next.ctaVariant;
}

export default function useCustomCursor(enabled) {
  const [label, setLabel] = useState("");
  const [mode, setMode] = useState("rest");
  const [ctaVariant, setCtaVariant] = useState("primary");
  const positionRef = useRef({ x: 0, y: 0, scale: REST_SCALE });
  const targetRef = useRef({ x: 0, y: 0, scale: REST_SCALE });
  const interactionRef = useRef({ mode: "rest", label: "", ctaVariant: "primary" });
  const cursorRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!enabled) return undefined;

    const commitInteraction = (state) => {
      if (!interactionChanged(interactionRef.current, state)) return;
      interactionRef.current = state;
      setMode(state.mode);
      setLabel(state.label);
      setCtaVariant(state.ctaVariant);
    };

    const handleMouseMove = (event) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
      commitInteraction(resolveCursorState(event.target));
    };

    const handleMouseLeave = () => {
      targetRef.current.scale = REST_SCALE;
      commitInteraction({
        mode: "rest",
        label: "",
        ctaVariant: "primary",
        scale: REST_SCALE,
      });
    };

    const tick = () => {
      const pos = positionRef.current;
      const target = targetRef.current;

      pos.x = lerp(pos.x, target.x, LERP);
      pos.y = lerp(pos.y, target.y, LERP);
      pos.scale = lerp(pos.scale, target.scale, SCALE_LERP);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${pos.scale})`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);

  return { cursorRef, label, mode, ctaVariant };
}
