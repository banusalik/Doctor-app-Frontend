import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import Overview from "./Overview";
import SeeAppointment from "./SeeAppointment";

const DocProfile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // State variables
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [bio, setBio] = useState("");
  const [about, setAbout] = useState("");
  const [gender, setGender] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [specialization_id, setSpecialization] = useState("");
  const [newTimeSlots, setNewTimeSlots] = useState([]);
  const [newQualifications, setNewQualifications] = useState([]);
  const [newExperiences, setNewExperiences] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);

  // Days of the week array
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Function to handle changes in the "About" textarea
  const handleAboutChange = (e) => {
    setAbout(e.target.value);
  };

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Function to add a new qualification
  const addQualification = () => {
    setNewQualifications([
      ...newQualifications,
      { degree: "", university: "" },
    ]);
  };

  // Function to remove a qualification
  const removeQualification = (index) => {
    const updatedQualifications = [...newQualifications];
    updatedQualifications.splice(index, 1);
    setNewQualifications(updatedQualifications);
  };

  // Function to add a new experience
  const addExperience = () => {
    setNewExperiences([
      ...newExperiences,
      { startDate: "", endDate: "", position: "", hospital: "" },
    ]);
  };

  // Function to remove an experience
  const removeExperience = (index) => {
    const updatedExperiences = [...newExperiences];
    updatedExperiences.splice(index, 1);
    setNewExperiences(updatedExperiences);
  };

  // Function to add a new time slot
  const addTimeSlot = () => {
    setNewTimeSlots([...newTimeSlots, { day: "", startTime: "", endTime: "" }]);
  };

  // Function to remove a time slot
  const removeTimeSlot = (index) => {
    const updatedTimeSlots = [...newTimeSlots];
    updatedTimeSlots.splice(index, 1);
    setNewTimeSlots(updatedTimeSlots);
  };

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Function to handle profile update
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const doctorId = 2; // Use the doctor's ID here
      const response = await axios.post(
        `http://localhost:8081/doctor/update-profile/2`,
        {
          phoneNumber,
          email,
          doctorName,
          bio,
          about,
          gender,
          ticketPrice,
          specialization_id,
          newTimeSlots,
          newQualifications,
          newExperiences,
        }
      );
      console.log(newQualifications); // Log the response for debugging
      console.log(response.data); // Log the response for debugging
      // Handle success: show a success message to the user
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle error: show an error message to the user
    }
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row mx-2 lg:mx-11 mt-20 p-4 gap-x-10">
        <div className="w-3/4 mb-10 lg:mb-0 mx-auto lg:mx-0 bg-white lg:w-2/6 h-1/2 p-4 flex-col flex items-center rounded-2xl mt-4 justify-center ">
          <button
            className={`w-40 p-2 mb-2 ${
              activeTab === "overview"
                ? "bg-[#D5D5D5] text-black rounded-lg"
                : ""
            }`}
            onClick={() => handleTabClick("overview")}
          >
            Overview
          </button>
          <button
            className={`w-40 p-2 mb-2 ${
              activeTab === "appointment"
                ? "bg-[#D5D5D5] text-black rounded-lg"
                : ""
            }`}
            onClick={() => handleTabClick("appointment")}
          >
            Appointment
          </button>
          <button
            className={`w-40 p-2 mb-10 ${
              activeTab === "profile"
                ? "bg-[#D5D5D5] text-black rounded-lg"
                : ""
            }`}
            onClick={() => handleTabClick("profile")}
          >
            Profile
          </button>
          <button className="py-2 mb-2 px-6 bg-black text-white rounded-md">
            Logout
          </button>
          <button className="py-2  px-6 bg-red-600 text-white rounded-md">
            Delete
          </button>
        </div>

        {/* Right Section with Container */}
        <div className="w-full lg:w-3/6 p-4">
          {/* Content based on activeTab */}
          {activeTab === "overview" && <Overview />}
          {activeTab === "appointment" && <SeeAppointment />}

          {activeTab === "profile" && (
            <div className="bg-white rounded-2xl pt-4 px-5">
              <form
                onSubmit={handleUpdateProfile}
                className="container mx-auto p-4"
              >
                <h1 className="text-2xl font-bold mb-4">Doctor Profile</h1>

                {/* Basic Information */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2">
                    Profile Information
                  </h2>
                  <div className=" gap-4">
                    <div>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        value={doctorName}
                        onChange={(e) => setDoctorName(e.target.value)}
                        className="w-full p-2 border mb-2 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border mb-2  rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full p-2 border mb-2 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="bio">Bio</label>
                      <textarea
                        id="bio"
                        rows="2"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full p-2 border mb-2 rounded-md"
                        required
                      ></textarea>
                    </div>
                    <div className="col-span-2">
                      <div className="flex space-x-4">
                        <div>
                          <label htmlFor="gender">Gender</label>
                          <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full p-2 border mb-2 border-black rounded-md focus:outline-none focus:border-blue-500"
                            required
                          >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="specialization">Specialization</label>
                          <select
                            id="specialization"
                            value={specialization_id}
                            onChange={(e) => setSpecialization(e.target.value)}
                            className="w-full p-2 border border-black rounded-md focus:outline-none focus:border-blue-500"
                            required
                          >
                            <option value="">Select Specialization</option>
                            <option value="1">Cardiologist</option>
                            <option value="2">Dermatologist</option>
                            {/* Add more options as needed */}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="ticketPrice">Ticket Price</label>
                          <input
                            type="text"
                            id="ticketPrice"
                            value={ticketPrice}
                            onChange={(e) => setTicketPrice(e.target.value)}
                            className="w-full p-2 border rounded-md"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Qualifications */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2">Qualifications</h2>
                  {newQualifications.map((qualification, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 mb-2">
                      <div>
                        <label htmlFor={`degree-${index}`}>Degree</label>
                        <input
                          type="text"
                          id={`degree-${index}`}
                          value={qualification.degree}
                          onChange={(e) => {
                            const updatedQualifications = [
                              ...newQualifications,
                            ];
                            updatedQualifications[index].degree =
                              e.target.value;
                            setNewQualifications(updatedQualifications);
                          }}
                          className="w-full p-2 border  rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor={`university-${index}`}>
                          University
                        </label>
                        <input
                          type="text"
                          id={`university-${index}`}
                          value={qualification.university}
                          onChange={(e) => {
                            const updatedQualifications = [
                              ...newQualifications,
                            ];
                            updatedQualifications[index].university =
                              e.target.value;
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
                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2">Experiences</h2>
                  {newExperiences.map((experience, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4 mb-2">
                      <div>
                        <label htmlFor={`startDate-${index}`}>Start Date</label>
                        <input
                          type="date"
                          id={`startDate-${index}`}
                          value={experience.startDate}
                          onChange={(e) => {
                            const updatedExperiences = [...newExperiences];
                            updatedExperiences[index].startDate =
                              e.target.value;
                            setNewExperiences(updatedExperiences);
                          }}
                          className="w-full p-2 border  rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor={`endDate-${index}`}>End Date</label>
                        <input
                          type="date"
                          id={`endDate-${index}`}
                          value={experience.endDate}
                          onChange={(e) => {
                            const updatedExperiences = [...newExperiences];
                            updatedExperiences[index].endDate = e.target.value;
                            setNewExperiences(updatedExperiences);
                          }}
                          className="w-full p-2 border rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor={`position-${index}`}>Position</label>
                        <input
                          type="text"
                          id={`position-${index}`}
                          value={experience.position}
                          onChange={(e) => {
                            const updatedExperiences = [...newExperiences];
                            updatedExperiences[index].position = e.target.value;
                            setNewExperiences(updatedExperiences);
                          }}
                          className="w-full p-2 border rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor={`hospital-${index}`}>Hospital</label>
                        <input
                          type="text"
                          id={`hospital-${index}`}
                          value={experience.hospital}
                          onChange={(e) => {
                            const updatedExperiences = [...newExperiences];
                            updatedExperiences[index].hospital = e.target.value;
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
                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2">Time Slots</h2>
                  {newTimeSlots.map((slot, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 mb-2">
                      <div>
                        <label htmlFor={`day-${index}`}>Day</label>
                        <select
                          id={`day-${index}`}
                          value={slot.day}
                          onChange={(e) => {
                            const updatedTimeSlots = [...newTimeSlots];
                            updatedTimeSlots[index].day = e.target.value;
                            setNewTimeSlots(updatedTimeSlots);
                          }}
                          className="w-full p-2 border rounded-md focus:outline-none border-black focus:border-blue-500"
                        >
                          <option value="" disabled>
                            Select Day
                          </option>
                          {daysOfWeek.map((day) => (
                            <option key={day} value={day}>
                              {day}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor={`startTime-${index}`}>Start Time</label>
                        <input
                          type="time"
                          id={`startTime-${index}`}
                          value={slot.startTime}
                          onChange={(e) => {
                            const updatedTimeSlots = [...newTimeSlots];
                            updatedTimeSlots[index].startTime = e.target.value;
                            setNewTimeSlots(updatedTimeSlots);
                          }}
                          className="w-full p-2 border rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor={`endTime-${index}`}>End Time</label>
                        <input
                          type="time"
                          id={`endTime-${index}`}
                          value={slot.endTime}
                          onChange={(e) => {
                            const updatedTimeSlots = [...newTimeSlots];
                            updatedTimeSlots[index].endTime = e.target.value;
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

                {/* About and Image */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2">About and Image</h2>
                  <div className="grid grid-cols-1 gap-4 mb-2">
                    <div>
                      <label htmlFor="about">About</label>
                      <textarea
                        id="about"
                        rows="4"
                        value={about}
                        onChange={handleAboutChange}
                        className="w-full p-2 border rounded-md"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor="image">Profile Image</label>
                      <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                    <div>
                      {uploadedImage && (
                        <img
                          src={uploadedImage}
                          alt="Uploaded"
                          className="w-40 h-40 object-cover"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Update Profile
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DocProfile;
