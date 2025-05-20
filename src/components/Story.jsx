import gsap from "gsap";
import { useRef } from "react";
import Scroll3DFadeIn from "@animations/Scroll3DFadeIn";
import HoverTilt from "@animations/HoverTilt";
import RoundingPolygonCorners from "../utils/RoundingPolygonCorners";

import Button from "./Button";

const FloatingImage = () => {
  return (
    <>
      <RoundingPolygonCorners />
      <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
        <div className="flex size-full flex-col items-center py-10 pb-24">
          <HoverTilt range="15"></HoverTilt>

          <div className="relative w-full">
            <div className="absolute inset-0 flex items-start justify-center 2xl:mt-0">
              <Scroll3DFadeIn
                text="Showcase What Sets You Apart"
                containerClass="animated-title"
                wordClass="mt-5 pointer-events-none text-shadow-lg/100 mix-blend-multiply relative z-10 product-heading"
              />
              <Scroll3DFadeIn
                text="Showcase What Sets You Apart"
                containerClass="animated-title absolute"
                wordClass="mt-5 pointer-events-none text-red relative z-0 product-heading"
              />
            </div>
            <HoverTilt className="story-img-container">
              <div className="story-img-mask">
                <div className="story-img-content">
                  <img
                    src="/img/nature4.jpg"
                    alt="product.jpg"
                    className="object-contain   lg:w-fit lg:h-fit w-full h-full"
                  />
                </div>
              </div>
            </HoverTilt>
          </div>
          <div className=" flex w-full justify-center mt-[-30px] sm:mt-0">
            <div className="flex h-full w-fit flex-col items-center ">
              <p className=" px-5 sm:px-0 max-w-lg text-center md:text-xl font-inter text-violet-50">
                Highlight what matters most. Use this space to feature your
                product with stunning visuals.
              </p>

              <Button
                id="realm-btn"
                title="Learn more"
                containerClass="mt-5 text-black mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingImage;
