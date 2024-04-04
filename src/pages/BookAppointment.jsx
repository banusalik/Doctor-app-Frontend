import Layout from "../components/Layout/Layout";
import doctor from "../assets/doctor.jpg";
import { useState, useEffect } from "react";
import cookie from "js-cookie";
import { useParams } from "react-router-dom";
import KhaltiCheckout from "khalti-checkout-web";
import doctorPlaceholder from "../assets/doctor.jpg";

const BookAppointment = () => {
  const { Doctor_ID } = useParams();
  const [doctorDetails, setDoctorDetails] = useState(null);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [timeSlots] = useState([{ id: 1, time: "9:00 AM" }]);
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

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeSlotChange = (e) => {
    setSelectedTimeSlot(e.target.value);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const patientId = cookie.get("Patient_ID");

      const appointmentData = {
        name,
        email,
        date,
        visitTime: selectedTimeSlot,
        patientId: patientId,
        status,
        doctorId: Doctor_ID,
        time_slot_id: 1, // Set status to "Unpaid" by default
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
        // Optionally, you can redirect or show a success message here
      } else {
        console.error("Failed to book appointment");
        // Handle error scenario
      }
    } catch (error) {
      console.error("Error occurred:", error);
      // Handle error scenario
    }
  };

  const config = {
    // replace this key with yours
    publicKey: "test_public_key_db20ce0cdb3c4201ab57afc7ad855132",
    productIdentity: "1234567890",
    productName: "Drogon",
    productUrl: "http://gameofthrones.com/buy/Dragons",
    eventHandler: {
      onSuccess(payload) {
        // hit merchant api for initiating verfication
        console.log(payload);
        appointmentData.handleStatus("Paid");
        handleFormSubmit;
      },
      // onError handler is optional
      onError(error) {
        // handle errors
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

  const handlePaymentButtonClick = () => {
    // minimum transaction amount must be 10, i.e 1000 in paisa.
    checkout.show({ amount: 1000 });
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
              {doctorDetails?.Speciality || "Speciality"}
            </p>
            <p className="overflow-hidden">{doctorDetails?.About || "About"}</p>
          </div>

          {/* Right Side (Form) */}
          <div className="md:w-1/2 md:p-8 bg-gray-300 rounded-lg">
            <h2 className="text-center font-bold mb-12 mt-8 text-2xl">
              Book Appointment
            </h2>
            <form
              onSubmit={handleFormSubmit}
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
                required
              />
              {/* Time Field */}
              <select
                value={selectedTimeSlot}
                onChange={handleTimeSlotChange}
                className="border rounded-md px-3 py-2 mb-4"
              >
                <option value="">Select Time Slot</option>
                <option value="1">9:00 AM</option> {/* Hardcoded time slot */}
              </select>

              {/* Time Field
              <select
                value={selectedTimeSlot}
                onChange={handleTimeSlotChange}
                className="border rounded-md px-3 py-2 mb-4"
              >
                <option value="">Select Time Slot</option>
                {timeSlots.map((slot) => (
                  <option key={slot.id} value={slot.time}>
                    {slot.time}
                  </option>
                ))}
              </select> */}

              {/* Submit Button
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-blue-500 w-[70%] text-white px-4 py-2 mt-8 mb-6 lg:mb-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Payment
                </button>
              </div> */}

              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-blue-500 w-[70%] text-white px-4 py-2 mt-8 mb-6 lg:mb-4 rounded-md hover:bg-blue-600 transition duration-300"
                  id="payment-button"
                  onClick={handlePaymentButtonClick}
                >
                  Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookAppointment;

// import Layout from "../components/Layout/Layout";
// import doctor from "../assets/doctor.jpg";
// import { useState, useEffect } from "react";
// //import KhaltiCheckout from "khalti-checkout-web";

// const BookAppointment = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [date, setDate] = useState("");
//   const [timeSlots, setTimeSlots] = useState([]);
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

//   // useEffect(() => {
//   //   // Fetch time slots from the doctor's API endpoint
//   //   const fetchTimeSlots = async () => {
//   //     try {
//   //       const response = await fetch(
//   //         "http://localhost:8081/doctors/time-slots/1"
//   //       );
//   //       if (response.ok) {
//   //         const data = await response.json();
//   //         setTimeSlots(data.timeSlots); // Assuming the response contains an array of time slots
//   //       } else {
//   //         console.error("Failed to fetch time slots");
//   //       }
//   //     } catch (error) {
//   //       console.error("Error fetching time slots:", error);
//   //     }
//   //   };

//   //   fetchTimeSlots();
//   // }, []); // Fetch time slots only once when the component mounts

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };
//   const handleDateChange = (e) => {
//     setDate(e.target.value);
//   };
//   const handleTimeSlotChange = (e) => {
//     setSelectedTimeSlot(e.target.value);
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         "http://localhost:8081/patients/make-appointment",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name,
//             email,
//             date,
//             visitTime: selectedTimeSlot,
//           }),
//         }
//       );

//       if (response.ok) {
//         console.log("Appointment booked successfully");
//         // You can redirect or show a success message here if needed
//       } else {
//         console.error("Failed to book appointment");
//         // Handle error scenario
//       }
//     } catch (error) {
//       console.error("Error occurred:", error);
//       // Handle error scenario
//     }
//   };
//   const config = {
//     // replace this key with yours
//     publicKey: "test_public_key_dc74e0fd57cb46cd93832aee0a390234",
//     productIdentity: "1234567890",
//     productName: "Drogon",
//     productUrl: "http://gameofthrones.com/buy/Dragons",
//     eventHandler: {
//       onSuccess(payload) {
//         // hit merchant api for initiating verfication
//         console.log(payload);
//       },
//       // onError handler is optional
//       onError(error) {
//         // handle errors
//         console.log(error);
//       },
//       onClose() {
//         console.log("widget is closing");
//       },
//     },
//     paymentPreference: [
//       "KHALTI",
//       "EBANKING",
//       "MOBILE_BANKING",
//       "CONNECT_IPS",
//       "SCT",
//     ],
//   };

//   // const checkout = new KhaltiCheckout(config);

//   // const handlePaymentButtonClick = () => {
//   //   // minimum transaction amount must be 10, i.e 1000 in paisa.
//   //   checkout.show({ amount: 1000 });
//   // };

//   return (
//     <Layout>
//       <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//         <div className=" lg:max-w-[70%]  p-8 gap-x-4 rounded-lg shadow-md flex flex-col md:flex-row">
//           {/* Left Side (Image and Description) */}
//           <div className="md:w-1/2 mb-4 md:mb-0">
//             <img
//               src={doctor}
//               alt="Your Image"
//               className="w-full h-auto max-h-[60vh] rounded-lg mb-4"
//             />

//             <h2 className="font-bold">Dr. Shyam Bhattarai</h2>
//             <p className="text-gray-700">Dental Specialist</p>
//             <p className=" overflow-hidden">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro est
//               recusandae quos itaque ratione modi repudiandae quas dolorum
//               aliquam animi obcaecati tempora atque veniam aperiam optio
//               excepturi, vitae rem non!
//             </p>
//           </div>

//           {/* Right Side (Form) */}
//           <div className="md:w-1/2 md:pl-8 bg-gray-300 rounded-lg">
//             <h2 className="text-center font-bold mb-12 mt-8 text-2xl">
//               Book Appointment
//             </h2>
//             <form
//               type="submit"
//               onSubmit={handleFormSubmit}
//               className="flex flex-col w-[80%] mx-auto bg-white rounded-lg p-4 pb-0"
//             >
//               {/* Name Field */}
//               <label className="text-gray-700 mb-2" htmlFor="name">
//                 Name:
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="border rounded-md px-3 py-2 mb-4"
//                 onChange={handleNameChange}
//                 required
//               />

//               {/* Email Field */}
//               <label className="text-gray-700 mb-2" htmlFor="email">
//                 Email Address:
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="border rounded-md px-3 py-2 mb-4"
//                 onChange={handleEmailChange}
//                 required
//               />

//               {/* Date*/}
//               <label className="text-gray-700 mb-2" htmlFor="date">
//                 Date{" "}
//               </label>
//               <input
//                 type="date"
//                 id="date"
//                 name="date"
//                 className="border rounded-md px-3 py-2 mb-4"
//                 onChange={handleDateChange}
//                 required
//               />

//               {/* Time Field */}
//               <select
//                 value={selectedTimeSlot}
//                 onChange={handleTimeSlotChange}
//                 className="border rounded-md px-3 py-2 mb-4"
//               >
//                 {/* Default option */}
//                 <option value="">Select Time Slot</option>

//                 {/* Map through time slots and render options */}
//                 {timeSlots.map((slot) => (
//                   <option key={slot.id} value={slot.time}>
//                     {slot.time}
//                   </option>
//                 ))}
//               </select>

//               {/* Submit Button */}
//             </form>
//             <div className="flex justify-center items-center">
//               <button
//                 type="submit"
//                 className="bg-blue-500 w-[70%] text-white px-4 py-2 mt-8 mb-6 lg:mb-4 rounded-md hover:bg-blue-600 transition duration-300"
//                 id="payment-button"
//                 onClick={handlePaymentButtonClick}
//               >
//                 Payment
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default BookAppointment;
