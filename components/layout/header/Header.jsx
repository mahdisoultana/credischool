import React from "react";
import BoxSmile from "./boxSmile";
import Nav from "./Nav";

function Header() {
  return (
    <header className="min-h-screen h-full relative">
      <Nav />
      <article className="  h-screen p-4 ">
        <div className="md:w-1/2 h-full flex flex-col justify-center items-start md:space-y-10 space-y-4">
          <h1 className="title lg:text-6xl   text-3xl md:whitespace-nowrap">
            A virtual university,
            <br />
            with real degrees
          </h1>

          <p className="text md:w-[70%]">
            Credischool is an accredited virtual university built by top
            professors from Harvard, Stanford, MIT, and many more. The students
            at Credischool are welcome to study at their own pace.
          </p>
          <button className="btn shadow-btn shadow-blue-xdark/30">
            Learn More
          </button>
        </div>

        <div className="flex  items-center absolute  md:bottom-[70px] shadow-btn shadow-blue-xdark/40 bottom-2   right-1/4 rounded-lg overflow-hidden bg-blue-dark  pr-1  ">
          <div className="bg-gray-100 self-stretch">
            <BoxSmile />
          </div>
          <div className="md:ml-5 ml-2 md:p-4 p2   h-full">
            <p className="text-xsm  text-gray-100 font-semibold">
              Total stipends given
            </p>
            <p className="num text-sm ">$10.508.305</p>
          </div>
        </div>
      </article>
    </header>
  );
}

export default Header;
