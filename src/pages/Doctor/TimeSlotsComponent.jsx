import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const TimeSlotsComponent = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newTimeSlot, setNewTimeSlot] = useState({
    Start_Time: "",
    End_Time: "",
    Date: "",
    Doctor_ID: Cookies.get("Doctor_ID") || 1, // Fetch Doctor_ID from cookies or default to 1
  });

  useEffect(() => {
    // Fetch time slots when component mounts
    getTimeSlots();
  }, []);

  const getTimeSlots = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/doctor/time_slots/${newTimeSlot.Doctor_ID}`
      );
      setTimeSlots(response.data.timeSlot);
    } catch (error) {
      console.error("Error fetching time slots:", error);
    }
  };

  const createNewTimeSlot = async () => {
    try {
      const formattedDate = newTimeSlot.Date + "T00:00:00Z";
      await axios.post("http://localhost:8081/doctor/time_slots/", {
        ...newTimeSlot,
        Date: formattedDate,
      });
      // Refresh time slots after creating a new one
      getTimeSlots();
      setShowModal(false); // Hide modal after creating new time slot
    } catch (error) {
      console.error("Error creating time slot:", error);
    }
  };

  const deleteTimeSlot = async (timeSlotId) => {
    try {
      await axios.delete(
        `http://localhost:8081/doctor/time_slots/${timeSlotId}`
      );
      // Refresh time slots after deleting
      getTimeSlots();
    } catch (error) {
      console.error("Error deleting time slot:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTimeSlot((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Time Slots</h2>
      <button onClick={() => setShowModal(true)}>Create New Time Slot</button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8">
            <h3>Create New Time Slot</h3>
            <label>Date:</label>
            <input
              type="date"
              name="Date"
              value={newTimeSlot.Date}
              onChange={handleInputChange}
            />
            <label>Start Time:</label>
            <input
              type="time"
              name="Start_Time"
              value={newTimeSlot.Start_Time}
              onChange={handleInputChange}
            />
            <label>End Time:</label>
            <input
              type="time"
              name="End_Time"
              value={newTimeSlot.End_Time}
              onChange={handleInputChange}
            />
            <button onClick={createNewTimeSlot}>Create</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}
      <ul>
        {timeSlots.map((slot) => (
          <li key={slot.Time_Slots_ID}>
            <div>
              <span>Date: {slot.Date}</span>
              <span>Start Time: {slot.Start_Time}</span>
              <span>End Time: {slot.End_Time}</span>
            </div>
            <button onClick={() => deleteTimeSlot(slot.Time_Slots_ID)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSlotsComponent;
