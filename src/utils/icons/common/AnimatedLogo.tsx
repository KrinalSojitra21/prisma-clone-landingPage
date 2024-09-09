import React from "react";

const AnimatedLogo = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="50" stroke="#00FF00" strokeWidth="2" />
        <g className="line-group">
          <line
            x1="100"
            y1="0"
            x2="100"
            y2="50"
            stroke="#00FF00"
            strokeWidth="2"
          />
          <line
            x1="100"
            y1="150"
            x2="100"
            y2="200"
            stroke="#00FF00"
            strokeWidth="2"
          />
          {/* Add more lines as needed */}
        </g>
        <polygon points="90,75 110,75 100,50" fill="#00FF00" />
      </svg>
    </div>
  );
};

export default AnimatedLogo;
