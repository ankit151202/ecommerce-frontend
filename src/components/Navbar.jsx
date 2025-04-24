import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-700">🚗 VehicleX</h1>
      <div className="space-x-4 text-gray-700">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/profile" className="hover:text-blue-500">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
