import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { IoCloseSharp } from 'react-icons/io5';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const LabTestOrderModel = ({ isOpen, onClose, totalPrice, selectedTests }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [patientName, setPatientName] = useState('');

  const handleConfirmOrder = () => {
    // You can handle the order confirmation logic here
    console.log('Order confirmed!');
    onClose(); // Close the modal after handling the confirmation
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="h-[60vh] lg:h-[70vh] fixed top-1/2 mb-10
       left-1/2 transform w-full -translate-x-1/2 -translate-y-1/2 bg-white rounded-md lg:w-2/6 border border-black max-h-3/4 overflow-y-auto"
      overlayClassName="fixed top-0 left-0 right-0 bottom-0 "
    >
      <div className="flex justify-between">
        <h2 className="bg-blue-500 py-3 w-full pl-4 text-lg font-bold text-white">
          Lab Order Test
        </h2>
        <span
          className="bg-blue-500 px-2 cursor-pointer flex items-center"
          onClick={onClose}
        >
          <IoCloseSharp className="w-7 h-7 bg-red-500 text-white rounded-full" />
        </span>
      </div>
      <div className="p-6">
        <div className="flex justify-between mb-2">
          <p>Lab Test Order:</p>
          <p className="text-blue-600">Rs. {totalPrice}</p>
        </div>
        <hr className="my-4 border-b-1 border-black" />
        <div className="flex justify-between">
          <p>Tests: </p>
          <p className="text-gray-600 text-sm">
            No. of Tests: <span>{selectedTests.length}</span>
          </p>
        </div>

        <div className="mb-4">
          <ul className="">
            {selectedTests.map((test) => (
              <li
                key={test.id}
                className="text-md mb-2 gap-y-2 px-1 py-1 shadow-lg flex justify-start gap-x-3 items-center border border-gray-400"
              >
                <IoIosCheckmarkCircle className="w-4 h-4 text-black bg-white rounded-full" />
                {test.name}
              </li>
            ))}
          </ul>
        </div>

        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          className="py-3 px-1 mb-2 bg-gray-200"
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <label htmlFor="patientName">Patient Name:</label>
        <input
          type="text"
          id="patientName"
          value={patientName}
          className="py-3 px-1 mb-4"
          onChange={(e) => setPatientName(e.target.value)}
        />
        <div className="text-center mt-2">
          <button
            onClick={handleConfirmOrder}
            className="px-10 py-2 bg-[#7192F4] text-white rounded-lg"
          >
            Cash On Delivery
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LabTestOrderModel;
