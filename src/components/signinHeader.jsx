import React, { useState } from "react";
import { Mail, Bell } from "lucide-react";
import profileImg from "../assets/Profil.png";
import { useNavigate, NavLink } from "react-router-dom";
import ChatDrawer from "./ChatDrawer";
import NotificationDrawer from "./notifications";

const SigninHeader = () => {
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="w-full bg-white font-inter text-[#333]">
      {/* Top Row */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Left: Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
          <div className="w-9 h-9 rounded-full bg-[#D3D3D3]" />
          <span className="text-lg font-semibold hidden sm:inline-block">
            ShopRise
          </span>
        </div>

        {/* Center: Main Nav */}
        <nav className="hidden md:flex gap-6 text-sm flex-1 justify-center">
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

        {/* Right: Icons and User */}
        <div className="flex items-center gap-3 md:gap-4">
          <Mail
            className="w-5 h-5 text-gray-700 cursor-pointer"
            onClick={() => setShowChat(true)}
          />
          {showChat && <ChatDrawer onClose={() => setShowChat(false)} />}

          <Bell
            className="w-5 h-5 text-gray-700 cursor-pointer"
            onClick={() => setShowNotifications(true)}
          />
          {showNotifications && (
            <NotificationDrawer onClose={() => setShowNotifications(false)} />
          )}

          <span className="text-sm font-medium text-[#333] hidden sm:inline-block truncate max-w-[100px] md:max-w-[150px]">
            John DOE
          </span>
          <img
            src={profileImg}
            alt="User"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default SigninHeader;
