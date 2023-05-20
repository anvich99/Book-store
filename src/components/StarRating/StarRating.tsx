import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Colors } from "ui";
interface StarRatingProps {
  stars: number;
}
export const StarRating = ({ stars }: StarRatingProps) => {
  return (
    <div className="App">
      <Rating initialValue={stars} readonly fillColor={Colors.Primary} size={16} />
    </div>
  );
};
