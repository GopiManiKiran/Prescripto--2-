import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './path/to/your/logo.png'; // Update the path to your logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo and text container */}
      <div className="navbar-logo-container">
        <img src={logo} alt="DocEase Logo" className="navbar-logo" />
        <h2 className="navbar-text">DocEase</h2>
      </div>
      
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/doctorslist">Doctors List</Link>
        </li>
        <li>
          <Link to="/appointments">Appointments</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;