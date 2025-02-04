// GlowingBoxWithText.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center py-16">
      <div className="relative overflow-hidden w-full max-w-3xl mx-auto">
        <div className="glow absolute top-0 left-0 w-full h-full rounded-md"></div>
        <Navbar />
        <div className="mb-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight my-4">
            About Me
          </h1>
          <div className="bg-purple-500 h-1 w-20 mx-auto mb-4"></div>
        </div>
        <div className="bg-purple-800 text-white p-8 md:p-12 lg:p-16 rounded-md relative z-10">
          <div className="text-md lg:text-md leading-relaxed mb-6">
            Hello, I'm Santosh, a passionate UI/UX and graphic designer driven
            by the art of creating visually stunning and user-centric digital
            experiences. Proficient in Figma, Adobe Photoshop, and design
            principles, I craft designs that captivate and connect.
          </div>
          <div className="text-md lg:text-md leading-relaxed mb-6 italic text-gray-300 w-4/5 mx-auto">
            Currently immersed in mastering design trends and user behaviors, I
            seamlessly blend my creativity with a strong technical approach to
            bring fresh concepts to life.
          </div>
          <div className="text-md lg:text-md leading-relaxed mb-6">
            My approach combines user experience strategies with bold graphic
            designs, ensuring every project strikes the right balance between
            aesthetics and functionality.
          </div>
          <div className="text-md lg:text-md leading-relaxed mb-6">
            With a proven track record as a freelance designer, I've
            successfully collaborated with clients to deliver design solutions
            that stand out and communicate effectively.
          </div>
          <div className="text-md lg:text-md leading-relaxed mb-6">
            My current goals include mastering emerging design trends,
            collaborating with like-minded creatives, and pushing boundaries in
            digital design—excited about the prospect of working together and
            crafting memorable designs.
          </div>
          <div className="text-md lg:text-md leading-relaxed mb-6">
            Feel free to contact me at{" "}
            <a
              href="mailto:santoshsub.33@gmail.com"
              className="text-purple-300 underline"
            >
              santoshsub.33@gmail.com
            </a>
            . Let's connect and bring innovative designs to life!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
