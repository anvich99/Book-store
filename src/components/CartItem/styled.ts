import styled from "styled-components";
import { Colors, HeadlineThree, HeadlineTwo, MediaBreakpoints, SublineText } from "ui";

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 49px;
  border-bottom: 1px solid ${Colors.Secondary};
  ${MediaBreakpoints.sm} {
    flex-direction: column;
    gap: 20px;
  }
`;
const ItemBackgroundImage = styled.div`
  display: flex;
  justify-content: center;
  max-width: 256px;
  width: 100%;
  background-color: ${Colors.Blue};
  ${MediaBreakpoints.sm} {
    max-width: 100%;
  }
`;
const ItemImage = styled.img`
  max-width: 164px;
  ${MediaBreakpoints.sm} {
    max-width: 175px;
  }
`;
const ItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 32px;
  ${MediaBreakpoints.md} {
    padding-left: 0;
  }
`;
const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 300px;
`;
const ItemTitle = styled.p`
  ${HeadlineThree}
`;
const ItemInfo = styled.p`
  ${SublineText}
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const ItemAmount = styled.p`
  display: flex;
  align-items: center;
`;
const ItemPrice = styled.p`
  ${HeadlineTwo}
  ${MediaBreakpoints.md} {
    align-self: end;
  }
`;
const ItemCross = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  ${MediaBreakpoints.md} {
    align-self: start;
  }
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
  StyledItem,
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
