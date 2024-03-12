import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import img from '../../assets/doctor.jpg';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';

const DocProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const [qualifications, setQualifications] = useState([
    { degree: 'MD', university: 'Medical University' },
  ]);

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const [gender, setGender] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [experiences, setExperiences] = useState([
    {
      startDate: '2020-01-01',
      endDate: '2022-01-01',
      position: 'Doctor',
      hospital: 'City Hospital',
    },
  ]);

  const [timeSlots, setTimeSlots] = useState([
    { day: 'Monday', startTime: '09:00 AM', endTime: '05:00 PM' },
  ]);

  const addQualification = () => {
    setQualifications([...qualifications, { degree: '', university: '' }]);
  };
  const removeQualification = (index) => {
    const updatedQualifications = [...qualifications];
    updatedQualifications.splice(index, 1);
    setQualifications(updatedQualifications);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      { startDate: '', endDate: '', position: '', hospital: '' },
    ]);
  };

  const addTimeSlot = () => {
    setTimeSlots([...timeSlots, { day: '', startTime: '', endTime: '' }]);
  };
  const removeExperience = (index) => {
    const updatedExperiences = [...experiences];
    updatedExperiences.splice(index, 1);
    setExperiences(updatedExperiences);
  };

  const removeTimeSlot = (index) => {
    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots.splice(index, 1);
    setTimeSlots(updatedTimeSlots);
  };
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log('Profile updated!');
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row mx-2 lg:mx-11 mt-20 p-4 gap-x-10">
        <div className="w-3/4 mb-10 lg:mb-0 mx-auto lg:mx-0 bg-white lg:w-2/6 h-1/2 p-4 flex-col flex items-center rounded-2xl mt-4 justify-center ">
          <button
            className={`w-40 p-2 mb-2 ${
              activeTab === 'overview'
                ? 'bg-[#D5D5D5] text-black rounded-lg'
                : ''
            }`}
            onClick={() => handleTabClick('overview')}
          >
            Overview
          </button>
          <button
            className={`w-40 p-2 mb-2 ${
              activeTab === 'appointment'
                ? 'bg-[#D5D5D5] text-black rounded-lg'
                : ''
            }`}
            onClick={() => handleTabClick('appointment')}
          >
            Appointment
          </button>
          <button
            className={`w-40 p-2 mb-10 ${
              activeTab === 'profile'
                ? 'bg-[#D5D5D5] text-black rounded-lg'
                : ''
            }`}
            onClick={() => handleTabClick('profile')}
          >
            Profile
          </button>
          <button className="py-2 mb-2 px-6 bg-black text-white rounded-md">
            Logout
          </button>
          <button className="py-2  px-6 bg-red-600 text-white rounded-md">
            Delete
          </button>
        </div>

        {/* right section */}

        {/* Right Section with Container */}
        <div className="w-full lg:w-3/6 p-4">
          {/* Content based on activeTab */}
          {activeTab === 'overview' && (
            <div>
              <div className="flex flex-col lg:flex-row">
                <figure className="w-full flex items-center lg:w-1/3">
                  <img src={img} alt="doctor img" />
                </figure>
                <div className="card-body mt-4 lg:mt-10 p-4 lg:w-1/2">
                  <span className="bg-[#C0E8EB] text-gray-600 w-full  lg:w-2/5 text-center py-1 rounded-sm">
                    Surgery Specialist
                  </span>
                  <h2 className="card-title text-2xl font-bold">
                    Dr. Shyam Bahadur
                  </h2>

                  <h3 className="card-title text-base font-light mb-0 lg:mb-6">
                    Specialization in Surgery
                  </h3>
                </div>
              </div>
              <div className="mx-2 mt-10">
                <h1 className="font-bold text-2xl mb-4">
                  About Dr. Shya, Bahadur
                </h1>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio sequi sapiente vel nulla quisquam est repellat
                  nisi. Fuga deserunt ex officiis ut praesentium doloribus
                  aperiam quia voluptate nam officia non doloremque similique
                  corrupti maxime odio animi, deleniti nostrum culpa sed
                  pariatur aliquid quas tempore? Quas similique consequatur
                  aperiam eos quod dolorum ipsa deleniti magni laborum sint!
                  Deserunt laboriosam voluptate vel!
                </p>
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
          )}
          {activeTab === 'appointment' && (
            <div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b">Name</th>
                      <th className="py-2 px-4 border-b">Gender</th>
                      <th className="py-2 px-4 border-b">Payment</th>
                      <th className="py-2 px-4 border-b">Price</th>
                      <th className="py-2 px-4 border-b">Booked On</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">
                        <div className="flex items-center">
                          <img
                            className="w-8 h-8 rounded-full mr-2"
                            src="https://placekitten.com/40/40"
                            alt="Profile"
                          />
                          <div>
                            <p className="font-bold">John Doe</p>
                            <p className="text-gray-500">john.doe@gmail.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b text-center">Male</td>
                      <td className="py-2 px-4 border-b">Credit Card</td>
                      <td className="py-2 px-4 border-b">Paid</td>

                      <td className="py-2 px-4 border-b">2024-01-24</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">
                        <div className="flex items-center">
                          <img
                            className="w-8 h-8 rounded-full mr-2"
                            src="https://placekitten.com/40/40"
                            alt="Profile"
                          />
                          <div>
                            <p className="font-bold">John Doe</p>
                            <p className="text-gray-500">john.doe@gmail.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b text-center">Male</td>
                      <td className="py-2 px-4 border-b">Credit Card</td>
                      <td className="py-2 px-4 border-b">Paid</td>

                      <td className="py-2 px-4 border-b">2024-01-24</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">
                        <div className="flex items-center">
                          <img
                            className="w-8 h-8 rounded-full mr-2"
                            src="https://placekitten.com/40/40"
                            alt="Profile"
                          />
                          <div>
                            <p className="font-bold">John Doe</p>
                            <p className="text-gray-500">john.doe@gmail.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b text-center">Male</td>
                      <td className="py-2 px-4 border-b">Credit Card</td>
                      <td className="py-2 px-4 border-b">Paid</td>

                      <td className="py-2 px-4 border-b">2024-01-24</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">
                        <div className="flex items-center">
                          <img
                            className="w-8 h-8 rounded-full mr-2"
                            src="https://placekitten.com/40/40"
                            alt="Profile"
                          />
                          <div>
                            <p className="font-bold">John Doe</p>
                            <p className="text-gray-500">john.doe@gmail.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b text-center">Male</td>
                      <td className="py-2 px-4 border-b">Credit Card</td>
                      <td className="py-2 px-4 border-b">Paid</td>

                      <td className="py-2 px-4 border-b">2024-01-24</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">
                        <div className="flex items-center">
                          <img
                            className="w-8 h-8 rounded-full mr-2"
                            src="https://placekitten.com/40/40"
                            alt="Profile"
                          />
                          <div>
                            <p className="font-bold">John Doe</p>
                            <p className="text-gray-500">john.doe@gmail.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b text-center">Male</td>
                      <td className="py-2 px-4 border-b">Credit Card</td>
                      <td className="py-2 px-4 border-b">Paid</td>

                      <td className="py-2 px-4 border-b">2024-01-24</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">
                        <div className="flex items-center">
                          <img
                            className="w-8 h-8 rounded-full mr-2"
                            src="https://placekitten.com/40/40"
                            alt="Profile"
                          />
                          <div>
                            <p className="font-bold">John Doe</p>
                            <p className="text-gray-500">john.doe@gmail.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-4 border-b text-center">Male</td>
                      <td className="py-2 px-4 border-b">Credit Card</td>
                      <td className="py-2 px-4 border-b">Paid</td>

                      <td className="py-2 px-4 border-b">2024-01-24</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeTab === 'profile' && (
            <div className="bg-white rounded-2xl pt-4 px-5">
              <form
                onSubmit={handleUpdateProfile}
                className="container mx-auto p-4"
              >
                <h1 className="text-2xl font-bold mb-4">Doctor Profile</h1>

                {/* Basic Information */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2">
                    Profile Information
                  </h2>
                  <div className=" gap-4">
                    <div>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-2 border mb-2 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-2 border mb-2  rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full p-2 border mb-2 rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="bio">Bio</label>
                      <textarea
                        id="bio"
                        rows="2"
                        className="w-full p-2 border mb-2 rounded-md"
                        required
                      ></textarea>
                    </div>
                    <div className="col-span-2">
                      <div className="flex space-x-4">
                        <div>
                          <label htmlFor="gender">Gender</label>
                          <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="w-full p-2 border mb-2 border-black rounded-md focus:outline-none focus:border-blue-500"
                            required
                          >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="specialization">Specialization</label>
                          <select
                            id="specialization"
                            value={specialization}
                            onChange={(e) => setSpecialization(e.target.value)}
                            className="w-full p-2 border border-black rounded-md focus:outline-none focus:border-blue-500"
                            required
                          >
                            <option value="">Select Specialization</option>
                            <option value="cardiologist">Cardiologist</option>
                            <option value="dermatologist">Dermatologist</option>
                            <option value="pediatrician">Pediatrician</option>
                            {/* Add more options as needed */}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="ticketPrice">Ticket Price</label>
                          <input
                            type="text"
                            id="ticketPrice"
                            className="w-full p-2 border rounded-md"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Qualifications */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2">Qualifications</h2>
                  {qualifications.map((qualification, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 mb-2">
                      <div>
                        <label htmlFor={`degree-${index}`}>Degree</label>
                        <input
                          type="text"
                          id={`degree-${index}`}
                          value={qualification.degree}
                          onChange={(e) => {
                            const updatedQualifications = [...qualifications];
                            updatedQualifications[index].degree =
                              e.target.value;
                            setQualifications(updatedQualifications);
                          }}
                          className="w-full p-2 border  rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor={`university-${index}`}>
                          University
                        </label>
                        <input
                          type="text"
                          id={`university-${index}`}
                          value={qualification.university}
                          onChange={(e) => {
                            const updatedQualifications = [...qualifications];
                            updatedQualifications[index].university =
                              e.target.value;
                            setQualifications(updatedQualifications);
                          }}
                          className=" p-2 border  rounded-md"
                          required
                        />
                      </div>
                      <div className="flex ">
                        <button
                          type="button"
                          onClick={() => removeQualification(index)}
                          className=" mt-5"
                        >
                          <MdDelete className="w-6 h-6 text-red-500" />
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={addQualification}
                    className="bg-blue-500 text-white px-4 py-2"
                  >
                    Add Qualification
                  </button>
                </div>

                {/* Experiences */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2">Experiences</h2>
                  {experiences.map((experience, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4 mb-2">
                      <div>
                        <label htmlFor={`startDate-${index}`}>Start Date</label>
                        <input
                          type="date"
                          id={`startDate-${index}`}
                          value={experience.startDate}
                          onChange={(e) => {
                            const updatedExperiences = [...experiences];
                            updatedExperiences[index].startDate =
                              e.target.value;
                            setExperiences(updatedExperiences);
                          }}
                          className="w-full p-2 border  rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor={`endDate-${index}`}>End Date</label>
                        <input
                          type="date"
                          id={`endDate-${index}`}
                          value={experience.endDate}
                          onChange={(e) => {
                            const updatedExperiences = [...experiences];
                            updatedExperiences[index].endDate = e.target.value;
                            setExperiences(updatedExperiences);
                          }}
                          className="w-full p-2 border rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor={`position-${index}`}>Position</label>
                        <input
                          type="text"
                          id={`position-${index}`}
                          value={experience.position}
                          onChange={(e) => {
                            const updatedExperiences = [...experiences];
                            updatedExperiences[index].position = e.target.value;
                            setExperiences(updatedExperiences);
                          }}
                          className="w-full p-2 border rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor={`hospital-${index}`}>Hospital</label>
                        <input
                          type="text"
                          id={`hospital-${index}`}
                          value={experience.hospital}
                          onChange={(e) => {
                            const updatedExperiences = [...experiences];
                            updatedExperiences[index].hospital = e.target.value;
                            setExperiences(updatedExperiences);
                          }}
                          className="w-full p-2 border rounded-md"
                          required
                        />
                      </div>
                      <div className="col-span-1">
                        <button
                          type="button"
                          onClick={() => removeExperience(index)}
                          className=""
                        >
                          <MdDelete className="w-6 h-6 text-red-500" />
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={addExperience}
                    className="bg-blue-500 text-white px-4 py-2"
                  >
                    Add Experience
                  </button>
                </div>

                {/* Time Slots */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold mb-2">Time Slots</h2>
                  {timeSlots.map((slot, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 mb-2">
                      <div>
                        <label htmlFor={`day-${index}`}>Day</label>
                        <select
                          id={`day-${index}`}
                          value={slot.day}
                          onChange={(e) => {
                            const updatedTimeSlots = [...timeSlots];
                            updatedTimeSlots[index].day = e.target.value;
                            setTimeSlots(updatedTimeSlots);
                          }}
                          className="w-full p-2 border rounded-md focus:outline-none border-black focus:border-blue-500"
                        >
                          <option value="" disabled>
                            Select Day
                          </option>
                          {daysOfWeek.map((day) => (
                            <option key={day} value={day}>
                              {day}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor={`startTime-${index}`}>Start Time</label>
                        <input
                          type="time"
                          id={`startTime-${index}`}
                          value={slot.startTime}
                          onChange={(e) => {
                            const updatedTimeSlots = [...timeSlots];
                            updatedTimeSlots[index].startTime = e.target.value;
                            setTimeSlots(updatedTimeSlots);
                          }}
                          className="w-full p-2 border rounded-md"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor={`endTime-${index}`}>End Time</label>
                        <input
                          type="time"
                          id={`endTime-${index}`}
                          value={slot.endTime}
                          onChange={(e) => {
                            const updatedTimeSlots = [...timeSlots];
                            updatedTimeSlots[index].endTime = e.target.value;
                            setTimeSlots(updatedTimeSlots);
                          }}
                          className="w-full p-2 border rounded-md"
                          required
                        />
                      </div>
                      <div className="col-span-1">
                        <button
                          type="button"
                          onClick={() => removeTimeSlot(index)}
                          className=""
                        >
                          <MdDelete className="w-6 h-6 text-red-500" />
                        </button>
                      </div>
                    </div>
                  ))}
                  <button
                    onClick={addTimeSlot}
                    className="bg-blue-500 text-white px-4 py-2"
                  >
                    Add Time Slot
                  </button>
                </div>

                {/* About and Image */}
                <div>
                  <h2 className="text-xl font-bold mb-2">About</h2>
                  <textarea
                    id="about"
                    rows="4"
                    className="w-full p-2 border mb-4"
                    required
                  ></textarea>
                  <label htmlFor="image" className="text-xl font-bold mb-2">
                    Add Image
                  </label>
                  <div className="flex items-center mt-2 gap-x-2">
                    {uploadedImage && (
                      <img
                        src={uploadedImage}
                        alt="Profile"
                        className="w-12 h-12 rounded-full mb-4"
                      />
                    )}
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="w-full p-2 border mb-4"
                      required
                    />
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DocProfile;
