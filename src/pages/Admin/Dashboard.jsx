import React, { useState, useEffect } from "react";
import AdminHome from "./AdminHome";
import { RiFileListFill } from "react-icons/ri";
import { UserData } from "../../components/Admin/Data";
import PieChart from "../../components/Admin/PieChart";
import img from "../../assets/doctor.jpg";

const Dashboard = () => {
  const [appointmentCount, setAppointmentCount] = useState(0);
  const [todayAppointmentCount, setTodayAppointmentCount] = useState(0);
  const [doctorList, setDoctorList] = useState([]);
  const [notificationStatus, setNotificationStatus] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8081/admin/index");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (!data.status) {
        throw new Error("API returned error status");
      }
      setAppointmentCount(data.data.appointmentCount);
      setTodayAppointmentCount(data.data.todayAppointmentCount);

      const doctorResponse = await fetch("http://localhost:8081/admin/doctors");
      if (!doctorResponse.ok) {
        throw new Error("Network response was not ok");
      }
      const doctorData = await doctorResponse.json();
      if (!doctorData.status) {
        throw new Error("API returned error status");
      }
      setDoctorList(doctorData.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const sendNotificationEmail = async () => {
    try {
      const response = await fetch("http://localhost:8081/admin/send-email", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setNotificationStatus(data.message);
    } catch (error) {
      console.error("Error sending notification email:", error);
      setNotificationStatus("Error sending notification email");
    }
  };

  return (
    <AdminHome>
      <div className="m-10 pb-10 h-[90vh] overflow-y-auto">
        <div className="flex max-w-full mb-6">
          <div className="p-4 m-4 w-1/5 h-40 bg-white rounded-2xl cursor-pointer shadow">
            <div className="flex justify-between">
              <RiFileListFill className="w-8 h-8 bg-slate-700 text-white" />
              <h2 className="text-xl font-bold mb-6">Appointments</h2>
            </div>
            <p className="text-center ml-5 text-3xl font-extrabold">
              {appointmentCount}
            </p>
          </div>
          <div className="p-4 m-4 w-1/5 h-40 bg-white rounded-2xl cursor-pointer shadow">
            <div className="flex justify-between">
              <RiFileListFill className="w-8 h-8 bg-slate-700 text-white" />
              <h2 className="text-xl font-bold mb-6">Today's Appointments</h2>
            </div>
            <p className="text-center ml-5 text-3xl font-extrabold">
              {todayAppointmentCount}
            </p>
          </div>
          <div className="p-4 m-4 w-1/5 h-40 bg-white rounded-2xl cursor-pointer shadow">
            <div className="flex justify-between">
              <RiFileListFill className="w-8 h-8 bg-slate-700 text-white" />
              <h2 className="text-xl font-bold mb-6">Reminder of the day</h2>
            </div>
            <button
              className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-4 hover:brightness-110 hover:-translate-y-1 hover:border-b-6 active:border-b-2 active:brightness-90 active:translate-y-2"
              onClick={sendNotificationEmail}
            >
              Notify
            </button>
            {notificationStatus && (
              <p className="text-center mt-2 text-sm text-red-500">
                {notificationStatus}
              </p>
            )}
          </div>
        </div>

        <div className="flex w-[98%] gap-10">
          <div
            className="flex-2 bg-white"
            style={{ width: "700px", height: "400px" }}
          >
            <PieChart />
          </div>

          <div className="flex-1 bg-slate-200">
            <h2 className="w-full bg-black text-white py-3 pl-3 rounded-md">
              Doctor List
            </h2>
            {doctorList.map((doctor) => (
              <div
                key={doctor.Doctor_ID}
                className="flex items-center justify-between p-2 py-1 bg-white mb-4"
              >
                <div className="flex items-center space-x-4 ">
                  <img
                    src={img}
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg font-bold">
                      {doctor.Doctor_Name || "Doctor Name"}
                    </span>
                    <span className="text-gray-500">
                      {doctor.Specialization_at}
                    </span>
                  </div>
                </div>
                <button
                  className={`bg-${
                    doctor.Doctor_Name ? "green" : "red"
                  }-600 text-white px-4 py-2 rounded`}
                >
                  {doctor.Doctor_Name ? "Available" : "Not Available"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminHome>
  );
};

export default Dashboard;

// import React, { useState, useEffect } from "react";
// import AdminHome from "./AdminHome";
// import { RiFileListFill } from "react-icons/ri";
// import { Line } from "react-chartjs-2";
// import { UserData } from "../../components/Admin/Data";
// import LineChart from "../../components/Admin/LineChart";
// import img from "../../assets/doctor.jpg";

// const Dashboard = () => {
//   const [appointmentCount, setAppointmentCount] = useState(0);
//   const [todayAppointmentCount, setTodayAppointmentCount] = useState(0);
//   const [doctorList, setDoctorList] = useState([]);
//   const [chartData, setChartData] = useState({
//     labels: [],
//     datasets: [],
//   });

//   useEffect(() => {
//     // Fetch data from API and update chartData state
//     // Example:
//     // fetchChartDataFromAPI().then(data => setChartData(data));
//   }, []);

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     aspectRatio: 3,
//     scales: {
//       x: {
//         type: "category",
//       },
//       y: {},
//     },
//     plugins: {
//       legend: {
//         display: true,
//         position: "top",
//       },
//       filler: {
//         propagate: false,
//       },
//       title: {
//         display: true,
//         text: "Patient Report",
//         font: {
//           size: 16,
//         },
//         color: "black",
//       },
//     },
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch("http://localhost:8081/admin/index");
//       const data = await response.json();
//       if (data.status) {
//         const { appointmentCount, todayAppointmentCount, patientReport } =
//           data.data;
//         setAppointmentCount(appointmentCount);
//         setTodayAppointmentCount(todayAppointmentCount);
//       }

//       const doctorResponse = await fetch("http://localhost:8081/admin/doctors");
//       const doctorData = await doctorResponse.json();
//       if (doctorData.status) {
//         setDoctorList(doctorData.data);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <AdminHome>
//       <div className="m-10 pb-10 h-[90vh] overflow-y-auto">
//         <div className="flex max-w-full mb-6">
//           <div className="p-4 m-4 w-1/5 h-40 bg-white rounded-2xl cursor-pointer shadow">
//             <div className="flex justify-between">
//               <RiFileListFill className="w-8 h-8 bg-slate-700 text-white" />
//               <h2 className="text-xl font-bold mb-6">Appointments</h2>
//             </div>
//             <p className="text-center ml-5 text-3xl font-extrabold">
//               {appointmentCount}
//             </p>
//           </div>
//           <div className="p-4 m-4 w-1/5 h-40 bg-white rounded-2xl cursor-pointer shadow">
//             <div className="flex justify-between">
//               <RiFileListFill className="w-8 h-8 bg-slate-700 text-white" />
//               <h2 className="text-xl font-bold mb-6">Today's Appointments</h2>
//             </div>
//             <p className="text-center ml-5 text-3xl font-extrabold">
//               {todayAppointmentCount}
//             </p>
//           </div>
//           <div className="p-4 m-4 w-1/5 h-40 bg-white rounded-2xl cursor-pointer shadow">
//             <div className="flex justify-between">
//               <RiFileListFill className="w-8 h-8 bg-slate-700 text-white" />
//               <h2 className="text-xl font-bold mb-6">Reminder of the day</h2>
//             </div>
//             <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-4 hover:brightness-110 hover:-translate-y-1 hover:border-b-6 active:border-b-2 active:brightness-90 active:translate-y-2">
//               Notify
//             </button>
//           </div>
//         </div>

//         <div className="flex w-[98%] gap-10">
//           <div
//             className="flex-2 bg-white"
//             style={{ width: "700px", height: "400px" }}
//           >
//             <LineChart chartData={chartData} options={chartOptions} />
//           </div>

//           <div className="flex-1 bg-slate-200">
//             <h2 className="w-full bg-black text-white py-3 pl-3 rounded-md">
//               Doctor List
//             </h2>
//             {doctorList.map((doctor) => (
//               <div
//                 key={doctor.Doctor_ID}
//                 className="flex items-center justify-between p-2 py-1 bg-white mb-4"
//               >
//                 <div className="flex items-center space-x-4 ">
//                   <img
//                     src={img}
//                     alt="User"
//                     className="w-10 h-10 rounded-full"
//                   />
//                   <div className="flex flex-col">
//                     <span className="text-lg font-bold">
//                       {doctor.Doctor_Name || "Doctor Name"}
//                     </span>
//                     <span className="text-gray-500">
//                       {doctor.Specialization_at}
//                     </span>
//                   </div>
//                 </div>
//                 <button
//                   className={`bg-${
//                     doctor.Doctor_Name ? "green" : "red"
//                   }-600 text-white px-4 py-2 rounded`}
//                 >
//                   {doctor.Doctor_Name ? "Available" : "Not Available"}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </AdminHome>
//   );
// };

// export default Dashboard;
