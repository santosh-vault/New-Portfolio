// GlowingBoxWithText.js
import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center pt-16">
      <div className="relative overflow-hidden w-full max-w-3xl mx-auto">
        <div className="glow absolute top-0 left-0 w-full h-full rounded-md">
            
        </div>
        <Navbar />
        <div className="mb-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              About Me
            </h1>
            <div className="bg-purple-500 h-1 w-40 mx-auto mb-4"></div>
          </div>
        <div className="bg-purple-900 text-white p-8 md:p-12 lg:p-16 rounded-md relative z-10">
        
          <div className="text-lg md:text-2sm lg:text-4sm leading-relaxed mb-6">
            Hi there! I'm a beginner frontend web developer passionate about
            creating engaging and interactive user experiences. My journey into
            the world of web development is driven by a curiosity for turning
            ideas into visually appealing and functional websites.
          </div>
          <div className="text-lg md:text-2sm lg:text-4sm leading-relaxed mb-6 italic text-gray-300 w-4/5 mx-auto">
            I enjoy exploring the latest technologies in the frontend ecosystem
            and turning design concepts into reality. My skills include HTML,
            CSS, JavaScript, and I'm always eager to learn and adapt to new
            challenges.
          </div>
          <div className="text-lg md:text-2sm lg:text-4sm leading-relaxed mb-6">
            Let's build something amazing together! Feel free to explore my
            projects and get in touch for collaboration or just a friendly
            chat.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
