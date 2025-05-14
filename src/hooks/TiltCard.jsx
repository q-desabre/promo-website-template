import { useTilt } from "./useTilt";

function TiltCard() {
  const tiltRef = useTilt({ range: 10, scale: 1.05, perspective: 800 });

  return (
    <div
      ref={tiltRef}
      className="w-64 h-40 bg-white rounded-lg shadow-md transition-transform"
    >
      Hover me!
    </div>
  );
}
export default TiltCard;
