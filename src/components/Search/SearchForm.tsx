import React from "react";
import { InputSearch, Search, SearchBtn } from "./styled";
import { fetchBooksBySearch, useAppDispatch } from "store";
import { SearchIcon } from "assets";

interface SearchFormProps {
  placeholder: string;
}
export const SearchForm = ({ placeholder }: SearchFormProps) => {
  const dispatch = useAppDispatch();

  const onSubmit = (searchValue: string) => {
    dispatch(fetchBooksBySearch(searchValue));
  };

  return (
    <Search>
      <InputSearch placeholder={placeholder} />
      <SearchBtn>
        <SearchIcon />
      </SearchBtn>
    </Search>
  );
};
