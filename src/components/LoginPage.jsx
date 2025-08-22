import React, { useState } from "react";
import registerImg from "../assets/register.png";
import userImg from "../assets/user.png";
import googleImg from "../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Eye } from "lucide-react";

const LoginPage = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Example sign in logic could be added here
    navigate("/john-doe");
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Left Section */}
      <div className="flex flex-col justify-between items-center w-full md:w-[30%] px-4 sm:px-6 md:px-8 py-6 bg-white relative">
        {/* Logo */}
        <div className="flex items-center gap-2 absolute top-4 left-4">
          <div
            className="w-8 h-8 rounded-full bg-gray-300"
            aria-hidden="true"
            role="img"
            aria-label="ShopRise logo placeholder"
          />
          <span className="font-semibold text-base">ShopRise</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center w-full mt-20">
          {/* Icon */}
          <img src={userImg} alt="User icon" className="w-5 mb-2" />

          {/* Welcome Text */}
          <h2 className="text-xl font-semibold text-[#333333] mb-1">
            Welcome back
          </h2>
          <p className="text-sm text-gray-500 mb-3 text-center">
            Don’t have account?{" "}
            <Link to="/register" className="text-orange-500 underline">
              Sign up here
            </Link>
          </p>

          {/* Google Sign In */}
          <button
            className="flex items-center justify-center gap-2 w-full max-w-[300px] border rounded-md py-1.5 text-sm cursor-pointer"
            style={{ borderColor: "#D3D3D3", color: "#333333" }}
            aria-label="Sign in with Google"
            type="button"
            onClick={() => alert("Google sign in clicked")}
          >
            <img src={googleImg} alt="Google logo" className="w-4" />
            <span>Sign in with Google</span>
          </button>

          {/* OR Divider */}
          <div className="flex items-center w-full max-w-[300px] my-3">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-600 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Email Input */}
          <div className="w-full max-w-[300px] relative mb-3 text-xs text-[#333333]">
            <label htmlFor="emailInput" className="block mb-1">
              Email
            </label>
            <input
              id="emailInput"
              type="email"
              placeholder="johndoe@gmail.com"
              className="placeholder-[#333333] w-full border rounded-md p-2 pr-8 mt-1 text-sm"
              style={{ borderColor: "#D3D3D3" }}
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          {/* Password Input */}
          <div className="w-full max-w-[300px] relative mb-2 text-xs text-[#333333]">
            <label htmlFor="passwordInput" className="block mb-1">
              Password
            </label>
            <input
              id="passwordInput"
              type={visible ? "text" : "password"}
              placeholder="Enter the password"
              className="placeholder-gray w-full border rounded-md p-2 pr-10 mt-1 text-sm"
              style={{ borderColor: "#D3D3D3" }}
              aria-label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setVisible(!visible)}
              className="absolute right-2 top-[38px] text-gray-400 cursor-pointer"
              aria-label={visible ? "Hide password" : "Show password"}
            >
              {visible ? (
                <AiOutlineEyeInvisible className="text-[#333333] w-4 h-4" />
              ) : (
                <Eye className="text-[#333333] w-4 h-4" />
              )}
            </button>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center w-full max-w-[300px] text-sm mb-3">
            <label className="flex items-center gap-2 text-[#333333]" htmlFor="rememberMe">
              <input
                id="rememberMe"
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              Remember me
            </label>
            <Link to="/change-password" className="underline text-[#1F3A93]">
              Forgot password
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            className="w-full max-w-[300px] bg-[#1F3A93] hover:bg-[#15307A] text-white py-2 text-sm rounded-full cursor-pointer"
            onClick={handleSignIn}
            aria-label="Sign in"
            type="button"
          >
            Sign in
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="hidden md:block w-full md:w-[70%] h-full">
        <img
          src={registerImg}
          alt="Login illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
