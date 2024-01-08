// HeroSection.js
import React from 'react';
import Navbar from './Navbar';
import ProjectContainer from './ProjectContainer';
import Footer from './Footer';
import SkillContainer from './SkillContainer';
import heroImage from '../assets/hero.jpg';


const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row sliding-animation" style={{ backgroundColor: "#0b0b0b", minHeight: "100vh" }}>
      <div className="md:w-1/5" />
      <div className="flex-1">
        <div
          className="hero-image m-2 md:m-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '40vh',
          }}
        >
          <Navbar />
        </div>
        <div className="p-4 md:p-8">
          <ProjectContainer />
          <SkillContainer />
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Hero;
