import React from "react";
import prog from "../assets/prog.png";

const Hire = () => {
  const sectionStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(128, 0, 128, 0.9)), url(${prog}) center/cover no-repeat`,
    backgroundAttachment: "fixed",
  };

  return (
    <div
      className="min-h-[30vh] sm:min-h-[40vh] py-8 sm:py-16 flex items-center justify-center relative mx-1 sm:mx-0 rounded-lg sm:rounded-none w-full"
      style={sectionStyle}
    >
      <div className="text-white text-center px-2 sm:px-4 z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Hire Me</h1>
        <div className="bg-gray-100 h-0.5 w-20 mx-auto mb-4"></div>
        <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-xl mx-auto px-2">
          I am available for new opportunities. Let's work together to create
          amazing projects.
        </p>
        <a
          href="mailto:santoshsub.33@gmail.com"
          className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-purple-900 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300 text-sm sm:text-base"
        >
          Send Email
        </a>
      </div>
    </div>
  );
};

export default Hire;
