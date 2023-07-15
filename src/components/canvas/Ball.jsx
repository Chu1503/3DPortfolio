import React from "react";
import { useEffect, useRef } from "react";

const Circle = ({ imgUrl }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circleElement = circleRef.current;

    // Function to calculate and update the size of the circle based on the window width
    const updateCircleSize = () => {
      const windowWidth = window.innerWidth;
      const circleSize = windowWidth > 768 ? 125 : 125; // Adjust the size for different breakpoints if needed
      circleElement.style.width = `${circleSize}px`;
      circleElement.style.height = `${circleSize}px`;
    };

    // Update the circle size initially and on window resize
    updateCircleSize();
    window.addEventListener("resize", updateCircleSize);

    return () => {
      window.removeEventListener("resize", updateCircleSize);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="relative flex items-center justify-center rounded-full bg-tertiary shadow-lg mb-4 lg:mb-8"
      style={{ aspectRatio: "1/1" }}
    >
      <img
        src={imgUrl}
        alt="Circle"
        className="w-3/4 h-3/4 rounded-full object-contain"
      />
      <div
        className="absolute top-0 left-0 right-0 bottom-0 rounded-full filter blur-md"
        style={{ boxShadow: "0 0 20px rgba(169, 1, 4, 0.8)" }}
      ></div>
    </div>
  );
};


const BallCanvas = ({ icon }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Circle imgUrl={icon} />
    </div>
  );
};


export default BallCanvas;
