import React, { useState } from 'react';
import backArrow from '../assets/arrow.png';
import { Eye, EyeOff } from 'lucide-react';

const ChangePassword = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative">
      <button
        className="absolute top-6 left-6 cursor-pointer"
        aria-label="Go back"
        onClick={() => window.history.back()}
      >
        <img
          src={backArrow}
          alt="Back"
          className="w-6 h-6 hover:opacity-80"
        />
      </button>

      <div className="w-full max-w-md px-6">
        <h2 className="text-center text-2xl font-semibold text-[#333333]">
          Change your password
        </h2>
        <p className="text-center text-sm text-[#333333] mb-5 mt-1">
          Create a new password
        </p>

        <div className="mb-4 relative">
          <label
            htmlFor="new-password"
            className="block text-[14px] text-[#333333] mb-1 font-inter"
          >
            New password
          </label>
          <input
            id="new-password"
            type={showNewPassword ? 'text' : 'password'}
            className="placeholder-gray w-full border rounded-md p-2 pr-10 focus:outline-none border-[#D3D3D3]"
            placeholder="New password"
            autoComplete="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-2 top-[34px] text-gray-500"
            aria-label={showNewPassword ? 'Hide password' : 'Show password'}
          >
            {showNewPassword ? (
              <EyeOff className="w-4 h-4 text-[#333333]" />
            ) : (
              <Eye className="w-4 h-4 text-[#333333]" />
            )}
          </button>
        </div>

        <div className="mb-4 relative">
          <label
            htmlFor="confirm-password"
            className="block text-[14px] text-[#333333] mb-1 font-inter"
          >
            Confirm your password
          </label>
          <input
            id="confirm-password"
            type={showConfirmPassword ? 'text' : 'password'}
            className="placeholder-gray w-full border rounded-md p-2 pr-10 focus:outline-none border-[#D3D3D3]"
            placeholder="Confirm password"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-2 top-[34px] text-gray-500"
            aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
          >
            {showConfirmPassword ? (
              <EyeOff className="w-4 h-4 text-[#333333]" />
            ) : (
              <Eye className="w-4 h-4 text-[#333333]" />
            )}
          </button>
        </div>

        <div className="flex items-center mb-6 text-sm text-[#333333]">
          <input
            type="checkbox"
            id="remember"
            className="mr-2 cursor-pointer"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="remember" className="cursor-pointer">Remember me</label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#1F3A93] hover:bg-blue-800 text-white py-2 rounded-full cursor-pointer"
          aria-label="Submit new password"
        >
          Change password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
