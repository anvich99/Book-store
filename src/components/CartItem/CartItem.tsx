import React from "react";
import { Book } from "types";
import {
  StyledCartItem,
  ItemBackgroundImage,
  ItemContent,
  ItemImage,
  ItemInfo,
  ItemPrice,
  ItemTitle,
} from "./styled";

// type CartItemProps = Pick<Book, "title" | "authors" | "price" | "publisher" | "year" | "image">;
interface CartItemProps {
  cartItem: Book;
}
export const CartItem = ({ cartItem }: CartItemProps) => {
  return (
    <StyledCartItem>
      <ItemBackgroundImage>
        <ItemImage src={cartItem.image} />
      </ItemBackgroundImage>
      <ItemContent>
        <ItemTitle>{cartItem.title}</ItemTitle>
        <ItemInfo>
          {cartItem.authors}, {cartItem.publisher}, {cartItem.year}
        </ItemInfo>
      </ItemContent>
      <ItemPrice>{cartItem.price}</ItemPrice>
    </StyledCartItem>
  );
};
