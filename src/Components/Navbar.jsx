// Navbar.js
import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

const Navbar = () => {
  const fadeIn = useSpring({
    opacity: 0.75,
    backdropFilter: "blur(40px)",
    from: { opacity: 0, backdropFilter: "blur(0px)" },
    config: { duration: 500 },
  });

  return (
    <animated.nav
      style={{ ...fadeIn, boxShadow: "0 0 10px rgba(128, 0, 128, 0.8)" }}
      className="bg-purple-800 w-full p-2 transition-all duration-300 hover:bg-purple-600 md:fixed md:top-2 md:left-0 md:mt-10 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-11/12 lg:w-1/3 xl:w-1/4 p-2 overflow-hidden rounded-lg z-10"
    >
      <div className="flex items-center justify-between px-3 md:px-4">
        <Link to="/">
          <div className="text-white text-base md:text-lg font-light hover:text-gray-300 transition-colors">
            .SANTOSH
          </div>
        </Link>
        <ul className="flex space-x-3 md:space-x-4">
          <li>
            <Link
              to="/about"
              className="text-white font-light hover:text-gray-300 text-xs md:text-sm transition-colors"
            >
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </animated.nav>
  );
};

export default Navbar;
