import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white font-inter text-[#333]" role="banner">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4">
        {/* Left: Logo */}
        <button
          type="button"
          onClick={() => navigate("/")}
          aria-label="Go to homepage"
          className="flex items-center gap-2 cursor-pointer bg-transparent border-none p-0"
        >
          <div
            className="w-9 h-9 rounded-full bg-[#D3D3D3]"
            aria-hidden="true"
          />
          <span className="text-lg font-semibold select-none">ShopRise</span>
        </button>

        {/* Center: Main Nav */}
        <nav className="hidden md:flex gap-8 text-sm" aria-label="Primary navigation">
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
          type="button"
          onClick={() => navigate("/signin")}
          className="bg-[#1F3A93] hover:bg-[#15307A] text-white px-6 py-2 rounded-full text-sm cursor-pointer"
          aria-label="Sign In"
        >
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
