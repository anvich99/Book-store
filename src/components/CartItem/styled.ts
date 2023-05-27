import styled from "styled-components";
import { Colors, HeadlineThree, HeadlineTwo, SublineText } from "ui";

const StyledCartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 49px;
  border-bottom: 1px solid ${Colors.Secondary};
`;
const ItemBackgroundImage = styled.div`
  display: flex;
  justify-content: center;
  max-width: 256px;
  width: 100%;
  background-color: ${Colors.Blue};
`;
const ItemImage = styled.img`
  max-width: 164px;
`;
const ItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 32px;
`;
const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const ItemTitle = styled.p`
  ${HeadlineThree}
`;
const ItemInfo = styled.p`
  ${SublineText}
`;
const ItemAmount = styled.p`
  display: flex;
  align-items: center;
`;
const ItemPrice = styled.p`
  ${HeadlineTwo}
`;
const ItemCross = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const ItemPlus = styled.button`
  padding: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const ItemMinus = styled.button`
  padding: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const AmountValue = styled.p`
  ${HeadlineThree}
`;
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
  ItemText,
};
