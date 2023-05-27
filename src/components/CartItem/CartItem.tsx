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
  ItemText,
} from "./styled";
import { CrossIcon, MinusIcon, PlusIcon } from "assets";
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
        <ItemCross>
          <CrossIcon />
        </ItemCross>
      </ItemContent>
    </StyledCartItem>
  );
};
