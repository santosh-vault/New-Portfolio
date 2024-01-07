// SkillCard.js
import React from 'react';

const SkillCard = ({ title, icon }) => {
  return (
    <div className="bg-purple-900 p-2 rounded-md shadow-lg flex items-center"  style={{ boxShadow: '0 0 10px rgba(128, 0, 128, 0.8)' }}>
      <div className="bg-white rounded-full p-1 mr-2">
        {icon}
      </div>
      <div>
        <h2 className="text-sm text-white">{title}</h2>
      </div>
    </div>
  );
};

export default SkillCard;
