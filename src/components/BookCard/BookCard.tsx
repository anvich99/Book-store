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
import { StarRating } from "components";
import { Book } from "types";
import { addToCart, selectCart, useAppDispatch, useAppSelector } from "store";

interface BookCardProps {
  books: Pick<
    Book,
    "authors" | "image" | "price" | "rating" | "publisher" | "year" | "language" | "url"
  >;
  addBookToCart: () => void;
  addToFavorite: () => void;
}
export const BookCard = ({ books, addBookToCart, addToFavorite }: BookCardProps) => {
  return (
    <BookCardWrapper>
      <CardImageBackground>
        <CardImage src={books.image} />
        <Heart onClick={addToFavorite}>
          <HeartIcon />
        </Heart>
      </CardImageBackground>
      <CardInfo>
        <CardContent>
          <Price>{books.price}</Price>
          <StarRating stars={+books.rating} />
          <Text>Author</Text>
          <Content>{books.authors}</Content>
          <Text>Publisher</Text>
          <Content>
            {books.publisher}, {books.year}
          </Content>
          <Text>Language</Text>
          <Content>{books.language}</Content>
          <Text>Format</Text>
          <Content>Paper book / ebook (PDF)</Content>
        </CardContent>
        <MoreInfoBtn>More details</MoreInfoBtn>
        <CardButton onClick={addBookToCart}>Add to cart</CardButton>
        <PreviewBook href={books.url}>Preview book</PreviewBook>
      </CardInfo>
    </BookCardWrapper>
  );
};
