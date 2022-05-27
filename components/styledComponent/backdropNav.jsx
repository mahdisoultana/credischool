import React from "react";
import { useIsScrolledContext } from "../../context/IsScrolledProvider";
import useScroll from "../../hooks/useScroll";
function BackdropNav() {
  const isScrolled = useIsScrolledContext();

  return isScrolled ? (
    <div className="duration-500">
      <div className="h-16 bg-blue-xlight/90 fixed top-0 left-0 w-full z-10 shadow-btn shadow-blue-xdark/10" />
    </div>
  ) : (
    ""
  );
}

export default BackdropNav;
