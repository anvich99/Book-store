import { useEffect } from "react";
import { Container } from "ui";
import { BookItem, BooksList, Title } from "components";
import {
  addToCart,
  clearCart,
  useAppDispatch,
  useAppSelector,
  selectCart,
  fetchBooks,
  selectNewBooks,
} from "store";
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
      <Template>
        <Title>New Releases Books</Title>
        <BooksList>
          {books.map((item) => {
            return <BookItem book={item} />;
          })}
        </BooksList>
      </Template>
    </Container>
  );
};
