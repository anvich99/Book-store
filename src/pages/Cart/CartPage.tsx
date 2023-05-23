import { Button, CartList, Title, TotalCost, EmptyMessage } from "components";
import { clearCart, selectCart, useAppDispatch, useAppSelector } from "store";
import { Template } from "templates";

export const CartPage = () => {
  const { amount, cartItems, totalCost } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearCart);
  };

  return (
    <Template>
      {amount < 1 ? (
        <EmptyMessage />
      ) : (
        <>
          <Title>Your cart</Title>
          <CartList bookItems={cartItems} />
          <TotalCost total={totalCost} />
          <Button onClick={handleClearCart}>Clear</Button>
        </>
      )}
    </Template>
  );
};
