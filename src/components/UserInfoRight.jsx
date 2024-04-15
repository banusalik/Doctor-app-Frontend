import React, { useState, useEffect } from "react";
import doctor from "../assets/doctor.jpg";
import { FaStar } from "react-icons/fa";
import UserProfile from "./UserProfile";
import Reschedule from "../pages/User/Reschedule";

const UserInfoRight = ({ activeTab, onTabChange }) => {
  const [appointments, setAppointments] = useState([]);
  const [reason, setReason] = useState("");
  const [showCancelPopup, setShowCancelPopup] = useState(false);
  const [showReschedule, setShowReschedule] = useState(false);
  const [selectedDoctorID, setSelectedDoctorID] = useState(null);

  const navigateToReschedule = () => {
    // Implement navigation logic here
    console.log("Navigate to Reschedule component");
  };

  const handleRescheduleClick = (Doctor_ID) => {
    setShowReschedule(true);
    setSelectedDoctorID(Doctor_ID);
    navigateToReschedule();
  };

  const handleCancelSubmit = () => {
    console.log("Cancel reason:", reason);
    setShowCancelPopup(false);
  };

  // Function to fetch appointments based on Patient_ID
  const fetchAppointments = async () => {
    try {
      const response = await fetch(
        `http://localhost:8081/patients/appointments/patient/${getPatientIDFromCookies()}`
      );
      const data = await response.json();
      if (data.status) {
        setAppointments(data.appointment);
      } else {
        console.error("Error fetching appointments:", data.message);
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  // Function to get Patient_ID from cookies
  const getPatientIDFromCookies = () => {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      const [name, value] = cookie.split("=");
      if (name.trim() === "Patient_ID") {
        return parseInt(value);
      }
    }
    return null; // Return null if Patient_ID is not found in cookies
  };

  useEffect(() => {
    fetchAppointments();
  }, []); // Fetch appointments on component mount

  return (
    <div className="flex-1 p-4 bg-white">
      <div className="mb-6 mt-6 lg:mt-0 flex flex-col lg:block gap-y-4 items-center lg:gap-y-0 text-center lg:text-left">
        {/* Toggle buttons */}
        <button
          className={`px-4 py-2 mr-2 rounded-lg ${
            activeTab === "appointments"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => onTabChange("appointments")}
        >
          My Appointments
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "profile" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => onTabChange("profile")}
        >
          My Profile
        </button>
      </div>

      {activeTab === "appointments" && (
        <>
          {/* Appointments content */}
          <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {appointments.map((appointment, index) => (
              <div
                key={index}
                className="max-w-sm mx-auto overflow-hidden rounded-md shadow-lg"
              >
                <div className="flex justify-center items-center">
                  <img
                    src={doctor}
                    alt={`doctor img`}
                    className="w-full h-60 md:w-72 md:h-auto rounded-md mb-4"
                  />
                </div>
                <div className="px-6">
                  <div className="font-bold text-xl mb-2">
                    {appointment.Name}
                  </div>
                  <div className="text-gray-700 text-base mb-2">
                    Date: {new Date(appointment.Date).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex justify-between px-6 py-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {`${appointment.Start_Time} - ${appointment.End_Time}`}
                  </span>
                  <p className="text-gray-700 text-base inline-block">
                    <FaStar className="text-yellow-400 mb-1 mr-1 inline-block" />
                    {appointment.Status}
                  </p>
                </div>
                <div className="flex gap-4 my-3">
                  <button
                    onClick={() => handleRescheduleClick(appointment.Doctor_ID)} // Pass the Doctor_ID to handleRescheduleClick
                    className="flex-1 w-full py-2 mr-4 px-6 bg-red-600 text-white rounded-md"
                  >
                    Reschedule
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === "profile" && <UserProfile />}

      {showCancelPopup && (
        <Cancel
          reason={reason}
          setReason={setReason}
          handleSubmit={handleCancelSubmit}
        />
      )}
      {showReschedule && selectedDoctorID && (
        <Reschedule Doctor_ID={selectedDoctorID} />
      )}
    </div>
  );
};

export default UserInfoRight;

// import React, { useState, useEffect } from "react";
// import doctor from "../assets/doctor.jpg";
// import { FaStar } from "react-icons/fa";
// import Cancel from "./Cancel";
// import UserProfile from "./UserProfile";

// const UserInfoRight = ({ activeTab, onTabChange }) => {
//   const [appointments, setAppointments] = useState([]);
//   const [reason, setReason] = useState("");
//   const [showCancelPopup, setShowCancelPopup] = useState(false);

//   const handleCancel = () => {
//     setShowCancelPopup(true);
//   };

//   const handleCancelSubmit = () => {
//     console.log("Cancel reason:", reason);
//     setShowCancelPopup(false);
//   };

//   // Function to fetch appointments based on Patient_ID
//   const fetchAppointments = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:8081/patients/appointments/patient/${getPatientIDFromCookies()}`
//       );
//       const data = await response.json();
//       if (data.status) {
//         setAppointments(data.appointment);
//       } else {
//         console.error("Error fetching appointments:", data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching appointments:", error);
//     }
//   };

//   // Function to get Patient_ID from cookies
//   const getPatientIDFromCookies = () => {
//     const cookies = document.cookie.split(";");
//     for (let cookie of cookies) {
//       const [name, value] = cookie.split("=");
//       if (name.trim() === "Patient_ID") {
//         return parseInt(value);
//       }
//     }
//     return null; // Return null if Patient_ID is not found in cookies
//   };

//   useEffect(() => {
//     fetchAppointments();
//   }, []); // Fetch appointments on component mount

//   return (
//     <div className="flex-1 p-4 bg-white">
//       <div className="mb-6 mt-6 lg:mt-0 flex flex-col lg:block gap-y-4 items-center lg:gap-y-0 text-center lg:text-left">
//         {/* Toggle buttons */}
//         <button
//           className={`px-4 py-2 mr-2 rounded-lg ${
//             activeTab === "appointments"
//               ? "bg-blue-500 text-white"
//               : "bg-gray-300"
//           }`}
//           onClick={() => onTabChange("appointments")}
//         >
//           My Appointments
//         </button>
//         <button
//           className={`px-4 py-2 rounded-lg ${
//             activeTab === "profile" ? "bg-blue-500 text-white" : "bg-gray-300"
//           }`}
//           onClick={() => onTabChange("profile")}
//         >
//           My Profile
//         </button>
//       </div>

//       {activeTab === "appointments" && (
//         <>
//           {/* Appointments content */}
//           <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
//           <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {appointments.map((appointment, index) => (
//               <div
//                 key={index}
//                 className="max-w-sm mx-auto overflow-hidden rounded-md shadow-lg"
//               >
//                 <div className="flex justify-center items-center">
//                   <img
//                     src={doctor}
//                     alt={`doctor img`}
//                     className="w-full h-60 md:w-72 md:h-auto rounded-md mb-4"
//                   />
//                 </div>
//                 <div className="px-6">
//                   <div className="font-bold text-xl mb-2">
//                     {appointment.Name}
//                   </div>
//                   <div className="text-gray-700 text-base mb-2">
//                     Date: {new Date(appointment.Date).toLocaleDateString()}
//                   </div>
//                 </div>
//                 <div className="flex justify-between px-6 py-2">
//                   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
//                     {`${appointment.Start_Time} - ${appointment.End_Time}`}
//                   </span>
//                   <p className="text-gray-700 text-base inline-block">
//                     <FaStar className="text-yellow-400 mb-1 mr-1 inline-block" />
//                     {appointment.Status}
//                   </p>
//                 </div>
//                 <div className="flex gap-4 my-3">
//                   <button className="flex-1 w-full py-2 mr-4 px-6 bg-red-600 text-white rounded-md">
//                     Reschedule
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </>
//       )}

//       {activeTab === "profile" && <UserProfile />}

//       {showCancelPopup && (
//         <Cancel
//           reason={reason}
//           setReason={setReason}
//           handleSubmit={handleCancelSubmit}
//         />
//       )}
//     </div>
//   );
// };

// export default UserInfoRight;
