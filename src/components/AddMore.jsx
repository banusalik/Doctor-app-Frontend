import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

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
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-2">Qualifications</h2>
        {newQualifications.map((qualification, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 mb-2">
            <div>
              <label htmlFor={`Degree-${index}`}>Degree</label>
              <input
                type="text"
                id={`Degree-${index}`}
                value={qualification.Degree}
                onChange={(e) => {
                  const updatedQualifications = [...newQualifications];
                  updatedQualifications[index].Degree = e.target.value;
                  setNewQualifications(updatedQualifications);
                }}
                className="w-full p-2 border  rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor={`University-${index}`}>University</label>
              <input
                type="text"
                id={`University-${index}`}
                value={qualification.University}
                onChange={(e) => {
                  const updatedQualifications = [...newQualifications];
                  updatedQualifications[index].University = e.target.value;
                  setNewQualifications(updatedQualifications);
                }}
                className=" p-2 border  rounded-md"
                required
              />
            </div>
            <div className="flex ">
              <button
                type="button"
                onClick={() => removeQualification(index)}
                className=" mt-5"
              >
                <MdDelete className="w-6 h-6 text-red-500" />
              </button>
            </div>
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
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-2">Experiences</h2>
        {newExperiences.map((experience, index) => (
          <div key={index} className="grid grid-cols-2 gap-4 mb-2">
            <div>
              <label htmlFor={`Start_Date-${index}`}>Start Date</label>
              <input
                type="date"
                id={`Start_Date-${index}`}
                value={experience.Start_Date}
                onChange={(e) => {
                  const updatedExperiences = [...newExperiences];
                  updatedExperiences[index].Start_Date = e.target.value;
                  setNewExperiences(updatedExperiences);
                }}
                className="w-full p-2 border  rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor={`End_Date-${index}`}>End Date</label>
              <input
                type="date"
                id={`End_Date-${index}`}
                value={experience.End_Date}
                onChange={(e) => {
                  const updatedExperiences = [...newExperiences];
                  updatedExperiences[index].End_Date = e.target.value;
                  setNewExperiences(updatedExperiences);
                }}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor={`Position-${index}`}>Position</label>
              <input
                type="text"
                id={`Position-${index}`}
                value={experience.Position}
                onChange={(e) => {
                  const updatedExperiences = [...newExperiences];
                  updatedExperiences[index].Position = e.target.value;
                  setNewExperiences(updatedExperiences);
                }}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor={`Hospital-${index}`}>Hospital</label>
              <input
                type="text"
                id={`Hospital-${index}`}
                value={experience.Hospital}
                onChange={(e) => {
                  const updatedExperiences = [...newExperiences];
                  updatedExperiences[index].Hospital = e.target.value;
                  setNewExperiences(updatedExperiences);
                }}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="col-span-1">
              <button
                type="button"
                onClick={() => removeExperience(index)}
                className=""
              >
                <MdDelete className="w-6 h-6 text-red-500" />
              </button>
            </div>
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
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-2">Time Slots</h2>
        {newTimeSlots.map((slot, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 mb-2">
            <div>
              <label htmlFor={`Day-${index}`}>Day</label>
              <select
                id={`Day-${index}`}
                value={slot.Day}
                onChange={(e) => {
                  const updatedTimeSlots = [...newTimeSlots];
                  updatedTimeSlots[index].Day = e.target.value;
                  setNewTimeSlots(updatedTimeSlots);
                }}
                className="w-full p-2 border rounded-md focus:outline-none border-black focus:border-blue-500"
              >
                <option value="" disabled>
                  Select Day
                </option>
                {daysOfWeek.map((Day) => (
                  <option key={Day} value={Day}>
                    {Day}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor={`Start_Time-${index}`}>Start Time</label>
              <input
                type="time"
                id={`Start_Time-${index}`}
                value={slot.Start_Time}
                onChange={(e) => {
                  const updatedTimeSlots = [...newTimeSlots];
                  updatedTimeSlots[index].Start_Time = e.target.value;
                  setNewTimeSlots(updatedTimeSlots);
                }}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor={`End_Time-${index}`}>End Time</label>
              <input
                type="time"
                id={`End_Time-${index}`}
                value={slot.End_Time}
                onChange={(e) => {
                  const updatedTimeSlots = [...newTimeSlots];
                  updatedTimeSlots[index].End_Time = e.target.value;
                  setNewTimeSlots(updatedTimeSlots);
                }}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="col-span-1">
              <button
                type="button"
                onClick={() => removeTimeSlot(index)}
                className=""
              >
                <MdDelete className="w-6 h-6 text-red-500" />
              </button>
            </div>
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
        className="bg-blue-500 text-white px-4 py-2"
      >
        Submit
      </button>
    </div>
  );
};

export default AddMore;
