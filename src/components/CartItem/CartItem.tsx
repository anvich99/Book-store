import React from "react";
import { Book } from "types";
import {
  StyledItem,
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
  ItemText,
} from "./styled";
import { CrossIcon, MinusIcon, PlusIcon } from "assets";
import { removeItem, selectCart, useAppDispatch, useAppSelector } from "store";
import { useParams } from "react-router-dom";

interface CartItemProps {
  cartItem: Book;
}

export const CartItem = ({ cartItem }: CartItemProps) => {
  const books = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const { isbn13 } = useParams();
  const handleDeleteBook = () => {
    dispatch(removeItem(isbn13));
  };
  return (
    <StyledItem key={cartItem.isbn13}>
      <ItemBackgroundImage>
        <ItemImage src={cartItem.image} alt={cartItem.title} />
      </ItemBackgroundImage>
      <ItemContent>
        <ItemText>
          <ItemTitle>{cartItem.title}</ItemTitle>
          <ItemInfo>
            {cartItem.authors}, {cartItem.publisher}, {cartItem.year}
          </ItemInfo>
          <ItemAmount>
            <ItemMinus>
              <MinusIcon />
            </ItemMinus>
            <AmountValue>1</AmountValue>
            <ItemPlus>
              <PlusIcon />
            </ItemPlus>
          </ItemAmount>
        </ItemText>

        <ItemPrice>{cartItem.price}</ItemPrice>
        <ItemCross onClick={handleDeleteBook}>
          <CrossIcon />
        </ItemCross>
      </ItemContent>
    </StyledItem>
  );
};
