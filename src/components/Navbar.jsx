// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // Import the CSS file for navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
     <li className="nav-item">
          <Link to="/home">Home</Link>
        </li>
      <ul className="nav-links">
      <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
  <Link to="/test">Test</Link>
</li>

        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
