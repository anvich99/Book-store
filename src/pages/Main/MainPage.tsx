import { useEffect } from "react";
import { BooksList, ErrorWindow, FormEmail, Spinner, Title } from "components";
import { useAppDispatch, useAppSelector, fetchNewBooks, selectNewBooks } from "store";
import { Template } from "templates";

export const MainPage = () => {
  const { books, isLoading, error } = useAppSelector(selectNewBooks);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewBooks());
  }, [dispatch]);

  return (
    <Template>
      {isLoading && <Spinner />}
      {error && <ErrorWindow error={error} />}
      <Title>New Releases Books</Title>
      <BooksList books={books} />
      <FormEmail />
    </Template>
  );
};
