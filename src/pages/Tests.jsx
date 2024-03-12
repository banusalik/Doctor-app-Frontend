import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout/Layout';
import { FaSearch } from 'react-icons/fa';
import LabTestOrderModel from '../components/LabTestOrderModel';
import { Link } from 'react-router-dom';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const Tests = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedFileName(selectedFile ? selectedFile.name : '');
    // Handle the file as needed, for example, you can upload it to a server
    console.log('Selected File:', selectedFile);
  };
  const [selectedElements, setSelectedElements] = useState([]);
  const elementData = [
    { id: 1, name: '1 Hour Post Dinner', price: 10 },
    { id: 2, name: '24OH Vitamin D', price: 15 },
    { id: 3, name: '24Hrs Urinary Amylase', price: 20 },
    { id: 4, name: 'Blood Test', price: 25 },
    { id: 5, name: 'Ace Tone', price: 30 },
    { id: 6, name: '25 Hrs Urinary NA, K', price: 35 },
    { id: 7, name: 'ADA Test', price: 40 },
    { id: 8, name: '24 Hrs Urinary AFB', price: 45 },
    { id: 9, name: '24 Hrs Urinary Uric Acid', price: 50 },
    { id: 10, name: '24 Hrs Urinary Albumin', price: 55 },
    { id: 11, name: '24 Hrs Urinary Magnesium', price: 30 },
    { id: 12, name: '24 Hrs Urinary Urea', price: 30 },
    { id: 13, name: '24 Hrs Urine P/C Ratio', price: 30 },
    { id: 14, name: 'Absolute Esinophil Count(AEC)', price: 30 },
    { id: 15, name: '24 Hrs Urinary Creatine Clearance', price: 30 },
    { id: 16, name: '24 Hrs Urinary Creatine', price: 30 },
    { id: 17, name: '24 Hrs Urinary Protein', price: 30 },
    { id: 18, name: '24 Hrs Urinary Phosphorus', price: 30 },
  ];
  const toggleElementSelection = (element) => {
    // Check if the element is already selected
    const isSelected = selectedElements.some(
      (selectedElement) => selectedElement.id === element.id
    );

    if (isSelected) {
      // If selected, remove it from the list
      setSelectedElements((prevSelectedElements) =>
        prevSelectedElements.filter(
          (selectedElement) => selectedElement.id !== element.id
        )
      );
    } else {
      // If not selected, add it to the list
      setSelectedElements((prevSelectedElements) => [
        ...prevSelectedElements,
        element,
      ]);
    }
    console.log(selectedElements);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample data (replace with your actual data)
  const selectedTests = [
    { id: 1, name: 'Test A' },
    { id: 2, name: 'Test B' },
    // Add more tests as needed
  ];

  const openModal = () => {
    setIsModalOpen(true);
    console.log(isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSearch = () => {
    // You can perform the search logic here, for example, send a request to the server
    console.log('Search term:', searchTerm);
  };
  const calculateTotalPrice = () => {
    // Calculate the total price based on selected elements
    return selectedElements.reduce(
      (total, element) => total + element.price,
      0
    );
  };
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isModalOpen]);
  return (
    <Layout>
      <div className={`relative ${isModalOpen ? 'blur-sm' : ''}`}>
        <h2 className="text-center font-bold text-2xl mt-10 mb-10">
          Book Tests
        </h2>
        <div className="mx-5 lg:mx-20">
          <div className="flex justify-between bg-btnColor py-5 px-5  lg:py-10 lg:px-10 rounded-lg mb-10">
            <div>
              <h2 className="text-white mb-4 text-xl font-semibold">
                Upload Your Prescription
              </h2>
              <p className="text-white">
                Upload your prescription and we will call you shortly
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-red-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full  focus:outline-none focus:shadow-outline"
                onClick={handleButtonClick}
              >
                {selectedFileName ? selectedFileName : 'Upload'}
              </button>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="flex justify-between bg-blue-300 py-5 px-5  lg:py-10 lg:px-10 rounded-lg mb-10">
            <div>
              <h2 className="text-black mb-4 text-xl font-semibold">
                Need Help To Book Your Test?{' '}
              </h2>
              <p className="text-black">Click in the link for FAQ </p>
            </div>
            <div className="flex items-center justify-center">
              <Link to="/about">
                <button className="bg-white hover:bg-blue-700 text-blue-400 font-bold py-4 px-8 rounded-full  focus:outline-none focus:shadow-outline">
                  Click Here
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-end mb-10">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Find Tests..."
                className="border rounded-none  p-2 pr-20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 py-3 px-4 focus:outline-none focus:shadow-outline"
                onClick={handleSearch}
              >
                <FaSearch className="text-white" />
              </button>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {elementData.map((element) => (
                <button
                  key={element.id}
                  className={`border hover:bg-blue-500 p-2 border-black rounded-2xl relative ${
                    selectedElements.some(
                      (selectedElement) => selectedElement.id === element.id
                    )
                      ? ''
                      : ''
                  }`}
                  onClick={() => toggleElementSelection(element)}
                >
                  {element.name}
                  {selectedElements.some(
                    (selectedElement) => selectedElement.id === element.id
                  ) && (
                    <IoIosCheckmarkCircle className="absolute top-[-8px] right-[-7px] w-6 h-6 text-black bg-white rounded-full" />
                  )}
                </button>
              ))}
            </div>
            <div className="flex justify-between bg-btnColor mt-10 py-4 px-5 lg:py-5 lg:px-10 rounded-lg mb-10">
              <div className="text-white">
                <p>Number of elements selected: {selectedElements.length}</p>
                <p>Total Price: Rs.{calculateTotalPrice()}</p>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-white hover:bg-blue-700 text-blue-400 font-bold py-2 rounded-md px-6 lg:px-12 focus:outline-none focus:shadow-outline"
                  onClick={openModal}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Render the modal */}

        <LabTestOrderModel
          isOpen={isModalOpen}
          onClose={closeModal}
          totalPrice={calculateTotalPrice()}
          selectedTests={selectedElements}
        />
      </div>
    </Layout>
  );
};

export default Tests;
