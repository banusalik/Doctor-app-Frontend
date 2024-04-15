import React, { useState, useEffect } from "react";
import AdminHome from "./AdminHome";
import { FaMoneyCheck } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Pagination from "../../components/Admin/Pagination";

const Emolument = () => {
  const [emolument, setEmolument] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchEmoluments();
  }, []);

  const fetchEmoluments = async () => {
    try {
      const response = await fetch("http://localhost:8081/admin/emolument");
      const data = await response.json();
      if (data.status) {
        setEmolument(data.data);
      }
    } catch (error) {
      console.error("Error fetching emoluments:", error);
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEmolument = emolument.slice(indexOfFirstItem, indexOfLastItem);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTableRows = () => {
    return currentEmolument.map((emolument, index) => (
      <tr key={index}>
        <td className="py-4 px-6 border text-center">
          {emolument.emolumnet_id}
        </td>
        <td className="py-4 px-6 border text-center">
          {emolument.doctor_name || ""}
        </td>
        <td className="py-4 px-6 border text-center">{emolument.amount}</td>
        <td className="py-4 px-6 border text-center">{emolument.date}</td>
        <td className="py-4 px-6 border text-center">
          <span className="border border-green-600 px-4 py-2 text-green-600 bg-white">
            {emolument.status}
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
      <div className="m-10 pb-10 mx-10 mt-6 h-[90vh] overflow-y-auto">
        <div className="max-w-full px-10 py-2 flex justify-between rounded-2xl bg-white">
          <div className=" flex items-center">
            <h3>Emolument </h3>
            {/* <input
              type="text"
              placeholder="Filter"
              className="ml-6 px-4 py-2 border border-black relative w-24 md:w-auto"
            /> */}

            <button
              type="submit"
              className="bg-blue-500 w-30 text-white px-4 py-2 mt-8 mb-6 mr-4 ml-4 rounded-md hover:bg-blue-600 transition duration-300"
              id="payment-button"
            >
              Payment
            </button>

            <span className="ml-2 mr-2 bg-black cursor-pointer border border-black rounded-full w-8 h-8 flex content-center items-center hover:bg-btnColor transition-all duration-300 ease-in-out">
              <FaMoneyCheck className="w-5 h-5 text-white m-auto" />
            </span>
          </div>
        </div>

        <div className="mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-6">Emolument Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-4 px-6 border">Emolument ID</th>
                  <th className="py-4 px-6 border">Doctor Name</th>
                  <th className="py-4 px-6 border">Amount</th>
                  <th className="py-4 px-6 border">Date</th>
                  <th className="py-4 px-6 border">Status</th>
                  <th className="py-4 px-6 border">Action</th>
                </tr>
              </thead>
              <tbody>{renderTableRows()}</tbody>
            </table>
          </div>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={emolument.length}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </AdminHome>
  );
};

export default Emolument;
