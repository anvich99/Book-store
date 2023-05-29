import React from "react";
import { InputSearch, Search, SearchBtn } from "./styled";
import { fetchBooksBySearch, useAppDispatch, useAppSelector } from "store";
import { SearchIcon } from "assets";
import { FieldValues, useForm } from "react-hook-form";
import { selectSearchBooks } from "store/selectors/searchBooksSelect";

interface SearchFormProps {
  placeholder: string;
}
export const SearchForm = ({ placeholder }: SearchFormProps) => {
  const { books, isLoading, error, page } = useAppSelector(selectSearchBooks);
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();

  const onSubmit = ({ searchValue }: FieldValues) => {
    dispatch(fetchBooksBySearch(searchValue));
  };

  return (
    <Search onSubmit={handleSubmit(onSubmit)}>
      <InputSearch type="text" placeholder={placeholder} {...register("searchValue")} />
      <SearchBtn>
        <SearchIcon />
      </SearchBtn>
    </Search>
  );
};
