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
        "A robust CRM solution developed for educational consultancies, streamlining client management and enhancing communication for better service delivery.",
      image: crm,
      modalImage: Dashboard,
    },
    {
      title: "Kathmandu Fintek",
      description:
        "A comprehensive fintech event management platform designed for Kathmandu FinTech, streamlining the organization and execution of industry events.",
      image: bgg,
      modalImage: fintek,
      link: "https://www.kathmandufintek.com.np",
    },
    {
      title: "Internship ICT FRAME",
      description:
        "A user-friendly internship portal developed for ICT Frame, connecting students with internship opportunities in the tech industry.",
      image: intern,
      modalImage: job,
      link: "https://internship.ictframe.com/",
    },
    {
      title: "Nepal Diaries",
      description:
        "A visually appealing website created for Nepal Dairies to showcase their product models, enhancing their online presence and customer engagement.",
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
