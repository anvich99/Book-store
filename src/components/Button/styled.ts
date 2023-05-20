import styled from "styled-components";
import { Colors, ButtonText } from "ui";

const StyledButton = styled.button`
  border: none;
  background-color: ${Colors.Primary};
  ${ButtonText}
  cursor: pointer;
  &:hover {
    transition: 0.2s linear;
    background: ${Colors.PrimaryLight};
  }
  &:active {
    background: ${Colors.PrimaryLight};
  }
`;

export { StyledButton };
