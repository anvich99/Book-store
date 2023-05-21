import { CartItem } from "components/CartItem/CartItem";
import { EmptyMessage, StyledCartList } from "./styled";
import { Book } from "types";

interface CartListProps {
  bookItems: Book[];
}

export const CartList = ({ bookItems }: CartListProps) => {
  return (
    <StyledCartList>
      {bookItems.map((item) => {
        return <CartItem cartItem={item} />;
      })}
    </StyledCartList>
  );
};
