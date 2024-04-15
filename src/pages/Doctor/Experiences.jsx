import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    Start_Date: "",
    End_Date: "",
    Position: "",
    Hospital: "",
  });

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const Doctor_ID = getDoctorIDFromCookies();
      const response = await axios.get(
        `http://localhost:8081/doctor/experience/${Doctor_ID}`
      );
      setExperiences(response.data.experience || []);
    } catch (error) {
      console.error("Error fetching experiences:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddExperience = async () => {
    try {
      const Doctor_ID = getDoctorIDFromCookies();
      const experienceData = {
        ...formData,
        Doctor_ID: Doctor_ID,
      };

      const response = await axios.post(
        "http://localhost:8081/doctor/experience",
        experienceData
      );
      setExperiences([...experiences, response.data.experience]);
      setShowPopup(false);
    } catch (error) {
      console.error("Error adding experience:", error);
    }
  };

  const getDoctorIDFromCookies = () => {
    const doctorIDString = Cookies.get("Doctor_ID");
    return parseInt(doctorIDString);
  };

  return (
    <div>
      <h2>Experiences</h2>
      <button onClick={() => setShowPopup(true)}>Add</button>
      {showPopup && (
        <div className="popup">
          <h3>Add Experience</h3>
          <label>
            Start Date:
            <input
              type="text"
              name="Start_Date"
              value={formData.Start_Date}
              onChange={handleInputChange}
            />
          </label>
          <label>
            End Date:
            <input
              type="text"
              name="End_Date"
              value={formData.End_Date}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Position:
            <input
              type="text"
              name="Position"
              value={formData.Position}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Hospital:
            <input
              type="text"
              name="Hospital"
              value={formData.Hospital}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={handleAddExperience}>Submit</button>
          <button onClick={() => setShowPopup(false)}>Cancel</button>
        </div>
      )}
      <ul>
        {experiences &&
          experiences.map((experience) => (
            <li key={experience.Experience_ID}>
              {experience.Position} at {experience.Hospital} (
              {experience.Start_Date} - {experience.End_Date})
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Experience;
