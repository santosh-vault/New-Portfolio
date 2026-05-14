// Modal Component
import React, { useState } from "react";
import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import crma from "../assets/crma.png";
import intern from "../assets/intern.png";
import Dashboard from "../assets/Dashboard.png";
import prime from "../assets/prime.png";
import PM from "../assets/PM.png";
import job from "../assets/job.png";
import ho from "../assets/ho.png";
import meroshare from "../assets/meroshare.png";
import taskflo from "../assets/taskflo.png";
import lsp from "../assets/lsp.png";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto relative max-h-[90vh] flex flex-col p-6">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 z-10 bg-white rounded-full p-1 shadow-md"
          onClick={onClose}
        >
          &#10005;
        </button>

        {/* Scrollable Content */}
        <div
          className="overflow-auto mb-4 pr-2"
          style={{ maxHeight: "calc(90vh - 100px)" }}
        >
          <div className="mb-4 rounded-md">
            <img
              src={project.modalImage || project.image}
              alt={project.title}
              className="w-full object-contain rounded-md"
            />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            {project.title}
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Always-visible Visit Button */}
        <div className="pt-4 border-t border-gray-200">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300 ease-in-out text-sm md:text-base"
            onClick={(e) => e.stopPropagation()}
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectContainer = () => {
  const projects = [
    {
      title: "PRIME",
      description:
        "PRIME is a comprehensive Management & Accounting platform designed to streamline financial operations. This project showcases a premium digital vault experience with elegant UI/UX design, featuring secure login flows, intuitive navigation, and a sophisticated interface that conveys trust and professionalism. The design emphasizes security, accessibility, and user experience for business accounting and management tasks.",
      image: prime,
      modalImage: prime,
      link: "https://www.figma.com/design/l70rvOTz2uzr7p969ZcZgk/PRIME?t=KJA6ePj1y6ZrhY0w-0",
    },
    {
      title: "TechNest Innovation",
      description:
        "TechNest Innovation is a cutting-edge design system and portfolio project that showcases modern UI/UX principles. The design emphasizes innovative technology solutions with a focus on user-centric design, clean aesthetics, and seamless interactions. This project demonstrates how thoughtful design can transform complex technical concepts into intuitive, engaging digital experiences.",
      image: PM,
      modalImage: PM,
      link: "https://www.figma.com/design/FzIsm8su4tvMrN8yQudTDL/TechNest?node-id=0-1&p=f&t=KJA6ePj1y6ZrhY0w-0",
    },
    {
      title: "TaskFlo Landing Page",
      description:
        "I designed a user-centric landing page for 'TaskFlo,' a platform which is used to manage tasks and projects efficiently. My design focused on clear navigation, engaging visuals, and a seamless user experience to attract and retain users. This project was completed during my internship at W3 Developers.",
      image: taskflo,
      modalImage: taskflo,
      link: "https://www.figma.com/design/6QkvYD2M2OT7Mo5uahhBo4/Landing-page?node-id=0-1&t=orRqbywc4yZWEi8T-1",
    },
    {
      title: "Meroshare APP",
      description:
        "Redesigned the meroshare. Improve the users experence by enhancing UI and adding all necessary features to homepage.",
      image: meroshare,
      modalImage: meroshare,
      link: "https://www.behance.net/gallery/223873273/Finance-App-UX-Improvement-Meroshare",
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
    <section className="mt-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg md:text-xl text-white font-bold flex items-center">
          <span
            className="bg-purple-500 h-3 w-3 inline-block mr-2"
            style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
          ></span>
          UI/UX Projects
        </h2>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
