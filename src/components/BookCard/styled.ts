import { Button } from "components/Button/Button";
import styled from "styled-components";
import { BodyPrimary, BodySecondary, Colors, HeadlineTwo, MediaBreakpoints } from "ui";

const BookCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 128px;
  margin: 48px 0 72px;
  ${MediaBreakpoints.lg} {
    gap: 48px;
  }
  ${MediaBreakpoints.md} {
    flex-direction: column;
  }
`;
const CardImageBackground = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 50%;
  padding: 61px 0;
  width: 100%;
  background-color: ${Colors.Orange};
  ${MediaBreakpoints.md} {
    max-width: 100%;
    padding: 48px 0;
  }
`;
const CardImage = styled.img`
  max-width: 300px;
  ${MediaBreakpoints.sm} {
    max-width: 150px;
  }
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
  max-width: 50%;
  width: 100%;
  padding-top: 40px;
  border-top: 1px solid ${Colors.LightGrey};
  ${MediaBreakpoints.md} {
    max-width: 100%;
  }
`;
const CardContent = styled.div`
  display: grid;
  grid-template-columns: 30% 60%;
  grid-template-rows: auto auto;
  row-gap: 24px;
  justify-content: space-between;
`;
const CardButton = styled(Button)`
  max-width: 100%;
  width: 100%;
  padding: 18px 0 14px;
  margin-top: 59px;
  margin-bottom: 40px;
  ${MediaBreakpoints.lg} {
    max-width: 100%;
    margin-top: 48px;
  }
  ${MediaBreakpoints.md} {
    margin-top: 36px;
    margin-bottom: 32px;
  }
`;
const Price = styled.p`
  ${HeadlineTwo};
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
