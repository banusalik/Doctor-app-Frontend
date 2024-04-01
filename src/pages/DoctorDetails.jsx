import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import doctorPlaceholder from "../assets/doctor.jpg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

const DoctorDetails = () => {
  const { Doctor_ID } = useParams();
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [appointment, setAppointment] = useState(null);
  const [rating, setRating] = useState(null);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/doctor/${Doctor_ID}`
        );
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched doctor details:", data); // Log fetched data
          setDoctorDetails(data.doctor);
          setAppointment(data.appointment);
          setRating(data.rating);
        } else {
          console.error("Failed to fetch doctor details");
        }
      } catch (error) {
        console.error("Error fetching doctor details:", error);
      }
    };

    fetchDoctorDetails();
  }, [Doctor_ID]);

  return (
    <Layout>
      {doctorDetails ? (
        <div className="max-w-4xl mx-auto mt-20 mb-20 bg-base-100 shadow-xl">
          <div className="flex flex-col lg:flex-row">
            <figure className="w-full lg:w-1/2">
              <img
                src={doctorDetails.Image || doctorPlaceholder}
                alt="Doctor"
              />
            </figure>
            <div className="card-body mt-20 p-4 lg:w-1/2">
              <h2 className="card-title text-2xl font-bold">
                {doctorDetails.Doctor_Name}
              </h2>
              <h3 className="card-title text-base font-normal">
                {doctorDetails.Speciality}
              </h3>
              <h3 className="card-title text-base font-bold">
                Qualification:{" "}
                <span className="font-normal">
                  {doctorDetails.Qualification}
                </span>
              </h3>
              <h3 className="card-title text-base font-bold mb-6">
                Specialist:{" "}
                <span className="font-normal">{doctorDetails.Specialist}</span>
              </h3>
              <p className="mb-4">{doctorDetails.Bio}</p>
              <div className="card-actions justify-end">
                <button className="bg-btnColor btn text-white hover:bg-blue-600">
                  <Link to={`/book-appointment/${Doctor_ID}`}>Appointment</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {rating && <Rating rating={rating} />}
    </Layout>
  );
};

export default DoctorDetails;
