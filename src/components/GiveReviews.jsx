import React, { useState } from 'react';

const GiveReviews = () => {
  const [review, setReview] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("Review submitted:", review);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Leave a Review</h3>
      <textarea 
        placeholder="Write your feedback..." 
        value={review}
        onChange={(e) => setReview(e.target.value)}
        disabled={isSubmitted}
        required
      />
      <button type="submit" disabled={isSubmitted}>
        {isSubmitted ? "Review Submitted" : "Submit"}
      </button>
    </form>
  );
};

export default GiveReviews;
