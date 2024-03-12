import React, { useState } from 'react';
import AdminHome from './AdminHome';
import { FaSearch } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import Pagination from '../../components/Admin/Pagination';

const Transaction = () => {
  const totalItems = 20; // total number of items (rows)
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumbers = Math.ceil(totalItems / itemsPerPage);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTableRows = () => {
    // For simplicity, let's assume yourData is an array of objects with the required fields.
    const yourData = Array.from({ length: totalItems }, (_, index) => ({
      id: index + 1,
      patientId: `P${index + 1}`,
      patientName: `Patient ${index + 1}`,
      visitDate: `2024-01-${index + 1}`,
      doctor: `Dr. Smith ${index + 1}`,
      patientStatus: 'Treated',
      charges: 'Rs.1500',
      status: 'Received',
    }));

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = yourData.slice(indexOfFirstItem, indexOfLastItem);

    return currentItems.map((item) => (
      <tr key={item.id}>
        <td className="py-4 px-6 border text-center">{item.patientId}</td>
        <td className="py-4 px-6 border text-center">{item.patientName}</td>
        <td className="py-4 px-6 border text-center">{item.visitDate}</td>
        <td className="py-4 px-6 border text-center">{item.doctor}</td>
        <td className="py-4 px-6 border text-center text-green-600">
          {item.patientStatus}
        </td>
        <td className="py-4 px-6 border text-center">{item.charges}</td>
        <td className="py-4 px-6 border text-center">
          <span className="border border-green-600 px-4 py-2 text-green-600 bg-white">
            {item.status}
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
  return (
    <AdminHome>
      <div className="m-10 pb-10 mx-10 mt-6 h-[90vh] overflow-y-auto">
        <div className="max-w-full px-10 py-2 flex justify-between rounded-2xl bg-white">
          <div className=" flex items-center">
            <h3>Transactions</h3>
            <input
              type="text"
              placeholder="Filter"
              className="ml-6 px-4 py-2 border border-black relative w-24 md:w-auto"
            />
            <span className="ml-2 mr-2 bg-black cursor-pointer border border-black rounded-full w-8 h-8 flex content-center items-center hover:bg-btnColor transition-all duration-300 ease-in-out">
              <FaSearch className="w-5 h-5 text-white m-auto" />
            </span>
          </div>
        </div>

        {/* table */}
        <div className="mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-bold mb-6">Transactions Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-4 px-6 border">Patient ID</th>
                  <th className="py-4 px-6 border">Patient Name</th>
                  <th className="py-4 px-6 border">Visit Date</th>
                  <th className="py-4 px-6 border">Doctor</th>
                  <th className="py-4 px-6 border">Status</th>
                  <th className="py-4 px-6 border">Charges</th>
                  <th className="py-4 px-6 border">Status</th>
                  <th className="py-4 px-6 border">Action</th>
                </tr>
              </thead>
              <tbody>{renderTableRows()}</tbody>
            </table>
          </div>
          {/* Pagination */}
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={totalItems}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </AdminHome>
  );
};

export default Transaction;
