import { useState, useRef } from "react";
import HoverTilt from "@animations/HoverTilt";
import { TiLocationArrow } from "react-icons/ti";
import FeatureCard from "@components/FeatureCard";

const Features = () => {
  return (
    <section className="bg-black md:pb-50 sm:pb-20 pb-10" id="features">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-inter text-lg text-blue-50">
            Showcase What Matters
          </p>
          <p className="max-w-md font-inter text-lg text-blue-50 opacity-50">
            Highlight your products or services with a layout designed to focus
            attention and drive engagement.
          </p>
        </div>

        <HoverTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[60vh]">
          <FeatureCard
            src="videos/feature-1.mp4"
            title={<>Engaging Visuals</>}
            description="Showcase images, videos, or media that capture attention and bring your message to life."
          />
        </HoverTilt>

        <div className="grid grid-cols-2 grid-rows-2 gap-7  w-full lg:h-[135vh] md:h-[110vh] sm:h-[80vh]">
          <HoverTilt className="row-span-2 col-span-1">
            <FeatureCard
              src="videos/feature-2.mp4"
              title={<>Customizable Layout</>}
              description="Easily adapt the sections to match your content, style, and branding."
            />
          </HoverTilt>

          <HoverTilt className="row-span-1 col-span-1 ">
            <FeatureCard
              src="videos/feature-3b.mp4"
              title={<>Interactive Components</>}
              description="Add forms, carousels, or dynamic elements to enrich user engagement."
            />
          </HoverTilt>

          <HoverTilt className="row-span-1 col-span-1">
            <FeatureCard
              src="videos/feature-4.mp4"
              title={<>Responsive Design</>}
              description="Looks great on any device, offering a smooth experience for all users."
            />
          </HoverTilt>

          <HoverTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-green-400 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                Open to Connect
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </HoverTilt>

          <HoverTilt className="bento-tilt_2">
            <FeatureCard src="videos/feature-5.mp4" title="" description="" />
          </HoverTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
