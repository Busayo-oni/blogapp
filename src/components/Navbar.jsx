import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">
          Blog App
        </Link>
        <nav>
          <Link to="/" className="mr-16 hover:text-gray-300">
            Home
          </Link>

          <Link to="/add-blog" className=" mr-16 hover:text-gray-300">
             Add Blog
          </Link>

          <Link to="/about" className=" mr-16 hover:text-gray-300">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;