// SkillContainer.js
import React from "react";
import SkillCard from "./SkillCard";
import { FaHtml5, FaFigma, FaReact, FaLaravel, FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

const initialSkills = [
  { title: "Figma", icon: <FaFigma /> },
  { title: "Photoshop", icon: <SiAdobephotoshop /> },
  { title: "Illustrator", icon: <SiAdobeillustrator /> },
  { title: "UX Research", icon: "🚀" },
  { title: "React", icon: <FaReact /> },
  { title: "Javascript", icon: <IoLogoJavascript /> },
];

const SkillContainer = ({ skills }) => {
  const skillsToRender = skills || initialSkills;

  return (
    <>
      <section className="mt-8">
        <h2 className="text-base sm:text-lg mx-1 sm:mx-3 text-white font-bold mb-4">
          <span
            className="bg-purple-500 h-2 w-2 sm:h-3 sm:w-3 inline-block mr-1 sm:mr-2"
            style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
          ></span>
          My Bag of Skills
        </h2>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 m-2 sm:m-4"
          style={{ backgroundColor: "#0b0b0b" }}
        >
          {skillsToRender.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillContainer;
