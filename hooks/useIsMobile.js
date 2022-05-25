import React, { useLayoutEffect, useState } from "react";
const IS_MOBILE_BREAK_POINT = 780;
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    function handelResize(e) {
      if (window.innerWidth < IS_MOBILE_BREAK_POINT) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", handelResize);
    return () => {
      window.removeEventListener("resize", handelResize);
    };
  }, []);

  return { isMobile };
}

export default useIsMobile;
