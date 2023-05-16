import React, { ReactNode } from "react";
import { BooksContainer } from "./styles";
interface Props {
  children: ReactNode;
}
export const BooksList = ({ children }: Props) => {
  return <BooksContainer> {children} </BooksContainer>;
};
