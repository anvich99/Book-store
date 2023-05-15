import styled from "styled-components";
import { HeadlineThree, SublineText } from "ui";

const BookCard = styled.a`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 352px;
  width: 100%;
  /* max-height: 450px; */
  cursor: pointer;
`;
const ImageBackground = styled.div`
  display: flex;
  justify-content: center;
  max-width: 352px;
  width: 100%;
`;
const BookImage = styled.img`
  max-width: 226px;
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
