import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Scroll3DFadeIn from "@animations/Scroll3DFadeIn";
import ScrollPinAnimation from "@animations/ScrollPinAnimation";
import HoverTilt from "@animations/HoverTilt";
import { useTheme } from "@components/ThemeProvider";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { theme } = useTheme();
  const imgPath = `img/${theme}/about.jpg`;

  return (
    <div id="about" className="min-h-screen w-screen ">
      <div className="relative mb-8 mt-20 flex flex-col items-center gap-5">
        <p className="font-inter text-lg uppercase md:text-xl text-background-b">
          Building your next big idea
        </p>

        <HoverTilt range="15">
          <Scroll3DFadeIn
            text="This is an example of a landing page"
            containerClass="animated-title"
            wordClass="mt-5  text-center about-heading text-shadow-lg/100"
          />
        </HoverTilt>

        <div className="about-subtext text-background-b">
          <p>From concept to launch — we help bring your vision to life.</p>
          <p>Design. Develop. Deliver. Your future starts here.</p>
        </div>
      </div>

      <ScrollPinAnimation
        targetClasses={[".mask-about-bg", ".mask-about"]}
        triggerId="#clip"
        start="center center"
        end="+=800 center"
        scrub={0.5}
        pin={true}
        pinSpacing={true}
      >
        <div className="h-dvh w-screen" id="clip">
          <div className="mask-about-bg about-image bg-background-b relative">
            <div className="absolute left-0 top-0 size-full  border border-dashed border-background-b" />
          </div>
          <div className="mask-about about-image">
            <img
              src={imgPath}
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
