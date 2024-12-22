"use client";
import React, { useState } from "react";
import Image from "next/image";
import login from "../assests/login.jpg";
import logo from "../assests/logo.png";
import { IoMdMail } from "react-icons/io";


const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    otp: ["", "", "", "", "", ""],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("otp")) {
      const index = Number(name.split("-")[1]);
      const updatedOtp = [...formData.otp];
      updatedOtp[index] = value.slice(-1);
      setFormData({ ...formData, otp: updatedOtp });

      // Automatically move focus to the next input
      if (value && e.target.nextSibling) {
        e.target.nextSibling.focus();
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log("Signup Data:", formData);
      // Add signup API integration here
    } else {
      console.log("Login Data:", formData);
      console.log("OTP:", formData.otp.join("")); // Combine OTP digits
      // Add login API integration here
    }
  };

  return (
    <div className="login-gradient  px-4">
      <div className="grid md:grid-cols-2 gap-4 bg-login-gradient shadow-lg rounded-lg overflow-hidden w-full">
        <div className="hidden md:block">
          <Image src={login} className="object-cover h-full" alt="login-image" />
        </div>

        <div className="flex flex-col justify-start items-center px-8 py-12 space-y-6">
          <Image
            src={logo}
            className="ring-2 ring-white rounded p-2 w-16 h-16"
            alt="logo"
          />
          <h1 className="text-white font-poppins font-bold text-3xl md:text-4xl">
            XYZ Company
          </h1>
          <h4 className="text-white font-poppins font-medium text-md">
            {isSignUp ? "Create an Account" : "Welcome Back!"}
          </h4>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm space-y-4 ring-2 ring-gray-500 rounded-xl shadow-lg p-4 bg-white"
          >
            {isSignUp ? (
              <>
                <div>
                  <label
                    htmlFor="username"
                    className="block text-gray-700 font-medium"
                  >
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block flex text-gray-700 font-medium">
                    Email <IoMdMail className=""/>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-medium"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-gray-700 font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring focus:ring-blue-500"
                  />
                </div>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-medium"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-gray-100 focus:outline-none focus:ring focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">OTP</label>
                  <div className="flex justify-between space-x-2">
                    {formData.otp.map((digit, index) => (
                      <input
                        key={index}
                        type="text"
                        name={`otp-${index}`}
                        placeholder="9"
                        value={digit}
                        onChange={handleChange}
                        maxLength="1"
                        className="w-12 h-12 text-center text-lg bg-gray-100 rounded focus:outline-none focus:ring focus:ring-blue-500"
                      />
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>

          {/* Toggle Form */}
          <p className="text-white font-poppins text-sm">
            {isSignUp
              ? "Already have an account?"
              : "Don’t have an account yet?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-400 hover:underline"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
