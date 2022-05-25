import React from "react";
import ImageWithBlur from "../styledComponent/ImageWithBlur";

function Cards() {
  return (
    <div className="grid grid-cols-3 gap-16 text-center mt-28">
      <div>
        <ImageWithBlur />
        <h3 className="spanTag mt-3">Support</h3>
        <p className="text">Lorem ipsum dolor sit amet.</p>
      </div>
      <div>
        <ImageWithBlur />
        <h3 className="spanTag mt-3">Support</h3>
        <p className="text">Lorem ipsum dolor sit amet.</p>
      </div>
      <div>
        <ImageWithBlur />
        <h3 className="spanTag mt-3">Support</h3>
        <p className="text">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
}

export default Cards;
