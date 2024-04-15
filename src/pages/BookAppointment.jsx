import Layout from "../components/Layout/Layout";
import doctor from "../assets/doctor.jpg";
import { useState, useEffect } from "react";
import cookie from "js-cookie";
import { useParams } from "react-router-dom";
import KhaltiCheckout from "khalti-checkout-web";

const BookAppointment = () => {
  const { Doctor_ID } = useParams();
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [transactionDetails, setTransactionDetails] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

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
        setTimeSlots(data.timeSlot);
      } else {
        console.error("Failed to fetch time slots");
      }
    } catch (error) {
      console.error("Error fetching time slots:", error);
    }
  };

  const handleTimeSlotChange = (e) => {
    setSelectedTimeSlot(e.target.value);
  };

  const handleStatus = (value) => {
    setStatus(value);
  };

  const handleFormSubmit = async (e, timeSlotId) => {
    e.preventDefault();
    try {
      const patientId = cookie.get("Patient_ID");
      const appointmentData = {
        name,
        email,
        date,
        visitTime: selectedTimeSlot,
        patientId: patientId,
        status: "Unpaid",
        doctorId: Doctor_ID,
        time_slot_id: timeSlotId,
      };

      const response = await fetch(
        "http://localhost:8081/patients/make-appointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(appointmentData),
        }
      );

      if (response.ok) {
        console.log("Appointment booked successfully");
        const appointmentResponse = await response.json();
        console.log(
          "Appointment Response:",
          appointmentResponse.data.Appointment_ID
        );

        const appointmentId = appointmentResponse.data.Appointment_ID;
        cookie.set("Appointment_ID", appointmentId, { expires: 2 / (24 * 60) });
        handlePaymentButtonClick(appointmentId);
      } else {
        console.error("Failed to book appointment");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const handlePaymentButtonClick = (appointmentId) => {
    const config = {
      publicKey: "test_public_key_db20ce0cdb3c4201ab57afc7ad855132",
      productIdentity: appointmentId,
      productName: "Appointment Payment",
      productUrl: "http://yourwebsite.com/appointment",
      eventHandler: {
        onSuccess(payload) {
          console.log(payload);
          handleStatus("Paid");
          handlePaymentSuccess(appointmentId, payload);
        },
        onError(error) {
          console.log(error);
        },
        onClose() {
          console.log("widget is closing");
        },
      },
      paymentPreference: [
        "KHALTI",
        "EBANKING",
        "MOBILE_BANKING",
        "CONNECT_IPS",
        "SCT",
      ],
    };

    const checkout = new KhaltiCheckout(config);
    checkout.show({ amount: 1000 }); // Set your desired amount here
  };

  const handlePaymentSuccess = async (appointmentId, payload) => {
    console.log("Payment payload:", payload);

    await updateAppointmentStatus(appointmentId, "Paid");

    const transactionData = {
      status: "Paid",
      method: "Khalti",
      amount: payload.amount,
      appointmentId: parseInt(appointmentId),
      patientPatient_ID: parseInt(cookie.get("Patient_ID")),
    };

    await saveTransactionDetails(transactionData);
    setTransactionDetails(transactionData);

    // Show success message
    setShowSuccessMessage(true);

    // Redirect to home page after 2 seconds
    setTimeout(() => {
      window.location.href = "/";
    }, 5000);
  };

  const updateAppointmentStatus = async (appointmentId, status) => {
    try {
      const response = await fetch(
        `http://localhost:8081/patients/appointments/${appointmentId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Status: status }),
        }
      );

      if (response.ok) {
        console.log("Appointment status updated successfully to Paid");
      } else {
        console.error("Failed to update appointment status");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const saveTransactionDetails = async (transactionData) => {
    try {
      const response = await fetch("http://localhost:8081/transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactionData),
      });
      if (response.ok) {
        console.log("Transaction details saved successfully");
      } else {
        console.error("Failed to save transaction details");
      }
    } catch (error) {
      console.error("Error occurred while saving transaction details:", error);
    }
  };

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="lg:w-[55%] p-6 gap-x-2 rounded-lg shadow-md flex flex-col md:flex-row">
          {/* Left Side (Doctor Details) */}
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src={
                doctorDetails && doctorDetails.Image
                  ? `http://localhost:8081/image/${doctorDetails.Image}`
                  : doctor
              }
              alt="Doctor"
              className="w-full h-auto max-h-[60vh] rounded-lg mb-4"
            />
            <h2 className="font-bold">
              {doctorDetails?.Doctor_Name || "Dr. Name"}
            </h2>
            <p className="text-gray-700">
              {doctorDetails?.Specialization_at || "Speciality"}
            </p>
            <p className="overflow-hidden">{doctorDetails?.About || "About"}</p>
          </div>

          {/* Right Side (Form) */}
          <div className="md:w-1/2 md:p-8 bg-gray-300 rounded-lg">
            <h2 className="text-center font-bold mb-12 mt-8 text-2xl">
              Book Appointment
            </h2>
            <form
              onSubmit={(e) => handleFormSubmit(e, selectedTimeSlot)}
              className="flex flex-col w-[100%] mx-auto bg-white rounded-lg p-4 pb-0"
            >
              {/* Name Field */}
              <label className="text-gray-700 mb-2" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded-md px-3 py-2 mb-4"
                onChange={handleNameChange}
                required
              />

              {/* Email Field */}
              <label className="text-gray-700 mb-2" htmlFor="email">
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded-md px-3 py-2 mb-4"
                onChange={handleEmailChange}
                required
              />

              {/* Date*/}
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
                {timeSlots.map((slot) => (
                  <option key={slot.Time_Slots_ID} value={slot.Time_Slots_ID}>
                    {slot.Start_Time} - {slot.End_Time}
                  </option>
                ))}
              </select>

              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-blue-500 w-[70%] text-white px-4 py-2 mt-8 mb-6 lg:mb-4 rounded-md hover:bg-blue-600 transition duration-300"
                  id="payment-button"
                >
                  Payment
                </button>
              </div>
            </form>
          </div>
        </div>
        {showSuccessMessage && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded-md shadow-md">
              <p className="text-green-500 font-bold">Payment Successful!</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BookAppointment;
