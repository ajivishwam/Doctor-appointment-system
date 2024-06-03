import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white">Home</Link></li>
        <li><Link to="/doctors" className="text-white">Doctors</Link></li>
        <li><Link to="/appointments" className="text-white">Appointments</Link></li>
        <li><Link to="/login" className="text-white">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
