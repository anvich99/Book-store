import styled from "styled-components";
import { Colors } from "ui";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 48px 0;
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

export { StyledList };
