import React, { useState, useEffect } from "react";
import img from "../../assets/doctor.jpg";
import Cookies from "js-cookie";

const Overview = () => {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const doctorId = Cookies.get("Doctor_ID");

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/doctor/${doctorId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setDoctor(data.doctor); // Assuming the response from the backend includes a 'doctor' object
      } catch (error) {
        console.error("Error fetching doctor details:", error);
        setDefaultDoctor(); // Call a function to set default doctor details
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorDetails();
  }, [doctorId]);

  const setDefaultDoctor = () => {
    // Set default doctor details if fetching fails
    setDoctor({
      Doctor_Name: "Dr. Shyam Bahadur",
      Specialization_at: "Surgery Specialist",
      About: "Lorem ipsum",
      // updateQualifications: [
      //   {
      //     Degree: "PhD in Surgery",
      //     University: "New Apolo University",
      //   },
      //   {
      //     Degree: "MD",
      //     University: "New Apolo University",
      //   },
      //   {
      //     Degree: "MBBS",
      //     University: "New Apolo University",
      //   },
      // ],
      // updateExperiences: [
      //   {
      //     Start_Date: "2017-01-01",
      //     End_Date: "2021-09-12",
      //     Hospital: "City Hospital",
      //     Position: "Doctor",
      //   },
      //   {
      //     Start_Date: "2017-01-04",
      //     End_Date: "2021-09-22",
      //     Hospital: "Residential Hospital",
      //     Position: "Doctor",
      //   },
      // ],
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {doctor && (
        <>
          <div className="flex flex-col lg:flex-row">
            <figure className="w-full flex items-center lg:w-1/3">
              <img
                src={"http://localhost:8081/image/" + doctor.Image}
                alt="doctor img"
              />
            </figure>
            <div className="card-body mt-4 lg:mt-10 p-4 lg:w-1/2">
              <span className="bg-[#C0E8EB] text-gray-600 w-full lg:w-2/5 text-center py-1 rounded-sm">
                {doctor.Specialization_at}
              </span>
              <h2 className="card-title text-2xl font-bold">
                {doctor.Doctor_Name}
              </h2>

              <h3 className="card-title text-base font-light mb-0 lg:mb-6">
                Specialization in Surgery
              </h3>
            </div>
          </div>
          <div className="mx-2 mt-10">
            <h1 className="font-bold text-2xl mb-4">About {doctor.Bio}</h1>
            <p className="mb-4">{doctor.About}</p>
          </div>
          {/* Qualification */}
          {/* <div className="mb-6">
            <h2 className="font-bold text-lg">Update Qualifications</h2>
            {doctor.updateQualifications.map((updateQualifications, index) => (
              <div key={index} className="mb-2">
                <h2 className="font-bold text-lg">
                  {updateQualifications.Degree}
                </h2>
                <div className="flex justify-between items-center space-x-4">
                  <h4>{updateQualifications.University}</h4>
                </div>
              </div>
            ))}
          </div> */}
          {/* Experience */}
          {/* <div>
            <h2 className="font-bold text-lg mb-4">Update Experiences</h2>
            <div className="flex gap-x-4">
              {doctor.updateExperiences.map((updateExperiences, index) => (
                <div key={index} className="bg-[#7192F4] px-3 py-5 rounded-lg">
                  <h4 className="text-black">{updateExperiences.Start_Date}</h4>
                  <h4 className="text-black">{updateExperiences.End_Date}</h4>
                  <h4 className="text-black">{updateExperiences.Hospital}</h4>
                  <h4 className="text-black">{updateExperiences.Position}</h4>
                  <p>{updateExperiences.Hospital}</p>
                </div>
              ))}
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default Overview;
