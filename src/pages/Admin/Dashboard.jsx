import React, { useState } from 'react';
import AdminHome from './AdminHome';
import { RiFileListFill } from 'react-icons/ri';
import { UserData } from '../../components/Admin/Data';
import LineChart from '../../components/Admin/LineChart';
import img from '../../assets/doctor.jpg';
const Dashboard = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 3, // Adjust the aspectRatio to control the height
    scales: {
      x: {
        type: 'category',
      },
      y: {
        // Add any other y-axis configurations you might need
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      filler: {
        propagate: false,
      },
      title: {
        display: true,
        text: 'Patient Report', // Your desired title
        font: {
          size: 16,
        },
        color: 'black',
      },
    },
  };

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'New Patient',
        data: UserData.map((data) => data.userGain),
        borderColor: '#FFA500',
        backgroundColor: 'rgba(255, 165, 0, 0.5)', // Adjust the alpha channel for transparency
        borderWidth: 2,
        pointBackgroundColor: '#FFA500', // Color of points
        pointBorderColor: '#FFA500', // Border color of points
      },
      {
        label: 'Old Patient',
        data: UserData.map((data) => data.userLost),
        backgroundColor: '#0000FF', // Adjust the alpha channel for transparency
        borderColor: '#0000FF',
        borderWidth: 2,
      },
    ],
  });

  return (
    <AdminHome>
      <div className="m-10 pb-10 h-[90vh] overflow-y-auto">
        <div className="flex max-w-full mb-6">
          <div className="p-4 m-4 w-1/5 h-40 bg-white rounded-2xl cursor-pointer shadow">
            <div className="flex justify-between">
              <RiFileListFill className="w-8 h-8 bg-slate-700 text-white" />
              <h2 className="text-xl font-bold mb-6">Appointments</h2>
            </div>
            <p className="text-center ml-5 text-3xl font-extrabold">1440</p>
          </div>
          <div className="p-4 m-4 w-1/5 h-40 bg-white rounded-2xl cursor-pointer shadow">
            <div className="flex justify-between">
              <RiFileListFill className="w-8 h-8 bg-slate-700 text-white" />
              <h2 className="text-xl font-bold mb-6">Appointments</h2>
            </div>
            <p className="text-center ml-5 text-3xl font-extrabold">1440</p>
          </div>
          <div className="p-4 m-4 w-1/5 h-40 bg-white rounded-2xl cursor-pointer shadow">
            <div className="flex justify-between">
              <RiFileListFill className="w-8 h-8 bg-slate-700 text-white" />
              <h2 className="text-xl font-bold mb-6">Appointments</h2>
            </div>
            <p className="text-center ml-5 text-3xl font-extrabold">1440</p>
          </div>
        </div>
        <div className="flex w-[98%]  gap-10">
          <div
            className="flex-2 bg-white"
            style={{ width: '700px', height: '400px' }}
          >
            <LineChart chartData={userData} options={chartOptions} />
          </div>
          <div className="flex-1 bg-slate-200">
            <h2 className="w-full bg-black text-white py-3 pl-3 rounded-md">
              Doctor List
            </h2>
            <div className="flex justify-between py-2">
              <h3 className="ml-4 font-medium">Doctor Name</h3>
              <p className="mr-8 font-medium">Status</p>
            </div>
            <div className="flex items-center justify-between p-2 py-1 bg-white mb-4">
              <div className="flex items-center space-x-4 ">
                <img src={img} alt="User" className="w-10 h-10 rounded-full" />
                <div className="flex flex-col">
                  <span className="text-lg font-bold">Dr. Sharah Ingram</span>
                  <span className="text-gray-500">(MBBS,MS)</span>
                </div>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Available
              </button>
            </div>
            <div className="flex items-center justify-between p-2 py-1 bg-white mb-4">
              <div className="flex items-center space-x-4 ">
                <img src={img} alt="User" className="w-10 h-10 rounded-full" />
                <div className="flex flex-col">
                  <span className="text-lg font-bold">Dr. Sharah Ingram</span>
                  <span className="text-gray-500">(MBBS,MS)</span>
                </div>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Available
              </button>
            </div>
            <div className="flex items-center justify-between p-2 py-1 bg-white mb-4">
              <div className="flex items-center space-x-4 ">
                <img src={img} alt="User" className="w-10 h-10 rounded-full" />
                <div className="flex flex-col">
                  <span className="text-lg font-bold">Dr. Sharah Ingram</span>
                  <span className="text-gray-500">(MBBS,MS)</span>
                </div>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Available
              </button>
            </div>
            <div className="flex items-center justify-between p-2 py-1 bg-white mb-4">
              <div className="flex items-center space-x-4 ">
                <img src={img} alt="User" className="w-10 h-10 rounded-full" />
                <div className="flex flex-col">
                  <span className="text-lg font-bold">Dr. Sharah Ingram</span>
                  <span className="text-gray-500">(MBBS,MS)</span>
                </div>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Available
              </button>
            </div>
            <div className="flex items-center justify-between p-2 py-1 bg-white mb-4">
              <div className="flex items-center space-x-4 ">
                <img src={img} alt="User" className="w-10 h-10 rounded-full" />
                <div className="flex flex-col">
                  <span className="text-lg font-bold">Dr. Sharah Ingram</span>
                  <span className="text-gray-500">(MBBS,MS)</span>
                </div>
              </div>
              <button className="bg-red-600 text-white px-4 py-2 rounded">
                Not Available
              </button>
            </div>
            <div className="flex items-center justify-between p-2 py-1 bg-white mb-4">
              <div className="flex items-center space-x-4 ">
                <img src={img} alt="User" className="w-10 h-10 rounded-full" />
                <div className="flex flex-col">
                  <span className="text-lg font-bold">Dr. Sharah Ingram</span>
                  <span className="text-gray-500">(MBBS,MS)</span>
                </div>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Available
              </button>
            </div>

            <div className="flex items-center justify-between p-2 py-1 bg-white mb-4">
              <div className="flex items-center space-x-4 ">
                <img src={img} alt="User" className="w-10 h-10 rounded-full" />
                <div className="flex flex-col">
                  <span className="text-lg font-bold">Dr. Sharah Ingram</span>
                  <span className="text-gray-500">(MBBS,MS)</span>
                </div>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded">
                Available
              </button>
            </div>

            {/* Add your doctor list content here */}
          </div>
        </div>
      </div>
    </AdminHome>
  );
};

export default Dashboard;
