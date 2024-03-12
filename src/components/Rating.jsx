import React, { useState } from 'react';
import CreateRatingModal from './CreateRatingModal';

const Rating = () => {
  // Sample data for illustration
  const totalRating = 4.5;
  const starRatings = { 5: 10, 4: 5, 3: 3, 2: 2, 1: 1 };

  // Calculate total number of reviews
  const totalReviews = Object.values(starRatings).reduce(
    (acc, curr) => acc + curr,
    0
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="lg:max-w-2xl w-full ml-0 p-4 pr-2 lg:ml-[20%]  bg-white shadow-md rounded-md my-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-black flex items-center justify-center ml-2  lg:ml-10 font-bold italic gap-x-4 text-5xl">
            {totalRating}
            <svg
              className="w-6 h-6 lg:w-9 lg:h-9 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </p>
        </div>
        <div className="w-2/3">
          <div>
            <div className="flex items-center mb-2">
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                4.95
              </p>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                out of
              </p>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                5
              </p>
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              1,745 global ratings
            </p>
            <div className="flex items-center mt-4">
              <a
                href="#"
                className="text-sm font-medium  dark:text-blue-500 hover:underline"
              >
                5
              </a>
              <div className="w-3/4 h-3 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  className="h-3 bg-yellow-300 rounded"
                  style={{ width: '70%' }}
                />
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                70%
              </span>
            </div>
            <div className="flex items-center mt-4">
              <a
                href="#"
                className="text-sm font-medium  dark:text-blue-500 hover:underline"
              >
                4
              </a>
              <div className="w-3/4 h-3 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  className="h-3 bg-yellow-300 rounded"
                  style={{ width: '17%' }}
                />
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                17%
              </span>
            </div>
            <div className="flex items-center mt-4">
              <a
                href="#"
                className="text-sm font-medium  dark:text-blue-500 hover:underline"
              >
                3
              </a>
              <div className="w-3/4 h-3 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  className="h-3 bg-yellow-300 rounded"
                  style={{ width: '8%' }}
                />
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                8%
              </span>
            </div>
            <div className="flex items-center mt-4">
              <a
                href="#"
                className="text-sm font-medium  dark:text-blue-500 hover:underline"
              >
                2
              </a>
              <div className="w-3/4 h-3 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  className="h-3 bg-yellow-300 rounded"
                  style={{ width: '4%' }}
                />
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                4%
              </span>
            </div>
            <div className="flex items-center mt-4">
              <a
                href="#"
                className="text-sm font-medium  dark:text-blue-500 hover:underline"
              >
                1
              </a>
              <div className="w-3/4 h-3 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                <div
                  className="h-3 bg-yellow-300 rounded"
                  style={{ width: '1%' }}
                />
              </div>
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                1%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <hr className="border border-gray-300 mb-4" />
        <div className="flex justify-between items-center mx-6">
          <h2 className="text-xl font-bold mb-4 ">
            All Reviews <span>(3)</span>
          </h2>
          <button className="text-blue-400 font-bold" onClick={openModal}>
            + Add Review
          </button>
        </div>
        {isModalOpen && <CreateRatingModal onClose={closeModal} />}

        {[1, 2, 3].map((index) => (
          <div key={index} className="border-b ml-10 pb-4 mb-2">
            <p className="text-lg font-bold">John Doe</p>
            <p className="text-gray-600 flex">
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>{' '}
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>{' '}
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>{' '}
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>{' '}
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>{' '}
              <p className="text-gray-600 text-sm">
                2022-01-28 <span>11:20 AM</span>
              </p>
            </p>
            <p className="mt-2">Great product! Loved it.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
