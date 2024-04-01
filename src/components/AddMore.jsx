import React, { useState } from "react";

const AddMore = () => {
  // State variables and functions for Qualification section
  const [newQualifications, setNewQualifications] = useState([
    {
      Degree: "",
      University: "",
      Doctor_ID: 1,
    },
  ]);

  const addQualification = () => {
    setNewQualifications([
      ...newQualifications,
      { Degree: "", University: "", Doctor_ID: 1 },
    ]);
  };

  const removeQualification = (index) => {
    const updatedQualifications = [...newQualifications];
    updatedQualifications.splice(index, 1);
    setNewQualifications(updatedQualifications);
  };

  // State variables and functions for Experience section
  const [newExperiences, setNewExperiences] = useState([
    {
      Start_Date: "",
      End_Date: "",
      Position: "",
      Hospital: "",
      Doctor_ID: 1,
    },
  ]);

  const addExperience = () => {
    setNewExperiences([
      ...newExperiences,
      { startDate: "", endDate: "", position: "", hospital: "" },
    ]);
  };

  const removeExperience = (index) => {
    const updatedExperiences = [...newExperiences];
    updatedExperiences.splice(index, 1);
    setNewExperiences(updatedExperiences);
  };

  // State variables and functions for TimeSlot section
  const [newTimeSlots, setNewTimeSlots] = useState([
    {
      Start_Time: "",
      End_Time: "",
      Day: "",
      Doctor_ID: 1,
    },
  ]);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const addTimeSlot = () => {
    setNewTimeSlots([...newTimeSlots, { day: "", startTime: "", endTime: "" }]);
  };

  const removeTimeSlot = (index) => {
    const updatedTimeSlots = [...newTimeSlots];
    updatedTimeSlots.splice(index, 1);
    setNewTimeSlots(updatedTimeSlots);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted!");
  };

  return (
    <div>
      {/* Qualifications */}
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Qualifications</h2>
        {newQualifications.map((qualification, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 mb-2">
            {/* Qualification inputs */}
          </div>
        ))}
        <button
          onClick={addQualification}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Add Qualification
        </button>
      </div>

      {/* Experiences */}
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Experiences</h2>
        {newExperiences.map((experience, index) => (
          <div key={index} className="grid grid-cols-2 gap-4 mb-2">
            {/* Experience inputs */}
          </div>
        ))}
        <button
          onClick={addExperience}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Add Experience
        </button>
      </div>

      {/* Time Slots */}
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Time Slots</h2>
        {newTimeSlots.map((slot, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 mb-2">
            {/* Time slot inputs */}
          </div>
        ))}
        <button
          onClick={addTimeSlot}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Add Time Slot
        </button>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2"
      >
        Submit
      </button>
    </div>
  );
};

export default AddMore;
