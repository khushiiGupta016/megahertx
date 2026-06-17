import { useEffect, useState } from "react";

export default function usePointerFine() {
  const [isFine, setIsFine] = useState(false);

  useEffect(() => {
    const hoverMq = window.matchMedia("(hover: hover)");
    const pointerMq = window.matchMedia("(pointer: fine)");

    const update = () => {
      setIsFine(hoverMq.matches && pointerMq.matches);
    };

    update();
    hoverMq.addEventListener("change", update);
    pointerMq.addEventListener("change", update);

    return () => {
      hoverMq.removeEventListener("change", update);
      pointerMq.removeEventListener("change", update);
    };
  }, []);

  return isFine;
}
