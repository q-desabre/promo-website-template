import React, { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

const FeatureCard = ({ src, title, description }) => {
  const videoRef = useRef(null);

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
      <div className="relative z-10 flex size-full flex-col justify-between p-5">
        <div>
          <h1 className="feature-title text-outline-strong">{title}</h1>
          <p className="feature-description text-outline-strong">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
