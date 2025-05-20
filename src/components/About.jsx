import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Scroll3DFadeIn from "@animations/Scroll3DFadeIn";
import ScrollPinAnimation from "@animations/ScrollPinAnimation";
import HoverTilt from "@animations/HoverTilt";
import useIsMobile from "@hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const isMobile = useIsMobile();

  const ScrollContent = () => (
    <div className="h-dvh w-screen" id="clip">
      <div className="mask-clip-path-3 about-image bg-black relative">
        <div className="absolute left-0 top-0 size-full bg-neutral-800/30 border border-dashed border-white" />
      </div>
      <div className="mask-clip-path-2 about-image">
        <img
          src="img/nature/about.jpg"
          alt="Background"
          className="absolute left-0 top-0 size-full object-cover"
        />
      </div>
    </div>
  );

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-20 flex flex-col items-center gap-5">
        <p className="font-inter text-sm uppercase md:text-[16px]">
          Building your next big idea
        </p>

        <HoverTilt range="15">
          <Scroll3DFadeIn
            text="Welcome  to  your  site"
            containerClass="animated-title"
            wordClass="mt-5  text-center about-heading text-shadow-lg/100"
          />
        </HoverTilt>

        <div className="about-subtext">
          <p>From concept to launch — we help bring your vision to life.</p>
          <p className="text-gray-500">
            Design. Develop. Deliver. Your future starts here.
          </p>
        </div>
      </div>

      <ScrollPinAnimation
        targetClasses={[".mask-clip-path-3", ".mask-clip-path-2"]}
        triggerId="#clip"
        start="center center"
        end="+=800 center"
        scrub={0.5}
        pin={true}
        pinSpacing={true}
      >
        <div className="h-dvh w-screen" id="clip">
          <div className="mask-clip-path-3 about-image bg-black relative">
            <div className="absolute left-0 top-0 size-full bg-neutral-800/30 border border-dashed border-white" />
          </div>
          <div className="mask-clip-path-2 about-image">
            <img
              src="img/nature/about.jpg"
              alt="Background"
              className="absolute left-0 top-0 size-full object-cover"
            />
          </div>
        </div>
      </ScrollPinAnimation>
    </div>
  );
};

export default About;
