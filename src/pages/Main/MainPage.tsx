import React, { useEffect } from "react";
import { Container } from "./styles";
import { Header, Title } from "../../components";
import { useDispatch } from "react-redux";
import { addToCart, clearCart } from "store/features/cart/cartSlice";

export const MainPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart());
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  useEffect(() => {});
  return (
    <Container>
      <Header />
      <Title title="New Releases Books" />
      <button onClick={handleAddToCart}>add to cart</button>
      <button onClick={handleClearCart}>clear cart</button>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id earum, sed, nesciunt fuga
        dolorum nihil voluptatum fugit laboriosam neque velit cum. Dolores vel doloremque veritatis
        beatae corporis quasi possimus quam?
        <h1>lore5</h1>
      </div>
    </Container>
  );
};
