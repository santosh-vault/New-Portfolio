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
      className="bg-purple-800 fixed top-1 sm:top-2 left-0 w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 2xl:w-4/12 p-1 transition-all duration-300 hover:bg-purple-600 md:mt-10 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 overflow-hidden rounded-sm z-20" 
    >
      <div className="flex items-center justify-between px-2 sm:px-4">
        <Link to="/">
        <div className="text-white text-base sm:text-lg font-light hover:text-gray-300">
          .SANTOSH
        </div>
        </Link>
        <ul className="flex space-x-2 sm:space-x-4">
          <li>
            <Link to="/about" className="text-white font-light hover:text-gray-300 text-xs sm:text-sm">
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </animated.nav>
  );
};

export default Navbar;
