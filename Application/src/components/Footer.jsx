import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-bold">
            Blog App
          </Link>
        </div>

       
        <nav className="flex space-x-4 mb-4 md:mb-0">
          <Link
            to="/"
            className="hover:underline hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:underline hover:text-gray-400"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:underline hover:text-gray-400"
          >
            Contact
          </Link>
        </nav>

        
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Blog App. All rights reserved. 
        </div>
      </div>
    </footer>
  );
};

export default Footer;