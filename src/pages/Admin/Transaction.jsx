import React, { useState, useEffect } from "react";
import AdminHome from "./AdminHome";
import { FaSearch } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Pagination from "../../components/Admin/Pagination";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await fetch("http://localhost:8081/admin/transactions");
      const data = await response.json();
      if (data.status) {
        setTransactions(data.data);
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderTableRows = () => {
    return currentTransactions.map((transaction, index) => (
      <tr key={index}>
        <td className="py-4 px-6 border text-center">
          {transaction.patient_id}
        </td>
        <td className="py-4 px-6 border text-center">
          {transaction.patient_name}
        </td>
        <td className="py-4 px-6 border text-center">
          {transaction.visit_date}
        </td>
        <td className="py-4 px-6 border text-center">
          {transaction.doctor || ""}
        </td>
        <td className="py-4 px-6 border text-center">{transaction.amount}</td>
        <td className="py-4 px-6 border text-center">
          <span className="border border-green-600 px-4 py-2 text-green-600 bg-white">
            {transaction.status}
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
                  <th className="py-4 px-6 border">Charges</th>
                  <th className="py-4 px-6 border">Status</th>
                  <th className="py-4 px-6 border">Action</th>
                </tr>
              </thead>
              <tbody>{renderTableRows()}</tbody>
            </table>
          </div>
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={transactions.length}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </AdminHome>
  );
};

export default Transaction;
