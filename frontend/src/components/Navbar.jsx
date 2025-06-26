import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-4 px-4 sm:px-8 bg-white shadow-md sticky top-0 z-50 font-medium">
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          className="w-24 sm:w-32 hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-10 text-sm text-gray-700 font-semibold">
        {["/", "/collection", "/about", "/contact"].map((path, i) => (
          <NavLink
            key={i}
            to={path}
            className="flex flex-col items-center gap-1 hover:text-black"
          >
            <p>{["HOME", "COLLECTION", "ABOUT", "CONTACT"][i]}</p>
            <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden group-hover:block" />
          </NavLink>
        ))}
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-4 sm:gap-6">
        <NavLink to='/collection'>
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 sm:w-6 cursor-pointer hover:scale-110 transition-transform"
        />
        </NavLink>

        {/* Profile Dropdown */}
        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            className="w-5 sm:w-6 cursor-pointer hover:scale-110 transition-transform"
            src={assets.profile_icon}
          />
          {token && (
            <div className="group-hover:block hidden absolute right-0 pt-3 z-10">
              <div className="flex flex-col gap-2 w-36 py-3 px-4 bg-white border rounded shadow text-gray-700">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={() => navigate("/orders")}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            className="w-5 sm:w-6 hover:scale-110 transition-transform"
          />
          <p className="absolute -right-2 -bottom-2 w-4 h-4 flex items-center justify-center text-white bg-black rounded-full text-[10px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Hamburger Menu */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 sm:w-6 cursor-pointer md:hidden hover:scale-110 transition-transform"
        />
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-40 transition-all duration-300 ease-in-out ${
          visible ? "w-64" : "w-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col text-gray-700 font-semibold h-full">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-100"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} />
            <p>Back</p>
          </div>
          {["/", "/collection", "/about", "/contact"].map((path, i) => (
            <NavLink
              key={i}
              onClick={() => setVisible(false)}
              className="py-3 px-6 border-b hover:bg-gray-100"
              to={path}
            >
              {["HOME", "COLLECTION", "ABOUT", "CONTACT"][i]}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
