import React, { useState } from "react";
import registerImg from "../assets/register.png";
import userImg from "../assets/user.png";
import googleImg from "../assets/google.png";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Left Section */}
      <div className="flex flex-col justify-between items-center w-full md:w-[30%] px-4 sm:px-6 md:px-8 py-6 bg-white relative">
        {/* Logo */}
        <div className="flex items-center gap-2 absolute top-4 left-4">
          <div className="w-8 h-8 rounded-full bg-gray-300" aria-hidden="true"></div>
          <span className="font-semibold text-base">ShopRise</span>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center w-full mt-20">
          {/* Icon */}
          <img src={userImg} alt="User icon" className="w-5 mb-2" />

          {/* Welcome Text */}
          <h2 className="text-xl font-semibold text-[#333333] mb-1">Welcome back</h2>
          <p className="text-xs text-gray-500 mb-3">
            Already have an account?{" "}
            <Link to="/signin" className="text-orange-500 underline">
              Sign in here
            </Link>
          </p>

          {/* Google Sign Up */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-full max-w-[300px] border rounded-md py-1.5 text-sm cursor-pointer"
            style={{ borderColor: "#D3D3D3", color: "#333333" }}
            aria-label="Sign up with Google"
            onClick={() => alert("Google SignUp")} // Placeholder
          >
            <img src={googleImg} alt="Google logo" className="w-4" />
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
            { name: "firstName", label: "First name", placeholder: "John" },
            { name: "lastName", label: "Last name", placeholder: "DOE" },
            { name: "email", label: "Email", placeholder: "johndoe@gmail.com", type: "email", autoComplete: "email" },
          ].map((field) => (
            <div
              key={field.name}
              className="w-full max-w-[300px] relative mb-3 text-xs text-[#333333]"
            >
              <label htmlFor={field.name} className="block mb-1">
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type || "text"}
                placeholder={field.placeholder}
                className="placeholder-[#333333] w-full border rounded-md p-2 pr-8 mt-1 text-sm"
                style={{ borderColor: "#D3D3D3" }}
                autoComplete={field.autoComplete}
                value={form[field.name]}
                onChange={(e) =>
                  setForm({ ...form, [field.name]: e.target.value })
                }
              />
            </div>
          ))}

          {/* Password Field */}
          <div className="w-full max-w-[300px] relative mb-2 text-xs text-[#333333]">
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              id="password"
              name="password"
              type={visible ? "text" : "password"}
              placeholder="Enter the password"
              className="placeholder-gray w-full border rounded-md p-2 pr-8 mt-1 text-sm"
              style={{ borderColor: "#D3D3D3" }}
              autoComplete="new-password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button
              type="button"
              aria-label={visible ? "Hide password" : "Show password"}
              className="absolute right-2 top-[38px] text-gray-400 cursor-pointer"
              onClick={() => setVisible(!visible)}
            >
              {visible ? (
                <AiOutlineEyeInvisible className="text-[#333333] w-5 h-5" />
              ) : (
                <AiOutlineEye className="text-[#333333] w-5 h-5" />
              )}
            </button>
          </div>

          {/* Indication */}
          <p className="w-full max-w-[300px] text-[10px] text-[#1F3A93] mb-3">
            Indication
          </p>

          {/* Register Button */}
          <button
            type="button"
            className="w-full max-w-[300px] bg-[#1F3A93] hover:bg-[#15307A] text-white py-2 text-sm rounded-full cursor-pointer"
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
          alt="Registration visual"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
