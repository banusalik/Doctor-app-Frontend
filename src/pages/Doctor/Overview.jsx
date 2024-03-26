import React from "react";
import img from "../../assets/doctor.jpg";

const Overview = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <figure className="w-full flex items-center lg:w-1/3">
          <img src={img} alt="doctor img" />
        </figure>
        <div className="card-body mt-4 lg:mt-10 p-4 lg:w-1/2">
          <span className="bg-[#C0E8EB] text-gray-600 w-full  lg:w-2/5 text-center py-1 rounded-sm">
            Surgery Specialist
          </span>
          <h2 className="card-title text-2xl font-bold">Dr. Shyam Bahadur</h2>

          <h3 className="card-title text-base font-light mb-0 lg:mb-6">
            Specialization in Surgery
          </h3>
        </div>
      </div>
      <div className="mx-2 mt-10">
        <h1 className="font-bold text-2xl mb-4">About Dr. Shya, Bahadur</h1>
        <p className="mb-4">Lorem ipsum</p>
      </div>
      <div className="mb-6">
        <h2 className="font-bold text-lg">Education</h2>
        <h4 className="text-[#7192F4]">2003-2007</h4>
        <div className="mb-2">
          <h2 className="font-bold text-lg">Phd in Surgery</h2>
          <div className="flex justify-between items-center space-x-4">
            <h4 className="text-[#7192F4]">2003-2007</h4>
            <h4>New Apolo Hospital</h4>
          </div>
        </div>
        <div className="mb-2">
          <h2 className="font-bold text-lg">Md</h2>
          <div className="flex justify-between items-center space-x-4">
            <h4 className="text-[#7192F4]">2003-2007</h4>
            <h4>New Apolo Hospital</h4>
          </div>
        </div>
        <div className="mb-2">
          <h2 className="font-bold text-lg">MBBS</h2>
          <div className="flex justify-between items-center space-x-4">
            <h4 className="text-[#7192F4]">2003-2007</h4>
            <h4>New Apolo Hospital</h4>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-lg mb-4">Experience</h2>
        <div className="flex gap-x-4">
          <div className="bg-[#7192F4] px-3 py-5 rounded-lg">
            <h4 className="text-black">2003-2007</h4>
            <p>Residental Surgeon for hospital</p>
          </div>
          <div className="bg-[#7192F4] px-3 py-5 rounded-lg">
            <h4 className="text-black">2003-2007</h4>
            <p>Residental Surgeon for hospital</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
