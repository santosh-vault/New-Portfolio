// Modal Component
import React, { useState } from "react";
import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import crm from "../assets/crm.png";
import intern from "../assets/intern.png";
import aayishi from "../assets/aayishi.png";
import Dashboard from "../assets/Dashboard.png";
import fintek from "../assets/fintek.png";
import bgg from "../assets/bgg.png";
import job from "../assets/job.png";
import ho from "../assets/ho.png";

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()} // Prevent background click closing the modal
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &#10005;
        </button>
        <div className="overflow-auto mb-4 rounded-md">
          <img
            src={project.modalImage || project.image}
            alt={project.title}
            className="w-full object-contain"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:underline cursor-pointer"
          onClick={(e) => e.stopPropagation()}
        >
          Visit
        </a>
      </div>
    </div>
  );
};
const ProjectContainer = () => {
  const projects = [
    {
      title: "CRM",
      description:
        " As a UI/UX designer at W3 Developers, I contributed to developing a CRM solution tailored for educational consultancies. My responsibilities included designing user-friendly interfaces, creating dashboards for performance tracking, and ensuring an intuitive user experience aligned with client requirements.",
      image: crm,
      modalImage: Dashboard,
    },
    {
      title: "Kathmandu Fintek",
      description:
        "I developed a comprehensive fintech event management platform for Kathmandu FinTech, focusing on enhancing the organization and execution of industry events. My role involved conducting user research, wireframing, and designing interactive dashboards to streamline event processes and improve user engagement. This project was completed as part of my role at W3 Developers.",
      image: bgg,
      modalImage: fintek,
      link: "https://www.kathmandufintek.com.np",
    },
    {
      title: "Internship ICT FRAME",
      description:
        "I designed a user-friendly internship portal for ICT Frame, aimed at connecting students with valuable internship opportunities in the tech industry. My responsibilities included creating an intuitive user interface and optimizing user journeys for a seamless experience. This project was accomplished during my tenure at W3 Developers.",
      image: intern,
      modalImage: job,
      link: "https://internship.ictframe.com/",
    },
    {
      title: "Nepal Diaries",
      description:
        "I developed a visually appealing website for Nepal Dairies to effectively showcase their product models, enhancing their online presence and fostering better customer engagement. This project was successfully accomplished during my role at W3 Developers.",
      image: aayishi,
      modalImage: ho,
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mx-3 mb-4">
        <h2 className="text-lg text-white font-bold flex items-center">
          <span
            className="bg-purple-500 h-3 w-3 inline-block mr-2 "
            style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
          ></span>
          UI/UX Projects
        </h2>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => openModal(project)}
            className="cursor-pointer"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      {selectedProject && (
        <Modal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default ProjectContainer;
