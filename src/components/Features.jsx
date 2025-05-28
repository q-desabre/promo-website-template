import { useState, useRef } from "react";
import HoverTilt from "@animations/HoverTilt";
import { TiLocationArrow } from "react-icons/ti";
import FeatureCard from "@components/FeatureCard";
import { useTheme } from "@components/ThemeProvider";

const Features = () => {
  const { theme } = useTheme();
  const videoPath = `videos/${theme}/`;

  return (
    <section className="bg-background-b md:pb-50 sm:pb-20 pb-10" id="features">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-inter text-lg text-secondary font-semibold text-outline">
            Showcase What Matters
          </p>
          <p className="max-w-md font-inter text-lg text-background opacity-50">
            Highlight your products or services with a layout designed to focus
            attention and drive engagement.
          </p>
        </div>

        <HoverTilt className="border border-white/20 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[60vh]">
          <FeatureCard
            src={`${videoPath}/feature-1.mp4`}
            title={<>Engaging Visuals</>}
            description="Showcase images, videos, or media that capture attention and bring your message to life."
          />
        </HoverTilt>

        <div className="grid grid-cols-2 lg:grid-rows-2 gap-7  w-full lg:h-[135vh] md:h-[110vh] sm:h-auto md:h-[100vh]">
          <HoverTilt className="min-h-[20rem] row-span-2 col-span-2 md:row-span-2 md:col-span-1">
            <FeatureCard
              src={`${videoPath}/feature-2.mp4`}
              title={<>Customizable Layout</>}
              description="Easily adapt the sections to match your content, style, and branding."
            />
          </HoverTilt>

          <HoverTilt className="min-h-[20rem] row-span-2 col-span-2  md:row-span-1 md:col-span-1 ">
            <FeatureCard
              src={`${videoPath}/feature-3.mp4`}
              title={<>Interactive Components</>}
              description="Add forms, carousels, or dynamic elements to enrich user engagement."
            />
          </HoverTilt>

          <HoverTilt className="min-h-[20rem] row-span-2 col-span-2 md:row-span-1 md:col-span-1">
            <FeatureCard
              src={`${videoPath}/feature-4.mp4`}
              title={<>Responsive Design</>}
              description="Looks great on any device, offering a smooth experience for all users."
            />
          </HoverTilt>

          <HoverTilt className="row-span-1 col-span-1 min-h-[10rem]">
            <div className="flex size-full flex-col justify-between bg-accent p-5">
              <h1 className="feature-connect special-font max-w-64 text-black">
                Open to Connect
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </HoverTilt>

          <HoverTilt className="col-span-1 row-span-1 min-h-[10rem]">
            <FeatureCard
              src={`${videoPath}/feature-5.mp4`}
              title=""
              description=""
            />
          </HoverTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
