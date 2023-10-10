import React, { useState } from "react";

function StarRating({ onChange }) {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    onChange(newRating); // Pass the selected rating back to the parent component
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`cursor-pointer ${
            star <= rating ? "text-yellow-400" : "text-gray-400"
          }`}
          onClick={() => handleRatingChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;
