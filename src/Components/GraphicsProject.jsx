// Modal Component
import React, { useState } from "react";
import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import DIGI from "../assets/DIGI.png";
import Bca from "../assets/Bca.jpg";
import image from "../assets/image.png";
import gangstar from "../assets/gangstar.png";
import logoc from "../assets/logoc.png";
import logoc1 from "../assets/LOGOS.png";
import socail from "../assets/socail.png";
import poster from "../assets/poster.png";
import saayishi from "../assets/aayishi.png";

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
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
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
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-700">{project.description}</p>
        </div>

        {/* Always-visible Visit Button */}
        <div className="pt-4 border-t border-gray-200">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

const GraphicsProject = () => {
  const projects = [
    {
      title: "Logos",
      description:
        "I have designed impactful logos for companies like Shabda Sanchar, Everest Flying Academy, Lamichhane Automobiles, and Greenify, reflecting their unique identities and values. Each design combines creativity and precision to deliver a lasting impression.",
      image: logoc,
      modalImage: logoc1,
      link: "https://www.behance.net/gallery/223833371/Nepali-Brand-Logos",
    },
    {
      title: "Socail Media posts",
      description:
        "Turning visions into creative realities! ✨ With a passion for design, I craft unique and impactful logos that capture the essence of every brand. From modern and minimalistic to bold and dynamic, each logo tells a story and creates a lasting impression. Let's bring your brand to life! ",
      image: DIGI,
      modalImage: image,
      link: "https://www.behance.net/gallery/223860145/Creative-Social-Media-Post-Designs-for-Brand",
    },
    {
      title: "Illustrations / Posters",
      description:
        "Bringing ideas to life through vibrant and meaningful illustrations! 🎨 Each piece is crafted with creativity and attention to detail, telling stories that captivate and inspire. From concept to completion, my illustrations are designed to leave a lasting impression. ✨ #IllustrationArt #CreativeDesigns #VisualStorytelling",
      image: gangstar,
      modalImage: poster,
      link: "https://www.figma.com/design/KcZDVz9OZTY6ejpQ10xwlU/Untitled?node-id=0-1&p=f&t=WRGKNrQelHh4sBf6-0",
    },
    {
      title: "Web Development",
      description:
        "Apart from designs, I also dive into coding projects like building Valentine-themed projects, tree plantation initiatives, and more! 💻🌱 Bringing both creativity and functionality together in every project. ",
      image: Bca,
      modalImage: saayishi,
      link: "https://github.com/santosh-vault",
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
          Graphics Design Projects
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

export default GraphicsProject;
