import styled from "styled-components";
import { Colors } from "ui";

const StyledCartItem = styled.li`
  padding-bottom: 49px;
  border: 1px solid ${Colors.Secondary};
`;
const ItemBackgroundImage = styled.div``;
const ItemImage = styled.img``;
const ItemContent = styled.div``;
const ItemTitle = styled.p``;
const ItemInfo = styled.p``;
const ItemAmount = styled.p``;
const ItemPrice = styled.p``;
const ItemCross = styled.button``;
const ItemPlus = styled.button``;
const ItemMinus = styled.button``;
const AmountValue = styled.p``;
export {
  StyledCartItem,
  ItemBackgroundImage,
  ItemImage,
  ItemInfo,
  ItemContent,
  ItemTitle,
  ItemPrice,
  ItemCross,
  ItemAmount,
  ItemPlus,
  ItemMinus,
  AmountValue,
};
