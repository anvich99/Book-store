import { Button } from "components/Button/Button";
import styled from "styled-components";
import { BodyPrimary, BodySecondary, Colors, HeadlineTwo } from "ui";

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
  background-color: ${Colors.Primary};
  border: none;
  cursor: pointer;
  svg {
    path {
      stroke: ${Colors.White};
    }
  }
  :hover {
    svg {
      path {
        stroke: ${Colors.Red};
      }
    }
  }
  :active {
    svg {
      fill: ${Colors.Red};
      path {
        stroke: ${Colors.Red};
      }
    }
  }
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 448px;
  width: 100%;
  padding-top: 40px;
  border-top: 1px solid ${Colors.LightGrey};
`;
const CardContent = styled.div`
  display: grid;
  grid-template-columns: 100px 300px;
  grid-template-rows: auto auto;
  row-gap: 24px;
  justify-content: space-between;
`;
const CardButton = styled(Button)`
  max-width: 448px;
  width: 100%;
  padding: 18px 0 14px;
`;
const Price = styled.p`
  ${HeadlineTwo}
`;
const MoreInfoBtn = styled.button`
  border: none;
  background-color: transparent;
  ${BodySecondary}
`;
const Text = styled.p`
  ${BodyPrimary};
  color: ${Colors.Secondary};
`;
const Content = styled.p`
  text-align: end;
  ${BodyPrimary};
`;
const PreviewBook = styled.a`
  ${BodySecondary};
  text-decoration: none;
`;

export {
  BookCardWrapper,
  CardImageBackground,
  CardImage,
  CardInfo,
  CardContent,
  CardButton,
  Heart,
  Price,
  MoreInfoBtn,
  Text,
  Content,
  PreviewBook,
};
