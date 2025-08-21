import React, { useState } from 'react';
import EyeImg from '../assets/eye.png'; 
import backArrow from '../assets/arrow.png'

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
        <button className="absolute top-6 left-6">
        <img
          src={backArrow}
          alt="Back"
          className="w-6 h-6 hover:opacity-80"
        />
      </button>
      <div className="w-full max-w-md px-6">
        {/* Title */}
        <h2 className="text-center text-2xl font-semibold text-[#333333]">
          Change your password
        </h2>
        <p className="text-center text-sm text-[#333333] mb-5 mt-1">
          Create a new password
        </p>

        {/* New Password */}
        <div className="mb-4 relative">
        <label className="block text-[14px] text-[#333333] mb-1 font-inter">
            New password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            className="placeholder-[#333333] w-full border rounded-md p-2 pr-10 focus:outline-none border-[#D3D3D3]"
            placeholder="********"
          />
          <span
            className="absolute right-3 top-9 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img src={EyeImg} alt="toggle visibility" className="w-4 h-4" />
          </span>
        </div>

        {/* Confirm Password */}
        <div className="mb-4 relative">
        <label className="block text-[14px] text-[#333333] mb-1 font-inter">
            Confirm your password
          </label>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            className="placeholder-[#333333] w-full border rounded-md p-2 pr-10 focus:outline-none border-[#D3D3D3]"
            placeholder="********"
          />
          <span
            className="absolute right-3 top-9 cursor-pointer"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <img src={EyeImg} alt="toggle visibility" className="w-4 h-4" />
          </span>
        </div>

        {/* Remember Me */}
        <div className="flex items-center mb-6 text-sm text-[#333333]">
          <input type="checkbox" className="mr-2 bg-[#D9D9D9]" />
          Remember me
        </div>

        {/* Button */}
        <button className="w-full bg-[#1F3A93] hover:bg-blue-800 text-white py-2 rounded-full">
          Change password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
