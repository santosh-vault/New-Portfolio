// SkillCard.js
import React from 'react';

const SkillCard = ({ title, icon }) => {
  return (
    <div 
      className="bg-purple-900 p-3 md:p-4 rounded-lg shadow-lg flex items-center transition-all duration-300 hover:bg-purple-800 hover:scale-105"  
      style={{ boxShadow: '0 0 10px rgba(128, 0, 128, 0.8)' }}
    >
      <div className="bg-white rounded-full p-1 md:p-2 mr-3 flex-shrink-0">
        <div className="text-sm md:text-base">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-xs md:text-sm text-white font-medium">{title}</h2>
      </div>
    </div>
  );
};

export default SkillCard;
