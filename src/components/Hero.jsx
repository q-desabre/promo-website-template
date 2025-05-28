import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
import VideoPreview from "@components/VideoPreview";
import ThreeBodyLoader from "@components/ThreeBodyLoader";
import HoverTiltAnimated from "@animations/HoverTiltAnimated";
import { useTheme } from "@components/ThemeProvider";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;
  const nextVdRef = useRef(null);

  // Handle video load
  const handleVideoLoad = () => setLoadedVideos((prev) => prev + 1);

  // Stop loading once all videos are loaded
  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  // Handle mini video click
  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const { theme } = useTheme();
  // Generate video source
  const getVideoSrc = (index) => `videos/${theme}/hero-${index}.mp4`;

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {/* Loading spinner */}
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen bg-violet-50">
          <ThreeBodyLoader />
        </div>
      )}

      {/* Video frame */}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen rounded-lg bg-background overflow-hidden"
      >
        <div>
          {/* Mini video preview */}
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  ref={nextVdRef}
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
              </div>
            </VideoPreview>
          </div>

          {/* Video elements */}
          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            autoPlay
            id="next-video"
            className="absolute-center invisible z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        {/* Hero heading */}
        <h1 className="font-clash hero-heading absolute bottom-5 right-5 z-40 text-shadow-lg/100">
          Your Brand
        </h1>

        {/* Description and Button */}
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="hero-heading">Your Vision</h1>
            <p className="text-xl mt-5 mb-5 max-w-128 font-inter text-secondary filter text-shadow-lg/100">
              Start with a simple intro or tagline <br /> Keep it brief, clear,
              and engaging
            </p>
            <Button
              href="https://q-desabre.github.io/qtech-portfolio/"
              id="watch-trailer"
              title="Go to my portfolio"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-accent text-accent-contrast flex-center gap-1"
            />
          </div>
        </div>
      </div>

      {/* Duplicate heading for effect */}
      <h1 className="font-clash hero-heading absolute bottom-5 right-5 !text-background-b">
        Your Brand
      </h1>
    </div>
  );
};

export default Hero;
