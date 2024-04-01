// HighlyRatedDoctor.js

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HighlyRatedDoctor = ({ doctor }) => {
  const { Doctor_ID, Doctor_Name, Speciality, Rating, Address, Image } = doctor;

  return (
    <div
      className="flex items-center bg-white p-4 rounded-md shadow-md mb-4"
      style={{ height: "200px" }}
    >
      {/* Doctor Avatar/Image */}
      <div className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full mr-4 overflow-hidden">
        {/* You can use an actual image or placeholder here */}
        {Image && (
          <img
            src={Image}
            alt={Doctor_Name}
            className="w-full h-full rounded-full object-cover"
          />
        )}
      </div>

      {/* Doctor Information */}
      <div className="flex-1">
        {/* Doctor ID */}
        <p className="text-gray-500 mb-2">ID: {Doctor_ID}</p>

        {/* Doctor Name */}
        <Link to={`/doctor-details/${Doctor_ID}`}>
          <h3 className="text-lg font-semibold cursor-pointer">
            {Doctor_Name}
          </h3>
        </Link>

        {/* Doctor Specialty */}
        <p className="text-gray-600 mb-2">{Speciality}</p>

        {/* Doctor Rating */}
        <div className="flex items-center mb-2">
          <svg
            key={3}
            className={`w-6 h-6 lg:w-6 lg:h-6 mr-1 cursor-pointer text-yellow-300 `}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <span className="text-blue-500 font-bold mt-1">{Rating}</span>
        </div>

        {/* Hospital */}
        <p className="text-gray-500">{Address}</p>
      </div>
    </div>
  );
};

// Prop Types
HighlyRatedDoctor.propTypes = {
  doctor: PropTypes.shape({
    Doctor_ID: PropTypes.number.isRequired,
    Doctor_Name: PropTypes.string.isRequired,
    Speciality: PropTypes.string.isRequired,
    Rating: PropTypes.number.isRequired,
    Address: PropTypes.string.isRequired,
    Image: PropTypes.string, // Make image optional
  }).isRequired,
};

export default HighlyRatedDoctor;
