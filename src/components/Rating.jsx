import React, { useState, useEffect } from "react";
import CreateRatingModal from "./CreateRatingModal";

const Rating = ({ doctorId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewData, setReviewData] = useState({
    rating: 0,
    comment: "",
  });
  const [reviews, setReviews] = useState([]);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle changes in the review data
  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReviewData({
      ...reviewData,
      [name]: value,
    });
  };

  // Function to handle submission of the review
  const handleSubmitReview = async () => {
    try {
      // Send reviewData to the backend API
      const response = await fetch("http://localhost:8081/doctor/review/2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });
      const data = await response.json();
      console.log(data); // Log the response from the server
      // Close the modal after successful submission
      closeModal();
      // Refetch reviews to update the list
      fetchReviews();
    } catch (error) {
      console.error("Error:", error);
      // Handle error, show error message to the user, etc.
    }
  };

  // Function to fetch reviews from the backend
  const fetchReviews = async (doctorId) => {
    try {
      // Fetch reviews from the backend API
      const response = await fetch(
        `http://localhost:8081/doctor/review/${doctorId}`
      );
      const data = await response.json();
      if (data.status) {
        // If the response status is true, update the reviews state with fetched data
        setReviews(data.review || []);
        console.log("sucess:", data.review);
      } else {
        console.error("Error fetching review:", data.message);
        // Handle error, show error message to the user, etc.
      }
    } catch (error) {
      console.error("Error fetching review:", error);
      // Handle error, show error message to the user, etc.
    }
  };

  // Fetch reviews when the component mounts
  useEffect(() => {
    fetchReviews(doctorId);
  }, [doctorId]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <svg
          key={i}
          className="w-4 h-4 text-yellow-300 me-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="lg:max-w-2xl w-full ml-0 p-4 pr-2 lg:ml-[20%]  bg-white shadow-md rounded-md my-8">
      {/* Your existing content goes here */}
      <div className="flex justify-between items-center mb-4">
        <button className="text-blue-400 font-bold" onClick={openModal}>
          + Add Review
        </button>
      </div>
      {/* Modal for creating a new review */}
      {isModalOpen && (
        <CreateRatingModal
          onClose={closeModal}
          onSubmit={handleSubmitReview}
          onReviewChange={handleReviewChange}
          rating={reviewData.rating}
          comment={reviewData.comment}
        />
      )}

      {/* Display fetched reviews */}
      <div className="mt-8">
        <hr className="border border-gray-300 mb-4" />
        <div className="flex justify-between items-center mx-6">
          <h2 className="text-xl font-bold mb-4 ">
            All Reviews <span>({reviews.length})</span>
          </h2>
        </div>
        {/* Map through fetched reviews and display them */}
        {reviews.map((review, index) => (
          <div key={index} className="border-b ml-10 pb-4 mb-2">
            <div className="text-gray-600 flex items-center">
              <div className="flex items-center">
                {renderStars(review.rating)}
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {review.rating}
                </span>
              </div>
              <div className="text-gray-600 text-sm ml-2">
                {review.patient_name}
              </div>
            </div>
            <div className="mt-2">{review.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
