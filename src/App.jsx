// App.js
import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Hero from './Components/Hero';
import './App.css';

const socialLinks = [
  { link: 'https://twitter.com/example', a: 'Twitter' },
  { link: 'https://github.com/example', a: 'GitHub' },
  { link: 'https://github.com/example', a: 'Instagram' },
  { link: 'https://github.com/example', a: 'LinkedIn' },
  { link: 'https://github.com/example', a: 'portfolio' },
  // Add more social links as needed
];

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Sidebar is initially open on big screens

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex">
      <div className={`fixed inset-0 bg-black opacity-10 ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={() => setSidebarOpen(false)}></div>
      <Sidebar socialLinks={socialLinks} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1">
        <button
          className="md:hidden fixed top-4 left-4 z-50 p-2"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? 'Close' : 'Open'} Menu
        </button>
        <Hero />
      </div>
    </div>
  );
};

export default App;
