import { CartList, Title } from "components";
import { EmptyMessage } from "components/CartList/styled";
import { selectCart, useAppSelector } from "store";
import { Template } from "templates";

export const CartPage = () => {
  const { amount, cartItems } = useAppSelector(selectCart);
  return (
    <Template>
      {amount < 1 ? (
        <EmptyMessage>пусто не густо 😢</EmptyMessage>
      ) : (
        <>
          <Title>Your cart</Title>
          <CartList bookItems={cartItems} />
        </>
      )}
    </Template>
  );
};
