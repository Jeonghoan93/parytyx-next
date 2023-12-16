import { useEffect, useState } from "react";

const useHandleScroll = (threshold = 160, delta = 50) => {
  // delta added for buffer
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Check if the user has scrolled beyond the delta in either direction
      if (Math.abs(lastScrollPos - currentScrollPos) <= delta) {
        return; // If not, exit early without doing anything
      }

      if (currentScrollPos <= threshold) {
        setHideNav(false);
      } else if (currentScrollPos > lastScrollPos) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos, threshold, delta]); // Added delta to the dependency array

  return hideNav;
};

export default useHandleScroll;
