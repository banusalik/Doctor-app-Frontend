import React, { useState, useEffect } from "react";
import CreateRatingModal from "./CreateRatingModal";

const Rating = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to manage review data
  const [reviewData, setReviewData] = useState({
    rating: 0,
    comment: "",
  });
  // State to store fetched reviews
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
  const fetchReviews = async () => {
    try {
      // Fetch reviews from the backend API
      const response = await fetch("http://localhost:8081/doctor/reviews/2");
      const data = await response.json();
      setReviews(data.reviews || []); // Update the reviews state with fetched data or an empty array
    } catch (error) {
      console.error("Error fetching reviews:", error);
      // Handle error, show error message to the user, etc.
    }
  };

  // Fetch reviews when the component mounts
  useEffect(() => {
    fetchReviews();
  }, []);

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
          isOpen={isModalOpen}
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
            <div className="text-lg font-bold">{review.author}</div>
            <div className="text-gray-600 flex">
              {/* Display star ratings here if available */}
              <div className="text-gray-600 text-sm">
                {review.date} <span>{review.time}</span>
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
