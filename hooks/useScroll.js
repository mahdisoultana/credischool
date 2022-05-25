import { useEffect, useState } from "react";

function useScroll(limit) {
  const [isScrolled, setIsScrolled] = useState(false);
  const handelScroll = (e) => {
    if (window.scrollY > limit) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);
  return { isScrolled };
}

export default useScroll;
