// RightContainer.jsx
import React, { useState } from "react";
import Cards from "./Cards";
import doctor from "../assets/doctor.jpg";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const UserInfoRight = ({ activeTab, onTabChange }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
    bloodGroup: "A+",
    birthDate: "",
    gender: "male",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your update profile logic here
    console.log("Form Data:", formData);
    // Reset the form or navigate to another page after submission
  };

  return (
    <div className="flex-1 p-4 bg-white">
      {/* Toggle buttons */}
      <div className="mb-6 mt-6 lg:mt-0 flex flex-col lg:block gap-y-4 items-center lg:gap-y-0 text-center lg:text-left">
        <button
          className={`px-4 py-2 mr-2 rounded-lg ${
            activeTab === "appointments"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => onTabChange("appointments")}
        >
          My Appointments
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "profile" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => onTabChange("profile")}
        >
          My Profile
        </button>
      </div>

      {/* Content based on the active tab */}
      {activeTab === "appointments" && (
        <>
          <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="max-w-sm mx-auto overflow-hidden rounded-md shadow-lg">
              <div className="flex justify-center items-center">
                <img
                  src={doctor}
                  alt={`doctor img`}
                  className="w-full h-60 md:w-72 md:h-auto rounded-md mb-4"
                />
              </div>

              <div className="px-6">
                <div className="font-bold text-xl mb-2">
                  Dr. Subhasankhar kumar
                </div>
              </div>

              <div className="flex justify-between px-6 py-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Surgery Expert
                </span>
                <p className="text-gray-700 text-base inline-block">
                  <FaStar className="text-yellow-400 mb-1 mr-1 inline-block" />
                  {2}
                  <p className="text-gray-500 ml-2 text-xs mt-1 inline-block">
                    {`(2)`}
                  </p>
                </p>
              </div>

              <div className="flex gap-4 my-3">
                <button className="flex-1 w-full py-2 ml-4 px-6 bg-red-500 text-white rounded-md">
                  Cancel
                </button>
                <button className="flex-1 w-full py-2 mr-4 px-6 bg-blue-600 text-white rounded-md">
                  Reschedule
                </button>
              </div>
            </div>
            <div className="max-w-sm mx-auto overflow-hidden rounded-md shadow-lg">
              <div className="flex justify-center items-center">
                <img
                  src={doctor}
                  alt={`doctor img`}
                  className="w-full h-60 md:w-72 md:h-auto rounded-md mb-4"
                />
              </div>

              <div className="px-6">
                <div className="font-bold text-xl mb-2">
                  Dr. Subhasankhar kumar
                </div>
              </div>

              <div className="flex justify-between px-6 py-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Surgery Expert
                </span>
                <p className="text-gray-700 text-base inline-block">
                  <FaStar className="text-yellow-400 mb-1 mr-1 inline-block" />
                  {2}
                  <p className="text-gray-500 ml-2 text-xs mt-1 inline-block">
                    {`(2)`}
                  </p>
                </p>
              </div>

              <div className="flex gap-4 my-3">
                <button className="flex-1 w-full py-2 ml-4 px-6 bg-red-500 text-white rounded-md">
                  Cancel
                </button>
                <button className="flex-1 w-full py-2 mr-4 px-6 bg-blue-600 text-white rounded-md">
                  Reschedule
                </button>
              </div>
            </div>
            <div className="max-w-sm mx-auto overflow-hidden rounded-md shadow-lg">
              <div className="flex justify-center items-center">
                <img
                  src={doctor}
                  alt={`doctor img`}
                  className="w-full h-60 md:w-72 md:h-auto rounded-md mb-4"
                />
              </div>

              <div className="px-6">
                <div className="font-bold text-xl mb-2">
                  Dr. Subhasankhar kumar
                </div>
              </div>

              <div className="flex justify-between px-6 py-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Surgery Expert
                </span>
                <p className="text-gray-700 text-base inline-block">
                  <FaStar className="text-yellow-400 mb-1 mr-1 inline-block" />
                  {2}
                  <p className="text-gray-500 ml-2 text-xs mt-1 inline-block">
                    {`(2)`}
                  </p>
                </p>
              </div>

              <div className="flex gap-4 my-3">
                <button className="flex-1 w-full py-2 ml-4 px-6 bg-red-500 text-white rounded-md">
                  Cancel
                </button>
                <button className="flex-1 w-full py-2 mr-4 px-6 bg-blue-600 text-white rounded-md">
                  Reschedule
                </button>
              </div>
            </div>
            <div className="max-w-sm mx-auto overflow-hidden rounded-md shadow-lg">
              <div className="flex justify-center items-center">
                <img
                  src={doctor}
                  alt={`doctor img`}
                  className="w-full h-60 md:w-72 md:h-auto rounded-md mb-4"
                />
              </div>

              <div className="px-6">
                <div className="font-bold text-xl mb-2">
                  Dr. Subhasankhar kumar
                </div>
              </div>

              <div className="flex justify-between px-6 py-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Surgery Expert
                </span>
                <p className="text-gray-700 text-base inline-block">
                  <FaStar className="text-yellow-400 mb-1 mr-1 inline-block" />
                  {2}
                  <p className="text-gray-500 ml-2 text-xs mt-1 inline-block">
                    {`(2)`}
                  </p>
                </p>
              </div>

              <div className="flex gap-4 my-3">
                <button className="flex-1 w-full py-2 ml-4 px-6 bg-red-500 text-white rounded-md">
                  Cancel
                </button>
                <button className="flex-1 w-full py-2 mr-4 px-6 bg-blue-600 text-white rounded-md">
                  Reschedule
                </button>
              </div>
            </div>
            <div className="max-w-sm mx-auto overflow-hidden rounded-md shadow-lg">
              <div className="flex justify-center items-center">
                <img
                  src={doctor}
                  alt={`doctor img`}
                  className="w-full h-60 md:w-72 md:h-auto rounded-md mb-4"
                />
              </div>

              <div className="px-6">
                <div className="font-bold text-xl mb-2">
                  Dr. Subhasankhar kumar
                </div>
              </div>

              <div className="flex justify-between px-6 py-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Surgery Expert
                </span>
                <p className="text-gray-700 text-base inline-block">
                  <FaStar className="text-yellow-400 mb-1 mr-1 inline-block" />
                  {2}
                  <p className="text-gray-500 ml-2 text-xs mt-1 inline-block">
                    {`(2)`}
                  </p>
                </p>
              </div>

              <div className="flex gap-4 my-3">
                <button className="flex-1 w-full py-2 ml-4 px-6 bg-red-500 text-white rounded-md">
                  Cancel
                </button>
                <button className="flex-1 w-full py-2 mr-4 px-6 bg-blue-600 text-white rounded-md">
                  Reschedule
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === "profile" && (
        <div>
          <form
            onSubmit={handleSubmit}
            className="w-full lg:max-w-4xl mx-auto bg-white p-6 rounded-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>

            {/* Name */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main Street, City, Country"
                className="w-full px-3 py-2 border rounded-md resize-none"
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="123-456-7890"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            {/* Blood Group */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="bloodGroup"
              >
                Blood Group
              </label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                {/* Add more blood group options as needed */}
              </select>
            </div>

            {/* Birth Date */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="birthDate"
              >
                Birth Date
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            {/* Gender */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
                {/* Add more gender options as needed */}
              </select>
            </div>

            {/* Image Upload */}
            {/* Image Preview */}

            {/* Image Upload */}
            <div className="mb-4 flex flex-col">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Profile Image
              </label>
              <div className="flex items-center gap-x-2">
                {formData.image && (
                  <div className="hidden sm:block">
                    <img
                      src={URL.createObjectURL(formData.image)}
                      alt="Selected Image"
                      className="w-12 h-12 mr-2 rounded-full"
                    />
                  </div>
                )}
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full mb-2"
                />
              </div>
            </div>

            {/* Update Profile Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserInfoRight;
