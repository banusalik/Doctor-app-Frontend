import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdDelete } from "react-icons/md";

function TimeSlots() {
  const [timeSlots, setTimeSlots] = useState([]);
  const [newTimeSlot, setNewTimeSlot] = useState({
    Date: new Date(),
    Start_Time: "",
    End_Time: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (date) => {
    setNewTimeSlot((prevState) => ({
      ...prevState,
      Date: date,
    }));
  };

  const handleAddTimeSlot = () => {
    setTimeSlots((prevTimeSlots) => [...prevTimeSlots, newTimeSlot]);
    setNewTimeSlot({
      Date: new Date(),
      Start_Time: "",
      End_Time: "",
    });
    setShowModal(false);
  };

  const handleDeleteTimeSlot = (index) => {
    setTimeSlots((prevTimeSlots) =>
      prevTimeSlots.filter((_, i) => i !== index)
    );
  };

  return (
    <div className="mb-10">
      <div className="flex justify-end mb-4">
        <button
          className="group cursor-pointer outline-none hover:rotate-90 duration-300"
          title="Add New"
          onClick={() => setShowModal(true)} // Add onClick handler to show modal
        >
          <svg
            className="stroke-blue-500 fill-none group-hover:fill-blue-800 group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300"
            viewBox="0 0 24 24"
            height="50px"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeWidth="1.5"
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            />
            <path strokeWidth="1.5" d="M8 12H16" />
            <path strokeWidth="1.5" d="M12 16V8" />
          </svg>
        </button>
      </div>
      <h2 className="text-xl font-bold mb-2">Time Slot</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b justify-center">Date</th>
              <th className="py-2 px-4 border-b justify-center">Start Time</th>
              <th className="py-2 px-4 border-b justify-center">End Time</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((slot, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-center">
                  {slot.Date.toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {slot.Start_Time}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {slot.End_Time}
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleDeleteTimeSlot(index)}
                    className="mr-2 text-red-500"
                  >
                    <MdDelete />
                  </button>
                  {/* Add edit button and functionality here */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add modal for adding new time slot */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Add Time Slot</h2>
              <button onClick={() => setShowModal(false)}>Close</button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div>
                <label htmlFor="Date">Date</label>
                <DatePicker
                  selected={newTimeSlot.Date}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md focus:outline-none border-black focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="Start_Time">Start Time</label>
                <input
                  type="time"
                  id="Start_Time"
                  name="Start_Time"
                  value={newTimeSlot.Start_Time}
                  onChange={(e) =>
                    setNewTimeSlot((prevState) => ({
                      ...prevState,
                      Start_Time: e.target.value,
                    }))
                  }
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="End_Time">End Time</label>
                <input
                  type="time"
                  id="End_Time"
                  name="End_Time"
                  value={newTimeSlot.End_Time}
                  onChange={(e) =>
                    setNewTimeSlot((prevState) => ({
                      ...prevState,
                      End_Time: e.target.value,
                    }))
                  }
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
            </div>
            <button
              type="button"
              onClick={handleAddTimeSlot}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add Time Slot
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TimeSlots;
