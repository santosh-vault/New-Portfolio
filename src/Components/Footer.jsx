// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white py-4 mt-10"
      style={{ backgroundColor: "#0b0b0b" }}
    >
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Santosh. All rights reserved.
        </p>
        <p className="text-sm">
          Designed by{" "}
          <a href="#" className="underline">
            Santosh
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
