import { useState, useEffect } from "react";
import { useIsMobileContext } from "../context/IsMobileProvider";

function useNav() {
  const [isOpen, setIsOpen] = useState(true);
  const isMobile = useIsMobileContext();
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isMobile]);
  return { isOpen, setIsOpen };
}
export default useNav;
