interface BookAPI {
  error: string;
  total: string;
  page?: string;
  books: Book[];
}
interface Book {
  image: string;
  isbn13: string;
  price: string;
  subtitle: string;
  title: string;
  url: string;
  rating?: string;
}

export type { BookAPI, Book };
