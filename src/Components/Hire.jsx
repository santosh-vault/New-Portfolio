import React from "react";
import prog from "../assets/prog.png";

const Hire = () => {
  const sectionStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(128, 0, 128, 0.9)), url(${prog}) center/cover no-repeat`,
    backgroundAttachment: "fixed",
  };

  return (
    <div
      className="min-h-[40vh] py-12 md:py-16 flex items-center justify-center relative rounded-lg my-8"
      style={sectionStyle}
    >
      <div className="text-white text-center px-4 md:px-6 z-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Hire Me</h1>
        <div className="bg-gray-100 h-0.5 w-16 md:w-20 mx-auto mb-4"></div>
        <p className="text-sm md:text-base lg:text-lg mb-6 max-w-xl mx-auto leading-relaxed">
          I am available for new opportunities. Let's work together to create
          amazing projects.
        </p>
        <a
          href="mailto:santoshsub.33@gmail.com"
          className="inline-block px-4 md:px-6 py-2 md:py-3 bg-purple-900 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300 text-sm md:text-base"
        >
          Send Email
        </a>
      </div>
    </div>
  );
};

export default Hire;
