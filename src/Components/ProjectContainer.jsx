// Modal Component
import React, { useState } from "react";
import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import crm from "../assets/crm.png";
import intern from "../assets/intern.png";
import aayishi from "../assets/aayishi.png";
import valentine from "../assets/valentine.png";
import techminds from "../assets/techminds.png";
import gd from "../assets/gd.png";
import bgg from "../assets/bgg.png";
import movie from "../assets/movie.png";

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  useEffect(() => {
    // Lock the background scroll when the modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Restore scrolling when modal closes
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative max-h-[90vh] overflow-auto">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &#10005;
        </button>
        {/* Use modalImage if available; otherwise, fallback to image */}
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
      modalImage: "src/assets/Dashboard.png",
    },
    {
      title: "Kathmandu Fintek",
      description:
        "A comprehensive fintech event management platform designed for Kathmandu FinTech, streamlining the organization and execution of industry events.",
      image: bgg,
      modalImage: "src/assets/fintek.png",
    },
    {
      title: "Internship ICT FRAME",
      description:
        "A user-friendly internship portal developed for ICT Frame, connecting students with internship opportunities in the tech industry.",
      image: intern,
      modalImage: "src/assets/fintek.png",
    },
    {
      title: "Nepal Diaries",
      description:
        "A visually appealing website created for Nepal Dairies to showcase their product models, enhancing their online presence and customer engagement.",
      image: aayishi,
      modalImage: "src/asset/saayishi.png",
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
      <h2 className="text-lg mx-3 text-white font-bold mb-4">
        <span
          className="bg-purple-500 h-3 w-3 inline-block mr-2"
          style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
        ></span>
        Project Showroom
      </h2>
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
