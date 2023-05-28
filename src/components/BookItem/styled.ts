import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors, HeadlineThree, MediaBreakpoints, SublineText } from "ui";

const BookCard = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 30%;
  width: 100%;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    transition: 0.3s ease;
    background: white;
    box-shadow: 0px 2px 35px 14px rgba(13, 13, 13, 0.04);
  }
  ${MediaBreakpoints.md} {
    max-width: 48%;
  }
  ${MediaBreakpoints.sm} {
    max-width: 100%;
  }
`;
const ImageBackground = styled.div`
  display: flex;
  justify-content: center;
  max-width: 352px;
  width: 100%;
  ${MediaBreakpoints.md} {
    max-width: 315px;
  }
  ${MediaBreakpoints.sm} {
    max-width: 100%;
  }
`;
const BookImage = styled.img`
  max-width: 226px;
  ${MediaBreakpoints.md} {
    max-width: 210px;
  }
  ${MediaBreakpoints.sm} {
    max-width: 175px;
  }
`;
const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
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
