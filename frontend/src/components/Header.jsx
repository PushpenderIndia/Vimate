import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 sticky top-0">
      <nav className="flex justify-between items-center">
        <div className="flex space-x-4">
          <ScrollLink 
            to="section1" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer"
          >
            Section 1
          </ScrollLink>
          <ScrollLink 
            to="section2" 
            smooth={true} 
            duration={500} 
            className="cursor-pointer"
          >
            Section 2
          </ScrollLink>
        </div>
        <Link 
          to="/dashboard" 
          className="bg-white text-blue-500 px-4 py-2 rounded"
        >
          Sign Up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
