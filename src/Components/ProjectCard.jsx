import React from "react";

const truncateDescription = (description, maxLength) => {
  return description.length > maxLength
    ? description.slice(0, maxLength) + "..."
    : description;
};

const ProjectCard = ({ title, description, image, onClick }) => {
  const truncatedDescription = truncateDescription(description, 90);

  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-gray-200 rounded-md shadow-md mx-4 transform-gpu transition-transform duration-300 hover:scale-105"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover mb-2 rounded-t-md"
      />
      <div className="text-gray-900 px-4 py-1">
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-sm text-gray-900 mb-3">{truncatedDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
