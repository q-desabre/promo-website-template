import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFadeIn = ({ children, className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(containerRef.current, {
        opacity: 0,
        y: 30,
        rotateX: 10,
      });

      gsap.to(containerRef.current, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        ease: "power2.out",
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollFadeIn;
