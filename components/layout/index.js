import React from "react";
import Footer from "./Footer";
import Header from "./header/Header";
import Image from "next/image";
import BackdropNav from "../styledComponent/backdropNav";
function Layout({ children }) {
  return (
    <div className="relative  ">
      <BackdropNav />
      <div className="absolute md:w-1/2  w-[100vw] top-0 right-0 md:h-[95vh] h-screen  -z-1">
        <div className="absolute lg:w-[46vw] bg-blue-xdark h-screen top-0 right-0"></div>
        <div className="w-full h-full absolute   img    ">
          <Image
            src="/img/header-img.jpg"
            layout="responsive"
            width={100}
            height={100}
          />
          <div className="w-full h-full absolute md:hidden bg-blue-xlight/60"></div>
        </div>
      </div>

      <div className="max-w-5xl w-full m-auto  relative z-1">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
