import React from "react";
import useScroll from "../hooks/useScroll";
const IsScrolledContext = React.createContext();

export const useIsScrolledContext = () => {
  const isScrolled = React.useContext(IsScrolledContext);
  if (typeof isScrolled !== "boolean") {
    throw new Error(
      "useIsScrolledContext must used within isScrolledProvider !!",
    );
  }
  return isScrolled;
};
function IsScrolledProvider({ children }) {
  const { isScrolled } = useScroll(70);
  return (
    <IsScrolledContext.Provider value={isScrolled}>
      {children}
    </IsScrolledContext.Provider>
  );
}

export default IsScrolledProvider;
