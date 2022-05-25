import React from "react";
import Features from "../../features/Cards";
import BoxSmile from "../../layout/header/boxSmile";

import GridCol2Card from "../../styledComponent/GridCol2Card";
function HomePage() {
  return (
    <div>
      <Features />
      <h2 className="subtitle my-36 text-center">Explore Departement</h2>
      <GridCol2Card />
      <GridCol2Card className="order-1" />
      <GridCol2Card />
      <h2 className="subtitle capitalize leading-tight mt-36 mb-20 text-center">
        More Then 500.000 Students <br /> has Enrolled this year
      </h2>
      <div className="h-[600px] bg-indigo-900"></div>
      <div className="flex justify-around items-center mt-10">
        <div className="flex  items-center  shadow-btn shadow-blue-xdark/40   rounded-lg overflow-hidden bg-blue-dark  pr-1  ">
          <div className="bg-gray-100 self-stretch">
            <BoxSmile />
          </div>
          <div className=" ml-2   md:p-4 p2 mr-16   h-full">
            <p className="text-xsm  text-gray-100 font-semibold">Students</p>
            <p className="num text-sm ">+500.000</p>
          </div>
        </div>
        <div className="flex  items-center  shadow-btn shadow-blue-xdark/40   rounded-lg overflow-hidden bg-red-dark  pr-1  ">
          <div className="bg-gray-100 self-stretch">
            <BoxSmile />
          </div>
          <div className="ml-2   md:p-4 p2 mr-10   h-full">
            <p className="text-xsm  text-gray-100 font-semibold">TimeZone</p>
            <p className="num text-sm ">GTM +1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
