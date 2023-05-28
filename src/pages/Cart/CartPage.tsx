import { Button, CartList, Title, TotalCost, EmptyMessage, ArrowBack } from "components";
import { ROUTE } from "routes";
import {
  calculateTotals,
  clearCart,
  removeItem,
  selectCart,
  useAppDispatch,
  useAppSelector,
} from "store";
import { Template } from "templates";
import { StyledButtonClear } from "./styled";

export const CartPage = () => {
  const { amount, cartItems, total } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  // const handleDeleteBook = () => {
  //   dispatch(removeItem());
  // };

  const calc = () => {
    dispatch(calculateTotals());
  };
  return (
    <Template>
      {cartItems.length < 1 ? (
        <EmptyMessage />
      ) : (
        <>
          <ArrowBack link={ROUTE.MAIN} />
          <Title>Your cart</Title>
          <CartList bookItems={cartItems} />
          <TotalCost total={total} />
          <StyledButtonClear onClick={handleClearCart}>Clear</StyledButtonClear>
        </>
      )}
    </Template>
  );
};
