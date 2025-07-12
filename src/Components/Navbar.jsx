// Navbar.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

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
      className="bg-purple-800 fixed top-2 left-0 w-full p-1 transition-all duration-300 hover:bg-purple-600 md:mt-10 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-10/12 lg:w-1/4 p-1 overflow-hidden rounded-sm z-10" 
    >
      <div className="flex items-center justify-between px-4">
        <Link to="/">
        <div className="text-white text-lg font-light hover:text-gray-300">
          .SANTOSH
        </div>
        </Link>
        <ul className="flex space-x-4 md:space-x-4">

        
          <li>
            <Link to="/about" className="text-white font-light hover:text-gray-300 text-2sm">
              ABOUT
            </Link>
          </li>
          
        </ul>
      </div>
    </animated.nav>
  );
};

export default Navbar;
