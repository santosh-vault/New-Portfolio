// ProjectContainer.js
import React from "react";
import ProjectCard from "./ProjectCard";
import Bca from "../assets/Bca.jpg";
import kinchha from "../assets/kinchha.jpg";
import santo from "../assets/santo.jpg";
import valentine from "../assets/valentine.png";

const ProjectContainer = () => {
  const projects = [
    {
      title: "BCA Notes Website",
      description:
        "BCA Notes for BCA students in Nepal, ensuring top-quality study materials and academic resources for success in the BCA program.",
      link: "https://bcanotesnepal.netlify.app/",
      image: Bca,
    },
    {
      title: "E-Commerce webiste",
      description:
        "Online shopping experience with our E-commerce Project, seamlessly integrating APIs for a swift and dynamic shopping environment",
      link: "https://kinchha.netlify.app/",
      image: kinchha,
    },
    {
      title: "Propose Your Love",
      description:
        "Project created for the valentines to Propose their love in a unique way Possible.",
      link: "https://proposelove.netlify.app/",
      image: valentine,
    },
    {
      title: "Portfolio",
      description:
        "Digital presence with my React-powered personal portfolio, a showcase of creativity and skills tailored for a standout online identity.",
      link: "https://github.com/Santosh079/Portfolio",
      image: santo,
    },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-lg mx-3 text-white font-bold mb-4">
        <span
          className="bg-purple-500  h-3 w-3 inline-block mr-2"
          style={{ boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
        ></span>
        Project Showroom
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectContainer;
