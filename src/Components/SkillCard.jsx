// SkillCard.js
import React from 'react';

const SkillCard = ({ title, icon }) => {
  return (
    <div className="bg-purple-900 p-2 sm:p-3 rounded-md shadow-lg flex items-center justify-center sm:justify-start"  style={{ boxShadow: '0 0 10px rgba(128, 0, 128, 0.8)' }}>
      <div className="bg-white rounded-full p-1 mr-1 sm:mr-2 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h2 className="text-xs sm:text-sm text-white text-center sm:text-left">{title}</h2>
      </div>
    </div>
  );
};

export default SkillCard;
