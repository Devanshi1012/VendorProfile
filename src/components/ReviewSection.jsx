import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const sampleReviews = [
  { id: 1, name: "Alice", rating: 5, comment: "Excellent service and food!" },
  {
    id: 2,
    name: "Bob",
    rating: 4,
    comment: "Great experience, but could be improved.",
  },
  {
    id: 3,
    name: "Charlie",
    rating: 3,
    comment: "Average experience, not as expected.",
  },
];

function ReviewSection() {
  const [sortBy, setSortBy] = useState("date");
  const [reviews, setReviews] = useState(sampleReviews);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 1,
    comment: "",
  });

  const handleSortChange = (e) => setSortBy(e.target.value);

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
    setNewReview({ name: "", rating: 1, comment: "" });
    setShowReviewForm(false);
  };

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "date") return b.id - a.id;
    return 0;
  });

  const averageRating = (
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div className="px-6 py-8 bg-white shadow-lg rounded-lg mt-8 max-w-screen-lg mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Reviews</h2>

      <div className="mb-8">
        <h3 className="text-2xl text-gray-700 mb-2">
          Aggregate Rating: {averageRating} / 5
        </h3>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={
                index < averageRating ? "text-yellow-500" : "text-gray-300"
              }
            />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <label htmlFor="sort" className="block text-gray-700 font-medium mb-2">
          Sort Reviews By:
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={handleSortChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="date">Date</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="space-y-6">
        {sortedReviews.map((review) => (
          <div key={review.id} className="p-6 bg-gray-50 shadow-md rounded-lg">
            <h4 className="text-xl font-semibold text-gray-800">
              {review.name}
            </h4>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={
                    index < review.rating ? "text-yellow-500" : "text-gray-300"
                  }
                />
              ))}
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowReviewForm(!showReviewForm)}
        className="mt-8 w-full p-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {showReviewForm ? "Cancel" : "Write a Review"}
      </button>

      {showReviewForm && (
        <form
          onSubmit={handleReviewSubmit}
          className="mt-8 p-6 bg-gray-50 shadow-md rounded-lg"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">
            Write a Review
          </h3>
          <label className="block mb-4">
            <span className="block text-gray-700 font-medium mb-2">Name:</span>
            <input
              type="text"
              name="name"
              value={newReview.name}
              onChange={handleReviewChange}
              required
              className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block mb-4">
            <span className="block text-gray-700 font-medium mb-2">
              Rating:
            </span>
            <select
              name="rating"
              value={newReview.rating}
              onChange={handleReviewChange}
              required
              className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>
                  {star}
                </option>
              ))}
            </select>
          </label>
          <label className="block mb-6">
            <span className="block text-gray-700 font-medium mb-2">
              Comment:
            </span>
            <textarea
              name="comment"
              value={newReview.comment}
              onChange={handleReviewChange}
              required
              className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <button
            type="submit"
            className="w-full p-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default ReviewSection;
