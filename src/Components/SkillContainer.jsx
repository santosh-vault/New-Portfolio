// SkillContainer.js
import React from 'react';
import SkillCard from './SkillCard';

const initialSkills = [
  { title: 'HTML', icon: '🌐' },
  { title: 'CSS', icon: '🎨' },
  { title: 'JavaScript', icon: '🚀' },
  { title: 'React', icon: '🚀' },
  { title: 'Laravel', icon: '🚀' },
  { title: 'tailwind', icon: '🚀' },
  { title: 'Bootstrap', icon: '🚀' },
  { title: 'graphics Design', icon: '🚀' },
  { title: 'PHP', icon: '🚀' },
];

const SkillContainer = ({ skills }) => {
  const skillsToRender = skills || initialSkills;

  return (
    <>
      <section className="mt-8">
        <h2 className="text-2xl mx-3 text-white font-bold mb-4">My Bag of Skills</h2>
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
