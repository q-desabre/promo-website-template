import React, { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

const FeatureCard = ({ src, title, description }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
    videoRef.current.currentTime = 0; // Optional: reset to start
  };

  return (
    <div
      className="relative size-full"
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <video
        autoPlay
        ref={videoRef}
        src={src}
        loop
        muted
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className=" text-2xl font-clash text-lg  text-shadow-lg/100  sm:text-2xl md:text-3xl lg:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-64 text-xs md:text-base text-neutral-100 text-shadow-lg/100">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
