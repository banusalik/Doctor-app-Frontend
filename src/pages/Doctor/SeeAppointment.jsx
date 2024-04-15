import React, { useState, useEffect } from "react";

const SeeAppointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch(
        "http://localhost:8081/patients/appointments/1"
      );
      const data = await response.json();
      setAppointments(data.appointment);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Start Time</th>
              <th className="py-2 px-4 border-b">End Time</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Booked Date</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.Patient_ID}>
                <td className="py-2 px-4 border-b">{appointment.Name}</td>
                <td className="py-2 px-4 border-b">{appointment.Start_Time}</td>
                <td className="py-2 px-4 border-b">{appointment.End_Time}</td>
                <td className="py-2 px-4 border-b">{appointment.Status}</td>
                <td className="py-2 px-4 border-b">{appointment.Date}</td>
              </tr>
            ))}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeeAppointment;
