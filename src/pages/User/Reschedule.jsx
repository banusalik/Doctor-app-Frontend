import React, { useState, useEffect } from "react";

const Reschedule = ({ Doctor_ID }) => {
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/doctor/${Doctor_ID}`
        );
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched doctor details:", data); // Log fetched data
          setDoctorDetails(data.doctor);
        } else {
          console.error("Failed to fetch doctor details");
        }
      } catch (error) {
        console.error("Error fetching doctor details:", error);
      }
    };

    fetchDoctorDetails();
  }, [Doctor_ID]);

  const handleDateChange = async (e) => {
    const selectedDate = new Date(e.target.value);
    const formattedDate = selectedDate.toISOString();

    console.log("Formatted date:", formattedDate);

    setDate(formattedDate);

    try {
      const response = await fetch(
        `http://localhost:8081/doctor/filter_date/${Doctor_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Date: formattedDate }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched time slots:", data.timeSlot); // Log fetched data
        setTimeSlot(data.timeSlot);
      } else {
        console.error("Failed to fetch time slots");
      }
    } catch (error) {
      console.error("Error fetching time slots:", error);
    }
  };

  const handleTimeSlotChange = (e) => {
    setTimeSlot(e.target.value);
  };

  const handleRescheduleClick = () => {
    setShowReschedule(true);
    // Call the function to navigate to the Reschedule page
    navigateToReschedule(); // This line causes the error
  };

  const handleRescheduleSubmit = (e) => {
    e.preventDefault();
    // Implement reschedule logic
    console.log(
      "Reschedule form submitted with date:",
      date,
      "and time slot:",
      timeSlot
    );
  };

  return (
    <div className="md:w-1/2 md:p-8 bg-gray-300 rounded-lg">
      <h2 className="text-center font-bold mb-12 mt-8 text-2xl">
        Reschedule Appointment
      </h2>
      <form
        onSubmit={(e) => handleFormSubmit(e, selectedTimeSlot)}
        className="flex flex-col w-[100%] mx-auto bg-white rounded-lg p-4 pb-0"
      >
        {/* Doctor Details */}
        <div className="mb-4">
          <h3 className="font-bold">
            {doctorDetails?.Doctor_Name || "Dr. Name"}
          </h3>
          <p className="text-gray-700">
            {doctorDetails?.Specialization_at || "Speciality"}
          </p>
          <p className="overflow-hidden">{doctorDetails?.About || "About"}</p>
        </div>

        {/* Date Field */}
        <label className="text-gray-700 mb-2" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="border rounded-md px-3 py-2 mb-4"
          onChange={handleDateChange}
          onClick={() => console.log("Date input clicked")}
          required
        />

        {/* Time Field */}
        <select
          value={selectedTimeSlot}
          onChange={handleTimeSlotChange}
          className="border rounded-md px-3 py-2 mb-4"
        >
          <option key="default" value="">
            Select Time Slot
          </option>
          {timeSlot.map((slot) => (
            <option key={slot.Time_Slots_ID} value={slot.Time_Slots_ID}>
              {slot.Start_Time} - {slot.End_Time}
            </option>
          ))}
        </select>

        {/* Submit Button */}
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="bg-blue-500 w-[70%] text-white px-4 py-2 mt-8 mb-6 lg:mb-4 rounded-md hover:bg-blue-600 transition duration-300"
            id="reschedule-button"
          >
            Reschedule
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reschedule;
