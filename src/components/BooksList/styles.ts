import styled from "styled-components";
import { Colors } from "ui";

const BooksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px 32px;
  list-style-type: none;
  & > :nth-child(n + 5) > :nth-child(1) {
    background-color: ${Colors.Green};
  }
  & > :nth-child(2n) > :nth-child(1) {
    background-color: ${Colors.Orange};
  }
  & > :nth-child(3n) > :nth-child(1) {
    background-color: ${Colors.Blue};
  }
  & > :nth-child(3n + 1) > :nth-child(1) {
    background-color: ${Colors.Purple};
  }
`;
export { BooksContainer };
