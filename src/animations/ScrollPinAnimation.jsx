import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ScrollPinAnimation = ({
  targetClasses = [],
  triggerId,
  start = "center center",
  end = "+=300 center",
  scrub = 0.5,
  pin = true,
  pinSpacing = false,
  children,
}) => {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: triggerId,
        start,
        end,
        scrub,
        pin,
        pinSpacing,
      },
    });

    targetClasses.forEach((targetClass) => {
      timeline.to(
        targetClass,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
          border: "0px",
        },
        0
      );
    });

    // 🧼 Clean up both ScrollTrigger and GSAP timeline on unmount
    return () => {
      if (timeline.scrollTrigger) timeline.scrollTrigger.kill();
      timeline.kill();
    };
  }, [targetClasses, triggerId, start, end, scrub, pin, pinSpacing]);

  return <>{children}</>;
};

export default ScrollPinAnimation;
