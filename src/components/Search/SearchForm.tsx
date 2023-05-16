import React from "react";
import { InputSearch, Search, SearchBtn } from "./styled";
import { fetchBooksBySearch, useAppDispatch } from "store";
import { SearchIcon } from "assets";
import { useForm } from "react-hook-form";

interface SearchFormProps {
  placeholder: string;
}
export const SearchForm = ({ placeholder }: SearchFormProps) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();

  const onSubmit = ({ searchValue }: any) => {
    dispatch(fetchBooksBySearch(searchValue));
  };

  return (
    <Search onSubmit={handleSubmit(onSubmit)}>
      <InputSearch type="text" placeholder={placeholder} {...register("searchValue")} />
      <SearchBtn type="submit">
        <SearchIcon />
      </SearchBtn>
    </Search>
  );
};
