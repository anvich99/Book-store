import { Button } from "components/Button/Button";
import styled from "styled-components";
import { BodySecondary, Colors, HeadlineTwo } from "ui";

const BookCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 48px 0 72px;
`;
const CardImageBackground = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 544px;
  padding: 61px 122px;
  width: 100%;
  background-color: ${Colors.Orange};
`;
const CardImage = styled.img`
  max-width: 300px;
`;
const Heart = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  max-width: 56px;
  padding: 16px;
  background-color: ${Colors.Blue};
  border: none;
  cursor: pointer;
`;
const CardInfo = styled.div`
  max-width: 448px;
  width: 100%;
  border-top: 1px solid ${Colors.LightGrey};
`;
const CardButton = styled(Button)`
  max-width: 448px;
  padding: 18px 172px 14px;
`;
const Price = styled.p`
  ${HeadlineTwo}
`;
const MoreInfoBtn = styled.button`
  border: none;
  background-color: transparent;
  ${BodySecondary}
`;
export {
  BookCardWrapper,
  CardImageBackground,
  CardImage,
  CardInfo,
  CardButton,
  Heart,
  Price,
  MoreInfoBtn,
};
