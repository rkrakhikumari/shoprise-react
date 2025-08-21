import React from "react";
import registerImg from "../assets/register.png";
import userImg from "../assets/user.png";
import googleImg from "../assets/google.png";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Left Section */}
      <div className="flex flex-col justify-between items-center w-full md:w-[30%] px-4 sm:px-6 md:px-8 py-6 bg-white relative">
        {/* Logo */}
        <div className="flex items-center gap-2 absolute top-4 left-4">
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <span className="font-semibold text-base">ShopRise</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center w-full mt-20">
          {/* Icon */}
          <img src={userImg} alt="User" className="w-5 mb-2" />

          {/* Welcome Text */}
          <h2 className="text-xl font-semibold text-[#333333] mb-1">Welcome back</h2>
          <p className="text-xs text-gray-500 mb-3">
            You have account?{" "}
            <Link to="/signin" className="text-orange-500 underline">
              Sign in here
            </Link>
          </p>

          {/* Google Sign In */}
          <button
            className="flex items-center justify-center gap-2 w-full max-w-[300px] border rounded-md py-1.5 text-sm"
            style={{ borderColor: "#D3D3D3", color: "#333333" }}
          >
            <img src={googleImg} alt="Google" className="w-4" />
            <span>Sign up with Google</span>
          </button>

          {/* OR Divider */}
          <div className="flex items-center w-full max-w-[300px] my-3">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-600 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Inputs */}
          {[
            { label: "First name", placeholder: "John" },
            { label: "Last name", placeholder: "DOE" },
            { label: "Email", placeholder: "johndoe@gmail.com" },
          ].map((field, idx) => (
            <div
              key={idx}
              className="w-full max-w-[300px] relative mb-3 text-xs text-[#333333]"
            >
              {field.label}
              <input
                type="text"
                placeholder={field.placeholder}
                className="placeholder-[#333333] w-full border rounded-md p-2 pr-8 mt-1 text-sm"
                style={{ borderColor: "#D3D3D3" }}
              />
            </div>
          ))}

          {/* Password Field */}
          <div className="w-full max-w-[300px] relative mb-2 text-xs text-[#333333]">
            Password
            <input
              type="password"
              placeholder="********"
              className="placeholder-[#333333] w-full border rounded-md p-2 pr-8 mt-1 text-sm"
              style={{ borderColor: "#D3D3D3" }}
            />
            <span className="absolute right-2 top-[30px] text-gray-400 cursor-pointer">
              <AiOutlineEyeInvisible className="text-[#333333] w-4 h-4" />
            </span>
          </div>

          {/* Indication */}
          <p className="w-full max-w-[300px] text-[10px] text-[#1F3A93] mb-3">
            Indication
          </p>

          {/* Register Button */}
          <button
            className="w-full max-w-[300px] bg-[#1F3A93] hover:bg-[#15307A] text-white py-2 text-sm rounded-full"
            onClick={() => navigate("/john-doe")}
          >
            Register
          </button>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="hidden md:block w-full md:w-[70%] h-full">
        <img
          src={registerImg}
          alt="Register"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default RegisterPage;
