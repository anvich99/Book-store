import { useEffect } from "react";
import { BookItem, BooksList, ErrorWindow, FormEmail, Spinner, Title } from "components";
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

  // const handleAddToCart = () => {
  //   dispatch(addToCart());
  // };
  // const handleClearCart = () => {
  //   dispatch(clearCart());
  // };

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <Template>
      {isLoading && <Spinner />}
      {error && <ErrorWindow error={error} />}
      <Title>New Releases Books</Title>
      <BooksList>
        {books.map((item) => {
          return <BookItem book={item} />;
        })}
      </BooksList>
      <FormEmail />
    </Template>
  );
};
