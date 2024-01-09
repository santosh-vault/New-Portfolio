// SkillContainer.js
import React from 'react';
import SkillCard from './SkillCard';
import { FaHtml5, FaCss3, FaReact, FaLaravel, FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiAdobephotoshop } from "react-icons/si";

const initialSkills = [
  { title: 'HTML', icon: <FaHtml5 /> },
  { title: 'CSS', icon: <FaCss3 /> },
  { title: 'JavaScript', icon: <IoLogoJavascript /> },
  { title: 'React', icon: <FaReact /> },
  { title: 'Laravel', icon: <FaLaravel /> },
  { title: 'tailwind', icon: <SiTailwindcss /> },
  { title: 'Bootstrap', icon: '🚀' },
  { title: 'graphics Design', icon: <SiAdobephotoshop /> },
  { title: 'PHP', icon: <FaPhp /> },
];

const SkillContainer = ({ skills }) => {
  const skillsToRender = skills || initialSkills;

  return (
    <>
      <section className="mt-8">
        <h2 className="text-lg mx-3 text-white font-bold mb-4">My Bag of Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 m-4" style={{ backgroundColor: "#0b0b0b" }}>

          {skillsToRender.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillContainer;
