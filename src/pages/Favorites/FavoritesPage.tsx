import { FavoriteList, Title } from "components";
import React from "react";
import { addToFavorite, selectFavoriteBooks, useAppDispatch, useAppSelector } from "store";
import { Template } from "templates";
import { Container } from "ui";

export const FavoritesPage = () => {
  const { favoriteBooks } = useAppSelector(selectFavoriteBooks);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Template>
        <Title>Favorites</Title>
        <FavoriteList books={favoriteBooks} />
      </Template>
    </Container>
  );
};
