import { BooksList, Title } from "components";
import React from "react";
import { selectSearchBooks, useAppDispatch, useAppSelector } from "store";
import { Template } from "templates";

export const SearchPage = () => {
  const { books } = useAppSelector(selectSearchBooks);
  const dispatch = useAppDispatch();

  return (
    <Template>
      <Title>search results</Title>
      {books?.length > 0 && <BooksList books={books} />}
    </Template>
  );
};
