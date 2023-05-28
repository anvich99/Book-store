import { ArrowBack, BookCard, FormEmail, Swiper, Title } from "components";
import { MyTab } from "components/MyTab/MyTab";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ROUTE } from "routes";
import { addToCart, addToFavorite, selectNewBooks, useAppDispatch, useAppSelector } from "store";
import { fetchBookDeatails } from "store/features/bookDetails/bookDetails";
import { selectBookDetails } from "store/selectors/detailsSelector";

import { Template } from "templates";

export const BookPage = () => {
  const { books } = useAppSelector(selectNewBooks);
  const book = useAppSelector(selectBookDetails);

  const { isbn13 = "" } = useParams();
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(book));
  };
  const handleAddToFavorite = () => {
    dispatch(addToFavorite(book));
  };
  useEffect(() => {
    dispatch(fetchBookDeatails(isbn13));
  }, [dispatch, isbn13]);

  return (
    <Template>
      <ArrowBack link={ROUTE.MAIN} />
      <Title>{book.title} </Title>
      <BookCard books={book} addBookToCart={handleAddToCart} addToFavorite={handleAddToFavorite} />
      <MyTab description={book.desc} authors={book.authors} />
      <FormEmail />
      {/* <Swiper books={books} /> */}
    </Template>
  );
};
