// GlowingBoxWithText.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'

const About = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center py-16">
      <div className="relative overflow-hidden w-full max-w-3xl mx-auto">
        <div className="glow absolute top-0 left-0 w-full h-full rounded-md"></div>
        <Navbar />
        <div className="mb-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight my-4">
            About Me
          </h1>
          <div className="bg-purple-500 h-1 w-20 mx-auto mb-4"></div>
        </div>
        <div className="bg-purple-800 text-white p-8 md:p-12 lg:p-16 rounded-md relative z-10">
          <div className="text-md lg:text-md leading-relaxed mb-6">
            Hello, I'm Santosh, a passionate BCA student on the journey to
            becoming a frontend web developer. Proficient in React JS,
            Javascript, Tailwind, and CSS, I craft user-friendly websites that
            leave a lasting impression.
          </div>
          <div className="text-md lg:text-md leading-relaxed mb-6 italic text-gray-300 w-4/5 mx-auto">
            Currently immersed in my BCA studies, I seamlessly blend my academic
            knowledge with a love for learning new things rapidly.
          </div>
          <div className="text-md lg:text-md leading-relaxed mb-6">
            Bringing to the table a unique blend of frontend development
            expertise, creative design skills, and a hunger for continuous
            learning, I thrive on transforming ideas into digital reality.
          </div>
          <div className="text-md lg:text-md leading-relaxed mb-6">
            With a track record as a freelance web developer, I've successfully
            collaborated with clients, achieving milestones that showcase my
            dedication to delivering exceptional results.
          </div>
          <div className="text-md lg:text-md leading-relaxed mb-6">
            My current goals include expanding my skill set, embracing new
            challenges, and fostering collaborations that push boundaries in the
            digital realm—excited about the prospect of working together and
            creating something extraordinary.
          </div>
          <div className="text-md lg:text-md leading-relaxed mb-6">
            Feel free to contact me at{' '}
            <a
              href="mailto:santoshsub.33@gmail.com"
              className="text-purple-300 underline"
            >
              santoshsub.33@gmail.com
            </a>
            . Let's connect and explore the possibilities of innovation and
            growth!
          </div>
        </div>
 
      </div>
      
    </div>

  );
};

export default About;
