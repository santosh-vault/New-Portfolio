import React from "react";
import prog from "../assets/prog.png";

const Hire = () => {
  const pageStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(128, 0, 128, 0.9)), url(${prog}) fixed center/cover`,
    height: "30vh",
  };

  return (
    <div
      className="h-screen flex items-center justify-center"
      style={pageStyle}
    >
      <div className="text-white text-center">
        <h1 className="text-2xl md:text-5xl lg:text-4xl font-bold mb-4">
          Hire Me
        </h1>
        <div className="bg-gray-100 h-0.5 w-20 mx-auto mb-4"></div>
        <p className="text-lg md:text-2sm lg:text-2sm mb-6">
          I am available for new opportunities. Let's work together to create
          amazing projects.
        </p>
      </div>
    </div>
  );
};

export default Hire;
