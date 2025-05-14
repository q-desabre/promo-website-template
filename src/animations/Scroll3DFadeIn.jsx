import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

// See .scroll3d-word in index.css for the 3D effect

const Scroll3DFadeIn = ({ text = "", containerClass = "", wordClass = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".scroll3d-word", {
        opacity: 0,
        transform:
          "translate3d(10px, 51px, -60px) rotateY(60deg) rotateX(-40deg)",
        transformOrigin: "50% 50% -150px",
      });

      gsap.to(".scroll3d-word", {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.out",
        stagger: 0.03,
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
    <div ref={containerRef} className={clsx("scroll3d-title", containerClass)}>
      {text.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className={clsx("scroll3d-word", wordClass)}
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Scroll3DFadeIn;
