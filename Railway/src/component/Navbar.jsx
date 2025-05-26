import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTrain, FaBus, FaHotel, FaHeadset, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-md flex justify-between items-center flex-wrap md:flex-nowrap">
      {/* Logo */}
      <div className="flex items-center text-white text-xl font-bold">
        {/* 🚆RailRover  */}
        ミ★ RailRover ★彡
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-white focus:outline-none text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`$ {isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row text-white w-full md:w-auto mt-4 md:mt-0 items-center space-y-4 md:space-y-0 md:space-x-6`}>
        <NavLink to="/TrainBookingApp" className="hover:text-gray-300 font-bold flex items-center">
          <FaTrain className="mr-2 text-yellow-400" /> Train
        </NavLink>
        <NavLink to="/busService" className="hover:text-gray-300 font-bold flex items-center">
          <FaBus className="mr-2 text-red-400" /> Bus
        </NavLink>
        <NavLink to="/SearchBar" className="hover:text-gray-300 font-bold flex items-center">
          <FaHotel className="mr-2 text-green-400" /> Hotels
        </NavLink>
        <NavLink to="/contactUs" className="hover:text-gray-300 font-bold flex items-center">
          <FaHeadset className="mr-2 text-purple-400" /> Customer Service
        </NavLink>
      </div>

      {/* Login Button */}
      <NavLink to="/login" className="mt-4 md:mt-0">
        <button className="text-white border-white px-4 py-2 border rounded hover:bg-white hover:text-blue-600">
          Login
        </button>
      </NavLink>
    </nav>
  );
};

export default Navbar;
