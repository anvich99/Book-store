import { StyledList } from "components/CartList/styled";
import { FavoriteItem } from "components/FaviriteItem/FavoriteItem";
import React from "react";
import { Book } from "types";

interface FavoriteListProps {
  books: Book[];
}
export const FavoriteList = ({ books }: FavoriteListProps) => {
  return (
    <StyledList>
      {books.map((item) => {
        return <FavoriteItem key={item.isbn13} favoriteItem={item} />;
      })}
    </StyledList>
  );
};
