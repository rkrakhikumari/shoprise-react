import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import bellImg from "../assets/bell.png";
import arrowImg from "../assets/tilt_arrow.png";
import { CiBag1 } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { TbBuildingStore } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiLoginBoxLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const collapseSidebar = () => setCollapsed(true);
  const expandSidebar = () => setCollapsed(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuItems = [
    { to: "/dashboard", icon: MdOutlineDashboard, label: "Dashboard" },
    { to: "/purchasing", icon: CiBag1, label: "Purchasing" },
    { to: "/sales", icon: TbBuildingStore, label: "Sales" },
    { to: "/favourites", icon: FaRegHeart, label: "Favourites" },
    { to: "/chat", icon: AiOutlineMail, label: "Chat" },
    { to: "/settings", icon: IoSettingsOutline, label: "Setting" },
  ];

  const footerLinks = [
    { to: "/help", icon: IoIosHelpCircleOutline, label: "Help" },
    { to: "/logout", icon: RiLoginBoxLine, label: "Logout" },
  ];

  const navLinkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer ${
      isActive ? "bg-white text-[#FF7F50]" : "hover:bg-white"
    }`;

  return (
    <div className="flex flex-col md:flex-row font-inter text-[#333] min-h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-[#F5F5F5] border-r border-gray-200 transition-all duration-300 ease-in-out
        ${collapsed ? "w-[80px]" : "w-[240px]"}
        fixed top-0 left-0 z-50 h-screen md:static md:h-auto
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        p-5 flex flex-col`}
        aria-label="Sidebar navigation"
      >
        {/* Mobile close button */}
        <div className="flex justify-between items-center md:hidden mb-4">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={toggleMobileMenu} aria-label="Close menu" type="button">
            <RxCross2 className="w-5 h-5" />
          </button>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className={`flex items-center gap-3 mb-6 ${collapsed ? "justify-center" : ""}`}
          aria-label="ShopRise Home"
        >
          <div className="w-8 h-8 rounded-full bg-[#D3D3D3]" aria-hidden="true" />
          {!collapsed && <span className="text-lg font-semibold">ShopRise</span>}
        </Link>

        <nav className="flex flex-col flex-grow overflow-hidden" role="navigation" aria-label="Primary sidebar navigation">
          {/* Top menu */}
          <div
            className={`flex flex-col gap-4 text-sm font-medium ${
              collapsed ? "items-center" : ""
            }`}
            style={{ flexGrow: 1 }}
          >
            {menuItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={navLinkClasses}
                aria-label={label}
                tabIndex={0}
              >
                <Icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                {!collapsed && label}
              </NavLink>
            ))}

            <div className="flex flex-col gap-4 text-sm font-medium mt-6 md:hidden">
              {footerLinks.map(({ to, icon: Icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={navLinkClasses}
                  aria-label={label}
                  tabIndex={0}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  {!collapsed && label}
                </NavLink>
              ))}
            </div>
          </div>

          <div
            className={`hidden md:flex flex-col gap-4 text-sm font-medium mt-auto ${
              collapsed ? "items-center" : ""
            }`}
            style={{ flexShrink: 0 }}
          >
            {footerLinks.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={navLinkClasses}
                aria-label={label}
                tabIndex={0}
              >
                <Icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                {!collapsed && label}
              </NavLink>
            ))}
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-white min-h-screen px-2 sm:px-4 pt-2 pb-6" role="main">
        {/* Header */}
        <header className="flex items-center justify-between mb-4 px-2 sm:px-4">
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} aria-label="Open menu" type="button" className="cursor-pointer">
              <FiMenu className="w-6 h-6 text-[#1F3A93]" aria-hidden="true" />
            </button>
          </div>

          <NavLink
            to="/"
            className="text-sm text-[#333] flex items-center gap-3 ml-auto cursor-pointer"
            aria-label="Go to marketplace"
          >
            <img src={bellImg} alt="Notification bell icon" />
            <span className="hidden sm:inline">Go to marketplace</span>
            <img src={arrowImg} alt="Arrow icon" />
          </NavLink>
        </header>

        {/* Children */}
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, {
                collapseSidebar,
                expandSidebar,
              })
            : child
        )}
      </main>
    </div>
  );
};

export default DashboardLayout;
