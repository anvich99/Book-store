import { Button, CartList, Title, TotalCost, EmptyMessage, ArrowBack } from "components";
import { ROUTE } from "routes";
import { clearCart, selectCart, useAppDispatch, useAppSelector } from "store";
import { Template } from "templates";
import { StyledButtonClear } from "./styled";

export const CartPage = () => {
  const { amount, cartItems, totalCost } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Template>
      {amount < 1 ? (
        <EmptyMessage />
      ) : (
        <>
          <ArrowBack link={ROUTE.MAIN} />
          <Title>Your cart</Title>
          <CartList bookItems={cartItems} />
          <TotalCost total={totalCost} />
          <StyledButtonClear onClick={handleClearCart}>Clear</StyledButtonClear>
        </>
      )}
    </Template>
  );
};
