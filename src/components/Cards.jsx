import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Cards = ({
  Doctor_ID,
  Image,
  Doctor_Name,
  Speciality,
  Rating,
  Phone_Number,
  Address,
  link,
}) => {
  return (
    <div className="w-4/6 md:w-5/6 mx-auto overflow-hidden rounded-md shadow-lg">
      <div className="flex justify-center items-center">
        <img
          src={Image}
          alt={`${Doctor_Name} img`}
          className="w-full h-60 md:h-auto rounded-md mb-4"
        />
      </div>

      <div className="px-6">
        <div className="font-bold text-xl mb-2">{Doctor_Name}</div>
      </div>

      <div className="flex justify-between px-6 py-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {Speciality}
        </span>
        <p className="text-gray-700 text-base inline-block">
          <FaStar className="text-yellow-400 mb-1 mr-1 inline-block" />
          {Rating}
          <p className="text-gray-500 ml-2 mt-1 text-base inline-block">
            {`(${Phone_Number})`}
          </p>
        </p>
      </div>

      <div className="flex justify-between px-6 py-4">
        <div className="font-normal text-sm mt-1">{Address}</div>
        <Link to={`/doctor-details/${Doctor_ID}`}>
          <span className="inline-block cursor-pointer p-1 border border-black rounded-full hover:bg-btnColor transition-all duration-300 ease-in-out">
            <FaArrowRightLong className="w-4 mt-[1px] h-4 text-black" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
