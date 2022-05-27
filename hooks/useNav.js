import { useState, useEffect } from "react";
import { useIsMobileContext } from "../context/IsMobileProvider";

function useNav() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobileContext();

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isMobile]);
  return { isOpen, setIsOpen };
}
export default useNav;
