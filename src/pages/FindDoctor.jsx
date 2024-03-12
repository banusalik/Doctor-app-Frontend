import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import doctor from "../assets/doctor.jpg";
import { FaStar } from "react-icons/fa6";
import Cards from "../components/Cards";

const FindDoctor = () => {
  return (
    <Layout>
      <div className=" m-10">
        <h2 className="text-center mb-4 text-lg font-bold">Find Doctor</h2>
        <div className="flex justify-center h-[16vh] items-start">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 px-4 w-full lg:w-1/4 py-2 rounded-l-md focus:outline-none focus:border-blue-500"
          />
          <button className="bg-btnColor text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none">
            Search
          </button>
        </div>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* First Card */}
          <Cards
            imgSrc={doctor}
            name="Doctor Soniya Rajput"
            specialty="Surgery Expert"
            rating={4.5}
            ratingList={2}
            location="At Fishtail Hospital"
            link="/doctor-details"
          />

          {/* Second Card */}
          <Cards
            imgSrc={doctor}
            name="Another Doctor"
            specialty="Another Specialty"
            rating={3.8}
            ratingList={2}
            location="At Some Hospital"
            link="/doctor-details"
          />
          <Cards
            imgSrc={doctor}
            name="Another Doctor"
            specialty="Another Specialty"
            rating={3.8}
            ratingList={2}
            location="At Some Hospital"
            link="/doctor-details"
          />
          <Cards
            imgSrc={doctor}
            ratingList={2}
            name="Another Doctor"
            specialty="Another Specialty"
            rating={3.8}
            location="At Some Hospital"
            link="/doctor-details"
          />
          <Cards
            imgSrc={doctor}
            name="Another Doctor"
            specialty="Another Specialty"
            rating={3.8}
            ratingList={2}
            location="At Some Hospital"
            link="/doctor-details"
          />
          <Cards
            imgSrc={doctor}
            name="Another Doctor"
            ratingList={2}
            specialty="Another Specialty"
            rating={3.8}
            location="At Some Hospital"
            link="/doctor-details"
          />
          <Cards
            imgSrc={doctor}
            name="Another Doctor"
            ratingList={2}
            specialty="Another Specialty"
            rating={3.8}
            location="At Some Hospital"
            link="/doctor-details"
          />
          <Cards
            imgSrc={doctor}
            name="Another Doctor"
            specialty="Another Specialty"
            rating={3.8}
            ratingList={2}
            location="At Some Hospital"
            link="/doctor-details"
          />
        </div>
      </div>
    </Layout>
  );
};

export default FindDoctor;
