import React from "react";
import Logo from "./header/logo";

function Footer({ className }) {
  return (
    <>
      <div
        className={`${className}  p-4 md:flex flex-wrap justify-between    my-10`}
      >
        <div className="space-y-5 mt-4">
          <Logo />
          <p className="text font-bold text-blue-xdark mt-0">
            copyright &copy;2022 Credischool University.
            <br /> All RIght Reserved
          </p>
        </div>
        <div className="space-y-8 mt-4">
          <ul className="md:flex block justify-between items-center   md:pt-0 pt-2 md:mt-0 mt-4  last:">
            <li className="md:mx-8 text text-blue-xdark  font-bold ">Home</li>
            <li className="md:mx-8 text  font-bold ">Education</li>
            <li className="md:mx-8 text  font-bold ">Compus</li>
            <li className="md:mx-8   text   font-bold ">About</li>
          </ul>
          <div>
            <ul className="md:flex block  items-center justify-center  md:pt-0 pt-2 md:mt-0 mt-4 ">
              <li className="  md:mx-3 font-bold  text">Terms</li>
              <li className="  md:mx-3 font-bold  text">Privacy</li>
              <li className="  md:mx-3 font-bold    text ">GDPR</li>
            </ul>
          </div>
        </div>
        <div className="space-y-8 mt-4">
          <ul className="md:flex block   justify-end items-center ">
            <li className="md:mx-2 text">Facebook</li>
            <li className="md:mx-2 text">LinkedIn</li>
            <li className="md:mx-2   text ">Twitter</li>
          </ul>
          <p className="text text-blue-xdark text-xs font-semibold">
            Designed By
            <a href="#" className="ml-2 text-red-dark">
              nikolovlazar.com
            </a>{" "}
            <br /> Developed{" "}
            <a href="#" className="text-red-dark">
              Mahdi Soultana
            </a>{" "}
            with ❤
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
