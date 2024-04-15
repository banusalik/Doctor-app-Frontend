import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const UserProfile = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // State variables
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState(null);
  const patientId = Cookies.get("Patient_ID");

  useEffect(() => {
    const fetchPatientDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/patients/profile/${patientId}`
        );
        console.log("Response:", response.data);
        if (response.data.status) {
          const patient = response.data.patient;
          setPhoneNumber(patient.Phone_Number || "");
          setEmail(patient.Email || "");
          setName(patient.Patient_Name || "");
          setAddress(patient.Address || "");
          setBloodGroup(patient.Blood_Group || "");
          const formattedBirthDate = patient.DOB
            ? new Date(patient.DOB).toISOString().split("T")[0]
            : "";
          setBirthDate(formattedBirthDate || "");
          setGender(patient.Gender || "");
          // Assuming 'Image' is a direct URL to the image
          setImage(patient.Image || null);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatientDetails();
  }, [patientId]);

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

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const formattedBirthDate = birthDate + "T00:00:00Z";
      const profileData = new FormData();
      profileData.append("image", image);
      profileData.append("Phone_Number", phoneNumber);
      profileData.append("Email", email);
      profileData.append("Patient_Name", name);
      profileData.append("Address", address);
      profileData.append("Blood_Group", bloodGroup);
      profileData.append("DOB", formattedBirthDate);
      profileData.append("Gender", gender);

      await axios.patch(
        `http://localhost:8081/patients/update-profile/${patientId}`,
        profileData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Profile updated successfully!");
      setSuccessMessage("Profile updated");
      setTimeout(() => {
        setSuccessMessage(""); // Clear success message after 3 seconds
      }, 3000);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {successMessage && <p>{successMessage}</p>}
      {!loading && !error && (
        <form
          onSubmit={handleUpdateProfile}
          className="w-full lg:max-w-4xl mx-auto bg-white p-6 rounded-md"
        >
          <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="123 Main Street, City, Country"
              className="w-full px-3 py-2 border rounded-md resize-none"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="123-456-7890"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="bloodGroup"
            >
              Blood Group
            </label>
            <select
              id="bloodGroup"
              name="Blood_Group"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="birthDate"
            >
              Birth Date
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="mb-4 flex flex-col">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Profile Image
            </label>
            <div className="flex items-center gap-x-2">
              {image && (
                <div className="hidden sm:block">
                  <img
                    src={image}
                    alt="Selected Image"
                    className="w-12 h-12 mr-2 rounded-full"
                  />
                </div>
              )}
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full mb-2"
              />
            </div>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Update Profile
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default UserProfile;
