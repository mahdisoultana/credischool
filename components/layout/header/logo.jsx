import React from "react";

function Logo({ children }) {
  return (
    <div className="flex items-center">
      <div className="  relative">
        <svg
          className="relative z-1"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#F0F3FF" />
          <path
            d="M30 22C30 23.3132 29.7413 24.6136 29.2388 25.8268C28.7362 27.0401 27.9997 28.1425 27.0711 29.0711C26.1425 29.9997 25.0401 30.7362 23.8268 31.2388C22.6136 31.7413 21.3132 32 20 32C18.6868 32 17.3864 31.7413 16.1732 31.2388C14.9599 30.7362 13.8575 29.9997 12.9289 29.0711C12.0003 28.1425 11.2638 27.0401 10.7612 25.8268C10.2587 24.6136 10 23.3132 10 22L20 22H30Z"
            fill="#335DFF"
          />
        </svg>
        <div className="absolute w-full h-full bg-blue-900/10 rounded-full  top-0 left-0 z-[-1]"></div>
      </div>
      <span className="inline-block spanTag ml-3">
        {children || "Credischool"}
      </span>
    </div>
  );
}

export default Logo;
