import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const UserInfo = () => {
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    // Fetch Patient_ID from Cookies
    const patientID = Cookies.get("Patient_ID");

    // Fetch patient profile data using the API
    fetch(`http://localhost:8081/patients/profile/${patientID}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          setPatientData(data.patient);
        } else {
          console.error("Error fetching patient data:", data.message);
        }
      })
      .catch((error) => console.error("Error fetching patient data:", error));
  }, []);

  return (
    <div className="w-full lg:w-1/4 h-1/2 p-4 flex-col flex items-center justify-center bg-white">
      {patientData ? (
        <>
          <img
            src={`http://localhost:8081/${patientData.Image}`}
            alt="Patient"
            className="w-20 h-20 rounded-full border-2 border-black"
          />
          <div className="text-lg font-semibold">
            {patientData.Patient_Name}
          </div>
          <div>{patientData.Email}</div>
          <div className="mb-6">
            Blood Group: <span className="font-semibold"></span>
            {patientData.Blood_Group}
          </div>
          <button className="py-2 mb-2 px-6 bg-black text-white rounded-md">
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserInfo;
