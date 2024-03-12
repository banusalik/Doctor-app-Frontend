import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import register from "../assets/userRegister.jpg";
import { BiSolidHide } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [registrationError, setRegistrationError] = useState(null);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8081/patients/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful registration
        console.log("Patient registration successful");
      } else {
        // Handle registration failure
        const errorData = await response.json();
        console.error("Patient registration failed:", errorData);
        setRegistrationError("Patient registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during patient registration:", error);
      setRegistrationError(
        "An unexpected error occurred. Please try again later."
      );
    }
  };

  return (
    <Layout>
      <div className="min-h-[90vh] my-0 lg:my-20 flex items-center justify-center bg-gray-100">
        <div className="max-w-4xl w-full flex ">
          {/* Left Side (Image) */}
          <div className="hidden lg:block w-1/2">
            <img
              src={register}
              alt="Register image "
              className="w-full h-[100vh] object-cover rounded-l-md"
            />
          </div>

          {/* Right Side (Form) */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 p-8 bg-white shadow-md rounded-r-md mx-4 lg:mx-0">
            <div className="mb-8 text-center">
              <h1 className="text-3xl mb-4 font-bold text-gray-800">
                Create an Account{" "}
              </h1>
              <h3 className="text-1xl font-semibold">
                Create an account to enjoy all the services.{" "}
              </h3>
            </div>
            <form onSubmit={formSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="example@example.com"
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="mb-4">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="w-full p-3 border border-gray-300 rounded-md pr-10"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  {showPassword ? (
                    <BiSolidHide
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={handleTogglePasswordVisibility}
                    />
                  ) : (
                    <BiShowAlt
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onClick={handleTogglePasswordVisibility}
                    />
                  )}
                </div>
              </div>
              <button className="w-full py-3 text-md bg-btnColor mb-3 font-bold text-white rounded-md hover:bg-blue-600">
                Create an Account
              </button>
              <div className="text-md text-center mb-4">
                Already have an Account?
                <span className=" ml-2 text-darkBlue">
                  <Link to="/login">Sign In</Link>
                </span>
              </div>
              {registrationError && (
                <div className="text-md text-center text-red-500 mb-4">
                  {registrationError}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
