import React from "react";
import {
  ItemBackgroundImage,
  ItemContent,
  ItemImage,
  ItemInfo,
  ItemText,
  ItemTitle,
  FavItem,
} from "./styled";
import { Book } from "types";
import { addToFavorite, useAppDispatch } from "store";

interface FavoriteItemProps {
  favoriteItem: Book;
}
export const FavoriteItem = ({ favoriteItem }: FavoriteItemProps) => {
  return (
    <FavItem key={favoriteItem.isbn13}>
      <ItemBackgroundImage>
        <ItemImage src={favoriteItem.image} alt={favoriteItem.title} />
      </ItemBackgroundImage>
      <ItemContent>
        <ItemText>
          <ItemTitle>{favoriteItem.title}</ItemTitle>
          <ItemInfo>
            {favoriteItem.authors}, {favoriteItem.publisher}, {favoriteItem.year}
          </ItemInfo>
        </ItemText>
      </ItemContent>
    </FavItem>
  );
};
