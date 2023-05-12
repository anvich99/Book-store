import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Header, Title } from "../../components";
import { addToCart, clearCart } from "store/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { selectorCart } from "store/selectors/cartSelectors";
import { fetchBooks } from "store/features/new/newBooks";
import { selectNewBooks } from "store/selectors/newBooks";
import { Book, BookAPI } from "types/types";

export const MainPage = () => {
  const [newBooks, setNewBooks] = useState<BookAPI>();
  const { books } = useAppSelector(selectNewBooks);
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(selectorCart);

  const handleAddToCart = () => {
    dispatch(addToCart({ id: 1, name: "dgshg" }));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <Container>
      <Header />
      <Title title="New Releases Books" />
      <button onClick={handleAddToCart}>add to cart</button>
      <button onClick={handleClearCart}>clear cart</button>
      <ul>
        {products.map((product: any) => {
          return <li>{product.name}</li>;
        })}
      </ul>
      <ul>
        {books.map((item) => {
          console.log(item);
          return <li>{item.title}</li>;
        })}
      </ul>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id earum, sed, nesciunt fuga
        dolorum nihil voluptatum fugit laboriosam neque velit cum. Dolores vel doloremque veritatis
        beatae corporis quasi possimus quam?
        <h1>lore5</h1>
      </div>
    </Container>
  );
};
