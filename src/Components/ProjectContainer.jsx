// ProjectContainer.js
import React from "react";
import ProjectCard from "./ProjectCard";
import Bca from "../assets/Bca.jpg";
import kinchha from "../assets/kinchha.jpg";
import santo from "../assets/santo.jpg";
import valentine from "../assets/valentine.png";
import techminds from "../assets/techminds.png";
import gd from "../assets/gd.png";
import bg from "../assets/bg.png";
import movie from "../assets/movie.png";

const ProjectContainer = () => {
  const projects = [
    {
      title: "Greenify",
      description:
        "A MERN stack project which is going to take donation form people and invest all the donation in tree plantation project.",
      link: "https://github.com/santosh-vault/greenify",
      image: bg,
    },
    {
      title: "BCA Notes Website",
      description:
        "Completly React + tailwind website but called API to store some BCA Notes for BCA students in Nepal, ensuring top-quality study materials and academic resources for success in the BCA program.",
      link: "https://bcanotesnepal.netlify.app/",
      image: Bca,
    },

    {
      title: "E-Commerce webiste",
      description:
        "Called DUMMY API to create a store for Online shopping experience with our E-commerce Project, seamlessly integrating APIs for a swift and dynamic shopping environment",
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
      title: "TechMinds Website",
      description:
        "Techmind is a website developed using REACT with the primary goal of enhancing my technical skills and expanding my knowledge in web development.",
      link: "https://techmindsclone.netlify.app/",
      image: techminds,
    },
    {
      title: "Design Portfolio",
      description:
        "A creative portfolio showcasing diverse graphic design projects, blending aesthetics with functionality to deliver impactful visual experiences.",
      link: "https://santoshnart.netlify.app/",
      image: gd,
    },
    {
      title: "Ticket Website",
      description:
        "Created Using Php for the backend and html cass for the frontend, a beautiful Demo website for booking tickets",
      link: "https://github.com/santosh-vault/Movie-ticket",
      image: movie,
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
