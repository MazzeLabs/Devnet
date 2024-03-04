import React from "react";
import "./Animation.css";

interface DigitProps {
  color: string;
  index: number;
  pathLength: number;
}

const Digit: React.FC<DigitProps> = ({ color, index, pathLength }) => {
  const styles = {
    color: color,
    i: index,
  };

  return (
    <svg
      className="digit"
      viewBox="-20 -20 140 240"
      width="100"
      height="200"
      strokeWidth="20"
      fill="none"
      style={styles}
    >
      <circle r="50" cx="50" cy="50" pathLength={pathLength} />
      <path
        d="M 0 50
          C 0 0, 50 0, 50 0
          C 100 0, 100 50, 100 50
          L 0 200
          L 100 200"
        pathLength={pathLength}
      />
    </svg>
  );
};

const Animation: React.FC = () => {
  const colors = ["#5288E1", "#3DA658", "#EFBE1B", "#D7483D"];
  const pathLength = 0.6; // Adjust for animation if desired

  return (
    <div className="digits">
      {colors.map((color, index) => (
        <Digit key={index} color={color} index={index + 1} pathLength={pathLength} />
      ))}
    </div>
  );
};

export default Animation;