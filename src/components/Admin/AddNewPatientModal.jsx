import React, { useState } from 'react';

const AddNewPatientModal = ({ onSubmit, onCancel }) => {
  const [patientName, setPatientName] = useState('');
  const [number, setNumber] = useState('');
  const [doctor, setDoctor] = useState('');
  const [appointmentType, setAppointmentType] = useState('checkup');
  const [visitDate, setVisitDate] = useState('');
  const [visitTime, setVisitTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      patientName,
      number,
      doctor,
      appointmentType,
      visitDate,
      visitTime,
    };
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[140%] h-[90vh] overflow-y-auto mx-auto p-6 bg-white rounded-md shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Add New Patient Appointment</h2>
      <label className="block mb-4">
        <span className="text-gray-700">Patient Name:</span>
        <input
          type="text"
          name="patientName"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
          className="form-input mt-1 py-2 block w-full border border-black rounded-md"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Number:</span>
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
        <span className="text-gray-700">Doctor:</span>
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
        <span className="text-gray-700">Appointment:</span>
        <select
          name="appointmentType"
          value={appointmentType}
          onChange={(e) => setAppointmentType(e.target.value)}
          required
          className="form-select mt-1 block w-full border border-black rounded-md py-2"
        >
          <option value="checkup">Dr.Ram</option>
          <option value="follow-up">Dr.Kumar</option>
          {/* Add other appointment types as needed */}
        </select>
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">First Visit:</span>
        <input
          type="date"
          name="visitDate"
          value={visitDate}
          onChange={(e) => setVisitDate(e.target.value)}
          required
          className="form-input mt-1 block w-full border border-black rounded-md py-2"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">No. of Visits:</span>
        <input
          type="number"
          name="visitDate"
          value={visitDate}
          onChange={(e) => setVisitDate(e.target.value)}
          required
          className="form-input mt-1 block w-full border border-black rounded-md py-2"
        />
      </label>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
        >
          + Add Appointment
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

export default AddNewPatientModal;
