// App.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Components/Sidebar';
import Hero from './Components/Hero';
import './App.css';
import { CiMenuBurger } from "react-icons/ci";

const socialLinks = [
  { link: 'https://twitter.com/example', a: 'Twitter' },
  { link: 'https://github.com/example', a: 'GitHub' },
  { link: 'https://github.com/example', a: 'Instagram' },
  { link: 'https://github.com/example', a: 'LinkedIn' },
  { link: 'https://github.com/example', a: 'portfolio' },
  // Add more social links as needed
];

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex">
      <div className={`fixed inset-0 bg-black opacity-10 ${isSidebarOpen || !isMobile ? 'block' : 'hidden'}`} onClick={() => setSidebarOpen(false)}></div>
      <Sidebar socialLinks={socialLinks} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1">
        {isMobile && (
          <button
            className="md:hidden text-white fixed top-14 left-4 z-50 p-2"
            onClick={toggleSidebar}
          >
            <CiMenuBurger />
          </button>
        )}
        <Hero />
      </div>
    </div>
  );
};

export default App;
