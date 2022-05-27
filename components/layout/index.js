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
            priority
          />
          <div className="w-[100vw] top-0 left-0 h-screen block absolute md:hidden bg-blue-xlight/60 "></div>
        </div>
      </div>

      <div className="max-w-5xl w-full m-auto  relative z-1">
        <Header />
        <main>{children}</main>
      </div>

      <div className="py-8 px-4 w-full max-w-2xl bg-white rounded-sm shadow-md shadow-blue-xdark/20 m-auto -mb-10 flex flex-col md:flex-row items-center justify-center relative z-20 mt-32">
        <p className="spanTag">Intersted? Let's get you started</p>
        <button className="btn bg-red-dark shadow-btn md:ml-16 ">
          Register
        </button>
      </div>

      <div className="h-80 bg-indigo-200 relative"></div>
      <Footer className="max-w-5xl w-full m-auto  relative z-1" />
    </div>
  );
}

export default Layout;
