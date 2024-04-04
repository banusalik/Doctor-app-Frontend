import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import Overview from "./Overview";
import SeeAppointment from "./SeeAppointment";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AddMore from "../../components/AddMore";

const DocProfile = () => {
  const { Doctor_ID } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [showAddMore, setShowAddMore] = useState(false); // State variable to toggle AddMore component
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // State variables
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [bio, setBio] = useState("");
  const [about, setAbout] = useState("");
  const [gender, setGender] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [specialization_id, setSpecialization] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/doctor/${Doctor_ID}`
        );
        if (response.data) {
          const {
            phoneNumber,
            email,
            doctorName,
            bio,
            about,
            gender,
            ticketPrice,
            specialization_id,
            imageURL,
          } = response.data;
          setPhoneNumber(phoneNumber);
          setEmail(email);
          setDoctorName(doctorName);
          setBio(bio);
          setAbout(about);
          setGender(gender);
          setTicketPrice(ticketPrice);
          setSpecialization(specialization_id);
          if (imageURL) {
            setImage(imageURL);
          }
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorDetails();

    // Cleanup function
    return () => {
      // Cleanup tasks (if any)
    };
  }, [Doctor_ID]);

  // Function to handle changes in the "About" textarea
  const handleAboutChange = (e) => {
    setAbout(e.target.value);
  };

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(file);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Function to handle profile update
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("phoneNumber", phoneNumber);
      formData.append("email", email);
      formData.append("doctorName", doctorName);
      formData.append("bio", bio);
      formData.append("about", about);
      formData.append("gender", gender);
      formData.append("ticketPrice", ticketPrice);
      formData.append("specialization_id", specialization_id);

      const response = await axios.post(
        `http://localhost:8081/doctor/update-profile/1`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data); // Log the response for debugging
      // Handle success: show a success message to the user
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle error: show an error message to the user
    }
  };

  // Function to toggle AddMore component visibility
  const handleShowAddMore = () => {
    setShowAddMore(!showAddMore);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
          {activeTab === "overview" && (
            <Overview doctorDetails={(doctorName, email, phoneNumber)} />
          )}
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
                            <option value="1">Cardiology</option>
                            <option value="2">Dermatology</option>
                            <option value="3">Dental</option>
                            <option value="4">Dermatology</option>
                            <option value="5">Anesthesiology</option>
                            <option value="6">General Surgery</option>
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
                      {image ? (
                        <img
                          src={image}
                          alt="Uploaded"
                          className="w-40 h-40 object-cover"
                        />
                      ) : (
                        <span>No image available</span>
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
              {/* Add More Button */}
              <button
                className="bg-blue-500 mb-10 mt-10 text-white px-4 py-2 rounded-md"
                onClick={handleShowAddMore} // Toggle AddMore component visibility
              >
                {showAddMore ? "Hide More" : "Add More"}
              </button>

              {/* Conditionally render AddMore component */}
              {showAddMore && <AddMore />}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DocProfile;
