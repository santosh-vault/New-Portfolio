import React from "react";

const truncateDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + "...";
  }
  return description;
};

const ProjectCard = ({ title, description, link, image }) => {
  const truncatedDescription = truncateDescription(description, 90);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-900 z-0 text-sm transform-gpu transition-transform duration-300 hover:scale-105"
    >
      <div className="bg-gray-200 rounded-md shadow-md mx-4 transform-gpu transition-transform duration-300 hover:scale-100">
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
    </a>
  );
};

export default ProjectCard;
