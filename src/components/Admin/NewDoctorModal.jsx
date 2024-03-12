import React, { useState } from 'react';

const NewDoctorModal = ({ onSubmit, onCancel }) => {
  const [doctorName, setDoctorName] = useState('');
  const [number, setNumber] = useState('');
  const [doctor, setDoctor] = useState('');
  const [department, setDepartment] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [status, setStatus] = useState('active');
  const [visitTime, setVisitTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      doctorName,
      number,
      department,
      visitTime,
      speciality,
      status,
    };
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[140%]  h-[90vh] overflow-y-auto mx-auto p-6 bg-white rounded-md shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Doctor</h2>
      <label className="block mb-4">
        <span className="text-gray-700">Doctor Name:</span>
        <input
          type="text"
          name="doctorName"
          value={doctorName}
          onChange={(e) => setDoctorName(e.target.value)}
          required
          className="form-input mt-1 py-2 block w-full border border-black rounded-md"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Doctor Number:</span>
        <input
          type="text"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          className="form-input mt-1 py-2 block w-full border border-black rounded-md"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Department:</span>
        <input
          type="text"
          name="doctor"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          required
          className="form-input mt-1 py-2 block w-full border border-black rounded-md"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Speciality:</span>
        <input
          type="text"
          name="speciality"
          value={speciality}
          onChange={(e) => setSpeciality(e.target.value)}
          required
          className="form-input mt-1 py-2 block w-full border border-black rounded-md"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Status:</span>
        <select
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
          className="form-select mt-1 block w-full border border-black rounded-md py-2"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          {/* Add other appointment types as needed */}
        </select>
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Visit Time:</span>
        <input
          type="time"
          name="visitTime"
          value={visitTime}
          onChange={(e) => setVisitTime(e.target.value)}
          required
          className="form-input mt-1 block w-full py-2 border border-black rounded-md"
        />
      </label>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
        >
          + Add Doctor
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewDoctorModal;
