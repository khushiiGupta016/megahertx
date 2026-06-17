import { useLayoutEffect, useRef } from "react";

export default function useScrollLock(active) {
  const scrollYRef = useRef(0);

  useLayoutEffect(() => {
    if (!active) return;

    scrollYRef.current = window.scrollY;
    const { body } = document;
    const { style } = body;

    style.position = "fixed";
    style.top = `-${scrollYRef.current}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";

    return () => {
      style.position = "";
      style.top = "";
      style.left = "";
      style.right = "";
      style.width = "";
      window.scrollTo(0, scrollYRef.current);
    };
  }, [active]);
}
