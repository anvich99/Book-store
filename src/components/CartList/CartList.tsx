import { CartItem } from "components/CartItem/CartItem";
import { StyledCartList } from "./styled";
import { Book } from "types";

interface CartListProps {
  bookItems: Book[];
}

export const CartList = ({ bookItems }: CartListProps) => {
  return (
    <StyledCartList>
      {bookItems.map((item) => {
        return <CartItem key={item.isbn13} cartItem={item} />;
      })}
    </StyledCartList>
  );
};
