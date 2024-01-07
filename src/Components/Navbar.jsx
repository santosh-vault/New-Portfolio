// Navbar.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const Navbar = () => {
  const fadeIn = useSpring({
    opacity: 0.75,
    backdropFilter: 'blur(40px)',
    from: { opacity: 0, backdropFilter: 'blur(0px)' },
    config: { duration: 500 },
  });

  return (
    <animated.nav
      style={{ ...fadeIn, boxShadow: '0 0 10px rgba(128, 0, 128, 0.8)' }}
      className="bg-purple-800 fixed mt-8 ml-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center w-1/4 p-1 overflow-hidden rounded-sm" // Adjust the width as needed
    >
      <div className="flex justify-center items-center">
        <div className="text-white text-xl font-light mr-3">.santosh</div>
        <ul className="flex items-center space-x-4">
        <span className="bg-gray-100 opacity-0.5 h-4 w-0.5 mr-2"></span>
          <li>
            <a href="#" className="text-white font-light hover:text-gray-300 text-2sm">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-light hover:text-gray-300 text-2sm">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="text-white font-light hover:text-gray-300 text-2sm">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </animated.nav>
  );
};

export default Navbar;
