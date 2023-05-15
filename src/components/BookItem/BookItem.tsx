import React from "react";
import {
  BookAuthor,
  BookCard,
  BookImage,
  BookInfo,
  BookPrice,
  BookTitle,
  ImageBackground,
} from "./styles";
import { NewBook } from "types";
interface BookItemProps {
  book: NewBook;
}
export const BookItem = ({ book }: BookItemProps) => {
  return (
    <BookCard>
      <ImageBackground>
        <BookImage src={book.image} alt="book" />
      </ImageBackground>
      <BookInfo>
        <BookTitle>{book.title}</BookTitle>
        <BookAuthor>{book.subtitle}</BookAuthor>
        <BookPrice>{book.price}</BookPrice>
      </BookInfo>
    </BookCard>
  );
};
