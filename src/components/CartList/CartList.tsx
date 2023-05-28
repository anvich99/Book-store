import { CartItem } from "components/CartItem/CartItem";
import { StyledList } from "./styled";
import { Book } from "types";

interface CartListProps {
  bookItems: Book[];
}

export const CartList = ({ bookItems }: CartListProps) => {
  return (
    <StyledList>
      {bookItems.map((item) => {
        return <CartItem key={item.isbn13} cartItem={item} />;
      })}
    </StyledList>
  );
};
