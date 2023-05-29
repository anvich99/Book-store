import { BooksList, Spinner, Title } from "components";
import React from "react";
import { selectSearchBooks, useAppDispatch, useAppSelector } from "store";
import { Template } from "templates";

export const SearchPage = () => {
  const { isLoading, books, error } = useAppSelector(selectSearchBooks);
  const dispatch = useAppDispatch();

  return (
    <Template>
      <Title>search results</Title>
      {isLoading && <Spinner />}
      {error && <div>{error}</div>}
      {books?.length > 0 && <BooksList books={books} />}
    </Template>
  );
};
