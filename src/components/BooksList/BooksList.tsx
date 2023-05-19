import { BooksContainer } from "./styled";
import { BookItem } from "components";
import { NewBook } from "types";
interface BookListProps {
  books: NewBook[];
}
export const BooksList = ({ books }: BookListProps) => {
  return (
    <BooksContainer>
      {books.map((book) => {
        return <BookItem book={book} />;
      })}
    </BooksContainer>
  );
};
