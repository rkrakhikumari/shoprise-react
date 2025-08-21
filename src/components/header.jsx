import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white font-inter text-[#333]">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#D3D3D3]" />
          <span className="text-lg font-semibold">ShopRise</span>
        </div>

        {/* Center: Main Nav */}
        <nav className="hidden md:flex gap-8 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#FF7F50] font-medium"
                : "text-gray-700 hover:text-black font-medium"
            }
          >
            All listing
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "text-[#FF7F50] font-medium"
                : "text-gray-700 hover:text-black font-medium"
            }
          >
            About us
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive
                ? "text-[#FF7F50] font-medium"
                : "text-gray-700 hover:text-black"
            }
          >
            FAQ
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-[#FF7F50] font-medium"
                : "text-gray-700 hover:text-black"
            }
          >
            Blog
          </NavLink>
        </nav>

        {/* Right: Sign In */}
        <button
          onClick={() => navigate("/signin")}
          className="bg-[#1F3A93] hover:bg-[#15307A] text-white px-6 py-2 rounded-full text-sm"
        >
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
