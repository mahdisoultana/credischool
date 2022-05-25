import React from "react";
import Footer from "./Footer";
import Header from "./header/Header";

function Layout({ children }) {
  return (
    <div className="container max-w-5xl w-full m-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
