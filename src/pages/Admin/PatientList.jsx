import React, { useState, useEffect } from "react";
import AdminHome from "./AdminHome";
import { FaSearch } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Pagination from "../../components/Admin/Pagination";
import AddNewPatientModal from "../../components/Admin/AddNewPatientModal";
import Modal from "../../components/Admin/Modal";

const PatientList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await fetch("http://localhost:8081/admin/patients");
      const data = await response.json();
      if (data.status) {
        setPatients(data.patient);
      }
    } catch (error) {
      console.error("Error fetching patients:", error);
    } finally {
      setLoading(false);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleNewPatientSubmit = () => {
    console.log("New patient submitted!");
    closeModal();
    // You may want to refetch patients here to update the list after adding a new patient
    // fetchPatients();
  };

  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPatients = patients.slice(indexOfFirstItem, indexOfLastItem);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTableRows = () => {
    return currentPatients.map((patient, index) => (
      <tr key={index}>
        <td className="py-4 px-6 border text-center">{patient.Patient_ID}</td>
        <td className="py-4 px-6 border text-center">{patient.Patient_Name}</td>
        <td className="py-4 px-6 border text-center">{patient.Phone || ""}</td>
        <td className="py-4 px-6 border text-center">
          {patient.Recent_Visit || ""}
        </td>
        <td className="py-4 px-6 border text-center">
          {patient.Doctor_Name || ""}
        </td>
        <td className="py-4 px-6 border text-center">
          {patient.Appointment_Id || ""}
        </td>
        <td className="py-4 px-6 border text-center flex items-center justify-center">
          <span className=" h-8 w-8 rounded-full bg-yellow-500 text-white flex items-center justify-center">
            {patient.Number_of_Visits}
          </span>
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AdminHome>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="modal-container">
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <AddNewPatientModal
                onSubmit={handleNewPatientSubmit}
                onCancel={closeModal}
              />
            </Modal>
          </div>
        </div>
      )}
      <div className="m-10 pb-10 mx-10 mt-6 h-[90vh] overflow-y-auto">
        <div className="max-w-full px-10 py-2 flex justify-between rounded-2xl bg-white">
          <div className=" flex items-center">
            <h3>Patient List</h3>
            <input
              type="text"
              placeholder="Filter"
              className="ml-6 px-4 py-2 border border-black relative w-24 md:w-auto"
            />
            <span className="ml-2 mr-2 bg-black cursor-pointer border border-black rounded-full w-8 h-8 flex content-center items-center hover:bg-btnColor transition-all duration-300 ease-in-out">
              <FaSearch className="w-5 h-5 text-white m-auto" />
            </span>
          </div>
          <button type="button" className="btn" onClick={openModal}>
            + Add New Patient
          </button>
        </div>

        <div className="mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-6">Patient Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-4 px-6 border">Patient ID</th>
                  <th className="py-4 px-6 border">Patient Name</th>
                  <th className="py-4 px-6 border">Phone Number</th>
                  <th className="py-4 px-6 border">Recent Visit</th>
                  <th className="py-4 px-6 border">Doctor</th>
                  <th className="py-4 px-6 border">Appointment</th>
                  <th className="py-4 px-6 border">No. of Visits</th>
                  <th className="py-4 px-6 border">Action</th>
                </tr>
              </thead>
              <tbody>{renderTableRows()}</tbody>
            </table>
          </div>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={patients.length}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </AdminHome>
  );
};

export default PatientList;
