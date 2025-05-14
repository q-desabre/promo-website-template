import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ScrollPinAnimation = ({
  targetClass,
  triggerId,
  start = "center center",
  end = "+=800 center",
  scrub = 0.5,
  pin = true,
  pinSpacing = true,
  children,
}) => {
  useEffect(() => {
    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: triggerId,
        start,
        end,
        scrub,
        pin,
        pinSpacing,
      },
    });

    animation.to(targetClass, {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });

    // Clean up on unmount: Kill active scroll triggers
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [targetClass, triggerId, start, end, scrub, pin, pinSpacing]);

  return <>{children}</>;
};

export default ScrollPinAnimation;
