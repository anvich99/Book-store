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

// type BookCardProps = Pick<
//   Book,
//   "authors" | "image" | "price" | "rating" | "publisher" | "year" | "language" | "url"
// >;
interface BookCardProps {
  books: Pick<
    Book,
    "authors" | "image" | "price" | "rating" | "publisher" | "year" | "language" | "url"
  >;
  addBook: () => void;
}
export const BookCard = ({ books, addBook }: BookCardProps) => {
  // const book = useAppSelector(selectCart);
  // const dispatch = useAppDispatch();

  // const handleAddToCart = () => {
  //   dispatch(addToCart());
  // };

  return (
    <BookCardWrapper>
      <CardImageBackground>
        <CardImage src={books.image} />
        <Heart>
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
        <CardButton onClick={addBook}>Add to cart</CardButton>
        <PreviewBook href={books.url}>Preview book</PreviewBook>
      </CardInfo>
    </BookCardWrapper>
  );
};
