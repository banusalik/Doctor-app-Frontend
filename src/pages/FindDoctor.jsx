import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

const FindDoctor = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [doctorData, setDoctorData] = useState([]);

  // Fetch all doctor data
  const fetchAllDoctorData = async () => {
    try {
      console.log("Fetching all doctor data...");
      const response = await fetch("http://localhost:8081/doctor/");
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched doctor data:", data);
        if (data.status) {
          setDoctorData(data.data); // Update state with fetched doctor data
        } else {
          console.error(data.message); // Log error message if status is false
        }
      } else {
        console.error("Error fetching doctor's data");
      }
    } catch (error) {
      console.error("Error fetching doctor's data:", error);
    }
  };

  useEffect(() => {
    // Fetch all doctor data when the component mounts
    fetchAllDoctorData();
  }, []);

  // Handle search button click
  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8081/doctor/search`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ doctor_name: searchQuery }),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.status) {
          setDoctorData(data.doctor); // Update state with fetched doctor data
        } else {
          console.error(data.message); // Log error message if status is false
        }
      } else {
        console.error("Error fetching search data");
      }
    } catch (error) {
      console.error("Error fetching search data:", error);
    }
  };

  return (
    <Layout>
      <div className="m-10">
        <h2 className="text-center mb-4 text-lg font-bold">Find Doctor</h2>
        <div className="flex justify-center h-[16vh] items-start">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 px-4 w-full lg:w-1/4 py-2 rounded-l-md focus:outline-none focus:border-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="bg-btnColor text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {doctorData?.map((doctor, index) => {
            return (
              <Link to={`/doctor-details/${doctor.Doctor_ID}`} key={index}>
                <Cards
                  Doctor_ID={doctor.Doctor_ID}
                  Image={doctor.Image || "/image"}
                  Doctor_Name={doctor.Doctor_Name || "/image"}
                  Speciality={doctor.Speciality}
                  Rating={doctor.Rating}
                  Phone_Number={doctor.Phone_Number ? 1 : 0}
                  Address={doctor.Address}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default FindDoctor;

// import React, { useState, useEffect } from "react";
// import Layout from "../components/Layout/Layout";
// import Cards from "../components/Cards";

// const FindDoctor = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [doctorData, setDoctorData] = useState([]);

//   const fetchDoctorData = async () => {
//     try {
//       const response = await fetch("http://localhost:8081/doctor");
//       if (response.ok) {
//         const data = await response.json();
//         if (data.status) {
//           setDoctorData(data.doctor); // Update state with fetched doctor data
//         } else {
//           console.error(data.message); // Log error message if status is false
//         }
//       } else {
//         console.error("Error fetching doctor's data");
//       }
//     } catch (error) {
//       console.error("Error fetching doctor's data:", error);
//     }
//   };

//   useEffect(() => {
//     // Fetch doctor data initially when the component mounts
//     fetchDoctorData();
//   }, []);

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(`http://localhost:8081/doctor/search`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ Doctor_name: searchQuery }),
//       });
//       if (response.ok) {
//         const data = await response.json();
//         if (data.status) {
//           setDoctorData(data.doctor); // Update state with fetched doctor data
//         } else {
//           console.error(data.message); // Log error message if status is false
//         }
//       } else {
//         console.error("Error fetching doctor's data");
//       }
//     } catch (error) {
//       console.error("Error fetching doctor's data:", error);
//     }
//   };

//   return (
//     <Layout>
//       <div className="m-10">
//         <h2 className="text-center mb-4 text-lg font-bold">Find Doctor</h2>
//         <div className="flex justify-center h-[16vh] items-start">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="border border-gray-300 px-4 w-full lg:w-1/4 py-2 rounded-l-md focus:outline-none focus:border-blue-500"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <button
//             className="bg-btnColor text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
//             onClick={handleSearch}
//           >
//             Search
//           </button>
//         </div>
//         <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {doctorData &&
//             doctorData.map((doctor, index) => (
//               <Cards
//                 key={index} // Use a unique key for each card
//                 imgSrc={doctor.Image}
//                 name={doctor.Doctor_Name}
//                 specialty={doctor.Bio}
//                 rating={doctor.Ticket_Price}
//                 ratingList={doctor.Phone_Number ? 1 : 0}
//                 location={doctor.Address}
//                 // link="/doctor-details"
//               />
//             ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default FindDoctor;
