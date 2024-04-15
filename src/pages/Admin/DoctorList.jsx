import React, { useState, useEffect } from "react";
import AdminHome from "./AdminHome";
import { FaSearch } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Pagination from "../../components/Admin/Pagination";
// import Modal from '../../components/Admin/Modal';
// import NewDoctorModal from '../../components/Admin/NewDoctorModal';

const DoctorList = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [doctorsData, setDoctorsData] = useState([]);
  const [loading, setLoading] = useState(true);

  //const [isModalOpen, setModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  // const handleNewPatientSubmit = () => {
  //   // Handle new patient form submission logic
  //   // You may want to update state or perform other actions
  //   console.log("New Doctor submitted!");
  //   closeModal();
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8081/admin/doctors`);
        const data = await response.json();
        if (data.status) {
          setDoctorsData(data.data);
          setLoading(false);
        } else {
          console.error("Error fetching data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [activeStates, setActiveStates] = useState(
    Array.from((_, index) => index + 1).reduce(
      (acc, itemId) => ({ ...acc, [itemId]: true }),
      {}
    )
  );

  const handleToggle = (itemId) => {
    setActiveStates((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId],
    }));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = doctorsData.slice(indexOfFirstItem, indexOfLastItem);

  const renderTableRows = () => {
    if (loading)
      return (
        <tr>
          <td colSpan="8">Loading...</td>
        </tr>
      );

    return currentItems.map((doctor) => (
      <tr key={doctor.Doctor_ID}>
        <td className="py-4 px-6 border text-center">{doctor.Doctor_ID}</td>
        <td className="py-4 px-6 border text-center">
          {doctor.Doctor_Name || ""}
        </td>
        <td className="py-4 px-6 border text-center">
          {doctor.Phone_Number || ""}
        </td>
        <td className="py-4 px-6 border text-center">
          {doctor.Specialization_at || ""}
        </td>
        <td className="py-4 px-6 border text-center">
          <button
            className={`px-4 py-2 mr-2 rounded-2xl ${
              activeStates[doctor.Doctor_ID]
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
            onClick={() => handleToggle(doctor.Doctor_ID)}
          >
            Active
          </button>
          <button
            className={`px-4 py-2 rounded-2xl ${
              !activeStates[doctor.Doctor_ID]
                ? "bg-red-500 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
            onClick={() => handleToggle(doctor.Doctor_ID)}
          >
            Inactive
          </button>
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
      {/* {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="modal-container">
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <NewDoctorModal
                onSubmit={handleNewPatientSubmit}
                onCancel={closeModal}
              />
            </Modal>
          </div>
        </div>
      )} */}
      <div className="m-10 pb-10 mx-10 mt-6 h-[90vh] overflow-y-auto">
        <div className="max-w-full px-10 py-2 flex justify-between rounded-2xl bg-white">
          <div className=" flex items-center">
            <h3>Doctor List</h3>
            <input
              type="text"
              placeholder="Filter"
              className="ml-6 px-4 py-2 border border-black relative w-24 md:w-auto"
            />
            <span className="ml-2 mr-2 bg-black cursor-pointer border border-black rounded-full w-8 h-8 flex content-center items-center hover:bg-btnColor transition-all duration-300 ease-in-out">
              <FaSearch className="w-5 h-5 text-white m-auto" />
            </span>
          </div>
          {/* <button type="button" className="btn" onClick={openModal}>
            + Add New Doctor
          </button> */}
        </div>

        {/* table */}
        <div className="mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-6">Doctor Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-4 px-6 border" style={{ width: "5%" }}>
                    Doctor ID
                  </th>
                  <th className="py-4 px-6 border" style={{ width: "10%" }}>
                    Doctor Name
                  </th>
                  <th className="py-4 px-6 border" style={{ width: "10%" }}>
                    Phone Number
                  </th>
                  <th className="py-4 px-6 border" style={{ width: "10%" }}>
                    Specialization
                  </th>
                  <th className="py-4 px-6 border" style={{ width: "20%" }}>
                    Status
                  </th>
                  <th className="py-4 px-6 border" style={{ width: "15%" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>{renderTableRows()}</tbody>
            </table>
          </div>
          {/* Pagination */}
          <Pagination
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </AdminHome>
  );
};

export default DoctorList;
