import React from "react";
import ImageWithBlur from "./ImageWithBlur";

function GridCol2Card({ className }) {
  return (
    <div className="grid md:grid-cols-2 lg:gap-20 gap-8 items-center md:my-20 grid-cols-1 p-4">
      <ImageWithBlur className="md:h-[400px] md:w-[80%] h-[200px] w-[100%] mx-auto" />
      <div className={`-order-1 ${className}`}>
        <h3 className="subtitle md:text-4xl text-2xl  mt-3">
          Computer Science
        </h3>
        <p className="text mt-9">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          odit eos provident quasi architecto magnam tempora illo praesentium.
          Aliquid magni hic labore quam quia ipsam aperiam culpa corporis, ullam
          accusantium?
        </p>
        <button className="btn mt-10 ">Learn More</button>
      </div>
    </div>
  );
}

export default GridCol2Card;
