import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const heroImages = [assets.hero_img1, assets.hero_img2, assets.hero_img3]; // Add more images
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col mt-5 sm:flex-row border border-gray-300 rounded-xl overflow-hidden shadow-lg">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center px-12 py-20 bg-gradient-to-r from-gray-300 via-white-600 to-white-500 text-white ">
        <div className="text-gray-800">
          <div className="flex items-center space-x-4 mb-3">
            <div className="w-12 h-0.5 bg-gray-800 rounded-full"></div>
            <p className="uppercase font-semibold tracking-widest text-xs sm:text-sm">
              Discover Top Picks And
            </p>
          </div>
          <h1 className="prata-regular text-5xl sm:text-6xl font-extrabold leading-snug mb-8">
            New Arrivals
          </h1>
          <div className="flex items-center space-x-6">
            <NavLink to="/collection">
              <button className="bg-black text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-gray-900 transition">
                Shop Now!
              </button>
            </NavLink>
            <div className="w-12 h-1 bg-black rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Hero Right Side with slanted shape */}
      <div className="w-full sm:w-1/2 relative overflow-hidden">
        <img
          key={currentIndex} // important to re-render and trigger animation
          src={heroImages[currentIndex]}
          alt="Hero"
          className="w-full h-full object-cover fade-in"
        />
      </div>

      <style>
        {`
        .clip-path-slant {
          clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
      `}
      </style>
    </div>
  );
};

export default Hero;
