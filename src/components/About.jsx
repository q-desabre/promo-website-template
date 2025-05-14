import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Scroll3DFadeIn from "../animations/Scroll3DFadeIn";
import ScrollPinAnimation from "../animations/ScrollPinAnimation";
import { HoverTilt } from "../animations/HoverTilt";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Lorem Ipseum
        </p>

        <HoverTilt range="15">
          <Scroll3DFadeIn
            text="Welcome to <b>Qtech</b><br />Building your <b>digital future</b>"
            containerClass="animated-title"
            wordClass="mt-5 !text-black text-cente"
          />
        </HoverTilt>

        <div className="about-subtext">
          <p>Empowering Your Vision with Seamless Technology</p>
          <p className="text-gray-500">
            From concept to code, we craft digital experiences that captivate
            and convert.
          </p>
        </div>
      </div>

      <ScrollPinAnimation
        targetClass=".mask-clip-path"
        triggerId="#clip"
        start="center center"
        end="+=800 center"
        scrub={0.5}
        pin={true}
        pinSpacing={true}
      >
        <div className="h-dvh w-screen" id="clip">
          <div className="mask-clip-path about-image">
            <img
              src="img/about.webp"
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
