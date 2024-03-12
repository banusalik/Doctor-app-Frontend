// Assuming you're using React

import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

const CreateRatingModal = ({ onClose }) => {
  const [rating, setRating] = useState(0); // Initial rating state

  const handleStarClick = (star) => {
    setRating(star);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Create Review</h2>
          <span onClick={onClose} className="cursor-pointer">
            <IoCloseSharp className="w-8 h-8" />
          </span>
        </div>
        {/* Stars */}
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-6 h-6 lg:w-9 lg:h-9 cursor-pointer ${
                star <= rating ? 'text-yellow-300' : 'text-gray-400'
              }`}
              onClick={() => handleStarClick(star)}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
        </div>

        {/* Description */}
        <label className="block text-sm font-medium text-gray-700">
          Description:
        </label>
        <textarea
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          rows="4"
          placeholder="Enter your review..."
        ></textarea>

        {/* Close button */}
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={() => console.log('Submit Review')} // Replace with your logic
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default CreateRatingModal;
