import { useEffect, useRef, useState } from "react";

const LERP = 0.14;
const SCALE_LERP = 0.12;
const REST_SCALE = 1;
const HOVER_SCALE = 3.8;

function lerp(current, target, factor) {
  return current + (target - current) * factor;
}

export default function useCustomCursor(enabled) {
  const [label, setLabel] = useState("");
  const [isHovering, setIsHovering] = useState(false);
  const positionRef = useRef({ x: 0, y: 0, scale: REST_SCALE });
  const targetRef = useRef({ x: 0, y: 0, scale: REST_SCALE });
  const cursorRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!enabled) return undefined;

    const handleMouseMove = (event) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;

      const hit = event.target.closest("[data-cursor]");
      if (hit) {
        setLabel(hit.getAttribute("data-cursor") || "");
        setIsHovering(true);
        targetRef.current.scale = HOVER_SCALE;
      } else {
        setLabel("");
        setIsHovering(false);
        targetRef.current.scale = REST_SCALE;
      }
    };

    const handleMouseLeave = () => {
      setLabel("");
      setIsHovering(false);
      targetRef.current.scale = REST_SCALE;
    };

    const tick = () => {
      const pos = positionRef.current;
      const target = targetRef.current;

      pos.x = lerp(pos.x, target.x, LERP);
      pos.y = lerp(pos.y, target.y, LERP);
      pos.scale = lerp(pos.scale, target.scale, SCALE_LERP);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${pos.scale})`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);

  return { cursorRef, label, isHovering };
}
