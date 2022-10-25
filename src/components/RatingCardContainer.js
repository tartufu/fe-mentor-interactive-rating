import React, { useState, useEffect } from "react";

import ThankYouCard from "./ThankYouCard";
import RatingCard from "./RatingCard";

export default function RatingCardContainer() {
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  const [selectedRating, setSelectedRating] = useState(3);

  const [ratingArr, setRatingArr] = useState([
    { id: 1, val: 1, isSelected: false },
    { id: 2, val: 2, isSelected: false },
    { id: 3, val: 3, isSelected: false },
    { id: 4, val: 4, isSelected: false },
    { id: 5, val: 5, isSelected: false },
  ]);

  const ratingClickHandler = (id, val) => {
    setRatingArr((prevState) => {
      const ratingArrCopy = [...prevState];

      const selectedRatingIndex = ratingArrCopy.findIndex(
        (rating) => id === rating.id
      );

      const previousRatingIndex = ratingArrCopy.findIndex(
        (rating) => rating.isSelected
      );

      if (previousRatingIndex !== -1) {
        ratingArrCopy[previousRatingIndex].isSelected = false;
      }

      ratingArrCopy[selectedRatingIndex].isSelected = true;

      return ratingArrCopy;
    });

    setSelectedRating(val);
  };

  return (
    <div className="rating-card-box" style={{ minHeight: "350px" }}>
      {!ratingSubmitted && (
        <RatingCard
          ratingSubmitted={ratingSubmitted}
          setRatingSubmitted={setRatingSubmitted}
          ratingArr={ratingArr}
          setRatingArr={setRatingArr}
          ratingClickHandler={ratingClickHandler}
        />
      )}

      {ratingSubmitted && <ThankYouCard rating={selectedRating} />}
    </div>
  );
}
