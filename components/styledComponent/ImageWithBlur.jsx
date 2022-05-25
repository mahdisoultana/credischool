import React from "react";
import Image from "next/image";
function ImageWithBlur({ className }) {
  return (
    <div>
      <div
        className={`rounded-xl ${
          className || "h-36"
        } overflow-hidden shadow-btn shadow-blue-xdark/30`}
      >
        <img className="w-full h-full " src="/img/header-img.jpg" />
      </div>
    </div>
  );
}

export default ImageWithBlur;
