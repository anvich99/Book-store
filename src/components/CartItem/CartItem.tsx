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
  ItemCross,
  ItemAmount,
  ItemMinus,
  ItemPlus,
  AmountValue,
} from "./styled";
import { CrossIcon } from "assets";
import { useAppDispatch } from "store";

interface CartItemProps {
  cartItem: Book;
}

export const CartItem = ({ cartItem }: CartItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <StyledCartItem>
      <ItemBackgroundImage>
        <ItemImage src={cartItem.image} alt={cartItem.title} />
      </ItemBackgroundImage>
      <ItemContent>
        <ItemTitle>{cartItem.title}</ItemTitle>
        <ItemInfo>
          {cartItem.authors}, {cartItem.publisher}, {cartItem.year}
        </ItemInfo>
        <ItemAmount>
          <ItemMinus />
          {/* <AmountValue>{amount}</AmountValue> */}
          <ItemPlus />
        </ItemAmount>
      </ItemContent>
      <ItemPrice>{cartItem.price}</ItemPrice>
      <ItemCross>
        <CrossIcon />
      </ItemCross>
    </StyledCartItem>
  );
};
