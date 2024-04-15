import React from "react";
import { FaTimes } from "react-icons/fa"; // Import the FaTimes icon from react-icons

const Cancel = ({ reason, setReason, handleSubmit }) => {
  const handleClose = () => {
    setReason(""); // Clear the reason input
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            Why do you want to cancel appointment?
          </h2>
          {/* Use FaTimes icon instead of text */}
          <button
            className="text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={handleClose} // Call handleClose function when clicked
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <textarea
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          rows="4"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Enter your reason..."
        ></textarea>

        {/* Submit button */}
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Cancel;
