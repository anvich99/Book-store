import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, HeadlineThree, MediaBreakpoints, SublineText } from "ui";

const BookCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 352px;
  width: 100%;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    /* transition: 0.3s linear;
    border: 1px solid ${Colors.PrimaryLight}; */
  }
  ${MediaBreakpoints.md} {
    max-width: 328px;
  }
`;
const ImageBackground = styled.div`
  display: flex;
  justify-content: center;
  max-width: 352px;
  width: 100%;
  ${MediaBreakpoints.md} {
    max-width: 328px;
  }
`;
const BookImage = styled.img`
  max-width: 226px;
  ${MediaBreakpoints.md} {
    max-width: 210px;
  }
`;
const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const BookTitle = styled.p`
  ${HeadlineThree}
`;
const BookAuthor = styled.p`
  ${SublineText}
`;
const BookPrice = styled.p`
  ${HeadlineThree}
`;

export { BookCard, BookImage, BookTitle, BookAuthor, BookPrice, ImageBackground, BookInfo };
