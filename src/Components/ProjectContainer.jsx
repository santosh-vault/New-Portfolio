// ProjectContainer.js
import React from 'react';
import ProjectCard from './Projectcard';
import Bca from '../assets/Bca.jpg'
import kinchha from '../assets/kinchha.jpg'
import santo from '../assets/santo.jpg'

const ProjectContainer = () => {
  const projects = [
    {
      title: 'BCA Notes Website',
      description: 'BCA Notes tailored for BCA students in Nepal, ensuring top-quality study materials and academic resources for success in the BCA program.',
      link: 'https://bcanotesnepal.netlify.app/',
      image: Bca,
    },
    {
      title: 'E-Commerce webiste',
      description: 'Online shopping experience with our E-commerce Project, seamlessly integrating APIs for a swift and dynamic shopping environment',
      link: 'https://kinchha.netlify.app/',
      image: kinchha, 
    },
    {
      title: 'Portfolio',
      description: 'Digital presence with my React-powered personal portfolio, a showcase of creativity and skills tailored for a standout online identity.',
      link: 'https://github.com/Santosh079/Portfolio',
      image: santo, // Adjust the path to your image
    },


  ];

  return (
    <section className="mt-8">
      <h2 className="text-2xl mx-3 text-white font-bold mb-4">Project Showroom</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectContainer;
