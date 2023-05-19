import React from "react";
import {
  BookCardWrapper,
  CardButton,
  CardImage,
  CardImageBackground,
  CardInfo,
  Heart,
  MoreInfoBtn,
  Price,
} from "./styled";
import { HeartIcon } from "assets";
import { StarRating } from "components/StarRating/StarRating";

interface BookCardProps {
  src: string;
  price: string;
  rating: number;
}

export const BookCard = ({ src, price, rating }: BookCardProps) => {
  return (
    <BookCardWrapper>
      <CardImageBackground>
        <CardImage src={src} />
        <Heart>
          <HeartIcon />
        </Heart>
      </CardImageBackground>
      <CardInfo>
        <Price>{price}</Price>
        <StarRating stars={rating} />
        <MoreInfoBtn>More details</MoreInfoBtn>
        <CardButton type="submit">Add to cart</CardButton>
      </CardInfo>
    </BookCardWrapper>
  );
};
