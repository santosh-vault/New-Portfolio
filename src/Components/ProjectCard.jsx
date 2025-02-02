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
      className="relative group bg-white rounded-lg w-68 shadow-xl overflow-hidden hover:shadow-2xl transform transition-all duration-500 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay with Animation */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="text-white text-lg font-semibold tracking-wide">
            View More
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors">
          {title}
        </h2>
        <p className="text-sm text-gray-600">{truncatedDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
