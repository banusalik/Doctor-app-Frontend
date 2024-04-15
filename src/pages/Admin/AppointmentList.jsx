import React, { useState, useEffect } from "react";
import AdminHome from "./AdminHome";
import { FaSearch } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Pagination from "../../components/Admin/Pagination";
// import NewPatientModal from "../../components/Admin/NewPatientModal";
// import Modal from "../../components/Admin/Modal";

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [appointmentsPerPage] = useState(5);
  //const [isModalOpen, setModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(
          "http://localhost:8081/admin/appointments"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch appointments");
        }
        const data = await response.json();
        setAppointments(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAppointments();
  }, []);

  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = appointments.slice(
    indexOfFirstAppointment,
    indexOfLastAppointment
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderTableRows = () => {
    if (currentAppointments.length === 0) {
      return (
        <tr>
          <td colSpan="6" className="py-4 px-6 border text-center">
            Loading...
          </td>
        </tr>
      );
    }
    return currentAppointments.map((appointment) => (
      <tr key={appointment.Appointment_ID}>
        {/* Render appointment details */}
        <td className="py-4 px-6 border text-center">
          {appointment.Appointment_ID}
        </td>
        <td className="py-4 px-6 border text-center">
          {appointment.Patient_Name}
        </td>
        <td className="py-4 px-6 border text-center">
          {appointment.Visit_Date}
        </td>
        <td className="py-4 px-6 border text-center">
          {appointment.Start_Time}
        </td>
        <td className="py-4 px-6 border text-center">
          {appointment.Doctor_Name}
        </td>
        <td className="py-4 px-6 border text-center">
          <span className="inline-block cursor-pointer bg-black p-2 rounded-full mr-3">
            <CiEdit className="w-5 h-5 text-white" />
          </span>
          <span className="inline-block cursor-pointer bg-red-600 p-2 rounded-full">
            <MdDelete className="w-5 h-5 text-white" />
          </span>
        </td>
      </tr>
    ));
  };

  return (
    <AdminHome>
      {/* Modal and other UI elements */}
      {/* Your existing code */}

      {/* Table */}
      <div className="mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Appointment Table</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-4 px-6 border">Appointment ID</th>
                <th className="py-4 px-6 border">Patient Name</th>
                <th className="py-4 px-6 border">Visit Date</th>
                <th className="py-4 px-6 border">Visit Time</th>
                <th className="py-4 px-6 border">Doctor</th>
                <th className="py-4 px-6 border">Action</th>
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
        </div>
        <Pagination
          itemsPerPage={appointmentsPerPage}
          totalItems={appointments.length}
          onPageChange={paginate} // Correct prop name
        />
      </div>
    </AdminHome>
  );
};

export default AppointmentList;
