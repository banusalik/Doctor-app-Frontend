import React from 'react';
import img from '../assets/doctor.jpg';
const UserInfo = () => {
  return (
    <div className="w-full lg:w-1/4 h-1/2 p-4 flex-col flex items-center justify-center bg-white">
      <img
        src={img}
        alt="user img"
        className="w-20 h-20 rounded-full border-2 border-black"
      />
      <div className="text-lg font-semibold">Shaun Tario</div>
      <div>Sheep@gmail.com</div>
      <div className="mb-6">
        Blood Group: <span className="font-semibold">A+</span>
      </div>
      <button className="py-2 mb-2 px-6 bg-black text-white rounded-md">
        Logout
      </button>
      <button className="py-2  px-6 bg-red-600 text-white rounded-md">
        Delete
      </button>
    </div>
  );
};

export default UserInfo;
