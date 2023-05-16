interface NewBookAPI {
  error: string | null;
  total: string;
  books: NewBook[];
}
interface BookAPI {
  error: string | null;
  total: string;
  pages: string;
  books: Book[];
}
interface SearchBooksAPI {
  error: string | null;
  total: string;
  page: string;
  books: NewBook[];
}
interface NewBook {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
  rating?: string;
}
interface Book {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf?: {};
}
export type { BookAPI, NewBook, NewBookAPI, Book, SearchBooksAPI };
