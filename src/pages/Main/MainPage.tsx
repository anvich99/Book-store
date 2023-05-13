import React, { useEffect, useState } from "react";
import { Container } from "ui";
import { BooksList, Title } from "components";
import { addToCart, clearCart } from "store/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { selectCart } from "store/selectors/cartSelectors";
import { fetchBooks } from "store/features/new/newBooks";
import { selectNewBooks } from "store/selectors/newBooks";
import { Template } from "templates";

export const MainPage = () => {
  const { books, isLoading, error } = useAppSelector(selectNewBooks);
  const { products } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: 1, name: "dgshg" }));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <Container>
      <Template />
      <Title>New Releases Books</Title>
      <BooksList>
        {books.map((item) => {
          return (
            <li>
              <img src={item.image} />
            </li>
          );
        })}
      </BooksList>
    </Container>
  );
};
