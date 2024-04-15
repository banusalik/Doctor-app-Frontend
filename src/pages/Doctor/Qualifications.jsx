import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Qualification = () => {
  const [qualifications, setQualifications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [degree, setDegree] = useState("");
  const [university, setUniversity] = useState("");
  const doctorID = Cookies.get("Doctor_ID");

  useEffect(() => {
    fetchQualifications();
  }, []);

  const fetchQualifications = async () => {
    try {
      const response = await fetch(
        `http://localhost:8081/doctor/qualification/${doctorID}`
      );
      const data = await response.json();
      if (data.status) {
        setQualifications(data.qualification);
      } else {
        console.log("Error fetching qualifications:", data.message);
      }
    } catch (error) {
      console.error("Error fetching qualifications:", error);
    }
  };

  const addQualification = async () => {
    try {
      const response = await fetch(
        "http://localhost:8081/doctor/qualification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Degree: degree,
            University: university,
            Doctor_ID: doctorID,
          }),
        }
      );
      const data = await response.json();
      if (data.status) {
        fetchQualifications(); // Fetch qualifications again to update the list
        setShowModal(false); // Close the modal after adding qualification
      } else {
        console.log("Error adding qualification:", data.message);
      }
    } catch (error) {
      console.error("Error adding qualification:", error);
    }
  };

  const deleteQualification = async (qualificationID) => {
    try {
      const response = await fetch(
        `http://localhost:8081/doctor/qualification/${qualificationID}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      if (data.status) {
        fetchQualifications(); // Fetch qualifications again to update the list
      } else {
        console.log("Error deleting qualification:", data.message);
      }
    } catch (error) {
      console.error("Error deleting qualification:", error);
    }
  };

  return (
    <div>
      <h2>Qualifications</h2>
      <button onClick={() => setShowModal(true)}>Add Qualification</button>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
          showModal ? "block" : "hidden"
        }`}
      >
        <div className="bg-white p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Add Qualification</h3>
          <div className="mb-4">
            <label htmlFor="degree" className="block">
              Degree:
            </label>
            <input
              type="text"
              id="degree"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="university" className="block">
              University:
            </label>
            <input
              type="text"
              id="university"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            />
          </div>
          <div>
            <button onClick={addQualification}>Add</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      </div>
      <ul>
        {qualifications.map((qualification) => (
          <li key={qualification.Qualification_ID}>
            {qualification.Degree} - {qualification.University}
            <button
              onClick={() =>
                deleteQualification(qualification.Qualification_ID)
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Qualification;
