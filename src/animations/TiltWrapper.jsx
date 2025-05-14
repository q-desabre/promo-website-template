import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

export const TiltWrapper = ({
  children,
  className = "",
  mode = "basic", // 'basic' or 'animated'
  range = 5,
}) => {
  const [transformStyle, setTransformStyle] = useState("");
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  const handleMouseMove = (event) => {
    const target = sectionRef.current;
    if (!target) return;

    const { left, top, width, height } = target.getBoundingClientRect();
    const x = (event.clientX - left) / width;
    const y = (event.clientY - top) / height;

    const tiltX = (y - 0.5) * range;
    const tiltY = (x - 0.5) * -range;

    if (mode === "basic") {
      const transform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1,1,1)`;
      setTransformStyle(transform);
    } else if (mode === "animated") {
      const offsetX = event.clientX - (left + width / 2);
      const offsetY = event.clientY - (top + height / 2);

      gsap.to(sectionRef.current, {
        x: offsetX,
        y: offsetY,
        rotationY: offsetX / 2,
        rotationX: -offsetY / 2,
        transformPerspective: 500,
        duration: 1,
        ease: "power1.out",
      });

      gsap.to(contentRef.current, {
        x: -offsetX,
        y: -offsetY,
        duration: 1,
        ease: "power1.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (mode === "basic") {
      setTransformStyle("");
    } else if (mode === "animated") {
      gsap.to(sectionRef.current, {
        x: 0,
        y: 0,
        rotationY: 0,
        rotationX: 0,
        duration: 1,
        ease: "power1.out",
      });
      gsap.to(contentRef.current, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power1.out",
      });
    }
  };

  return (
    <div
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => mode === "animated" && null}
      className={className}
      style={
        mode === "basic"
          ? { transform: transformStyle }
          : { perspective: "500px" }
      }
    >
      <div
        ref={contentRef}
        style={mode === "animated" ? { transformStyle: "preserve-3d" } : {}}
        className="w-full h-full"
      >
        {children}
      </div>
    </div>
  );
};
