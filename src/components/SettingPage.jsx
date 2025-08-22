import React, { useState } from "react";
import userImg from "../assets/setUser.png"; 
import profileImg from "../assets/usser.png"; 
import settingImg from "../assets/settingImg.png";
import profileBanner from "../assets/profileBanner.png"; 
import whatsapImg from "../assets/whatsapp.png"
import facebookImg from "../assets/fcebok.png"
import twitterImg from "../assets/twit.png"
import msngrImg from "../assets/msnger.png"
import mailImg from "../assets/mail.png"


const SettingContent = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  return (
    <div className="">
      <h1 className="text-blue-900 text-xl sm:text-2xl font-semibold mt-3 mb-4 px-4 sm:px-0">Setting</h1>

      <div className="relative rounded-md overflow-hidden w-full h-full">
        <img src={settingImg} alt="Background" className="w-full h-screen object-cover" />

        {/* Overlay Card */}
        <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-auto right-4 sm:right-auto sm:mx-auto bg-transparent rounded-lg p-4 sm:p-6 w-auto sm:w-80 max-w-sm mx-auto text-[#333333] border border-white">
          <div className="flex flex-col items-center gap-2 relative">
            {/* Profile Picture */}
            <div className="relative">
              <img
                src={userImg}
                alt="John Doe"
                className="w-16 sm:w-auto h-16 sm:h-auto object-contain"
              />
            </div>

            {/* Name and Email */}
            <h2 className="font-semibold text-base sm:text-lg text-center">John DOE</h2>
            <p className="text-xs text-[#333333] pb-3 text-center">johndoe@gmail.com</p>
          </div>

          <div className="border-[1px] border-white"></div>

          {/* Stats (inline format) */}
          <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-[#333333] space-y-2">
            <div className="flex justify-between">
              <p>current sales:</p>
              <p className="font-semibold text-[#1F3A93]">12</p>
            </div>
            <div className="flex justify-between">
              <p>current purchases:</p>
              <p className="font-semibold text-[#1F3A93]">04</p>
            </div>
          </div>

          {/* Note and rating */}
          <div className="mt-3 sm:mt-4 flex justify-between items-center text-[#333333]">
          <p className="text-xs sm:text-sm">Note:</p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF7F50]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.176 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.036 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
            ))}
            <span className="text-xs sm:text-sm text-[#333333]">(10)</span>
          </div>
        </div>

          {/* Buttons */}
          <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-3">
            <button
              className="px-3 py-2 sm:px-4 sm:py-2 rounded border border-blue-800 text-blue-800 text-xs sm:text-sm flex-1 sm:flex-none"
              onClick={() => setShowProfileModal(true)}
            >
              View profile
            </button>
            <button className="px-3 py-2 sm:px-4 sm:py-2 rounded bg-blue-800 text-white text-xs sm:text-sm flex-1 sm:flex-none">
              Share
            </button>
          </div>
        </div>
      </div>

      {/* --- MODAL --- */}
      {showProfileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/30 p-4">
  <div className="bg-white rounded-lg p-3 sm:p-4 w-full max-w-[350px] sm:max-w-[500px] shadow-lg relative max-h-[90vh] overflow-y-auto">
    <img
      src={profileBanner}
      alt="banner"
      className="rounded-t-lg w-full h-[150px] sm:h-[250px] object-cover"
    />

    {/* Profile Header Section */}
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 pt-4 sm:pt-5 text-[#333333]">
      <img
        src={profileImg}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white flex-shrink-0"
        alt="profile"
      />
      <div className="flex-1 text-center sm:text-left">
        <h2 className="font-semibold text-base sm:text-lg">John DOE</h2>
        <p className="text-sm sm:text-md">johndoe@gmail.com</p>
        <p className="text-xs sm:text-sm">Join Oct 2023</p>
      </div>
      <div className="text-center sm:text-right">
        <p className="text-gray-800 text-sm sm:text-md">Seller rating</p>
        <div className="flex items-center gap-1 justify-center sm:justify-end">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF7F50]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.176 0l-3.39 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.036 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
            </svg>
          ))}
          <span className="text-xs sm:text-sm text-gray-500">(10)</span>
        </div>
      </div>
    </div>

    {/* Profile Details */}
    <div className="mt-4 sm:mt-5">
      <h3 className="text-blue-800 font-semibold text-sm">Location</h3>
      <hr className="my-2" />
      <div className="text-xs sm:text-sm text-gray-700 space-y-2 sm:space-y-3 ml-4 sm:ml-10">
        <div className="flex flex-col sm:flex-row">
          <p className="sm:w-20">Location :</p>
          <p className="sm:ml-10">Los Angeles, CA</p>
        </div>
        <div className="flex flex-col sm:flex-row">
          <p className="sm:w-20">Zip Code :</p>
          <p className="sm:ml-16">.</p>
        </div>
        <div className="flex flex-col sm:flex-row">
          <p className="sm:w-20">Adress :</p>
          <p className="sm:ml-20">.</p>
        </div>
      </div>

      {/* Social Profile Section */}
      <h3 className="text-blue-800 font-semibold text-sm mt-4 sm:mt-5">Social Profile</h3>
      <div className="flex items-center gap-3 sm:gap-4 text-xl mt-3 justify-center sm:justify-start">
        <img src={whatsapImg} className="w-6 h-6 sm:w-auto sm:h-auto"/>
        <img src={facebookImg} className="w-6 h-6 sm:w-auto sm:h-auto"/>
        <img src={twitterImg} className="w-6 h-6 sm:w-auto sm:h-auto"/>
        <img src={msngrImg} className="w-6 h-6 sm:w-auto sm:h-auto"/>
        <img src={mailImg} className="w-6 h-6 sm:w-auto sm:h-auto"/>
      </div>
    </div>

    {/* Close Button */}
    <button
      onClick={() => setShowProfileModal(false)}
      className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl sm:text-2xl"
    >
      &times;
    </button>
  </div>
</div>

      )}
    </div>
  );
};

export default SettingContent;