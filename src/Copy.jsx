import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { FaArrowRightLong } from "react-icons/fa6";
import Cards from "../components/Cards";

const FindDoctor = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [doctorData, setDoctorData] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:8081/doctor/search?Doctor_name=${searchQuery}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.status) {
          setDoctorData(data.doctor); // Update state with fetched doctor data
        } else {
          console.error(data.message); // Log error message if status is false
        }
      } else {
        console.error("Error fetching doctor's data");
      }
    } catch (error) {
      console.error("Error fetching doctor's data:", error);
    }
  };

  return (
    <Layout>
      <div className="m-10">
        <h2 className="text-center mb-4 text-lg font-bold">Find Doctor</h2>
        <div className="flex justify-center h-[16vh] items-start">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 px-4 w-full lg:w-1/4 py-2 rounded-l-md focus:outline-none focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-btnColor text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {doctorData.map((doctor, index) => (
            <Cards
              key={index} // Use a unique key for each card
              imgSrc={doctor.Image}
              name={doctor.Doctor_Name}
              specialty={doctor.Bio}
              rating={doctor.Ticket_Price}
              ratingList={doctor.Phone_Number ? 1 : 0}
              location={doctor.Address}
              link="/doctor-details"
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FindDoctor;