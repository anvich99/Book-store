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
  Content,
  Text,
  CardContent,
  PreviewBook,
} from "./styled";
import { HeartIcon } from "assets";
import { StarRating } from "components/StarRating/StarRating";
import { Book } from "types";

type BookCardProps = Pick<
  Book,
  "authors" | "image" | "price" | "rating" | "publisher" | "year" | "language" | "url"
>;

export const BookCard = ({
  image,
  price,
  rating,
  authors,
  publisher,
  year,
  language,
  url,
}: BookCardProps) => {
  return (
    <BookCardWrapper>
      <CardImageBackground>
        <CardImage src={image} />
        <Heart>
          <HeartIcon />
        </Heart>
      </CardImageBackground>
      <CardInfo>
        <CardContent>
          <Price>{price}</Price>
          <StarRating stars={+rating} />
          <Text>Author</Text>
          <Content>{authors}</Content>
          <Text>Publisher</Text>
          <Content>
            {publisher}, {year}
          </Content>
          <Text>Language</Text>
          <Content>{language}</Content>
          <Text>Format</Text>
          <Content>Paper book / ebook (PDF)</Content>
        </CardContent>
        <MoreInfoBtn>More details</MoreInfoBtn>
        <CardButton type="submit">Add to cart</CardButton>
        <PreviewBook href={url}>Preview book</PreviewBook>
      </CardInfo>
    </BookCardWrapper>
  );
};
