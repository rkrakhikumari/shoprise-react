import React, { useState } from "react";
import { Mail, Bell } from "lucide-react";
import profileImg from "../assets/Profil.png";
import { useNavigate, NavLink } from "react-router-dom";
import ChatDrawer from "./ChatDrawer";
import NotificationDrawer from "./Notifications";

const SigninHeader = () => {
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="w-full bg-white font-inter text-[#333]">
      {/* Top Row */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Left: Logo */}
        <button
          className="flex items-center gap-2 cursor-pointer focus:outline-none"
          onClick={() => navigate("/dashboard")}
          aria-label="Go to Dashboard"
        >
          <div className="w-9 h-9 rounded-full bg-[#D3D3D3]" />
          <span className="text-lg font-semibold hidden sm:inline-block">
            ShopRise
          </span>
        </button>

        {/* Center: Main Nav */}
        <nav className="hidden md:flex gap-6 text-sm flex-1 justify-center" aria-label="Main navigation">
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
          <button
            onClick={() => setShowChat(true)}
            className="cursor-pointer text-gray-700 hover:text-black focus:outline-none"
            aria-label="Open Chat"
          >
            <Mail className="w-5 h-5" />
          </button>
          {showChat && <ChatDrawer onClose={() => setShowChat(false)} />}

          <button
            onClick={() => setShowNotifications(true)}
            className="cursor-pointer text-gray-700 hover:text-black focus:outline-none"
            aria-label="Open Notifications"
          >
            <Bell className="w-5 h-5" />
          </button>
          {showNotifications && (
            <NotificationDrawer onClose={() => setShowNotifications(false)} />
          )}

          <span className="text-sm font-medium text-[#333] hidden sm:inline-block truncate max-w-[100px] md:max-w-[150px]">
            John DOE
          </span>
          <img
            src={profileImg}
            alt="User profile"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default SigninHeader;
