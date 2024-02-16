import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const isClient = typeof window === "object";
  const initialWidth = isClient ? window.innerWidth : 1200;
  const [windowWidth, setWindowWidth] = useState(initialWidth);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient]);

  return windowWidth;
};
