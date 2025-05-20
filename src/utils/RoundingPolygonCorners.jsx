// RoundingPolygonCorners.jsx
const RoundingPolygonCorners = () => (
  <svg className="invisible absolute size-0" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="roundingPolygonCorners">
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
          result="softEdges"
        />
        <feComposite in="SourceGraphic" in2="softEdges" operator="atop" />
      </filter>
    </defs>
  </svg>
);

export default RoundingPolygonCorners;
