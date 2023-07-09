import React, { useEffect } from "react";
import { InputSearch, Search, SearchBtn } from "./styled";
import { fetchBooksBySearch, useAppDispatch, useAppSelector } from "store";
import { SearchIcon } from "assets";
import { FieldValues, useForm } from "react-hook-form";
import { selectSearchBooks } from "store/selectors/searchBooksSelect";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTE } from "routes";

interface SearchFormProps {
  placeholder: string;
}
export const SearchForm = ({ placeholder }: SearchFormProps) => {
  const { books, isLoading, error, page } = useAppSelector(selectSearchBooks);
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const { title } = useParams();
  const navigate = useNavigate();
  const onSubmit = ({ searchValue }: FieldValues) => {
    dispatch(fetchBooksBySearch(searchValue));
    navigate(`../${ROUTE.SEARCH}`);
  };
  useEffect(() => {
    if (title) {
      dispatch(fetchBooksBySearch(title));
    }
  }, [dispatch, title]);
  return (
    <Search onSubmit={handleSubmit(onSubmit)}>
      <InputSearch type="text" placeholder={placeholder} {...register("searchValue")} />
      <SearchBtn>
        <SearchIcon />
      </SearchBtn>
    </Search>
  );
};
