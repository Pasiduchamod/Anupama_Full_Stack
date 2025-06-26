import React from "react";
import { assets } from "../assets/assets";
import { Navigate, NavLink } from "react-router-dom";

const Footer = () => {
  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Meie+Script&family=Outfit:wght@100..900&family=Prata&display=swap');
  </style>;
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-1 w-42" />
          <p className="w-full ml-9 md:w-2/3 text-gray-600 dancing-script text-xl">
            Wear your story.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About Us</NavLink></li>
            <li><NavLink to='/contact'>Delivary Details</NavLink></li>
            <li><NavLink to='/policy'>Privacy policy</NavLink></li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+94-727-226-991</li>
            <li>admin@email.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ Anupama.com - ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  );
};

export default Footer;
