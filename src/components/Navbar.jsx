import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 text-white px-6 py-4 shadow-lg fixed top-0 w-full z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold tracking-wider">Rajesh Bhujel</h1>
        <ul className="hidden md:flex space-x-8 text-base font-medium">
          <li><a href="#home" className="hover:text-yellow-300">Home</a></li>
          <li><a href="#info" className="hover:text-yellow-300">Info</a></li>
          <li><a href="#projects" className="hover:text-yellow-300">Projects</a></li>
          <li><a href="#skills" className="hover:text-yellow-300">Skills</a></li>
          <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
